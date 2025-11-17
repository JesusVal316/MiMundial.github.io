let anioSeleccionadoParaEliminar = null;
let anioSeleccionadoParaEditarSede = null;

// Inicializar eventos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    inicializarEventosEliminarSede();
    inicializarEventosEditarSede();
    inicializarControlesSedes(); 
});

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

// MODAL PARA AGREGAR MUNDIAL
document.addEventListener('DOMContentLoaded', function() {
    const btnAgregarMundial = document.getElementById('btn-agregar-sede');
    const modalMundial = document.getElementById('modal-mundial');
    const cerrarModal = document.querySelector('.cerrar-modal');
    const btnCancelar = document.querySelector('.btn-cancelar-sedes');
    const formMundial = document.getElementById('form-mundial');

    // Abrir modal
    if (btnAgregarMundial && modalMundial) {
        btnAgregarMundial.addEventListener('click', function() {
            modalMundial.style.display = 'block';
            document.getElementById('titulo-modal').textContent = 'Agregar Nuevo Mundial';
            formMundial.reset();
        });
    }

    // Cerrar modal
    function cerrarModalFunc() {
        if (modalMundial) {
            modalMundial.style.display = 'none';
        }
    }
    if (cerrarModal) {
        cerrarModal.addEventListener('click', cerrarModalFunc);
    }

    if (btnCancelar) {
        btnCancelar.addEventListener('click', cerrarModalFunc);
    }

    // Cerrar modal al hacer clic fuera
    if (modalMundial) {
        modalMundial.addEventListener('click', function(e) {
            if (e.target === modalMundial) {
                cerrarModalFunc();
            }
        });
    }

    // Enviar formulario
    if (formMundial) {
        formMundial.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const anio = document.getElementById('anio-mundial').value;
            const titulo = document.getElementById('titulo-mundial').value;
            const imagen = document.getElementById('imagen-mundial').value;
            const descripcion = document.getElementById('descripcion-mundial').value;

            // Agregar a sedesMundiales
            sedesMundiales[anio] = {
                img: imagen,
                titulo: titulo,
                texto: descripcion,
                // Estos campos se pueden llenar después mediante edición
                pais: '',
                ciudad: '',
                estadio: '',
                capacidad: '',
                datosCuriosos: ''
            };

            // Aquí puedes agregar la nueva card al carrusel si lo deseas
            agregarCardAlCarrusel(anio);
            cerrarModalFunc();
            alert('Mundial agregado correctamente!');
        });
    }
    

    // Función para agregar nueva card al carrusel
    function agregarCardAlCarrusel(anio) {
    const cardsContainer = document.querySelector('.cards');
    const nuevaCard = document.createElement('div');
    nuevaCard.className = 'card';
    nuevaCard.innerHTML = `
        <div class="fecha">
            <span>${anio}</span>
        </div>
    `;

    nuevaCard.addEventListener('click', function() {
        cardsList.forEach(c => c.classList.remove("active"));
        nuevaCard.classList.add("active");
        mostrarSedes(anio);
    });

    cardsContainer.appendChild(nuevaCard);
    cardsList = document.querySelectorAll(".card");
}

});

