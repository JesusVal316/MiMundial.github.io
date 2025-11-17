document.addEventListener('DOMContentLoaded', function () {
    // === ELEMENTOS DEL DOM ===
    const html = document.documentElement;
    const modoOscuroBtn = document.getElementById('modo-oscuro');
    const modoOscuroLateralBtn = document.getElementById('modo-oscuro-lateral');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuLateral = document.getElementById('menu-lateral');
    const botonNotificacion = document.getElementById('modo-notificacion');
    const menuNotificaciones = document.getElementById('menu-notificaciones');
    const botonesAceptar = document.querySelectorAll('.btn-aceptar-publicacion');
    const contadorNotificaciones = document.querySelector('.contador-notificaciones');
    const contadorMenu = document.querySelector('.contador-menu');
    const botonUsuario = document.getElementById('boton-usuario');
    const menuUsuario = document.getElementById('menu-usuario');
    const botonAccesibilidad = document.getElementById('boton-accesibilidad');
    const menuAccesibilidad = document.getElementById('menu-accesibilidad');
    const botonesTamano = document.querySelectorAll('.btn-tamano');
    const botonesDaltonismo = document.querySelectorAll('.btn-daltonismo');
    const botonesIdioma = document.querySelectorAll('.btn-idioma');
    const altoContrasteToggle = document.getElementById('alto-contraste');
    const reducirAnimacionesToggle = document.getElementById('reducir-animaciones');
    const narradorToggle = document.getElementById('narrador');
    const resetAccesibilidad = document.getElementById('reset-accesibilidad');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');
    const loginForm = document.getElementById('login-form');


    
    // === TOGGLE CONTRASEÑA CON EMOJIS REALES ===
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
    });

    // === FORMULARIO DE INICIO DE SESIÓN (CORREGIDO) ===
    if (loginForm && passwordInput) {
        // Crear error dinámico
        const passwordError = document.createElement('p');
        passwordError.className = 'error';
        passwordError.style.color = 'red';
        passwordError.style.display = 'none';
        passwordError.style.marginTop = '5px';
        passwordError.style.fontSize = '0.9em';
        passwordInput.parentElement.appendChild(passwordError);

        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const password = passwordInput.value.trim();

            // Validar longitud
            if (password.length !== 9) {
                passwordError.textContent = translations[html.lang]['error-longitud'];
                passwordError.style.display = 'block';
                return;
            } else {
                passwordError.style.display = 'none';
            }

            // Redirección
            if (password === '123456789') {
                alert(translations[html.lang]['admin-welcome']);
                window.location.href = 'inicio.html'; // Admin
            } else {
                const username = this.querySelector('input[type="text"]')?.value.trim() || 'Usuario';
                const msg = translations[html.lang]['user-welcome'].replace('{username}', username);
                alert(msg);
                window.location.href = 'inicio-usuario.html'; // Usuario
            }
        });
    }

    
});

