import { Box, Text, Heading, VStack, HStack, Container, useBreakpointValue } from '@chakra-ui/react';
import { BadgeCheckIcon, ComponentIcon, ShieldCheckIcon } from 'lucide-react';
import { TitleSection } from '../ui/title-sectiont';
import { memo } from 'react';

const FeaturesSection = memo(() => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const stackDirection = useBreakpointValue({ base: 'column', md: 'row' }) as 'column' | 'row';
  const cardWidth = useBreakpointValue({ base: '250px', md: '300px' });
  const cardHeight = useBreakpointValue({ base: '300px', md: '400px' });

  const cards = [
    {
      icon: (size: number = 24) => <BadgeCheckIcon size={size} strokeWidth={1.5} aria-hidden="true" />,
      title: 'Proof of Authenticity',
      subtitle:
        'On-chain wallet validation that the data comes directly from the official data provider, eliminating risks of tampering.',
      borderColor: 'whiteAlpha.800',
    },
    {
      icon: (size: number = 24) => <ShieldCheckIcon size={size} strokeWidth={1.5} aria-hidden="true" />,
      title: 'Confidence Index',
      subtitle:
        'Our system monitors data for anomalies using statistical and density-based detection techniques. Any outlier data is flagged so the consumer contract can determine how to handle it.',
      borderColor: 'brand.800',
    },
    {
      icon: (size: number = 24) => <ComponentIcon size={size} strokeWidth={1.5} aria-hidden="true" />,
      title: 'External Auditors',
      subtitle: 'A pool of independent auditors validates the integrity and accuracy of the data provided',
      borderColor: 'brand.950',
    },
  ];

  const updateCardPositions = (hoveredIndex: number | null) => {
    if (isMobile) return;
    
    requestAnimationFrame(() => {
      cards.forEach((_, index) => {
        const cardElement = document.querySelector(`.card-${index}`) as HTMLElement;
        if (cardElement) {
          let yOffset = 100 * index;

          if (hoveredIndex !== null) {
            const distance = Math.abs(index - hoveredIndex);
            if (index < hoveredIndex) {
              yOffset -= 40 / (distance + 1);
            } else if (index > hoveredIndex) {
              yOffset += 40 / (distance + 1);
            } else {
              yOffset -= 30;
            }
          }

          cardElement.style.transform = `translate(-50%, ${yOffset}px) rotate(40deg) skew(-20deg, -10deg)`;
        }
      });
    });
  };

  return (
    <Container py={{ base: 8, md: 16 }} as="section" aria-labelledby="features-heading">
      <TitleSection>
        <Heading id="features-heading" textStyle="title">Our key features</Heading>
        <Text textStyle="subtitle">Reliable solutions for secure and precise data delivery</Text>
      </TitleSection>
      <HStack 
        position="relative" 
        w="100%" 
        gap={{ base: 8, md: 20 }}
        flexDirection={stackDirection}
        align="stretch"
      >
        <VStack flex={1} pos="relative" h={{ base: '400px', md: '600px' }} aria-hidden="true">
          {cards.map((card, index) => (
            <VStack
              key={index}
              position="absolute"
              top="0%"
              left="50%"
              w={cardWidth}
              h={cardHeight}
              zIndex={cards.length - index}
              transform={`translate(-50%, calc(${isMobile ? '70px' : '100px'} * ${index})) rotate(40deg) skew(-20deg, -10deg)`}
              border="2px solid"
              borderColor={card.borderColor}
              bg="transparent"
              boxShadow="lg"
              borderRadius="xl"
              gap={8}
              transition={isMobile ? 'none' : "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"}
              className={`card-${index}`}
              align="center"
              backdropFilter="blur(2px)"
              justify="center"
              overflow="hidden"
              onMouseEnter={() => !isMobile && updateCardPositions(index)}
              onMouseLeave={() => !isMobile && updateCardPositions(null)}
            >
              <Box
                position="absolute"
                top="0%"
                left="0%"
                transform="translate(-50%, -50%)"
                w="100%"
                h="100%"
                bg="radial-gradient(circle, {colors.brand.900} 0%, rgba(0,0,0,.5) 100%)"
                filter="blur(60px)"
                opacity={0.25 * (index + 1)}
                zIndex={1}
              />
              <Box
                position="absolute"
                bottom="-50%"
                left="0%"
                transform="translate(-50%, -50%)"
                w="100%"
                h="100%"
                bg={`radial-gradient(circle, {colors.${card.borderColor}} 0%, rgba(0,0,0,.5) 100%)`}
                filter="blur(60px)"
                opacity={0.25}
                zIndex={1}
              />
              <Text color={card.borderColor}>{card.icon(isMobile ? 32 : 48)}</Text>
            </VStack>
          ))}
        </VStack>
        <VStack flex={1} gap={0} position="relative">
          {cards.map((card, index) => (
            <Box key={index} position="relative" w="100%">
              <VStack
                role="button"
                tabIndex={0}
                aria-labelledby={`feature-title-${index}`}
                id={`card-info-${index}`}
                onMouseEnter={() => !isMobile && updateCardPositions(index)}
                onMouseLeave={() => !isMobile && updateCardPositions(null)}
                onKeyDown={(e) => {
                  if (!isMobile && (e.key === 'Enter' || e.key === ' ')) {
                    updateCardPositions(index);
                  }
                }}
                onBlur={() => !isMobile && updateCardPositions(null)}
                alignItems="flex-start"
                p={{ base: 4, md: 8 }}
                borderRadius="md"
                position="relative"
                transition={isMobile ? 'none' : "all 0.3s ease-in-out"}
                _hover={isMobile ? {} : {
                  py: 16,
                  '& > .connector': {
                    opacity: 1,
                    width: '49px',
                    left: '-49px',
                  },
                }}
              >
                <VStack w="full" align="flex-start" gap={2}>
                  <Heading id={`feature-title-${index}`} color="whiteAlpha.900" as="h3" fontSize={{ base: 'lg', md: 'xl' }}>{card.title}</Heading>
                  <Text color="whiteAlpha.500" fontSize={{ base: 'sm', md: 'md' }}>{card.subtitle}</Text>
                </VStack>
                {!isMobile && (
                  <>
                    <Box
                      className="connector"
                      position="absolute"
                      left="-8px"
                      top="50%"
                      height="2px"
                      w="0px"
                      bg={card.borderColor}
                      transformOrigin="left"
                      transition="width 0.3s ease-in-out"
                      opacity={0}
                      aria-hidden="true"
                    />
                    <Box
                      className="connector-dot"
                      position="absolute"
                      left="-60px"
                      top="50%"
                      borderRadius="full"
                      color={card.borderColor}
                      transform="translate(-50%, -50%)"
                      transition="all 0.3s ease-in-out"
                      opacity={1}
                      aria-hidden="true"
                      _before={{
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100%',
                        height: '100%',
                        borderRadius: 'full',
                        animation: 'pulse 1.5s ease-in-out infinite',
                      }}
                    >
                      {card.icon(24)}
                    </Box>
                  </>
                )}
              </VStack>
            </Box>
          ))}
        </VStack>
      </HStack>
    </Container>
  );
});

FeaturesSection.displayName = 'FeaturesSection';

export { FeaturesSection };