// Información de sedes por año
// Información de sedes por año
const sedesMundiales = {
    1930: { 
        img: "images/uruguay1930.jpeg",
        titulo: "Uruguay 1930",
        texto: "El primer Mundial de la historia se celebró en Uruguay. La final se disputó en el Estadio Centenario de Montevideo, donde Uruguay venció a Argentina 4-2 para convertirse en el primer campeón mundial.",
        pais: "Uruguay",
        ciudad: "Montevideo",
        estadio: "Estadio Centenario",
        capacidad: "90,000 espectadores",
        datosCuriosos: "Fue el único Mundial sin fase de clasificación. Los equipos fueron invitados a participar."
    },
    1934: { 
        img: "images/italia1934.jpg", 
        titulo: "Italia 1934",
        texto: "Italia organizó y ganó este Mundial. La final se jugó en el Estadio Nacional del Partido Nacional Fascista en Roma, donde Italia derrotó a Checoslovaquia 2-1.",
        pais: "Italia",
        ciudad: "Roma",
        estadio: "Estadio Nacional del PNF",
        capacidad: "47,000 espectadores",
        datosCuriosos: "Primer Mundial con fase de clasificación. 32 equipos participaron en las eliminatorias."
    },
    1938: { 
        img: "images/francia1938.jpg", 
        titulo: "Francia 1938",
        texto: "Francia fue la sede de este Mundial. La final se celebró en el Estadio Olímpico Yves-du-Manoir en Colombes, donde Italia retuvo su título al vencer a Hungría 4-2.",
        pais: "Francia",
        ciudad: "Colombes",
        estadio: "Estadio Olímpico Yves-du-Manoir",
        capacidad: "60,000 espectadores",
        datosCuriosos: "Austria se clasificó pero no participó debido al Anschluss con Alemania."
    },
    1950: { 
        img: "images/brasil1950.jpg", 
        titulo: "Brasil 1950",
        texto: "Brasil organizó su primer Mundial. El famoso 'Maracanazo' ocurrió en el Estadio Maracaná de Río de Janeiro, donde Uruguay venció a Brasil 2-1 en la final.",
        pais: "Brasil",
        ciudad: "Río de Janeiro",
        estadio: "Estadio Maracaná",
        capacidad: "200,000 espectadores",
        datosCuriosos: "Último Mundial con formato de ronda final en lugar de una final única."
    },
    1954: { 
        img: "images/suiza1954.jpg", 
        titulo: "Suiza 1954",
        texto: "Suiza fue la sede de este Mundial. La final se disputó en el Estadio Wankdorf de Berna, donde Alemania Occidental venció a Hungría 3-2 en un emocionante partido.",
        pais: "Suiza",
        ciudad: "Berna",
        estadio: "Estadio Wankdorf",
        capacidad: "64,000 espectadores",
        datosCuriosos: "Primer Mundial transmitido por televisión internacionalmente."
    },
    1958: { 
        img: "images/suecia1958.jpg", 
        titulo: "Suecia 1958",
        texto: "Suecia organizó este Mundial. La final se jugó en el Estadio Råsunda de Solna, donde Brasil ganó su primer título mundial al vencer a Suecia 5-2.",
        pais: "Suecia",
        ciudad: "Solna",
        estadio: "Estadio Råsunda",
        capacidad: "52,000 espectadores",
        datosCuriosos: "Debut de Pelé en un Mundial con solo 17 años."
    },
    1962: { 
        img: "images/chile1962.jpg", 
        titulo: "Chile 1962",
        texto: "Chile fue la sede de este Mundial. La final se celebró en el Estadio Nacional de Santiago, donde Brasil retuvo su título al vencer a Checoslovaquia 3-1.",
        pais: "Chile",
        ciudad: "Santiago",
        estadio: "Estadio Nacional",
        capacidad: "76,000 espectadores",
        datosCuriosos: "Mundial marcado por el juego físico y numerosas faltas."
    },
    1966: { 
        img: "images/inglaterra1966.jpg", 
        titulo: "Inglaterra 1966",
        texto: "Inglaterra organizó y ganó este Mundial. La final se disputó en el Estadio de Wembley en Londres, donde Inglaterra venció a Alemania Occidental 4-2 en la prórroga.",
        pais: "Inglaterra",
        ciudad: "Londres",
        estadio: "Estadio de Wembley",
        capacidad: "98,000 espectadores",
        datosCuriosos: "Famoso gol fantasma de Inglaterra en la final que aún genera controversia."
    },
    1970: { 
        img: "estadio-azteca.jpg", 
        titulo: "México 1970",
        texto: "México fue la primera sede de un Mundial en Norteamérica. La final se jugó en el Estadio Azteca de Ciudad de México, donde Brasil venció a Italia 4-1 para ganar su tercer título.",
        pais: "México",
        ciudad: "Ciudad de México",
        estadio: "Estadio Azteca",
        capacidad: "107,000 espectadores",
        datosCuriosos: "Primer Mundial transmitido en color por televisión. Se introdujeron las tarjetas amarilla y roja."
    },
    1974: { 
        img: "images/alemania1974.jpg", 
        titulo: "Alemania 1974",
        texto: "Alemania Occidental organizó este Mundial. La final se celebró en el Estadio Olímpico de Múnich, donde Alemania Occidental venció a los Países Bajos 2-1.",
        pais: "Alemania Occidental",
        ciudad: "Múnich",
        estadio: "Estadio Olímpico",
        capacidad: "80,000 espectadores",
        datosCuriosos: "Se introdujo el actual trofeo de la Copa Mundial."
    },
    1978: { 
        img: "images/argentina1978.jpg", 
        titulo: "Argentina 1978",
        texto: "Argentina organizó y ganó este Mundial. La final se disputó en el Estadio Monumental de Buenos Aires, donde Argentina venció a los Países Bajos 3-1 en la prórroga.",
        pais: "Argentina",
        ciudad: "Buenos Aires",
        estadio: "Estadio Monumental",
        capacidad: "76,000 espectadores",
        datosCuriosos: "Celebrado durante la última dictadura militar argentina."
    },
    1982: { 
        img: "images/españa1982.jpg", 
        titulo: "España 1982",
        texto: "España fue la sede de este Mundial. La final se jugó en el Estadio Santiago Bernabéu de Madrid, donde Italia venció a Alemania Occidental 3-1 para ganar su tercer título.",
        pais: "España",
        ciudad: "Madrid",
        estadio: "Estadio Santiago Bernabéu",
        capacidad: "90,000 espectadores",
        datosCuriosos: "Primer Mundial con 24 equipos participantes."
    },
    1986: { 
        img: "estadio-azteca.jpg", 
        titulo: "México 1986",
        texto: "México organizó su segundo Mundial. La final se celebró en el Estadio Azteca de Ciudad de México, donde Argentina venció a Alemania Occidental 3-2.",
        pais: "México",
        ciudad: "Ciudad de México",
        estadio: "Estadio Azteca",
        capacidad: "114,000 espectadores",
        datosCuriosos: "Recordado por los goles de Diego Maradona, especialmente 'La Mano de Dios'."
    },
    1990: { 
        img: "images/italia1990.jpg", 
        titulo: "Italia 1990",
        texto: "Italia organizó su segundo Mundial. La final se disputó en el Estadio Olímpico de Roma, donde Alemania Occidental venció a Argentina 1-0.",
        pais: "Italia",
        ciudad: "Roma",
        estadio: "Estadio Olímpico",
        capacidad: "80,000 espectadores",
        datosCuriosos: "Mundial con el promedio de goles más bajo de la historia (2.21 por partido)."
    },
    1994: { 
        img: "images/usa1994.jpeg", 
        titulo: "Estados Unidos 1994",
        texto: "Estados Unidos fue la sede de este Mundial. La final se jugó en el Rose Bowl de Pasadena, California, donde Brasil venció a Italia en la tanda de penaltis después de un empate 0-0.",
        pais: "Estados Unidos",
        ciudad: "Pasadena, California",
        estadio: "Rose Bowl",
        capacidad: "94,000 espectadores",
        datosCuriosos: "Mayor asistencia total en la historia de los Mundiales con 3.6 millones de espectadores."
    },
    1998: { 
        img: "images/francia1998.jpg", 
        titulo: "Francia 1998",
        texto: "Francia organizó y ganó este Mundial. La final se celebró en el Stade de France de Saint-Denis, donde Francia venció a Brasil 3-0.",
        pais: "Francia",
        ciudad: "Saint-Denis",
        estadio: "Stade de France",
        capacidad: "80,000 espectadores",
        datosCuriosos: "Primer Mundial con 32 equipos participantes."
    },
    2002: { 
        img: "images/coreajapon2002.jpg", 
        titulo: "Corea/Japón 2002",
        texto: "Primer Mundial coorganizado por dos países: Corea del Sur y Japón. La final se disputó en el Estadio Internacional de Yokohama, Japón, donde Brasil venció a Alemania 2-0.",
        pais: "Corea del Sur / Japón",
        ciudad: "Yokohama",
        estadio: "Estadio Internacional",
        capacidad: "72,000 espectadores",
        datosCuriosos: "Primer y único Mundial organizado por dos países. Corea del Sur llegó a semifinales."
    },
    2006: { 
        img: "images/alemania2006.jpg", 
        titulo: "Alemania 2006",
        texto: "Alemania organizó este Mundial. La final se jugó en el Estadio Olímpico de Berlín, donde Italia venció a Francia en la tanda de penaltis después de un empate 1-1.",
        pais: "Alemania",
        ciudad: "Berlín",
        estadio: "Estadio Olímpico",
        capacidad: "74,000 espectadores",
        datosCuriosos: "Famoso por el cabezazo de Zidane a Materazzi en la final."
    },
    2010: { 
        img: "images/sudafrica2010.jpg", 
        titulo: "Sudáfrica 2010",
        texto: "Primer Mundial celebrado en África. La final se celebró en el Soccer City de Johannesburgo, donde España venció a los Países Bajos 1-0 en la prórroga.",
        pais: "Sudáfrica",
        ciudad: "Johannesburgo",
        estadio: "Soccer City",
        capacidad: "94,700 espectadores",
        datosCuriosos: "Primer Mundial africano. España ganó su primer título mundial."
    },
    2014: { 
        img: "images/brasil2014.jpeg", 
        titulo: "Brasil 2014",
        texto: "Brasil organizó su segundo Mundial. La final se disputó en el Estadio Maracaná de Río de Janeiro, donde Alemania venció a Argentina 1-0 en la prórroga.",
        pais: "Brasil",
        ciudad: "Río de Janeiro",
        estadio: "Estadio Maracaná",
        capacidad: "78,838 espectadores",
        datosCuriosos: "Alemania venció 7-1 a Brasil en semifinales, la mayor goleada en una semifinal mundialista."
    },
    2018: { 
        img: "images/rusia2018.jpg", 
        titulo: "Rusia 2018",
        texto: "Primer Mundial celebrado en Europa del Este. La final se jugó en el Estadio Luzhnikí de Moscú, donde Francia venció a Croacia 4-2.",
        pais: "Rusia",
        ciudad: "Moscú",
        estadio: "Estadio Luzhnikí",
        capacidad: "81,000 espectadores",
        datosCuriosos: "Primer uso del VAR (Árbitro Asistente de Video) en un Mundial."
    },
    2022: { 
        img: "images/qatar2022.jpg", 
        titulo: "Qatar 2022",
        texto: "Primer Mundial celebrado en Oriente Medio. La final se celebró en el Estadio Lusail, donde Argentina venció a Francia en la tanda de penaltis después de un empate 3-3.",
        pais: "Qatar",
        ciudad: "Lusail",
        estadio: "Estadio Lusail",
        capacidad: "88,966 espectadores",
        datosCuriosos: "Primer Mundial celebrado en noviembre-diciembre para evitar el calor extremo del verano qatarí."
    },
    2026: { 
        img: "estadio-azteca.jpg", 
        titulo: "México/EE.UU/Canadá 2026",
        texto: "Primer Mundial organizado por tres países: México, Estados Unidos y Canadá. Será el primer Mundial con 48 equipos participantes.",
        pais: "México / Estados Unidos / Canadá",
        ciudad: "Múltiples sedes",
        estadio: "Estadio Azteca (final)",
        capacidad: "87,000 espectadores (Azteca)",
        datosCuriosos: "Primer Mundial con 48 equipos. México será el primer país en organizar tres Mundiales."
    }
};

