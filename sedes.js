
// ===== DATOS MULTILINGÜES DE MUNDIALES =====
const sedesMundiales = {
    1930: {
        es: { titulo: "Uruguay 1930", texto: "El primer Mundial de la historia se celebró en Uruguay. La final se disputó en el Estadio Centenario de Montevideo, donde Uruguay venció a Argentina 4-2.", pais: "Uruguay", ciudad: "Montevideo", estadio: "Estadio Centenario", capacidad: "90,000 espectadores", datosCuriosos: "Fue el único Mundial sin fase de clasificación. Los equipos fueron invitados." },
        en: { titulo: "Uruguay 1930", texto: "The first World Cup in history was held in Uruguay. The final was played at the Estadio Centenario in Montevideo, where Uruguay defeated Argentina 4-2.", pais: "Uruguay", ciudad: "Montevideo", estadio: "Estadio Centenario", capacidad: "90,000 spectators", datosCuriosos: "It was the only World Cup without a qualifying round. Teams were invited." },
        fr: { titulo: "Uruguay 1930", texto: "La première Coupe du Monde de l'histoire s'est déroulée en Uruguay. La finale a eu lieu au stade Centenario à Montevideo, où l'Uruguay a battu l'Argentine 4-2.", pais: "Uruguay", ciudad: "Montevideo", estadio: "Stade Centenario", capacidad: "90 000 spectateurs", datosCuriosos: "C'était la seule Coupe du Monde sans phase de qualification. Les équipes étaient invitées." },
        ar: { titulo: "أوروغواي 1930", texto: "أقيمت أول كأس عالم في التاريخ في أوروغواي. لُعبت المباراة النهائية في ملعب سنتيناريو في مونتيفيديو، حيث فازت أوروغواي على الأرجنتين 4-2.", pais: "أوروغواي", ciudad: "مونتيفيديو", estadio: "ملعب سنتيناريو", capacidad: "90,000 متفرج", datosCuriosos: "كانت الوحيدة بدون تصفيات. تمت دعوة الفرق." }
    },
    1934: {
        es: { titulo: "Italia 1934", texto: "Italia organizó y ganó este Mundial. La final se jugó en el Estadio Nacional del PNF en Roma.", pais: "Italia", ciudad: "Roma", estadio: "Estadio Nacional del PNF", capacidad: "47,000 espectadores", datosCuriosos: "Primer Mundial con fase de clasificación." },
        en: { titulo: "Italy 1934", texto: "Italy hosted and won this World Cup. The final was played at the Stadio del PNF in Rome.", pais: "Italy", ciudad: "Rome", estadio: "Stadio del PNF", capacidad: "47,000 spectators", datosCuriosos: "First World Cup with a qualifying round." },
        fr: { titulo: "Italie 1934", texto: "L'Italie a organisé et remporté cette Coupe du Monde. La finale s'est jouée au Stadio del PNF à Rome.", pais: "Italie", ciudad: "Rome", estadio: "Stadio del PNF", capacidad: "47 000 spectateurs", datosCuriosos: "Première Coupe du Monde avec phase de qualification." },
        ar: { titulo: "إيطاليا 1934", texto: "استضافت إيطاليا وفازت بهذه الكأس. لُعبت النهائية في ملعب الحزب الوطني الفاشي في روما.", pais: "إيطاليا", ciudad: "روما", estadio: "ملعب الحزب الوطني", capacidad: "47,000 متفرج", datosCuriosos: "أول كأس عالم بتصفيات." }
    },
    1938: {
        es: { titulo: "Francia 1938", texto: "Francia fue la sede. La final se celebró en Colombes, donde Italia retuvo su título.", pais: "Francia", ciudad: "Colombes", estadio: "Estadio Olímpico Yves-du-Manoir", capacidad: "60,000 espectadores", datosCuriosos: "Austria no participó por el Anschluss." },
        en: { titulo: "France 1938", texto: "France hosted. The final was in Colombes, where Italy retained the title.", pais: "France", ciudad: "Colombes", estadio: "Stade Olympique Yves-du-Manoir", capacidad: "60,000 spectators", datosCuriosos: "Austria did not participate due to the Anschluss." },
        fr: { titulo: "France 1938", texto: "La France a accueilli. La finale s'est déroulée à Colombes, où l'Italie a conservé son titre.", pais: "France", ciudad: "Colombes", estadio: "Stade Olympique Yves-du-Manoir", capacidad: "60 000 spectateurs", datosCuriosos: "L'Autriche n'a pas participé à cause de l'Anschluss." },
        ar: { titulo: "فرنسا 1938", texto: "استضافت فرنسا. لُعبت النهائية في كولومب، حيث احتفظت إيطاليا باللقب.", pais: "فرنسا", ciudad: "كولومب", estadio: "ملعب أولمبيك إيف دو مانوار", capacidad: "60,000 متفرج", datosCuriosos: "النمسا لم تشارك بسبب الضم." }
    },
    1950: {
        es: { titulo: "Brasil 1950", texto: "Brasil organizó su primer Mundial. El 'Maracanazo' ocurrió en Río.", pais: "Brasil", ciudad: "Río de Janeiro", estadio: "Estadio Maracaná", capacidad: "200,000 espectadores", datosCuriosos: "Último Mundial con ronda final, no final única." },
        en: { titulo: "Brazil 1950", texto: "Brazil hosted its first World Cup. The 'Maracanazo' happened in Rio.", pais: "Brazil", ciudad: "Rio de Janeiro", estadio: "Maracanã Stadium", capacidad: "200,000 spectators", datosCuriosos: "Last World Cup with a final round, not a single final." },
        fr: { titulo: "Brésil 1950", texto: "Le Brésil a organisé sa première Coupe. Le 'Maracanazo' a eu lieu à Rio.", pais: "Brésil", ciudad: "Rio de Janeiro", estadio: "Stade Maracanã", capacidad: "200 000 spectateurs", datosCuriosos: "Dernière Coupe avec ronde finale, pas de finale unique." },
        ar: { titulo: "البرازيل 1950", texto: "استضافت البرازيل أول كأس. حدث 'ماراكانازو' في ريو.", pais: "البرازيل", ciudad: "ريو دي جانيرو", estadio: "ملعب ماراكانا", capacidad: "200,000 متفرج", datosCuriosos: "آخر كأس بدور نهائي، ليس نهائي واحد." }
    },
    1954: {
        es: { titulo: "Suiza 1954", texto: "Suiza fue la sede. Alemania venció a Hungría en la final.", pais: "Suiza", ciudad: "Berna", estadio: "Estadio Wankdorf", capacidad: "64,000 espectadores", datosCuriosos: "Primer Mundial transmitido por TV internacional." },
        en: { titulo: "Switzerland 1954", texto: "Switzerland hosted. West Germany beat Hungary in the final.", pais: "Switzerland", ciudad: "Bern", estadio: "Wankdorf Stadium", capacidad: "64,000 spectators", datosCuriosos: "First World Cup broadcast internationally on TV." },
        fr: { titulo: "Suisse 1954", texto: "La Suisse a accueilli. L'Allemagne de l'Ouest a battu la Hongrie en finale.", pais: "Suisse", ciudad: "Berne", estadio: "Stade Wankdorf", capacidad: "64 000 spectateurs", datosCuriosos: "Première Coupe diffusée à la TV internationale." },
        ar: { titulo: "سويسرا 1954", texto: "استضافت سويسرا. فازت ألمانيا الغربية على المجر في النهائي.", pais: "سويسرا", ciudad: "برن", estadio: "ملعب فانكدورف", capacidad: "64,000 متفرج", datosCuriosos: "أول بث تلفزيوني دولي." }
    },
    1958: {
        es: { titulo: "Suecia 1958", texto: "Suecia organizó. Brasil ganó su primer título con Pelé de 17 años.", pais: "Suecia", ciudad: "Solna", estadio: "Estadio Råsunda", capacidad: "52,000 espectadores", datosCuriosos: "Debut de Pelé a los 17 años." },
        en: { titulo: "Sweden 1958", texto: "Sweden hosted. Brazil won its first title with 17-year-old Pelé.", pais: "Sweden", ciudad: "Solna", estadio: "Råsunda Stadium", capacidad: "52,000 spectators", datosCuriosos: "Pelé's debut at age 17." },
        fr: { titulo: "Suède 1958", texto: "La Suède a organisé. Le Brésil a remporté son premier titre avec Pelé à 17 ans.", pais: "Suède", ciudad: "Solna", estadio: "Stade Råsunda", capacidad: "52 000 spectateurs", datosCuriosos: "Début de Pelé à 17 ans." },
        ar: { titulo: "السويد 1958", texto: "استضافت السويد. فازت البرازيل بأول لقب مع بيليه 17 عامًا.", pais: "السويد", ciudad: "سولنا", estadio: "ملعب روسوندا", capacidad: "52,000 متفرج", datosCuriosos: "ظهور بيليه أول مرة." }
    },
    1962: {
        es: { titulo: "Chile 1962", texto: "Chile fue la sede. Brasil retuvo el título.", pais: "Chile", ciudad: "Santiago", estadio: "Estadio Nacional", capacidad: "76,000 espectadores", datosCuriosos: "Mundial del juego físico." },
        en: { titulo: "Chile 1962", texto: "Chile hosted. Brazil retained the title.", pais: "Chile", ciudad: "Santiago", estadio: "Estadio Nacional", capacidad: "76,000 spectators", datosCuriosos: "World Cup of physical play." },
        fr: { titulo: "Chili 1962", texto: "Le Chili a accueilli. Le Brésil a conservé le titre.", pais: "Chili", ciudad: "Santiago", estadio: "Stade National", capacidad: "76 000 spectateurs", datosCuriosos: "Coupe du jeu physique." },
        ar: { titulo: "تشيلي 1962", texto: "استضافت تشيلي. احتفظت البرازيل باللقب.", pais: "تشيلي", ciudad: "سانتياغو", estadio: "الملعب الوطني", capacidad: "76,000 متفرج", datosCuriosos: "كأس اللعب البدني." }
    },
    1966: {
        es: { titulo: "Inglaterra 1966", texto: "Inglaterra organizó y ganó. Gol fantasma en la final.", pais: "Inglaterra", ciudad: "Londres", estadio: "Estadio de Wembley", capacidad: "98,000 espectadores", datosCuriosos: "Famoso gol fantasma." },
        en: { titulo: "England 1966", texto: "England hosted and won. Ghost goal in the final.", pais: "England", ciudad: "London", estadio: "Wembley Stadium", capacidad: "98,000 spectators", datosCuriosos: "Famous ghost goal." },
        fr: { titulo: "Angleterre 1966", texto: "L'Angleterre a organisé et gagné. But fantôme en finale.", pais: "Angleterre", ciudad: "Londres", estadio: "Stade de Wembley", capacidad: "98 000 spectateurs", datosCuriosos: "But fantôme célèbre." },
        ar: { titulo: "إنجلترا 1966", texto: "استضافت وفازت إنجلترا. هدف شبح في النهائي.", pais: "إنجلترا", ciudad: "لندن", estadio: "ملعب ويمبلي", capacidad: "98,000 متفرج", datosCuriosos: "هدف الشبح الشهير." }
    },
    1970: {
        es: { titulo: "México 1970", texto: "Primer Mundial en Norteamérica. Brasil ganó su tercer título.", pais: "México", ciudad: "Ciudad de México", estadio: "Estadio Azteca", capacidad: "107,000 espectadores", datosCuriosos: "Primer Mundial en color y con tarjetas." },
        en: { titulo: "Mexico 1970", texto: "First World Cup in North America. Brazil won its third title.", pais: "Mexico", ciudad: "Mexico City", estadio: "Azteca Stadium", capacidad: "107,000 spectators", datosCuriosos: "First in color and with cards." },
        fr: { titulo: "Mexique 1970", texto: "Première Coupe en Amérique du Nord. Le Brésil a remporté son 3e titre.", pais: "Mexique", ciudad: "Mexico", estadio: "Stade Azteca", capacidad: "107 000 spectateurs", datosCuriosos: "Première en couleur et avec cartons." },
        ar: { titulo: "المكسيك 1970", texto: "أول كأس في أمريكا الشمالية. فازت البرازيل بالثالث.", pais: "المكسيك", ciudad: "مدينة مكسيكو", estadio: "ملعب أزتيكا", capacidad: "107,000 متفرج", datosCuriosos: "أول بث ملون وبطاقات." }
    },
    1974: {
        es: { titulo: "Alemania 1974", texto: "Alemania Occidental organizó. Se introdujo el trofeo actual.", pais: "Alemania Occidental", ciudad: "Múnich", estadio: "Estadio Olímpico", capacidad: "80,000 espectadores", datosCuriosos: "Se introdujo el trofeo actual." },
        en: { titulo: "West Germany 1974", texto: "West Germany hosted. The current trophy was introduced.", pais: "West Germany", ciudad: "Munich", estadio: "Olympic Stadium", capacidad: "80,000 spectators", datosCuriosos: "Current trophy introduced." },
        fr: { titulo: "Allemagne de l'Ouest 1974", texto: "L'Allemagne de l'Ouest a organisé. Le trophée actuel a été introduit.", pais: "Allemagne de l'Ouest", ciudad: "Munich", estadio: "Stade Olympique", capacidad: "80 000 spectateurs", datosCuriosos: "Trophée actuel introduit." },
        ar: { titulo: "ألمانيا الغربية 1974", texto: "استضافت ألمانيا الغربية. تم تقديم الكأس الحالية.", pais: "ألمانيا الغربية", ciudad: "ميونيخ", estadio: "الملعب الأولمبي", capacidad: "80,000 متفرج", datosCuriosos: "تم تقديم الكأس الحالية." }
    },
    1978: {
        es: { titulo: "Argentina 1978", texto: "Argentina organizó y ganó durante la dictadura.", pais: "Argentina", ciudad: "Buenos Aires", estadio: "Estadio Monumental", capacidad: "76,000 espectadores", datosCuriosos: "Celebrado durante la dictadura militar." },
        en: { titulo: "Argentina 1978", texto: "Argentina hosted and won during the dictatorship.", pais: "Argentina", ciudad: "Buenos Aires", estadio: "Monumental Stadium", capacidad: "76,000 spectators", datosCuriosos: "Held during the military dictatorship." },
        fr: { titulo: "Argentine 1978", texto: "L'Argentine a organisé et gagné pendant la dictature.", pais: "Argentine", ciudad: "Buenos Aires", estadio: "Stade Monumental", capacidad: "76 000 spectateurs", datosCuriosos: "Tenue pendant la dictature militaire." },
        ar: { titulo: "الأرجنتين 1978", texto: "استضافت وفازت الأرجنتين أثناء الديكتاتورية.", pais: "الأرجنتين", ciudad: "بوينس آيرس", estadio: "ملعب مونومنتال", capacidad: "76,000 متفرج", datosCuriosos: "أقيمت أثناء الديكتاتورية." }
    },
    1982: {
        es: { titulo: "España 1982", texto: "España fue la sede. Italia ganó su tercer título.", pais: "España", ciudad: "Madrid", estadio: "Estadio Santiago Bernabéu", capacidad: "90,000 espectadores", datosCuriosos: "Primer Mundial con 24 equipos." },
        en: { titulo: "Spain 1982", texto: "Spain hosted. Italy won its third title.", pais: "Spain", ciudad: "Madrid", estadio: "Santiago Bernabéu", capacidad: "90,000 spectators", datosCuriosos: "First World Cup with 24 teams." },
        fr: { titulo: "Espagne 1982", texto: "L'Espagne a accueilli. L'Italie a remporté son 3e titre.", pais: "Espagne", ciudad: "Madrid", estadio: "Stade Santiago Bernabéu", capacidad: "90 000 spectateurs", datosCuriosos: "Première Coupe avec 24 équipes." },
        ar: { titulo: "إسبانيا 1982", texto: "استضافت إسبانيا. فازت إيطاليا بالثالث.", pais: "إسبانيا", ciudad: "مدريد", estadio: "ملعب سانتياغو برنابيو", capacidad: "90,000 متفرج", datosCuriosos: "أول 24 فريقًا." }
    },
    1986: {
        es: { titulo: "México 1986", texto: "México organizó su segundo Mundial. Argentina ganó con Maradona.", pais: "México", ciudad: "Ciudad de México", estadio: "Estadio Azteca", capacidad: "114,000 espectadores", datosCuriosos: "Mano de Dios y Gol del Siglo." },
        en: { titulo: "Mexico 1986", texto: "Mexico hosted its second World Cup. Argentina won with Maradona.", pais: "Mexico", ciudad: "Mexico City", estadio: "Azteca Stadium", capacidad: "114,000 spectators", datosCuriosos: "Hand of God and Goal of the Century." },
        fr: { titulo: "Mexique 1986", texto: "Le Mexique a organisé sa 2e Coupe. L'Argentine a gagné avec Maradona.", pais: "Mexique", ciudad: "Mexico", estadio: "Stade Azteca", capacidad: "114 000 spectateurs", datosCuriosos: "Main de Dieu et But du Siècle." },
        ar: { titulo: "المكسيك 1986", texto: "استضافت المكسيك الثانية. فازت الأرجنتين مع مارادونا.", pais: "المكسيك", ciudad: "مدينة مكسيكو", estadio: "ملعب أزتيكا", capacidad: "114,000 متفرج", datosCuriosos: "يد الله وهدف القرن." }
    },
    1990: {
        es: { titulo: "Italia 1990", texto: "Italia organizó su segundo Mundial. Promedio de goles más bajo.", pais: "Italia", ciudad: "Roma", estadio: "Estadio Olímpico", capacidad: "80,000 espectadores", datosCuriosos: "Menos goles en la historia (2.21 por partido)." },
        en: { titulo: "Italy 1990", texto: "Italy hosted its second World Cup. Lowest goal average.", pais: "Italy", ciudad: "Rome", estadio: "Olympic Stadium", capacidad: "80,000 spectators", datosCuriosos: "Lowest goal average in history (2.21 per match)." },
        fr: { titulo: "Italie 1990", texto: "L'Italie a organisé sa 2e Coupe. Moyenne de buts la plus basse.", pais: "Italie", ciudad: "Rome", estadio: "Stade Olympique", capacidad: "80 000 spectateurs", datosCuriosos: "Moyenne de buts la plus basse (2.21 par match)." },
        ar: { titulo: "إيطاليا 1990", texto: "استضافت إيطاليا الثانية. أقل أهداف (2.21 لكل مباراة).", pais: "إيطاليا", ciudad: "روما", estadio: "الملعب الأولمبي", capacidad: "80,000 متفرج", datosCuriosos: "أقل معدل أهداف." }
    },
    1994: {
        es: { titulo: "Estados Unidos 1994", texto: "EE.UU. fue la sede. Mayor asistencia total.", pais: "Estados Unidos", ciudad: "Pasadena", estadio: "Rose Bowl", capacidad: "94,000 espectadores", datosCuriosos: "3.6 millones de espectadores." },
        en: { titulo: "USA 1994", texto: "USA hosted. Highest total attendance.", pais: "United States", ciudad: "Pasadena", estadio: "Rose Bowl", capacidad: "94,000 spectators", datosCuriosos: "3.6 million total spectators." },
        fr: { titulo: "États-Unis 1994", texto: "Les États-Unis ont accueilli. Plus grande affluence totale.", pais: "États-Unis", ciudad: "Pasadena", estadio: "Rose Bowl", capacidad: "94 000 spectateurs", datosCuriosos: "3.6 millions de spectateurs." },
        ar: { titulo: "الولايات المتحدة 1994", texto: "استضافت أمريكا. أكبر حضور (3.6 مليون).", pais: "الولايات المتحدة", ciudad: "باسادينا", estadio: "روز بول", capacidad: "94,000 متفرج", datosCuriosos: "3.6 مليون متفرج." }
    },
    1998: {
        es: { titulo: "Francia 1998", texto: "Francia organizó y ganó. Primer Mundial con 32 equipos.", pais: "Francia", ciudad: "Saint-Denis", estadio: "Stade de France", capacidad: "80,000 espectadores", datosCuriosos: "Primer Mundial con 32 equipos." },
        en: { titulo: "France 1998", texto: "France hosted and won. First World Cup with 32 teams.", pais: "France", ciudad: "Saint-Denis", estadio: "Stade de France", capacidad: "80,000 spectators", datosCuriosos: "First with 32 teams." },
        fr: { titulo: "France 1998", texto: "La France a organisé et gagné. Première Coupe avec 32 équipes.", pais: "France", ciudad: "Saint-Denis", estadio: "Stade de France", capacidad: "80 000 spectateurs", datosCuriosos: "Première avec 32 équipes." },
        ar: { titulo: "فرنسا 1998", texto: "استضافت وفازت فرنسا. أول 32 فريقًا.", pais: "فرنسا", ciudad: "سان دوني", estadio: "ستاد دو فرانس", capacidad: "80,000 متفرج", datosCuriosos: "أول كأس بـ32 فريقًا." }
    },
    2002: {
        es: { titulo: "Corea/Japón 2002", texto: "Primer Mundial coorganizado. Corea del Sur llegó a semifinales.", pais: "Corea del Sur / Japón", ciudad: "Yokohama", estadio: "Estadio Internacional", capacidad: "72,000 espectadores", datosCuriosos: "Primer y único coorganizado." },
        en: { titulo: "South Korea/Japan 2002", texto: "First co-hosted World Cup. South Korea reached semifinals.", pais: "South Korea / Japan", ciudad: "Yokohama", estadio: "International Stadium", capacidad: "72,000 spectators", datosCuriosos: "First and only co-hosted." },
        fr: { titulo: "Corée du Sud/Japon 2002", texto: "Première Coupe co-organisée. La Corée du Sud en demi-finale.", pais: "Corée du Sud / Japon", ciudad: "Yokohama", estadio: "Stade International", capacidad: "72 000 spectateurs", datosCuriosos: "Première et unique co-organisée." },
        ar: { titulo: "كوريا الجنوبية/اليابان 2002", texto: "أول كأس مشتركة. وصلت كوريا لنصف النهائي.", pais: "كوريا الجنوبية / اليابان", ciudad: "يوكوهاما", estadio: "الملعب الدولي", capacidad: "72,000 متفرج", datosCuriosos: "أول ووحيد مشترك." }
    },
    2006: {
        es: { titulo: "Alemania 2006", texto: "Alemania organizó. Cabezazo de Zidane en la final.", pais: "Alemania", ciudad: "Berlín", estadio: "Estadio Olímpico", capacidad: "74,000 espectadores", datosCuriosos: "Cabezazo de Zidane a Materazzi." },
        en: { titulo: "Germany 2006", texto: "Germany hosted. Zidane's headbutt in the final.", pais: "Germany", ciudad: "Berlin", estadio: "Olympic Stadium", capacidad: "74,000 spectators", datosCuriosos: "Zidane headbutted Materazzi." },
        fr: { titulo: "Allemagne 2006", texto: "L'Allemagne a organisé. Coup de tête de Zidane en finale.", pais: "Allemagne", ciudad: "Berlin", estadio: "Stade Olympique", capacidad: "74 000 spectateurs", datosCuriosos: "Coup de tête de Zidane." },
        ar: { titulo: "ألمانيا 2006", texto: "استضافت ألمانيا. رأسية زيدان في النهائي.", pais: "ألمانيا", ciudad: "برلين", estadio: "الملعب الأولمبي", capacidad: "74,000 متفرج", datosCuriosos: "رأسية زيدان لماتيرازي." }
    },
    2010: {
        es: { titulo: "Sudáfrica 2010", texto: "Primer Mundial en África. España ganó su primero.", pais: "Sudáfrica", ciudad: "Johannesburgo", estadio: "Soccer City", capacidad: "94,700 espectadores", datosCuriosos: "Primer Mundial africano." },
        en: { titulo: "South Africa 2010", texto: "First World Cup in Africa. Spain won its first.", pais: "South Africa", ciudad: "Johannesburg", estadio: "Soccer City", capacidad: "94,700 spectators", datosCuriosos: "First African World Cup." },
        fr: { titulo: "Afrique du Sud 2010", texto: "Première Coupe en Afrique. L'Espagne a gagné sa première.", pais: "Afrique du Sud", ciudad: "Johannesburg", estadio: "Soccer City", capacidad: "94 700 spectateurs", datosCuriosos: "Première Coupe africaine." },
        ar: { titulo: "جنوب أفريقيا 2010", texto: "أول كأس في أفريقيا. فازت إسبانيا بأول لقب.", pais: "جنوب أفريقيا", ciudad: "جوهانسبرغ", estadio: "سوكر سيتي", capacidad: "94,700 متفرج", datosCuriosos: "أول كأس أفريقية." }
    },
    2014: {
        es: { titulo: "Brasil 2014", texto: "Brasil organizó su segundo. Alemania ganó 7-1 a Brasil.", pais: "Brasil", ciudad: "Río de Janeiro", estadio: "Estadio Maracaná", capacidad: "78,838 espectadores", datosCuriosos: "7-1 en semifinales." },
        en: { titulo: "Brazil 2014", texto: "Brazil hosted its second. Germany won 7-1 vs Brazil.", pais: "Brazil", ciudad: "Rio de Janeiro", estadio: "Maracanã", capacidad: "78,838 spectators", datosCuriosos: "7-1 in semifinals." },
        fr: { titulo: "Brésil 2014", texto: "Le Brésil a organisé sa 2e. L'Allemagne a gagné 7-1 contre le Brésil.", pais: "Brésil", ciudad: "Rio de Janeiro", estadio: "Maracanã", capacidad: "78 838 spectateurs", datosCuriosos: "7-1 en demi-finale." },
        ar: { titulo: "البرازيل 2014", texto: "استضافت البرازيل الثانية. فازت ألمانيا 7-1 على البرازيل.", pais: "البرازيل", ciudad: "ريو", estadio: "ماراكانا", capacidad: "78,838 متفرج", datosCuriosos: "7-1 في نصف النهائي." }
    },
    2018: {
        es: { titulo: "Rusia 2018", texto: "Primer Mundial en Europa del Este. Primer uso del VAR.", pais: "Rusia", ciudad: "Moscú", estadio: "Estadio Luzhnikí", capacidad: "81,000 espectadores", datosCuriosos: "Primer uso del VAR." },
        en: { titulo: "Russia 2018", texto: "First World Cup in Eastern Europe. First use of VAR.", pais: "Russia", ciudad: "Moscow", estadio: "Luzhniki Stadium", capacidad: "81,000 spectators", datosCuriosos: "First use of VAR." },
        fr: { titulo: "Russie 2018", texto: "Premièreoupe en Europe de l'Est. Premier usage du VAR.", pais: "Russie", ciudad: "موسكو", estadio: "Stade Loujniki", capacidad: "81 000 spectateurs", datosCuriosos: "Premier usage du VAR." },
        ar: { titulo: "روسيا 2018", texto: "أول كأس في شرق أوروبا. أول استخدام لـ VAR.", pais: "روسيا", ciudad: "موسكو", estadio: "ملعب لوجنيكي", capacidad: "81,000 متفرج", datosCuriosos: "أول استخدام لـ VAR." }
    },
    2022: {
        es: { titulo: "Qatar 2022", texto: "Primer Mundial en Oriente Medio. En noviembre-diciembre.", pais: "Qatar", ciudad: "Lusail", estadio: "Estadio Lusail", capacidad: "88,966 espectadores", datosCuriosos: "Celebrado en invierno por el calor." },
        en: { titulo: "Qatar 2022", texto: "First World Cup in the Middle East. Held in Nov-Dec.", pais: "Qatar", ciudad: "Lusail", estadio: "Lusail Stadium", capacidad: "88,966 spectators", datosCuriosos: "Held in winter due to heat." },
        fr: { titulo: "Qatar 2022", texto: "Première Coupe au Moyen-Orient. En novembre-décembre.", pais: "Qatar", ciudad: "Lusail", estadio: "Stade Lusail", capacidad: "88 966 spectateurs", datosCuriosos: "Tenue en hiver à cause de la chaleur." },
        ar: { titulo: "قطر 2022", texto: "أول كأس في الشرق الأوسط. في نوفمبر-ديسمبر.", pais: "قطر", ciudad: "لوسيل", estadio: "ملعب لوسيل", capacidad: "88,966 متفرج", datosCuriosos: "أقيمت في الشتاء بسبب الحر." }
    },
    2026: {
        es: { titulo: "México/EE.UU/Canadá 2026", texto: "Primer Mundial con 48 equipos. Tres países.", pais: "México / EE.UU. / Canadá", ciudad: "Múltiples", estadio: "Estadio Azteca (final)", capacidad: "87,000 (Azteca)", datosCuriosos: "México organiza por tercera vez." },
        en: { titulo: "Mexico/USA/Canada 2026", texto: "First World Cup with 48 teams. Three countries.", pais: "Mexico / USA / Canada", ciudad: "Multiple", estadio: "Azteca Stadium (final)", capacidad: "87,000 (Azteca)", datosCuriosos: "Mexico hosts for the third time." },
        fr: { titulo: "Mexique/É.-U./Canada 2026", texto: "Première Coupe avec 48 équipes. Trois pays.", pais: "Mexique / É.-U. / Canada", ciudad: "Multiples", estadio: "Stade Azteca (finale)", capacidad: "87 000 (Azteca)", datosCuriosos: "Le Mexique accueille pour la 3e fois." },
        ar: { titulo: "المكسيك/أمريكا/كندا 2026", texto: "أول كأس بـ48 فريقًا. ثلاث دول.", pais: "المكسيك / أمريكا / كندا", ciudad: "متعددة", estadio: "ملعب أزتيكا (النهائي)", capacidad: "87,000 (أزتيكا)", datosCuriosos: "المكسيك تستضيف للمرة الثالثة." }
    }
};

