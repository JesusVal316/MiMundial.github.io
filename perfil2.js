// NOTIFICACIONES PERFIL - JavaScript específico
document.addEventListener('DOMContentLoaded', function() {
    const botonNotificacionesPerfil = document.getElementById('boton-notificaciones-perfil');
    const modalNotificacionesPerfil = document.getElementById('modal-notificaciones-perfil');
    const cerrarModalNotificacionesPerfil = document.getElementById('cerrar-modal-notificaciones-perfil');
    const listaNotificacionesPerfil = document.getElementById('lista-notificaciones-perfil');
    const btnMarcarTodasLeidasPerfil = document.getElementById('marcar-todas-leidas-perfil');
    const contadorMenuPerfil = document.getElementById('contador-menu-perfil');
    
    // Datos de ejemplo de notificaciones
    const notificacionesPerfil = [
        {
            id: 1,
            tipo: 'comentario',
            usuario: 'futbolero23',
            mensaje: 'comentó en tu publicación: "¡Gran análisis del partido!"',
            tiempo: 'Hace 2 horas',
            leida: false,
            publicacionId: 101
        },
        {
            id: 2,
            tipo: 'me_gusta',
            usuario: 'analista_pro',
            mensaje: 'le gustó tu publicación sobre el Mundial 2026',
            tiempo: 'Hace 5 horas',
            leida: false,
            publicacionId: 102
        },
        {
            id: 3,
            tipo: 'administracion',
            usuario: 'fan_mexicano_admin_pro',
            mensaje: 'aprobo tu publicacion "Entevista con el entrenador del Equipo NOMBRE DE EQUIPO PORQUE NO SE DE EQUIPOS"',
            tiempo: 'Ayer 05/1172025 18:56',
            leida: true,
            publicacionId: null
        },
        {
            id: 4,
            tipo: 'comentario',
            usuario: 'critico_deportivo',
            mensaje: 'respondió a tu comentario: "Estoy de acuerdo con tu punto de vista"',
            tiempo: 'Ayer',
            leida: true,
            publicacionId: 103
        }
    ];

    // Iconos por tipo de notificación
    const iconosTipoNotificacion = {
        'comentario': 'comentarios.png',
        'me_gusta': 'me_gusta.png',
        'seguidor': 'seguidor.png',
        'compartido': 'compartir.png'
    };

    // Abrir modal de notificaciones
    if (botonNotificacionesPerfil && modalNotificacionesPerfil) {
        botonNotificacionesPerfil.addEventListener('click', function() {
            modalNotificacionesPerfil.style.display = 'block';
            cargarNotificacionesPerfil();
            actualizarContadoresNotificacionesPerfil();
        });
    }

    // Cerrar modal de notificaciones
    if (cerrarModalNotificacionesPerfil) {
        cerrarModalNotificacionesPerfil.addEventListener('click', function() {
            modalNotificacionesPerfil.style.display = 'none';
        });
    }

    // Cerrar modal al hacer clic fuera
    if (modalNotificacionesPerfil) {
        modalNotificacionesPerfil.addEventListener('click', function(e) {
            if (e.target === modalNotificacionesPerfil) {
                modalNotificacionesPerfil.style.display = 'none';
            }
        });
    }

    // Marcar todas como leídas
    if (btnMarcarTodasLeidasPerfil) {
        btnMarcarTodasLeidasPerfil.addEventListener('click', function() {
            notificacionesPerfil.forEach(notificacion => {
                notificacion.leida = true;
            });
            cargarNotificacionesPerfil();
            actualizarContadoresNotificacionesPerfil();
        });
    }

    // Cargar notificaciones en la lista
    function cargarNotificacionesPerfil() {
        if (!listaNotificacionesPerfil) return;

        listaNotificacionesPerfil.innerHTML = '';

        if (notificacionesPerfil.length === 0) {
            listaNotificacionesPerfil.innerHTML = `
                <div class="notificaciones-vacias-perfil">
                    <img src="bell.png" alt="Sin notificaciones" class="icono-notificaciones-vacias-perfil">
                    <p>No tienes notificaciones</p>
                </div>
            `;
            return;
        }

        notificacionesPerfil.forEach(notificacion => {
            const notificacionElement = crearElementoNotificacionPerfil(notificacion);
            listaNotificacionesPerfil.appendChild(notificacionElement);
        });
    }

    // Crear elemento de notificación
    function crearElementoNotificacionPerfil(notificacion) {
        const div = document.createElement('div');
        div.className = `notificacion-item-perfil ${notificacion.leida ? 'leida' : 'no-leida'}`;
        
        const icono = iconosTipoNotificacion[notificacion.tipo] || 'notificacion.png';
        
        div.innerHTML = `
            <div class="icono-notificacion-perfil">
                <img src="${icono}" alt="${notificacion.tipo}" class="icono-tipo-notificacion-perfil">
            </div>
            <div class="contenido-notificacion-perfil">
                <p class="texto-notificacion-perfil">
                    <span class="usuario-notificacion-perfil">${notificacion.usuario}</span> 
                    ${notificacion.mensaje}
                </p>
                <span class="tiempo-notificacion-perfil">${notificacion.tiempo}</span>
                ${notificacion.publicacionId ? `
                    <div class="acciones-notificacion-perfil">
                        <button class="btn-accion-notificacion-perfil" data-publicacion="${notificacion.publicacionId}">
                            Ver publicación
                        </button>
                    </div>
                ` : ''}
            </div>
        `;

        // Marcar como leída al hacer clic
        div.addEventListener('click', function() {
            if (!notificacion.leida) {
                notificacion.leida = true;
                div.classList.remove('no-leida');
                div.classList.add('leida');
                actualizarContadoresNotificacionesPerfil();
            }
        });

        return div;
    }

    // Actualizar contadores de notificaciones
    function actualizarContadoresNotificacionesPerfil() {
        const notificacionesNoLeidas = notificacionesPerfil.filter(n => !n.leida).length;
        const totalNotificaciones = notificacionesPerfil.length;
        
        // Actualizar contador en el botón
        let contador = botonNotificacionesPerfil.querySelector('.contador-notificaciones-perfil');
        
        if (notificacionesNoLeidas > 0) {
            if (!contador) {
                contador = document.createElement('span');
                contador.className = 'contador-notificaciones-perfil';
                botonNotificacionesPerfil.appendChild(contador);
            }
            contador.textContent = notificacionesNoLeidas > 9 ? '9+' : notificacionesNoLeidas;
        } else if (contador) {
            contador.remove();
        }
        
        // Actualizar contador en el modal
        if (contadorMenuPerfil) {
            contadorMenuPerfil.textContent = `${notificacionesNoLeidas} nuevas`;
        }
    }

    // Cerrar con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalNotificacionesPerfil.style.display === 'block') {
            modalNotificacionesPerfil.style.display = 'none';
        }
    });

    // Inicializar contadores al cargar la página
    actualizarContadoresNotificacionesPerfil();
});