let cardsList = document.querySelectorAll(".card");
const imgSedes = document.getElementById("imagen-sedes");
const tituloSedes = document.getElementById("titulo-sedes");
const textoSedes = document.getElementById("texto-sedes");

// Mostrar 1930 por defecto
function mostrarSedes(year) {
    if (sedesMundiales[year]) {
        const sede = sedesMundiales[year];
        
        // Elementos básicos (ya existentes)
        imgSedes.src = sede.img;
        tituloSedes.textContent = sede.titulo;
        textoSedes.textContent = sede.texto;
        
        // NUEVO: Información adicional
        const infoAdicional = document.getElementById('info-adicional-sedes');
        const paisElement = document.getElementById('pais-sede');
        const ciudadElement = document.getElementById('ciudad-sede');
        const estadioElement = document.getElementById('estadio-sede');
        const capacidadElement = document.getElementById('capacidad-sede');
        const datosCuriososContainer = document.getElementById('datos-curiosos-container');
        const datosCuriososTexto = document.getElementById('datos-curiosos-texto');
        
        // Mostrar información adicional si existe
        if (sede.pais || sede.ciudad || sede.estadio || sede.capacidad) {
            paisElement.textContent = sede.pais || 'No disponible';
            ciudadElement.textContent = sede.ciudad || 'No disponible';
            estadioElement.textContent = sede.estadio || 'No disponible';
            capacidadElement.textContent = sede.capacidad || 'No disponible';
            infoAdicional.style.display = 'block';
        } else {
            infoAdicional.style.display = 'none';
        }
        
        // Mostrar datos curiosos si existen
        if (sede.datosCuriosos) {
            datosCuriososTexto.textContent = sede.datosCuriosos;
            datosCuriososContainer.style.display = 'block';
        } else {
            datosCuriososContainer.style.display = 'none';
        }
    }
}

