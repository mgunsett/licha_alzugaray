import { extendTheme } from '@chakra-ui/react'

// Paleta de marca — fuente única de verdad para los colores del proyecto
const brand = {
  brown:      '#141516', // azul principal
  brownDark:  '#0B2A4A', // azul profundo
  brownLight: '#4D93D6', // azul claro
  amber:      '#bda78e', // detalle rojizo/dorado
  amber2:     '#993f3f8e',
  amberDark:  '#7A1F1F', // detalle rojizo/dorado oscuro
  amberLight: '#695947', // detalle rojizo/dorado claro
  dorado:     '#c0ab32', // dorado
  orange:     '#a36b2c', // naranja (hover de botones)
  orangeDark: '#7a4e1f', // naranja oscuro (hover de botones)
  orangeLight:'#c08b4a', // naranja claro (hover de botones)
  dark:       '#532626', // azul casi negro (fondo)
  dark3:      '#232424a1',
  dark2:      '#a5a4a4',
  gray:       '#7A8CA3', // azul grisáceo (texto secundario)
  gray2:      '#232424',
  bone:       '#FFFFFF', // blanco (texto principal)
  boneWarm:   '#3083e2', // blanco azulado (detalles)
  accent:     '#1E5FA8', // azul de acento (glows, scrollbar, gradientes)
  accentMid:  '#1460B1', // azul medio (gradiente de barras)
  accentDeep: '#0B478B', // azul profundo (gradiente de barras)
  darker:     '#050810', // fondo del footer (más oscuro que dark)
  panel:      '#070F1A', // fondo de tarjetas / paneles
  night:      '#03060A', // casi negro (marco de video)
  deep:       '#080C12', // fondo de la sección de contacto
  rec:        '#E5484D', // rojo del indicador REC
  rose:       '#EC8496', // rosa del hover de cerrar en el lightbox
}

// Colores de la firma del desarrollador (crédito en el footer)
const dev = {
  green: '#2D5A47',
  cream: '#E8D5A3',
}

const theme = extendTheme({
  colors: { brand, dev },
  fonts: {
    heading:   `'Bebas Neue', sans-serif`,
    body:      `'Barlow', sans-serif`,
    mono:      `'Barlow Condensed', sans-serif`,
  },
  styles: {
    global: {
      'html, body': {
        bg: brand.dark,
        color: 'white',
        overflowX: 'hidden',
      },
      '::-webkit-scrollbar': { width: '4px' },
      '::-webkit-scrollbar-track': { bg: brand.dark },
      '::-webkit-scrollbar-thumb': { bg: brand.accent, borderRadius: '2px' },
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
})

export default theme