// FUNCIONALIDADES ESPECÍFICAS PARA LA PÁGINA DE PERFIL
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página de perfil cargada - JavaScript funcionando');
    
    // Agregar estilos para el modal responsive
    const agregarEstilosModalResponsive = () => {
        const styles = `
            /* Estilos responsive para el modal de editar perfil */
            
        /* Estilos para el botón de borrar cuenta */
        .btn-borrar-cuenta {
            background: #dc3545;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            width: 100%;
            transition: all 0.3s ease;
            margin-top: 10px;
        }

        .btn-borrar-cuenta:hover {
            background: #c82333;
            transform: translateY(-1px);
            box-shadow: 0 4px 8px rgba(220, 53, 69, 0.3);
        }

        .btn-borrar-cuenta:active {
            transform: translateY(0);
        }

        /* Estilos para el modal de confirmación de borrado */
        .modal-confirmacion-borrado {
            position: fixed;
            z-index: 2000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.7);
            display: none;
        }

        .modal-confirmacion-contenido {
            background-color: #fefefe;
            margin: 20% auto;
            padding: 30px;
            border-radius: 12px;
            width: 90%;
            max-width: 400px;
            text-align: center;
            box-shadow: 0 8px 25px rgba(0,0,0,0.3);
            border: 2px solid #dc3545;
        }

        .modal-confirmacion-contenido h3 {
            color: #dc3545;
            margin-bottom: 15px;
            font-size: 1.4em;
        }

        .modal-confirmacion-contenido p {
            color: #666;
            margin-bottom: 25px;
            line-height: 1.5;
        }

        .botones-confirmacion {
            display: flex;
            gap: 15px;
            justify-content: center;
        }

        .btn-confirmar-borrado {
            background: #dc3545;
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            transition: all 0.3s ease;
            flex: 1;
        }

        .btn-confirmar-borrado:hover {
            background: #c82333;
            transform: translateY(-1px);
        }

        .btn-cancelar-borrado {
            background: #6c757d;
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            transition: all 0.3s ease;
            flex: 1;
        }

        .btn-cancelar-borrado:hover {
            background: #545b62;
            transform: translateY(-1px);
        }

        @media (max-width: 480px) {
            .botones-confirmacion {
                flex-direction: column;
            }
            
            .modal-confirmacion-contenido {
                margin: 10% auto;
                padding: 20px;
            }
        }

            .modal1 {
                position: fixed;
                z-index: 1000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                overflow: auto;
                background-color: rgba(0,0,0,0.5);
            }

            .modal1-contenido {
                background-color: #fefefe;
                margin: 5% auto;
                padding: 25px;
                border-radius: 12px;
                width: 90%;
                max-width: 500px;
                max-height: 85vh;
                overflow-y: auto;
                position: relative;
                box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            }

            .cerrar-modal1 {
                position: absolute;
                top: 15px;
                right: 20px;
                font-size: 28px;
                font-weight: bold;
                cursor: pointer;
                color: #666;
                z-index: 1001;
            }

            .cerrar-modal1:hover {
                color: #000;
            }

            .modal1-contenido h3 {
                margin: 0 0 20px 0;
                color: #333;
                font-size: 1.5em;
                border-bottom: 2px solid #007BFF;
                padding-bottom: 10px;
            }

            /* Estilos para el formulario responsive */
            #form-editar-perfil {
                display: flex;
                flex-direction: column;
                gap: 15px;
            }

            .campo-formulario {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }

            .campo-formulario label {
                font-weight: 600;
                color: #333;
                font-size: 14px;
            }

            .campo-formulario input,
            .campo-formulario select {
                padding: 12px;
                border: 2px solid #e0e0e0;
                border-radius: 8px;
                font-size: 14px;
                transition: border-color 0.3s ease;
                width: 100%;
                box-sizing: border-box;
            }

            .campo-formulario input:focus,
            .campo-formulario select:focus {
                outline: none;
                border-color: #007BFF;
            }

            /* Contenedor para subir foto - diseño compacto */
            .contenedor-subir-foto {
                display: flex;
                flex-direction: column;
                gap: 12px;
                margin-top: 5px;
            }

            .btn-subir-foto {
                background: #007BFF;
                color: white;
                border: none;
                padding: 12px 16px;
                border-radius: 8px;
                cursor: pointer;
                font-size: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                transition: all 0.3s ease;
                width: 100%;
            }

            .btn-subir-foto:hover {
                background: #0056b3;
                transform: translateY(-1px);
            }

            .icono-camara-subir {
                width: 18px;
                height: 18px;
            }

            .vista-previa-foto {
                display: none;
                flex-direction: column;
                align-items: center;
                gap: 8px;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 8px;
                border: 2px dashed #dee2e6;
            }

            .vista-previa-foto.mostrar {
                display: flex;
            }

            .foto-previa {
                width: 70px;
                height: 70px;
                border-radius: 50%;
                object-fit: cover;
                border: 3px solid #007BFF;
            }

            .texto-vista-previa {
                font-size: 12px;
                color: #666;
                font-weight: 500;
            }

            /* Botones del modal - diseño responsive */
            .botones-modal1 {
                display: flex;
                gap: 12px;
                margin-top: 20px;
                flex-wrap: wrap;
            }

            .btn-guardar {
                background: #28a745;
                color: white;
                border: none;
                padding: 14px 24px;
                border-radius: 8px;
                cursor: pointer;
                font-size: 14px;
                font-weight: 600;
                flex: 1;
                min-width: 120px;
                transition: all 0.3s ease;
            }

            .btn-guardar:hover {
                background: #218838;
                transform: translateY(-1px);
            }

            .btn-cancelar {
                background: #6c757d;
                color: white;
                border: none;
                padding: 14px 24px;
                border-radius: 8px;
                cursor: pointer;
                font-size: 14px;
                font-weight: 600;
                flex: 1;
                min-width: 120px;
                transition: all 0.3s ease;
            }

            .btn-cancelar:hover {
                background: #545b62;
                transform: translateY(-1px);
            }

            /* Media queries para pantallas pequeñas */
            @media (max-width: 768px) {
                .modal1-contenido {
                    margin: 10% auto;
                    width: 95%;
                    padding: 20px;
                    max-height: 90vh;
                }

                .botones-modal1 {
                    flex-direction: column;
                }

                .btn-guardar,
                .btn-cancelar {
                    flex: none;
                    width: 100%;
                }

                .contenedor-subir-foto {
                    gap: 10px;
                }

                .btn-subir-foto {
                    padding: 14px 16px;
                    font-size: 13px;
                }
            }

            @media (max-width: 480px) {
                .modal1-contenido {
                    margin: 5% auto;
                    width: 98%;
                    padding: 15px;
                }

                .modal1-contenido h3 {
                    font-size: 1.3em;
                    margin-bottom: 15px;
                }

                .campo-formulario input,
                .campo-formulario select {
                    padding: 10px;
                    font-size: 13px;
                }

                .vista-previa-foto {
                    padding: 12px;
                }

                .foto-previa {
                    width: 60px;
                    height: 60px;
                }
            }

            /* Scroll personalizado para el modal */
            .modal1-contenido::-webkit-scrollbar {
                width: 6px;
            }

            .modal1-contenido::-webkit-scrollbar-track {
                background: #f1f1f1;
                border-radius: 10px;
            }

            .modal1-contenido::-webkit-scrollbar-thumb {
                background: #c1c1c1;
                border-radius: 10px;
            }

            .modal1-contenido::-webkit-scrollbar-thumb:hover {
                background: #a8a8a8;
            }

            
        `;

        
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    };

    // SISTEMA DE BORRAR PUBLICACIONES
    class SistemaBorrarPublicaciones {
        constructor() {
            this.publicacionesUsuario = [];
            this.init();
        }

        init() {
            this.cargarPublicacionesUsuario();
            this.setupEventListeners();
            this.renderPublicaciones();
        }

        cargarPublicacionesUsuario() {
            // Cargar publicaciones del usuario desde localStorage
            this.publicacionesUsuario = JSON.parse(localStorage.getItem('publicacionesUsuarioPerfil')) || [];
            
            // Si no hay publicaciones guardadas, inicializar con las del HTML
            if (this.publicacionesUsuario.length === 0) {
                this.inicializarPublicacionesDesdeHTML();
            }
        }

        inicializarPublicacionesDesdeHTML() {
            const publicacionesHTML = document.querySelectorAll('.publicacion');
            
            publicacionesHTML.forEach((pub, index) => {
                const publicacion = {
                    id: `pub-usuario-${Date.now() + index}`,
                    titulo: pub.querySelector('.pie-publicacion span').textContent,
                    imagen: pub.querySelector('.img-publicacion').src,
                    descripcion: this.extraerTexto(pub, 'Descripcion:'),
                    likes: this.extraerNumero(pub, 'Likes:'),
                    vistas: this.extraerNumero(pub, 'Vistas:'),
                    comentarios: this.extraerNumero(pub, 'Comentarios:'),
                    categoria: this.extraerTexto(pub, 'Categoria:'),
                    fechaPublicacion: this.extraerTexto(pub, 'Fecha de la Publicacion:'),
                    fechaAprobacion: this.extraerTexto(pub, 'Fecha de Aprobacion:'),
                    estado: this.extraerTexto(pub, 'Estado:'),
                    eliminada: false
                };
                
                this.publicacionesUsuario.push(publicacion);
            });
            
            this.guardarPublicacionesUsuario();
        }

        extraerNumero(publicacion, texto) {
            const elemento = Array.from(publicacion.querySelectorAll('.datos-ocultos p'))
                .find(p => p.textContent.includes(texto));
            return elemento ? parseInt(elemento.textContent.match(/\d+/)) || 0 : 0;
        }

        extraerTexto(publicacion, texto) {
            const elemento = Array.from(publicacion.querySelectorAll('.datos-ocultos p'))
                .find(p => p.textContent.includes(texto));
            return elemento ? elemento.textContent.replace(texto, '').trim() : '';
        }

        setupEventListeners() {
            // Event listener para botones de borrar
            document.addEventListener('click', (e) => {
                if (e.target.closest('.borrar')) {
                    const publicacionElement = e.target.closest('.publicacion');
                    this.mostrarConfirmacionBorrado(publicacionElement);
                }
            });
        }

        mostrarConfirmacionBorrado(publicacionElement) {
            const titulo = publicacionElement.querySelector('.pie-publicacion span').textContent;
            
            if (confirm(`¿Estás seguro de que quieres borrar la publicación "${titulo}"?\n\nEsta acción no se puede deshacer.`)) {
                this.borrarPublicacion(publicacionElement);
            }
        }

        borrarPublicacion(publicacionElement) {
            const titulo = publicacionElement.querySelector('.pie-publicacion span').textContent;
            
            // Encontrar la publicación en el array
            const pubIndex = this.publicacionesUsuario.findIndex(pub => 
                pub.titulo === titulo && !pub.eliminada
            );
            
            if (pubIndex !== -1) {
                // Marcar como eliminada
                this.publicacionesUsuario[pubIndex].eliminada = true;
                this.publicacionesUsuario[pubIndex].fechaEliminacion = new Date().toISOString();
                
                this.guardarPublicacionesUsuario();
                
                // Ocultar la publicación en la UI con animación
                publicacionElement.style.opacity = '0';
                publicacionElement.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    publicacionElement.style.display = 'none';
                }, 300);
                
                // Mostrar alerta de éxito
                this.mostrarAlertaExito('✅ Publicación borrada correctamente');
                
                // Actualizar estadísticas
                this.actualizarEstadisticas();
            }
        }

        mostrarAlertaExito(mensaje) {
            // Crear alerta personalizada
            const alerta = document.createElement('div');
            alerta.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #4CAF50;
                color: white;
                padding: 15px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 10000;
                font-family: Arial, sans-serif;
                font-size: 14px;
                font-weight: 500;
                animation: slideInRight 0.3s ease-out;
                border-left: 4px solid #2E7D32;
            `;
            
            alerta.textContent = mensaje;
            document.body.appendChild(alerta);
            
            // Remover después de 3 segundos
            setTimeout(() => {
                alerta.style.animation = 'slideOutRight 0.3s ease-in';
                setTimeout(() => {
                    if (alerta.parentNode) {
                        alerta.parentNode.removeChild(alerta);
                    }
                }, 300);
            }, 3000);
        }

        renderPublicaciones() {
            const gridPublicaciones = document.querySelector('.grid-publicaciones');
            if (!gridPublicaciones) return;
            
            // Ocultar publicaciones eliminadas
            const publicacionesEliminadas = this.publicacionesUsuario.filter(pub => pub.eliminada);
            
            publicacionesEliminadas.forEach(pubEliminada => {
                const publicacionElement = Array.from(gridPublicaciones.querySelectorAll('.publicacion'))
                    .find(pub => {
                        const titulo = pub.querySelector('.pie-publicacion span').textContent;
                        return titulo === pubEliminada.titulo;
                    });
                
                if (publicacionElement) {
                    publicacionElement.style.display = 'none';
                }
            });
        }

        guardarPublicacionesUsuario() {
            localStorage.setItem('publicacionesUsuarioPerfil', JSON.stringify(this.publicacionesUsuario));
        }

        actualizarEstadisticas() {
            const totalPublicaciones = this.publicacionesUsuario.filter(pub => !pub.eliminada).length;
            const publicacionesEliminadas = this.publicacionesUsuario.filter(pub => pub.eliminada).length;
            
            console.log(`📊 Estadísticas - Publicaciones activas: ${totalPublicaciones}, Eliminadas: ${publicacionesEliminadas}`);
            
            // Actualizar contador en la interfaz si existe
            this.actualizarContadorUI(totalPublicaciones);
        }

        actualizarContadorUI(totalPublicaciones) {
            // Buscar o crear un elemento para mostrar el contador
            let contador = document.getElementById('contador-publicaciones-usuario');
            
            if (!contador) {
                contador = document.createElement('div');
                contador.id = 'contador-publicaciones-usuario';
                contador.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: #007BFF;
                    color: white;
                    padding: 10px 15px;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: bold;
                    z-index: 999;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                `;
                document.body.appendChild(contador);
            }
            
            contador.textContent = `📝 Publicaciones: ${totalPublicaciones}`;
            
            // Ocultar después de 5 segundos
            setTimeout(() => {
                contador.style.opacity = '0';
                contador.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    if (contador.parentNode && totalPublicaciones > 0) {
                        contador.parentNode.removeChild(contador);
                    }
                }, 500);
            }, 5000);
        }

        // Método para restaurar publicaciones (opcional - para desarrollo)
        restaurarTodasLasPublicaciones() {
            this.publicacionesUsuario.forEach(pub => {
                pub.eliminada = false;
                delete pub.fechaEliminacion;
            });
            this.guardarPublicacionesUsuario();
            location.reload();
        }
    }

    // SISTEMA DE GESTIÓN DE PERFIL
    class SistemaGestionPerfil {
        constructor() {
            this.datosPerfil = {};
            this.init();
        }

        init() {
            this.cargarDatosPerfil();
            this.setupEventListeners();
            this.aplicarDatosGuardados();
        }

        cargarDatosPerfil() {
            // Cargar datos del perfil desde localStorage
            this.datosPerfil = JSON.parse(localStorage.getItem('datosPerfilUsuario')) || {
                nombre: 'SimonSnow',
                email: 'ejemplo_de_correo@gmail.com',
                pais: 'Mexico',
                fotoPerfil: 'user.png',
                colorBorde: '#d60000',
                miembroDesde: 'Enero 2024'
            };
        }

        setupEventListeners() {
            // Event listener para subir foto de perfil
            this.setupSubirFoto();
        }

        setupSubirFoto() {
            // Crear input file dinámicamente
            const inputFile = document.createElement('input');
            inputFile.type = 'file';
            inputFile.accept = 'image/*';
            inputFile.style.display = 'none';
            inputFile.id = 'input-foto-perfil';
            document.body.appendChild(inputFile);

            // Agregar botón para subir foto en el modal
            this.agregarBotonSubirFoto();

            // Event listener para el input file
            inputFile.addEventListener('change', (e) => {
                this.procesarFotoPerfil(e.target.files[0]);
            });

            
        }

        agregarBotonSubirFoto() {
            const form = document.getElementById('form-editar-perfil');
            if (!form) return;

            // Verificar si ya existe el botón
            if (!document.getElementById('btn-subir-foto')) {
                const botonSubirHTML = `
                    <div class="campo-formulario">
                        <label for="input-foto-perfil">Foto de perfil:</label>
                        <div class="contenedor-subir-foto">
                            <button type="button" class="btn-subir-foto" id="btn-subir-foto">
                                <img src="camara.png" alt="Cámara" class="icono-camara-subir">
                                Elegir foto del dispositivo
                            </button>
                            <div class="vista-previa-foto" id="vista-previa-foto">
                                <img src="${this.datosPerfil.fotoPerfil}" alt="Vista previa" class="foto-previa">
                                <span class="texto-vista-previa">Vista previa</span>
                            </div>
                        </div>
                    </div>
                `;

                // Insertar después del campo de nombre
                const campoNombre = form.querySelector('#editar-nombre').parentElement;
                campoNombre.insertAdjacentHTML('afterend', botonSubirHTML);

                // Event listener para el botón de subir foto
                document.getElementById('btn-subir-foto').addEventListener('click', () => {
                    document.getElementById('input-foto-perfil').click();
                });

                // Mostrar vista previa si ya hay una foto guardada
                if (this.datosPerfil.fotoPerfil && this.datosPerfil.fotoPerfil !== 'user.png') {
                    const vistaPrevia = document.getElementById('vista-previa-foto');
                    if (vistaPrevia) {
                        vistaPrevia.classList.add('mostrar');
                    }
                }
            }
        }

        procesarFotoPerfil(archivo) {
            if (!archivo) return;

            // Validar que sea una imagen
            if (!archivo.type.startsWith('image/')) {
                alert('Por favor selecciona un archivo de imagen válido.');
                return;
            }

            // Validar tamaño (máximo 5MB)
            if (archivo.size > 5 * 1024 * 1024) {
                alert('La imagen es demasiado grande. El tamaño máximo permitido es 5MB.');
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                // Actualizar vista previa
                const vistaPrevia = document.getElementById('vista-previa-foto');
                if (vistaPrevia) {
                    const img = vistaPrevia.querySelector('.foto-previa');
                    img.src = e.target.result;
                    vistaPrevia.classList.add('mostrar');
                }

                // Guardar la foto en los datos del perfil
                this.datosPerfil.fotoPerfil = e.target.result;
                
                // Mostrar mensaje de éxito
                this.mostrarMensaje('✅ Foto de perfil cargada correctamente');
            };

            reader.readAsDataURL(archivo);
        }

        guardarDatosPerfil() {
            localStorage.setItem('datosPerfilUsuario', JSON.stringify(this.datosPerfil));
        }

        aplicarDatosGuardados() {
            // Aplicar foto de perfil guardada
            const fotoPerfil = document.getElementById('fotoPerfil');
            if (fotoPerfil && this.datosPerfil.fotoPerfil) {
                fotoPerfil.src = this.datosPerfil.fotoPerfil;
            }

            // Aplicar color de borde guardado
            if (this.datosPerfil.colorBorde && fotoPerfil) {
                fotoPerfil.style.borderColor = this.datosPerfil.colorBorde;
            }

            // Aplicar datos del formulario
            this.llenarFormularioConDatosGuardados();
        }

        llenarFormularioConDatosGuardados() {
            document.getElementById('editar-nombre').value = this.datosPerfil.nombre;
            document.getElementById('editar-email').value = this.datosPerfil.email;
            document.getElementById('editar-pais').value = this.datosPerfil.pais;
            
            // Actualizar vista previa en el formulario
            const vistaPrevia = document.getElementById('vista-previa-foto');
            if (vistaPrevia) {
                const img = vistaPrevia.querySelector('.foto-previa');
                img.src = this.datosPerfil.fotoPerfil;
                // Mostrar vista previa solo si no es la foto por defecto
                if (this.datosPerfil.fotoPerfil && this.datosPerfil.fotoPerfil !== 'user.png') {
                    vistaPrevia.classList.add('mostrar');
                }
            }
        }

        actualizarPerfil(nuevosDatos) {
            // Actualizar datos
            this.datosPerfil = { ...this.datosPerfil, ...nuevosDatos };
            
            // Guardar en localStorage
            this.guardarDatosPerfil();
            
            // Aplicar cambios en la interfaz
            this.aplicarCambiosEnInterfaz();
            
            // Mostrar mensaje de éxito
            this.mostrarMensaje('✅ Perfil actualizado correctamente');
        }

        aplicarCambiosEnInterfaz() {
            // Actualizar foto de perfil principal
            const fotoPerfil = document.getElementById('fotoPerfil');
            if (fotoPerfil) {
                fotoPerfil.src = this.datosPerfil.fotoPerfil;
            }

            // Actualizar nombre en el perfil
            const nombreUsuario = document.querySelector('.datos-perfil h2');
            if (nombreUsuario) {
                nombreUsuario.textContent = this.datosPerfil.nombre;
            }

            // Actualizar país y nacionalidad
            const paisUsuario = document.querySelector('.datos-perfil p:nth-child(2)');
            const nacionalidadUsuario = document.querySelector('.datos-perfil p:nth-child(3)');
            
            if (paisUsuario) {
                paisUsuario.innerHTML = `<strong>País:</strong> ${this.datosPerfil.pais}`;
            }
            if (nacionalidadUsuario) {
                nacionalidadUsuario.innerHTML = `<strong>Nacionalidad:</strong> ${this.datosPerfil.pais}`;
            }
        }

        mostrarMensaje(mensaje) {
            const alerta = document.createElement('div');
            alerta.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #4CAF50;
                color: white;
                padding: 15px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 10000;
                font-family: Arial, sans-serif;
                font-size: 14px;
                font-weight: 500;
                animation: slideInRight 0.3s ease-out;
                border-left: 4px solid #2E7D32;
            `;
            
            alerta.textContent = mensaje;
            document.body.appendChild(alerta);
            
            setTimeout(() => {
                alerta.style.animation = 'slideOutRight 0.3s ease-in';
                setTimeout(() => {
                    if (alerta.parentNode) {
                        alerta.parentNode.removeChild(alerta);
                    }
                }, 300);
            }, 3000);
        }

        // Método para guardar color de borde
        guardarColorBorde(color) {
            this.datosPerfil.colorBorde = color;
            this.guardarDatosPerfil();
        }

        // En la clase SistemaGestionPerfil, agrega este método:
crearModalConfirmacionBorrado() {
    // Verificar si ya existe el modal
    if (document.getElementById('modal-confirmacion-borrado')) return;

    const modalHTML = `
        <div id="modal-confirmacion-borrado" class="modal-confirmacion-borrado">
            <div class="modal-confirmacion-contenido">
                <h3>¿Estás absolutamente seguro?</h3>
                <p>Esta acción <strong>NO SE PUEDE DESHACER</strong>. Se eliminará permanentemente:</p>
                <ul style="text-align: left; color: #666; margin: 15px 0;">
                    <li>Tu cuenta y perfil</li>
                    <li>Todas tus publicaciones</li>
                    <li>Tus comentarios y likes</li>
                    <li>Tus datos personales</li>
                </ul>
                <p><strong>¿Confirmas que quieres borrar tu cuenta?</strong></p>
                <div class="botones-confirmacion">
                    <button class="btn-confirmar-borrado" id="confirmar-borrado">
                        Sí, borrar mi cuenta
                    </button>
                    <button class="btn-cancelar-borrado" id="cancelar-borrado">
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Event listeners para el modal de confirmación
    document.getElementById('confirmar-borrado').addEventListener('click', () => {
        this.borrarCuentaDefinitivamente();
    });

    document.getElementById('cancelar-borrado').addEventListener('click', () => {
        this.cerrarModalConfirmacion();
    });

    // Cerrar modal al hacer clic fuera
    document.getElementById('modal-confirmacion-borrado').addEventListener('click', (e) => {
        if (e.target.id === 'modal-confirmacion-borrado') {
            this.cerrarModalConfirmacion();
        }
    });

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.getElementById('modal-confirmacion-borrado').style.display === 'block') {
            this.cerrarModalConfirmacion();
        }
    });
}

        // En la clase SistemaGestionPerfil, agrega estos métodos:

