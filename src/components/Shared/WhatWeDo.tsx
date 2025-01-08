import { Box, Container, Heading, HStack, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import { TitleSection } from '@/components/ui/title-sectiont';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const WhatWeDo = () => {
  const cardRefs = {
    'capital-markets': useRef<HTMLDivElement>(null),
    'real-estate': useRef<HTMLDivElement>(null),
    commodities: useRef<HTMLDivElement>(null),
  };

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  // Responsive layout
  const stackDirection = useBreakpointValue({ base: 'column', lg: 'row' });
  const headingSize = useBreakpointValue({ base: '3xl', md: '4xl', lg: '4xl' });
  const containerMaxW = useBreakpointValue({ base: '100%', lg: '7xl' });

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
    <Container as="section" maxW={containerMaxW} py={{ base: 8, md: 16 }} aria-labelledby="what-we-do-title">
      <VStack gap={8} w="full" align="center">
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
          <Heading id="what-we-do-title" textStyle="title" textAlign="center">
            Powering asset tokenization with
            <br />
            trusted real-world data{' '}
          </Heading>
          <Text as="p" textStyle="subtitle" maxW="2xl" textAlign="center">
            The data layer connecting official data sources to tokenized assets, unlocking innovative financial
            solutions
          </Text>
        </TitleSection>

        <HStack 
          as={motion.div}
          gap={{ base: 4, md: 8 }} 
          w="full" 
          align="stretch" 
          justify="center"
          flexDirection={stackDirection as StackDirection}
          flexWrap={{ base: 'wrap', lg: 'nowrap' }}
        >
          {[
            {
              id: 'capital-markets',
              title: 'Capital Markets',
              description: 'Access official economic indices straight from the official source',
              video: '/assets/what-we-do/capital-markets.mp4'
            },
            {
              id: 'real-estate', 
              title: 'Real Estate',
              description: 'Square meter price and proof of reserve for tokenized properties',
              video: '/assets/what-we-do/real-estate.mp4'
            },
            {
              id: 'commodities',
              title: 'Commodities', 
              description: 'Qualitative data and event monitoring for tokenized commodities',
              video: '/assets/what-we-do/commodities.mp4'
            }
          ].map(card => (
            <VStack
              key={card.id}
              ref={cardRefs[card.id as keyof typeof cardRefs]}
              id={`card-${card.id}`}
              className="what-we-do-card"
              align="flex-start"
              flex="1"
              minH={{ base: '300px', md: '400px' }}
              p={6}
              position="relative"
              overflow="hidden"
              role="article"
              borderRadius="xl"
              transition="all 0.3s ease"
              _hover={{ transform: 'scale(1.02)' }}
              onMouseEnter={() => {
                setHoveredCard(card.id);
                if (cardRefs[card.id as keyof typeof cardRefs].current) {
                  cardRefs[card.id as keyof typeof cardRefs].current!.style.setProperty('--size', '200px');
                }
              }}
              onMouseLeave={() => {
                setHoveredCard(null);
                if (cardRefs[card.id as keyof typeof cardRefs].current) {
                  cardRefs[card.id as keyof typeof cardRefs].current!.style.setProperty('--size', '0px');
                }
              }}
            >
              <Box
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
                playsInline
                loop
                preload="metadata"
                aria-hidden="true"
                filter="brightness(0.3)"
                mixBlendMode="luminosity"
              >
                <source src={card.video} type="video/mp4" />
              </Box>

              <Box
                position="absolute"
                inset={0}
                bg="linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))"
                zIndex={1}
              />

              <Heading 
                as="h3" 
                fontSize={headingSize} 
                lineHeight={1}
                mb={4} 
                zIndex={2}
              >
                {card.title}
              </Heading>
              <Text 
                textStyle="subtitle" 
                zIndex={2}
                fontSize={{ base: 'sm', md: 'md' }}
                h="100px"
              >
                {card.description}
              </Text>
            </VStack>
          ))}
        </HStack>

        <Button 
          variant="ghost"
          aria-label="View use cases"
          size={{ base: 'md', md: 'lg' }}
        >
          See our use cases
        </Button>
      </VStack>
    </Container>
  );
};
