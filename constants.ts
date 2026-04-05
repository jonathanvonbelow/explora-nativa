import { Species, TriviaQuestion, EcosystemService } from './types';

export const SPECIES_DATA: Species[] = [
  {
    id: 'abraza-palo',
    mapNumber: 1,
    commonName: 'Abraza Palo',
    scientificName: 'Ficus luschnathiana (Miq.) Miq.',
    family: 'Moraceae',
    shortDescription: 'El árbol estrangulador que abraza a sus vecinos.',
    description: `Conocido científicamente como Ficus luschnathiana (Miq.) Miq., también llamado abraza palo o higuerón de monte, pertenece a la familia Moraceae. En las comunidades mbya guaraní recibe los nombres de guapo'y o hera amboaepy. Su presencia se extiende por el nordeste argentino, Paraguay, Brasil, Uruguay y Bolivia, donde forma parte de los bosques húmedos de la región.

El abraza palo desarrolla una estrategia de crecimiento particular: es un árbol hemiepífito. Sus semillas, dispersadas por animales, suelen germinar sobre las ramas o troncos de otros árboles. Durante sus primeros años vive allí, como una epífita, buscando la luz que se filtra entre el dosel. Con el tiempo, desde lo alto comienzan a descender largas raíces aéreas que buscan el suelo. Cuando finalmente lo alcanzan, el árbol se establece con firmeza y continúa su crecimiento. En ese proceso, las raíces envuelven al árbol que lo hospedó, formando una trama que puede terminar por asfixiarlo.

Ya adulto, el abraza palo puede alcanzar hasta 25 metros de altura. Es un árbol de gran porte, con raíces estranguladoras que se entrelazan alrededor de los troncos. Su corteza es lisa y gris, y al cortarla libera un látex blanco, abundante y pegajoso, una característica común en muchas especies del género Ficus.

Uno de los aspectos más fascinantes de este árbol ocurre a una escala casi invisible. Su reproducción depende de una relación muy específica con una pequeña avispa del género Blastophaga. Esta avispa es la encargada de polinizar sus flores, en un vínculo tan estrecho que ambos organismos dependen mutuamente para completar su ciclo de vida. Lo que comúnmente llamamos higo no es en realidad un fruto, sino una estructura llamada sícono: una infrutescencia que encierra en su interior numerosos frutos diminutos. Cuando maduran, estas estructuras son consumidas por aves y murciélagos, que luego dispersan las semillas a través de sus deyecciones.`,
    morphology: 'Hasta 25 m de altura. Corteza lisa y gris. Raíces aéreas estranguladoras que descienden desde el dosel. Látex blanco abundante al cortar la corteza. Frutos en síconos consumidos por aves y murciélagos.',
    culturalUse: `Las comunidades mbya guaraní, que lo conocen como guapo'y o hera amboaepy, utilizan el látex blanco con fines medicinales, especialmente para tratar verrugas y lunares. Para ello aplican el látex directamente sobre la zona a tratar, varias veces al día, una práctica transmitida de generación en generación.`,
    woodUse: 'No tiene aprovechamiento maderero significativo por su forma de crecimiento. Su valor principal es ecológico como alimento de fauna y como ejemplo de relaciones coevolutivas entre plantas y animales.',
    mapPosition: { x: 12, y: 77 },
    photos: [
      '/images/especies/abraza-palo/1.JPG',
      '/images/especies/abraza-palo/2.JPG',
      '/images/especies/abraza-palo/1.png',
    ],
    panoramaUrl: '/images/panoramicas/ABRAZA PALO Y LAPACHO NEGRO.jpg',
    bibliography: [
      'Haene, E., Gil, G., & Di Giacomo, A. (2010). Plantas que atraen aves: Ibapoy. Aves Argentinas, 29, 36–37.',
      'Lezcano Acuña, R. C., Ramos, D., Ramos, A., Benítez, S., Figueras, E., González, M. S., Martínez, E. D. M., Dummel, C., & Hilgert, N. I. (2025). Puá Ka\'aguy Tekoa Ysyrypygua: Plantas medicinales de la aldea Ysyry.',
      'Flora del Uruguay. (s. f.). https://floradeluruguay.blogspot.com',
      'Jardín Botánico de Montevideo. (s. f.). https://jardinbotanico.montevideo.gub.uy',
    ],
  },
  {
    id: 'lapacho-negro',
    mapNumber: 2,
    commonName: 'Lapacho Negro',
    scientificName: 'Handroanthus heptaphyllus (Vell.) Mattos',
    family: 'Bignoniaceae',
    shortDescription: 'El árbol que tiñe de rosa el invierno misionero.',
    description: `En Misiones el invierno es sigiloso. Su paso apenas se hace sentir. Algunas mañanas, la niebla cubre las calles y borra el horizonte; el termómetro puede descender hasta los 2 o 3 grados, nada que un buen fuego en la chimenea o en la cocina a leña no pueda mitigar. Los días cortos y las hojas secas dejan entrever, casi sin que lo notemos, que entre julio y septiembre, las calles comienzan a teñirse de rosa. Es la selva la que anuncia, en el susurro leve del frío, que es tiempo del Lapacho.

La especie Handroanthus heptaphyllus, de la familia Bignoniaceae, fue declarada en 2006 Monumento Natural de la provincia de Misiones. Y no es casual: es uno de esos árboles capaces de transformar por completo el paisaje. La especie está distribuida en el noroeste argentino, pero en Misiones encuentra un escenario donde su floración se vuelve un espectáculo colectivo. Sus flores tubulares y acampanadas estallan en distintas intensidades de rosa, desde tonos suaves hasta fucsias vibrantes, cubriendo veredas, plazas y rutas.

Su calendario no es azaroso. El lapacho es una especie fotoperiódica: responde a la duración del día y a los cambios en la luz que trae el invierno. Cuando las jornadas comienzan a alargarse y la luminosidad cambia, el árbol activa su floración. Antes incluso de que broten las nuevas hojas, las ramas desnudas se cargan de flores.

Imponente, puede alcanzar hasta 30 metros de altura y un tronco de 1,30 metros de diámetro. Su porte es majestuoso, pero su mayor gesto es efímero: unas pocas semanas en que la selva y la ciudad se vuelven escenario de un mismo acontecimiento. Después, las flores caen y forman alfombras rosadas que anuncian que el ciclo sigue, que la luz cambia, que la vida —en Misiones— siempre encuentra la forma de florecer.`,
    morphology: 'Hasta 30 m de altura, tronco de 1,30 m de diámetro. Hojas digitadas, caducifolias. Flores tubulares acampanadas de color rosa intenso a fucsia, que aparecen antes que las hojas nuevas. Especie fotoperiódica.',
    culturalUse: `Para la cosmovisión guaraní, el florecimiento del lapacho se vincula con el Arý Pyahu (tiempo nuevo o año nuevo guaraní). Este momento marca el inicio de la siembra y es un período para agradecer a Ñanderuvusú (dios) por las cosechas y la vida. Fue declarado Monumento Natural de Misiones en 2006.`,
    woodUse: 'Una de las maderas más duras y resistentes a la intemperie de la selva misionera. Históricamente empleada en construcción, pisos, durmientes de vías y elementos sometidos a la humedad. La decocción de su corteza tiene usos medicinales tradicionales.',
    mapPosition: { x: 17.5, y: 88 },
    photos: [
      '/images/especies/lapacho-negro/1.JPG',
      '/images/especies/lapacho-negro/2.JPG',
      '/images/especies/lapacho-negro/2.png',
    ],
    panoramaUrl: '/images/panoramicas/ABRAZA PALO Y LAPACHO NEGRO.jpg',
    bibliography: [
      'Ministerio de Cultura de la Nación. (s. f.). Lapacho [Video]. YouTube. https://www.youtube.com/watch?v=l6Llon6mMgo',
      'Ortega Torres, E., Spichiger, R., & Stutz de Ortega, L. (1989). Noventa especies forestales del Paraguay. Missouri Botanical Garden.',
      'Ministerio de Ecología y Recursos Naturales Renovables de Misiones. (s. f.). Lapacho negro. https://ecologia.misiones.gob.ar',
    ],
  },
  {
    id: 'ceibo',
    mapNumber: 3,
    commonName: 'Ceibo',
    scientificName: 'Erythrina falcata Benth.',
    family: 'Fabaceae',
    shortDescription: 'El ceibo misionero que enciende la selva con flores coral.',
    description: `En los montes húmedos de Misiones, cuando el verde parece no tener matices, de pronto estalla el coral. Es el tiempo del ceibo misionero, también llamado ceibo de monte o bituqueiro, un árbol que enciende la selva con racimos de flores intensas y atrae, como un faro, a aves y polinizadores.

Su nombre científico es Erythrina falcata Benth. y pertenece a la familia Fabaceae, la misma que integra Erythrina crista-galli, la especie declarada Flor Nacional Argentina por decreto en 1942. Son parientes, pero tienen diferencias: mientras la flor nacional suele asociarse a riberas y paisajes pampeanos con una altura que no supera los 12 metros, el ceibo misionero crece en ambientes selvícolas y húmedos, donde puede alcanzar hasta 30 metros de altura y un tronco de 80 centímetros de diámetro. Sus flores también son distintas: Erythrina crista-galli tiene flores que simulan la cresta de un gallo, mientras que la Erythrina falcata Benth. tiene forma de media luna.

El ceibo misionero se distribuye en Misiones y también en provincias como Corrientes, Jujuy, Salta y Tucumán, además de Paraguay y Brasil. Le gustan los suelos con buena disponibilidad de agua y su presencia marca claros y bordes de monte. Su madera, trabajable y liviana, ha sido utilizada para muebles, puertas, mesas y utensilios de cocina. En las ciudades, muchas veces se lo planta como ornamental: sus flores amariposadas, agrupadas en racimos llamativos de color coral, justifican esa elección. Algunas flores incluso pueden ser consumidas.`,
    morphology: 'Hasta 30 m de altura, tronco de 80 cm de diámetro. Flores amariposadas en forma de media luna, de color coral intenso, agrupadas en racimos vistosos. Especie asociada a suelos con buena disponibilidad hídrica.',
    culturalUse: `La tradición oral guaraní cuenta que la flor del ceibo nació del canto de Anahí, una joven guaraní que fue condenada tras un enfrentamiento entre su pueblo y fuerzas invasoras. Atada a un tronco y rodeada por el fuego, Anahí cantó a su selva hasta el final. Al amanecer —dice la leyenda— donde antes ardían las llamas aparecieron flores rojas, encendidas como brasas vivas.`,
    woodUse: 'Madera trabajable y liviana. Utilizada para muebles, puertas, mesas y utensilios de cocina. También empleado como árbol ornamental en ciudades por su llamativa floración coral.',
    mapPosition: { x: 17.5, y: 69 },
    photos: [
      '/images/especies/ceibo/1.JPG',
      '/images/especies/ceibo/2.JPG',
      '/images/especies/ceibo/3.png',
    ],
    panoramaUrl: '/images/panoramicas/CEIBO Y GUEMBE.jpg',
    bibliography: [
      'Ministerio de Cultura de la Nación. (s. f.). Por qué el 22 de noviembre se celebra el Día de la Flor Nacional. https://www.cultura.gob.ar',
      'Zuloaga, F. O., & Morrone, O. (s. f.). El género Erythrina (Leguminosae) en Argentina. https://www.researchgate.net',
      'Árboles del Chaco. (2015). Ceibo / Seibo - Género Erythrina. https://arbolesdelchaco.blogspot.com/2015/09/ceibo-seibo.html',
    ],
  },
  {
    id: 'culantrillo',
    mapNumber: 4,
    commonName: 'Culantrillo',
    scientificName: 'Adiantum pseudotinctum Hieron.',
    family: 'Pteridaceae',
    shortDescription: 'El helecho medicinal que crece en la penumbra fresca de la selva.',
    description: `En la penumbra fresca de la selva, allí donde la humedad se queda suspendida en el aire y las rocas guardan el agua de las lluvias, crece un helecho delicado que parece hecho de filigrana verde. Es el culantrillo del monte.

Su nombre científico es Adiantum pseudotinctum y pertenece a la familia Pteridaceae. En el nordeste argentino se lo conoce como culantrillo o culantrillo ka'aguy, y forma parte del mundo silencioso de los helechos, plantas antiguas que habitan la Tierra desde mucho antes que los árboles con flores.

Este helecho es una hierba perenne, lo que significa que su ciclo de vida puede extenderse durante varias temporadas. Sus raíces largas y rastreras se desplazan sobre la superficie o se introducen en grietas y pequeños espacios del suelo y de las rocas, permitiéndole formar colonias que se expanden lentamente en los ambientes húmedos del bosque.

En el caso de Adiantum pseudotinctum, su especialización la convierte en una especie litófita o saxícola, capaz de colonizar grietas en superficies rocosas donde la acumulación de nutrientes es escasa, pero la humedad permanece constante. Por su sensibilidad a los cambios del entorno, el culantrillo suele considerarse también un indicador de la salud ecológica del ambiente, ya que difícilmente prospera en sitios degradados o contaminados.

Estudios fitoquímicos realizados en especies del género Adiantum han identificado más de 130 compuestos bioactivos, entre ellos flavonoides y otras moléculas que participan en las respuestas fisiológicas de la planta y que explican muchos de los efectos observados en la medicina tradicional.`,
    morphology: 'Hierba perenne de porte delicado. Frondes finamente divididas en pinnulas con bordes dentados. Raíces largas y rastreras, litófita/saxícola. Crece en ambientes sombríos y húmedos del sotobosque.',
    culturalUse: `En la medicina popular es ampliamente utilizado: preparado como infusión o jarabe para aliviar tos, bronquitis y congestión mucosa (propiedades expectorantes y demulcentes). Se le atribuyen efectos sudoríficos para regular la temperatura en estados febriles, propiedades diuréticas y función emenagoga para regular el ciclo menstrual. Estas propiedades están respaldadas por más de 130 compuestos bioactivos identificados en el género Adiantum.`,
    woodUse: 'Al ser un helecho, no tiene aplicaciones madereras. Su valor es ecológico (indicador de salud del ecosistema) y medicinal.',
    mapPosition: { x: 21.5, y: 43 },
    photos: [
      '/images/especies/culantrillo/1.JPG',
      '/images/especies/culantrillo/2.JPG',
      '/images/especies/culantrillo/10.png',
    ],
    panoramaUrl: '/images/panoramicas/CULANTRILLO.jpg',
    bibliography: [
      'Flora Argentina. (s. f.). Adiantum pseudotinctum. https://floraargentina.edu.ar',
      'Facultad de Ciencias Exactas y Naturales y Agrimensura (UNNE). (s. f.). Guía de consulta de diversidad vegetal: Pteridofitas - Pteridaceae. https://exa.unne.edu.ar',
      'SciELO Brasil. (s. f.). Adiantum (Pteridaceae) in Brazil: Key to the species and illustrations. https://www.scielo.br/j/bn/a/tDcysnxw9WnXd9mJBgy5KZD',
      'Árboles del Chaco. (2015). Culantrillo. https://arbolesdelchaco.blogspot.com/2015/04/culantrillo-culandrillo.html',
    ],
  },
  {
    id: 'laurel-amarillo',
    mapNumber: 5,
    commonName: 'Laurel Amarillo',
    scientificName: 'Nectandra lanceolata Nees & Mart.',
    family: 'Lauraceae',
    shortDescription: 'Copa como un gran paraguas verde con hojas que envejecen rojizas.',
    description: `Su nombre científico es Nectandra lanceolata Nees & Mart. y pertenece a la familia Lauraceae, el mismo grupo botánico que reúne a los laureles y otras especies aromáticas del bosque subtropical. En Paraguay se lo conoce como Ayu'i morotí, mientras que en Brasil recibe el nombre de canela amarela.

Este árbol puede alcanzar entre 15 y 25 metros de altura, con una copa amplia y redondeada que se abre sobre el monte como un gran paraguas verde. Su corteza gris blanquecina, rugosa y escamosa, contrasta con el follaje oscuro que la cubre. Cuando las hojas envejecen, adquieren tonos rojizos, un cambio de color que destaca entre el verde predominante de la selva.

En Argentina crece de forma espontánea principalmente en Misiones y Formosa, donde forma parte del mosaico de especies del bosque atlántico. Sus frutos pequeños y carnosos son consumidos por diversas aves, que al desplazarse por el monte dispersan sus semillas.

El laurel amarillo también tiene un papel importante en la restauración de ambientes degradados. Por su tolerancia a suelos húmedos, es una especie recomendada para la recuperación de bosques ribereños, especialmente en zonas donde las crecidas generan inundaciones periódicas de corta duración.`,
    morphology: 'Entre 15 y 25 m de altura. Copa amplia y redondeada. Corteza gris blanquecina, rugosa y escamosa. Hojas que adquieren tonos rojizos al envejecer. Frutos pequeños y carnosos dispersados por aves.',
    culturalUse: `En la medicina popular es valorado por sus propiedades: se ha utilizado como digestivo, purgante y antiespasmódico, además de emplearse en tratamientos tradicionales para aliviar reumatismo, artritis y dolores corporales. Las hojas también han sido aplicadas para reducir la inflamación local causada por mordeduras de serpientes venenosas, un conocimiento transmitido a través de generaciones en las comunidades del monte.`,
    woodUse: 'Madera resistente y trabajable. Ha sido empleada para marcos de puertas y ventanas, pisos tipo parquet, chapas y rellenos. También recomendada para arborización de parques y rutas por su porte y follaje denso.',
    mapPosition: { x: 45, y: 70.5 },
    photos: [
      '/images/especies/laurel-amarillo/1.JPG',
      '/images/especies/laurel-amarillo/2.JPG',
      '/images/especies/laurel-amarillo/5.png',
    ],
    panoramaUrl: '/images/panoramicas/LAUREL AMARILLO.jpg',
    bibliography: [
      'Carvalho, P. E. R. (2003). Espécies arbóreas brasileiras: Canela-branca. Embrapa. http://www.alice.cnptia.embrapa.br/alice/handle/doc/1139720',
      'Instituto de Química Básica y Aplicada del Nordeste Argentino (IQUIBA-NEA, CONICET). (s. f.). Investigación comprueba efecto antiinflamatorio de extracto etanólico del laurel amarillo. https://iquiba-nea.conicet.gov.ar',
    ],
  },
  {
    id: 'jacaratia',
    mapNumber: 6,
    commonName: 'Jacaratia',
    scientificName: 'Jacaratia spinosa (Aubl.) A. DC.',
    family: 'Caricaceae',
    shortDescription: 'El único árbol comestible del mundo, pariente del mamón.',
    description: `Se lo conoce como el único árbol comestible en el mundo. Su nombre científico es Jacaratia spinosa y pertenece a la familia Caricaceae, la misma del mamón o papaya. También se lo conoce como papayón o mamoeiro-do-mato en Brasil. Se distribuye en selvas tropicales y subtropicales de América, desde Brasil, Paraguay y Argentina hasta Bolivia, Ecuador, Panamá, Costa Rica y Nicaragua.

En el monte puede alcanzar entre 10 y 20 metros de altura, con un tronco claro y ramas provistas de espinas que lo distinguen entre la vegetación. Sus frutos recuerdan al mamón: carnosos, aromáticos y muy apreciados por la fauna del bosque.

En los últimos años, el interés científico por esta especie ha crecido. Estudios sobre el perfil químico de Jacaratia spinosa revelan una riqueza notable en micronutrientes y enzimas, lo que ha llevado a considerarla como un posible superalimento.

El yacaratiá guarda otra singularidad: sus tejidos contienen una gran cantidad de agua, por lo que su tronco no desarrolla una madera dura como la mayoría de los árboles. En lugar de ello posee una estructura blanda y fibrosa. Esta característica despertó el interés del ingeniero forestal Roberto Pascutti, docente de la Facultad de Ciencias Forestales de la UNaM, quien a comienzos de la década de 1990 inició investigaciones inspiradas en antiguos manuscritos de las misiones jesuíticas. Durante cinco años, Pascutti estudió el yacaratiá en la selva y en laboratorio hasta desarrollar un método que permite transformar su fibra vegetal en un alimento apto para la cocina contemporánea, con preparaciones tanto dulces como saladas.

Más allá de sus usos culturales y alimentarios, el yacaratiá cumple también un papel ecológico importante. Es una especie pionera de crecimiento rápido, capaz de establecerse en áreas abiertas o degradadas.`,
    morphology: 'Entre 10 y 20 m de altura. Tronco claro y blando con estructura fibrosa rica en agua. Ramas con espinas características. Frutos carnosos y aromáticos similares al mamón. Especie pionera de crecimiento rápido.',
    culturalUse: `Mucho antes de que la ciencia explicara que el fruto fresco libera látex y enzimas proteolíticas, las comunidades guaraníes ya habían desarrollado una forma de procesarlo: lo cocinan bajo la ceniza caliente del fuego. El calor suave y constante de las brasas neutraliza estas sustancias sin destruir los azúcares y nutrientes, transformando el fruto en un dulce natural muy apreciado, especialmente por los niños. La estructura blanda del tronco también permite el desarrollo de larvas comestibles de curculiónidos, un recurso rico en proteínas. En la tradición guaraní existe una creencia: si un hombre que está por ser padre derriba un ejemplar de yacaratiá, su hijo podría nacer con los dedos deformes, semejantes a los brotes retorcidos que emite el tronco antes de descomponerse.`,
    woodUse: 'Tronco blando y fibroso sin valor maderero convencional. Sin embargo, investigaciones de la UNaM desarrollaron un método para transformar su fibra vegetal en alimento apto para cocina contemporánea (dulce y salado).',
    mapPosition: { x: 36.3, y: 64 },
    photos: [
      '/images/especies/jacaratia/1.JPG',
      '/images/especies/jacaratia/2.JPG',
      '/images/especies/jacaratia/3.JPG',
      '/images/especies/jacaratia/6.png',
    ],
    panoramaUrl: '/images/panoramicas/JACARATIA.jpg',
    bibliography: [
      'Keller, H. A. (2010). Plantas relacionadas con tabúes del ciclo reproductivo de los guaraníes de Misiones, Argentina. Boletín de la Sociedad Argentina de Botánica, 45(1–2), 201–208.',
      'Rauh, A. T. (2024). Propiedades fisicoquímicas y nutricionales de frutos de Jacaratia spinosa (Aubl.) A. DC. en remanentes de la selva paranaense de Misiones, Argentina (Tesis de maestría). Universidad Nacional de Misiones. https://rid.unam.edu.ar',
    ],
  },
  {
    id: 'ambay',
    mapNumber: 7,
    commonName: 'Ambay',
    scientificName: 'Cecropia pachystachya Trécul',
    family: 'Urticaceae',
    shortDescription: 'El árbol pionero de hojas gigantes que regenera el monte.',
    description: `Siempre verde y de crecimiento rápido, este árbol puede alcanzar entre 10 y 18 metros de altura. Crece en las selvas de Brasil, Paraguay y Argentina, donde las comunidades mbya guaraní lo conocen como ambay guachu. Suele encontrarse en el monte alto, pero también aparece en márgenes de arroyos, bordes de senderos y capueras, esos espacios donde la selva se abre y comienza lentamente a regenerarse.

El ambay (Cecropia pachystachya), de la familia Urticaceae, es una de las especies que encuentran oportunidad en los paisajes transformados. Allí donde hubo desmontes o disturbios, su presencia marca el inicio de un nuevo ciclo del bosque. Su tronco, de color gris claro y superficie lisa, se eleva sostenido por raíces zancudas que le brindan estabilidad en suelos húmedos y sueltos.

Sus hojas son inconfundibles. Grandes y palmatipartidas, se abren como una mano extendida hacia la luz. Entre ellas cuelgan largos racimos de flores de color verde claro que, con el tiempo, darán lugar a frutos muy apreciados por aves y murciélagos. Son estos animales quienes dispersan sus semillas, ayudando a que el ambay colonice nuevos espacios del monte.

Así, entre senderos, arroyos y claros del monte, el ambay crece como un puente entre la dinámica de la selva y los saberes de quienes la habitan.`,
    morphology: 'Entre 10 y 18 m de altura. Tronco gris claro con raíces zancudas. Hojas palmatipartidas muy grandes (hasta 50 cm de diámetro). Madera blanda y liviana. Florece y fructifica todo el año.',
    culturalUse: `En la medicina popular es ampliamente conocido por sus propiedades para aliviar enfermedades respiratorias: se lo utiliza como antitusivo y expectorante. Las comunidades guaraníes también han desarrollado distintos usos para la planta. Para el dolor de dientes, hierven sus raíces y utilizan el líquido en enjuagues. Para el dolor de vista, machacan el fruto, lo mezclan con agua fría y lo aplican sobre el rostro.`,
    woodUse: 'Madera blanda y liviana. Puede utilizarse como leña, para la producción de pulpa y papel, o incluso como sustituto de la madera de balsa en artesanías y construcciones livianas.',
    mapPosition: { x: 58, y: 31 },
    photos: [
      '/images/especies/ambay/1.JPG',
      '/images/especies/ambay/2.JPG',
      '/images/especies/ambay/7.png',
    ],
    panoramaUrl: '/images/panoramicas/AMBAY.jpg',
    bibliography: [
      'López, J. A., Little, E. L., Ritz, G. F., Rombold, J. S., & Hahn, W. J. (2002). Árboles comunes del Paraguay: Ñande yvyra mata kuera (2ª ed.). Cuerpo de Paz.',
      'Lezcano Acuña, R. C., Ramos, D., Ramos, A., Benítez, S., Figueras, E., González, M. S., Martínez, E. D. M., Dummel, C., & Hilgert, N. I. (2025). Puá Ka\'aguy Tekoa Ysyrypygua: Plantas medicinales de la aldea Ysyry.',
      'Pérez de Molas, L. F., & Mereles Haidar, N. M. (2024). 100 árboles del Cerrado de Paraguay. Facultad de Ciencias Agrarias, Universidad Nacional de Asunción.',
    ],
  },
  {
    id: 'timbo',
    mapNumber: 8,
    commonName: 'Timbó',
    scientificName: 'Enterolobium contortisiliquum (Vell.) Morong',
    family: 'Fabaceae',
    shortDescription: 'El gigante del monte con frutos en forma de oreja humana.',
    description: `Considerado uno de los gigantes del monte, puede alcanzar hasta 30 metros de altura y desarrollar un tronco que supera 1,6 metros de diámetro. Su nombre científico es Enterolobium contortisiliquum y pertenece a la familia Fabaceae. Su tronco, robusto y claro, presenta pequeñas aberturas llamadas lenticelas. A simple vista parecen diminutos poros en la corteza, pero cumplen una función vital: permiten el intercambio de gases entre los tejidos internos del árbol y la atmósfera.

El timbó no solo destaca por su tamaño, sino también por el movimiento de vida que genera a su alrededor. Sus flores atraen a numerosos insectos polinizadores, y la presencia de estos insectos convoca a aves insectívoras que encuentran allí alimento. Más tarde llegan los frutos, que son consumidos por tapires y pecaríes, entre otros mamíferos, quienes colaboran en la dispersión de sus semillas.

Esta especie posee una amplia distribución en Sudamérica. En Argentina se encuentra en Misiones, Corrientes, Chaco, Formosa, Santa Fe, Buenos Aires, Entre Ríos, Jujuy, Salta y Tucumán.

Uno de los rasgos más curiosos del timbó está en sus frutos. Su forma curvada y aplanada recuerda a una oreja humana, motivo por el cual también se lo conoce como "oreja de mono". El árbol florece entre octubre y diciembre, y sus frutos maduran entre enero y abril, aunque muchas veces permanecen colgando de las ramas hasta mediados del invierno.`,
    morphology: 'Hasta 30 m de altura, tronco que supera 1,6 m de diámetro. Lenticelas visibles en la corteza clara. Frutos leguminosos curvados y aplanados en forma de oreja (conocidos como "oreja de mono"). Florece oct-dic, fructifica ene-abr.',
    culturalUse: `Una antigua leyenda guaraní cuenta que un cacique llamado Saguá tenía una hija, Tacuaré, a quien amaba profundamente. Cuando ella se enamoró de un cacique de otra tribu y se marchó, Saguá comenzó a buscarla por toda la selva. Para intentar escuchar sus pasos, apoyaba su oído sobre la tierra. Así siguió durante mucho tiempo, hasta que enfermó y murió con la oreja apoyada en el suelo. Cuando su pueblo lo encontró, dicen que su oído había echado raíces y de allí nació el timbó, cuyos frutos conservan la forma de aquella oreja que nunca dejó de escuchar.`,
    woodUse: 'Madera liviana y resistente al agua. Ha sido empleada para fabricar envases, colmenas, persianas y diferentes partes de muebles. Las hojas, la corteza y los frutos contienen saponinas utilizadas tradicionalmente como jabón natural.',
    mapPosition: { x: 65, y: 70.5 },
    photos: [
      '/images/especies/timbo/1.JPG',
      '/images/especies/timbo/2.JPG',
      '/images/especies/timbo/8.png',
    ],
    panoramaUrl: '/images/panoramicas/TIMBO.jpg',
    bibliography: [
      'Ortega Torres, E., Spichiger, R., & Stutz de Ortega, L. (1989). Noventa especies forestales del Paraguay. Missouri Botanical Garden.',
      'Slanis, A. C. (2018). Oreja de negro, pacaré, timbó (Enterolobium contortisiliquum). Universo Tucumano, (7). Fundación Miguel Lillo – CONICET. https://www.lillo.org.ar/revis/universo-tucumano/2018/2018-ut-v07.pdf',
      'Identidad Cultural. (s. f.). La leyenda del timbó. https://www.identidad-cultural.com.ar',
    ],
  },
  {
    id: 'pindo',
    mapNumber: 9,
    commonName: 'Pindó',
    scientificName: 'Syagrus romanzoffiana (Cham.) Glassman',
    family: 'Arecaceae',
    shortDescription: 'La palmera sagrada guaraní, sostén y símbolo del monte.',
    description: `Para la mitología guaraní, el pindó no es solo una planta: es presencia sagrada, protectora y refugio de vida. Bajo su copa anidan aves, se cobijan insectos y descansan quienes caminan el monte. Es sostén y símbolo.

La palmera Syagrus romanzoffiana, de la familia Arecaceae, puede elevarse entre 10 y 15 metros, es estilizada y firme. Se reproduce con abundancia y por eso también es cultivada en pueblos y ciudades, donde aporta su silueta tropical a veredas y plazas. En estado silvestre, se distribuye en el nordeste argentino, Paraguay, Uruguay y el sur de Brasil, formando parte del paisaje característico de la región.

Sus frutos, ovoides y de un naranja intenso, maduran en racimos generosos. Son comestibles y dulces, y su dispersión depende de otros habitantes del monte: aves y mamíferos que los consumen y transportan sus semillas. Este tipo de dispersión se denomina zoocoria, y es como una alianza silenciosa entre plantas y animales para asegurar la continuidad de la especie.

Algo curioso de esta especie es una práctica ancestral registrada desde fines del siglo XIX que aún persiste en algunas aldeas: promover el desarrollo de larvas de escarabajo en el interior del tronco. Semanas después, se recolecta el "ychá", nombre con el que los guaraníes designan a estas larvas de coleópteros. Ricas en proteínas y grasas, las larvas se cocinan en su propio aceite y son compartidas y consumidas en comunidad.`,
    morphology: 'Entre 10 y 15 m de altura. Estípite (tronco) grisáceo y anillado. Hojas pinnadas de hasta 4 m. Frutos ovoides de naranja intenso en racimos generosos. Especie estilizada, muy cultivada en zonas urbanas.',
    culturalUse: `Para los pueblos guaraníes, el pindó es alimento, medicina y materia prima. De su interior, antiguamente, se obtenía una harina con la que se elaboraban panes. El cogollo se emplea para el dolor de vista y de cabeza, y el guapí (sustancia parecida a una cera extraída de la semilla) para fortalecer la memoria. Las raíces en mate favorecen la fertilidad. La práctica ancestral de criar larvas ychá dentro del tronco derrumbado es un recurso proteico aún presente en algunas aldeas.`,
    woodUse: 'El tronco fibroso se usa para postes y construcciones rústicas. Sus hojas y fibras han sido utilizadas en construcciones y techumbres. Las larvas ychá criadas en el tronco constituyen un alimento tradicional rico en proteínas y grasas.',
    mapPosition: { x: 55, y: 35 },
    photos: [
      '/images/especies/pindo/1.JPG',
      '/images/especies/pindo/2.JPG',
      '/images/especies/pindo/9.png',
    ],
    panoramaUrl: '/images/panoramicas/PINDO.jpg',
    bibliography: [
      'Hilgert, N. I., Pochettino, M. L., & Bermejo, J. E. H. (1993). Palmeras NUS al sur de la América austral. Acta Botanica Brasilica, 23, 769–779.',
      'Lezcano Acuña, R. C., Ramos, D., Ramos, A., Benítez, S., Figueras, E., González, M. S., Martínez, E. D. M., Dummel, C., & Hilgert, N. I. (2025). Puá Ka\'aguy Tekoa Ysyrypygua: Plantas medicinales de la aldea Ysyry.',
      'Portal Guaraní. (s. f.). Mitos y leyendas del Paraguay. https://portalguarani.com',
      'Neociencia. (s. f.). Vida diversa: Pindó [Video]. YouTube. https://www.youtube.com/watch?v=YjRZdO-GKz0',
      'Flora Argentina. (s. f.). Syagrus romanzoffiana. https://floraargentina.edu.ar',
    ],
  },
  {
    id: 'guembe',
    mapNumber: 10,
    commonName: 'Güembé',
    scientificName: 'Thaumatophyllum bipinnatifidum (Schott ex Endl.) Sakur., Calazans & Mayo',
    family: 'Araceae',
    shortDescription: 'La hemiepífita de hojas espectaculares que sube hacia la luz.',
    description: `Conocido científicamente como Thaumatophyllum bipinnatifidum, pertenece a la familia Araceae, y es muy conocido por su valor ornamental. En Misiones recibe el nombre de güembé, mientras que en Paraguay se lo conoce como guembepi. Su distribución natural abarca el nordeste argentino, Paraguay, Bolivia y Brasil, donde crece en ambientes húmedos, tanto en bosques como en claros y bordes de monte.

Esta planta desarrolla una estrategia particular para alcanzar la luz en la selva: es una hemiepífita. Muchas veces germina sobre ramas o troncos de otros árboles y desde allí comienza su crecimiento. Con el tiempo, emite raíces que descienden hasta el suelo para anclarse y absorber nutrientes, mientras sus hojas se expanden hacia los espacios luminosos del dosel.

El güembé puede alcanzar hasta 1,5 metros de altura, con un tallo arborescente que llega a medir alrededor de 18 centímetros de diámetro. Sus hojas son grandes y llamativas: presentan una forma ovalada, semejante a un corazón, y están profundamente divididas en pequeños gajos o pinnas con bordes dentados. Esta estructura amplia le permite captar mejor la luz filtrada del bosque.

Sus flores se organizan en una estructura característica de las aráceas llamada espádice, rodeada por una espata. Tras la floración se desarrollan frutos aromáticos y dulces que, cuando maduran, son consumidos por la fauna y también por las personas.`,
    morphology: 'Hasta 1,5 m de altura. Tallo arborescente de ~18 cm de diámetro. Hojas grandes con forma ovalada profundamente dividida en pinnas con bordes dentados. Flores en espádice con espata. Hemiepífita.',
    culturalUse: `En comunidades guaraníes, el fruto del güembé suele comerse crudo —entero o machacado en el mortero (angu'a)— durante los recorridos por el monte o en distintos momentos de la vida cotidiana e incluso en contextos rituales. Los usos medicinales de esta planta son conocidos desde hace casi un siglo: ya en 1931 se documentó que los indígenas canigu empleaban sus preparaciones con fines terapéuticos. Al igual que el abraza palo, comparte con el ceibo el mismo espacio panorámico del jardín.`,
    woodUse: 'No tiene aprovechamiento maderero. Su valor principal es ornamental, ecológico y alimentario (frutos). Muy utilizada en jardines y espacios verdes urbanos de todo el mundo por su follaje espectacular.',
    mapPosition: { x: 13.5, y: 66.5 },
    photos: [
      '/images/especies/guembe/1.JPG',
      '/images/especies/guembe/2.JPG',
    ],
    panoramaUrl: '/images/panoramicas/CEIBO Y GUEMBE.jpg',
    bibliography: [
      'Flora Argentina. (s. f.). Thaumatophyllum bipinnatifidum. https://buscador.floraargentina.edu.ar',
      'Martín Hernández, V. (s. f.). Estudio para la determinación de polygodial y estigmasterol en especies vegetales: Philodendron bipinnatifidum y Polygonum punctatum (Trabajo de grado). Universidad de Valladolid.',
      'Crivos, M., Martínez, M. R., Remorini, C., & Teves, L. (2002). Comer y cocinar en una aldea Mbya. En Enciclopedia de Misiones. Posadas.',
      'Stampella, P. C., Espósito, E., & Keller, H. A. (2019). Los frutales del nordeste argentino en la "Materia Médica Misionera" del jesuita Pedro Montenegro. Bonplandia, 28(2), 99–116.',
    ],
  },
];

