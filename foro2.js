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
        'header-title': 'Mi Mundial 2026',
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
        'hace-20-minutos': 'Hace 20 minutos',
        'hace-45-minutos': 'Hace 45 minutos',
        'hace-5-minutos': 'Hace 5 minutos',
        'hace-8-minutos': 'Hace 8 minutos',
        'hace-15-minutos': 'Hace 15 minutos',
        'hace-25-minutos': 'Hace 25 minutos',
        'hace-35-minutos': 'Hace 35 minutos',
        'hace-3-horas': 'Hace 3 horas',
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
        'nav-perfil': 'Perfil',
        'nav-jugadores': 'Jugadores',
        'modo-oscuro': 'Modo Oscuro',
        'notificaciones': 'Notificaciones',
        'accesibilidad': 'Accesibilidad',
        'search-placeholder': 'Buscar en el foro...',
        'mundiales-title': 'Mundiales',
        'mundial-2026': '#Mundial2026',
        'mundial-2022': '#Mundial2022',
        'mundial-2018': '#Mundial2018',
        'mundial-2014': '#Mundial2014',
        'footer': '© 2026 Mi Mundial. Todos los derechos reservados.',

        // MODALES Y ACCIONES
        'administrar-pendientes': 'Administrar Publicaciones Pendientes',
        'publicaciones-pendientes': 'publicaciones pendientes de revisión',
        'no-pendientes': 'No hay publicaciones pendientes',
        'todas-revisadas': 'Todas las solicitudes han sido revisadas.',
        'revisadas-hoy': 'revisadas hoy',
        'aceptadas': 'aceptadas',
        'rechazadas': 'rechazadas',
        'cerrar-panel': 'Cerrar Panel',
        'crear-publicacion': 'Crear Nueva Publicación',
        'titulo-requerido': 'Título *',
        'descripcion-requerida': 'Descripción *',
        'categorias-requeridas': 'Categorías *',
        'imagen-opcional': 'Imagen (opcional)',
        'arrastrar-imagen': 'Arrastra una imagen o haz clic para seleccionar',
        'cancelar': 'Cancelar',
        'enviar-revision': 'Enviar para Revisión',
        'filtrar-publicaciones': 'Filtrar Publicaciones',
        'limpiar-filtros': 'Limpiar',
        'aplicar-filtros': 'Aplicar Filtros',
        'agregar-seccion': 'Agregar a sección:',
        'crear-nueva-seccion': '+ Crear nueva sección',
        'nueva-categoria': 'Nueva categoría...',
        'agregar': 'Agregar',

        // ACCIONES EN PUBLICACIONES
        
        

        // PUBLICACIONES (TÍTULOS Y DESCRIPCIONES)
        'post-1-title': 'Preparativos para el Mundial 2026 en marcha',
        'post-1-desc': 'Las sedes en México, EE.UU. y Canadá están listas para recibir a millones de aficionados.',
        'post-2-title': 'Selecciones clasificadas: ¿Quiénes estarán?',
        'post-2-desc': 'Las eliminatorias avanzan y ya conocemos a varios equipos que competirán en 2026.',
        'post-3-title': 'Estadios emblemáticos para el Mundial',
        'post-3-desc': 'El Estadio Azteca hará historia albergando su tercer Mundial.',
        'post-4-title': 'Increíble partido!',
        'post-4-desc': 'El partido de ayer entre Argentina y Brasil fue histórico. La pasión de los aficionados se sintió en cada rincón del estadio. Messi demostró una vez más por qué es considerado uno de los mejores de todos los tiempos.',
        'post-5-title': 'Golazooooo',
        'post-5-desc': 'Esta chilena de Rodríguez merece ser nominada al premio Puskás. Una obra de arte en movimiento que dejó a todos con la boca abierta.',

        // COMENTARIOS
        'comment-1': 'Esperemos que no haya robo',
        'comment-2': 'La informacion esta mal redactada mexico casi ni tiene partidos',
        'comment-3': '¡Vamos por el bicampeonato!',
        'comment-4': 'Brasil vuelve con todo, ¡hexacampeones!',
        'comment-5': 'Aquí gané mi tercer Mundial en 1970',
        'comment-6': 'Y aquí nació la Mano de Dios',
        'comment-7': 'Ciertoo jajsjajja',
        'comment-8': 'Jejeje',
        'comment-9': 'un saludoooo.',
        'comment-10': 'Hola.'
    },
    en: {
        'header-title': 'My World Cup 2026',
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
        'hace-20-minutos': '20 minutes ago',
        'hace-45-minutos': '45 minutes ago',
        'hace-5-minutos': '5 minutes ago',
        'hace-8-minutos': '8 minutes ago',
        'hace-15-minutos': '15 minutes ago',
        'hace-25-minutos': '25 minutes ago',
        'hace-35-minutos': '35 minutes ago',
        'hace-3-horas': '3 hours ago',
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
        'nav-perfil': 'Profile',
        'nav-jugadores': 'Players',
        'modo-oscuro': 'Dark Mode',
        'notificaciones': 'Notifications',
        'accesibilidad': 'Accessibility',
        'search-placeholder': 'Search in the forum...',
        'mundiales-title': 'World Cups',
        'mundial-2026': '#WorldCup2026',
        'mundial-2022': '#WorldCup2022',
        'mundial-2018': '#WorldCup2018',
        'mundial-2014': '#WorldCup2014',
        'footer': '© 2026 My World Cup. All rights reserved.',

        'administrar-pendientes': 'Manage Pending Posts',
        'publicaciones-pendientes': 'posts pending review',
        'no-pendientes': 'No pending posts',
        'todas-revisadas': 'All requests have been reviewed.',
        'revisadas-hoy': 'reviewed today',
        'aceptadas': 'accepted',
        'rechazadas': 'rejected',
        'cerrar-panel': 'Close Panel',
        'crear-publicacion': 'Create New Post',
        'titulo-requerido': 'Title *',
        'descripcion-requerida': 'Description *',
        'categorias-requeridas': 'Categories *',
        'imagen-opcional': 'Image (optional)',
        'arrastrar-imagen': 'Drag an image or click to select',
        'cancelar': 'Cancel',
        'enviar-revision': 'Submit for Review',
        'filtrar-publicaciones': 'Filter Posts',
        'limpiar-filtros': 'Clear',
        'aplicar-filtros': 'Apply Filters',
        'agregar-seccion': 'Add to section:',
        'crear-nueva-seccion': '+ Create new section',
        'nueva-categoria': 'New category...',
        'agregar': 'Add',
        
        

        'post-1-title': 'Preparations for World Cup 2026 underway',
        'post-1-desc': 'Venues in Mexico, USA, and Canada are ready to welcome millions of fans.',
        'post-2-title': 'Qualified teams: Who will be there?',
        'post-2-desc': 'Qualifiers are advancing and we already know several teams that will compete in 2026.',
        'post-3-title': 'Iconic stadiums for the World Cup',
        'post-3-desc': 'Estadio Azteca will make history by hosting its third World Cup.',
        'post-4-title': 'Incredible match!',
        'post-4-desc': 'Yesterday\'s game between Argentina and Brazil was historic. The passion of the fans was felt in every corner of the stadium. Messi once again proved why he\'s considered one of the greatest of all time.',
        'post-5-title': 'GOALAZOOOO',
        'post-5-desc': 'Rodríguez\'s bicycle kick deserves to be nominated for the Puskás Award. A work of art in motion that left everyone speechless.',

        'comment-1': 'Let\'s hope there\'s no robbery',
        'comment-2': 'The information is poorly written, Mexico barely has any games',
        'comment-3': 'Let\'s go for the back-to-back championship!',
        'comment-4': 'Brazil is back with everything, six-time champions!',
        'comment-5': 'Here I won my third World Cup in 1970',
        'comment-6': 'And here the Hand of God was born',
        'comment-7': 'Trueee hahaha',
        'comment-8': 'Hehe',
        'comment-9': 'a greeting.',
        'comment-10': 'Hello.'
    },
    fr: {
        'header-title': 'Ma Coupe du Monde 2026',
        'cuentas-activas': 'Comptes Actifs',
        'anadir-cuenta': 'Ajouter Compte',
        'notificaciones-title': 'Notifications',
        'notificaciones-nuevas': '3 nouvelles',
        'notificacion-aceptada': 'a accepté votre post',
        'notificacion-comentada': 'a commenté votre post',
        'notificacion-solicitud': 'a demandé à publier',
        'hace-2-horas': 'Il y a 2 h',
        'hace-1-hora': 'Il y a 1 h',
        'hace-30-minutos': 'Il y a 30 min',
        'hace-20-minutos': 'Il y a 20 min',
        'hace-45-minutos': 'Il y a 45 min',
        'hace-5-minutos': 'Il y a 5 min',
        'hace-8-minutos': 'Il y a 8 min',
        'hace-15-minutos': 'Il y a 15 min',
        'hace-25-minutos': 'Il y a 25 min',
        'hace-35-minutos': 'Il y a 35 min',
        'hace-3-horas': 'Il y a 3 h',
        'aceptar-publicacion': 'Accepter',
        'publicacion-aceptada': 'Accepté',
        'ver-todas': 'Voir Tout',
        'accesibilidad-title': 'Accessibilité',
        'tamano-texto': 'Taille du Texte',
        'daltonismo': 'Mode Daltonien',
        'protanopia': '🔴 Protanopie',
        'deuteranopia': '🟢 Deutéranopie',
        'tritanopia': '🔵 Tritanopie',
        'normal': '⬜ Normal',
        'idioma': 'Langue',
        'es': 'Espagnol',
        'en': 'Anglais',
        'fr': 'Français',
        'ar': 'Arabe',
        'narrador': 'Narrateur',
        'alto-contraste': 'Contraste Élevé',
        'reducir-animaciones': 'Réduire Animations',
        'reset-accesibilidad': 'Réinitialiser',
        'nav-inicio-sesion': 'Connexion',
        'nav-registrarse': 'S\'inscrire',
        'nav-historia': 'Histoire',
        'nav-sedes': 'Sites',
        'nav-foro': 'Forum',
        'nav-partidos': 'Matchs',
        'nav-perfil': 'Profil',
        'nav-jugadores': 'Joueurs',
        'modo-oscuro': 'Mode Sombre',
        'notificaciones': 'Notifications',
        'accesibilidad': 'Accessibilité',
        'search-placeholder': 'Rechercher...',
        'mundiales-title': 'Coupes du Monde',
        'mundial-2026': '#Coupe2026',
        'mundial-2022': '#Coupe2022',
        'mundial-2018': '#Coupe2018',
        'mundial-2014': '#Coupe2014',
        'footer': '© 2026 Ma Coupe du Monde. Tous droits réservés.',

        'administrar-pendientes': 'Gérer les Publications en Attente',
        'publicaciones-pendientes': 'publications en attente de révision',
        'no-pendientes': 'Aucune publication en attente',
        'todas-revisadas': 'Toutes les demandes ont été examinées.',
        'revisadas-hoy': 'examinées aujourd\'hui',
        'aceptadas': 'acceptées',
        'rechazadas': 'rejetées',
        'cerrar-panel': 'Fermer le Panneau',
        'crear-publicacion': 'Créer une Nouvelle Publication',
        'titulo-requerido': 'Titre *',
        'descripcion-requerida': 'Description *',
        'categorias-requeridas': 'Catégories *',
        'imagen-opcional': 'Image (facultatif)',
        'arrastrar-imagen': 'Glissez une image ou cliquez pour sélectionner',
        'cancelar': 'Annuler',
        'enviar-revision': 'Envoyer pour Révision',
        'filtrar-publicaciones': 'Filtrer les Publications',
        'limpiar-filtros': 'Effacer',
        'aplicar-filtros': 'Appliquer les Filtres',
        'agregar-seccion': 'Ajouter à la section :',
        'crear-nueva-seccion': '+ Créer une nouvelle section',
        'nueva-categoria': 'Nouvelle catégorie...',
        'agregar': 'Ajouter',
        

        'post-1-title': 'Préparatifs pour la Coupe du Monde 2026 en cours',
        'post-1-desc': 'Les sites au Mexique, aux États-Unis et au Canada sont prêts à accueillir des millions de fans.',
        'post-2-title': 'Équipes qualifiées : Qui sera là ?',
        'post-2-desc': 'Les éliminatoires avancent et nous connaissons déjà plusieurs équipes qui participeront en 2026.',
        'post-3-title': 'Stades emblématiques pour la Coupe du Monde',
        'post-3-desc': 'Le Stade Azteca fera l\'histoire en accueillant sa troisième Coupe du Monde.',
        'post-4-title': 'Match incroyable !',
        'post-4-desc': 'Le match d\'hier entre l\'Argentine et le Brésil était historique. La passion des fans s\'est ressentie dans chaque coin du stade. Messi a une fois de plus prouvé pourquoi il est considéré comme l\'un des meilleurs de tous les temps.',
        'post-5-title': 'BUT INCROYABLE',
        'post-5-desc': 'Ce retourné acrobatique de Rodríguez mérite d\'être nominé pour le Prix Puskás. Une œuvre d\'art en mouvement qui a laissé tout le monde bouche bée.',

        'comment-1': 'Espérons qu\'il n\'y aura pas de vol',
        'comment-2': 'L\'information est mal rédigée, le Mexique a à peine des matchs',
        'comment-3': 'Allons chercher le doublé !',
        'comment-4': 'Le Brésil revient en force, six fois champions !',
        'comment-5': 'Ici j\'ai gagné ma troisième Coupe du Monde en 1970',
        'comment-6': 'Et ici est née la Main de Dieu',
        'comment-7': 'Vrai hahaha',
        'comment-8': 'Héhé',
        'comment-9': 'un salut.',
        'comment-10': 'Salut.'
    },
    ar: {
        'header-title': 'كأس العالم 2026',
        'cuentas-activas': 'الحسابات النشطة',
        'anadir-cuenta': 'إضافة حساب',
        'notificaciones-title': 'الإشعارات',
        'notificaciones-nuevas': '3 جديدة',
        'notificacion-aceptada': 'قبل منشورك',
        'notificacion-comentada': 'علّق على منشورك',
        'notificacion-solicitud': 'طلب النشر',
        'hace-2-horas': 'منذ ساعتين',
        'hace-1-hora': 'منذ ساعة',
        'hace-30-minutos': 'منذ 30 د',
        'hace-20-minutos': 'منذ 20 د',
        'hace-45-minutos': 'منذ 45 د',
        'hace-5-minutos': 'منذ 5 د',
        'hace-8-minutos': 'منذ 8 د',
        'hace-15-minutos': 'منذ 15 د',
        'hace-25-minutos': 'منذ 25 د',
        'hace-35-minutos': 'منذ 35 د',
        'hace-3-horas': 'منذ 3 س',
        'aceptar-publicacion': 'قبول',
        'publicacion-aceptada': 'تم القبول',
        'ver-todas': 'عرض الكل',
        'accesibilidad-title': 'إمكانية الوصول',
        'tamano-texto': 'حجم النص',
        'daltonismo': 'وضع عمى الألوان',
        'protanopia': 'بروتانوبيا',
        'deuteranopia': 'ديوتيرانوبيا',
        'tritanopia': 'تريتانوبيا',
        'normal': 'عادي',
        'idioma': 'اللغة',
        'es': 'الإسبانية',
        'en': 'الإنجليزية',
        'fr': 'الفرنسية',
        'ar': 'العربية',
        'narrador': 'الراوي',
        'alto-contraste': 'تباين عالي',
        'reducir-animaciones': 'تقليل الحركة',
        'reset-accesibilidad': 'إعادة تعيين',
        'nav-inicio-sesion': 'تسجيل الدخول',
        'nav-registrarse': 'التسجيل',
        'nav-historia': 'التاريخ',
        'nav-sedes': 'الملاعب',
        'nav-foro': 'المنتدى',
        'nav-partidos': 'المباريات',
        'nav-perfil': 'الملف الشخصي',
        'nav-jugadores': 'اللاعبون',
        'modo-oscuro': 'الوضع الليلي',
        'notificaciones': 'الإشعارات',
        'accesibilidad': 'الوصول',
        'search-placeholder': 'ابحث في المنتدى...',
        'mundiales-title': 'كؤوس العالم',
        'mundial-2026': '#كأس_العالم2026',
        'mundial-2022': '#كأس_العالم2022',
        'mundial-2018': '#كأس_العالم2018',
        'mundial-2014': '#كأس_العالم2014',
        'footer': '© 2026 كأس العالم. جميع الحقوق محفوظة.',

        'administrar-pendientes': 'إدارة المنشورات المعلقة',
        'publicaciones-pendientes': 'منشور معلق للمراجعة',
        'no-pendientes': 'لا توجد منشورات معلقة',
        'todas-revisadas': 'تمت مراجعة جميع الطلبات.',
        'revisadas-hoy': 'تمت مراجعتها اليوم',
        'aceptadas': 'مقبولة',
        'rechazadas': 'مرفوضة',
        'cerrar-panel': 'إغلاق اللوحة',
        'crear-publicacion': 'إنشاء منشور جديد',
        'titulo-requerido': 'العنوان *',
        'descripcion-requerida': 'الوصف *',
        'categorias-requeridas': 'الفئات *',
        'imagen-opcional': 'صورة (اختياري)',
        'arrastrar-imagen': 'اسحب صورة أو انقر لتحديدها',
        'cancelar': 'إلغاء',
        'enviar-revision': 'إرسال للمراجعة',
        'filtrar-publicaciones': 'تصفية المنشورات',
        'limpiar-filtros': 'مسح',
        'aplicar-filtros': 'تطبيق الفلاتر',
        'agregar-seccion': 'إضافة إلى القسم:',
        'crear-nueva-seccion': '+ إنشاء قسم جديد',
        'nueva-categoria': 'فئة جديدة...',
        'agregar': 'إضافة',
        'me-gusta': 'إعجاب',
        'me-gusta-contador': 'إعجاب',
        'comentar': 'تعليق',
        'compartir': 'مشاركة',
        'responder': 'رد',

        'post-1-title': 'التحضيرات لكأس العالم 2026 جارية',
        'post-1-desc': 'الملاعب في المكسيك والولايات المتحدة وكندا جاهزة لاستقبال ملايين المشجعين.',
        'post-2-title': 'المنتخبات المتأهلة: من سيكون هناك؟',
        'post-2-desc': 'التصفيات تتقدم ونعرف بالفعل عدة فرق ستتنافس في 2026.',
        'post-3-title': 'ملاعب أسطورية لكأس العالم',
        'post-3-desc': 'ملعب الأزتيك سيصنع التاريخ باستضافة كأس العالم الثالثة له.',
        'post-4-title': 'مباراة مذهلة!',
        'post-4-desc': 'مباراة الأمس بين الأرجنتين والبرازيل كانت تاريخية. شعرنا بحماس الجماهير في كل ركن من الملعب. أثبت ميسي مرة أخرى لماذا يُعتبر أحد أفضل اللاعبين في التاريخ.',
        'post-5-title': 'جووووووووول',
        'post-5-desc': 'هذه الدراجة الهوائية من رودريغيز تستحق الترشح لجائزة بوشكاش. عمل فني في الحركة ترك الجميع مندهشين.',

        'comment-1': 'نتمنى ألا يكون هناك سرقة',
        'comment-2': 'المعلومة مكتوبة بشكل سيء، المكسيك لديها مباريات قليلة جدًا',
        'comment-3': 'لنذهب للبطولة الثانية على التوالي!',
        'comment-4': 'البرازيل تعود بكل قوة، أبطال ست مرات!',
        'comment-5': 'هنا فزت بكأس العالم الثالثة في 1970',
        'comment-6': 'وهنا وُلدت يد الله',
        'comment-7': 'صحيح ههههه',
        'comment-8': 'هههه',
        'comment-9': 'تحية.',
        'comment-10': 'مرحبا.'
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


