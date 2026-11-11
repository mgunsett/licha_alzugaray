import { useRef, useEffect } from 'react'
import { Box, Heading, Image, Text } from '@chakra-ui/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'
import ResultsBar from './ResultsBar'
import { playerData } from '../../data/playerData'
import useMatches from '../../hooks/useMatches'
import { u, LANDSCAPE, heroUnitVars, SV_VARS } from '../../utils/heroUnits'

gsap.registerPlugin(ScrollTrigger, CustomEase)
const EASE = CustomEase.create('heroOut', '0.23, 1, 0.32, 1')

const STAGE_BG = '#0d0d0e'

// Oscurece el lado del texto (desktop) o la parte baja (mobile) para que el nombre se lea
const SHADE = {
  base: `linear-gradient(0deg, rgba(13,13,14,.97) 0%, rgba(13,13,14,.7) 38%, rgba(13,13,14,.1) 70%, rgba(13,13,14,.45) 100%)`,
  md: `linear-gradient(90deg, rgba(13,13,14,.97) 0%, rgba(13,13,14,.9) 38%, rgba(13,13,14,.35) 60%, rgba(13,13,14,0) 80%),
       linear-gradient(0deg, rgba(13,13,14,.95) 0%, transparent 45%)`,
}

export default function Hero() {
  const outerRef  = useRef(null)
  const zoomRef   = useRef(null)
  const photoRef  = useRef(null)
  const textRef   = useRef(null)
  const backRef   = useRef(null)
  const barRef    = useRef(null)
  const fadeRefs  = useRef([])
  const lineRefs  = useRef([])
  const dimRef    = useRef(null)
  const sideRef   = useRef(null)
  const barInRef  = useRef(null)
  const { matches } = useMatches()

  const addFade = (el) => { if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el) }
  const addLine = (el) => { if (el && !lineRefs.current.includes(el)) lineRefs.current.push(el) }

  // Entrada: foto que se asienta, nombre que sube línea por línea y datos que aparecen
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(photoRef.current, { opacity: 0.95, rotation: 0, scaleX: -1, scaleY: 1 })
        gsap.set(backRef.current, { xPercent: -50, opacity: 1 })
        gsap.set([...lineRefs.current, ...fadeRefs.current, barInRef.current], { opacity: 1, yPercent: 0, y: 0 })
        gsap.set(sideRef.current, { opacity: 1 })
        return
      }
      const tl = gsap.timeline({ defaults: { ease: EASE } })
      tl.fromTo(photoRef.current,
          { opacity: 0, rotation: 0, scaleX: -1.1, scaleY: 1.1 },
          { opacity: 0.95, rotation: 0, scaleX: 1, scaleY: 1, duration: 2 }, 0)
        .fromTo(lineRefs.current,
          { yPercent: 105 },
          { yPercent: 0, duration: 1.1, stagger: 0.1 }, 0.25)
        .fromTo(backRef.current,
          { opacity: 0, xPercent: -50, y: 24 },
          { opacity: 1, xPercent: -50, y: 0, duration: 1.4 }, 0.3)
        .fromTo([...fadeRefs.current, barInRef.current],
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.06 }, 0.5)
        .fromTo(sideRef.current, { opacity: 0 }, { opacity: 1, duration: 0.9 }, 0.6)
    }, outerRef)
    return () => ctx.revert()
  }, [])

  // Salida con el scroll: una sola animación coordinada mientras el Hero está fijo
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const ctx = gsap.context(() => {
      gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: { trigger: outerRef.current, start: 'top top', end: '+=100%', scrub: 0.6 },
      })
        .to(zoomRef.current, { scale: 1.08 }, 0)
        .to(textRef.current, { yPercent: -35, opacity: 0 }, 0)
        .to(barRef.current, { opacity: 0 }, 0)
        .to(dimRef.current, { opacity: 0.85 }, 0)
    }, outerRef)
    return () => ctx.revert()
  }, [matches.last, matches.next])

  return (
    <Box
      as="section"
      id="hero"
      ref={outerRef}
      position="relative"
      zIndex={1}
      h="calc(200 * var(--sv))"
      sx={{ ...SV_VARS, ...heroUnitVars }}
    >
      <Box position="sticky" top={0} h="calc(100 * var(--sv))" overflow="hidden" bg={STAGE_BG}>
        {/* Foto principal (espejada: la pelota queda a la derecha) */}
        <Box ref={zoomRef} position="absolute" inset={0} transformOrigin="60% 50%">
          <Box
            ref={photoRef}
            role="img"
            aria-label={`${playerData.shortName} acomoda la pelota antes de un tiro libre`}
            position="absolute"
            inset={0}
            bgImage={`url(${playerData.heroBg})`}
            bgRepeat="no-repeat"
            bgSize={{ base: 'auto 56%', md: 'auto 100%' }}
            bgPosition={{ base: '0% 26%', md: 'right 0 bottom 0' }}
            opacity={0}
          />
        </Box>

        <Box position="absolute" inset={0} bg={SHADE} pointerEvents="none" />

        {/* Rótulo vertical (solo desktop) */}
        <Text
          ref={sideRef}
          opacity={0}
          display={{ base: 'none', lg: 'block' }}
          position="absolute"
          right="clamp(16px, 3vw, 40px)"
          top="50%"
          transform="translateY(-50%) rotate(180deg)"
          sx={{ writingMode: 'vertical-rl' }}
          fontFamily="mono"
          fontSize="11px"
          letterSpacing="0.4em"
          textTransform="uppercase"
          color="rgba(239,230,218,0.5)"
        >
          {playerData.currentClub} · Temporada 2026
        </Text>

        {/* Nombre + rótulo, con la foto de espaldas detrás (desktop) */}
        <Box
          ref={textRef}
          position="absolute"
          zIndex={2}
          left={{ base: '16px', md: 'clamp(16px, 6vw, 96px)' }}
          right={{ base: '16px', md: 'auto' }}
          bottom={{ base: 'max(calc(20 * var(--sv)), 190px)', md: 'max(calc(19 * var(--sv)), 128px)' }}
        >
          <Box
            ref={backRef}
            aria-hidden="true"
            display={{ base: 'none', md: 'block' }}
            position="absolute"
            left="50%"
            bottom="calc(-6 * var(--sv))"
            h="calc(78 * var(--sv))"
            zIndex={-1}
            pointerEvents="none"
            opacity={0}
            sx={{ [LANDSCAPE]: { display: 'none' }, '@media (max-height: 520px)': { display: 'none' } }}
          >
            <Image
              src={playerData.heroBack}
              alt=""
              h="100%"
              w="auto"
              maxW="none"
              opacity={0.45}
              filter="grayscale(1) contrast(1.08) brightness(.75)"
              sx={{
                maskImage: 'linear-gradient(black 40%, transparent 85%)',
                WebkitMaskImage: 'linear-gradient(black 40%, transparent 85%)',
              }}
            />
          </Box>

          <Text
            ref={addFade}
            display="flex"
            alignItems="center"
            gap="10px"
            fontFamily="mono"
            fontSize={{ base: u(13), md: u(13) }}
            letterSpacing="0.14em"
            textTransform="uppercase"
            color="brand.amber"
            sx={{ [LANDSCAPE]: { fontSize: u(12) } }}
            ml={{base:'8px', md:'30px'}}
          >
            <Image src={playerData.logoCurrentClub} alt="" w={{ base: u(18), md: u(20) }} h="auto" />
             {playerData.position}
          </Text>

          <Heading
            as="h1"
            mt={{base:u(6), md:u(10)}}
            fontFamily="heading"
            fontWeight="400"
            lineHeight={0.84}
            fontSize={{ base: u(104), md: u(123), lg: u(216) }}
            sx={{ [LANDSCAPE]: { fontSize: u(100) } }}
          >
            <Box as="span" display="block" overflow="hidden" ml={{base:'10px', md:'30px'}}>
              <Box as="span" ref={addLine} display="block" fontSize="0.42em" letterSpacing="0.08em" color="brand.cream">
                {playerData.name}
              </Box>
            </Box>
            <Box as="span" display="block" overflow="hidden">
              <Box as="span" ref={addLine} display="block" color="brand.amber" >
                {playerData.fullName}
              </Box>
            </Box>
          </Heading>
        </Box>

        {/* Barra de partidos: el contenedor hace la entrada y la barra la salida con el scroll */}
        <Box ref={barInRef} position="absolute" left={0} right={0} bottom={0} zIndex={4} opacity={0}>
          <ResultsBar ref={barRef} last={matches.last} next={matches.next} />
        </Box>

        {/* Oscurecido de salida */}
        <Box ref={dimRef} position="absolute" inset={0} zIndex={5} bg="brand.panel" opacity={0} pointerEvents="none" />
      </Box>
    </Box>
  )
}
