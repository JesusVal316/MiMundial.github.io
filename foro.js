
// SISTEMA DE COMENTARIOS Y LIKES PARA EL FORO - MEJORADO
class SistemaComentariosForo {
    constructor() {
        this.publicaciones = new Map();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.cargarPublicacionesAprobadas(); // Cargar publicaciones aprobadas
        this.setupResponsiveComentarios();
        this.cargarDatosGuardados();
        this.agregarBotonesComentar();
    }

    setupEventListeners() {
        // Botones de like en publicaciones
        document.addEventListener('click', (e) => {
            if (e.target.closest('.action-btn') && !e.target.closest('.comment-toggle')) {
                const btn = e.target.closest('.action-btn');
                this.toggleLikePublicacion(btn);
            }
        });

        // Botones para mostrar/ocultar comentarios
        document.addEventListener('click', (e) => {
            if (e.target.closest('.comment-toggle')) {
                const btn = e.target.closest('.comment-toggle');
                this.toggleComentarios(btn);
            }
        });

        // Botones de like en comentarios
        document.addEventListener('click', (e) => {
            if (e.target.closest('.comment-action') && e.target.closest('.comment-action').textContent.includes('Me gusta')) {
                const btn = e.target.closest('.comment-action');
                this.toggleLikeComentario(btn);
            }
        });

        // Botones de responder en comentarios
        document.addEventListener('click', (e) => {
            if (e.target.closest('.comment-action') && e.target.closest('.comment-action').textContent.includes('Responder')) {
                const btn = e.target.closest('.comment-action');
                this.mostrarFormularioRespuesta(btn);
            }
        });

        // Botones de comentar (nuevos)
        document.addEventListener('click', (e) => {
            if (e.target.closest('.btn-comentar')) {
                const btn = e.target.closest('.btn-comentar');
                this.mostrarFormularioComentario(btn);
            }
        });

        // Envío de respuestas
        document.addEventListener('submit', (e) => {
            if (e.target.classList.contains('form-respuesta-comentario')) {
                e.preventDefault();
                this.enviarRespuesta(e.target);
            }
        });

        // Envío de comentarios principales
        document.addEventListener('submit', (e) => {
            if (e.target.classList.contains('form-comentario-principal')) {
                e.preventDefault();
                this.enviarComentarioPrincipal(e.target);
            }
        });
    }

//Asegurar que todas las publicaciones tengan botón de comentar
    agregarBotonesComentar() {
        const publicaciones = document.querySelectorAll('.publicacion-foro');
        
        publicaciones.forEach(publicacion => {
            const contenedorComentarios = publicacion.querySelector('.comments-container');
            const btnComentarExistente = publicacion.querySelector('.btn-comentar');
            
            // Solo agregar si no existe ya un botón de comentar
            if (!btnComentarExistente) {
                const btnComentar = document.createElement('button');
                btnComentar.className = 'btn-comentar';
                btnComentar.textContent = '💬 Agregar comentario';
                btnComentar.style.marginTop = '10px';
                btnComentar.style.padding = '8px 16px';
                btnComentar.style.background = '#007BFF';
                btnComentar.style.color = 'white';
                btnComentar.style.border = 'none';
                btnComentar.style.borderRadius = '4px';
                btnComentar.style.cursor = 'pointer';
                
                // Insertar al inicio del contenedor de comentarios
                if (contenedorComentarios) {
                    contenedorComentarios.insertBefore(btnComentar, contenedorComentarios.firstChild);
                }
            }
        });
    }

    cargarPublicacionesAprobadas() {
        // Cargar publicaciones aprobadas del localStorage
        const publicacionesAprobadas = JSON.parse(localStorage.getItem('publicacionesAprobadas')) || [];
        
        // Cargar también publicaciones originales del HTML
        const publicacionesOriginales = document.querySelectorAll('.publicacion-foro');
        
        publicacionesOriginales.forEach((pub, index) => {
            const pubId = `pub-${index + 1}`;
            
            this.publicaciones.set(pubId, {
                likes: parseInt(pub.querySelector('.action-btn:first-child span').textContent) || 0,
                comentarios: this.obtenerComentariosIniciales(pub),
                liked: pub.querySelector('.action-btn:first-child').classList.contains('liked'),
                respuestas: []
            });
        });

         // Cargar publicaciones aprobadas - CORREGIDO
        publicacionesAprobadas.forEach((pub) => {
            const pubId = `pub-aprobada-${pub.id}`;
            
            // Verificar si ya tenemos datos guardados para esta publicación
            const datosGuardados = this.publicaciones.get(pubId);
            
            if (datosGuardados) {
                // Usar los datos guardados (con comentarios)
                this.publicaciones.set(pubId, datosGuardados);
            } else {
                // Usar datos básicos de la publicación aprobada
                this.publicaciones.set(pubId, {
                    likes: pub.likes || 0,
                    comentarios: pub.comentarios || [],
                    liked: false,
                    respuestas: []
                });
            }
        });

        // Actualizar contadores
        this.actualizarTodosLosContadores();
        this.agregarBotonesComentar();
    }

    obtenerComentariosIniciales(publicacion) {
        const comentarios = [];
        const elementosComentarios = publicacion.querySelectorAll('.comment');
        
        elementosComentarios.forEach((comentario, index) => {
            comentarios.push({
                id: `com-${index + 1}`,
                usuario: comentario.querySelector('.comment-username').textContent,
                avatar: comentario.querySelector('.comment-avatar').src,
                texto: comentario.querySelector('.comment-text').textContent,
                fecha: comentario.querySelector('.comment-date').textContent,
                likes: 0,
                liked: false,
                respuestas: []
            });
        });

        return comentarios;
    }

    mostrarFormularioComentario(btn) {
        const publicacion = btn.closest('.publicacion-foro');
        const contenedorComentarios = publicacion.querySelector('.comments-container');
        
        // Mostrar contenedor de comentarios si está oculto
        if (contenedorComentarios.style.display === 'none') {
            contenedorComentarios.style.display = 'block';
            publicacion.querySelector('.comment-toggle').classList.add('activo');
        }
        
        // Remover formularios existentes
        const formulariosExistentes = contenedorComentarios.querySelectorAll('.form-comentario-principal');
        formulariosExistentes.forEach(form => form.remove());
        
        // Crear nuevo formulario
        const formulario = document.createElement('form');
        formulario.className = 'form-comentario-principal';
        formulario.innerHTML = `
            <div class="nuevo-comentario-container">
                <div class="input-comentario-principal-container">
                    <input type="text" class="input-comentario-principal" placeholder="Escribe un comentario..." required>
                    <div class="botones-comentario-principal">
                        <button type="submit" class="btn-enviar-comentario">Comentar</button>
                        <button type="button" class="btn-cancelar-comentario">Cancelar</button>
                    </div>
                </div>
            </div>
        `;
        
        contenedorComentarios.appendChild(formulario);
        formulario.querySelector('.input-comentario-principal').focus();
        
        // Event listener para cancelar
        formulario.querySelector('.btn-cancelar-comentario').addEventListener('click', () => {
            formulario.remove();
        });
    }

