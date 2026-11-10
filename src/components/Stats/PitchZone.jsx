import { Box, useToken } from '@chakra-ui/react'
import { playerData } from '../../data/playerData'

// Cancha vertical (ataca hacia arriba) con la zona de influencia del jugador.
// Las elipses con data-heat las anima StatsSection al entrar en pantalla.
export default function PitchZone() {
  const [amber, dorado, granate, cream] = useToken('colors', ['brand.amber', 'brand.dorado', 'brand.amberDark', 'brand.cream'])
  const { main, secondary, label } = playerData.pitchZone
  const line = 'rgba(255,255,255,.18)'

  return (
    <Box as="svg" viewBox="0 0 68 105" display="block" w="min(100%, 250px)" mx="auto" role="img"
         aria-label={`Zona de influencia de ${playerData.shortName}: ${label}`}>
      <defs>
        <radialGradient id="heat-main"><stop offset="0" stopColor={amber} stopOpacity=".95" /><stop offset="1" stopColor={amber} stopOpacity="0" /></radialGradient>
        <radialGradient id="heat-sec"><stop offset="0" stopColor={dorado} stopOpacity=".55" /><stop offset="1" stopColor={dorado} stopOpacity="0" /></radialGradient>
      </defs>
      <rect x="1" y="1" width="66" height="103" rx="3" fill="#1a1b1c" stroke="rgba(255,255,255,.22)" strokeWidth=".6" />
      <g fill="none" stroke={line} strokeWidth=".5">
        <line x1="1" y1="52.5" x2="67" y2="52.5" />
        <circle cx="34" cy="52.5" r="9" />
        <rect x="14" y="1" width="40" height="16" /><rect x="25" y="1" width="18" height="6" />
        <rect x="14" y="88" width="40" height="16" /><rect x="25" y="98" width="18" height="6" />
      </g>
      <g data-heat="" style={{ transformOrigin: `${main.x}px ${main.y}px` }}>
        <ellipse cx={main.x} cy={main.y} rx={main.rx} ry={main.ry} fill="url(#heat-main)" />
        {secondary.map((z, i) => (
          <ellipse key={i} cx={z.x} cy={z.y} rx={z.rx} ry={z.ry} fill="url(#heat-sec)" />
        ))}
      </g>
      <circle cx={main.x} cy={main.y} r="4.2" fill={granate} stroke={cream} strokeWidth=".7" />
      <text x={main.x} y={main.y + 1.6} textAnchor="middle" fontFamily="Bebas Neue" fontSize="4.6" fill="#fff">
        {playerData.number}
      </text>
    </Box>
  )
}
