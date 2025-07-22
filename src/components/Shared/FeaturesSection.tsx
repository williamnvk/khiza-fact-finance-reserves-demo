import { Box, Text, Heading, VStack, HStack, Container, useBreakpointValue } from '@chakra-ui/react';
import { BadgeCheckIcon, ComponentIcon, SearchIcon } from 'lucide-react';
import { TitleSection } from '../ui/title-sectiont';
import { memo, useState } from 'react';
import { useI18n } from '@/hooks/useI18n';

const FeaturesSection = memo(() => {
  const { t } = useI18n();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const stackDirection = useBreakpointValue({ base: 'column', md: 'row' }) as 'column' | 'row';
  const cardWidth = useBreakpointValue({
    base: '200px',
    sm: '280px',
    md: '280px',
    lg: '280px',
    xl: '280px',
  });
  const cardHeight = useBreakpointValue({
    base: '150px',
    sm: '320px',
    md: '320px',
    lg: '320px',
    xl: '320px',
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    {
      icon: (size: number = 24) => <BadgeCheckIcon size={size} strokeWidth={1.5} aria-hidden="true" />,
      title: t('features.proofOfAuthenticity.title'),
      subtitle: t('features.proofOfAuthenticity.subtitle'),
      borderColor: 'brand.800',
    },
    {
      icon: (size: number = 24) => <SearchIcon size={size} strokeWidth={1.5} aria-hidden="true" />,
      title: t('features.confidenceIndex.title'),
      subtitle: t('features.confidenceIndex.subtitle'),
      borderColor: 'brand.800',
    },
    {
      icon: (size: number = 24) => <ComponentIcon size={size} strokeWidth={1.5} aria-hidden="true" />,
      title: t('features.externalAuditors.title'),
      subtitle: t('features.externalAuditors.subtitle'),
      borderColor: 'brand.800',
    },
  ];

  const updateCardPositions = (index: number | null) => {
    if (isMobile) return;

    setHoveredIndex(index);

    requestAnimationFrame(() => {
      cards.forEach((_, cardIndex) => {
        const cardElement = document.querySelector(`.card-${cardIndex}`) as HTMLElement;
        if (cardElement) {
          let yOffset = 100 * cardIndex;

          if (index !== null) {
            const distance = Math.abs(cardIndex - index);
            if (cardIndex < index) {
              yOffset -= 40 / (distance + 1);
            } else if (cardIndex > index) {
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
    <Container
      py={{ base: 4, md: 8 }}
      as="section"
      aria-labelledby="features-heading"
      maxW={{ base: '100%', lg: '6xl', xl: '7xl' }}
    >
      <TitleSection>
        <Heading
          id="features-heading"
          textStyle="title"
          fontSize={{ base: '4xl', sm: '4xl', md: '4xl', lg: '5xl' }}
          w="full"
          textAlign={{ base: 'left', md: 'center' }}
        >
          {t('features.sectionTitle')}
        </Heading>
        <Text
          textStyle="subtitle"
          fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
          maxW={{ base: '100%', md: '80%', lg: '70%' }}
          w="full"
          textAlign={{ base: 'left', md: 'center' }}
        >
          {t('features.sectionSubtitle')}
        </Text>
      </TitleSection>
      <HStack
        role="list"
        position="relative"
        w="100%"
        gap={{ base: 0, md: 20 }}
        flexDirection={stackDirection}
        align="stretch"
        aria-label="Feature cards"
      >
        <VStack
          minH={{ base: '280px', md: 'auto' }}
          flex={{ base: 0.6, md: 1 }}
          pos="relative"
          aria-hidden="true"
          px={{ base: 0, md: 8 }}
          align="center"
          justify="center"
        >
          {cards.map((card, index) => (
            <VStack
              key={index}
              position="absolute"
              top="0%"
              left="50%"
              w={cardWidth}
              h={cardHeight}
              zIndex={cards.length - index}
              transform={`translate(-50%, calc(${
                isMobile ? '40px' : '100px'
              } * ${index})) rotate(40deg) skew(-20deg, -10deg)`}
              border="2px solid"
              borderColor={hoveredIndex === index ? 'white' : card.borderColor}
              transition="all 0.3s ease-in-out"
              bg="transparent"
              borderRadius="2xl"
              gap={8}
              className={`card-${index}`}
              align="center"
              backdropFilter="blur(2px)"
              justify="center"
              overflow="hidden"
              onMouseEnter={() => !isMobile && updateCardPositions(index)}
              onMouseLeave={() => !isMobile && updateCardPositions(null)}
              role="button"
              tabIndex={0}
              aria-controls={`card-info-${index}`}
            >
              <Box
                position="absolute"
                top="0%"
                left="0%"
                transform="translate(-50%, -50%)"
                w="100%"
                h="100%"
                bg="radial-gradient(circle, {colors.brand.900} 0%, rgba(0,0,0,.5) 100%)"
                filter="blur(30px)"
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
              <Text color={hoveredIndex === index ? 'white' : card.borderColor}>{card.icon(isMobile ? 32 : 48)}</Text>
            </VStack>
          ))}
        </VStack>
        <VStack flex={{ base: 0.4, md: 1 }} gap={0} position="relative">
          {cards.map((card, index) => (
            <Box key={index} position="relative" w="full">
              <VStack
                role="button"
                tabIndex={0}
                aria-labelledby={`feature-title-${index}`}
                id={`card-info-${index}`}
                alignItems="flex-start"
                px={{ base: 0, md: 8 }}
                py={{ base: 4, md: 8 }}
                borderRadius="md"
                position="relative"
                transition={isMobile ? 'none' : 'all 0.3s ease-in-out'}
                onMouseEnter={() => !isMobile && updateCardPositions(index)}
                onMouseLeave={() => !isMobile && updateCardPositions(null)}
                _hover={
                  isMobile
                    ? {}
                    : {
                        py: 16,
                        '& > .connector': {
                          opacity: 1,
                          width: '40px',
                          left: '-12px',
                        },
                      }
                }
                {...(!isMobile && hoveredIndex === index
                  ? {
                      py: 16,
                      '& > .connector': {
                        opacity: 1,
                        width: '40px',
                        left: '-12px',
                      },
                    }
                  : {})}
              >
                <VStack w="full" align="flex-start" gap={2}>
                  <Heading
                    id={`feature-title-${index}`}
                    color="whiteAlpha.900"
                    as="h3"
                    fontSize={{ base: 'lg', md: 'xl' }}
                  >
                    {card.title}
                  </Heading>
                  <Text color="whiteAlpha.500" fontSize={{ base: 'sm', md: 'md' }}>
                    {card.subtitle}
                  </Text>
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
                      bg="white"
                      transformOrigin="left"
                      transition="width 0.3s ease-in-out"
                      opacity={0}
                      aria-hidden="true"
                    />
                    <Box
                      className="connector-dot"
                      position="absolute"
                      left="-30px"
                      top="50%"
                      borderRadius="full"
                      color="white"
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