// ===== TRADUCCIONES DE UI =====
const traduccionesUI = {
    es: {
        'agregar-sede': 'Agregar Sede',
        'editar-sede': 'Editar Sede',
        'eliminar-sede': 'Eliminar sede',
        'anio-mundial': 'Año del Mundial:',
        'titulo-mundial': 'Título:',
        'imagen-mundial': 'URL de la imagen:',
        'descripcion-mundial': 'Descripción:',
        'guardar': 'Guardar',
        'cancelar': 'Cancelar',
        'editar-titulo': 'Editar Sede',
        'confirmar-eliminar': '¿Estás seguro de eliminar "{titulo}"?',
        'sede-eliminada': 'Sede eliminada correctamente.',
        'sede-agregada': 'Mundial agregado correctamente!',
        'sede-editada': 'Sede actualizada correctamente!',
        'no-sedes': 'No hay sedes disponibles.',
        'selecciona-anio': '-- Selecciona un año --'
    },
    en: {
        'agregar-sede': 'Add Venue',
        'editar-sede': 'Edit Venue',
        'eliminar-sede': 'Delete Venue',
        'anio-mundial': 'World Cup Year:',
        'titulo-mundial': 'Title:',
        'imagen-mundial': 'Image URL:',
        'descripcion-mundial': 'Description:',
        'guardar': 'Save',
        'cancelar': 'Cancel',
        'editar-titulo': 'Edit Venue',
        'confirmar-eliminar': 'Are you sure you want to delete "{titulo}"?',
        'sede-eliminada': 'Venue deleted successfully.',
        'sede-agregada': 'World Cup added successfully!',
        'sede-editada': 'Venue updated successfully!',
        'no-sedes': 'No venues available.',
        'selecciona-anio': '-- Select a year --'
    },
    fr: {
        'agregar-sede': 'Ajouter un site',
        'editar-sede': 'Modifier le site',
        'eliminar-sede': 'Supprimer le site',
        'anio-mundial': 'Année de la Coupe du Monde:',
        'titulo-mundial': 'Titre:',
        'imagen-mundial': 'URL de l\'image:',
        'descripcion-mundial': 'Description:',
        'guardar': 'Sauvegarder',
        'cancelar': 'Annuler',
        'editar-titulo': 'Modifier le site',
        'confirmar-eliminar': 'Êtes-vous sûr de vouloir supprimer "{titulo}" ?',
        'sede-eliminada': 'Site supprimé avec succès.',
        'sede-agregada': 'Coupe du Monde ajoutée avec succès !',
        'sede-editada': 'Site mis à jour avec succès !',
        'no-sedes': 'Aucun site disponible.',
        'selecciona-anio': '-- Sélectionnez une année --'
    },
    ar: {
        'agregar-sede': 'إضافة موقع',
        'editar-sede': 'تعديل الموقع',
        'eliminar-sede': 'حذف الموقع',
        'anio-mundial': 'سنة كأس العالم:',
        'titulo-mundial': 'العنوان:',
        'imagen-mundial': 'رابط الصورة:',
        'descripcion-mundial': 'الوصف:',
        'guardar': 'حفظ',
        'cancelar': 'إلغاء',
        'editar-titulo': 'تعديل الموقع',
        'confirmar-eliminar': 'هل أنت متأكد من حذف "{titulo}"؟',
        'sede-eliminada': 'تم حذف الموقع بنجاح.',
        'sede-agregada': 'تمت إضافة كأس العالم بنجاح!',
        'sede-editada': 'تم تحديث الموقع بنجاح!',
        'no-sedes': 'لا توجد مواقع متاحة.',
        'selecciona-anio': '-- اختر سنة --'
    }
};