    enviarComentarioPrincipal(formulario) {
        const input = formulario.querySelector('.input-comentario-principal');
        const textoComentario = input.value.trim();
        
        if (!textoComentario) return;
        
        const publicacion = formulario.closest('.publicacion-foro');
        const pubId = this.obtenerIdPublicacion(publicacion);
        
        // Si no existe la publicación en el mapa, crearla
        if (!this.publicaciones.has(pubId)) {
            this.publicaciones.set(pubId, {
                likes: 0,
                comentarios: [],
                liked: false,
                respuestas: []
            });
        }
        
        const datosPub = this.publicaciones.get(pubId);
        
        // Crear nuevo comentario
        const nuevoComentario = {
            id: `com-${Date.now()}`,
            usuario: 'Tú',
            avatar: 'user.png',
            texto: textoComentario,
            fecha: 'Ahora mismo',
            likes: 0,
            liked: false,
            respuestas: []
        };
        
        datosPub.comentarios.push(nuevoComentario);
        
        // Actualizar UI
        this.mostrarComentarioEnUI(publicacion, nuevoComentario);
        
        // Limpiar formulario
        formulario.remove();
        
        // Actualizar contador de comentarios
        this.actualizarContadorComentarios(publicacion);
        
        // Guardar en localStorage - CORREGIDO
        this.guardarDatos();
        
        // Si es una publicación aprobada, actualizar también publicacionesAprobadas
        this.actualizarPublicacionAprobadaSiCorresponde(pubId, datosPub);
    }

    // NUEVO MÉTODO: Actualizar publicación aprobada si corresponde
    actualizarPublicacionAprobadaSiCorresponde(pubId, datosPub) {
        if (pubId.startsWith('pub-aprobada-')) {
            const pubIdNum = pubId.replace('pub-aprobada-', '');
            let publicacionesAprobadas = JSON.parse(localStorage.getItem('publicacionesAprobadas')) || [];
            
            const pubIndex = publicacionesAprobadas.findIndex(pub => pub.id.toString() === pubIdNum);
            if (pubIndex !== -1) {
                // Actualizar la publicación aprobada con los nuevos comentarios
                publicacionesAprobadas[pubIndex].comentarios = datosPub.comentarios;
                publicacionesAprobadas[pubIndex].likes = datosPub.likes;
                localStorage.setItem('publicacionesAprobadas', JSON.stringify(publicacionesAprobadas));
            }
        }
    }

    mostrarComentarioEnUI(publicacion, comentario) {
        const contenedorComentarios = publicacion.querySelector('.comments-container');
        
        const comentarioHTML = `
            <div class="comment">
                <div class="comment-header">
                    <div class="comment-user">
                        <img src="${comentario.avatar}" alt="Usuario" class="comment-avatar">
                        <span class="comment-username">${comentario.usuario}</span>
                    </div>
                    <div class="comment-date">${comentario.fecha}</div>
                </div>
                <p class="comment-text">${comentario.texto}</p>
                <div class="comment-actions">
                    <button class="comment-action">
                        <img src="corazon_vacio.png" alt="Me gusta" class="icono-corazon-comentario">
                        Me gusta
                    </button>
                    <button class="comment-action">
                        Responder
                    </button>
                </div>
            </div>
        `;
        
        contenedorComentarios.insertAdjacentHTML('beforeend', comentarioHTML);
    }

    toggleLikePublicacion(btn) {
        const publicacion = btn.closest('.publicacion-foro');
        const pubId = this.obtenerIdPublicacion(publicacion);
        const datos = this.publicaciones.get(pubId);
        
        if (!datos) {
            // Si no existe en el mapa, crearlo
            this.publicaciones.set(pubId, {
                likes: parseInt(btn.querySelector('span').textContent) || 0,
                comentarios: [],
                liked: btn.classList.contains('liked'),
                respuestas: []
            });
        }
        
        const datosPub = this.publicaciones.get(pubId);
        
        if (datosPub.liked) {
            // Quitar like
            datosPub.likes--;
            datosPub.liked = false;
            btn.classList.remove('liked');
            const icono = btn.querySelector('.icono-corazon');
            icono.src = 'corazon_vacio.png';
            icono.alt = 'Me gusta';
        } else {
            // Dar like
            datosPub.likes++;
            datosPub.liked = true;
            btn.classList.add('liked');
            const icono = btn.querySelector('.icono-corazon');
            icono.src = 'corazon_lleno.png';
            icono.alt = 'No me gusta';
        }
        
        // Actualizar contador
        btn.querySelector('span').textContent = datosPub.likes;
        
        // Guardar en localStorage
        this.guardarDatos();
        this.actualizarPublicacionAprobadaSiCorresponde(pubId, datosPub);
    }

    toggleLikeComentario(btn) {
        const comentario = btn.closest('.comment');
        const publicacion = comentario.closest('.publicacion-foro');
        const pubId = this.obtenerIdPublicacion(publicacion);
        const datos = this.publicaciones.get(pubId);
        
        if (!datos) return;
        
        const comentarioIndex = Array.from(publicacion.querySelectorAll('.comment')).indexOf(comentario);
        const comentarioData = datos.comentarios[comentarioIndex];
        
        if (comentarioData.liked) {
            // Quitar like
            comentarioData.likes--;
            comentarioData.liked = false;
            btn.innerHTML = `<img src="corazon_vacio.png" alt="Me gusta" class="icono-corazon-comentario"> Me gusta`;
        } else {
            // Dar like
            comentarioData.likes++;
            comentarioData.liked = true;
            btn.innerHTML = `<img src="corazon_lleno.png" alt="No me gusta" class="icono-corazon-comentario"> No me gusta (${comentarioData.likes})`;
        }
        
        // Guardar en localStorage
        this.guardarDatos();
    }

    toggleComentarios(btn) {
        const publicacion = btn.closest('.publicacion-foro');
        const contenedorComentarios = publicacion.querySelector('.comments-container');
        
        if (window.innerWidth > 768) {
            if (contenedorComentarios.style.display === 'none' || !contenedorComentarios.style.display) {
                contenedorComentarios.style.display = 'block';
                btn.classList.add('activo');
            } else {
                contenedorComentarios.style.display = 'none';
                btn.classList.remove('activo');
            }
        } else {
            btn.classList.toggle('activo');
        }
    }

    mostrarFormularioRespuesta(btn) {
        const comentario = btn.closest('.comment');
        
        const formulariosExistentes = comentario.querySelectorAll('.form-respuesta-comentario');
        formulariosExistentes.forEach(form => form.remove());
        
        const formulario = document.createElement('form');
        formulario.className = 'form-respuesta-comentario';
        formulario.innerHTML = `
            <div class="input-respuesta-container">
                <input type="text" class="input-respuesta-comentario" placeholder="Escribe tu respuesta..." required>
                <div class="botones-respuesta">
                    <button type="submit" class="btn-enviar-respuesta">Enviar</button>
                    <button type="button" class="btn-cancelar-respuesta">Cancelar</button>
                </div>
            </div>
        `;
        
        comentario.appendChild(formulario);
        formulario.querySelector('.input-respuesta-comentario').focus();
        
        formulario.querySelector('.btn-cancelar-respuesta').addEventListener('click', () => {
            formulario.remove();
        });
    }

