import { Box, Container, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import { TitleSection } from '@/components/ui/title-sectiont';
import { useState, useEffect, useRef } from 'react';

export const WhatWeDo = () => {
  const cardRefs = {
    'capital-markets': useRef<HTMLDivElement>(null),
    'real-estate': useRef<HTMLDivElement>(null),
    commodities: useRef<HTMLDivElement>(null),
  };

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!hoveredCard || !cardRefs[hoveredCard]?.current) return;

      const card = cardRefs[hoveredCard].current;
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hoveredCard]);

  return (
    <Container>
      <VStack gap={4} w="full" align="center">
        <TitleSection>
          <Text
            fontSize="sm"
            bgGradient="to-r"
            gradientFrom="brand.50"
            gradientTo="brand.400"
            bgClip="text"
            textTransform="uppercase"
            letterSpacing={2}
            fontWeight="600"
          >
            WHAT WE DO
          </Text>
          <Heading textStyle="title" textAlign="center">
            Powering asset tokenization with
            <br />
            trusted real-world data{' '}
          </Heading>
          <Text textStyle="subtitle" maxW="2xl" textAlign="center">
            The data layer connecting official data sources to tokenized assets, unlocking innovative financial
            solutions
          </Text>
        </TitleSection>

        <HStack gap={8} w="full" align="center" justify="center">
          <VStack
            ref={cardRefs['capital-markets']}
            id="card-capital-markets"
            className="what-we-do-card"
            align="flex-start"
            onMouseEnter={() => {
              setHoveredCard('capital-markets');
              if (cardRefs['capital-markets'].current) {
                cardRefs['capital-markets'].current.style.setProperty('--size', '200px');
              }
            }}
            onMouseLeave={() => {
              setHoveredCard(null);
              if (cardRefs['capital-markets'].current) {
                cardRefs['capital-markets'].current.style.setProperty('--size', '0px');
              }
            }}
          >
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
              filter="brightness(0.3)"
            //   transform="rotate(180deg)"
              mixBlendMode="luminosity"
            //   blendMode="soft-light"
              // opacity={.1}
              loop
              src="/assets/capital-markets-3.mp4"
            />
            <Box
              position="absolute"
              top="50%"
              left="0%"
              transform="translate(-50%, -50%)"
              w="100%"
              h="100%"
              bg="radial-gradient(circle, black 0%, rgba(0,0,0,.5) 100%)"
              filter="blur(60px)"
              opacity={0.3}
              zIndex={1}
            />
             <Box
              position="absolute"
              top="0%"
              right="-100%"
              transform="translate(-50%, -50%)"
              w="100%"
              h="100%"
              bg="radial-gradient(circle, black 0%, rgba(0,0,0,.5) 100%)"
              filter="blur(60px)"
              opacity={0.6}
              zIndex={1}
            />
            <Box
              position="absolute"
              bottom="-50%"
              right="-50%"
              transform="translate(-50%, -50%)"
              w="50%"
              h="50%"
              bg="radial-gradient(circle, {colors.brand.900} 0%, {colors.brand.900} 25%, rgba(0,0,0,.5) 100%)"
              filter="blur(40px)"
              zIndex={1}
            />
            <Heading fontSize="4xl" mb={4} zIndex={2}>
              Capital Markets
            </Heading>
            <Text textStyle="subtitle" zIndex={2}>
              Access official economic indices straight from the official source
            </Text>
          </VStack>

          <VStack
            ref={cardRefs['real-estate']}
            id="card-real-estate"
            className="what-we-do-card"
            align="flex-start"
            onMouseEnter={() => {
              setHoveredCard('real-estate');
              if (cardRefs['real-estate'].current) {
                cardRefs['real-estate'].current.style.setProperty('--size', '200px');
              }
            }}
            onMouseLeave={() => {
              setHoveredCard(null);
              if (cardRefs['real-estate'].current) {
                cardRefs['real-estate'].current.style.setProperty('--size', '0px');
              }
            }}
          >
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
              filter="brightness(.25)"
              // transform="rotate(180deg)"
              mixBlendMode="luminosity"
              // blendMode="soft-light"
              // opacity={.1}
              loop
              src="/assets/real-estate-2.mp4"
            />
            <Box
              position="absolute"
              top="0%"
              left="0%"
              transform="translate(-50%, -50%)"
              w="100%"
              h="100%"
              bg="radial-gradient(circle, black 0%, rgba(0,0,0,.5) 100%)"
              filter="blur(60px)"
              opacity={0.3}
              zIndex={1}
            />
            <Box
              position="absolute"
              bottom="-50%"
              right="-50%"
              transform="translate(-50%, -50%)"
              w="50%"
              h="50%"
              bg="radial-gradient(circle, {colors.brand.900} 0%, {colors.brand.900} 25%, rgba(0,0,0,.5) 100%)"
              filter="blur(40px)"
              zIndex={1}
            />
            <Heading fontSize="5xl" mb={4} zIndex={2}>
              Real Estate
            </Heading>
            <Text textStyle="subtitle" zIndex={2}>
              Square meter price and proof of reserve for tokenized properties{' '}
            </Text>
          </VStack>

          <VStack
            ref={cardRefs['commodities']}
            id="card-commodities"
            className="what-we-do-card"
            align="flex-start"
            onMouseEnter={() => {
              setHoveredCard('commodities');
              if (cardRefs['commodities'].current) {
                cardRefs['commodities'].current.style.setProperty('--size', '200px');
              }
            }}
            onMouseLeave={() => {
              setHoveredCard(null);
              if (cardRefs['commodities'].current) {
                cardRefs['commodities'].current.style.setProperty('--size', '0px');
              }
            }}
            zIndex={2}
          >
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
              filter="brightness(.25) grayscale(1)"
              // transform="rotate(180deg)"
            //   mixBlendMode="luminosity"
            //   blendMode="soft-light"
              // opacity={.1}
              loop
              src="/assets/commodities-1.mp4"
            />
            <Box
              position="absolute"
              top="0%"
              left="0%"
              transform="translate(-50%, -50%)"
              w="100%"
              h="100%"
              bg="radial-gradient(circle, black 0%, rgba(0,0,0,.5) 100%)"
              filter="blur(60px)"
              opacity={0.3}
              zIndex={1}
            />
            <Box
              position="absolute"
              bottom="-50%"
              right="-50%"
              transform="translate(-50%, -50%)"
              w="50%"
              h="50%"
              bg="radial-gradient(circle, {colors.brand.900} 0%, {colors.brand.900} 25%, rgba(0,0,0,.5) 100%)"
              filter="blur(40px)"
              zIndex={1}
            />
            <Heading fontSize="5xl" mb={4} zIndex={2}>
              Commodities
            </Heading>
            <Text textStyle="subtitle" zIndex={2}>
              Qualitative data and event monitoring for tokenized commoditie
            </Text>
          </VStack>
        </HStack>
        <Button variant="ghost">See our use cases</Button>
      </VStack>
    </Container>
  );
};
