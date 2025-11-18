




// DATOS DE EJEMPLO - PARTIDOS MUNDIAL 2026
const partidosMundial2026 = [
    {
        id: 1,
        fase: "fase-grupos",
        fecha: "2026-06-11T20:00:00",
        estadio: "estadio-azteca",
        equipoLocal: "México",
        imagenlocal: "banderamexico.jpg",
        equipoVisitante: "Canadá",
        imagenvisitante: "Canadabandera.png",
        resultado: "",
        imagenEstadio: "https://ejemplo.com/azteca.jpg",
        estado: "pendiente"
    },
    {
        id: 2,
        fase: "fase-grupos",
        fecha: "2026-06-12T17:00:00",
        estadio: "estadio-atlantico",
        equipoLocal: "Estados Unidos",
        imagenlocal: "banderausa.jpeg",
        equipoVisitante: "Brasil",
        imagenvisitante: "banderabrasil.jpg",
        resultado: "",
        imagenEstadio: "https://ejemplo.com/atlantico.jpg",
        estado: "pendiente"
    },
    {
        id: 3,
        fase: "octavos",
        fecha: "2026-07-04T16:00:00",
        estadio: "estadio-pacifico",
        equipoLocal: "Argentina",
        imagenlocal: "banderaargentina.jpg",
        equipoVisitante: "Francia",
        imagenvisitante: "banderafrancia.webp",
        resultado: "",
        imagenEstadio: "https://ejemplo.com/pacifico.jpg",
        estado: "pendiente"
    },
    {
        id: 4,
        fase: "final",
        fecha: "2026-07-19T19:00:00",
        estadio: "estadio-metropolitano",
        equipoLocal: "Por definir",
        imagenlocal: "banderadefault.webp",
        equipoVisitante: "Por definir",
        imagenvisitante: "banderadefault.webp",
        resultado: "",
        imagenEstadio: "https://ejemplo.com/metropolitano.jpg",
        estado: "pendiente"
    }
];

// Información de estadios
const estadiosInfo = {
    "estadio-azteca": {
        nombre: "Estadio Azteca - Ciudad de México",
        capacidad: "87,000",
        ciudad: "Ciudad de México, México"
    },
    "estadio-atlantico": {
        nombre: "Estadio Atlántico - Nueva York",
        capacidad: "82,500",
        ciudad: "Nueva York, EE.UU."
    },
    "estadio-pacifico": {
        nombre: "Estadio Pacífico - Vancouver",
        capacidad: "54,500",
        ciudad: "Vancouver, Canadá"
    },
    "estadio-metropolitano": {
        nombre: "Estadio Metropolitano - Los Ángeles",
        capacidad: "70,240",
        ciudad: "Los Ángeles, EE.UU."
    }
};

// Nombres de fases
const nombresFase = {
    "fase-grupos": "Fase de Grupos",
    "octavos": "Octavos de Final",
    "cuartos": "Cuartos de Final",
    "semifinal": "Semifinal",
    "tercero": "Partido por Tercer Puesto",
    "final": "Final"
};