function inicializarControlesSedes() {
    // Los botones ya están en tu HTML, solo asegurar que tengan los eventos correctos
    console.log('Controles de sedes inicializados');
}

function activarCard(card) {
    cardsList.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
}

cardsList.forEach(card => {
    card.addEventListener("click", () => {
        cardsList.forEach(c => c.classList.remove("active"));
        card.classList.add("active");

        const year = card.querySelector(".fecha span").textContent;
        mostrarSedes(year); 
    });
});

function inicializarEventosEditarSede() {
    const btnEditarSede = document.getElementById('btn-editar-sede');
    const modalEditarSede = document.getElementById('modal-editar-sede');
    const cerrarModalEditarSede = document.querySelector('.cerrar-modal-editar-sede');
    const cerrarModal = document.querySelector('.cerrar-modal');
    const btnCancelarEditarSede = document.querySelector('#modal-editar-sede .btn-cancelar-sedes');
    const formEditarSede = document.getElementById('form-editar-sede');

    // Asegurarnos de que el modal esté oculto al cargar la página
    if (modalEditarSede) {
        modalEditarSede.style.display = 'none';
    }

    if (btnEditarSede && modalEditarSede) {
        btnEditarSede.addEventListener('click', function() {
            const añosDisponibles = obtenerAñosDisponiblesSedes();
            
            if (añosDisponibles.length > 0) {
                // Mostrar selector de años para editar
                const añoSeleccionado = prompt('Ingresa el año de la sede que quieres editar:\n' + añosDisponibles.join(', '));
                
                if (añoSeleccionado && sedesMundiales[añoSeleccionado]) {
                    anioSeleccionadoParaEditarSede = añoSeleccionado;
                    cargarDatosSedeEnFormularioEditar(añoSeleccionado);
                    modalEditarSede.style.display = 'block'; // Solo se muestra aquí
                } else if (añoSeleccionado) {
                    alert('El año ingresado no existe en la base de datos.');
                }
            } else {
                alert('No hay sedes disponibles para editar.');
            }
        });
    }

    function cerrarModalEditarSedeFunc() {
        if (modalEditarSede) {
            modalEditarSede.style.display = 'none';
            anioSeleccionadoParaEditarSede = null;
        }
    }

    if (cerrarModalEditarSede) {
        cerrarModalEditarSede.addEventListener('click', cerrarModalEditarSedeFunc);
    }

    if (btnCancelarEditarSede) {
        btnCancelarEditarSede.addEventListener('click', cerrarModalEditarSedeFunc);
    }

    if (modalEditarSede) {
        modalEditarSede.addEventListener('click', function(e) {
            if (e.target === modalEditarSede) {
                cerrarModalEditarSedeFunc();
            }
        });
    }

    if (formEditarSede) {
        formEditarSede.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!anioSeleccionadoParaEditarSede) return;
            
            const titulo = document.getElementById('titulo-sede-editar').value;
            const imagen = document.getElementById('imagen-sede-editar').value;
            const descripcion = document.getElementById('descripcion-sede-editar').value;
            const pais = document.getElementById('pais-sede-editar').value;
            const ciudad = document.getElementById('ciudad-sede-editar').value;
            const estadio = document.getElementById('estadio-sede-editar').value;
            const capacidad = document.getElementById('capacidad-sede-editar').value;
            const datosCuriosos = document.getElementById('datos-curiosos-sede').value;

            // Actualizar la sede
            sedesMundiales[anioSeleccionadoParaEditarSede] = {
                ...sedesMundiales[anioSeleccionadoParaEditarSede],
                img: imagen,
                titulo: titulo,
                texto: descripcion,
                pais: pais,
                ciudad: ciudad,
                estadio: estadio,
                capacidad: capacidad,
                datosCuriosos: datosCuriosos
            };

            // Actualizar la vista actual si es necesario
            const cardActiva = document.querySelector('.card.active');
            if (cardActiva) {
                const añoActivo = cardActiva.querySelector('.fecha span').textContent;
                if (añoActivo === anioSeleccionadoParaEditarSede) {
                    mostrarSedes(anioSeleccionadoParaEditarSede);
                }
            }

            cerrarModalEditarSedeFunc();
            alert('Sede actualizada correctamente!');
        });
    }
}

