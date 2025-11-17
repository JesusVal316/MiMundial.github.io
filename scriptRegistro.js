// scriptInicioSesion.js
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');

    // === TOGGLE CONTRASEÑA CON EMOJIS REALES ===
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
    });

    // === INICIO DE SESIÓN ===
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const username = loginForm.querySelector('input[type="text"]').value.trim();
            const email = loginForm.querySelector('input[type="email"]').value.trim();
            const password = passwordInput.value;

            if (!username || !email || !password) {
                alert('Por favor, completa todos los campos.');
                return;
            }

            const usuarios = JSON.parse(localStorage.getItem('usuariosRegistrados') || '[]');
            const usuario = usuarios.find(u =>
                u.username === username &&
                u.email === email &&
                u.password === password
            );

            if (!usuario) {
                alert('Credenciales incorrectas. Verifica tus datos o regístrate primero.');
                return;
            }

            // LOGIN EXITOSO
            localStorage.setItem('currentUser', JSON.stringify(usuario));
            localStorage.setItem('userRole', usuario.role);

            window.location.href = 'inicio.html';
        });
    }

    // === MOSTRAR BOTONES ADMIN 
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const isAdmin = currentUser && currentUser.role === 'administrator';
    document.querySelectorAll('.admin-boton').forEach(btn => {
        btn.style.display = isAdmin ? 'block' : 'none';
    });

    // === MOSTRAR USUARIO LOGUEADO EN MENÚ ===
    const listaUsuarios = document.getElementById('lista-usuarios');
    if (listaUsuarios && currentUser) {
        const existing = listaUsuarios.querySelector('.usuario-logueado');
        if (existing) existing.remove();

        const a = document.createElement('a');
        a.href = 'perfil.html';
        a.className = 'opcion-menu usuario-logueado';
        a.innerHTML = `
            <img src="${currentUser.avatar || 'user.png'}" class="icono-opcion" alt="Avatar">
            <span>${currentUser.username}</span>
        `;
        listaUsuarios.insertBefore(a, listaUsuarios.firstChild);
    }
});