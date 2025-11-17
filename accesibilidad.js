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