import { forwardRef } from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

// Sigla del equipo: la que se cargó en /admin o, si no hay, las 3 primeras letras
const code = (team) => (team.short || team.name.slice(0, 3)).toUpperCase()

function Shield({ team }) {
  if (team.shield) {
    return <Image src={team.shield} alt="" boxSize={{ base: '18px', md: '22px' }} objectFit="contain" flexShrink={0} />
  }
  return (
    <Flex
      as="span"
      aria-hidden="true"
      boxSize={{ base: '18px', md: '22px' }}
      flexShrink={0}
      align="center"
      justify="center"
      borderRadius="full"
      bg="brand.amberDark"
      fontFamily="mono"
      fontSize="8px"
      fontWeight="700"
      letterSpacing={0}
      color="brand.bone"
    >
      {team.name.slice(0, 2).toUpperCase()}
    </Flex>
  )
}

function Slot({ match, kind }) {
  const isNext   = kind === 'next'
  const hasScore = match.homeScore !== null && match.awayScore !== null && !isNext
  const when     = [match.date, isNext ? match.time : ''].filter(Boolean).join(' · ')
  const details  = [
    match.competition,
    when && <Text as="b" key="w" color="brand.cream" fontWeight="600">{when}</Text>,
    isNext ? match.stadium : 'Final',
  ].filter(Boolean)

  const label = isNext ? 'Próximo partido' : 'Último resultado'
  const summary = hasScore
    ? `${label}: ${match.home.name} ${match.homeScore}, ${match.away.name} ${match.awayScore}`
    : `${label}: ${match.home.name} contra ${match.away.name}`

  return (
    <Box
      display={{ base: 'grid', md: 'block' }}
      gridTemplateColumns="1fr auto"
      gridTemplateAreas={`"k t" "d t"`}
      alignItems="center"
      columnGap={3}
      px={{ base: 4, md: 'clamp(16px, 6vw, 96px)' }}
      pl={{ md: isNext ? 'clamp(16px, 3vw, 48px)' : undefined }}
      py={{ base: '10px', md: 4 }}
      pb={{ md: '18px' }}
      bg={isNext ? 'rgba(122,31,31,0.35)' : 'transparent'}
      borderTop={{ base: isNext ? '1px solid rgba(255,255,255,0.08)' : 'none', md: 'none' }}
      borderLeft={{ base: 'none', md: isNext ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
      aria-label={summary}
      role="group"
    >
      <Text
        as="dt"
        gridArea="k"
        fontFamily="mono"
        fontSize={{ base: '10px', md: '11px' }}
        letterSpacing={{ base: '0.2em', md: '0.24em' }}
        textTransform="uppercase"
        color={isNext ? 'brand.dorado' : 'brand.warmGray'}
      >
        {label}
      </Text>

      <Flex
        as="dd"
        gridArea="t"
        align="center"
        gap={2}
        mt={{ base: 0, md: '6px' }}
        fontFamily="heading"
        fontSize={{ base: '21px', md: '30px' }}
        lineHeight={1}
        letterSpacing="0.03em"
        color="brand.bone"
        aria-hidden="true"
      >
        <Shield team={match.home} />
        {code(match.home)}
        {hasScore ? (
          <Box as="span" color="brand.amber" mx={1}>{match.homeScore} – {match.awayScore}</Box>
        ) : (
          <Box as="span" color="brand.amber" fontSize={{ base: '14px', md: '17px' }} mx="2px">vs</Box>
        )}
        <Shield team={match.away} />
        {code(match.away)}
      </Flex>

      {details.length > 0 && (
        <Text
          as="dd"
          gridArea="d"
          mt={{ base: '3px', md: '6px' }}
          fontFamily="mono"
          fontSize={{ base: '11.5px', md: '12.5px' }}
          letterSpacing={{ base: '0.1em', md: '0.12em' }}
          textTransform="uppercase"
          color="brand.warmGray"
        >
          {details.map((d, i) => (
            <Box as="span" key={i}>{i > 0 && ' · '}{d}</Box>
          ))}
        </Text>
      )}
    </Box>
  )
}

// Barra inferior del Hero: último resultado + próximo partido (datos de /admin)
const ResultsBar = forwardRef(function ResultsBar({ last, next }, ref) {
  const slots = [last && { match: last, kind: 'last' }, next && { match: next, kind: 'next' }].filter(Boolean)
  if (!slots.length) return null

  return (
    <Box
      ref={ref}
      as="dl"
      display="grid"
      gridTemplateColumns={{ base: '1fr', md: slots.length > 1 ? '1fr 1fr' : '1fr' }}
      borderTop="1px solid rgba(255,255,255,0.1)"
      bg="rgba(13,13,14,0.55)"
      backdropFilter="blur(8px)"
    >
      {slots.map(({ match, kind }) => <Slot key={kind} match={match} kind={kind} />)}
    </Box>
  )
})

export default ResultsBar
