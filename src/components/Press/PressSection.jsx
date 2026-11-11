// ─────────────────────────────────────────────────────────────
// Prensa — Citas: un titular a la vez en tipografía grande y,
// debajo, los medios como pestañas para cambiar de nota.
// ─────────────────────────────────────────────────────────────
import { useEffect, useRef, useState } from 'react'
import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'
import useScrubReveal from '../../hooks/useScrubReveal'
import { playerData } from '../../data/playerData'

const PRESS = playerData.press
const EASE = 'cubic-bezier(0.23, 1, 0.32, 1)'
const HOVER = '@media (hover: hover) and (pointer: fine)'
const focusRing = { outline: '2px solid', outlineColor: 'brand.amber', outlineOffset: '3px' }

const prefersReduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function PressSection() {
  const sectionRef = useRef(null)
  const titleRef   = useRef(null)
  const tabsRef    = useRef(null)
  const [selected, setSelected] = useState(0)
  const [shown, setShown]       = useState(0)
  const [fading, setFading]     = useState(false)

  useScrubReveal(sectionRef, {
    elements: [{ ref: titleRef, fromVars: { y: 50, opacity: 0 }, vars: { y: 0, opacity: 1 } }],
    start: 'top 80%',
    end:   'top 40%',
  })

  // Cambio de nota con un fundido corto del titular
  useEffect(() => {
    if (selected === shown) return
    if (prefersReduced()) { setShown(selected); return }
    setFading(true)
    const t = setTimeout(() => { setShown(selected); setFading(false) }, 200)
    return () => clearTimeout(t)
  }, [selected, shown])

  if (!PRESS.length) return null

  const select = (i, focus) => {
    const n = (i + PRESS.length) % PRESS.length
    setSelected(n)
    if (focus) tabsRef.current?.querySelectorAll('[role="tab"]')[n]?.focus()
  }

  const note = PRESS[shown]
  const swap = {
    opacity: fading ? 0 : 1,
    transform: fading ? 'translateY(8px)' : 'none',
    transition: `opacity .35s ${EASE}, transform .35s ${EASE}`,
  }

  return (
    <Box
      as="section"
      id="prensa"
      ref={sectionRef}
      aria-labelledby="prensa-title"
      bg="brand.dark"
      py={{ base: 16, lg: 24 }}
      px={{ base: 4, md: 8, lg: 14 }}
    >
      <Box maxW="1320px" mx="auto">
        {/* Header */}
        <Flex ref={titleRef} justify="space-between" align="flex-end" gap={6} wrap="wrap" mb={{ base: 8, md: 10 }}>
          <Box>
            <Text fontFamily="mono" fontSize="12px" fontWeight="500" color="brand.cream" textTransform="uppercase" letterSpacing="0.3em">
              Medios
            </Text>
            <Text as="h2" id="prensa-title" fontFamily="heading" fontSize={{ base: '56px', md: '7vw', xl: '96px' }}
                  color="brand.amber" lineHeight={0.88} mt="6px">
              Prensa
            </Text>
          </Box>
          {playerData.pressIntro && (
            <Text maxW="42ch" color="brand.warmGray" lineHeight={1.6} fontSize="15px">{playerData.pressIntro}</Text>
          )}
        </Flex>

        {/* Cita */}
        <Box
          id="prensa-panel"
          role="tabpanel"
          aria-labelledby={`prensa-tab-${shown}`}
          aria-live="polite"
          position="relative"
          minH={{ md: '300px' }}
          pt={{ base: '56px', md: '10px' }}
          pl={{ base: 0, md: 'clamp(0px, 5vw, 90px)' }}
        >
          <Text aria-hidden="true" position="absolute" left={0} top={{ base: '-6px', md: '-10px' }}
                fontFamily="heading" fontSize={{ base: '110px', md: 'clamp(110px, 14vw, 200px)' }} lineHeight={0.8} color="brand.amberDark">
            “
          </Text>
          <Box as="blockquote" position="relative" m={0}>
            <Text fontFamily="heading" fontSize={{ base: '38px', md: 'clamp(38px, 5.4vw, 78px)' }} lineHeight={0.96}
                  letterSpacing="0.005em" sx={{ textWrap: 'balance', ...swap }}>
              {note.title}
            </Text>
          </Box>
          <Flex wrap="wrap" align="center" gap="12px 18px" mt={6} sx={swap}>
            <Text as="cite" fontStyle="normal" fontFamily="mono" fontWeight={600} fontSize="15px" letterSpacing="0.04em">
              {note.media}
            </Text>
            <Text fontFamily="mono" fontSize="12px" fontWeight={500} letterSpacing="0.08em" color="brand.amber">
              {note.type} · {note.date}
            </Text>
            <Flex
              as="a"
              href={note.url}
              target="_blank"
              rel="noopener noreferrer"
              align="center"
              gap="6px"
              px={4}
              py="9px"
              borderRadius="full"
              border="1px solid"
              borderColor="brand.amberLight"
              fontFamily="mono"
              fontWeight={600}
              fontSize="13px"
              letterSpacing="0.08em"
              color="brand.cream"
              transition="background .25s"
              sx={{ [HOVER]: { '&:hover': { bg: 'rgba(189,167,142,0.08)' } } }}
              _focusVisible={focusRing}
            >
              {note.cta || 'Ver'} <Box as={FiArrowUpRight} aria-hidden="true" />
              <Box as="span" srOnly>(se abre en otra pestaña)</Box>
            </Flex>
          </Flex>
        </Box>

        {/* Medios: pestañas para cambiar de nota */}
        <Grid
          ref={tabsRef}
          role="tablist"
          aria-label="Notas de prensa"
          templateColumns={{ base: '1fr', md: `repeat(${Math.min(PRESS.length, 4)}, minmax(0, 1fr))` }}
          mt={{ base: 8, md: 10 }}
          borderTop="1px solid"
          borderColor="whiteAlpha.100"
          onKeyDown={(e) => {
            const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]
            if (d) { e.preventDefault(); select(selected + d, true) }
          }}
        >
          {PRESS.map((p, i) => {
            const on = i === selected
            return (
              <Flex
                key={p.url}
                as="button"
                type="button"
                role="tab"
                id={`prensa-tab-${i}`}
                aria-selected={on}
                aria-controls="prensa-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => select(i)}
                position="relative"
                align="center"
                gap={3}
                textAlign="left"
                py={{ base: '14px', md: '18px' }}
                pl={{ base: '14px', md: 0 }}
                pr={4}
                borderBottom={{ base: '1px solid', md: 'none' }}
                borderColor="whiteAlpha.100"
                color={on ? 'brand.bone' : 'brand.warmGray'}
                transition="color .25s"
                _focusVisible={focusRing}
                sx={{
                  [HOVER]: { '&:hover': { color: 'brand.bone' } },
                  // Indicador: arriba en desktop, a la izquierda en mobile
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    bg: 'brand.amber',
                    transition: `transform .45s ${EASE}`,
                    left: 0,
                    top: { base: 0, md: '-1px' },
                    bottom: { base: 0, md: 'auto' },
                    right: { base: 'auto', md: 4 },
                    width: { base: '3px', md: 'auto' },
                    height: { base: 'auto', md: '2px' },
                    transformOrigin: { base: 'top', md: 'left' },
                    transform: on ? 'none' : { base: 'scaleY(0)', md: 'scaleX(0)' },
                  },
                }}
              >
                <Image src={p.logo} alt="" boxSize="34px" borderRadius="8px" objectFit="contain" bg="white"
                       opacity={on ? 1 : 0.6} transition="opacity .25s" flexShrink={0} />
                <Box minW={0}>
                  <Text fontFamily="mono" fontWeight={600} fontSize="14px" letterSpacing="0.03em">{p.media}</Text>
                  <Text fontFamily="mono" fontSize="12px" fontWeight={500} color="brand.warmGray" mt="2px">
                    {p.type} · {p.date}
                  </Text>
                </Box>
              </Flex>
            )
          })}
        </Grid>
      </Box>
    </Box>
  )
}
