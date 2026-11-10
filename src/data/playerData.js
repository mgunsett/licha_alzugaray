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

  videos: [
    {
      id: 'v1',
      // instagramId: código del reel. En https://www.instagram.com/reel/DXXXXXXXXXX/ es "DXXXXXXXXXX"
      instagramId: 'DXvelmBtUmJ',
      title: 'Libertadores 26',
      fullTitle: 'Lisandro Alzugaray | Jugadas destacadas 2026',
      season: 'GOL VS NACIONAL',
      league: 'CONMEBOL Libertadores 2026',
      thumbnail: fotoRemate,
      cover: fotoRemate,
      category: 'Highlights',
    },
    {
      id: 'v2',
      instagramId: 'DWEUMU0AL2f',
      title: '2026',
      fullTitle: 'Lisandro Alzugaray | Compilado de goles',
      season: 'Compilado',
      league: 'CONMEBOL Libertadores 2025',
      thumbnail: fotoDisputa,
      cover: fotoDisputa,
      category: 'Goles',
    },
    {
      id: 'v3',
      instagramId: 'DTlGApKkWzo',
      title: 'Temporada 2025',
      fullTitle: 'Lisandro Alzugaray | Asistencias y juego',
      season: 'Liga de Quito',
      league: 'Liga de Quito',
      thumbnail: fotoVsNacional,
      cover: fotoVsNacional,
      category: 'Asistencias',
    },
  ],

  press: [
    {
      media: 'ESPN Deportes',
      logo:  logoEspn,
      title: 'Lisandro Alzugaray volvió con gol clave para Universitario en CONMEBOL Libertadores',
      date:  'Abril 2026',
      url:   'https://espndeportes.espn.com/futbol/copa-libertadores/nota/_/id/16648033/lisandro-alzugaray-volvio-con-gol-clave-para-universitario-en-conmebol-libertadores',
    },
    {
      media: 'CONMEBOL Libertadores',
      logo:  logoConmebol,
      title: '🔥⚽🇵🇪 Un delantero siempre presente en la CONMEBOL #Libertadores: @lisandroalzugaray',
      date:  'Mayo 2026',
      url:   'https://www.instagram.com/p/DYSwt6NDBIC/?hl=es&img_index=4',
    },
    {
      media: 'CONMEBOL Libertadores',
      logo:  logoConmebol,
      title: '¡El equipo de la semana! Lisandro Alzugaray en el 11 ideal tras la semifinal de ida de la CONMEBOL #Libertadores.',
      date:  'Octubre 2025',
      url:   'https://x.com/Libertadores/status/1981820492257669422/photo/1?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1981820492257669422%7Ctwgr%5E81681f2548c9342a151787ad10c31eabb903f3c2%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.teleamazonas.com%2Fdeportes%2Ffutbol%2Flibertadores%2Fseis-futbolistas-liga-quito-equipo-ideal-semana-copa-libertadores-105112%2F',
    },
  ],

  // Las primeras 4 se ven sin abrir "Ver más": van las mejores
  gallery: [
    { id: 1, src: fotoFestejo,       alt: 'Lisandro Alzugaray festeja un gol con Universitario en el Monumental', caption: 'Festejo en el Monumental',   category: 'Universitario', aspect: 'wide' },
    { id: 2, src: fotoRemate,        alt: 'Lisandro Alzugaray remata con la camiseta de Universitario',            caption: 'Remate · Universitario',     category: 'Universitario', aspect: 'tall' },
    { id: 3, src: fotoVsNacional,    alt: 'Lisandro Alzugaray conduce ante Nacional por la Copa Libertadores',     caption: 'Libertadores · vs Nacional', category: 'Universitario', aspect: 'square' },
    { id: 4, src: fotoSalida,        alt: 'Lisandro Alzugaray sale a la cancha con el plantel de Universitario',   caption: 'Salida al campo',            category: 'Universitario', aspect: 'tall' },
    { id: 5, src: fotoConduccion,    alt: 'Lisandro Alzugaray conduce la pelota con el número 30 de Universitario', caption: 'Liga 1 · Universitario',    category: 'Universitario', aspect: 'tall' },
    { id: 6, src: fotoDisputa,       alt: 'Lisandro Alzugaray disputa la pelota entre dos rivales',                caption: 'Disputa · Universitario',    category: 'Universitario', aspect: 'tall' },
    { id: 7, src: fotoAlternativa,   alt: 'Lisandro Alzugaray con la camiseta alternativa de Universitario',       caption: 'Camiseta alternativa',       category: 'Universitario', aspect: 'square' },
    { id: 8, src: fotoEntrenamiento, alt: 'Lisandro Alzugaray en la entrada en calor con pechera',                 caption: 'Entrada en calor',           category: 'Entrenamiento', aspect: 'wide' },
  ],

  socialMedia: [
    {
      label: 'Instagram',
      icon: FaInstagram,
      iconBg: FaInstagram,
      handle: '@lisandroalzugaray',
      url: 'https://www.instagram.com/lisandroalzugaray/',
      hoverColor: '#E1306C',
      hoverGradient: 'insta-gradient',
    },
    {
      label: 'TransferMarkt',
      image: logoTransfermarkt,
      iconBg: IoMdStats,
      handle: '@lisandro-alzugaray',
      url: 'https://www.transfermarkt.com.ar/lisandro-alzugaray/profil/spieler/396920',
      hoverColor: 'brand.brownLight',
    },
  ],

  contact: [
    {
      title:      'Representante Deportivo',
      label:      'Moon Sports Group',
      image:      logoMoonSports,
      handle:     '@moonsportsgroup_',
      url:        'https://www.instagram.com/moonsportsgroup_/',
      hoverColor: 'rgba(139,69,19,0.18)',
    },
    {
      title:      'Contacto Marketing',
      label:      'led sports marketing',
      image:      logoLedSports,
      handle:     '@_ledsports',
      url:        'https://www.instagram.com/_ledsports/',
      hoverColor: 'rgba(212,168,75,0.18)',
    },
  ],
}