document.addEventListener('DOMContentLoaded', function() {
    const listaPartidos = document.getElementById('lista-partidos');
    const filtrosBtns = document.querySelectorAll('.filtro-btn');
    const btnAgregarPartido = document.getElementById('btn-agregar-partido');
    const modalPartido = document.getElementById('modal-partido');
    const cerrarModal = document.querySelector('.cerrar-modal-partido');
    const btnCancelar = document.querySelector('.btn-cancelar-partido');
    const formPartido = document.getElementById('form-partido');

    // Cargar partidos al iniciar
    cargarPartidos('todos');

    // Filtros por fase
    filtrosBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover activo de todos
            filtrosBtns.forEach(b => b.classList.remove('activo'));
            // Agregar activo al clickeado
            this.classList.add('activo');
            // Filtrar partidos
            const fase = this.getAttribute('data-fase');
            cargarPartidos(fase);
        });
    });

    // Modal agregar partido
    if (btnAgregarPartido && modalPartido) {
        btnAgregarPartido.addEventListener('click', function() {
            modalPartido.style.display = 'block';
            document.getElementById('titulo-modal-partido').textContent = 'Agregar Nuevo Partido';
            formPartido.reset();
        });
    }

    // Cerrar modal
    function cerrarModalFunc() {
        if (modalPartido) {
            modalPartido.style.display = 'none';
        }
    }

    if (cerrarModal) {
        cerrarModal.addEventListener('click', cerrarModalFunc);
    }

    if (btnCancelar) {
        btnCancelar.addEventListener('click', cerrarModalFunc);
    }

    // Cerrar modal al hacer clic fuera
    if (modalPartido) {
        modalPartido.addEventListener('click', function(e) {
            if (e.target === modalPartido) {
                cerrarModalFunc();
            }
        });
    }

    // Enviar formulario
    if (formPartido) {
        formPartido.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nuevoPartido = {
                id: Date.now(), // ID único
                fase: document.getElementById('fase-partido').value,
                fecha: document.getElementById('fecha-partido').value,
                estadio: document.getElementById('estadio-partido').value,
                equipoLocal: document.getElementById('equipo-local').value,
                equipoVisitante: document.getElementById('equipo-visitante').value,
                resultado: document.getElementById('resultado-partido').value || '',
                imagenEstadio: document.getElementById('imagen-estadio').value || 'https://via.placeholder.com/400x200?text=Estadio',
                estado: document.getElementById('resultado-partido').value ? 'finalizado' : 'pendiente'
            };

            // Agregar a la lista
            partidosMundial2026.push(nuevoPartido);
            
            // Recargar partidos
            const filtroActivo = document.querySelector('.filtro-btn.activo').getAttribute('data-fase');
            cargarPartidos(filtroActivo);
            
            // Cerrar modal
            cerrarModalFunc();
            
            alert('Partido agregado correctamente!');
        });
    }

    // Función para cargar partidos
    function cargarPartidos(fase) {
        listaPartidos.innerHTML = '';
        
        const partidosFiltrados = fase === 'todos' 
            ? partidosMundial2026 
            : partidosMundial2026.filter(partido => partido.fase === fase);
        
        // Ordenar por fecha
        partidosFiltrados.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
        
        if (partidosFiltrados.length === 0) {
            listaPartidos.innerHTML = '<div class="no-partidos">No hay partidos para esta fase.</div>';
            return;
        }
        
        partidosFiltrados.forEach(partido => {
            const tarjeta = crearTarjetaPartido(partido);
            listaPartidos.appendChild(tarjeta);
        });
    }

    // Función para crear tarjeta de partido
    function crearTarjetaPartido(partido) {
        const tarjeta = document.createElement('div');
        tarjeta.className = `tarjeta-partido ${partido.fase} ${partido.estado === 'pendiente' ? 'partido-pendiente' : ''}`;
        
        const fecha = new Date(partido.fecha);
        const estadioInfo = estadiosInfo[partido.estadio] || { nombre: partido.estadio, capacidad: '', ciudad: '' };
        
        tarjeta.innerHTML = `
            <div class="info-partido">
                <div class="encabezado-partido">
                    <span class="fase-partido">${nombresFase[partido.fase]}</span>
                    <span class="fecha-partido">${fecha.toLocaleDateString('es-ES', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}</span>
                </div>
                
                <div class="estadio-partido">
                <img src="estadio-azteca.jpg" alt="estadio azteca" class="imagen-estadio" >
                     ${estadioInfo.nombre} - ${estadioInfo.ciudad}
                </div>
                
                <div class="equipos-partido-tarjeta">
                    <div class="equipo">
                        <img src="${partido.imagenlocal}" alt="estadio azteca" class="imagen-estadio" >
                        <span class="nombre-equipo">${partido.equipoLocal}</span>
                    </div>
                    
                    <div class="vs-tarjeta">VS</div>
                    <div class="equipo">
                    <img src="${partido.imagenvisitante}" alt="estadio azteca" class="imagen-estadio" >
                    
                         <span class="nombre-equipo">${partido.equipoVisitante}</span>
                    </div>
                </div>
                
                <div class="resultado-partido-tarjeta">
                    ${partido.resultado || 'Por jugarse'}
                </div>
            </div>
            
            <div class="imagen-estadio-contenedor">
            
                  </div>
        `;
        
        return tarjeta;
    }


    
    // Cerrar modal con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalPartido.style.display === 'block') {
            cerrarModalFunc();
        }
    });
});


