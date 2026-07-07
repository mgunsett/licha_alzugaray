import { FaInstagram, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoMdStats } from 'react-icons/io'

//Hero
import polaco1 from '@assets/polaco1.png'

import argentina from '@assets/argentina.webp'
import universitario from '@assets/escudo_univ.webp'
//Escudos trayectoria
import escudoIndependiente from '@assets/escudos/escudo_indmedellin.webp'
import escudoNewells from '@assets/escudos/escudo_newells.webp'
import escudoSanlorenzo from '@assets/escudos/escudo_sanlorenzo.webp'
import escudoBarcelona from '@assets/escudos/escudo_barcelona.webp'
import escudoPortoviejo from '@assets/escudos/escudo_portoviejo.webp'
import escudoLugo from '@assets/escudos/escudo_lugo.webp'
import escudoArgentinos from '@assets/escudos/escudo_argentinos.webp'
import escudoAntofagasta from '@assets/escudos/escudo_antofagasta.webp'
import escudoVilladalmine from '@assets/escudos/escudo_villadalmine.webp'
import escudoAucas from '@assets/escudos/escudo_aucas.webp'
//Gallery
import image1 from '@assets/gallery/image1.webp'
import image2 from '@assets/gallery/image2.webp'
import image3 from '@assets/gallery/image3.webp'
import image4 from '@assets/gallery/image4.webp'
import image5 from '@assets/gallery/image5.webp'
import image6 from '@assets/gallery/image6.webp'
import image7 from '@assets/gallery/image7.webp'
//Video
import photoGraph from '@assets/perfil_video.webp'
//Prensa
import logo1 from '@assets/logos/logo1.webp'
import logo2 from '@assets/logos/logo2.webp'
import logo3 from '@assets/logos/logo3.webp'
//Redes
import transfermkt from '@assets/contact2.svg'
import ledsports from '@assets/contact3.webp'
import moon from '@assets/contact4.webp'


const name = 'LISANDRO'
const fullName = 'ALZUGARAY'

