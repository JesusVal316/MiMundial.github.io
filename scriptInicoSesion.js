document.addEventListener('DOMContentLoaded', function () {
    // === ELEMENTOS DEL DOM ===
    const html = document.documentElement;
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
        if (!listaUsuarios) return;
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
        if (!modalBienvenida) return;
        const msg = usuario.role === 'administrator'
            ? 'Bienvenido, Administrador'
            : `¡Bienvenido, ${usuario.username}!`;
        bienvenidaMensaje.textContent = msg;
        bienvenidaAvatar.src = usuario.avatar || 'user.png';
        modalBienvenida.style.display = 'flex';
        setTimeout(() => modalBienvenida.classList.add('mostrar'), 100);
    }

    if (registroForm) {
        registroForm.addEventListener('submit', e => {
            e.preventDefault(); // ← CRUCIAL

            const username = registroForm.querySelector('#username').value.trim();
            const email = registroForm.querySelector('#email').value.trim();
            const password = passwordInput.value;
            const birthDate = birthDateInput.value;
            const role = registroForm.querySelector('#role').value;
            const avatar = vistaPrevia.querySelector('img')?.src || 'user.png';

            if (password.length !== 9) {
                passwordError.textContent = 'La contraseña debe tener exactamente 9 caracteres';
                passwordError.style.display = 'block';
                return;
            }

            if (role === 'administrator' && password !== '123456789') {
                alert('Para ser administrador, la contraseña debe ser exactamente: 123456789');
                return;
            }

            const edad = calcularEdad(birthDate);
            if (edad < 12) return;

            const usuario = { username, email, password, birthDate, role, avatar, fechaRegistro: new Date().toISOString() };
            if (!guardarUsuario(usuario)) {
                alert('Usuario o email ya existe');
                return;
            }

            // Guardar sesión
            localStorage.setItem('currentUser', JSON.stringify(usuario));
            localStorage.setItem('userRole', role);

            mostrarBienvenida(usuario);
        });
    }

    // === CERRAR MODAL Y REDIRIGIR ===
    if (cerrarBienvenida) {
        cerrarBienvenida.addEventListener('click', () => {
            modalBienvenida.classList.remove('mostrar');
            modalBienvenida.addEventListener('transitionend', function handler() {
                modalBienvenida.style.display = 'none';
                modalBienvenida.removeEventListener('transitionend', handler);
                window.location.href = 'inicio.html'; // ← SIEMPRE A inicio.html
            });
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