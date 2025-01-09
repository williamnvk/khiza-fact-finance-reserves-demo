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
            as="article"
            p={{ base: 2, sm: 3, md: 4 }}
            _hover={{ transform: 'scale(1.05)', opacity: 0.9 }}
            transition="all 0.2s ease-in-out"
            borderRadius="full"
            bg="whiteAlpha.50"
            gap={{ base: 2, sm: 3, md: 4 }}
            align="center"
            justify="center"
            h={{ base: "60px", sm: "70px", md: "80px" }}
          >
            {chain.icon ? (
              <Image
                filter="grayscale(1)"
                _hover={{ filter: 'grayscale(0)' }}
                alt={`${chain.value} blockchain network logo`}
                src={chain.icon}
                width={{ base: '36px', sm: '42px', md: '48px' }}
                height={{ base: '36px', sm: '42px', md: '48px' }}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            ) : null}
            <Text 
              flex={1}
              fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
              fontWeight="medium"
            >
              {chain.value}
            </Text>
          </HStack>
        </Slider.Slide>
      )),
    [chains],
  );

  return (
    <Box
      as="section"
      w="full"
      aria-label="Supported blockchain networks"
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
        w={{ base: "15vw", md: "25vw" }}
        h={{ base: "80px", sm: "100px", md: "120px" }}
        zIndex={1}
        aria-hidden="true"
      />

      <Slider 
        alias="first"
        aria-roledescription="carousel"
      >
        {chainSlides}
      </Slider>

      <Box
        bgGradient="to-l"
        gradientFrom="black"
        gradientTo="transparent"
        pos="absolute"
        top={0}
        right={0}
        w={{ base: "15vw", md: "25vw" }}
        h={{ base: "80px", sm: "100px", md: "120px" }}
        zIndex={1}
        aria-hidden="true"
      />
    </Box>
  );
}