function cargarDatosSedeEnFormularioEditar(año) {
    const sede = sedesMundiales[año];
    if (!sede) return;

    document.getElementById('anio-sede-editar').value = año;
    document.getElementById('titulo-sede-editar').value = sede.titulo || '';
    document.getElementById('imagen-sede-editar').value = sede.img || '';
    document.getElementById('descripcion-sede-editar').value = sede.texto || '';
    document.getElementById('pais-sede-editar').value = sede.pais || '';
    document.getElementById('ciudad-sede-editar').value = sede.ciudad || '';
    document.getElementById('estadio-sede-editar').value = sede.estadio || '';
    document.getElementById('capacidad-sede-editar').value = sede.capacidad || '';
    document.getElementById('datos-curiosos-sede').value = sede.datosCuriosos || '';
}

function obtenerAñosDisponiblesSedes() {
    if (typeof sedesMundiales !== 'undefined' && sedesMundiales !== null) {
        const años = Object.keys(sedesMundiales).map(año => parseInt(año));
        return años.sort((a, b) => b - a);
    }
    console.warn('No se encontró el objeto sedesMundiales');
    return [];
}

function mostrarInformacionCompletaSede(año) {
    const sede = sedesMundiales[año];
    if (!sede) return;

    // Ejemplo de cómo mostrar información más completa
    return `
        <div class="info-sede-completa">
            <div class="info-grid-sede">
                <div class="info-columna-sede">
                    <h4>🏟️ Información de la Sede</h4>
                    <p><strong>País:</strong> ${sede.pais || 'No disponible'}</p>
                    <p><strong>Ciudad Principal:</strong> ${sede.ciudad || 'No disponible'}</p>
                    <p><strong>Estadio Principal:</strong> ${sede.estadio || 'No disponible'}</p>
                    <p><strong>Capacidad:</strong> ${sede.capacidad || 'No disponible'} espectadores</p>
                </div>
                
                <div class="info-columna-sede">
                    <h4>📈 Datos del Evento</h4>
                    <p><strong>Ciudades Sede:</strong> ${sede.ciudadesSede ? sede.ciudadesSede.join(', ') : 'No disponible'}</p>
                    <p><strong>Estadios Utilizados:</strong> ${sede.estadiosUtilizados ? sede.estadiosUtilizados.join(', ') : 'No disponible'}</p>
                    <p><strong>Inversión:</strong> ${sede.inversion || 'No disponible'}</p>
                </div>
            </div>
            
            ${sede.datosCuriosos ? `
            <div class="datos-curiosos-sede">
                <h4>💡 Datos Curiosos</h4>
                <p>${sede.datosCuriosos}</p>
            </div>
            ` : ''}
            
            ${sede.legado ? `
            <div class="legado-sede">
                <h4>🏛️ Legado</h4>
                <p>${sede.legado}</p>
            </div>
            ` : ''}
        </div>
    `;
}