// FUNCIONALIDADES ESPECÍFICAS PARA AGENDA MUNDIAL
// =============================================



// Carrusel
const cards = document.querySelector(".cards");
let offset = 0;
document.querySelector(".next").addEventListener("click", () => {
    if (offset > -(cards.scrollWidth - cards.parentElement.offsetWidth)) {
        offset -= 300;
        cards.style.transform = `translateX(${offset}px)`;
    }
});
document.querySelector(".prev").addEventListener("click", () => {
    if (offset < 0) {
        offset += 300;
        cards.style.transform = `translateX(${offset}px)`;
    }
});


const mundiales = {
    1930: { img: "1930.jpg",
        texto: "Uruguay 1930: En el año 1930 se disputó el primer Mundial de fútbol de la historia, que tuvo como sede Uruguay, que además sería el primer campeón del mundo de la historia, tras imponerse en la final a Argentina (4-2) en el estadio Centenario de Montevideo." },
    1934: { img: "1934.jpg", texto: "Italia 1934: Italia, como hiciera cuatro años antes Uruguay, también sería campeón al organizar el Mundial, en este caso el segundo de la historia. La Nazionale venció a Checoslovaquia (2-1) con un gol de Angelo Schiavio en la prórroga." },
    1938: { img: "1938.jpg", texto: "Francia 1938: La selección italiana revalidaría el título mundial cuatro años después en Francia, venciendo en la final con autoridad a Hungría (4-2) y convirtiéndose en el primer país en tener dos entorchados mundiales." },
    1950: { img: "1950.jpg", texto: "Brasil 1950: El Mundial disputado en Brasil, en el año 1950, dejó uno de los recuerdos más memorables de la historia de los Mundiales. Uruguay lograría su segundo galardón al imponerse a la Canarinha (2-1) en la final disputada en el estadio de Maracaná. El llamado 'Maracanazo' todavía sigue siendo recordado por todos los aficionados al fútbol." },
    1954: { img: "1954.jpg", texto: "Suiza 1954: Alemania lograría su primer Mundial en el año 1954, una cita disputada en Suiza, y lo hizo imponiéndose a la Hungría de Ferenc Puskas en una gran remontada. Los húngaros empezaron venciendo 0-2 en los primeros diez minutos, pero Alemania logró darle la vuelta al marcador para acabar venciendo 3-2." },
    1958: { img: "1958.jpg", texto: "Suecia 1958: En el año 1958, en Suecia, llegaría el primer Mundial de Brasil, país con más entorchados en la historia. La Canaricha evitó que Suecia, país anfitrión, lograra proclamarse campeón del mundo, y además lo hizo con un resultado contundente: 5-2." },
    1962: { img: "1962.jpg", texto: "Chile 1962: Cuatro años después, en Chile, Brasil colocaría su segunda estrella de campeón en el escudo tras vencer en la final a Checoslovaquia, que tendría que conformarse con un nuevo subcampeonato, que se suma al que lograron en el año 1934." },
    1966: { img: "1966.jpg", texto: "Inglaterra 1966: Inglaterra se convertiría en otro de los países capaces de convertirse en campeón del mundo jugando en casa. Los Tres Leones vencerían en una trepidante final a Alemania en la prórroga (4-2) en un escenario imponente como lo es Wembley." },
    1970: { img: "1970.jpg", texto: "Mexico 1970: En el año 1970, en el Mundial disputado en México, Brasil sería nuevamente la campeona, sumando tres entorchados mundiales en las últimas cuatro citas disputadas. En la final, celebrada en el estadio Azteca, la Canarinha pasó por encima de Italia con un 4-1 sin paliativos. El Brasil del 70' siempre será considerado uno de los mejores equipos de la historia." },
    1974: { img: "1974.jpg", texto: "Alemania 1974: Alemania albergaría el Mundial del año 1974 y vería cómo su selección se convertiría en campeón del mundo por segunda vez en su historia al imponerse a la Holanda de Johan Cruyff por 2-1, en un encuentro disputado en el Olímpico de Múnich." },
    1978: { img: "1978.jpg", texto: "Argentina 1978: Argentina seguiría cuatro años después los pasos de Alemania, primero convirtiéndose en campeona del mundo en su casa, y segundo volviendo a dejar a Holanda con la miel en los labios en la final (3-1). El Monumental se vistió de Albiceleste ." },
    1982: { img: "1982.jpg", texto: "España 1982: España, en el año 1982, vería cómo Italia se proclamaría campeón del mundo por tercera vez en su historia. La Nazionale vencería 3-1 a Alemania en una final que se disputó en Madrid, en el estadio Santiago Bernabéu." },
    1986: { img: "1986.jpg", texto: "Mexico 1986: México vivió el Mundial de Diego Armando Maradona, y obviamente su Argentina, que sería campeona del mundo tras imponerse en una gran final a Alemania (3-2). El '10' no marcó en la final, pero su torneo fue sencillamente sensacional, sobre todo su partido ante Inglaterra, que dejó uno de los mejores goles de la historia." },
    1990: { img: "1990.jpg", texto: "Italia 1990: Cuatro años después Alemania se tomaría la revancha contra Argentina, reeditando una final que se llevaría la Mannschaft , por la mínima (1-0), para proclamarse campeón del mundo por tercera vez en su historia. El solitario gol de Andreas Brehme sirvió para que, en el Olímpico de Roma, Alemania venciera nuevamente." },
    1994: { img: "1994.jpg", texto: "Estados Unidos 1994: Estados Unidos albergó por primera vez una cita mundialista que sirvió para empezar a poner las bases para que el 'soccer' empezara a ser seguido por los yankees . Brasil sería campeona del mundo por cuarta vez en su historia tras vencer a Italia en la tanda de penaltis. Roberto Baggio, con su penalti a las nubes, nos regalaría otra de las imágenes de la historia de los Mundiales." },
    1998: { img: "1998.jpg", texto: "Francia 1998: La Francia de Zinedine Zidane se convertiría en campeón del mundo por primera vez en su historia tras bordar el torneo, en el que además actuaban de local al ser sede. En la final, disputada en el Stade de France, Les Bleus arrollaron a Brasil (3-0)." },
    2002: { img: "2002.jpg", texto: "Corea del Sur/Japon 2002: El primer Mundial disputado en suelo asiático dejó campeón a Brasil, nuevamente venciendo a Alemania (2-0) el combinado que mas finales ha disputado en la historia de los Mundiales. Ronaldo, que fue triste protagonista en la final de 1998, se desquitaría con un doblete que valdría para que la Canarinha se convirtiera en pentacampeona en el estadio de Yokohama." },
    2006: { img: "2006.jpg", texto: "Alemania 2006: Alemania albergaría cuatro años después un Mundial que quedaría marcado por dos hechos: la victoria de Italia y la retirada internacional de Zinedine Zidane, que sería expulsado en la final tras propinar un cabezazo a Marco Materazzi. La Nazionale sería tetracampeona del mundo tras imponerse a les Bleus en la tanda de penaltis." },
    2010: { img: "2010.jpg", texto: "Sudafrica 2010: Sudáfrica viviría el fútbol total de la Selección Española, que se se proclamaría campeona del mundo por primera vez en su historia tras arrasar con su 'tiki-taka'. Con un juego de toque que encandiló al mundo entero, La Roja se impuso en la prórroga de la final, disputada en el Soccer City de Johannesburgo, a Holanda con un gol de Andrés Iniesta que ya es historia del deporte." },
    2014: { img: "2014.jpeg", texto: "Brasil 2014: Alemania, otra vez Alemania en una final. En esta ocasión para proclamarse campeona del mundo en Maracaná por cuarta vez en su historia al vencer a Argentina, nuevamente, con un gol en la prórroga de Mario Götze. Lionel Messi, en una final discreta, perdería una ocasión de oro para alzar el Mundial." },
    2018: { img: "2018.jpg", texto: "Rusia 2018: Francia logró su segundo título del mundo al vencer 4-2 en la final a Croacia. El trabajo de los galos se sustentó de punta a punta: desde Hugo Lloris hasta Kilyan Mbappé, pasando por Ngolo Kanté, Paul Pogba o Antoine Griezmann. Veinte años después de ganar y organizar la cita de 1998, Les Bleus volvieron a festejar." },
    2022: { img: "2022.jpeg", texto: "Qatar 2022: La Copa Mundial de la FIFA Catar 2022. Fue la vigésima segunda edición de la Copa Mundial de Fútbol masculino organizada por la FIFA. Esta edición del evento se desarrolló del 20 de noviembre al 18 de diciembre en el otoño de Qatar, que consiguió los derechos de organización el 2 de diciembre de 2010." },
    2026: { img: "2026.jpeg", texto: "México/EE.UU/Canadá 2026: Por primera vez tres países organizarán una Copa del Mundo y, además, habrá 48 equipos clasificados para disputar el Mundial en el continente americano. Sin duda será un torneo histórico." }
};


