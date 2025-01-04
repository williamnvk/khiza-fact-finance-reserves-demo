import { Box, HStack, Image, Text } from '@chakra-ui/react';
import { chains } from '@/data/chains';
import Slider from '@/components/Shared/Slider';
import { useMemo } from 'react';

export default function Chains() {
  const chainSlides = useMemo(
    () =>
      chains.map((chain) => (
        <Slider.Slide key={chain.value}>
          <HStack
            p={4}
            _hover={{ transform: 'scale(1.1)' }}
            transition="all 0.3s ease-in-out"
            borderRadius="full"
            bg="whiteAlpha.50"
            gap={4}
            align="center"
            justify="center"
            h="80px"
          >
            {chain.icon ? (
              <Image
                filter="grayscale(1)"
                _hover={{ filter: 'grayscale(0)' }}
                alt={`${chain.value} logo`}
                src={chain.icon}
                width={{ base: '48px', md: '48px' }}
                height={{ base: '48px', md: 'auto' }}
                loading="lazy"
              />
            ) : null}
            <Text flex={1}>{chain.value}</Text>
          </HStack>
        </Slider.Slide>
      )),
    [chains],
  );

  return (
    <Box
      w="full"
      mb={{ base: 0, md: 12 }}
      role="region"
      aria-label="Supported Blockchain Networks"
      pos="relative"
      overflow="hidden"
    >
      <Box
        bgGradient="to-r"
        gradientFrom="bg"
        gradientTo="transparent"
        pos="absolute"
        top="0"
        left="0"
        w="25vw"
        h="120px"
        zIndex={1}
      ></Box>

      <Slider alias="first">{chainSlides}</Slider>

      <Box
        bgGradient="to-l"
        gradientFrom="bg"
        gradientTo="transparent"
        pos="absolute"
        top={0}
        right={0}
        w="25vw"
        h="120px"
        zIndex={1}
      ></Box>
    </Box>
  );
}
