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
        // Encabezado y menús
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
        'color-header': 'Color del Header',
    'restablecer': 'Restablecer',
        // Accesibilidad
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

        // Navegación
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

        // Formulario de registro
        'register_title': 'Regístrate y comparte tus momentos favoritos del fútbol.',
        'username': 'Nombre de usuario: *',
        'email': 'E-mail: *',
        'password': 'Contraseña: *',
        'country': 'País de origen: *',
        'select_country': 'Seleccione un país',
        'nationality': 'Nacionalidad: *',
        'gender': 'Género: *',
        'male': 'Masculino',
        'female': 'Femenino',
        'birth_date': 'Fecha de nacimiento: *',
        'role': 'Rol: *',
        'user': 'Usuario',
        'administrator': 'Administrador',
        'profile_picture': 'Foto de perfil:',
        'terms_of_use': 'Términos de uso',
        'confirm': 'Confirmar',
        'terms_intro': 'Al registrarse, usted acepta cumplir con las siguientes condiciones:',
        'terms_item1': 'No se permite el uso indebido de la plataforma.',
        'terms_item2': 'Debe respetar los derechos de autor y las leyes aplicables.',
        'terms_item3': 'Los datos personales serán tratados de acuerdo a nuestra política de privacidad.',
        'terms_item4': 'El incumplimiento puede derivar en la suspensión de la cuenta.',
        'terms_conclusion': 'Al continuar con el registro, usted confirma haber leído y aceptado estos términos.',
        'registration_success': '¡Te has registrado correctamente!',
        'have_account': '¿Ya dispones de una cuenta?',
        'log_in': 'Iniciar sesión',

        // Footer
        'copyright': '© 2026 Mi Mundial. Todos los derechos reservados.'
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
        'color-header': 'Header Color',
    'restablecer': 'Reset',
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
        'nav-perfil': 'Profile',
        'modo-oscuro': 'Dark Mode',
        'notificaciones': 'Notifications',
        'accesibilidad': 'Accessibility',

        'register_title': 'Register and share your favorite football moments.',
        'username': 'Username: *',
        'email': 'Email: *',
        'password': 'Password: *',
        'country': 'Country of origin: *',
        'select_country': 'Select a country',
        'nationality': 'Nationality: *',
        'gender': 'Gender: *',
        'male': 'Male',
        'female': 'Female',
        'birth_date': 'Date of birth: *',
        'role': 'Role: *',
        'user': 'User',
        'administrator': 'Administrator',
        'profile_picture': 'Profile picture:',
        'terms_of_use': 'Terms of Use',
        'confirm': 'Confirm',
        'terms_intro': 'By registering, you agree to comply with the following conditions:',
        'terms_item1': 'Misuse of the platform is not allowed.',
        'terms_item2': 'You must respect copyright and applicable laws.',
        'terms_item3': 'Personal data will be handled in accordance with our privacy policy.',
        'terms_item4': 'Non-compliance may result in account suspension.',
        'terms_conclusion': 'By continuing with registration, you confirm that you have read and accepted these terms.',
        'registration_success': 'You have successfully registered!',
        'have_account': 'Already have an account?',
        'log_in': 'Log in',

        'copyright': '© 2026 My World Cup. All rights reserved.'
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
        'color-header': 'Couleur de l\'en-tête',
    'restablecer': 'Réinitialiser',
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
        'nav-perfil': 'Profil',
        'modo-oscuro': 'Mode Sombre',
        'notificaciones': 'Notifications',
        'accesibilidad': 'Accessibilité',

        'register_title': 'Inscrivez-vous et partagez vos moments préférés de football.',
        'username': 'Nom d\'utilisateur : *',
        'email': 'E-mail : *',
        'password': 'Mot de passe : *',
        'country': 'Pays d\'origine : *',
        'select_country': 'Sélectionnez un pays',
        'nationality': 'Nationalité : *',
        'gender': 'Genre : *',
        'male': 'Masculin',
        'female': 'Féminin',
        'birth_date': 'Date de naissance : *',
        'role': 'Rôle : *',
        'user': 'Utilisateur',
        'administrator': 'Administrateur',
        'profile_picture': 'Photo de profil :',
        'terms_of_use': 'Conditions d\'utilisation',
        'confirm': 'Confirmer',
        'terms_intro': 'En vous inscrivant, vous acceptez de respecter les conditions suivantes :',
        'terms_item1': 'L\'utilisation abusive de la plateforme n\'est pas autorisée.',
        'terms_item2': 'Vous devez respecter les droits d\'auteur et les lois applicables.',
        'terms_item3': 'Les données personnelles seront traitées conformément à notre politique de confidentialité.',
        'terms_item4': 'Le non-respect peut entraîner la suspension du compte.',
        'terms_conclusion': 'En continuant l\'inscription, vous confirmez avoir lu et accepté ces conditions.',
        'registration_success': 'Vous vous êtes inscrit avec succès !',
        'have_account': 'Vous avez déjà un compte ?',
        'log_in': 'Se connecter',

        'copyright': '© 2026 Ma Coupe du Monde. Tous droits réservés.'
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
        'protanopia': 'بروتانوبيا',
        'deuteranopia': 'ديوتيرانوبيا',
        'tritanopia': 'تريتانوبيا',
        'normal': 'عادي',
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
        'nav-perfil': 'الملف الشخصي',
        'modo-oscuro': 'الوضع الداكن',
        'notificaciones': 'الإشعارات',
        'accesibilidad': 'الوصول',

        'register_title': 'سجل وشارك لحظاتك المفضلة في كرة القدم.',
        'username': 'اسم المستخدم: *',
        'email': 'البريد الإلكتروني: *',
        'password': 'كلمة المرور: *',
        'country': 'بلد المنشأ: *',
        'select_country': 'اختر بلداً',
        'nationality': 'الجنسية: *',
        'gender': 'الجنس: *',
        'male': 'ذكر',
        'female': 'أنثى',
        'birth_date': 'تاريخ الميلاد: *',
        'role': 'الدور: *',
        'user': 'مستخدم',
        'administrator': 'مدير',
        'profile_picture': 'صورة الملف الشخصي:',
        'terms_of_use': 'شروط الاستخدام',
        'confirm': 'تأكيد',
        'terms_intro': 'بالتسجيل، فإنك توافق على الالتزام بالشروط التالية:',
        'terms_item1': 'لا يُسمح بإساءة استخدام المنصة.',
        'terms_item2': 'يجب احترام حقوق النشر والقوانين المعمول بها.',
        'terms_item3': 'سيتم التعامل مع البيانات الشخصية وفقاً لسياسة الخصوصية الخاصة بنا.',
        'terms_item4': 'قد يؤدي عدم الالتزام إلى تعليق الحساب.',
        'terms_conclusion': 'بتابعة التسجيل، فإنك تؤكد أنك قرأت وقبلت هذه الشروط.',
        'registration_success': 'لقد سجلت بنجاح!',
        'have_account': 'هل لديك حساب بالفعل؟',
        'log_in': 'تسجيل الدخول',

        'copyright': '© 2025 كأسي العالمي. جميع الحقوق محفوظة.'
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


