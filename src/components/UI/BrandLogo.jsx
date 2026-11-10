// Logo de la landing: bastón granate inclinado + iniciales + guión.
// Lo comparten Navbar y Footer.
import { Box, Flex, Text } from '@chakra-ui/react'
import { playerData } from '../../data/playerData'

export default function BrandLogo({ size = '2xl', barH = '22px', ...rest }) {
  return (
    <Flex
      align="center"
      gap={2.5}
      flexShrink={0}
      sx={{
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover .brand-bar': { bg: 'brand.dorado' },
        },
      }}
      {...rest}
    >
      <Box
        className="brand-bar"
        w="5px"
        h={barH}
        bg="brand.gray2"
        transform="skewX(-12deg)"
        transition="background 0.25s"
      />
      <Text as="span" fontFamily="heading" fontSize={size} letterSpacing="wider" color="brand.bone" lineHeight={1}>
        {playerData.initials}<Box as="span" color="brand.amber">_</Box>
      </Text>
    </Flex>
  )
}