mostrarConfirmacionBorrado() {
    this.crearModalConfirmacionBorrado();
    document.getElementById('modal-confirmacion-borrado').style.display = 'block';
}

cerrarModalConfirmacion() {
    const modal = document.getElementById('modal-confirmacion-borrado');
    if (modal) {
        modal.style.display = 'none';
    }
}

borrarCuentaDefinitivamente() {
    // Mostrar mensaje final
    this.mostrarMensaje('🗑️ Cuenta eliminada permanentemente');
    
    // Cerrar todos los modales
    this.cerrarModalConfirmacion();
    if (document.getElementById('modal1-editar')) {
        document.getElementById('modal1-editar').style.display = 'none';
    }
    
    // Limpiar todos los datos del localStorage
    localStorage.removeItem('datosPerfilUsuario');
    localStorage.removeItem('publicacionesUsuarioPerfil');
    
    // Redirigir a la página de inicio después de un breve delay
    setTimeout(() => {
        alert('Tu cuenta ha sido eliminada permanentemente. Serás redirigido a la página de inicio.');
        window.location.href = 'inicio.html';
    }, 2000);
}

// Y modifica el init para incluir el event listener del botón de borrar cuenta
setupEventListeners() {
    this.setupSubirFoto();
    this.setupBotonBorrarCuenta();
}

