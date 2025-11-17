// Traducciones para los textos de la interfaz

document.addEventListener('DOMContentLoaded', () => {
    // === ANIMACIÓN DE ENTRADA ===
    const elements = document.querySelectorAll('header, .texto-menu, .controles-mundiales, .cuadro-blanco-sede, .cuadro-blanco-historia');
    
    elements.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.animation = `fadeInScale 0.1s ease-out ${i * 0.1}s both`;
    });

    // === TRANSICIÓN DE PÁGINA ===
    document.querySelectorAll('a[href*=".html"]').forEach(link => {
        if (link.href.includes('#')) return;
        link.addEventListener('click', e => {
            e.preventDefault();
            elements.forEach(el => el.style.animation = 'fadeOutScale 0.1s ease-in both');
            setTimeout(() => window.location.href = link.href, 180);
        });
    });
});


function posicionarMenu(menu, boton) {
    if (window.innerWidth <= 800) return;
    void boton.offsetHeight;
    const rect = boton.getBoundingClientRect();
    const scrollTop = window.pageYOffset;
    menu.style.left = `${rect.left + rect.width / 2}px`;
    menu.style.top = `${rect.bottom + scrollTop + 8}px`;
    menu.style.transform = 'translateX(-50%)';
}

function abrirMenu(menu, boton) {
    [menuUsuario, menuNotificaciones, menuAccesibilidad].forEach(m => {
        if (m && m !== menu) m.classList.remove('activo');
    });
    menu.classList.toggle('activo');
    if (menu.classList.contains('activo')) {
        setTimeout(() => posicionarMenu(menu, boton), 550);
    }
}

