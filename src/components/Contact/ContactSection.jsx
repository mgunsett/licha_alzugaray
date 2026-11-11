import { useRef } from 'react'
import { Box, Flex, Grid, Text, Image } from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
import useScrubReveal from '../../hooks/useScrubReveal'
import { playerData } from '../../data/playerData'

const EASE = 'cubic-bezier(0.23, 1, 0.32, 1)'
const HOVER = '@media (hover: hover) and (pointer: fine)'
const IG_GRADIENT = 'linear-gradient(45deg, #f9ce34, #ee2a7b 50%, #6228d7)'
const LINE = 'rgba(255,255,255,0.08)'

// Íconos de fondo de las tarjetas de redes (por label)
const GhostInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)
const GhostStats = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="14" width="3.5" height="7" rx=".5" /><rect x="8.5" y="5" width="3.5" height="16" rx=".5" />
    <rect x="14" y="11" width="3.5" height="10" rx=".5" /><rect x="19.5" y="8" width="3.5" height="13" rx=".5" />
  </svg>
)
const GHOSTS = { Instagram: GhostInstagram, TransferMarkt: GhostStats }
const nameOf = (label) => (label === 'TransferMarkt' ? 'Transfermarkt' : label)

// Base compartida: tarjeta-link externa
const cardProps = (ariaLabel) => ({
  as: 'a',
  target: '_blank',
  rel: 'noopener noreferrer',
  'aria-label': `${ariaLabel}. Se abre en otra pestaña`,
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid',
  borderColor: LINE,
  borderRadius: '16px',
  bg: 'rgba(255,255,255,0.025)',
  transition: `border-color .25s ease, background-color .25s ease, transform .16s ${EASE}`,
  _active: { transform: 'scale(0.99)' },
  _focusVisible: { outline: '2px solid', outlineColor: 'brand.amber', outlineOffset: '3px' },
})

function SocialCard({ item }) {
  const Ghost = GHOSTS[item.label]
  const Icon = item.icon
  const isIg = item.label === 'Instagram'
  return (
    <Box
      {...cardProps(`${nameOf(item.label)} de ${playerData.shortName}, ${item.handle}`)}
      href={item.url}
      minH={{ base: '160px', md: '190px' }}
      p={{ base: 5, md: 7 }}
      justifyContent="space-between"
      sx={{
        '& .ghost': { transition: `color .3s ease, transform .5s ${EASE}` },
        '& .icon, & .arrow': { transition: 'background .25s ease, border-color .25s ease, color .25s ease' },
        [HOVER]: {
          '&:hover': { borderColor: isIg ? '#ee2a7b' : 'brand.boneWarm' },
          '&:hover .ghost': { color: 'rgba(189,167,142,.2)' },
          '&:hover .icon': isIg
            ? { bgImage: IG_GRADIENT, borderColor: 'transparent', color: 'white' }
            : { bg: 'brand.boneWarm', borderColor: 'brand.boneWarm', color: '#1a1410' },
          '&:hover .arrow': { bg: 'brand.amber', borderColor: 'brand.amber', color: '#1a1410' },
        },
      }}
    >
      {Ghost && (
        <Box className="ghost" aria-hidden="true" position="absolute" right="-18px" bottom="-26px"
             boxSize={{ base: '150px', md: '190px' }} color="rgba(255,255,255,.05)" pointerEvents="none">
          <Ghost />
        </Box>
      )}
      <Flex className="arrow" aria-hidden="true" position="absolute" top={{ base: 4, md: 5 }} right={{ base: 4, md: 5 }}
            boxSize="38px" borderRadius="full" border="1px solid" borderColor="brand.amberLight" color="brand.cream"
            align="center" justify="center">
        <Box as={FiArrowUpRight} boxSize="16px" />
      </Flex>

      <Flex className="icon" aria-hidden="true" boxSize="44px" borderRadius="12px" border="1px solid" borderColor="brand.amberLight"
            color="brand.cream" align="center" justify="center">
        {Icon ? <Box as={Icon} boxSize="20px" /> : <Box as={item.iconBg} boxSize="20px" />}
      </Flex>
      <Box position="relative" mt={5}>
        <Text fontFamily="mono" fontSize="13px" fontWeight={500} letterSpacing="0.08em" color="brand.warmGray">{nameOf(item.label)}</Text>
        <Text fontFamily="heading" fontSize={{ base: '30px', md: 'clamp(30px, 3vw, 44px)' }} lineHeight={1} color="brand.bone"
              mt={1} sx={{ overflowWrap: 'anywhere' }}>
          {item.handle}
        </Text>
        {item.note && <Text fontFamily="mono" fontSize="13px" fontWeight={500} color="brand.warmGray" mt={1}>{item.note}</Text>}
      </Box>
    </Box>
  )
}

