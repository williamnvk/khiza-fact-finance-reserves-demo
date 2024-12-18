import { Box, Image } from '@chakra-ui/react';
import { chains } from '@/data/chains';
import Slider from '@/components/Shared/Slider';
import { useMemo } from 'react';

export default function HomePage() {
  // Memoize chain slides to prevent unnecessary re-renders
  const chainSlides = useMemo(
    () =>
      chains.map((chain) => (
        <Slider.Slide key={chain.value}>
          <Box p={4} _hover={{ transform: 'scale(1.1)' }} transition="all 0.3s ease-in-out">
            {chain.icon ? (
              <Image
                filter="grayscale(1)"
                _hover={{ filter: 'grayscale(0)' }}
                alt={`${chain.value} logo`}
                src={chain.icon}
                width={{ base: '64px', md: '64px' }}
                loading="lazy"
              />
            ) : null}
          </Box>
        </Slider.Slide>
      )),
    [chains],
  );

  return (
    <Box
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="200"
      w="full"
      mb={{ base: 0, md: 12 }}
      role="region"
      aria-label="Supported Blockchain Networks"
      pos="relative"
      overflow="hidden"
    >
      <Box
        bgGradient="to-r"
        gradientFrom="black"
        gradientTo="transparent"
        pos="absolute"
        top="0"
        left="0"
        w="25vw"
        h="100px"
        zIndex={1}
      ></Box>
      <Box
        bgGradient="to-r"
        gradientFrom="black"
        gradientTo="transparent"
        pos="absolute"
        top="0"
        left="0"
        w="25vw"
        h="100px"
        zIndex={1}
      ></Box>
      <Box
        bgGradient="to-r"
        gradientFrom="black"
        gradientTo="transparent"
        pos="absolute"
        top="0"
        left="0"
        w="25vw"
        h="100px"
        zIndex={1}
      ></Box>
      <Box
        bgGradient="to-r"
        gradientFrom="black"
        gradientTo="transparent"
        pos="absolute"
        top="0"
        left="0"
        w="25vw"
        h="100px"
        zIndex={1}
      ></Box>
      <Slider alias="first">{chainSlides}</Slider>
      <Box
        bgGradient="to-l"
        gradientFrom="black"
        gradientTo="transparent"
        pos="absolute"
        top="0"
        right="0"
        w="25vw"
        h="100px"
        zIndex={1}
      ></Box>
    </Box>
  );
}