const traducciones = {
    es: {
        'header-title': 'Mi Mundial',
        'cuentas-activas': 'Cuentas activas',
        'anadir-cuenta': 'Añadir cuenta',
        'notificaciones-title': 'Notificaciones',
        'notificaciones-nuevas': '3 nuevas',
        'notificacion-aceptada': 'aceptó tu publicación',
        'notificacion-comentada': 'comentó tu publicación',
        'notificacion-solicitud': 'ha solicitado publicar algo',
        'hace-2-horas': 'Hace 2 horas',
        'hace-1-hora': 'Hace 1 hora',
        'hace-30-minutos': 'Hace 30 minutos',
        'aceptar-publicacion': 'Aceptar publicación',
        'ver-todas': 'Ver todas las notificaciones',
        'accesibilidad-title': 'Opciones de Accesibilidad',
        'tamano-texto': 'Ajustar Tamaño de Texto',
        'daltonismo': 'Modos para Daltonismo',
        'protanopia': 'Protanopía',
        'deuteranopia': 'Deuteranopía',
        'tritanopia': 'Tritanopía',
        'normal': 'Normal',
        'idioma': 'Cambiar Idioma',
        'es': 'Español',
        'en': 'Inglés',
        'fr': 'Francés',
        'narrador': 'Activar Narrador',
        'alto-contraste': 'Activar Alto Contraste',
        'reducir-animaciones': 'Reducir Animaciones',
        'reset-accesibilidad': 'Restablecer Configuraciones',
        'nav-inicio-sesion': 'Inicio Sesión',
        'nav-registrarse': 'Registrarse',
        'nav-historia': 'Historia',
        'nav-sedes': 'Sedes',
        'nav-foro': 'Foro',
        'nav-partidos': 'Ver partidos',
        'nav-perfil': 'Perfil',
        'modo-oscuro': 'Modo Oscuro',
        'notificaciones': 'Notificaciones',
        'accesibilidad': 'Accesibilidad',
        'editar-perfil': 'Editar Perfil',
        'cambiar-marco': 'Cambiar marco',
        'rol': 'Rol',
        'administrador': 'Administrador',
        'pais': 'País',
        'nacionalidad': 'Nacionalidad',
        'miembro-desde': 'Miembro desde',
        'cerrar-sesion': 'Cerrar Sesión',
        'mis-publicaciones': 'Mis Publicaciones',
        'ordenar-por': 'Ordenar por...',
        'ordenar-fecha': 'Fecha (más reciente)',
        'ordenar-alfabeto': 'Alfabéticamente (A-Z)',
        'ordenar-categoria': 'Categoría',
        'ordenar-likes': 'Más likes',
        'ordenar-vistas': 'Más vistas',
        'descripcion': 'Descripción',
        'likes': 'Likes',
        'vistas': 'Vistas',
        'comentarios': 'Comentarios',
        'categoria': 'Categoría',
        'fecha-publicacion': 'Fecha de la Publicación',
        'fecha-aprobacion': 'Fecha de Aprobación',
        'estado': 'Estado',
        'aprobada': 'Aprobada',
        'pendiente': 'Pendiente',
        'compartir': 'Compartir',
        'borrar-publicacion': 'Borrar publicación',
        'borrar-cuenta': 'Borrar cuenta permanentemente',
        'borrar-cuenta-advertencia': 'Esta acción no se puede deshacer. Se eliminarán todos tus datos, publicaciones y comentarios.',
        'guardar-cambios': 'Guardar Cambios',
        'cancelar': 'Cancelar',
        'marcar-todas-leidas': 'Marcar todas como leídas',
        'nombre': 'Nombre',
        'correo': 'Correo',
        'contraseña': 'Contraseña'
    },
    en: {
        'header-title': 'My World Cup',
        'cuentas-activas': 'Active Accounts',
        'anadir-cuenta': 'Add Account',
        'notificaciones-title': 'Notifications',
        'notificaciones-nuevas': '3 new',
        'notificacion-aceptada': 'accepted your post',
        'notificacion-comentada': 'commented on your post',
        'notificacion-solicitud': 'requested to post something',
        'hace-2-horas': '2 hours ago',
        'hace-1-hora': '1 hour ago',
        'hace-30-minutos': '30 minutes ago',
        'aceptar-publicacion': 'Accept Post',
        'ver-todas': 'View All Notifications',
        'accesibilidad-title': 'Accessibility Options',
        'tamano-texto': 'Adjust Text Size',
        'daltonismo': 'Colorblind Modes',
        'protanopia': 'Protanopia',
        'deuteranopia': 'Deuteranopia',
        'tritanopia': 'Tritanopia',
        'normal': 'Normal',
        'idioma': 'Change Language',
        'es': 'Spanish',
        'en': 'English',
        'fr': 'French',
        'narrador': 'Enable Narrator',
        'alto-contraste': 'Enable High Contrast',
        'reducir-animaciones': 'Reduce Animations',
        'reset-accesibilidad': 'Reset Settings',
        'nav-inicio-sesion': 'Login',
        'nav-registrarse': 'Register',
        'nav-historia': 'History',
        'nav-sedes': 'Venues',
        'nav-foro': 'Forum',
        'nav-partidos': 'View Matches',
        'nav-perfil': 'Profile',
        'modo-oscuro': 'Dark Mode',
        'notificaciones': 'Notifications',
        'accesibilidad': 'Accessibility',
        'editar-perfil': 'Edit Profile',
        'cambiar-marco': 'Change Border',
        'rol': 'Role',
        'administrador': 'Administrator',
        'pais': 'Country',
        'nacionalidad': 'Nationality',
        'miembro-desde': 'Member since',
        'cerrar-sesion': 'Log Out',
        'mis-publicaciones': 'My Posts',
        'ordenar-por': 'Sort by...',
        'ordenar-fecha': 'Date (newest)',
        'ordenar-alfabeto': 'Alphabetically (A-Z)',
        'ordenar-categoria': 'Category',
        'ordenar-likes': 'Most likes',
        'ordenar-vistas': 'Most views',
        'descripcion': 'Description',
        'likes': 'Likes',
        'vistas': 'Views',
        'comentarios': 'Comments',
        'categoria': 'Category',
        'fecha-publicacion': 'Post Date',
        'fecha-aprobacion': 'Approval Date',
        'estado': 'Status',
        'aprobada': 'Approved',
        'pendiente': 'Pending',
        'compartir': 'Share',
        'borrar-publicacion': 'Delete post',
        'borrar-cuenta': 'Delete account permanently',
        'borrar-cuenta-advertencia': 'This action cannot be undone. All your data, posts, and comments will be deleted.',
        'guardar-cambios': 'Save Changes',
        'cancelar': 'Cancel',
        'marcar-todas-leidas': 'Mark all as read',
        'nombre': 'Name',
        'correo': 'Email',
        'contraseña': 'Password'
    },
    fr: {
        'header-title': 'Ma Coupe du Monde',
        'cuentas-activas': 'Comptes Actifs',
        'anadir-cuenta': 'Ajouter un Compte',
        'notificaciones-title': 'Notifications',
        'notificaciones-nuevas': '3 nouvelles',
        'notificacion-aceptada': 'a accepté votre publication',
        'notificacion-comentada': 'a commenté votre publication',
        'notificacion-solicitud': 'a demandé à publier quelque chose',
        'hace-2-horas': 'Il y a 2 heures',
        'hace-1-hora': 'Il y a 1 heure',
        'hace-30-minutos': 'Il y a 30 minutes',
        'aceptar-publicacion': 'Accepter la Publication',
        'ver-todas': 'Voir Toutes les Notifications',
        'accesibilidad-title': 'Options d\'Accessibilité',
        'tamano-texto': 'Ajuster la Taille du Texte',
        'daltonismo': 'Modes pour Daltonisme',
        'protanopia': 'Protanopie',
        'deuteranopia': 'Deutéranopie',
        'tritanopia': 'Tritanopie',
        'normal': 'Normal',
        'idioma': 'Changer de Langue',
        'es': 'Espagnol',
        'en': 'Anglais',
        'fr': 'Français',
        'narrador': 'Activer le Narrateur',
        'alto-contraste': 'Activer le Contraste Élevé',
        'reducir-animaciones': 'Réduire les Animations',
        'reset-accesibilidad': 'Réinitialiser les Paramètres',
        'nav-inicio-sesion': 'Connexion',
        'nav-registrarse': 'S\'inscrire',
        'nav-historia': 'Histoire',
        'nav-sedes': 'Sites',
        'nav-foro': 'Forum',
        'nav-partidos': 'Voir les Matchs',
        'nav-perfil': 'Profil',
        'modo-oscuro': 'Mode Sombre',
        'notificaciones': 'Notifications',
        'accesibilidad': 'Accessibilité',
        'editar-perfil': 'Modifier le Profil',
        'cambiar-marco': 'Changer la Bordure',
        'rol': 'Rôle',
        'administrador': 'Administrateur',
        'pais': 'Pays',
        'nacionalidad': 'Nationalité',
        'miembro-desde': 'Membre depuis',
        'cerrar-sesion': 'Déconnexion',
        'mis-publicaciones': 'Mes Publications',
        'ordenar-por': 'Trier par...',
        'ordenar-fecha': 'Date (plus récent)',
        'ordenar-alfabeto': 'Alphabétiquement (A-Z)',
        'ordenar-categoria': 'Catégorie',
        'ordenar-likes': 'Plus de likes',
        'ordenar-vistas': 'Plus de vues',
        'descripcion': 'Description',
        'likes': 'Likes',
        'vistas': 'Vues',
        'comentarios': 'Commentaires',
        'categoria': 'Catégorie',
        'fecha-publicacion': 'Date de Publication',
        'fecha-aprobacion': 'Date d\'Approbation',
        'estado': 'Statut',
        'aprobada': 'Approuvée',
        'pendiente': 'En attente',
        'compartir': 'Partager',
        'borrar-publicacion': 'Supprimer la publication',
        'borrar-cuenta': 'Supprimer le compte définitivement',
        'borrar-cuenta-advertencia': 'Cette action ne peut pas être annulée. Toutes vos données, publications et commentaires seront supprimés.',
        'guardar-cambios': 'Enregistrer les Modifications',
        'cancelar': 'Annuler',
        'marcar-todas-leidas': 'Marquer tout comme lu',
        'nombre': 'Nom',
        'correo': 'Email',
        'contraseña': 'Mot de passe'
    }
};

