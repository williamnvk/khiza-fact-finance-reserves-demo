import { Box, Container, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import BrazilianTesouroNacionalIcon from '@/components/Icons/BrazilianTesouroNacional';
import SolanaHorizontal from '@/components/Icons/SolanaHorizontal';
import MorganCreek from '@/components/Icons/MorganCreek';
import KhizaIcon from '@/components/Icons/KhizaIcon';
import LiqiLogo from '@/components/Icons/Liqi';
import LogoIcon from '@/components/Icons/LogoIcon';
import { FC } from 'react';

export const Hero: FC<{ heroNumber: number }> = ({ heroNumber = 8 }) => {
  return (
    <Box pos="relative">
      <HStack w="auto" minH="calc(100vh + 72px)">
        <Box
          // borderRadius="4xl"
          // border="2px solid {colors.whiteAlpha.200}"
          // boxShadow="2xl"
          as="video"
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          objectFit="cover"
          zIndex={0}
          autoPlay
          muted
          filter={heroNumber === 8 ? 'invert(1) brightness(0.15)' : 'brightness(0.2)'}
          // filter="brightness(.2)"
          // transform="rotate(180deg)"
          mixBlendMode="luminosity"
          // blendMode="soft-light"
          // opacity={.8}
          loop
          src={`/assets/hero-${heroNumber}.mp4`}
        />
        {/* <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="full"
          h="full"
          bg="radial-gradient(circle, transparent 0%, {colors.brand.950} 25%, transparent 100%)"
          filter="blur(200px)"
          zIndex={1}
        /> */}
        <Box
          position="absolute"
          top="0%"
          left="0%"
          transform="translate(-50%, -50%)"
          w="100vw"
          h="100vh"
          bg="radial-gradient(circle, {colors.brand.900} 0%, {colors.brand.900} 25%, rgba(0,0,0,.5) 100%)"
          filter="blur(100px)"
          zIndex={1}
        />
        <Box
          position="absolute"
          top="100%"
          right="-50%"
          transform="translate(-50%, -50%)"
          w="50vw"
          h="100vh"
          bg="radial-gradient(circle, {colors.brand.950} 0%, {colors.brand.900} 25%, rgba(0,0,0,.5) 100%)"
          filter="blur(100px)"
          zIndex={2}
        />
      </HStack>
      <Container pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" w="full" h="full" zIndex={1}>
        <VStack align="center" h="calc(100vh - 144px)" justify="center" gap={0} mt="72px">
          <VStack flex={1} align="center" justify="center">
            <LogoIcon width={32} height={32} />
            <Heading fontSize="6xl" lineHeight={1} textAlign="center" fontWeight="400">
              Official data for the
              <br />
              <Text as="span" fontSize="8xl" lineHeight={1} textAlign="center" fontWeight="600" color="brand.50">
                tokenized economy
              </Text>
            </Heading>
            <Text textStyle="subtitle" textAlign="center">
              Delivering accurate, verified, and official data to power <br />
              real-world asset tokenization.{' '}
            </Text>

            <HStack gap={4}>
              <Button size="xl">Talk to an expert</Button>
              <Button variant="ghost" size="xl">
                Data hub
              </Button>
            </HStack>
          </VStack>
          <VStack w="full" justify="center" align="center" maxW="4xl" gap={0}>
            <VStack align="flex-start">
              <Text
                fontSize="sm"
                bgGradient="to-r"
                gradientFrom="brand.900"
                gradientTo="brand.400"
                bgClip="text"
                textTransform="uppercase"
                letterSpacing={2}
                fontWeight="600"
              >
                Trusted by
              </Text>
              {/* <Text fontSize="sm">
                  Supported by key players and institutions
                  <br />
                  driving blockchain innovation
                </Text> */}
            </VStack>
            <HStack
              flex={1}
              gap={4}
              align="center"
              justify="center"
              filter="grayscale(1)"
              my={0}
              transition="opacity 0.3s ease-in-out"
              opacity={0.5}
              _hover={{ opacity: 1 }}
            >
              <VStack gap={0} align="flex-start" justify="center">
                <HStack justify="center" flexWrap="wrap" gap={4} flex={1}>
                  <MorganCreek width={168} height={88} />
                  <Image src="/assets/outlier-ventures.png" alt="Outlier Ventures" filter="invert(1)" h="22px" />
                  <KhizaIcon width={112} height={88} />
                </HStack>
                <HStack justify="center" flexWrap="wrap" gap={4} mt={-6}>
                  <LiqiLogo width={128} height={72} />
                  <Image
                    src="/assets/firmeza-token.avif"
                    alt="Firmeza Token"
                    filter="invert(1) brightness(2)"
                    h="42px"
                  />
                  <SolanaHorizontal width={195} height={78} />
                </HStack>
              </VStack>
              <BrazilianTesouroNacionalIcon width={112} height={112} />
            </HStack>

            {/* <Center pt={8}>
            <Button variant="outline">Get to know us</Button>
          </Center> */}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};