export const TRIVIA_DATA: TriviaQuestion[] = [
  {
    id: 'q1',
    question: '¿Cuál es el nombre guaraní de la palmera Pindó?',
    options: ['Ambay guachu', 'Guapo\'y', 'Pindó', 'Arý Pyahu'],
    correctAnswer: 2,
    explanation: 'Pindó es el nombre guaraní de Syagrus romanzoffiana. Para los guaraníes es una planta sagrada que provee alimento, medicina y materia prima.'
  },
  {
    id: 'q2',
    question: '¿Qué árbol fue declarado Monumento Natural de Misiones en 2006?',
    options: ['Timbó', 'Ceibo misionero', 'Lapacho Negro', 'Laurel Amarillo'],
    correctAnswer: 2,
    explanation: 'El Lapacho Negro (Handroanthus heptaphyllus) fue declarado Monumento Natural de Misiones en 2006 por su espectacular floración invernal que tiñe de rosa el paisaje.'
  },
  {
    id: 'q3',
    question: '¿Qué árbol es conocido como "oreja de mono" por la forma de sus frutos?',
    options: ['Abraza Palo', 'Timbó', 'Jacaratia', 'Ambay'],
    correctAnswer: 1,
    explanation: 'El Timbó (Enterolobium contortisiliquum) tiene frutos curvados y aplanados que recuerdan a una oreja humana, de allí el apodo "oreja de mono".'
  },
  {
    id: 'q4',
    question: '¿Qué estrategia de crecimiento comparten el Abraza Palo y el Güembé?',
    options: ['Son caducifolios', 'Son hemiepífitos', 'Son acuáticos', 'Son parásitos'],
    correctAnswer: 1,
    explanation: 'Tanto el Abraza Palo como el Güembé son hemiepífitos: germinan sobre otros árboles y luego envían raíces al suelo. El Abraza Palo puede terminar estrangulando al árbol huésped.'
  },
  {
    id: 'q5',
    question: '¿Cómo procesan los guaraníes el fruto del Jacaratia para neutralizar sus enzimas?',
    options: ['Lo fermentan en agua', 'Lo cocinan bajo ceniza caliente', 'Lo secan al sol', 'Lo mezclan con miel'],
    correctAnswer: 1,
    explanation: 'Los guaraníes cocinan el fruto del Jacaratia bajo la ceniza caliente del fuego. El calor suave neutraliza las enzimas proteolíticas sin destruir los azúcares y nutrientes.'
  },
  {
    id: 'q6',
    question: '¿Qué es el Arý Pyahu en la cosmovisión guaraní?',
    options: ['El espíritu del bosque', 'El tiempo nuevo o año nuevo guaraní', 'Una ceremonia de pesca', 'El nombre del Timbó'],
    correctAnswer: 1,
    explanation: 'Arý Pyahu significa "tiempo nuevo" o "año nuevo" en guaraní. Se vincula con el florecimiento del Lapacho Negro y marca el inicio de la siembra.'
  },
  {
    id: 'q7',
    question: '¿Qué característica hace al Culantrillo un indicador ecológico?',
    options: ['Crece solo en zonas urbanas', 'Difícilmente prospera en sitios degradados o contaminados', 'Solo florece en invierno', 'Atrae serpientes venenosas'],
    correctAnswer: 1,
    explanation: 'El Culantrillo (Adiantum pseudotinctum) es muy sensible a los cambios del entorno, por lo que su presencia indica la buena salud ecológica del ambiente.'
  },
  {
    id: 'q8',
    question: '¿Cuál es el nombre del insecto que poliniza exclusivamente al Abraza Palo?',
    options: ['Una abeja nativa', 'Una avispa del género Blastophaga', 'Una mariposa nocturna', 'Un escarabajo'],
    correctAnswer: 1,
    explanation: 'La reproducción del Abraza Palo depende de una relación exclusiva con una pequeña avispa del género Blastophaga. Ambos organismos dependen mutuamente para completar su ciclo de vida.'
  },
  {
    id: 'q9',
    question: '¿Qué es el "ychá" en la cultura guaraní?',
    options: ['Un tipo de miel', 'Larvas de coleópteros criadas en el tronco del Pindó', 'Una danza ritual', 'El fruto del Timbó'],
    correctAnswer: 1,
    explanation: 'El "ychá" son larvas de coleópteros (Curculionoidea) que los guaraníes crían en el tronco derribado del Pindó. Ricas en proteínas y grasas, se cocinan en su propio aceite.'
  },
  {
    id: 'q10',
    question: '¿Qué diferencia principal hay entre el Ceibo misionero y el Ceibo de la flor nacional?',
    options: ['El color de las flores', 'El ceibo misionero puede alcanzar 30 m y sus flores tienen forma de media luna', 'El ceibo misionero crece bajo el agua', 'No hay diferencia'],
    correctAnswer: 1,
    explanation: 'El Ceibo misionero (Erythrina falcata) crece en ambientes selvícolas, puede alcanzar 30 m de altura y sus flores tienen forma de media luna. El Ceibo nacional (E. crista-galli) no supera 12 m y tiene flores en cresta de gallo.'
  },
  {
    id: 'q11',
    question: '¿Para qué se utilizan las saponinas del Timbó en la tradición?',
    options: ['Como veneno para cazar', 'Como jabón natural y para pescar', 'Como tinte para telas', 'Como abono'],
    correctAnswer: 1,
    explanation: 'Las saponinas del Timbó producen espuma en contacto con el agua, por lo que se usaron como jabón. También tienen efecto paralizante sobre los peces, lo que se aprovechó en prácticas de pesca tradicionales.'
  },
  {
    id: 'q12',
    question: '¿Qué papel ecológico cumple el Ambay en la selva?',
    options: ['Es la especie más antigua del bosque', 'Es una especie pionera que inicia la regeneración del bosque', 'Solo crece en zonas inundadas', 'Impide el crecimiento de otras plantas'],
    correctAnswer: 1,
    explanation: 'El Ambay es una especie pionera de crecimiento rápido. Allí donde hubo desmontes o disturbios, su presencia marca el inicio de un nuevo ciclo del bosque, preparando el terreno para que lleguen otras especies.'
  },
  {
    id: 'q13',
    question: '¿En qué familia botánica está el Laurel Amarillo?',
    options: ['Fabaceae', 'Moraceae', 'Lauraceae', 'Arecaceae'],
    correctAnswer: 2,
    explanation: 'El Laurel Amarillo (Nectandra lanceolata) pertenece a la familia Lauraceae, el mismo grupo que reúne a los laureles y otras especies aromáticas del bosque subtropical.'
  },
  {
    id: 'q14',
    question: '¿Qué investigación desarrolló el ingeniero Roberto Pascutti sobre el Jacaratia?',
    options: ['Usó su madera para muebles de diseño', 'Transformó la fibra vegetal de su tronco en alimento para cocina contemporánea', 'Extrajo un medicamento para el cáncer', 'Desarrolló un biocombustible'],
    correctAnswer: 1,
    explanation: 'El Ing. Pascutti (FCF - UNaM) desarrolló, a lo largo de 5 años de investigación, un método para transformar la fibra blanda del tronco del Jacaratia en un alimento apto para la cocina contemporánea, tanto en preparaciones dulces como saladas.'
  },
  {
    id: 'q15',
    question: '¿Qué tipo de dispersión de semillas utiliza el Pindó?',
    options: ['Anemocoria (por el viento)', 'Hidrocoria (por el agua)', 'Zoocoria (por animales)', 'Autocoria (propia)'],
    correctAnswer: 2,
    explanation: 'La dispersión de las semillas del Pindó se denomina zoocoria: aves y mamíferos consumen sus frutos anaranjados y transportan las semillas, asegurando la continuidad de la especie.'
  },
];

export const SERVICES_DATA: EcosystemService[] = [
  {
    title: 'Aire Puro',
    description: 'Absorben dióxido de carbono y liberan oxígeno, limpiando el aire de la ciudad.',
    icon: 'air'
  },
  {
    title: 'Regulación Hídrica',
    description: 'Sus raíces funcionan como esponjas, reteniendo agua y evitando inundaciones.',
    icon: 'water'
  },
  {
    title: 'Hogar de Biodiversidad',
    description: 'Proveen refugio y alimento a cientos de aves, insectos y mamíferos nativos.',
    icon: 'bio'
  }
];