// Selectores
const menuToggle = document.querySelector('.menu-toggle');
const menuLateral = document.querySelector('.menu-lateral');
const modoOscuroBtn = document.getElementById('modo-oscuro');
const modoOscuroLateralBtn = document.getElementById('modo-oscuro-lateral');
const modoOscuroIcon = document.querySelector('#modo-oscuro img');
const modoOscuroLateralIcon = document.querySelector('#modo-oscuro-lateral img');
const botonUsuario = document.getElementById('boton-usuario');
const menuUsuario = document.getElementById('menu-usuario');
const botonNotificaciones = document.getElementById('modo-notificacion');
const botonNotificacionesLateral = document.getElementById('modo-notificacion-lateral');
const menuNotificaciones = document.getElementById('menu-notificaciones');
const botonesAceptar = document.querySelectorAll('.btn-aceptar-publicacion');
const contadorNotificaciones = document.querySelectorAll('.contador-notificaciones');
const contadorMenu = document.querySelector('.contador-menu');
const botonAccesibilidad = document.getElementById('boton-accesibilidad');
const botonAccesibilidadLateral = document.getElementById('boton-accesibilidad-lateral');
const menuAccesibilidad = document.getElementById('menu-accesibilidad');
const carruselItems = document.querySelector('.carrusel-items');
const carruselBtnPrev = document.querySelector('.carrusel-btn-prev');
const carruselBtnNext = document.querySelector('.carrusel-btn-next');
const btnTamano = document.querySelectorAll('.btn-tamano');
const btnDaltonismo = document.querySelectorAll('.btn-daltonismo');
const btnIdioma = document.querySelectorAll('.btn-idioma');
const narradorToggle = document.getElementById('narrador');
const altoContrasteToggle = document.getElementById('alto-contraste');
const reducirAnimacionesToggle = document.getElementById('reducir-animaciones');
const resetAccesibilidad = document.getElementById('reset-accesibilidad');