    enviarRespuesta(formulario) {
        const input = formulario.querySelector('.input-respuesta-comentario');
        const textoRespuesta = input.value.trim();
        
        if (!textoRespuesta) return;
        
        const comentario = formulario.closest('.comment');
        const publicacion = comentario.closest('.publicacion-foro');
        const pubId = this.obtenerIdPublicacion(publicacion);
        const datos = this.publicaciones.get(pubId);
        
        const comentarioIndex = Array.from(publicacion.querySelectorAll('.comment')).indexOf(comentario);
        const comentarioData = datos.comentarios[comentarioIndex];
        
        const nuevaRespuesta = {
            id: `resp-${Date.now()}`,
            usuario: 'Tú',
            avatar: 'user.png',
            texto: textoRespuesta,
            fecha: 'Ahora mismo',
            likes: 0,
            liked: false
        };
        
        comentarioData.respuestas.push(nuevaRespuesta);
        
        this.mostrarRespuestaEnUI(comentario, nuevaRespuesta);
        formulario.remove();
        this.actualizarContadorComentarios(publicacion);
        this.guardarDatos();
        this.actualizarPublicacionAprobadaSiCorresponde(pubId, datos);
    }

    mostrarRespuestaEnUI(comentario, respuesta) {
        let contenedorRespuestas = comentario.querySelector('.respuestas-comentario');
        if (!contenedorRespuestas) {
            contenedorRespuestas = this.crearContenedorRespuestas(comentario);
        }
        
        const respuestaHTML = `
            <div class="respuesta-comentario">
                <div class="comment-header">
                    <div class="comment-user">
                        <img src="${respuesta.avatar}" alt="Usuario" class="comment-avatar">
                        <span class="comment-username">${respuesta.usuario}</span>
                    </div>
                    <div class="comment-date">${respuesta.fecha}</div>
                </div>
                <p class="comment-text">${respuesta.texto}</p>
                <div class="comment-actions">
                    <button class="comment-action">
                        <img src="corazon_vacio.png" alt="Me gusta" class="icono-corazon-comentario">
                        Me gusta
                    </button>
                </div>
            </div>
        `;
        
        contenedorRespuestas.insertAdjacentHTML('beforeend', respuestaHTML);
    }

    crearContenedorRespuestas(comentario) {
        const contenedor = document.createElement('div');
        contenedor.className = 'respuestas-comentario';
        contenedor.style.marginLeft = '15px';
        contenedor.style.borderLeft = '2px solid #e0e0e0';
        contenedor.style.paddingLeft = '10px';
        contenedor.style.marginTop = '10px';
        comentario.appendChild(contenedor);
        return contenedor;
    }

    actualizarContadorComentarios(publicacion) {
        const btnComentarios = publicacion.querySelector('.comment-toggle');
        const pubId = this.obtenerIdPublicacion(publicacion);
        const datos = this.publicaciones.get(pubId);
        
        if (!datos) return;
        
        const totalComentarios = datos.comentarios.reduce((total, comentario) => {
            return total + 1 + (comentario.respuestas ? comentario.respuestas.length : 0);
        }, 0);
        
        if (btnComentarios) {
            btnComentarios.querySelector('span').textContent = totalComentarios;
        }
    }

    actualizarTodosLosContadores() {
        const publicaciones = document.querySelectorAll('.publicacion-foro');
        publicaciones.forEach(publicacion => {
            this.actualizarContadorComentarios(publicacion);
        });
    }

    obtenerIdPublicacion(publicacion) {
        // Usar el data-id si existe, si no generar uno
        const dataId = publicacion.getAttribute('data-publicacion-id');
        if (dataId) {
            return `pub-${dataId}`;
        }
        
        const publicaciones = Array.from(document.querySelectorAll('.publicacion-foro'));
        const index = publicaciones.indexOf(publicacion);
        return `pub-${index + 1}`;
    }

    setupResponsiveComentarios() {
        if (window.innerWidth <= 768) {
            document.querySelectorAll('.comments-container').forEach(container => {
                container.style.display = 'block';
                container.style.overflow = 'visible';
            });
            document.querySelectorAll('.comment-toggle').forEach(btn => {
                btn.classList.add('activo');
            });
        } else {
            document.querySelectorAll('.comments-container').forEach(container => {
                container.style.display = 'none';
            });
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                document.querySelectorAll('.comments-container').forEach(container => {
                    container.style.display = 'block';
                    container.style.overflow = 'visible';
                });
            } else {
                document.querySelectorAll('.comments-container').forEach(container => {
                    if (!container.closest('.publicacion-foro').querySelector('.comment-toggle').classList.contains('activo')) {
                        container.style.display = 'none';
                    }
                });
            }
        });
    }

    guardarDatos() {
        const datosParaGuardar = {};
        this.publicaciones.forEach((value, key) => {
            datosParaGuardar[key] = value;
        });
        localStorage.setItem('sistemaComentariosForo', JSON.stringify(datosParaGuardar));
    }

    cargarDatosGuardados() {
        const datosGuardados = localStorage.getItem('sistemaComentariosForo');
        if (datosGuardados) {
            try {
                const datos = JSON.parse(datosGuardados);
                Object.keys(datos).forEach(pubId => {
                    this.publicaciones.set(pubId, datos[pubId]);
                });
                this.actualizarUIDesdeDatos();
            } catch (e) {
                console.error('Error al cargar datos guardados:', e);
            }
        }
    }

    actualizarUIDesdeDatos() {
        this.publicaciones.forEach((datos, pubId) => {
            let publicacion;
            
            if (pubId.startsWith('pub-aprobada-')) {
                const pubIdNum = pubId.replace('pub-aprobada-', '');
                publicacion = document.querySelector(`[data-publicacion-id="${pubIdNum}"]`);
            } else {
                const publicaciones = document.querySelectorAll('.publicacion-foro');
                const index = parseInt(pubId.split('-')[1]) - 1;
                if (publicaciones[index]) {
                    publicacion = publicaciones[index];
                }
            }
            
            if (publicacion) {
                // Actualizar likes
                const btnLike = publicacion.querySelector('.action-btn:first-child');
                if (btnLike) {
                    btnLike.querySelector('span').textContent = datos.likes;
                    if (datos.liked) {
                        btnLike.classList.add('liked');
                        const icono = btnLike.querySelector('.icono-corazon');
                        if (icono) {
                            icono.src = 'corazon_lleno.png';
                            icono.alt = 'No me gusta';
                        }
                    } else {
                        btnLike.classList.remove('liked');
                        const icono = btnLike.querySelector('.icono-corazon');
                        if (icono) {
                            icono.src = 'corazon_vacio.png';
                            icono.alt = 'Me gusta';
                        }
                    }
                }

                // Actualizar contador de comentarios
                this.actualizarContadorComentarios(publicacion);
            }
        });
        this.agregarBotonesComentar();
    }
}