let modoEdicion = false;
let añoEditando = null;

// ===== OBTENER IDIOMA =====
function getLang() {
    return document.documentElement.lang || 'es';
}

// ===== MOSTRAR INFO DE SEDE =====
function mostrarSedes(year) {
    const lang = getLang();
    const sede = sedesMundiales[year]?.[lang] || sedesMundiales[year]?.es;
    if (!sede) return;

    const img = document.getElementById("imagen-sedes");
    img.src = `images/${year}.jpeg`;
    img.onerror = () => img.src = `images/${year}.jpg`;

    document.getElementById("titulo-sedes").textContent = sede.titulo;
    document.getElementById("texto-sedes").textContent = sede.texto;

    const info = document.getElementById('info-adicional-sedes');
    const dc = document.getElementById('datos-curiosos-container');

    if (sede.pais) {
        document.getElementById('pais-sede').textContent = sede.pais;
        document.getElementById('ciudad-sede').textContent = sede.ciudad;
        document.getElementById('estadio-sede').textContent = sede.estadio;
        document.getElementById('capacidad-sede').textContent = sede.capacidad;
        info.style.display = 'block';
    } else {
        info.style.display = 'none';
    }

    if (sede.datosCuriosos) {
        document.getElementById('datos-curiosos-texto').textContent = sede.datosCuriosos;
        dc.style.display = 'block';
    } else {
        dc.style.display = 'none';
    }

    // Activar card correspondiente
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('active');
        if (card.querySelector('.fecha span').textContent === year) {
            card.classList.add('active');
        }
    });
}