let notificaciones = 3;

// Función para cambiar idioma
function cambiarIdioma(idioma) {
    document.documentElement.setAttribute('lang', idioma);
    document.documentElement.setAttribute('dir', idioma === 'ar' ? 'rtl' : 'ltr');
    document.querySelectorAll('[data-i18n]').forEach(elemento => {
        const clave = elemento.getAttribute('data-i18n');
        if (traducciones[idioma][clave]) {
            elemento.textContent = traducciones[idioma][clave];
        }
    });
    document.querySelectorAll('[data-i18n-title]').forEach(elemento => {
        const clave = elemento.getAttribute('data-i18n-title');
        if (traducciones[idioma][clave]) {
            elemento.setAttribute('title', traducciones[idioma][clave]);
        }
    });
    document.title = traducciones[idioma]['header-title'] || 'Mi Agenda Mundial 2026';
    // Actualizar el alt de los íconos del modo oscuro
    const isDark = document.documentElement.classList.contains('dark');
    modoOscuroIcon.alt = isDark ? traducciones[idioma]['modo-oscuro'] || 'Modo Oscuro' : 'Modo claro';
    modoOscuroLateralIcon.alt = isDark ? traducciones[idioma]['modo-oscuro'] || 'Modo Oscuro' : 'Modo claro';
    localStorage.setItem('idioma', idioma);
}

// Cargar idioma guardado o predeterminado
const idiomaGuardado = localStorage.getItem('idioma') || 'es';
cambiarIdioma(idiomaGuardado);

