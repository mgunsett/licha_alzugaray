import { useEffect, useRef, useState } from 'react'
import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { playerData } from '../../data/playerData'

const LINE = '1px solid rgba(255,255,255,0.08)'
const EASE = 'cubic-bezier(0.23, 1, 0.32, 1)'
const HOVER = '@media (hover: hover) and (pointer: fine)'

const clubsById = Object.fromEntries(playerData.clubs.map((c) => [c.id, c]))
const stops = playerData.career.map((s) => ({ ...s, ...clubsById[s.club] }))
const countries = playerData.countries
const nCountries = new Set(playerData.clubs.map((c) => c.country)).size
// Países en el orden en que aparecen en el recorrido (del actual al primero)
const legend = [...new Set(stops.map((s) => s.country))]
// Club que se muestra al principio: el de más títulos (si no hay, el actual)
const initial = [...playerData.clubs].sort((a, b) => b.titles.length - a.titles.length)[0]?.titles.length
  ? [...playerData.clubs].sort((a, b) => b.titles.length - a.titles.length)[0].id
  : playerData.clubs[0].id

const prefersReduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function Detail({ club }) {
  const lists = [
    club.titles.length > 0 && { label: 'Títulos', items: club.titles, mark: '★', color: 'brand.dorado', textColor: 'brand.bone' },
    club.distinctions.length > 0 && { label: 'Distinciones', items: club.distinctions, mark: '○', color: 'brand.warmGray', textColor: 'brand.warmGray' },
  ].filter(Boolean)

  return (
    <Grid templateColumns={{ base: '1fr', md: lists.length ? '1.1fr 1fr 1fr' : '1fr' }} gap={{ base: 5, md: 7 }} alignItems="start">
      <Box>
        <Text as="h4" fontFamily="heading" fontSize={{ base: '36px', md: '44px' }} lineHeight={0.9}>{club.name}</Text>
        <Text mt={2} fontFamily="mono" fontWeight="600" fontSize="14px" letterSpacing="0.04em" color="brand.amber">
          {club.years}
          <Box as="span" color="brand.warmGray" ml={3}>{club.country}</Box>
        </Text>
      </Box>
      {lists.map((l) => (
        <Box key={l.label}>
          <Text fontFamily="mono" fontSize="12px" fontWeight="500" letterSpacing="0.08em" color="brand.warmGray" mb={1}>{l.label}</Text>
          <Box as="ul" listStyleType="none">
            {l.items.map((it) => (
              <Flex as="li" key={it} gap="10px" lineHeight={1.6} fontSize="15px" color={l.textColor}>
                <Box as="span" color={l.color} aria-hidden="true">{l.mark}</Box>{it}
              </Flex>
            ))}
          </Box>
        </Box>
      ))}
    </Grid>
  )
}