const cardsList = document.querySelectorAll(".card");
const imgMundial = document.getElementById("imagen-mundial");
const textoMundial = document.getElementById("texto-mundial");


// Mostrar 1930 por defecto
function mostrarMundial(year) {
    if (mundiales[year]) {
        imgMundial.src = mundiales[year].img;
        textoMundial.textContent = mundiales[year].texto;
    }
}

// Marcar activo
function activarCard(card) {
    cardsList.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
}

cardsList.forEach(card => {
    card.addEventListener("click", () => {
        cardsList.forEach(c => c.classList.remove("active"));
        card.classList.add("active");

        const year = card.querySelector(".fecha span").textContent;

        if (mundiales[year]) {
            imgMundial.src = mundiales[year].img;
            imgMundial.style.display = "block";
            textoMundial.textContent = mundiales[year].texto;
        } else {
            imgMundial.style.display = "none";
            textoMundial.textContent = "Información no disponible.";
        }
    });
});


mostrarMundial("1930");
activarCard(cardsList[0]);


// Modo oscuro
const toggleBtn = document.getElementById("modo-oscuro");
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        document.body.classList.toggle("d"); // activa modo oscuro del formulario también
        toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
}


document.getElementById("togglePassword").addEventListener("click", function() {
    const password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
});

//verificacion de fecha de nacimiento al registrarse