// Función para alternar el modo oscuro
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('modoOscuro', isDark);
    // Actualizar íconos según el modo
    modoOscuroIcon.src = isDark ? 'modo oscuro.png' : 'modo claro.png';
    modoOscuroLateralIcon.src = isDark ? 'modo oscuro.png' : 'modo claro.png';
    const idioma = document.documentElement.getAttribute('lang');
    modoOscuroIcon.alt = isDark ? traducciones[idioma]['modo-oscuro'] || 'Modo Oscuro' : 'Modo claro';
    modoOscuroLateralIcon.alt = isDark ? traducciones[idioma]['modo-oscuro'] || 'Modo Oscuro' : 'Modo claro';
}

// Cargar modo oscuro guardado
if (localStorage.getItem('modoOscuro') === 'true') {
    document.documentElement.classList.add('dark');
    modoOscuroIcon.src = 'modo oscuro.png';
    modoOscuroLateralIcon.src = 'modo oscuro.png';
    const idioma = document.documentElement.getAttribute('lang');
    modoOscuroIcon.alt = traducciones[idioma]['modo-oscuro'] || 'Modo Oscuro';
    modoOscuroLateralIcon.alt = traducciones[idioma]['modo-oscuro'] || 'Modo Oscuro';
}

// Event listeners para el modo oscuro
modoOscuroBtn.addEventListener('click', toggleDarkMode);
modoOscuroLateralBtn.addEventListener('click', () => {
    toggleDarkMode();
    menuLateral.classList.remove('activo');
});

// Evento para cambiar idioma
btnIdioma.forEach(boton => {
    boton.addEventListener('click', function() {
        const idioma = this.getAttribute('data-idioma');
        cambiarIdioma(idioma);
    });
});

// Menú lateral
menuToggle.addEventListener('click', () => {
    menuLateral.classList.toggle('activo');
    // Cerrar menús desplegables al abrir/cerrar el menú lateral
    menuUsuario.classList.remove('activo');
    menuNotificaciones.classList.remove('activo');
    menuAccesibilidad.classList.remove('activo');
});

// Cerrar menú lateral al hacer clic en enlaces de navegación
document.querySelectorAll('.menu-lateral a').forEach(enlace => {
    enlace.addEventListener('click', () => {
        menuLateral.classList.remove('activo');
    });
});

// Cerrar menús desplegables al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!menuUsuario.contains(e.target) && !botonUsuario.contains(e.target)) {
        menuUsuario.classList.remove('activo');
    }
    if (!menuNotificaciones.contains(e.target) && !botonNotificaciones.contains(e.target) && !botonNotificacionesLateral.contains(e.target)) {
        menuNotificaciones.classList.remove('activo');
    }
    if (!menuAccesibilidad.contains(e.target) && !botonAccesibilidad.contains(e.target) && !botonAccesibilidadLateral.contains(e.target)) {
        menuAccesibilidad.classList.remove('activo');
    }
    if (!menuLateral.contains(e.target) && !menuToggle.contains(e.target)) {
        menuLateral.classList.remove('activo');
    }
});

// Menú de usuario
botonUsuario.addEventListener('click', () => {
    menuUsuario.classList.toggle('activo');
    menuNotificaciones.classList.remove('activo');
    menuAccesibilidad.classList.remove('activo');
});

// Menú de notificaciones
botonNotificaciones.addEventListener('click', () => {
    menuNotificaciones.classList.toggle('activo');
    menuUsuario.classList.remove('activo');
    menuAccesibilidad.classList.remove('activo');
});

botonNotificacionesLateral.addEventListener('click', () => {
    menuNotificaciones.classList.toggle('activo');
    menuUsuario.classList.remove('activo');
    menuAccesibilidad.classList.remove('activo');
    menuLateral.classList.remove('activo');
});