// CSS dinámico mejorado
const agregarEstilosComentarios = () => {
    const styles = `
        .comment-toggle.activo {
            background-color: #e3f2fd;
            border-color: #007BFF;
        }
        
        .comments-container {
            transition: all 0.3s ease;
            max-height: none;
            overflow: visible;
        }
        
        .action-btn.liked {
            color: #e74c3c;
        }
        
        .form-respuesta-comentario, .form-comentario-principal {
            margin-top: 10px;
            padding: 10px;
            background: #f8f9fa;
            border-radius: 8px;
            border: 1px solid #e0e0e0;
        }
        
        .input-respuesta-container, .input-comentario-principal-container {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        
        .input-respuesta-comentario, .input-comentario-principal {
            width: 100%;
            padding: 8px 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 0.9rem;
            box-sizing: border-box;
        }
        
        .botones-respuesta, .botones-comentario-principal {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
        }
        
        .btn-enviar-respuesta, .btn-cancelar-respuesta,
        .btn-enviar-comentario, .btn-cancelar-comentario {
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.8rem;
            min-width: 80px;
        }
        
        .btn-enviar-respuesta, .btn-enviar-comentario {
            background: #007BFF;
            color: white;
        }
        
        .btn-enviar-respuesta:hover, .btn-enviar-comentario:hover {
            background: #0056b3;
        }
        
        .btn-cancelar-respuesta, .btn-cancelar-comentario {
            background: #6c757d;
            color: white;
        }
        
        .btn-cancelar-respuesta:hover, .btn-cancelar-comentario:hover {
            background: #545b62;
        }
        
        .respuesta-comentario {
            margin: 8px 0;
            padding: 8px;
            background: #f8f9fa;
            border-radius: 6px;
            border-left: 3px solid #007BFF;
        }
        
        .btn-comentar {
            background: #007BFF;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.9rem;
            margin-top: 10px;
        }
        
        .btn-comentar:hover {
            background: #0056b3;
        }
        
        @media (max-width: 768px) {
            .comments-container {
                display: block !important;
                max-height: none !important;
                overflow: visible !important;
            }
            
            .comment {
                padding: 12px;
                margin: 8px 0;
                background: white;
                border-radius: 8px;
                border: 1px solid #e0e0e0;
            }
            
            .respuesta-comentario {
                margin-left: 10px;
                padding: 10px;
            }
            
            .input-respuesta-container, .input-comentario-principal-container {
                flex-direction: column;
            }
            
            .botones-respuesta, .botones-comentario-principal {
                justify-content: space-between;
            }
            
            .btn-enviar-respuesta, .btn-cancelar-respuesta,
            .btn-enviar-comentario, .btn-cancelar-comentario {
                flex: 1;
                margin: 0 4px;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
};

// Inicializar el sistema cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    agregarEstilosComentarios();
    window.sistemaComentariosForo = new SistemaComentariosForo();
});

// Sistema de administración de publicaciones pendientes 
class AdministradorPublicacionesForo {
    constructor() {
        this.publicacionesPendientes = [];
        this.estadisticas = {
            revisadasHoy: 0,
            aceptadas: 0,
            rechazadas: 0
        };

        this.init();
    }

    init() {
        this.cargarDatos();
        this.setupEventListeners();
        this.renderPublicacionesPendientes();
        this.actualizarContador();
        this.actualizarEstadisticas();
    }

    cargarDatos() {
        this.publicacionesPendientes = JSON.parse(localStorage.getItem('publicacionesPendientes')) || [];
        
        const estadisticasGuardadas = localStorage.getItem('estadisticasPublicaciones');
        if (estadisticasGuardadas) {
            this.estadisticas = JSON.parse(estadisticasGuardadas);
        }
    }

    guardarDatos() {
        localStorage.setItem('publicacionesPendientes', JSON.stringify(this.publicacionesPendientes));
        localStorage.setItem('estadisticasPublicaciones', JSON.stringify(this.estadisticas));
    }

    renderPublicacionesPendientes() {
        const lista = document.getElementById('listaPendientesForo');
        if (!lista) return;
        
        lista.innerHTML = '';
        
        if (this.publicacionesPendientes.length === 0) {
            this.verificarListaVacia();
            return;
        }
        
        this.publicacionesPendientes.forEach(pub => {
            const pubHTML = `
                <div class="publicacion-pendiente-item-administracion-foro" data-publicacion-id="${pub.id}">
                    <div class="info-usuario-publicacion-pendiente-foro">
                        <img src="user.png" alt="Usuario" class="avatar-usuario-publicacion-pendiente-foro">
                        <div class="detalles-usuario-publicacion-pendiente-foro">
                            <div class="nombre-usuario-publicacion-pendiente-foro">${pub.usuario}</div>
                            <div class="fecha-solicitud-publicacion-pendiente-foro">Solicitado: ${this.formatearFecha(pub.fecha)}</div>
                        </div>
                    </div>
                    <div class="contenido-publicacion-pendiente-foro">
                        <h4 class="titulo-publicacion-pendiente-foro">${pub.titulo}</h4>
                        <p class="descripcion-publicacion-pendiente-foro">${pub.descripcion}</p>
                        ${pub.imagen ? `<div class="imagen-pendiente-foro"><img src="${pub.imagen}" alt="Imagen de la publicación" style="max-width: 200px; border-radius: 8px; margin-top: 10px;"></div>` : ''}
                        <div class="hashtags-publicacion-pendiente-foro">
                            ${pub.categorias.map(tag => `<span class="hashtag-publicacion-pendiente-foro">${tag}</span>`).join('')}
                        </div>
                    </div>
                    <div class="acciones-publicacion-pendiente-foro">
                        <button class="btn-rechazar-publicacion-pendiente-foro" data-publicacion-id="${pub.id}">
                            ❌ Rechazar
                        </button>
                        <button class="btn-aceptar-publicacion-pendiente-foro" data-publicacion-id="${pub.id}">
                            ✅ Aceptar
                        </button>
                    </div>
                </div>
            `;
            lista.insertAdjacentHTML('beforeend', pubHTML);
        });
        this.verificarListaVacia();
    }

    formatearFecha(fechaISO) {
        const fecha = new Date(fechaISO);
        return fecha.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    setupEventListeners() {
        const btnAbrir = document.getElementById('btnAbrirPanelAdminForo');
        if (btnAbrir) {
            btnAbrir.addEventListener('click', () => {
                this.abrirModal();
                this.cargarDatos();
                this.renderPublicacionesPendientes();
                this.actualizarContador();
                this.actualizarEstadisticas();
            });
        }

        document.getElementById('btnCerrarPanelAdminForo')?.addEventListener('click', () => {
            this.cerrarModal();
        });

        document.getElementById('btnCerrarPanelAdminForoSecundario')?.addEventListener('click', () => {
            this.cerrarModal();
        });

        document.getElementById('modalAdminPublicacionesForo')?.addEventListener('click', (e) => {
            if (e.target.id === 'modalAdminPublicacionesForo') {
                this.cerrarModal();
            }
        });

        document.addEventListener('click', (e) => {
            if (e.target.closest('.btn-aceptar-publicacion-pendiente-foro')) {
                const btn = e.target.closest('.btn-aceptar-publicacion-pendiente-foro');
                const publicacionId = parseInt(btn.getAttribute('data-publicacion-id'));
                this.aceptarPublicacion(publicacionId);
            }
        });

        document.addEventListener('click', (e) => {
            if (e.target.closest('.btn-rechazar-publicacion-pendiente-foro')) {
                const btn = e.target.closest('.btn-rechazar-publicacion-pendiente-foro');
                const publicacionId = parseInt(btn.getAttribute('data-publicacion-id'));
                this.rechazarPublicacion(publicacionId);
            }
        });
    }

    abrirModal() {
        const modal = document.getElementById('modalAdminPublicacionesForo');
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    cerrarModal() {
        const modal = document.getElementById('modalAdminPublicacionesForo');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    aceptarPublicacion(publicacionId) {
        const publicacionIndex = this.publicacionesPendientes.findIndex(p => p.id === publicacionId);
        if (publicacionIndex !== -1) {
            const publicacion = this.publicacionesPendientes[publicacionIndex];
            
            this.moverAAprobadas(publicacion);
            this.publicacionesPendientes.splice(publicacionIndex, 1);
            
            this.estadisticas.revisadasHoy++;
            this.estadisticas.aceptadas++;
            
            this.guardarDatos();
            this.renderPublicacionesPendientes();
            this.actualizarContador();
            this.actualizarEstadisticas();
        }
    }

    rechazarPublicacion(publicacionId) {
        const publicacionIndex = this.publicacionesPendientes.findIndex(p => p.id === publicacionId);
        if (publicacionIndex !== -1) {
            this.publicacionesPendientes.splice(publicacionIndex, 1);
            
            this.estadisticas.revisadasHoy++;
            this.estadisticas.rechazadas++;
            
            this.guardarDatos();
            this.renderPublicacionesPendientes();
            this.actualizarContador();
            this.actualizarEstadisticas();
        }
    }

    moverAAprobadas(publicacion) {
        let publicacionesAprobadas = JSON.parse(localStorage.getItem('publicacionesAprobadas')) || [];
        
        publicacion.estado = 'aprobada';
        publicacion.fechaAprobacion = new Date().toISOString();
        
        publicacionesAprobadas.push(publicacion);
        localStorage.setItem('publicacionesAprobadas', JSON.stringify(publicacionesAprobadas));
        
        this.actualizarForoConNuevaPublicacion(publicacion);
    }

    actualizarForoConNuevaPublicacion(publicacion) {
        const nuevaPublicacionHTML = `
            <div class="publicacion-foro" data-publicacion-id="${publicacion.id}">
                <div class="publicacion-header">
                    <div class="user-info">
                        <img src="user.png" alt="Usuario" class="user-avatar">
                        <div>
                            <div class="user-name">${publicacion.usuario}</div>
                            <div class="post-date">Recién aprobada</div>
                        </div>
                    </div>
                </div>

                <div class="post-content">
                    ${publicacion.imagen ? `
                    <div class="post-media">
                        <img src="${publicacion.imagen}" alt="${publicacion.titulo}">
                    </div>
                    ` : ''}
                    <div class="post-actions">
                        <button class="action-btn">
                            <img src="corazon_vacio.png" alt="Me gusta" class="icono-corazon">
                            <span>0</span>
                        </button>
                        <button class="action-btn comment-toggle">
                            <img src="comentarios.png" alt="Comentarios" class="icono-comentarios">
                            <span>0</span>
                        </button>
                        <button class="action-btn">
                            <img src="compartir.png" alt="Compartir" class="icono-compartir">
                            <span>0</span>
                        </button>
                    </div>
                </div>

                <div class="post-details">
                    <h2 class="post-title">${publicacion.titulo}</h2>
                    <p class="post-description">${publicacion.descripcion}</p>
                    <div class="hashtags">
                        ${publicacion.categorias.map(cat => `<span class="hashtag">${cat}</span>`).join('')}
                    </div>
                </div>

                <!-- Contenedor de comentarios con botón para comentar -->
                <div class="comments-container" style="display: none;">
                    <button class="btn-comentar">💬 Agregar comentario</button>
                    <!-- Los comentarios se agregarán aquí dinámicamente -->
                </div>
            </div>
            
            <div class="separador-publicacion"></div>
        `;
        
        const contenedorPublicaciones = document.querySelector('.publicaciones-foro');
        if (contenedorPublicaciones) {
            contenedorPublicaciones.insertAdjacentHTML('afterbegin', nuevaPublicacionHTML);
            alert('¡Publicación aprobada y agregada al foro!');
            
            // Actualizar el sistema de comentarios
            if (window.sistemaComentariosForo) {
                window.sistemaComentariosForo.cargarPublicacionesAprobadas();
            }
        }
    }

    actualizarContador() {
        const contador = document.getElementById('contadorPendientesForo');
        if (contador) {
            contador.textContent = this.publicacionesPendientes.length;
        }
    }

    actualizarEstadisticas() {
        const revisadas = document.getElementById('totalRevisadasForo');
        const aceptadas = document.getElementById('totalAceptadasForo');
        const rechazadas = document.getElementById('totalRechazadasForo');
        
        if (revisadas) revisadas.textContent = this.estadisticas.revisadasHoy;
        if (aceptadas) aceptadas.textContent = this.estadisticas.aceptadas;
        if (rechazadas) rechazadas.textContent = this.estadisticas.rechazadas;
    }

    verificarListaVacia() {
        const lista = document.getElementById('listaPendientesForo');
        const sinPendientes = document.getElementById('sinPendientesForo');
        
        if (lista && sinPendientes) {
            if (this.publicacionesPendientes.length === 0) {
                lista.style.display = 'none';
                sinPendientes.style.display = 'block';
            } else {
                lista.style.display = 'block';
                sinPendientes.style.display = 'none';
            }
        }
    }
}

//SECCIONES DEL FORO
// Toggle para grupos de filtros
document.querySelectorAll('.filtro-titulo').forEach(titulo => {
    titulo.addEventListener('click', function() {
        const grupo = this.getAttribute('data-grupo');
        const subopciones = document.getElementById(`subopciones-${grupo}`);
        
        // Cerrar otros grupos
        document.querySelectorAll('.subopciones-filtro').forEach(sub => {
            if (sub !== subopciones) {
                sub.classList.remove('activo');
                sub.previousElementSibling.classList.remove('activo');
            }
        });
        
        // Toggle grupo actual
        subopciones.classList.toggle('activo');
        this.classList.toggle('activo');
    });
});

//AGREGAR NUEVA CATEGORIA FUNCIONALIDAD
// Gestión de categorías - COMPLETO
document.addEventListener('DOMContentLoaded', function() {
    inicializarGestionCategorias();
});

function inicializarGestionCategorias() {
    const btnAgregarCategoria = document.getElementById('btnAgregarCategoria');
    const dropdownCategorias = document.getElementById('dropdownCategorias');
    const selectSeccion = document.getElementById('selectSeccion');
    const grupoNuevaSeccion = document.getElementById('grupoNuevaSeccion');
    const inputNuevaSeccion = document.getElementById('inputNuevaSeccion');
    const inputNuevaCategoria = document.getElementById('inputNuevaCategoria');
    const contadorCategoria = document.getElementById('contadorCategoria');
    const btnAgregarCategoriaConfirmar = document.getElementById('btnAgregarCategoriaConfirmar');
    const categoriasUsuario = document.getElementById('categoriasUsuario');

    // Cargar categorías guardadas
    cargarCategoriasUsuario();
    actualizarFiltros();

    // Toggle del dropdown
    btnAgregarCategoria.addEventListener('click', function(e) {
        e.stopPropagation();
        const isVisible = dropdownCategorias.style.display === 'block';
        dropdownCategorias.style.display = isVisible ? 'none' : 'block';
    });

    // Cerrar dropdown al hacer clic fuera
    document.addEventListener('click', function(e) {
        const target = e.target;
        const isClickInsideDropdown = dropdownCategorias.contains(target);
        const isClickOnButton = target === btnAgregarCategoria || btnAgregarCategoria.contains(target);
        
        if (!isClickInsideDropdown && !isClickOnButton) {
            dropdownCategorias.style.display = 'none';
        }
    });

    // Prevenir que los clics dentro del dropdown lo cierren
    dropdownCategorias.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Mostrar/ocultar input para nueva sección
    selectSeccion.addEventListener('change', function() {
        if (this.value === 'nueva') {
            grupoNuevaSeccion.style.display = 'flex';
            inputNuevaSeccion.focus();
        } else {
            grupoNuevaSeccion.style.display = 'none';
            inputNuevaSeccion.value = '';
        }
    });

    // Contador de caracteres
    inputNuevaCategoria.addEventListener('input', function() {
        const longitud = this.value.length;
        contadorCategoria.textContent = `${longitud}/20`;
        
        if (longitud > 20) {
            contadorCategoria.classList.add('limite-excedido');
            btnAgregarCategoriaConfirmar.disabled = true;
        } else if (longitud > 15) {
            contadorCategoria.classList.add('cerca-limite');
            contadorCategoria.classList.remove('limite-excedido');
            btnAgregarCategoriaConfirmar.disabled = false;
        } else {
            contadorCategoria.classList.remove('cerca-limite', 'limite-excedido');
            btnAgregarCategoriaConfirmar.disabled = false;
        }
    });

    // Agregar categoría
    btnAgregarCategoriaConfirmar.addEventListener('click', function(e) {
        e.stopPropagation();
        
        const nombreCategoria = inputNuevaCategoria.value.trim();
        const seccionSeleccionada = selectSeccion.value;
        const nombreNuevaSeccion = inputNuevaSeccion.value.trim();

        if (!nombreCategoria) {
            mostrarMensaje('Por favor ingresa un nombre para la categoría', 'error');
            return;
        }

        if (nombreCategoria.length > 20) {
            mostrarMensaje('La categoría no puede tener más de 20 caracteres', 'error');
            return;
        }

        if (seccionSeleccionada === 'nueva' && !nombreNuevaSeccion) {
            mostrarMensaje('Por favor ingresa un nombre para la nueva sección', 'error');
            return;
        }

        // Determinar la sección final
        let seccionFinal = seccionSeleccionada;
        let nombreSeccionFinal = '';

        if (seccionSeleccionada === 'nueva') {
            seccionFinal = nombreNuevaSeccion.toLowerCase().replace(/\s+/g, '_');
            nombreSeccionFinal = nombreNuevaSeccion;
        } else {
            nombreSeccionFinal = selectSeccion.options[selectSeccion.selectedIndex].text;
        }

        // Agregar categoría
        agregarCategoriaUsuario(nombreCategoria, seccionFinal, nombreSeccionFinal);
        
        // Limpiar formulario
        inputNuevaCategoria.value = '';
        inputNuevaSeccion.value = '';
        grupoNuevaSeccion.style.display = 'none';
        selectSeccion.value = 'mundiales';
        contadorCategoria.textContent = '0/20';
        contadorCategoria.classList.remove('cerca-limite', 'limite-excedido');
        btnAgregarCategoriaConfirmar.disabled = false;
        
        mostrarMensaje('Categoría agregada correctamente', 'exito');
    });
}

function agregarCategoriaUsuario(nombreCategoria, seccionId, nombreSeccion) {
    // Obtener categorías existentes
    let categorias = JSON.parse(localStorage.getItem('categoriasUsuario')) || [];
    
    // Verificar si ya existe
    const existe = categorias.some(cat => 
        cat.nombre.toLowerCase() === nombreCategoria.toLowerCase() && cat.seccion === seccionId
    );
    
    if (existe) {
        mostrarMensaje('Esta categoría ya existe en la sección seleccionada', 'error');
        return;
    }

    // Agregar nueva categoría
    const nuevaCategoria = {
        id: Date.now(),
        nombre: nombreCategoria,
        seccion: seccionId,
        nombreSeccion: nombreSeccion,
        valor: `#${nombreCategoria.replace(/\s+/g, '')}`
    };
    
    categorias.push(nuevaCategoria);
    localStorage.setItem('categoriasUsuario', JSON.stringify(categorias));
    
    // Actualizar UI
    cargarCategoriasUsuario();
    actualizarFiltros();
}