export const playerData = {
  name,
  fullName,
  initials: `${name[0]}${fullName[0]}`, // iniciales para logos (PF)
  displayName: `${name} ${fullName}`,   // nombre completo para textos legales / alt
  number: 30,
  position: 'Mediocampista',
  positionShort: 'MID',
  nationality: 'Argentina',
  nationalityFlag: argentina,
  age: 36,
  height: '1.70m',
  weight: '70kg',
  foot: 'Izquierdo',
  birthDate: '17 / 04 / 1990',
  birthPlace: 'Viale, Argentina',
  currentClub: 'Universitario',
  logoCurrentClub: universitario,
  image: polaco1,
  

  stats: [
    { label: 'Velocidad',      value: 91 },
    { label: 'Definición',     value: 88 },
    { label: 'Regate',         value: 84 },
    { label: 'Juego Aéreo',    value: 75 },
    { label: 'Presión Alta',   value: 82 },
    { label: 'Visión de Juego',value: 79 },
  ],

  seasonStats: [
    { label: 'Partidos',    value: 19 },
    { label: 'Goles',       value: 3 },
    { label: 'Asistencias', value: 2  },
    { label: 'Tiros al árco', value: 28  },
    { label: 'Min / Part.', value: "1,470'" },
    { label: 'Valoración', value: 7.4  },

  ],

  clubs: [
    {
      name:    'Universitario',
      country: 'Perú',
      years:   '2026 — Actualidad',
      logo:    universitario,
      titles:  [],
      info:    '',
    },
    {
      name:    'Independiente Medellín',
      country: 'Colombia',
      years:   '2025 — 2026',
      logo:    escudoIndependiente,
      titles:  [],
      info:    'Goleador del Torneo Finalización (12 goles)',
    },
    {
      name:    'San Lorenzo',
      country: 'Argentina',
      years:   '2024',
      logo:    escudoSanlorenzo,
      titles:  [],
      info:    '',
    },
    {
      name:    'Barcelona SC',
      country: 'Ecuador',
      years:   '2023 — 2024',
      logo:    escudoBarcelona,
      titles:  [],
      info:    '',
    },
    {
      name:    'Aucas',
      country: 'Ecuador',
      years:   '2021 — 2022',
      logo:    escudoAucas,
      titles:  ['Serie A Ecuador 2022'],
      info:    ['Goleador del Torneo (15 goles)', 'Goleador de la Copa Colombia (5 goles)'],
    },
    {
      name:    'Liga Portoviejo',
      country: 'Ecuador',
      years:   '2020',
      logo:    escudoPortoviejo,
      titles:  [],
      info:    'Máximo goleador del Equipo (13 goles)',
    },
    {
      name:    'Newell\'s Old Boys',
      country: 'Argentina',
      years:   '2018 — 2019',
      logo:    escudoNewells,
      titles:  [],
      info:    '',
    },
    {
      name:    'C.D. Lugo',
      country: 'España',
      years:   '2017 — 2018',
      logo:    escudoLugo,
      titles:  [],
      info:    '',
    },
    {
      name:    'Argentinos Juniors',
      country: 'Argentina',
      years:   '2016 — 2017',
      logo:    escudoArgentinos,
      titles:  ['Ascenso a Primera División 2016'],
      info:    ['Préstamo', 'Máximo goleador del Equipo (13 goles)'],
    },
    {
      name:    'Villa Dálmine',
      country: 'Argentina',
      years:   '2015',
      logo:    escudoVilladalmine,
      titles:  [],
      info:    '',
    },
    {
      name:    'Newell\'s Old Boys',
      country: 'Argentina',
      years:   '2014 — 2015',
      logo:    escudoNewells,
      titles:  [],
      info:    'Inferiores y debut en Primera División',
    },
  ],

  videos: [
    {
      id: 'v1',
      title: 'Platense 2025',
      fullTitle: 'Polaco Fydriszewski | Temporada 2025 [Highlights]',
      youtubeId: 'UjDETwXdC9w',
      duration: '4:01',
      season: 'Temporada',
      league: 'Liga Dimayor Colombia 2025',
      thumbnail: photoGraph,
      cover: photoGraph,
      category: 'Highlights',
    },
  ],

  press: [
    {
      media: 'ESPN Deportes',
      logo:  logo1,
      title: 'Fydriszewski marcó golazo agónico en Medellín vs. Juventud de Libertadores',
      date:  'Marzo 2026',
      url:   'https://espndeportes.espn.com/futbol/copa-libertadores/nota/_/id/16429009/medellin-vs-juventud-fydriszewski-video-goles-copa-libertadores',
    },
    {
      media: 'InfoBae',
      logo:  logo2,
      title: 'Cusco FC sufrió gol agónico de Fydriszewski con el que perdió a manos de Independiente por Copa Libertadores',
      date:  'Mayo 2026',
      url:   'https://www.infobae.com/peru/deportes/2026/05/01/cusco-fc-sufrio-gol-agonico-de-francisco-fydriszewski-con-el-que-perdio-a-manos-de-independiente-medellin-por-fecha-3-de-copa-libertadores-2026/',
    },
    {
      media: 'AS Colombia',
      logo:  logo3,
      title: 'Fydriszewski y su sueño con el DIM: “Estamos para jugar la final y levantar el título”',
      date:  'Octubre 2025',
      url:   'https://colombia.as.com/futbol/fydriszewski-y-su-sueno-con-el-dim-estamos-para-jugar-la-final-y-levantar-el-titulo-f202510-n/',
    },
  ],

  gallery: [
    { id: 1, src: image1, alt: 'Francisco Fydriszewski', caption: 'Liga Profesional 2024', category: 'Partido', aspect: 'wide' },
    { id: 2, src: image2, alt: 'Francisco Fydriszewski', caption: 'Festejo ante Racing',    category: 'Festejo', aspect: 'tall' },
    { id: 3, src: image3, alt: 'Francisco Fydriszewski', caption: 'Pretemporada 2025',       category: 'Entrenamiento', aspect: 'square' },
    { id: 4, src: image4, alt: 'Francisco Fydriszewski', caption: 'Copa Argentina 2024',     category: 'Partido', aspect: 'wide' },
    { id: 5, src: image5, alt: 'Francisco Fydriszewski', caption: 'Plantel Talleres 2024',   category: 'Equipo',  aspect: 'wide' },
    { id: 6, src: image6, alt: 'Francisco Fydriszewski', caption: 'Foto oficial 2024',       category: 'Retrato', aspect: 'tall' },
    { id: 7, src: image7, alt: 'Francisco Fydriszewski', caption: 'Liga Profesional 2025', category: 'Partido', aspect: 'wide' },
  ],

  socialMedia: [
    {
      label: 'Instagram',
      icon: FaInstagram,
      iconBg: FaInstagram,
      handle: '@franciscofydriszewskiok',
      url: 'https://www.instagram.com/franciscofydriszewskiok/',
      hoverColor: '#E1306C',
      hoverGradient: 'insta-gradient',
    },
    {
      label: 'TransferMarkt',
      image: transfermkt,
      iconBg: IoMdStats,
      handle: '@franciscofydriszewski',
      url: 'https://www.transfermarkt.com.ar/francisco-fydriszewski/profil/spieler/337921',
      hoverColor: 'brand.brownLight',
    },
  ],

  contact: [
    {
      title:      'Representante Deportivo',
      label:      'Moon Sports Group',
      image:       moon,
      handle:     '@moonsportsgroup_',
      url:        'https://www.instagram.com/moonsportsgroup_/',
      hoverColor: 'rgba(139,69,19,0.18)',
    },
    {
      title:      'Contacto Marketing',
      label:      'led sports marketing',
      image: ledsports,
      handle:     '@_ledsports',
      url:        'https://www.instagram.com/_ledsports/',
      hoverColor: 'rgba(212,168,75,0.18)',
    },
  ],
}