// ===== ACTIVAR CARD AL HACER CLIC =====
function activarCardAlClick() {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            const year = card.querySelector('.fecha span').textContent;
            mostrarSedes(year);
        });
    });
}

// ===== NAVEGACIÓN CON FLECHAS =====
function navegarCarrusel(dir) {
    const cards = Array.from(document.querySelectorAll('.card'));
    const activo = cards.findIndex(c => c.classList.contains('active'));
    const total = cards.length;
    const nuevo = (activo + dir + total) % total;
    cards.forEach(c => c.classList.remove('active'));
    cards[nuevo].classList.add('active');
    mostrarSedes(cards[nuevo].querySelector('.fecha span').textContent);
}

// ===== ABRIR MODAL (AGREGAR / EDITAR) =====
function abrirModal(edicion = false, año = null) {
    modoEdicion = edicion;
    añoEditando = año;
    const lang = getLang();
    const ui = traduccionesUI[lang];

    document.getElementById('titulo-modal').textContent = edicion ? ui['editar-sede'] : ui['agregar-sede'];
    document.getElementById('modal-mundial').style.display = 'flex'; // ID correcto

    // Limpiar formulario
    const form = document.getElementById('form-mundial');
    form.reset();
    document.getElementById('anio-mundial').value = '';

    if (edicion && año) {
        const sede = sedesMundiales[año]?.[lang] || sedesMundiales[año]?.es;
        if (sede) {
            document.getElementById('anio-mundial').value = año;
            document.getElementById('titulo-mundial').value = sede.titulo;
            document.getElementById('imagen-mundial').value = `images/${año}.jpg`;
            document.getElementById('descripcion-mundial').value = sede.texto;
        }
    }
}

