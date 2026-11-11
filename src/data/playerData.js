import { FaInstagram } from 'react-icons/fa'
import { IoMdStats } from 'react-icons/io'

// Hero
import heroRecorte from '@assets/hero/alzugaray-recorte.webp'
import heroFondo from '@assets/hero/alzugaray-fondo.webp'
import heroEspalda from '@assets/hero/alzugaray-espalda.webp'
import banderaArgentina from '@assets/bandera-argentina.webp'
import escudoUniversitario from '@assets/escudos/escudo_universitario.webp'
// Escudos trayectoria
import escudoAtlParana from '@assets/escudos/escudo_atlparana.webp'
import escudoNewells from '@assets/escudos/escudo_newells.webp'
import escudoAlhali from '@assets/escudos/escudo_alhali.webp'
import escudoCentralCordoba from '@assets/escudos/escudo_centralcordoba.webp'
import escudoChaco from '@assets/escudos/escudo_chaco.webp'
import escudoLigadequito from '@assets/escudos/escudo_ligadequito.webp'
import escudoSanjose from '@assets/escudos/escudo_sanjose.webp'
import escudoUcatolica from '@assets/escudos/escudo_ucatolica.webp'
import escudoAucas from '@assets/escudos/escudo_aucas.webp'
// Galería
import fotoDisputa from '@assets/gallery/alzugaray-universitario-disputa.webp'
import fotoEntrenamiento from '@assets/gallery/alzugaray-entrenamiento-pechera.webp'
import fotoAlternativa from '@assets/gallery/alzugaray-universitario-alternativa.webp'
import fotoVsNacional from '@assets/gallery/alzugaray-vs-nacional-libertadores.webp'
import fotoConduccion from '@assets/gallery/alzugaray-universitario-conduccion.webp'
import fotoSalida from '@assets/gallery/alzugaray-universitario-salida.webp'
import fotoRemate from '@assets/gallery/alzugaray-universitario-remate.webp'
import fotoFestejo from '@assets/gallery/alzugaray-universitario-festejo.webp'
// Galería: fotos sumadas en el rediseño
import gGritoGol from '@assets/gallery/alzugaray-grito-gol.webp'
import gFestejoRodillas from '@assets/gallery/alzugaray-festejo-rodillas.webp'
import gHinchadaFondo from '@assets/gallery/alzugaray-hinchada-fondo.webp'
import gPrimerPlano from '@assets/gallery/alzugaray-primer-plano.webp'
import gFestejoSinCamiseta from '@assets/gallery/alzugaray-festejo-sin-camiseta.webp'
import gLa30Granate from '@assets/gallery/alzugaray-la-30-granate.webp'
import gConduccionMarca from '@assets/gallery/alzugaray-conduccion-marca.webp'
import gPelotaParadaEspalda from '@assets/gallery/alzugaray-pelota-parada-espalda.webp'
import gEspalda30 from '@assets/gallery/alzugaray-espalda-30.webp'
import gSalidaPlantel from '@assets/gallery/alzugaray-salida-plantel.webp'
import gConcentracion from '@assets/gallery/alzugaray-concentracion.webp'
import gPelotaAlPie from '@assets/gallery/alzugaray-pelota-al-pie.webp'
import gRemateMediaDistancia from '@assets/gallery/alzugaray-remate-media-distancia.webp'
import gDisputaGranate from '@assets/gallery/alzugaray-disputa-granate.webp'
import gFestejoCamisetaMano from '@assets/gallery/alzugaray-festejo-camiseta-mano.webp'
import gRemateTribuna from '@assets/gallery/alzugaray-remate-tribuna.webp'
import gEnCanchaGranate from '@assets/gallery/alzugaray-en-cancha-granate.webp'
import gCaminoGranate from '@assets/gallery/alzugaray-camino-granate.webp'
import gPelotaParadaTribuna from '@assets/gallery/alzugaray-pelota-parada-tribuna.webp'
import gAlCampo from '@assets/gallery/alzugaray-al-campo.webp'
import gCredencial from '@assets/gallery/alzugaray-credencial.webp'
import gViajePlantel from '@assets/gallery/alzugaray-viaje-plantel.webp'
import gFormacionLiga1 from '@assets/gallery/alzugaray-formacion-liga1.webp'
import gEntradaCalorPechera from '@assets/gallery/alzugaray-entrada-calor-pechera.webp'
import gEntrenamientoPelota from '@assets/gallery/alzugaray-entrenamiento-pelota.webp'
import gElongacionPlantel from '@assets/gallery/alzugaray-elongacion-plantel.webp'
// Video
import fotoPerfilVideo from '@assets/videos/alzugaray-perfil-video.webp'
// Prensa
import logoEspn from '@assets/logos/logo_espn.webp'
import logoInfobae from '@assets/logos/logo_infobae.webp'
import logoConmebol from '@assets/logos/logo_conmebol_libertadores.webp'
// Redes y representantes
import logoTransfermarkt from '@assets/redes/transfermarkt.svg'
import logoLedSports from '@assets/representantes/led_sports.webp'
import logoMoonSports from '@assets/representantes/moon_sports_group.webp'