botonesAceptar.forEach(boton => {
    boton.addEventListener('click', function() {
        this.classList.add('aceptado');
        this.textContent = traducciones[document.documentElement.getAttribute('lang')]['publicacion-aceptada'];
        notificaciones--;
        contadorNotificaciones.forEach(contador => {
            contador.textContent = notificaciones;
        });
        contadorMenu.textContent = `${notificaciones} ${traducciones[document.documentElement.getAttribute('lang')]['notificaciones-nuevas'].split(' ')[1]}`;
        if (notificaciones === 0) {
            contadorNotificaciones.forEach(contador => {
                contador.style.display = 'none';
            });
            contadorMenu.style.display = 'none';
        }
    });
});

// Menú de accesibilidad
botonAccesibilidad.addEventListener('click', () => {
    menuAccesibilidad.classList.toggle('activo');
    menuUsuario.classList.remove('activo');
    menuNotificaciones.classList.remove('activo');
});

botonAccesibilidadLateral.addEventListener('click', () => {
    menuAccesibilidad.classList.toggle('activo');
    menuUsuario.classList.remove('activo');
    menuNotificaciones.classList.remove('activo');
    menuLateral.classList.remove('activo');
});

// Ajustar tamaño de texto
btnTamano.forEach(boton => {
    boton.addEventListener('click', function() {
        const accion = this.getAttribute('data-accion');
        document.documentElement.classList.remove('tamano-pequeno', 'tamano-grande');
        if (accion === 'disminuir-texto') {
            document.documentElement.classList.add('tamano-pequeno');
        } else if (accion === 'aumentar-texto') {
            document.documentElement.classList.add('tamano-grande');
        }
        localStorage.setItem('tamanoTexto', accion);
    });
});

// Cargar tamaño de texto guardado
const tamanoTextoGuardado = localStorage.getItem('tamanoTexto');
if (tamanoTextoGuardado === 'disminuir-texto') {
    document.documentElement.classList.add('tamano-pequeno');
} else if (tamanoTextoGuardado === 'aumentar-texto') {
    document.documentElement.classList.add('tamano-grande');
}

// Modos para daltonismo
btnDaltonismo.forEach(boton => {
    boton.addEventListener('click', function() {
        const tipo = this.getAttribute('data-tipo');
        document.documentElement.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
        if (tipo !== 'reset') {
            document.documentElement.classList.add(tipo);
        }
        localStorage.setItem('daltonismo', tipo);
    });
});

// Cargar modo de daltonismo guardado
const daltonismoGuardado = localStorage.getItem('daltonismo');
if (daltonismoGuardado && daltonismoGuardado !== 'reset') {
    document.documentElement.classList.add(daltonismoGuardado);
}

// Alto contraste
altoContrasteToggle.addEventListener('change', function() {
    document.documentElement.classList.toggle('alto-contraste', this.checked);
    localStorage.setItem('altoContraste', this.checked);
});

// Cargar alto contraste guardado
if (localStorage.getItem('altoContraste') === 'true') {
    document.documentElement.classList.add('alto-contraste');
    altoContrasteToggle.checked = true;
}

// Reducir animaciones
reducirAnimacionesToggle.addEventListener('change', function() {
    document.documentElement.classList.toggle('reducir-animaciones', this.checked);
    localStorage.setItem('reducirAnimaciones', this.checked);
});

// Cargar reducir animaciones guardado
if (localStorage.getItem('reducirAnimaciones') === 'true') {
    document.documentElement.classList.add('reducir-animaciones');
    reducirAnimacionesToggle.checked = true;
}

// Narrador
narradorToggle.addEventListener('change', function() {
    if (this.checked) {
        document.addEventListener('click', narrarElemento);
    } else {
        document.removeEventListener('click', narrarElemento);
    }
    localStorage.setItem('narrador', this.checked);
});