// ===== GUARDAR SEDE =====
function guardarSede() {
    const lang = getLang();
    const ui = traduccionesUI[lang];
    const año = document.getElementById('anio-mundial').value.trim();
    const titulo = document.getElementById('titulo-mundial').value.trim();
    const imagen = document.getElementById('imagen-mundial').value.trim() || `images/${año}.jpg`;
    const descripcion = document.getElementById('descripcion-mundial').value.trim();

    if (!año || !titulo || !descripcion) {
        alert('Completa todos los campos');
        return;
    }

    if (!sedesMundiales[año]) {
        sedesMundiales[año] = {};
    }

    // Guardar en todos los idiomas
    ['es', 'en', 'fr', 'ar'].forEach(idioma => {
        if (!sedesMundiales[año][idioma]) {
            sedesMundiales[año][idioma] = {
                titulo: '', texto: '', pais: '', ciudad: '', estadio: '', capacidad: '', datosCuriosos: ''
            };
        }
        sedesMundiales[año][idioma].titulo = titulo;
        sedesMundiales[año][idioma].texto = descripcion;
    });

    localStorage.setItem('sedesPersonalizadas', JSON.stringify(sedesMundiales));
    alert(modoEdicion ? ui['sede-editada'] : ui['sede-agregada']);
    cerrarModal();
    location.reload(); // Recarga para reflejar cambios
}