function cargarCategoriasUsuario() {
    const categorias = JSON.parse(localStorage.getItem('categoriasUsuario')) || [];
    const contenedor = document.getElementById('categoriasUsuario');
    
    if (categorias.length === 0) {
        contenedor.innerHTML = '<div class="mensaje-estado">No hay categorías agregadas</div>';
        return;
    }
    
    let html = '';
    categorias.forEach(categoria => {
        html += `
            <div class="categoria-item usuario categoria-nueva" data-id="${categoria.id}">
                <span>${categoria.nombre}</span>
                <span style="font-size: 0.7rem; color: #666; margin-left: auto;">(${categoria.nombreSeccion})</span>
                <button class="btn-eliminar-categoria" data-id="${categoria.id}">
                    <span class="icono-eliminar">✕</span>
                </button>
            </div>
        `;
    });
    
    contenedor.innerHTML = html;
    
    // Agregar event listeners a los botones de eliminar
    contenedor.querySelectorAll('.btn-eliminar-categoria').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = parseInt(this.getAttribute('data-id'));
            eliminarCategoriaUsuario(id);
        });
    });
}

function eliminarCategoriaUsuario(id) {
    let categorias = JSON.parse(localStorage.getItem('categoriasUsuario')) || [];
    categorias = categorias.filter(cat => cat.id !== id);
    localStorage.setItem('categoriasUsuario', JSON.stringify(categorias));
    
    cargarCategoriasUsuario();
    actualizarFiltros();
    mostrarMensaje('Categoría eliminada', 'exito');
}

