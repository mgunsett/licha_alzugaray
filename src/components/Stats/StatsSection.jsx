import { useRef, useEffect } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'
import ScoutingCard from './ScoutingCard'
import ClubRoute from './ClubRoute'
import { playerData } from '../../data/playerData'

gsap.registerPlugin(ScrollTrigger, CustomEase)
const EASE = CustomEase.create('statsOut', '0.23, 1, 0.32, 1')

export default function StatsSection() {
  const sectionRef = useRef(null)

  // Una sola animación coordinada: bloques que suben en orden, barras que se llenan
  // y la zona de influencia que aparece. Se dispara una vez al entrar.
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray('[data-reveal]')
      const segs   = gsap.utils.toArray('[data-seg]')
      const heat   = gsap.utils.toArray('[data-heat]')
      gsap.set(blocks, { opacity: 0, y: 22 })
      gsap.set(segs, { scaleX: 0 })
      gsap.set(heat, { opacity: 0, scale: 0.6 })

      // Los bloques de la ficha y los del recorrido entran cada uno cuando llegan a pantalla
      ScrollTrigger.batch(blocks, {
        start: 'top 88%',
        once: true,
        onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.8, ease: EASE, stagger: 0.07 }),
      })
      ScrollTrigger.create({
        trigger: segs[0] || sectionRef.current,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.to(segs, { scaleX: (i, el) => Number(el.dataset.seg), duration: 0.5, ease: EASE, stagger: 0.012, delay: 0.2 })
        },
      })
      ScrollTrigger.create({
        trigger: heat[0] || sectionRef.current,
        start: 'top 85%',
        once: true,
        onEnter: () => gsap.to(heat, { opacity: 1, scale: 1, duration: 1.4, ease: EASE, delay: 0.3 }),
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <Box
      as="section"
      id="estadisticas"
      ref={sectionRef}
      bg="brand.dark"
      pt={{ base: 16, lg: 24 }}
      pb={{ base: 16, lg: 24 }}
      px={{ base: 4, md: 8, lg: 14 }}
      borderTopLeftRadius={{ base: '14px', lg: '22px' }}
      borderTopRightRadius={{ base: '14px', lg: '22px' }}
      boxShadow="0 -24px 80px rgba(0,0,0,0.65)"
      overflow="clip"
    >
      <Box maxW="1320px" mx="auto">
        <Flex justify="space-between" align="flex-end" gap={8} wrap="wrap" mb={11} data-reveal="">
          <Box>
            <Text fontFamily="mono" fontSize="12px" fontWeight="500" letterSpacing="0.3em" textTransform="uppercase" color="brand.cream">
              {playerData.seasonLabel}
            </Text>
            <Text as="h2" fontFamily="heading" fontSize={{ base: '56px', md: '7vw', xl: '96px' }} lineHeight={0.88} color="brand.amber" mt="6px">
              Estadísticas
            </Text>
          </Box>
        
        </Flex>

        <ScoutingCard />
        <ClubRoute />
      </Box>
    </Box>
  )
}