// ===== ELIMINAR SEDE =====
function eliminarSede() {
    const activeCard = document.querySelector('.card.active');
    if (!activeCard) return;

    const year = activeCard.querySelector('.fecha span').textContent;
    const lang = getLang();
    const titulo = sedesMundiales[year]?.[lang]?.titulo || year;

    if (confirm(traduccionesUI[lang]['confirmar-eliminar'].replace('{titulo}', titulo))) {
        delete sedesMundiales[year];
        localStorage.setItem('sedesPersonalizadas', JSON.stringify(sedesMundiales));
        alert(traduccionesUI[lang]['sede-eliminada']);
        location.reload();
    }
}

// ===== CERRAR MODAL =====
function cerrarModal() {
    document.getElementById('modal-mundial').style.display = 'none';
}

// ===== CAMBIAR IDIOMA =====
function cambiarIdioma(idioma) {
    document.documentElement.lang = idioma;
    document.documentElement.dir = idioma === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('idioma', idioma);

    // Actualizar botones
    const ui = traduccionesUI[idioma];
    document.getElementById('btn-agregar-sede').title = ui['agregar-sede'];
    document.getElementById('btn-editar-sede').title = ui['editar-sede'];
    document.getElementById('btn-eliminar-sede').title = ui['eliminar-sede'];

    // Re-mostrar sede activa
    const active = document.querySelector('.card.active');
    if (active) {
        const year = active.querySelector('.fecha span').textContent;
        mostrarSedes(year);
    }
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    // Cargar idioma guardado
    const savedLang = localStorage.getItem('idioma') || 'es';
    cambiarIdioma(savedLang);

    // Cargar sedes personalizadas
    const guardadas = localStorage.getItem('sedesPersonalizadas');
    if (guardadas) {
        Object.assign(sedesMundiales, JSON.parse(guardadas));
    }

    // Mostrar primera sede
    const primeraCard = document.querySelector('.card');
    if (primeraCard) {
        primeraCard.classList.add('active');
        const year = primeraCard.querySelector('.fecha span').textContent;
        mostrarSedes(year);
    }

    // Activar clics en cards
    activarCardAlClick();

    // Botones flotantes
    document.getElementById('btn-agregar-sede')?.addEventListener('click', () => abrirModal(false));
    document.getElementById('btn-editar-sede')?.addEventListener('click', () => {
        const active = document.querySelector('.card.active');
        if (active) {
            const year = active.querySelector('.fecha span').textContent;
            abrirModal(true, year);
        }
    });
    document.getElementById('btn-eliminar-sede')?.addEventListener('click', eliminarSede);

    // Flechas
    document.querySelector('.prev')?.addEventListener('click', () => navegarCarrusel(-1));
    document.querySelector('.next')?.addEventListener('click', () => navegarCarrusel(1));

    // Modal
    document.querySelector('.btn-guardar-sedes')?.addEventListener('click', guardarSede);
    document.querySelector('.btn-cancelar-sedes')?.addEventListener('click', cerrarModal);
    document.querySelector('.cerrar-modal')?.addEventListener('click', cerrarModal);

    // Cerrar al hacer clic fuera
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('modal-mundial');
        if (e.target === modal) cerrarModal();
    });

    // Botones de idioma
    document.querySelectorAll('[data-idioma]').forEach(btn => {
        btn.addEventListener('click', () => cambiarIdioma(btn.dataset.idioma));
    });
});