// Imágenes sin uso todavía (se usan en el rediseño de Videos y Prensa)
export const extraAssets = { fotoPerfilVideo, logoInfobae }

const name = 'LISANDRO'
const fullName = 'ALZUGARAY'

export const playerData = {
  name,
  fullName,
  initials: `${name[0]}${fullName[0]}`, // iniciales para logos (PF)
  displayName: `${name} ${fullName}`,   // nombre completo para textos legales / alt
  shortName: 'Lisandro Alzugaray',       // para alt y aria-labels
  nickname: 'Licha',
  number: 30,
  position: 'Extremo derecho',
  positionShort: 'ED',
  nationality: 'Argentina',
  nationalityFlag: banderaArgentina,
  age: 36,
  height: '1.70m',
  weight: '70kg',
  foot: 'Derecho',
  birthDate: '17 / 04 / 1990',
  birthPlace: 'Viale, Entre Ríos',
  currentClub: 'Universitario',
  logoCurrentClub: escudoUniversitario,
  image: heroRecorte,
  heroBg: heroFondo,
  heroBack: heroEspalda,
  

  // Texto de apertura de Estadísticas
  statsIntro: 'Extremo derecho de pie hábil derecho. Diez clubes en cuatro países y campeón de la Copa Sudamericana 2023 con Liga de Quito.',
  seasonLabel: 'Temporada 2026',

  // Zona de influencia en la cancha (viewBox 68×105, ataca hacia arriba).
  // Orientativa según la posición: no es un mapa de calor de partido.
  pitchZone: {
    label: 'banda derecha, del medio campo al área rival',
    main: { x: 55, y: 30, rx: 14, ry: 19 },
    secondary: [
      { x: 50, y: 55, rx: 11, ry: 12 },
      { x: 42, y: 20, rx: 10, ry: 9 },
    ],
  },

  // Atributos de 0 a 100
  stats: [
    { label: 'Velocidad',       value: 91 },
    { label: 'Definición',      value: 88 },
    { label: 'Regate',          value: 84 },
    { label: 'Pases completos', value: 79 },
    { label: 'Presión alta',    value: 82 },
    { label: 'Visión de juego', value: 79 },
  ],

  // highlight: el número va en el color de acento
  seasonStats: [
    { label: 'Partidos',        value: 16 },
    { label: 'Goles',           value: 3, highlight: true },
    { label: 'Asistencias',     value: 1 },
    { label: 'Tiros al arco',   value: 8 },
    { label: 'Minutos jugados', value: "1.022'" },
    { label: 'Valoración',      value: 7.4, highlight: true },
  ],

  // Código y color de cada país en el recorrido de clubes
  countries: {
    'Perú':           { code: 'PER', color: '#bda78e' },
    'Ecuador':        { code: 'ECU', color: '#c0ab32' },
    'Arabia Saudita': { code: 'KSA', color: '#4f7d5c' },
    'Argentina':      { code: 'ARG', color: '#9b948c' },
  },

  // Clubes (un registro por club). titles = títulos; distinctions = distinciones individuales
  clubs: [
    { id: 'universitario',  name: 'Universitario',        short: 'Universitario',   country: 'Perú',           years: '2026 — Hoy',          logo: escudoUniversitario,   titles: [], distinctions: [] },
    { id: 'ligadequito',    name: 'Liga de Quito',        short: 'Liga de Quito',   country: 'Ecuador',        years: '2023 — 2025',         logo: escudoLigadequito,
      titles: ['Serie A Ecuador 2023', 'Copa Sudamericana 2023', 'Serie A Ecuador 2024', 'Supercopa Ecuador 2024'], distinctions: [] },
    { id: 'alhali',         name: 'Al-Hali Saudi',        short: 'Al-Hali',         country: 'Arabia Saudita', years: '2022',                logo: escudoAlhali,          titles: [], distinctions: [] },
    { id: 'ucatolica',      name: 'Universidad Católica', short: 'U. Católica',     country: 'Ecuador',        years: '2021 — 2022',         logo: escudoUcatolica,       titles: [],
      distinctions: ['11 ideal de la Serie A de Ecuador 2021'] },
    { id: 'aucas',          name: 'S.D. Aucas',           short: 'Aucas',           country: 'Ecuador',        years: '2020',                logo: escudoAucas,           titles: [], distinctions: [] },
    { id: 'centralcordoba', name: 'Central Córdoba',      short: 'Central Córdoba', country: 'Argentina',      years: '2019',                logo: escudoCentralCordoba,  titles: [], distinctions: [] },
    { id: 'newells',        name: "Newell's Old Boys",    short: "Newell's",        country: 'Argentina',      years: '2018',                logo: escudoNewells,         titles: [], distinctions: [] },
    { id: 'chaco',          name: 'Chaco For Ever',       short: 'Chaco For Ever',  country: 'Argentina',      years: '2013 — 2014 · 2017',  logo: escudoChaco,           titles: [], distinctions: [] },
    { id: 'sanjose',        name: 'San José',             short: 'San José',        country: 'Argentina',      years: '2016 — 2017',         logo: escudoSanjose,         titles: [], distinctions: [] },
    { id: 'atlparana',      name: 'Atlético Paraná',      short: 'Atl. Paraná',     country: 'Argentina',      years: '2011 — 2013 · 2015',  logo: escudoAtlParana,       titles: [], distinctions: [] },
  ],

  // Recorrido: cada etapa en un club, de la más reciente a la primera.
  // Un club puede aparecer más de una vez (volvió en otra etapa).
  career: [
    { club: 'universitario',  from: 2026 },
    { club: 'ligadequito',    from: 2023 },
    { club: 'alhali',         from: 2022 },
    { club: 'ucatolica',      from: 2021 },
    { club: 'aucas',          from: 2020 },
    { club: 'centralcordoba', from: 2019 },
    { club: 'newells',        from: 2018 },
    { club: 'chaco',          from: 2017 },
    { club: 'sanjose',        from: 2016 },
    { club: 'atlparana',      from: 2015 },
    { club: 'chaco',          from: 2013 },
    { club: 'atlparana',      from: 2011 },
  ],

  videosIntro: 'Sus mejores jugadas, en los reels que publica en Instagram.',
  videos: [
    {
      id: 'v1',
      // instagramId: código del reel. En https://www.instagram.com/reel/DXXXXXXXXXX/ es "DXXXXXXXXXX"
      instagramId: 'DXvelmBtUmJ',
      title: 'Gol vs Nacional',
      fullTitle: 'Lisandro Alzugaray | Gol vs Nacional, CONMEBOL Libertadores 2026',
      season: '2026',
      league: 'CONMEBOL Libertadores 2026',
      thumbnail: fotoRemate,
      cover: fotoRemate,
      category: 'Highlights',
    },
    {
      id: 'v2',
      instagramId: 'DWEUMU0AL2f',
      title: 'Compilado 2026',
      fullTitle: 'Lisandro Alzugaray | Compilado de goles 2026',
      season: '2026',
      league: 'Temporada 2026',
      thumbnail: fotoDisputa,
      cover: fotoDisputa,
      category: 'Goles',
    },
    {
      id: 'v3',
      instagramId: 'DTlGApKkWzo',
      title: 'Temporada 2025',
      fullTitle: 'Lisandro Alzugaray | Temporada 2025 en Liga de Quito',
      season: '2025',
      league: 'Liga de Quito',
      thumbnail: fotoVsNacional,
      cover: fotoVsNacional,
      category: 'Asistencias',
    },
  ],

  // Prensa: de la más reciente a la más antigua. type = formato (Nota / Publicación en ...).
  // Titulares sin emojis: en Windows las banderas se ven como letras.
  pressIntro: 'Lo que dijeron de él en la Libertadores, de Quito a Lima.',
  press: [
    {
      media: 'CONMEBOL Libertadores',
      logo:  logoConmebol,
      type:  'Publicación en Instagram',
      title: 'Un delantero siempre presente en la CONMEBOL Libertadores: @lisandroalzugaray',
      date:  'Mayo 2026',
      cta:   'Ver la publicación',
      url:   'https://www.instagram.com/p/DYSwt6NDBIC/',
    },
    {
      media: 'ESPN Deportes',
      logo:  logoEspn,
      type:  'Nota',
      title: 'Lisandro Alzugaray volvió con gol clave para Universitario en CONMEBOL Libertadores',
      date:  'Abril 2026',
      cta:   'Leer la nota',
      url:   'https://espndeportes.espn.com/futbol/copa-libertadores/nota/_/id/16648033/lisandro-alzugaray-volvio-con-gol-clave-para-universitario-en-conmebol-libertadores',
    },
    {
      media: 'CONMEBOL Libertadores',
      logo:  logoConmebol,
      type:  'Publicación en X',
      title: '¡El equipo de la semana! Lisandro Alzugaray en el 11 ideal tras la semifinal de ida de la CONMEBOL Libertadores.',
      date:  'Octubre 2025',
      cta:   'Ver la publicación',
      url:   'https://x.com/Libertadores/status/1981820492257669422',
    },
  ],

  // Galería por categoría. Las primeras 4 fotos de cada una se ven sin abrir "Ver más": van las mejores.
  // pos = objectPosition, para que el recorte no corte la cara.
  galleries: [
    {
      key: 'universitario',
      name: 'Universitario',
      photos: [
        { src: gGritoGol, alt: 'Lisandro Alzugaray grita un gol con los puños apretados y la camiseta de Universitario', caption: 'El grito del gol', pos: 'center 30%' },
        { src: fotoRemate, alt: 'Lisandro Alzugaray remata con la camiseta de Universitario', caption: 'Remate', pos: 'center 55%' },
        { src: gFestejoRodillas, alt: 'Lisandro Alzugaray festeja de rodillas con el brazo en alto y la 30 en la espalda', caption: 'Festejo de rodillas', pos: 'center 40%' },
        { src: gHinchadaFondo, alt: 'Lisandro Alzugaray con la camiseta granate frente a la tribuna de Universitario', caption: 'Con la hinchada de fondo', pos: 'center 60%' },
        { src: gPrimerPlano, alt: 'Primer plano de Lisandro Alzugaray con la camiseta crema de Universitario', caption: 'Primer plano', pos: 'center 25%' },
        { src: fotoFestejo, alt: 'Lisandro Alzugaray festeja un gol con Universitario en el Monumental', caption: 'Festejo en el Monumental', pos: 'center 35%' },
        { src: gFestejoSinCamiseta, alt: 'Lisandro Alzugaray festeja un gol sin camiseta, revoleándola', caption: 'Festejo sin camiseta', pos: 'center 30%' },
        { src: gLa30Granate, alt: 'Lisandro Alzugaray de espaldas con la 30 granate, a punto de pegarle a la pelota', caption: 'La 30 granate', pos: 'center 35%' },
        { src: gPelotaParadaEspalda, alt: 'Lisandro Alzugaray de espaldas con la 30, frente a la pelota antes de un tiro libre', caption: 'Pelota parada', pos: 'center 50%' },
        { src: fotoVsNacional, alt: 'Lisandro Alzugaray conduce ante Nacional por la Copa Libertadores', caption: 'Libertadores · vs Nacional', pos: 'center 45%' },
        { src: gConduccionMarca, alt: 'Lisandro Alzugaray conduce la pelota ante la marca de un rival', caption: 'Conducción ante la marca', pos: 'center 40%' },
        { src: gEspalda30, alt: 'Lisandro Alzugaray de espaldas con la camiseta alternativa y el número 30', caption: 'Con la 30 en la espalda', pos: 'center 30%' },
        { src: fotoSalida, alt: 'Lisandro Alzugaray sale a la cancha con el plantel de Universitario', caption: 'Salida al campo', pos: 'center 25%' },
        { src: gConcentracion, alt: 'Lisandro Alzugaray con la camiseta granate, concentrado durante un partido', caption: 'Concentración', pos: 'center 30%' },
        { src: gSalidaPlantel, alt: 'Lisandro Alzugaray sale a la cancha en fila con el plantel de Universitario', caption: 'Salida al campo con el plantel', pos: 'center 30%' },
        { src: gPelotaAlPie, alt: 'Lisandro Alzugaray avanza con la pelota al pie con la camiseta crema', caption: 'Con la pelota al pie', pos: 'center 40%' },
        { src: gRemateMediaDistancia, alt: 'Lisandro Alzugaray remata de media distancia con la camiseta granate', caption: 'Remate de media distancia', pos: 'center 55%' },
        { src: gFestejoCamisetaMano, alt: 'Lisandro Alzugaray festeja con la camiseta en la mano ante la tribuna', caption: 'Festejo con la camiseta en la mano', pos: 'center 30%' },
        { src: gDisputaGranate, alt: 'Lisandro Alzugaray disputa la pelota con un rival de celeste', caption: 'Disputa de pelota', pos: 'center 50%' },
        { src: gEnCanchaGranate, alt: 'Lisandro Alzugaray en la cancha con la camiseta granate de Universitario', caption: 'En cancha con la granate', pos: 'center 45%' },
        { src: gCaminoGranate, alt: 'Lisandro Alzugaray camina por la cancha con la camiseta granate', caption: 'Con la camiseta granate', pos: 'center 30%' },
        { src: gAlCampo, alt: 'Lisandro Alzugaray camina hacia el campo de juego con la camiseta granate', caption: 'Al campo de juego', pos: 'center 30%' },
        { src: fotoConduccion, alt: 'Lisandro Alzugaray conduce la pelota con el número 30 de Universitario', caption: 'Liga 1', pos: 'center 30%' },
        { src: gRemateTribuna, alt: 'Lisandro Alzugaray remata con la camiseta granate frente a la tribuna', caption: 'Remate frente a la tribuna', pos: 'center 55%' },
        { src: fotoDisputa, alt: 'Lisandro Alzugaray disputa la pelota entre dos rivales', caption: 'Disputa', pos: 'center 35%' },
        { src: fotoAlternativa, alt: 'Lisandro Alzugaray con la camiseta alternativa de Universitario', caption: 'Camiseta alternativa', pos: 'center 35%' },
        { src: gCredencial, alt: 'Retrato de Lisandro Alzugaray con la chomba de Universitario y la credencial', caption: 'Con la credencial del club', pos: 'center 25%' },
        { src: gViajePlantel, alt: 'Lisandro Alzugaray de viaje con la ropa del club', caption: 'De viaje con el plantel', pos: 'center 30%' },
        { src: gPelotaParadaTribuna, alt: 'Lisandro Alzugaray prepara una pelota parada con la hinchada de Universitario de fondo', caption: 'Pelota parada con la tribuna de fondo', pos: 'center 55%' },
        { src: gFormacionLiga1, alt: 'El equipo de Universitario formado antes de un partido del Apertura de la Liga 1', caption: 'Formación · Liga 1 Apertura', pos: 'center 45%' },
      ],
    },
    {
      key: 'entrenamiento',
      name: 'Entrenamiento',
      photos: [
        { src: gEntradaCalorPechera, alt: 'Lisandro Alzugaray en la entrada en calor con pechera naranja', caption: 'Entrada en calor', pos: 'center 30%' },
        { src: gEntrenamientoPelota, alt: 'Lisandro Alzugaray entrena con la pelota en el predio del club', caption: 'Entrenamiento con pelota', pos: 'center 40%' },
        { src: gElongacionPlantel, alt: 'Lisandro Alzugaray elonga con el plantel durante un entrenamiento', caption: 'Elongación con el plantel', pos: 'center 45%' },
        { src: fotoEntrenamiento, alt: 'Lisandro Alzugaray en la entrada en calor con pechera', caption: 'Entrada en calor', pos: 'center 22%' },
      ],
    },
  ],

  contactIntro: 'Seguilo en sus redes o escribí directamente a quien lleva cada tema.',

  // Redes del jugador. note = texto chico debajo del usuario
  socialMedia: [
    {
      label: 'Instagram',
      icon: FaInstagram,
      iconBg: FaInstagram,
      handle: '@lisandroalzugaray',
      note: 'Su cuenta personal',
      url: 'https://www.instagram.com/lisandroalzugaray/',
      hoverColor: '#E1306C',
      hoverGradient: 'insta-gradient',
    },
    {
      label: 'TransferMarkt',
      image: logoTransfermarkt,
      iconBg: IoMdStats,
      handle: 'lisandro-alzugaray',
      note: 'Ficha y valor de mercado',
      url: 'https://www.transfermarkt.com.ar/lisandro-alzugaray/profil/spieler/396920',
      hoverColor: 'brand.amber',
    },
  ],

  // Representación. forWhom = para qué escribirle; cta = texto del botón
  contact: [
    {
      title:      'Representación deportiva',
      label:      'Moon Sports Group',
      image:      logoMoonSports,
      handle:     '@moonsportsgroup_',
      forWhom:    'clubes, intermediarios y propuestas deportivas',
      cta:        'Escribir a Moon Sports',
      url:        'https://www.instagram.com/moonsportsgroup_/',
      hoverColor: 'rgba(189,167,142,0.30)',
    },
    {
      title:      'Marketing y marcas',
      label:      'LED Sports Marketing',
      image:      logoLedSports,
      handle:     '@_ledsports',
      forWhom:    'marcas, campañas, eventos y prensa',
      cta:        'Escribir a LED Sports',
      url:        'https://www.instagram.com/_ledsports/',
      hoverColor: 'rgba(122,31,31,0.40)',
    },
  ],
}
