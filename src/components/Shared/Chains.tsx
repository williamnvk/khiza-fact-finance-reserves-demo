import { Box, Text, VStack, Image } from '@chakra-ui/react';
import { chains } from '@/data/chains';
import Slider from '@/components/Shared/Slider';
import { useMemo } from 'react';

export default function HomePage() {
  // Memoize chain slides to prevent unnecessary re-renders
  const chainSlides = useMemo(
    () =>
      chains.map((chain) => (
        <Slider.Slide key={chain.value}>
          <VStack
            align="center"
            justify="center"
            p={{ base: 4, md: 6 }}
            width={{ base: '120px', md: '140px' }}
            bgGradient="linear(to-br, gray.700, gray.800, transparent)"
            color="gray.50"
            rounded="xl"
            border="solid 1px"
            borderColor="gray.600"
            height="full"
          >
            {chain.icon ? (
              <Image alt={`${chain.value} logo`} src={chain.icon} width={{ base: '24px', md: '32px' }} loading="lazy" />
            ) : null}
            <Text textAlign={{ base: 'center' }} fontSize={{ base: 'sm', md: 'md' }}>
              {chain.name}
            </Text>
          </VStack>
        </Slider.Slide>
      )),
    [chains],
  );

  return (
    <Box
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="200"
      bgGradient="linear(to-t, transparent, gray.700)"
      w="full"
      mb={{ base: 0, md: 12 }}
      role="region"
      aria-label="Supported Blockchain Networks"
    >
      <Slider alias="first">{chainSlides}</Slider>
    </Box>
  );
}