function narrarElemento(evento) {
    const elemento = evento.target.closest('[data-i18n], [data-i18n-title], p, h1, h2, h3, h4, a, button');
    if (elemento) {
        let texto = '';
        if (elemento.hasAttribute('data-i18n')) {
            const clave = elemento.getAttribute('data-i18n');
            texto = traducciones[document.documentElement.getAttribute('lang')][clave] || elemento.textContent;
        } else if (elemento.hasAttribute('data-i18n-title')) {
            const clave = elemento.getAttribute('data-i18n-title');
            texto = traducciones[document.documentElement.getAttribute('lang')][clave] || elemento.getAttribute('title');
        } else {
            texto = elemento.textContent || elemento.innerText;
        }
        if (texto) {
            const utterance = new SpeechSynthesisUtterance(texto);
            utterance.lang = document.documentElement.getAttribute('lang');
            window.speechSynthesis.speak(utterance);
        }
    }
}

// Cargar narrador guardado
if (localStorage.getItem('narrador') === 'true') {
    narradorToggle.checked = true;
    document.addEventListener('click', narrarElemento);
}

// Restablecer configuraciones
resetAccesibilidad.addEventListener('click', () => {
    document.documentElement.classList.remove('dark', 'tamano-pequeno', 'tamano-grande', 'protanopia', 'deuteranopia', 'tritanopia', 'alto-contraste', 'reducir-animaciones');
    localStorage.removeItem('modoOscuro');
    localStorage.removeItem('tamanoTexto');
    localStorage.removeItem('daltonismo');
    localStorage.removeItem('altoContraste');
    localStorage.removeItem('reducirAnimaciones');
    localStorage.removeItem('narrador');
    narradorToggle.checked = false;
    altoContrasteToggle.checked = false;
    reducirAnimacionesToggle.checked = false;
    document.removeEventListener('click', narrarElemento);
    cambiarIdioma('es');
});

// Carrusel de noticias
let currentIndex = 0;
const totalItems = document.querySelectorAll('.noticia-card').length;

function actualizarCarrusel() {
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    const offset = isRtl ? currentIndex * (window.innerWidth > 800 ? 100 / 3 : 100) : -currentIndex * (window.innerWidth > 800 ? 100 / 3 : 100);
    carruselItems.style.transform = `translateX(${offset}%)`;
}

carruselBtnNext.addEventListener('click', () => {
    if (window.innerWidth > 800) {
        currentIndex = (currentIndex + 1) % totalItems;
    } else {
        currentIndex = (currentIndex + 1) % totalItems;
    }
    actualizarCarrusel();
});

carruselBtnPrev.addEventListener('click', () => {
    if (window.innerWidth > 800) {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    } else {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    }
    actualizarCarrusel();
});

// Ajustar carrusel en pantallas grandes
function ajustarCarrusel() {
    if (window.innerWidth > 800) {
        carruselItems.style.transform = 'translateX(0)';
        currentIndex = 0;
    } else {
        actualizarCarrusel();
    }
}
document.addEventListener("DOMContentLoaded", function() {
    // Menú hamburguesa
    const menuToggle = document.querySelector(".menu-toggle");
    const menuLateral = document.querySelector(".menu-lateral");

    menuToggle.addEventListener("click", function() {
        menuLateral.classList.toggle("active");
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll(".menu-lateral a").forEach(link => {
        link.addEventListener("click", () => {
            menuLateral.classList.remove("active");
        });
    });

    // Modo oscuro
    const toggleDarkMode = function() {
        document.body.classList.toggle("modo-oscuro");
        // Guardar preferencia en localStorage
        if (document.body.classList.contains("modo-oscuro")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    };

    const modoOscuroBtn = document.querySelector("#modo-oscuro");
    const modoOscuroLateralBtn = document.querySelector("#modo-oscuro-lateral");

    // Cargar preferencia guardada
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("modo-oscuro");
    }

    // Alternar modo oscuro al hacer clic
    modoOscuroBtn.addEventListener("click", toggleDarkMode);
    modoOscuroLateralBtn.addEventListener("click", toggleDarkMode);
});

window.addEventListener('resize', ajustarCarrusel);
ajustarCarrusel();


