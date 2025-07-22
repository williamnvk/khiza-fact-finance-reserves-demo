import { Box, Container, Heading, HStack, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { TitleSection } from '@/components/ui/title-sectiont';
import { useState, useEffect, useRef } from 'react';
import { StackDirection } from 'node_modules/@chakra-ui/react/dist/types/components/stack/get-separator-style';
import { useI18n } from '@/hooks/useI18n';

// Define the type for card keys
type CardKey = 'capital-markets' | 'real-estate' | 'commodities';

export const WhatWeDo = () => {
  const { t } = useI18n();
  const cardRefs: Record<CardKey, React.RefObject<HTMLDivElement | null>> = {
    'capital-markets': useRef<HTMLDivElement>(null),
    'real-estate': useRef<HTMLDivElement>(null),
    commodities: useRef<HTMLDivElement>(null),
  };

  const [hoveredCard, setHoveredCard] = useState<CardKey | null>(null);

  // Responsive layout
  const stackDirection = useBreakpointValue({ base: 'column', lg: 'row' });
  const headingSize = useBreakpointValue({ base: '2xl', md: '3xl', lg: '4xl' });

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
    <Container
      as="section"
      // maxW={{ base: '100%', lg: '6xl', xl: '7xl' }}
      minH={{ base: 'auto', lg: 'auto' }}
      py={{ base: 6, sm: 8, md: 12, lg: 16 }}
      px={{ base: 4, sm: 6, md: 8 }}
      aria-labelledby="what-we-do-title"
      zIndex={2}
      display="flex"
      alignItems="center"
    >
      <VStack gap={{ base: 6, sm: 8, md: 10 }} w="full" align="center">
        <TitleSection>
          <Text
            fontSize={{ base: 'xs', sm: 'sm' }}
            bgGradient="to-r"
            gradientFrom="brand.50"
            gradientTo="brand.400"
            bgClip="text"
            textTransform="uppercase"
            letterSpacing={2}
            fontWeight="600"
            w="full"
            textAlign={{ base: 'left', md: 'center' }}
          >
            {t('whatWeDo.title')}
          </Text>
          <Heading
            id="what-we-do-title"
            textStyle="title"
            fontSize={{ base: '4xl', sm: '3xl', md: '4xl', lg: '5xl' }}
            textAlign={{ base: 'left', md: 'center' }}
            lineHeight={{ base: '1.2', md: '1.3' }}
          >
            {t('whatWeDo.heading')}
          </Heading>
          <Text
            as="p"
            textStyle="subtitle"
            fontSize={{ base: 'sm', sm: 'md' }}
            maxW={{ base: '100%', md: '80%', lg: '70%' }}
            mx={{ base: 0, md: 'auto' }}
            w="full"
            textAlign={{ base: 'left', md: 'center' }}
          >
            {t('whatWeDo.description')}
          </Text>
        </TitleSection>

        <HStack
          gap={{ base: 4, md: 6, lg: 8 }}
          w="full"
          align="stretch"
          justify="center"
          flexDirection={stackDirection as StackDirection}
          flexWrap={{ base: 'wrap', lg: 'nowrap' }}
        >
          {[
            {
              id: 'capital-markets' as CardKey,
              title: t('whatWeDo.capitalMarkets.title'),
              description: t('whatWeDo.capitalMarkets.description'),
              video: '/assets/what-we-do/capital-markets.mp4',
            },
            {
              id: 'real-estate' as CardKey,
              title: t('whatWeDo.realEstate.title'),
              description: t('whatWeDo.realEstate.description'),
              video: '/assets/what-we-do/real-estate.mp4',
            },
            {
              id: 'commodities' as CardKey,
              title: t('whatWeDo.commodities.title'),
              description: t('whatWeDo.commodities.description'),
              video: '/assets/what-we-do/commodities.mp4',
            },
          ].map((card) => (
            <VStack
              key={card.id}
              ref={cardRefs[card.id]}
              id={`card-${card.id}`}
              className="what-we-do-card"
              align="flex-start"
              flex="1"
              minH={{ base: '240px', md: '360px' }}
              h={{ base: '240px', md: '360px' }}
              p={{ base: 4, sm: 8 }}
              position="relative"
              overflow="hidden"
              role="article"
              borderRadius="xl"
              transition="all 0.3s ease"
              _hover={{ transform: 'scale(1.02)' }}
              onMouseEnter={() => {
                setHoveredCard(card.id);
                if (cardRefs[card.id].current) {
                  cardRefs[card.id].current!.style.setProperty('--size', '200px');
                }
              }}
              onMouseLeave={() => {
                setHoveredCard(null);
                if (cardRefs[card.id].current) {
                  cardRefs[card.id].current!.style.setProperty('--size', '0px');
                }
              }}
            >
              <Box
                position="absolute"
                top="240px"
                left="50%"
                transform="translate(-50%, -50%)"
                w="300%"
                h={{ base: '200px', md: '100px' }}
                bg="radial-gradient(circle, #000 0%, #000 25%, rgba(0,0,0,.5) 100%)"
                filter="blur(20px)"
                zIndex={1}
              />

              <Box
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                zIndex={0}
              >
                <video
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center'
                  }}
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="metadata"
                  aria-hidden="true"
                >
                  <source src={card.video} type="video/mp4" />
                </video>
              </Box>

              <Box
                position="absolute"
                inset={0}
                bg="linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))"
                zIndex={1}
              />

              <Heading as="h3" fontSize={headingSize} lineHeight={1} mb={4} zIndex={2}>
                {card.title}
              </Heading>
              <Text textStyle="subtitle" zIndex={2} fontSize={{ base: 'md', md: '17px' }}>
                {card.description}
              </Text>
            </VStack>
          ))}
        </HStack>

        {/* <Button variant="ghost" aria-label="View use cases" size={{ base: 'md', md: 'lg' }}>
          See our use cases
        </Button> */}
      </VStack>
    </Container>
  );
};