function inicializarEventosEliminarSede() {
    const btnEliminarSede = document.getElementById('btn-eliminar-sede');
    const modalEliminarSede = document.getElementById('modal-confirmacion-eliminar-sede');
    const btnCancelarEliminar = document.querySelector('.btn-cancelar-eliminar-sede');
    const btnConfirmarEliminar = document.querySelector('.btn-confirmar-eliminar-sede');
    const cerrarModalEliminar = document.querySelector('.cerrar-modal-eliminar-sede');
    const cerrarModal = document.querySelector('.cerrar-modal');
    const selectAnio = document.getElementById('select-anio-mundial');

    // Abrir modal de confirmación al hacer clic en "Eliminar sede"
    btnEliminarSede.addEventListener('click', function() {
        const añosDisponibles = obtenerAñosDisponibles();
        
        if (añosDisponibles.length > 0) {
            cargarAñosEnSelect(añosDisponibles);
            abrirModalEliminarSede();
        } else {
            alert('No hay sedes de mundial disponibles para eliminar.');
        }
    });

    // Evento para el selector de año
    selectAnio.addEventListener('change', function() {
        anioSeleccionadoParaEliminar = this.value;
        const btnConfirmar = document.querySelector('.btn-confirmar-eliminar-sede');
        btnConfirmar.disabled = !anioSeleccionadoParaEliminar;
        
        // Mostrar información de la sede seleccionada
        if (anioSeleccionadoParaEliminar) {
            mostrarInformacionSede(anioSeleccionadoParaEliminar);
        }
    });

    // Cerrar modal al hacer clic en la X
    cerrarModalEliminar.addEventListener('click', cerrarModalEliminarSede);

    // Cerrar modal al hacer clic en Cancelar
    btnCancelarEliminar.addEventListener('click', cerrarModalEliminarSede);

    // Confirmar eliminación
    btnConfirmarEliminar.addEventListener('click', confirmarEliminacionSede);

    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener('click', function(event) {
        if (event.target === modalEliminarSede) {
            cerrarModalEliminarSede();
        }
    });
}