function RepCard({ item }) {
  return (
    <Box
      {...cardProps(`${item.cta || item.label} por Instagram, ${item.handle}`)}
      href={item.url}
      p={{ base: 5, md: 7 }}
      sx={{
        // Brillo suave detrás del logo, con el color de cada agencia
        '&::before': {
          content: '""', position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `radial-gradient(circle at 12% 30%, ${item.hoverColor || 'rgba(189,167,142,.2)'}, transparent 45%)`,
          opacity: 0, transition: 'opacity .35s ease',
        },
        '& .cta': { transition: 'background .25s ease, border-color .25s ease' },
        [HOVER]: {
          '&:hover': { borderColor: 'brand.amberLight' },
          '&:hover::before': { opacity: 1 },
          '&:hover .cta': { bg: 'rgba(189,167,142,0.12)', borderColor: 'brand.amber' },
        },
      }}
    >
      <Flex position="relative" align="center" gap={{ base: 3.5, md: 5 }} pb={{ base: 4, md: 5 }}  borderColor={LINE}>
        <Flex flexShrink={0} boxSize={{ base: '64px', md: '84px' }} borderRadius="16px" bg="rgba(239,230,218,.04)"
              border="1px solid" borderColor={LINE} align="center" justify="center">
          <Image src={item.image} alt="" boxSize={{ base: '52px', md: '70px' }} objectFit="contain" />
        </Flex>
        <Box minW={0}>
          <Text fontFamily="mono" fontSize="12px" fontWeight={600} letterSpacing="0.1em" textTransform="uppercase" color="brand.amber">
            {item.title}
          </Text>
          <Text fontFamily="heading" fontSize={{ base: '30px', md: 'clamp(32px, 3vw, 42px)' }} lineHeight={0.95} color="brand.bone" mt={1}>
            {item.label}
          </Text>
          <Text fontFamily="mono" fontSize="13px" fontWeight={500} color="brand.warmGray" mt={1}>{item.handle}</Text>
        </Box>
      </Flex>
      
    </Box>
  )
}

function Group({ title, children }) {
  return (
    <Box mt={{ base: 9, md: 11 }}>
      <Text as="h3" fontFamily="mono" fontSize="12px" fontWeight={600} letterSpacing="0.14em" textTransform="uppercase"
            color="brand.amber" mb={3.5}>
        {title}
      </Text>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={3.5}>{children}</Grid>
    </Box>
  )
}

export default function ContactSection() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)

  useScrubReveal(sectionRef, {
    elements: [{ ref: headerRef, fromVars: { y: 50, opacity: 0 }, vars: { y: 0, opacity: 1 } }],
    start: 'top 80%',
    end: 'top 40%',
  })

  return (
    <Box as="section" id="contact" ref={sectionRef} aria-labelledby="contact-title" bg="brand.dark"
         pt={{ base: 16, lg: 24 }} pb={{ base: 20, lg: 28 }} px={{ base: 4, md: 8, lg: 14 }}>
      <Box maxW="1320px" mx="auto">
        <Flex ref={headerRef} justify="space-between" align="flex-end" gap={6} flexWrap="wrap">
          <Box>
            <Text fontFamily="mono" fontSize="12px" fontWeight="500" color="brand.cream" textTransform="uppercase" letterSpacing="0.3em">
              Redes y Agencias
            </Text>
            <Text as="h2" id="contact-title" fontFamily="heading" fontSize={{ base: '56px', md: '7vw', xl: '96px' }} lineHeight={0.88}
                  color="brand.amber" mt="6px">
              Contacto
            </Text>
          </Box>
          
        </Flex>

        <Group title="Redes sociales">
          {playerData.socialMedia.map((s) => <SocialCard key={s.url} item={s} />)}
        </Group>
        <Group title="Representación">
          {playerData.contact.map((c) => <RepCard key={c.url} item={c} />)}
        </Group>
      </Box>
    </Box>
  )
}