function actualizarFiltros() {
    const categorias = JSON.parse(localStorage.getItem('categoriasUsuario')) || [];
    
    // Agrupar categorías por sección
    const categoriasPorSeccion = {};
    categorias.forEach(cat => {
        if (!categoriasPorSeccion[cat.seccion]) {
            categoriasPorSeccion[cat.seccion] = [];
        }
        categoriasPorSeccion[cat.seccion].push(cat);
    });
    
    // Actualizar cada sección en los filtros
    Object.keys(categoriasPorSeccion).forEach(seccionId => {
        let contenedorSeccion = document.getElementById(`subopciones-${seccionId}`);
        
        // Si la sección no existe, crearla
        if (!contenedorSeccion) {
            contenedorSeccion = crearNuevaSeccion(seccionId, categoriasPorSeccion[seccionId][0].nombreSeccion);
        }
        
        // Agregar categorías a la sección
        agregarCategoriasASeccion(contenedorSeccion, categoriasPorSeccion[seccionId]);
    });
}

function crearNuevaSeccion(seccionId, nombreSeccion) {
    const listaFiltros = document.querySelector('.lista-filtros');
    
    const nuevaSeccionHTML = `
        <div class="filtro-grupo">
            <div class="filtro-titulo" data-grupo="${seccionId}">
                <span>${nombreSeccion}</span>
                <span class="filtro-flecha">▶</span>
            </div>
            <div class="subopciones-filtro" id="subopciones-${seccionId}">
                <!-- Las categorías se agregarán aquí -->
            </div>
        </div>
    `;
    
    listaFiltros.insertAdjacentHTML('beforeend', nuevaSeccionHTML);
    
    // Agregar event listener al nuevo título
    const nuevoTitulo = document.querySelector(`[data-grupo="${seccionId}"]`);
    nuevoTitulo.addEventListener('click', function() {
        const grupo = this.getAttribute('data-grupo');
        const subopciones = document.getElementById(`subopciones-${grupo}`);
        
        // Cerrar otros grupos
        document.querySelectorAll('.subopciones-filtro').forEach(sub => {
            if (sub !== subopciones) {
                sub.classList.remove('activo');
                sub.previousElementSibling.classList.remove('activo');
            }
        });
        
        // Toggle grupo actual
        subopciones.classList.toggle('activo');
        this.classList.toggle('activo');
    });
    
    return document.getElementById(`subopciones-${seccionId}`);
}

