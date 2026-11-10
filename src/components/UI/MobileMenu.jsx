import { Box, Flex, Image, Portal, Text } from '@chakra-ui/react'
import { motion, useReducedMotion } from 'framer-motion'
import { playerData } from '../../data/playerData'

const MotionBox = motion(Box)
const MotionLi  = motion(Box)
const EASE      = [0.23, 1, 0.32, 1]

const instagram = playerData.socialMedia.find((s) => s.label === 'Instagram')

// Menú mobile a pantalla completa: lista numerada en Bebas, estilo editorial.
// La cápsula del Navbar queda por encima (z-index mayor) y hace de cabecera.
export function MobileMenu({ id, links, active, onNavigate }) {
  const reduced = useReducedMotion()

  return (
    // Portal: el nav padre tiene transform (animación de entrada), que rompe position:fixed
    <Portal>
      <MotionBox
        id={id}
        data-lenis-prevent
        position="fixed"
        inset={0}
        h="100vh"
        sx={{ '@supports (height: 1svh)': { height: '100svh' } }}
        zIndex={990}
        bg="brand.panel"
        overflowY="auto"
        display={{ base: 'flex', lg: 'none' }}
        flexDirection="column"
        px={7}
        pt="92px"
        pb={7}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduced ? 0 : 0.35, ease: EASE }}
      >
        <Box as="nav" aria-label="Secciones">
          <Box as="ul" listStyleType="none">
            {links.map((link, i) => {
              const isActive = active === link.href
              return (
                <MotionLi
                  as="li"
                  key={link.href}
                  initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: reduced ? 0 : 0.08 + i * 0.055, duration: 0.45, ease: EASE }}
                >
                  <Flex
                    as="a"
                    href={link.href}
                    onClick={(e) => onNavigate(e, link.href)}
                    aria-current={isActive ? 'true' : undefined}
                    align="baseline"
                    gap={4}
                    py="9px"
                    borderBottom="1px solid"
                    borderColor="whiteAlpha.100"
                    _focusVisible={{ outline: '2px solid', outlineColor: 'brand.amber', outlineOffset: '2px' }}
                  >
                    <Text
                      as="span"
                      fontFamily="mono"
                      fontSize="13px"
                      fontWeight="600"
                      letterSpacing="0.1em"
                      minW="24px"
                      color={isActive ? 'brand.amber' : 'brand.dorado'}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </Text>
                    <Text
                      as="span"
                      fontFamily="heading"
                      fontSize="clamp(38px, 11vw, 54px)"
                      lineHeight={1.05}
                      letterSpacing="0.02em"
                      textTransform="uppercase"
                      color={isActive ? 'brand.amber' : 'brand.bone'}
                      transition="color 0.2s"
                    >
                      {link.label}
                    </Text>
                  </Flex>
                </MotionLi>
              )
            })}
          </Box>
        </Box>

        {/* Pie del menú: club actual + Instagram */}
        <MotionBox
          mt="auto"
          pt={7}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={3}
          fontFamily="mono"
          fontSize="13px"
          letterSpacing="0.14em"
          textTransform="uppercase"
          color="brand.warmGray"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: reduced ? 0 : 0.45, duration: 0.4, ease: EASE }}
        >
          <Flex as="span" align="center" gap={2}>
            <Image src={playerData.logoCurrentClub} alt="" w="22px" h="auto" />
            #{playerData.number} · {playerData.currentClub}
          </Flex>
          {instagram && (
            <Box
              as="a"
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              color="brand.cream"
              textTransform="none"
              letterSpacing="0.06em"
              aria-label={`Instagram de ${playerData.displayName}`}
            >
              {instagram.handle}
            </Box>
          )}
        </MotionBox>
      </MotionBox>
    </Portal>
  )
}