// Recorrido de clubes: del club actual al primero, en un riel horizontal
export default function ClubRoute() {
  const [selected, setSelected] = useState(initial)
  const [shown, setShown]       = useState(initial)
  const [fading, setFading]     = useState(false)
  const [edges, setEdges]       = useState({ start: true, end: false })
  const railRef = useRef(null)

  // Cambio de club con un fundido corto del detalle
  useEffect(() => {
    if (selected === shown) return
    if (prefersReduced()) { setShown(selected); return }
    setFading(true)
    const t = setTimeout(() => { setShown(selected); setFading(false) }, 150)
    return () => clearTimeout(t)
  }, [selected, shown])

  const updateEdges = () => {
    const r = railRef.current
    if (!r) return
    setEdges({ start: r.scrollLeft < 4, end: r.scrollLeft + r.clientWidth > r.scrollWidth - 4 })
  }
  useEffect(() => {
    updateEdges()
    window.addEventListener('resize', updateEdges)
    return () => window.removeEventListener('resize', updateEdges)
  }, [])

  // Mover el riel con scrollTo (nunca scrollIntoView: desplaza la página)
  const move = (dir) => {
    const r = railRef.current
    r.scrollTo({ left: r.scrollLeft + dir * r.clientWidth * 0.8, behavior: prefersReduced() ? 'auto' : 'smooth' })
  }

  const arrowBtn = (dir, disabled, label) => (
    <Flex as="button" type="button" onClick={() => move(dir)} disabled={disabled} aria-label={label}
          w="40px" h="40px" borderRadius="full" border="1px solid" borderColor="brand.amberLight"
          align="center" justify="center" color="brand.cream" opacity={disabled ? 0.3 : 1}
          cursor={disabled ? 'default' : 'pointer'} transition="background .25s, opacity .25s"
          sx={{ [HOVER]: { '&:not(:disabled):hover': { bg: 'rgba(189,167,142,0.08)' } } }}
          _focusVisible={{ outline: '2px solid', outlineColor: 'brand.amber', outlineOffset: '2px' }}>
      {dir < 0 ? <FiArrowLeft /> : <FiArrowRight />}
    </Flex>
  )

  return (
    <Box mt={{ base: 16, md: 20 }}>
      <Flex justify="space-between" align="flex-end" gap={6} wrap="wrap" mb={6} data-reveal="">
        <Box>
          <Text fontFamily="mono" fontSize="12px" fontWeight="500" letterSpacing="0.3em" textTransform="uppercase" color="brand.cream">
            clubes
          </Text>
          <Text as="h3" fontFamily="heading" fontSize={{ base: '56px', md: '7vw', xl: '96px' }} lineHeight={0.88} mt="6px">
            Trayectoria
          </Text>
        </Box>
        <Flex gap={6} align="center" wrap="wrap">
          
          <Flex gap={2}>
            {arrowBtn(-1, edges.start, 'Clubes más recientes')}
            {arrowBtn(1, edges.end, 'Clubes anteriores')}
          </Flex>
        </Flex>
      </Flex>

      {/* Riel: del actual (izquierda) al primero (derecha) */}
      <Box
        ref={railRef}
        as="ol"
        aria-label="Clubes, del actual al primero"
        listStyleType="none"
        display="flex"
        overflowX="auto"
        onScroll={updateEdges}
        data-reveal=""
        pt="6px"
        pb={1}
        sx={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}
      >
        {stops.map((s, i) => {
          const color   = countries[s.country]?.color || '#9b948c'
          const isSel   = s.id === selected
          const isNow   = i === 0
          return (
            <Box as="li" key={`${s.id}-${s.from}`} flex={{ base: '0 0 112px', md: '0 0 132px' }} position="relative" pt="54px" textAlign="center"
                 sx={{ scrollSnapAlign: 'start' }}>
              {/* Tramo de línea en el color del país */}
              <Box position="absolute" top="26px" h="2px" bg={color} left={i === 0 ? '50%' : 0} right={i === stops.length - 1 ? '50%' : 0} aria-hidden="true" />
              <Text position="absolute" left={0} right={0} top={0} fontFamily="mono" fontWeight="600" fontSize="13px" letterSpacing="0.06em" color="brand.warmGray">
                {s.from}
              </Text>
              <Box position="absolute" left="50%" top="19px" w="16px" h="16px" ml="-8px" borderRadius="full" border="2px solid" borderColor={color}
                   bg={isSel ? color : 'brand.panel'} transform={isSel ? 'scale(1.25)' : 'none'} transition={`transform .3s ${EASE}, background .3s`} aria-hidden="true" />
              {s.titles.length > 0 && (
                <Text position="absolute" left="50%" top="-2px" transform="translateX(24px)" color="brand.dorado" fontSize="13px" letterSpacing="1px" aria-hidden="true">
                  {'★'.repeat(s.titles.length)}
                </Text>
              )}
              <Flex
                as="button"
                type="button"
                onClick={() => setSelected(s.id)}
                aria-pressed={isSel}
                aria-label={`${s.name}, desde ${s.from}${s.titles.length ? `, ${s.titles.length} títulos` : ''}`}
                w="100%"
                direction="column"
                align="center"
                gap={2}
                px="6px"
                pt={3}
                pb="14px"
                borderRadius="14px"
                bg={isSel ? 'rgba(122,31,31,0.3)' : 'transparent'}
                transition="background .25s"
                sx={{ [HOVER]: { '&:not([aria-pressed="true"]):hover': { bg: 'rgba(189,167,142,0.08)' } } }}
                _focusVisible={{ outline: '2px solid', outlineColor: 'brand.amber', outlineOffset: '-2px' }}
              >
                <Image src={s.logo} alt="" boxSize="42px" objectFit="contain" />
                <Text as="span" fontFamily="heading" fontSize="18px" lineHeight={1.05} letterSpacing="0.02em" color={isNow ? 'brand.amber' : 'brand.bone'}>
                  {s.short}
                </Text>
                <Text as="span" fontFamily="mono" fontWeight="600" fontSize="11px" letterSpacing="0.14em" color="brand.warmGray">
                  {countries[s.country]?.code}
                </Text>
              </Flex>
            </Box>
          )
        })}
      </Box>

      {/* Detalle del club elegido */}
      <Box data-reveal="" mt="18px" p={{ base: 5, md: '28px 30px' }} bg="rgba(255,255,255,0.025)" border={LINE} borderRadius="18px" aria-live="polite">
        <Box opacity={fading ? 0 : 1} transform={fading ? 'translateY(6px)' : 'none'} transition={`opacity .3s ${EASE}, transform .3s ${EASE}`}>
          <Detail club={clubsById[shown]} />
        </Box>
      </Box>
    </Box>
  )
}