function agregarCategoriasASeccion(contenedorSeccion, categorias) {
    // Limpiar categorías existentes de usuario en esta sección
    const categoriasExistentes = contenedorSeccion.querySelectorAll('.categoria-usuario');
    categoriasExistentes.forEach(cat => cat.remove());
    
    // Agregar nuevas categorías
    categorias.forEach(categoria => {
        const existe = contenedorSeccion.querySelector(`[value="${categoria.valor}"]`);
        if (!existe) {
            const nuevaCategoriaHTML = `
                <label class="subopcion-item categoria-usuario">
                    <input type="checkbox" value="${categoria.valor}" class="filtro-checkbox">
                    <span class="checkmark"></span>
                    ${categoria.nombre}
                </label>
            `;
            contenedorSeccion.insertAdjacentHTML('beforeend', nuevaCategoriaHTML);
        }
    });
}

function mostrarMensaje(mensaje, tipo) {
    const contenedor = document.getElementById('categoriasUsuario');
    const mensajeElement = contenedor.querySelector('.mensaje-estado');
    
    // Remover mensaje anterior si existe
    if (mensajeElement) {
        mensajeElement.remove();
    }
    
    const mensajeHTML = `<div class="mensaje-estado mensaje-${tipo}">${mensaje}</div>`;
    contenedor.insertAdjacentHTML('afterbegin', mensajeHTML);
    
    // Remover mensaje después de 3 segundos
    setTimeout(() => {
        const mensajeActual = contenedor.querySelector('.mensaje-estado');
        if (mensajeActual) {
            mensajeActual.remove();
        }
    }, 3000);
}

// Inicializar también cuando se carga la página
window.addEventListener('load', function() {
    actualizarFiltros();
});
//AQUI TERMINA LO DE LAS CATEGORIAS

//MODAL PARA PUBLICAR
// Sistema de publicaciones
document.addEventListener('DOMContentLoaded', function() {
    inicializarSistemaPublicaciones();
});

function inicializarSistemaPublicaciones() {
    const btnPublicar = document.querySelector('.btn-publicar');
    const modalPublicar = document.getElementById('modalPublicar');
    const btnCerrarPublicar = document.getElementById('btnCerrarPublicar');
    const btnCancelarPublicar = document.getElementById('btnCancelarPublicar');
    const btnEnviarPublicar = document.getElementById('btnEnviarPublicar');
    const uploadArea = document.getElementById('uploadArea');
    const inputImagen = document.getElementById('imagenPublicacion');
    const btnEliminarImagen = document.getElementById('btnEliminarImagen');
    const vistaPreviaImagen = document.getElementById('vistaPreviaImagen');

    // Abrir modal de publicar
    btnPublicar.addEventListener('click', function() {
        abrirModalPublicar();
    });

    // Cerrar modal de publicar
    btnCerrarPublicar.addEventListener('click', cerrarModalPublicar);
    btnCancelarPublicar.addEventListener('click', cerrarModalPublicar);

    // Cerrar modal al hacer clic fuera
    modalPublicar.addEventListener('click', function(e) {
        if (e.target === modalPublicar) {
            cerrarModalPublicar();
        }
    });

    // Contadores de caracteres
    document.getElementById('tituloPublicacion').addEventListener('input', function() {
        const longitud = this.value.length;
        document.getElementById('contadorTitulo').textContent = `${longitud}/100`;
    });

    document.getElementById('descripcionPublicacion').addEventListener('input', function() {
        const longitud = this.value.length;
        document.getElementById('contadorDescripcion').textContent = `${longitud}/500`;
    });

    // Subir imagen
    uploadArea.addEventListener('click', function() {
        inputImagen.click();
    });

    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', function() {
        this.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            procesarImagen(files[0]);
        }
    });

    inputImagen.addEventListener('change', function(e) {
        if (e.target.files.length > 0) {
            procesarImagen(e.target.files[0]);
        }
    });

    btnEliminarImagen.addEventListener('click', function() {
        eliminarImagen();
    });

    // Enviar publicación
    btnEnviarPublicar.addEventListener('click', function() {
        enviarPublicacion();
    });

    // Cargar categorías disponibles
    cargarCategoriasParaPublicar();
}

