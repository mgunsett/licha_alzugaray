// ─────────────────────────────────────────────────────────────
// Footer (Pulido): logo del navbar, copyright y, a la derecha,
// "Volver arriba" junto al crédito de desarrollo.
// ─────────────────────────────────────────────────────────────
import { Box, Flex, Grid, Image, Link, Text } from '@chakra-ui/react'
import { FiArrowUp } from 'react-icons/fi'
import BrandLogo from './BrandLogo'
import { scrollTo } from './Navbar'
import { playerData } from '../../data/playerData'
import sportfolioWeb from '@assets/logo_sport.png'

const EASE = 'cubic-bezier(0.23, 1, 0.32, 1)'
const HOVER = '@media (hover: hover) and (pointer: fine)'
const focus = { outline: '2px solid', outlineColor: 'brand.amber', outlineOffset: '3px', borderRadius: '6px' }

export default function Footer() {
  const year = new Date().getFullYear()

  const toTop = (e) => {
    e.preventDefault()
    scrollTo('#hero')
  }

  return (
    <Box as="footer" bg="brand.brown" borderTop="1px solid" borderColor="whiteAlpha.100" px={{ base: 4, md: 8, lg: 14 }}>
      <Grid
        maxW="1320px"
        mx="auto"
        py={{ base: 10, md: 12 }}
        templateColumns={{ base: '1fr', md: '1fr auto 1fr' }}
        alignItems="center"
        justifyItems={{ base: 'center', md: 'stretch' }}
        gap={6}
      >
        {/* Logo → inicio */}
        <Box as="a" href="#hero" onClick={toTop} aria-label={`${playerData.shortName}, volver al inicio`}
             justifySelf={{ md: 'start' }} _focusVisible={focus}>
          <BrandLogo />
        </Box>

        <Text fontFamily="mono" fontSize="14px" fontWeight={500} letterSpacing="0.04em" color="brand.warmGray" textAlign="center">
          © {year} {playerData.shortName}. Todos los derechos reservados.
        </Text>

        {/* Volver arriba + crédito */}
        <Flex align="center" gap={4} wrap="wrap" justify={{ base: 'center', md: 'flex-end' }} justifySelf={{ md: 'end' }}>
          <Flex
            as="a"
            href="#hero"
            onClick={toTop}
            align="center"
            gap={2}
            pl={4}
            pr={3.5}
            py="9px"
            borderRadius="full"
            border="1px solid"
            borderColor="whiteAlpha.300"
            fontFamily="mono"
            fontSize="14px"
            fontWeight={600}
            letterSpacing="0.04em"
            color="brand.bone"
            whiteSpace="nowrap"
            transition={`border-color .2s ease, transform .16s ${EASE}`}
            _active={{ transform: 'scale(0.97)' }}
            _focusVisible={focus}
            sx={{
              '& svg': { transition: `transform .25s ${EASE}` },
              [HOVER]: {
                '&:hover': { borderColor: 'brand.amber' },
                '&:hover svg': { transform: 'translateY(-2px)' },
              },
            }}
          >
            Volver arriba
            <Box as={FiArrowUp} boxSize="16px" aria-hidden="true" />
          </Flex>

          {/* Crédito de desarrollo (no tocar) */}
          <Flex direction="column" gap="3px" fontFamily="mono" fontSize="11px" fontWeight={500} letterSpacing="0.08em"
                textTransform="uppercase" color="whiteAlpha.400">
            Desarrollo web
            <Link href="https://matiasgunsett.netlify.app/sportfolio" isExternal _focusVisible={focus}
                  opacity={0.85} transition="opacity .25s" sx={{ [HOVER]: { '&:hover': { opacity: 1 } } }}>
              <Image src={sportfolioWeb} alt="Sportfolio Web" display="block" w="85px" h="auto" />
            </Link>
          </Flex>
        </Flex>
      </Grid>
    </Box>
  )
}
