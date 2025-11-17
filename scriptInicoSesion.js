document.addEventListener('DOMContentLoaded', function () {
    // === ELEMENTOS DEL DOM ===
    const html = document.documentElement;
    const modoOscuroBtn = document.getElementById('modo-oscuro');
    const modoOscuroLateralBtn = document.getElementById('modo-oscuro-lateral');
    const modoOscuroIcon = document.querySelector('#modo-oscuro img');
    const modoOscuroLateralIcon = document.querySelector('#modo-oscuro-lateral img');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuLateral = document.getElementById('menu-lateral');
    const botonNotificacion = document.getElementById('modo-notificacion');
    const botonNotificacionLateral = document.getElementById('modo-notificacion-lateral');
    const menuNotificaciones = document.getElementById('menu-notificaciones');
    const botonesAceptar = document.querySelectorAll('.btn-aceptar-publicacion');
    const contadorNotificaciones = document.querySelectorAll('.contador-notificaciones');
    const contadorMenu = document.querySelector('.contador-menu');
    const botonUsuario = document.getElementById('boton-usuario');
    const menuUsuario = document.getElementById('menu-usuario');
    const botonAccesibilidad = document.getElementById('boton-accesibilidad');
    const botonAccesibilidadLateral = document.getElementById('boton-accesibilidad-lateral');
    const menuAccesibilidad = document.getElementById('menu-accesibilidad');
    const botonesTamano = document.querySelectorAll('.btn-tamano');
    const botonesDaltonismo = document.querySelectorAll('.btn-daltonismo');
    const botonesIdioma = document.querySelectorAll('.btn-idioma');
    const altoContrasteToggle = document.getElementById('alto-contraste');
    const reducirAnimacionesToggle = document.getElementById('reducir-animaciones');
    const narradorToggle = document.getElementById('narrador');
    const resetAccesibilidad = document.getElementById('reset-accesibilidad');

    // Formulario de registro
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    const registroForm = document.getElementById('registroForm');
    const birthDateInput = document.getElementById('birth_date');
    const edadError = document.getElementById('edad-error');
    const profilePictureInput = document.getElementById('profile_picture');
    const vistaPrevia = document.getElementById('vista-previa');
    const listaUsuarios = document.getElementById('lista-usuarios');
    const modalBienvenida = document.getElementById('modal-bienvenida');
    const bienvenidaMensaje = document.getElementById('bienvenida-mensaje');
    const bienvenidaAvatar = document.getElementById('bienvenida-avatar');
    const cerrarBienvenida = document.getElementById('cerrar-bienvenida');

    // === REGISTRO ===
    function calcularEdad(fecha) {
        const hoy = new Date();
        const nacimiento = new Date(fecha);
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const m = hoy.getMonth() - nacimiento.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) edad--;
        return edad;
    }

    if (birthDateInput) {
        birthDateInput.addEventListener('change', function () {
            if (!registroForm) return;
            const edad = calcularEdad(this.value);
            if (edad < 12) {
                edadError.textContent = 'Debes tener al menos 12 años';
                edadError.style.display = 'block';
            } else {
                edadError.style.display = 'none';
            }
        });
    }

    if (profilePictureInput && vistaPrevia) {
        profilePictureInput.addEventListener('change', e => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = e => vistaPrevia.innerHTML = `<img src="${e.target.result}" class="imagen-previa">`;
                reader.readAsDataURL(file);
            }
        });
    }

    function guardarUsuario(usuario) {
        const usuarios = JSON.parse(localStorage.getItem('usuariosRegistrados') || '[]');
        if (usuarios.some(u => u.username === usuario.username || u.email === usuario.email)) return false;
        usuarios.push(usuario);
        localStorage.setItem('usuariosRegistrados', JSON.stringify(usuarios));
        actualizarListaUsuarios();
        return true;
    }

    function actualizarListaUsuarios() {
        if (!listaUsuarios || !registroForm) return;
        const usuarios = JSON.parse(localStorage.getItem('usuariosRegistrados') || '[]');
        listaUsuarios.querySelectorAll('.usuario-dinamico').forEach(u => u.remove());
        usuarios.forEach(u => {
            const a = document.createElement('a');
            a.href = 'perfil.html';
            a.className = 'opcion-menu usuario-dinamico';
            a.innerHTML = `<img src="${u.avatar || 'user.png'}" class="icono-opcion"><span>${u.username}</span>`;
            listaUsuarios.appendChild(a);
        });
    }

    function mostrarBienvenida(usuario) {
        if (!modalBienvenida || !registroForm) return;
        const msg = usuario.role === 'administrator'
            ? translations[html.lang]['admin-welcome']
            : translations[html.lang]['user-welcome'].replace('{username}', usuario.username);
        bienvenidaMensaje.textContent = msg;
        bienvenidaAvatar.src = usuario.avatar || 'user.png';
        modalBienvenida.style.display = 'flex';
        setTimeout(() => modalBienvenida.classList.add('mostrar'), 100);
    }

    if (registroForm) {
        registroForm.addEventListener('submit', e => {
            e.preventDefault();
            const username = registroForm.querySelector('#username').value.trim();
            const email = registroForm.querySelector('#email').value.trim();
            const password = passwordInput.value;
            const birthDate = birthDateInput.value;
            const role = registroForm.querySelector('#role').value;
            const avatar = vistaPrevia.querySelector('img')?.src || 'user.png';

            if (password.length !== 9) {
                passwordError.textContent = translations[html.lang]['error-longitud'];
                passwordError.style.display = 'block';
                return;
            }

            const edad = calcularEdad(birthDate);
            if (edad < 12) return;

            const usuario = { username, email, password, birthDate, role, avatar, fechaRegistro: new Date().toISOString() };
            if (!guardarUsuario(usuario)) {
                alert('Usuario o email ya existe');
                return;
            }

            mostrarBienvenida(usuario);
            localStorage.setItem('userRole', role);
            localStorage.setItem('currentUser', JSON.stringify(usuario));
        });
    }

    if (cerrarBienvenida) {
        cerrarBienvenida.addEventListener('click', () => {
            modalBienvenida.classList.remove('mostrar');
            setTimeout(() => {
                modalBienvenida.style.display = 'none';
                window.location.href = localStorage.getItem('userRole') === 'administrator' ? 'inicio.html' : 'inicio-usuario.html';
            }, 500);
        });
    }

    actualizarListaUsuarios();

    // === TOGGLE CONTRASEÑA ===
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;
            togglePassword.textContent = type === 'password' ? 'Ver' : 'Ocultar';
        });
    }

    
});