
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
        'publicacion-aceptada': 'Publicación aceptada',
        'ver-todas': 'Ver todas las notificaciones',
        'accesibilidad-title': 'Opciones de Accesibilidad',
        'tamano-texto': 'Ajustar Tamaño de Texto',
        'daltonismo': 'Modos para Daltonismo',
        'protanopia': '🔴 Protanopía',
        'deuteranopia': '🟢 Deuteranopía',
        'tritanopia': '🔵 Tritanopía',
        'normal': '⬜ Normal',
        'idioma': 'Cambiar Idioma',
        'es': 'Español',
        'en': 'Inglés',
        'fr': 'Francés',
        'ar': 'العربية',
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
        'nav-jugadores': 'Jugadores',
        'modo-oscuro': 'Modo Oscuro',
        'notificaciones': 'Notificaciones',
        'accesibilidad': 'Accesibilidad',

        'agregar-sede': 'Agregar Sede',
        'editar-sede': 'Editar Sede',
        'eliminar-sede': 'Eliminar sede',
        'info-adicional-titulo': 'Información Detallada de la Sede',
        'pais': 'País:',
        'ciudad': 'Ciudad Principal:',
        'estadio': 'Estadio Principal:',
        'capacidad': 'Capacidad:',
        'datos-curiosos-titulo': 'Datos Curiosos',
        'anio-mundial': 'Año del Mundial:',
        'titulo-mundial': 'Título:',
        'imagen-mundial': 'URL de la imagen:',
        'descripcion-mundial': 'Descripción:',
        'guardar': 'Guardar',
        'cancelar': 'Cancelar',
        'eliminar-sede-titulo': 'Eliminar Sede del Mundial',
        'selecciona-anio': 'Selecciona el año del mundial a eliminar:',
        'selecciona-anio-opcion': '-- Selecciona un año --',
        'advertencia-eliminar': 'Esta acción no se puede deshacer.',
        'eliminar': 'Eliminar',
        'prev-title': 'Anterior',
        'next-title': 'Siguiente'
        
    },
    en: {
        'header-title': 'My World Cup',
        'cuentas-activas': 'Active Accounts',
        'anadir-cuenta': 'Add Account',
        'notificaciones-title': 'Notifications',
        'notificaciones-nuevas': '3 new',
        'notificacion-aceptada': 'accepted your post',
        'notificacion-comentada': 'commented on your post',
        'notificacion-solicitud': 'has requested to post something',
        'hace-2-horas': '2 hours ago',
        'hace-1-hora': '1 hour ago',
        'hace-30-minutos': '30 minutes ago',
        'aceptar-publicacion': 'Accept Post',
        'publicacion-aceptada': 'Post Accepted',
        'ver-todas': 'View All Notifications',
        'accesibilidad-title': 'Accessibility Options',
        'tamano-texto': 'Adjust Text Size',
        'daltonismo': 'Colorblind Modes',
        'protanopia': '🔴 Protanopia',
        'deuteranopia': '🟢 Deuteranopia',
        'tritanopia': '🔵 Tritanopia',
        'normal': '⬜ Normal',
        'idioma': 'Change Language',
        'es': 'Spanish',
        'en': 'English',
        'fr': 'French',
        'ar': 'Arabic',
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
        'nav-jugadores': 'Players',
        'modo-oscuro': 'Dark Mode',
        'notificaciones': 'Notifications',
        'accesibilidad': 'Accessibility',
        'agregar-sede': 'Add Venue',
        'editar-sede': 'Edit Venue',
        'eliminar-sede': 'Delete Venue',
        'info-adicional-titulo': 'Detailed Venue Information',
        'pais': 'Country:',
        'ciudad': 'Main City:',
        'estadio': 'Main Stadium:',
        'capacidad': 'Capacity:',
        'datos-curiosos-titulo': 'Fun Facts',
        'anio-mundial': 'World Cup Year:',
        'titulo-mundial': 'Title:',
        'imagen-mundial': 'Image URL:',
        'descripcion-mundial': 'Description:',
        'guardar': 'Save',
        'cancelar': 'Cancel',
        'eliminar-sede-titulo': 'Delete World Cup Venue',
        'selecciona-anio': 'Select the year to delete:',
        'selecciona-anio-opcion': '-- Select a year --',
        'advertencia-eliminar': 'This action cannot be undone.',
        'eliminar': 'Delete',
        'prev-title': 'Previous',
        'next-title': 'Next'
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
        'publicacion-aceptada': 'Publication Acceptée',
        'ver-todas': 'Voir Toutes les Notifications',
        'accesibilidad-title': 'Options d\'Accessibilité',
        'tamano-texto': 'Ajuster la Taille du Texte',
        'daltonismo': 'Modes pour Daltonisme',
        'protanopia': '🔴 Protanopie',
        'deuteranopia': '🟢 Deutéranopie',
        'tritanopia': '🔵 Tritanopie',
        'normal': '⬜ Normal',
        'idioma': 'Changer de Langue',
        'es': 'Espagnol',
        'en': 'Anglais',
        'fr': 'Français',
        'ar': 'Arabe',
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
        'nav-jugadores': 'Joueurs',
        'modo-oscuro': 'Mode Sombre',
        'notificaciones': 'Notifications',
        'accesibilidad': 'Accessibilité',
        'agregar-sede': 'Ajouter un Site',
        'editar-sede': 'Modifier le Site',
        'eliminar-sede': 'Supprimer le Site',
        'info-adicional-titulo': 'Informations Détaillées sur le Site',
        'pais': 'Pays :',
        'ciudad': 'Ville Principale :',
        'estadio': 'Stade Principal :',
        'capacidad': 'Capacité :',
        'datos-curiosos-titulo': 'Faits Curieux',
        'anio-mundial': 'Année de la Coupe du Monde :',
        'titulo-mundial': 'Titre :',
        'imagen-mundial': 'URL de l\'image :',
        'descripcion-mundial': 'Description :',
        'guardar': 'Enregistrer',
        'cancelar': 'Annuler',
        'eliminar-sede-titulo': 'Supprimer le Site de la Coupe du Monde',
        'selecciona-anio': 'Sélectionnez l\'année à supprimer :',
        'selecciona-anio-opcion': '-- Sélectionnez une année --',
        'advertencia-eliminar': 'Cette action ne peut pas être annulée.',
        'eliminar': 'Supprimer',
        'prev-title': 'Précédent',
        'next-title': 'Suivant'
    },
    ar: {
        'header-title': 'كأسي العالمي',
        'cuentas-activas': 'الحسابات النشطة',
        'anadir-cuenta': 'إضافة حساب',
        'notificaciones-title': 'الإشعارات',
        'notificaciones-nuevas': '3 جديدة',
        'notificacion-aceptada': 'قبل منشورك',
        'notificacion-comentada': 'علق على منشورك',
        'notificacion-solicitud': 'طلب النشر',
        'hace-2-horas': 'منذ ساعتين',
        'hace-1-hora': 'منذ ساعة',
        'hace-30-minutos': 'منذ 30 دقيقة',
        'aceptar-publicacion': 'قبول المنشور',
        'publicacion-aceptada': 'تم قبول المنشور',
        'ver-todas': 'عرض جميع الإشعارات',
        'accesibilidad-title': 'خيارات الوصول',
        'tamano-texto': 'ضبط حجم النص',
        'daltonismo': 'أوضاع عمى الألوان',
        'protanopia': '🔴 بروتانوبيا',
        'deuteranopia': '🟢 ديوتيرانوبيا',
        'tritanopia': '🔵 تريتانوبيا',
        'normal': '⬜ عادي',
        'idioma': 'تغيير اللغة',
        'es': 'الإسبانية',
        'en': 'الإنجليزية',
        'fr': 'الفرنسية',
        'ar': 'العربية',
        'narrador': 'تفعيل الراوي',
        'alto-contraste': 'تفعيل التباين العالي',
        'reducir-animaciones': 'تقليل الحركات',
        'reset-accesibilidad': 'إعادة تعيين الإعدادات',
        'nav-inicio-sesion': 'تسجيل الدخول',
        'nav-registrarse': 'التسجيل',
        'nav-historia': 'التاريخ',
        'nav-sedes': 'المواقع',
        'nav-foro': 'المنتدى',
        'nav-partidos': 'مشاهدة المباريات',
        'nav-jugadores': 'اللاعبون',
        'modo-oscuro': 'الوضع الداكن',
        'notificaciones': 'الإشعارات',
        'accesibilidad': 'الوصول',
        'hero-title': 'الفرق المشاركة',
        'noticias-title': 'آخر الأخبار',
        'noticia1-title': 'الاستعدادات لكأس العالم 2026 جارية',
        'noticia1-desc': 'المواقع في المكسيك والولايات المتحدة وكندا جاهزة لاستقبال ملايين المشجعين.',
        'noticia2-title': 'الفرق المؤهلة: من سيكون هناك؟',
        'noticia2-desc': 'التصفيات تتقدم، ونعرف بالفعل عدة فرق ستتنافس في 2026.',
        'noticia3-title': 'ملاعب مميزة لكأس العالم',
        'noticia3-desc': 'ملعب أزتيكا سيصنع التاريخ باستضافة كأس العالم الثالثة له.',
        'noticia-link': 'اقرأ المزيد',
        'mundiales-title': 'كؤوس العالم',
        'mundial-2026': 'كأس العالم 2026',
        'mundial-2022': 'كأس العالم 2022',
        'mundial-2018': 'كأس العالم 2018',
        'mundial-2014': 'كأس العالم 2014',
        'mundial-2010': 'كأس العالم 2010',
        'mundial-2006': 'كأس العالم 2006',
        'mundial-2002': 'كأس العالم 2002',
        'mundial-1998': 'كأس العالم 1998',
        'mundial-1994': 'كأس العالم 1994',
        'mundial-1990': 'كأس العالم 1990',
        'mundial-1986': 'كأس العالم 1986',
        'mundial-1982': 'كأس العالم 1982',
        'mundial-1978': 'كأس العالم 1978',
        'mundial-1974': 'كأس العالم 1974',
        'mundial-1970': 'كأس العالم 1970',
        'mundial-1966': 'كأس العالم 1966',
        'mundial-1962': 'كأس العالم 1962',
        'mundial-1958': 'كأس العالم 1958',
        'mundial-1954': 'كأس العالم 1954',
        'mundial-1950': 'كأس العالم 1950',
        'mundial-1938': 'كأس العالم 1938',
        'mundial-1934': 'كأس العالم 1934',
        'mundial-1930': 'كأس العالم 1930',
        'footer': '© 2026 كأسي العالمي. جميع الحقوق محفوظة.'
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
const totalItems = document.querySelectorAll('.info-sedes').length;

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