function abrirModalPublicar() {
    const modal = document.getElementById('modalPublicar');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Limpiar formulario
    document.getElementById('tituloPublicacion').value = '';
    document.getElementById('descripcionPublicacion').value = '';
    document.getElementById('contadorTitulo').textContent = '0/100';
    document.getElementById('contadorDescripcion').textContent = '0/500';
    eliminarImagen();
    limpiarCategoriasSeleccionadas();
}

function cerrarModalPublicar() {
    const modal = document.getElementById('modalPublicar');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function procesarImagen(file) {
    if (!file.type.startsWith('image/')) {
        alert('Por favor selecciona solo archivos de imagen');
        return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB
        alert('La imagen es demasiado grande. Máximo 5MB');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('previewImagen').src = e.target.result;
        document.getElementById('uploadArea').style.display = 'none';
        document.getElementById('vistaPreviaImagen').style.display = 'block';
    };
    reader.readAsDataURL(file);
}

function eliminarImagen() {
    document.getElementById('imagenPublicacion').value = '';
    document.getElementById('uploadArea').style.display = 'block';
    document.getElementById('vistaPreviaImagen').style.display = 'none';
}

function cargarCategoriasParaPublicar() {
    const selector = document.getElementById('selectorCategorias');
    const todasLasCategorias = obtenerTodasLasCategorias();
    
    let html = '';
    todasLasCategorias.forEach(categoria => {
        html += `
            <div class="categoria-opcion" data-categoria="${categoria}">
                <input type="checkbox" id="cat-${categoria}" value="${categoria}" style="display: none;">
                <span>${categoria}</span>
            </div>
        `;
    });
    
    selector.innerHTML = html;
    
    // Agregar event listeners a las categorías
    selector.querySelectorAll('.categoria-opcion').forEach(opcion => {
        opcion.addEventListener('click', function() {
            const categoria = this.getAttribute('data-categoria');
            toggleCategoriaSeleccionada(categoria, this);
        });
    });
}

function obtenerTodasLasCategorias() {
    // Categorías predefinidas
    const categoriasPredefinidas = [
        '#Mundial2026', '#Mundial2022', '#Mundial2018', '#Mundial2014',
        '#Argentina', '#Brasil', '#Mexico', '#España', '#Alemania',
        '#Goles', '#Partidos', '#Jugadas', '#Entrevistas', '#Celebraciones',
        '#Messi', '#CR7', '#Mbappe', '#Haaland'
    ];
    
    // Categorías agregadas por usuarios
    const categoriasUsuario = JSON.parse(localStorage.getItem('categoriasUsuario')) || [];
    const categoriasUsuarioValores = categoriasUsuario.map(cat => cat.valor);
    
    // Combinar y eliminar duplicados
    return [...new Set([...categoriasPredefinidas, ...categoriasUsuarioValores])];
}

function toggleCategoriaSeleccionada(categoria, elemento) {
    elemento.classList.toggle('seleccionada');
    
    const categoriasSeleccionadas = document.getElementById('categoriasSeleccionadas');
    const categoriaExistente = categoriasSeleccionadas.querySelector(`[data-categoria="${categoria}"]`);
    
    if (categoriaExistente) {
        categoriaExistente.remove();
    } else {
        const nuevaCategoria = document.createElement('div');
        nuevaCategoria.className = 'categoria-seleccionada';
        nuevaCategoria.setAttribute('data-categoria', categoria);
        nuevaCategoria.innerHTML = `
            ${categoria}
            <button class="btn-eliminar-categoria" onclick="removerCategoriaSeleccionada('${categoria}')">✕</button>
        `;
        categoriasSeleccionadas.appendChild(nuevaCategoria);
    }
}

function removerCategoriaSeleccionada(categoria) {
    const elemento = document.querySelector(`.categoria-opcion[data-categoria="${categoria}"]`);
    if (elemento) {
        elemento.classList.remove('seleccionada');
    }
    
    const categoriaSeleccionada = document.querySelector(`.categoria-seleccionada[data-categoria="${categoria}"]`);
    if (categoriaSeleccionada) {
        categoriaSeleccionada.remove();
    }
}

function limpiarCategoriasSeleccionadas() {
    document.querySelectorAll('.categoria-opcion.seleccionada').forEach(opcion => {
        opcion.classList.remove('seleccionada');
    });
    document.getElementById('categoriasSeleccionadas').innerHTML = '';
}

function obtenerCategoriasSeleccionadas() {
    const categorias = [];
    document.querySelectorAll('.categoria-seleccionada').forEach(cat => {
        categorias.push(cat.getAttribute('data-categoria'));
    });
    return categorias;
}

function enviarPublicacion() {
    const titulo = document.getElementById('tituloPublicacion').value.trim();
    const descripcion = document.getElementById('descripcionPublicacion').value.trim();
    const categorias = obtenerCategoriasSeleccionadas();
    const imagen = document.getElementById('previewImagen').src;
    const tieneImagen = imagen && imagen !== '';

    // Validaciones
    if (!titulo) {
        alert('Por favor ingresa un título');
        return;
    }

    if (!descripcion) {
        alert('Por favor ingresa una descripción');
        return;
    }

    if (categorias.length === 0) {
        alert('Por favor selecciona al menos una categoría');
        return;
    }

    // Crear objeto de publicación
    const nuevaPublicacion = {
        id: Date.now(),
        titulo: titulo,
        descripcion: descripcion,
        categorias: categorias,
        imagen: tieneImagen ? imagen : null,
        usuario: 'SimonSnow', // Usuario actual
        fecha: new Date().toISOString(),
        estado: 'pendiente', // pendiente, aprobada, rechazada
        likes: 0,
        comentarios: []
    };

    // Guardar en localStorage
    guardarPublicacionPendiente(nuevaPublicacion);
    
    // Mostrar confirmación
    alert('¡Publicación enviada para revisión! Un administrador la revisará pronto.');
    
    // Cerrar modal
    cerrarModalPublicar();
    
    // Actualizar contador de pendientes inmediatamente
    actualizarContadorPendientes();
}

function guardarPublicacionPendiente(publicacion) {
    let publicacionesPendientes = JSON.parse(localStorage.getItem('publicacionesPendientes')) || [];
    publicacionesPendientes.push(publicacion);
    localStorage.setItem('publicacionesPendientes', JSON.stringify(publicacionesPendientes));
}

function actualizarContadorPendientes() {
    const publicacionesPendientes = JSON.parse(localStorage.getItem('publicacionesPendientes')) || [];
    const contador = document.getElementById('contadorPendientesForo');
    if (contador) {
        contador.textContent = publicacionesPendientes.length;
    }
    
    // Si el administrador está inicializado, actualizar sus datos también
    if (window.administradorPublicacionesForo) {
        window.administradorPublicacionesForo.cargarDatos();
        window.administradorPublicacionesForo.actualizarContador();
    }
}
//FIN DEL MODAL PARA PUBLICAR

// Inicializar ambos sistemas
document.addEventListener('DOMContentLoaded', () => {
    window.administradorPublicacionesForo = new AdministradorPublicacionesForo();
    // Actualizar contador al cargar la página
    actualizarContadorPendientes();
});