document.getElementById('registroForm').addEventListener('submit', function(event) {
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    if (!fechaNacimiento) return; // Si está vacío, que el HTML5 lo valide

    const fechaNac = new Date(fechaNacimiento);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }

    if (edad < 12) {
        alert("Debes tener al menos 12 años para registrarte.");
        event.preventDefault();
    }
});

const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("password-error");

// Expresión regular: mínimo 8 caracteres, al menos 1 letra y 1 número
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

passwordInput.addEventListener("input", function() {
    const value = passwordInput.value;

    if (value.length === 0) {
        errorMsg.textContent = "";
    } else if (!passwordRegex.test(value)) {
        errorMsg.textContent = "La contraseña debe tener mínimo 8 caracteres, incluir al menos una letra y un número.";
    } else {
        errorMsg.textContent = "";
    }
});

document.getElementById("registro-form").addEventListener("submit", function(e) {
    e.preventDefault();

    if (!passwordRegex.test(passwordInput.value)) {
        errorMsg.textContent = "Por favor, corrige la contraseña antes de continuar.";
        return;
    }

    const nombre = document.getElementById("usuario").value;
    document.getElementById("mensaje-exito").textContent = "¡Bienvenido, " + nombre + "!";
    document.getElementById("exito").style.display = "block";
});

//----------------------------------------------------------------------------------------------------------------------------