setupBotonBorrarCuenta() {
    // Usar event delegation para el botón de borrar cuenta
    document.addEventListener('click', (e) => {
        if (e.target.id === 'btn-borrar-cuenta' || e.target.closest('#btn-borrar-cuenta')) {
            e.preventDefault();
            this.mostrarConfirmacionBorrado();
        }
    });
}
        


    }

    // Agregar estilos para las animaciones
    const agregarEstilosAnimaciones = () => {
        const styles = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
            
            .publicacion {
                transition: all 0.3s ease;
            }
            
            .borrar {
                cursor: pointer;
                transition: all 0.2s ease;
            }
            
            .borrar:hover {
                background: #ffcdd2 !important;
                transform: translateY(-1px);
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    };

    // Inicializar sistemas
    agregarEstilosModalResponsive();
    agregarEstilosAnimaciones();
    
    const sistemaBorrarPublicaciones = new SistemaBorrarPublicaciones();
    const sistemaGestionPerfil = new SistemaGestionPerfil();

    // Hacer disponibles globalmente para debugging
    window.sistemaBorrarPublicaciones = sistemaBorrarPublicaciones;
    window.sistemaGestionPerfil = sistemaGestionPerfil;
    
    // Elementos del modal de editar perfil
    const modal1Editar = document.getElementById('modal1-editar');
    const btnEditarPerfil = document.querySelector('.icono-editar');
    const btnCerrarModal1 = document.querySelector('.cerrar-modal1');
    const btnCancelar = document.querySelector('.btn-cancelar');
    const formEditarPerfil = document.getElementById('form-editar-perfil');
    const btnCompartirPerfil = document.querySelector('.icono-compartir');
    
    // Mostrar modal de editar perfil
    if (btnEditarPerfil) {
        btnEditarPerfil.addEventListener('click', () => {
            console.log('Abriendo modal de editar perfil');
            modal1Editar.style.display = 'block';
            // Llenar formulario con datos actuales al abrir
            sistemaGestionPerfil.llenarFormularioConDatosGuardados();
        });
    }
    
    // Cerrar modal
    function cerrarModal1() {
        modal1Editar.style.display = 'none';
    }
    
    if (btnCerrarModal1) {
        btnCerrarModal1.addEventListener('click', cerrarModal1);
    }
    
    if (btnCancelar) {
        btnCancelar.addEventListener('click', cerrarModal1);
    }
    
    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', (event) => {
        if (event.target === modal1Editar) {
            cerrarModal1();
        }
    });
    
    // Guardar cambios del perfil
    if (formEditarPerfil) {
        formEditarPerfil.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nuevosDatos = {
                nombre: document.getElementById('editar-nombre').value,
                email: document.getElementById('editar-email').value,
                pais: document.getElementById('editar-pais').value
            };
            
            // Actualizar perfil con todos los datos (incluyendo foto si se subió)
            sistemaGestionPerfil.actualizarPerfil(nuevosDatos);
            
            cerrarModal1();
        });
    }
    
    // Compartir perfil
    if (btnCompartirPerfil) {
        btnCompartirPerfil.addEventListener('click', () => {
            const urlPerfil = window.location.href;
            
            navigator.clipboard.writeText(urlPerfil).then(() => {
                sistemaGestionPerfil.mostrarMensaje('📋 Enlace del perfil copiado al portapapeles');
            }).catch(err => {
                const textArea = document.createElement('textarea');
                textArea.value = urlPerfil;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                sistemaGestionPerfil.mostrarMensaje('📋 Enlace del perfil copiado al portapapeles');
            });
        });
    }
    
    // Mostrar/ocultar paleta de colores
    const editarFotoBtn = document.getElementById('editarFoto');
    const colorPaleta = document.getElementById('colorPaleta');
    const fotoPerfil = document.getElementById('fotoPerfil');

    if (editarFotoBtn && colorPaleta) {
        editarFotoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            colorPaleta.classList.toggle('activo');
        });
    }

    // Cambiar color del BORDE de la foto de perfil
    const colorOpciones = document.querySelectorAll('.color-opcion');

    colorOpciones.forEach(opcion => {
        opcion.addEventListener('click', () => {
            const color = opcion.getAttribute('data-color');
            if (fotoPerfil) {
                if (color === 'transparent') {
                    fotoPerfil.style.borderColor = 'transparent';
                } else {
                    fotoPerfil.style.borderColor = color;
                }
                // Guardar color en el sistema de perfil
                sistemaGestionPerfil.guardarColorBorde(color);
            }
            if (colorPaleta) {
                colorPaleta.classList.remove('activo');
            }
        });
    });

    // Mostrar/ocultar datos en publicaciones (solo una a la vez)
    const desplegables = document.querySelectorAll('.desplegable');
    let publicacionActiva = null;

    desplegables.forEach(boton => {
        boton.addEventListener('click', () => {
            const publicacion = boton.closest('.publicacion');
            const datosOcultos = publicacion.querySelector('.datos-ocultos');
            
            // Cerrar la publicación activa anterior si existe
            if (publicacionActiva && publicacionActiva !== publicacion) {
                const datosAnteriores = publicacionActiva.querySelector('.datos-ocultos');
                const botonAnterior = publicacionActiva.querySelector('.desplegable');
                datosAnteriores.classList.remove('activo');
                botonAnterior.classList.remove('activo');
            }
            
            // Abrir/cerrar la publicación actual
            datosOcultos.classList.toggle('activo');
            boton.classList.toggle('activo');
            
            // Actualizar la publicación activa
            if (datosOcultos.classList.contains('activo')) {
                publicacionActiva = publicacion;
            } else {
                publicacionActiva = null;
            }
        });
    });

    // Cerrar publicación activa al hacer clic fuera
    document.addEventListener('click', (event) => {
        if (publicacionActiva && !publicacionActiva.contains(event.target)) {
            const datosOcultos = publicacionActiva.querySelector('.datos-ocultos');
            const boton = publicacionActiva.querySelector('.desplegable');
            datosOcultos.classList.remove('activo');
            boton.classList.remove('activo');
            publicacionActiva = null;
        }
        
        // Cerrar paleta de colores
        if (editarFotoBtn && colorPaleta && colorPaleta.classList.contains('activo')) {
            if (!editarFotoBtn.contains(event.target) && !colorPaleta.contains(event.target)) {
                colorPaleta.classList.remove('activo');
            }
        }
    });

    // Funcionalidad para ordenar publicaciones
    const selectOrdenar = document.getElementById('ordenarPublicaciones');
    if (selectOrdenar) {
        selectOrdenar.addEventListener('change', function() {
            const criterio = this.value;
            if (criterio) {
                ordenarPublicaciones(criterio);
            }
        });
    }

    function ordenarPublicaciones(criterio) {
        const contenedores = document.querySelectorAll('.grid-publicaciones');
        
        contenedores.forEach(contenedor => {
            const publicaciones = Array.from(contenedor.querySelectorAll('.publicacion'));
            
            publicaciones.sort((a, b) => {
                switch(criterio) {
                    case 'fecha':
                        return new Date(b.dataset.fecha) - new Date(a.dataset.fecha);
                    case 'alfabeto':
                        return a.querySelector('.pie-publicacion span').textContent.localeCompare(b.querySelector('.pie-publicacion span').textContent);
                    case 'categoria':
                        return a.dataset.categoria.localeCompare(b.dataset.categoria);
                    case 'likes':
                        return parseInt(b.dataset.likes) - parseInt(a.dataset.likes);
                    case 'vistas':
                        return parseInt(b.dataset.vistas) - parseInt(a.dataset.vistas);
                    default:
                        return 0;
                }
            });
            // Reordenar las publicaciones en el DOM
            publicaciones.forEach(publicacion => {
                contenedor.appendChild(publicacion);
            });
        });
    }
});