function obtenerAñosDisponibles() {
    // Obtener los años desde el objeto sedesMundiales
    if (typeof sedesMundiales !== 'undefined' && sedesMundiales !== null) {
        const años = Object.keys(sedesMundiales).map(año => parseInt(año));
        
        // Ordenar de mayor a menor (más reciente primero)
        return años.sort((a, b) => b - a);
    }
    
    // Si no existe el objeto, retornar array vacío
    console.warn('No se encontró el objeto sedesMundiales');
    return [];
}

// Función para mostrar información de la sede seleccionada (opcional)
function mostrarInformacionSede(año) {
    const sede = sedesMundiales[año];
    if (sede) {
        console.log(`Sede seleccionada: ${sede.titulo}`);
        // Puedes mostrar esta información en el modal si quieres
    }
}

// Función para cargar los años en el select
function cargarAñosEnSelect(años) {
    const select = document.getElementById('select-anio-mundial');
    
    // Limpiar opciones existentes (excepto la primera)
    while (select.options.length > 1) {
        select.remove(1);
    }
    
    // Agregar opciones (ya vienen ordenadas de la función obtenerAñosDisponibles)
    años.forEach(año => {
        const option = document.createElement('option');
        option.value = año;
        option.textContent = año;
        select.appendChild(option);
    });
    
    // Resetear selección
    select.value = "";
    anioSeleccionadoParaEliminar = null;
    
    // Deshabilitar botón de confirmar
    const btnConfirmar = document.querySelector('.btn-confirmar-eliminar-sede');
    btnConfirmar.disabled = true;
}