// MENÚ DE ACCESIBILIDAD
document.addEventListener('DOMContentLoaded', function() {
    const botonAccesibilidad = document.getElementById('boton-accesibilidad');
    const menuAccesibilidad = document.getElementById('menu-accesibilidad');
    const btnResetTodo = document.getElementById('reset-accesibilidad');

    // Alternar menú de accesibilidad
    if (botonAccesibilidad && menuAccesibilidad) {
        botonAccesibilidad.addEventListener('click', function(e) {
            e.stopPropagation();
            menuAccesibilidad.classList.toggle('activo');
        });
    }

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (menuAccesibilidad && menuAccesibilidad.classList.contains('activo')) {
            if (!menuAccesibilidad.contains(e.target) && !botonAccesibilidad.contains(e.target)) {
                menuAccesibilidad.classList.remove('activo');
            }
        }
    });

    // Tamaño de texto
    document.querySelectorAll('.btn-tamano').forEach(btn => {
        btn.addEventListener('click', function() {
            const accion = this.getAttribute('data-accion');
            cambiarTamanoTexto(accion);
        });
    });

    // Modo daltonismo
    document.querySelectorAll('.btn-daltonismo').forEach(btn => {
        btn.addEventListener('click', function() {
            const tipo = this.getAttribute('data-tipo');
            aplicarModoDaltonismo(tipo);
        });
    });

    // Alto contraste
    document.getElementById('alto-contraste').addEventListener('change', function() {
        document.body.classList.toggle('alto-contraste', this.checked);
        localStorage.setItem('altoContraste', this.checked);
    });

    // Reducir animaciones
    document.getElementById('reducir-animaciones').addEventListener('change', function() {
        document.body.classList.toggle('reducir-animaciones', this.checked);
        localStorage.setItem('reducirAnimaciones', this.checked);
    });

    // Navegación por teclado
    document.getElementById('navegacion-teclado').addEventListener('change', function() {
        document.body.classList.toggle('navegacion-teclado', this.checked);
        localStorage.setItem('navegacionTeclado', this.checked);
    });

    // Modo lectura
    document.getElementById('modo-lectura').addEventListener('change', function() {
        document.body.classList.toggle('modo-lectura', this.checked);
        localStorage.setItem('modoLectura', this.checked);
    });

    // Resetear todo
    if (btnResetTodo) {
        btnResetTodo.addEventListener('click', function() {
            resetearAccesibilidad();
        });
    }

    // Cargar preferencias guardadas
    cargarPreferenciasAccesibilidad();

    // Funciones de accesibilidad
    function cambiarTamanoTexto(accion) {
        const html = document.documentElement;
        let fontSize = parseInt(getComputedStyle(html).fontSize);
        
        switch(accion) {
            case 'aumentar-texto':
                fontSize = Math.min(fontSize + 2, 20);
                break;
            case 'disminuir-texto':
                fontSize = Math.max(fontSize - 2, 12);
                break;
            case 'reset-texto':
                fontSize = 16;
                break;
        }
        
        html.style.fontSize = fontSize + 'px';
        localStorage.setItem('tamanoTexto', fontSize);
    }

    function aplicarModoDaltonismo(tipo) {
        // Remover clases anteriores
        document.body.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
        
        if (tipo !== 'reset') {
            document.body.classList.add(tipo);
        }
        
        localStorage.setItem('modoDaltonismo', tipo);
    }

    function resetearAccesibilidad() {
        // Resetear tamaño de texto
        document.documentElement.style.fontSize = '16px';
        localStorage.removeItem('tamanoTexto');
        
        // Resetear daltonismo
        document.body.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
        localStorage.removeItem('modoDaltonismo');
        
        // Resetear switches
        document.querySelectorAll('.switch input').forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Remover clases del body
        document.body.classList.remove('alto-contraste', 'reducir-animaciones', 'navegacion-teclado', 'modo-lectura');
        
        // Remover de localStorage
        ['altoContraste', 'reducirAnimaciones', 'navegacionTeclado', 'modoLectura'].forEach(key => {
            localStorage.removeItem(key);
        });
        
        alert('Preferencias de accesibilidad restablecidas');
    }

    function cargarPreferenciasAccesibilidad() {
        // Cargar tamaño de texto
        const tamanoGuardado = localStorage.getItem('tamanoTexto');
        if (tamanoGuardado) {
            document.documentElement.style.fontSize = tamanoGuardado + 'px';
        }

        // Cargar modo daltonismo
        const daltonismoGuardado = localStorage.getItem('modoDaltonismo');
        if (daltonismoGuardado && daltonismoGuardado !== 'reset') {
            document.body.classList.add(daltonismoGuardado);
        }

        // Cargar estados de los switches
        document.getElementById('alto-contraste').checked = localStorage.getItem('altoContraste') === 'true';
        document.getElementById('reducir-animaciones').checked = localStorage.getItem('reducirAnimaciones') === 'true';
        document.getElementById('navegacion-teclado').checked = localStorage.getItem('navegacionTeclado') === 'true';
        document.getElementById('modo-lectura').checked = localStorage.getItem('modoLectura') === 'true';

        // Aplicar clases según los switches
        if (document.getElementById('alto-contraste').checked) {
            document.body.classList.add('alto-contraste');
        }
        if (document.getElementById('reducir-animaciones').checked) {
            document.body.classList.add('reducir-animaciones');
        }
        if (document.getElementById('navegacion-teclado').checked) {
            document.body.classList.add('navegacion-teclado');
        }
        if (document.getElementById('modo-lectura').checked) {
            document.body.classList.add('modo-lectura');
        }
    }

    // Cerrar menú al presionar Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menuAccesibilidad && menuAccesibilidad.classList.contains('activo')) {
            menuAccesibilidad.classList.remove('activo');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Quitar clase de pre-carga si existe
    document.body.classList.remove('preload');
    
    // Crear el overlay de transición si no existe
    let transitionOverlay = document.getElementById('transition-overlay');
    if (!transitionOverlay) {
        transitionOverlay = document.createElement('div');
        transitionOverlay.id = 'transition-overlay';
        transitionOverlay.className = 'transition-overlay';
        document.body.appendChild(transitionOverlay);
    }
    
    // Transición suave para todos los enlaces internos
    document.querySelectorAll('a[href*=".html"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // Solo aplicar a enlaces internos que no sean # 
            if (this.getAttribute('href').startsWith('#')) return;
            
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Agregar clase de transición al body
            document.body.classList.add('transitioning');
            
            // Activar el overlay de degradado
            transitionOverlay.classList.add('active');
            
            // Efecto de escala y desenfoque
            document.body.style.transform = 'scale(0.95)';
            document.body.style.filter = 'blur(2px)';
            document.body.style.opacity = '0.8';
            document.body.style.transition = 'all 0.4s ease';
            
            // Redirigir después de la animación
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
    
    // Efecto de entrada al cargar la página
    function pageEnterAnimation() {
        document.body.style.opacity = '0';
        document.body.style.transform = 'translateY(20px)';
        document.body.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
            document.body.style.transform = 'translateY(0)';
            
            // Efecto de overlay de entrada
            transitionOverlay.classList.add('active');
            setTimeout(() => {
                transitionOverlay.classList.add('fade-out');
                setTimeout(() => {
                    transitionOverlay.classList.remove('active', 'fade-out');
                }, 600);
            }, 300);
        }, 100);
    }
    
    // Ejecutar animación de entrada
    pageEnterAnimation();
    
    // Efecto especial para botones importantes
    document.querySelectorAll('.btn-agregar-sede, .btn-agregar-mundial, .btn-editar-sede, .btn-editar-mundial').forEach(btn => {
        btn.addEventListener('click', function() {
            // Efecto de ripple
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: rippleEffect 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Agregar el keyframe para el efecto ripple
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', function() {
    // Aplicar animación simple a elementos principales
    const elements = document.querySelectorAll('header, .texto-menu, .controles-mundiales, .cuadro-blanco-sede, .cuadro-blanco-historia');
    
    elements.forEach((el, index) => {
        el.style.animation = `caidaRecta 0.4s ease-out ${index * 0.1}s both`;
    });
    
    // Transición rápida
    document.querySelectorAll('a[href*=".html"]').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) return;
            
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Salida simple
            elements.forEach(el => {
                el.style.animation = 'salidaRecta 0.15s ease-in both';
            });
            
            setTimeout(() => {
                window.location.href = href;
            }, 100);
        });
    });
});