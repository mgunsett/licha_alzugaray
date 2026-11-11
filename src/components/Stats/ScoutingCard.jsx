import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import PitchZone from './PitchZone'
import { playerData } from '../../data/playerData'

const LINE = '1px solid rgba(255,255,255,0.08)'

const Label = (props) => (
  <Text as="span" fontFamily="mono" fontSize="12px" fontWeight="500" letterSpacing="0.08em" color="brand.warmGray" {...props} />
)

const PanelTitle = ({ title, aside }) => (
  <Flex justify="space-between" align="baseline" mb="18px" gap={3}>
    <Text as="h3" fontFamily="heading" fontSize="28px" lineHeight={1} letterSpacing="0.02em">{title}</Text>
    {aside && <Label>{aside}</Label>}
  </Flex>
)

function Profile() {
  const rows = [
    ['Pie hábil', playerData.foot],
    ['Edad', `${playerData.age} años`],
    ['Altura y peso', `${playerData.height.replace('.', ',').replace('m', ' m')} · ${playerData.weight.replace('kg', ' kg')}`],
    ['Origen', playerData.birthPlace],
    ['Club actual', (
      <Flex as="span" align="center" gap={2}>
        <Image src={playerData.logoCurrentClub} alt="" boxSize="20px" objectFit="contain" />
        {playerData.currentClub}
      </Flex>
    )],
  ]
  return (
    <Box>
      <Flex align="center" gap="18px" pb="22px" borderBottom={LINE}>
        <Text as="span" fontFamily="heading" fontSize={{ base: '84px', md: '104px' }} lineHeight={0.8} color="transparent"
              sx={{ WebkitTextStroke: '1.5px var(--chakra-colors-brand-amber)' }} aria-label={`Dorsal ${playerData.number}`}>
          {playerData.number}
        </Text>
        <Box>
          <Text fontFamily="heading" fontSize="32px" lineHeight={0.92} letterSpacing="0.02em" textTransform="uppercase">
            {playerData.name.toLowerCase()}<br />{playerData.fullName.toLowerCase()}
          </Text>
          <Text fontFamily="mono" fontWeight="600" fontSize="13px" letterSpacing="0.06em" color="brand.amber" mt="6px">
            {playerData.position}
          </Text>
        </Box>
      </Flex>
      <Box as="dl">
        {rows.map(([k, v]) => (
          <Flex key={k} justify="space-between" align="center" gap={3} py="14px" borderBottom={LINE}>
            <Label as="dt">{k}</Label>
            <Text as="dd" fontFamily="mono" fontWeight="500" fontSize="16px" letterSpacing="0.03em" textAlign="right">{v}</Text>
          </Flex>
        ))}
      </Box>
    </Box>
  )
}

function Zone() {
  return (
    <Box>
      <PanelTitle title="Zona de influencia"  />
      <PitchZone />
      <Flex justify="center" gap="18px" mt="14px" aria-hidden="true">
        <Flex align="center" gap="7px"><Box w="16px" h="6px" borderRadius="3px" bg="brand.amber" /><Label>Zona principal</Label></Flex>
        <Flex align="center" gap="7px"><Box w="16px" h="6px" borderRadius="3px" bg="brand.dorado" opacity={0.7} /><Label>Apariciones</Label></Flex>
      </Flex>
   
    </Box>
  )
}

function Season() {
  const stats = playerData.seasonStats
  return (
    <Box>
      <PanelTitle title={playerData.seasonLabel} aside={playerData.currentClub} />
      <Grid as="dl" templateColumns="1fr 1fr">
        {stats.map((s, i) => {
          const odd = i % 2 === 0
          const lastRow = i >= stats.length - (stats.length % 2 || 2)
          return (
            <Box key={s.label} data-reveal="" pt="16px" pb="18px" pr={odd ? 4 : 0} pl={odd ? 0 : 5}
                 borderRight={odd ? LINE : 'none'} borderBottom={lastRow ? 'none' : LINE}
                 display="flex" flexDirection="column-reverse" justifyContent="flex-end">
              <Label as="dt">{s.label}</Label>
              <Text as="dd" fontFamily="heading" fontSize={{ base: '44px', md: '54px' }} lineHeight={1}
                    color={s.highlight ? 'brand.amber' : 'brand.bone'}>
                {s.value}
              </Text>
            </Box>
          )
        })}
      </Grid>
    </Box>
  )
}

function Attributes() {
  return (
    <Grid templateColumns={{ base: '1fr', lg: '240px 1fr' }} gap={7} px={{ base: 5, md: 8 }} py={7} borderTop={LINE}>
      <Box>
        <Text as="h3" fontFamily="heading" fontSize="28px" lineHeight={1} letterSpacing="0.02em">Atributos</Text>
        
      </Box>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap="20px 32px">
        {playerData.stats.map((a) => (
          <Box key={a.label}>
            <Flex justify="space-between" align="baseline" mb={2}>
              <Label>{a.label}</Label>
              <Text as="span" fontFamily="heading" fontSize="20px" lineHeight={1}>{a.value}</Text>
            </Flex>
            <Grid templateColumns="repeat(10, 1fr)" gap="4px" role="img" aria-label={`${a.label}: ${a.value} de 100`}>
              {Array.from({ length: 10 }, (_, j) => {
                const fill = Math.max(0, Math.min(1, (a.value - j * 10) / 10))
                return (
                  <Box key={j} h="7px" borderRadius="2px" bg="whiteAlpha.100" overflow="hidden">
                    <Box h="100%" bg="brand.amber" transformOrigin="left" data-seg={fill} transform={`scaleX(${fill})`} />
                  </Box>
                )
              })}
            </Grid>
          </Box>
        ))}
      </Grid>
    </Grid>
  )
}

// Ficha de scouting: perfil, zona de influencia, temporada y atributos
export default function ScoutingCard() {
  return (
    <Box data-reveal="" bg="rgba(255,255,255,0.025)" border={LINE} borderRadius="18px">
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1.05fr 1fr 1fr' }}>
        <Box p={{ base: 5, md: 8 }} gridColumn={{ md: '1 / -1', lg: 'auto' }}><Profile /></Box>
        <Box p={{ base: 5, md: 8 }} borderTop={{ base: LINE, lg: 'none' }} borderLeft={{ lg: LINE }}><Zone /></Box>
        <Box p={{ base: 5, md: 8 }} borderTop={{ base: LINE, lg: 'none' }} borderLeft={{ md: LINE }}><Season /></Box>
      </Grid>
      <Attributes />
    </Box>
  )
}
