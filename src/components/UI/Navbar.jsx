import { useState, useEffect } from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import BrandLogo from './BrandLogo'
import { MobileMenu } from './MobileMenu'
import { useActiveSection } from '../../hooks/useActiveSection'
import { playerData } from '../../data/playerData'

const MotionBox = motion(Box)
const EASE      = [0.23, 1, 0.32, 1]
const EASE_CSS  = 'cubic-bezier(0.23, 1, 0.32, 1)'
const HOVER     = '@media (hover: hover) and (pointer: fine)'
const MENU_ID   = 'mobile-menu'

export const navLinks = [
  { label: 'Home',         href: '#hero' },
  { label: 'Estadísticas', href: '#estadisticas' },
  { label: 'Videos',       href: '#videos' },
  { label: 'Galería',      href: '#galeria' },
  { label: 'Prensa',       href: '#prensa' },
]

export const mobileLinks = [
  ...navLinks,
  { label: 'Contacto', href: '#contact' },
]

// Referencia estable para el scrollspy
const sectionHrefs = mobileLinks.map((l) => l.href)

export function scrollTo(href) {
  const target = document.querySelector(href)
  if (!target) return
  // La cápsula flota sobre el contenido: dejar aire para que no tape el rótulo de la sección
  const offset = href === '#hero' ? 0 : -84
  if (window.__lenis) {
    window.__lenis.start()
    window.__lenis.scrollTo(target, { offset })
  } else {
    const y = target.getBoundingClientRect().top + window.scrollY + offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

const linkText = {
  fontFamily: 'mono',
  fontWeight: '600',
  fontSize: '13px',
  letterSpacing: '0.13em',
  textTransform: 'uppercase',
}

const focusRing = { outline: '2px solid', outlineColor: 'brand.amber', outlineOffset: '2px' }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active  = useActiveSection(sectionHrefs)
  const reduced = useReducedMotion()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Menú abierto: bloquear el scroll de la página (Lenis + body) y cerrar con Escape
  useEffect(() => {
    if (!menuOpen) return
    document.body.style.overflow = 'hidden'
    window.__lenis?.stop()
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    const mq = window.matchMedia('(min-width: 62em)')
    const onMq = (e) => { if (e.matches) setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      document.body.style.overflow = ''
      window.__lenis?.start()
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [menuOpen])

  const handleLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.body.style.overflow = ''
    scrollTo(href)
  }

  const compact = scrolled && !menuOpen

  return (
    <MotionBox
      as="header"
      position="fixed"
      top={{ base: '10px', lg: '14px' }}
      left={0}
      right={0}
      zIndex={1000}
      px={3}
      display="flex"
      justifyContent="center"
      pointerEvents="none"
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0.2 : 0.8, delay: 0.35, ease: EASE }}
    >
      <AnimatePresence>
        {menuOpen && (
          <MobileMenu id={MENU_ID} links={mobileLinks} active={active} onNavigate={handleLink} />
        )}
      </AnimatePresence>

      {/* Cápsula flotante: se compacta al scrollear */}
      <Flex
        as="nav"
        aria-label="Principal"
        pointerEvents="auto"
        align="center"
        justify={{ base: 'space-between', lg: 'flex-start' }}
        gap={{ base: 2.5, lg: '18px' }}
        w={{ base: 'full', lg: 'auto' }}
        maxW={{ base: '520px', lg: 'none' }}
        pl={{ base: 4, lg: 5 }}
        pr={{ base: 1, lg: 1.5 }}
        py={{ base: 1, lg: 1.5 }}
        borderRadius="full"
        border="1px solid"
        borderColor="brand.amberLight"
        bg={compact || menuOpen ? 'rgba(28,29,30,0.88)' : 'rgba(28,29,30,0.5)'}
        backdropFilter="blur(16px) saturate(140%)"
        boxShadow={compact ? '0 16px 40px rgba(0,0,0,0.45)' : '0 10px 30px rgba(0,0,0,0.25)'}
        transform={compact ? { base: 'translateY(-4px) scale(0.98)', lg: 'translateY(-6px) scale(0.95)' } : 'none'}
        transformOrigin="top center"
        transition={`transform 0.5s ${EASE_CSS}, background 0.35s, box-shadow 0.35s`}
      >
        <Box
          as="a"
          href="#hero"
          onClick={(e) => handleLink(e, '#hero')}
          aria-label={`${playerData.displayName}, inicio`}
          borderRadius="4px"
          _focusVisible={focusRing}
        >
          <BrandLogo size="24px" barH="18px" />
        </Box>

        <Box display={{ base: 'none', lg: 'block' }} w="1px" h="18px" bg="brand.amberLight" aria-hidden="true" />

        {/* Links desktop con píldora deslizante en la sección activa */}
        <Flex as="ul" listStyleType="none" display={{ base: 'none', lg: 'flex' }}>
          {navLinks.map((link) => {
            const isActive = active === link.href
            return (
              <Box as="li" key={link.href}>
                <Box
                  as="a"
                  href={link.href}
                  onClick={(e) => handleLink(e, link.href)}
                  aria-current={isActive ? 'true' : undefined}
                  position="relative"
                  display="block"
                  px="14px"
                  py="7px"
                  borderRadius="full"
                  color={isActive ? '#1a1410' : 'rgba(239,230,218,0.68)'}
                  transition="color 0.25s"
                  sx={{ [HOVER]: { '&:hover': { color: isActive ? '#1a1410' : 'brand.bone' } } }}
                  _focusVisible={focusRing}
                  {...linkText}
                >
                  {isActive && (
                    <MotionBox
                      layoutId="nav-pill"
                      position="absolute"
                      inset={0}
                      borderRadius="full"
                      bg="brand.amber"
                      transition={{ duration: reduced ? 0 : 0.5, ease: EASE }}
                    />
                  )}
                  <Box as="span" position="relative" zIndex={1}>{link.label}</Box>
                </Box>
              </Box>
            )
          })}
        </Flex>

        {/* CTA desktop */}
        <Box
          as="a"
          href="#contact"
          onClick={(e) => handleLink(e, '#contact')}
          display={{ base: 'none', lg: 'inline-flex' }}
          alignItems="center"
          gap={2}
          px="18px"
          py="9px"
          borderRadius="full"
          bg="brand.amberDark"
          color="brand.bone"
          transition="background 0.25s"
          sx={{
            [HOVER]: {
              '&:hover': { bg: 'brand.gray2' },
              '&:hover .cta-arrow': { transform: 'translateX(3px)' },
            },
          }}
          _focusVisible={focusRing}
          {...linkText}
        >
          Contacto
          <Box as="span" className="cta-arrow" aria-hidden="true" display="inline-block" transition={`transform 0.3s ${EASE_CSS}`}>→</Box>
        </Box>

        {/* Mobile: dorsal y club en el centro de la cápsula */}
        <Flex
          display={{ base: 'flex', lg: 'none' }}
          align="center"
          gap="7px"
          fontFamily="mono"
          fontSize="12px"
          letterSpacing="0.14em"
          textTransform="uppercase"
          color="brand.warmGray"
          whiteSpace="nowrap"
        >
          <Image src={playerData.logoCurrentClub} alt="" w="16px" h="auto" />
          #{playerData.number} · {playerData.currentClub}
        </Flex>

        {/* Hamburguesa mobile */}
        <Flex
          as="button"
          type="button"
          display={{ base: 'flex', lg: 'none' }}
          direction="column"
          align="center"
          justify="center"
          gap="5px"
          w="42px"
          h="42px"
          flexShrink={0}
          borderRadius="full"
          bg="whiteAlpha.50"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls={MENU_ID}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          _focusVisible={focusRing}
        >
          {[0, 1, 2].map((i) => (
            <Box
              key={i}
              as="span"
              w="22px"
              h="2px"
              bg={menuOpen ? 'brand.amber' : 'brand.bone'}
              transition={`transform 0.3s ${EASE_CSS}, opacity 0.2s, background 0.25s`}
              opacity={menuOpen && i === 1 ? 0 : 1}
              transform={
                menuOpen
                  ? i === 0 ? 'translateY(7px) rotate(45deg)'
                  : i === 1 ? 'scaleX(0)'
                  : 'translateY(-7px) rotate(-45deg)'
                  : 'none'
              }
            />
          ))}
        </Flex>
      </Flex>
    </MotionBox>
  )
}