function abrirModalEliminarSede() {
    const modal = document.getElementById('modal-confirmacion-eliminar-sede');
    modal.style.display = 'block';
}

function cerrarModalEliminarSede() {
    const modal = document.getElementById('modal-confirmacion-eliminar-sede');
    modal.style.display = 'none';
    anioSeleccionadoParaEliminar = null;
}

function confirmarEliminacionSede() {
    if (anioSeleccionadoParaEliminar) {
        // Obtener información de la sede antes de eliminar para el mensaje
        const sede = sedesMundiales[anioSeleccionadoParaEliminar];
        const nombreSede = sede ? sede.titulo : `Mundial ${anioSeleccionadoParaEliminar}`;
        
        // Confirmación final
        if (confirm(`¿Estás completamente seguro de que deseas eliminar "${nombreSede}"? Esta acción es irreversible.`)) {
            // Eliminar la sede
            eliminarSedePorAño(anioSeleccionadoParaEliminar);
            
            // Cerrar el modal después de eliminar
            cerrarModalEliminarSede();
            
            // Mostrar mensaje de éxito
            alert(`"${nombreSede}" ha sido eliminado correctamente.`);
            
            // Actualizar la interfaz
            actualizarListaSedes();
        }
    }
}

// Función para eliminar la sede por año
function eliminarSedePorAño(año) {
    console.log(`Eliminando sede del año: ${año}`);
    
    // Eliminar del objeto sedesMundiales
    if (sedesMundiales[año]) {
        delete sedesMundiales[año];
        console.log(`Sede ${año} eliminada del objeto sedesMundiales`);
    }
    
    // Aquí puedes agregar llamadas a APIs o actualizaciones adicionales si es necesario
    /*
    fetch(`/api/sedes/${año}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sede eliminada del servidor:', data);
    })
    .catch(error => {
        console.error('Error al eliminar del servidor:', error);
    });
    */
}

// Función para actualizar la lista de sedes después de eliminar
function actualizarListaSedes() {
    console.log('Actualizando lista de sedes...');
    
    // Aquí debes llamar a la función que actualiza tu interfaz principal
    // Por ejemplo, si tienes una función que renderiza las sedes:
    
    // Si usas una función como mostrarSedes() o renderizarSedes():
    if (typeof mostrarSedes === 'function') {
        mostrarSedes();
    }
    
    // O si actualizas una tabla:
    if (typeof actualizarTablaSedes === 'function') {
        actualizarTablaSedes();
    }
    
    // O si simplemente recargas la página (menos elegante pero funciona):
    // location.reload();
    
    console.log('Objeto sedesMundiales actualizado:', sedesMundiales);
}

// Inicializar con 1930
mostrarSedes("1930");
activarCard(cardsList[0]);

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
