

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