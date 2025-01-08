import { Box, Text, Heading, VStack, HStack, Container } from '@chakra-ui/react';
import { BadgeCheckIcon, ComponentIcon, ShieldCheckIcon } from 'lucide-react';
import { TitleSection } from '../ui/title-sectiont';

const FeaturesSection = () => {
  const cards = [
    {
      icon: (size: number = 24) => <BadgeCheckIcon size={size} strokeWidth={1.5} />,
      title: 'Proof of Authenticity',
      subtitle:
        'On-chain wallet validation that the data comes directly from the official data provider, eliminating risks of tampering.',
      borderColor: 'whiteAlpha.800',
    },
    {
      icon: (size: number = 24) => <ShieldCheckIcon size={size} strokeWidth={1.5} />,
      title: 'Confidence Index',
      subtitle:
        'Our system monitors data for anomalies using statistical and density-based detection techniques. Any outlier data is flagged so the consumer contract can determine how to handle it.',
      borderColor: 'brand.800',
    },
    {
      icon: (size: number = 24) => <ComponentIcon size={size} strokeWidth={1.5} />,
      title: 'External Auditors',
      subtitle: 'A pool of independent auditors validates the integrity and accuracy of the data provided',
      borderColor: 'brand.950',
    },
  ];

  const updateCardPositions = (hoveredIndex: number | null) => {
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
  };

  return (
    <Container py={{ base: 8, md: 16 }}>
      <TitleSection>
        <Heading textStyle="title">Our key features</Heading>
        <Text textStyle="subtitle">Reliable solutions for secure and precise data delivery</Text>
      </TitleSection>
      <HStack position="relative" w="100%" gap={20}>
        <VStack flex={1} pos="relative" h="600px">
          {cards.map((card, index) => (
            <VStack
              key={index}
              position="absolute"
              top="0%"
              left="50%"
              w="300px"
              h="400px"
              zIndex={cards.length - index}
              transform={`translate(-50%, calc(100px * ${index})) rotate(40deg) skew(-20deg, -10deg)`}
              border="2px solid"
              borderColor={card.borderColor}
              bg="trasnparent"
              boxShadow="lg"
              borderRadius="xl"
              gap={8}
              transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
              className={`card-${index}`}
              align="center"
              backdropFilter="blur(2px)"
              justify="center"
              overflow="hidden"
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
              <Text color={card.borderColor}>{card.icon(48)}</Text>
            </VStack>
          ))}
        </VStack>
        <VStack flex={1} gap={0} position="relative">
          {cards.map((card, index) => (
            <Box key={index} position="relative" w="100%">
              <VStack
                role="button"
                id={`card-info-${index}`}
                onMouseEnter={() => updateCardPositions(index)}
                onMouseLeave={() => updateCardPositions(null)}
                alignItems="flex-start"
                p={8}
                borderRadius="md"
                position="relative"
                transition="all 0.3s ease-in-out"
                _hover={{
                  py: 16,
                  '& > .connector': {
                    opacity: 1,
                    width: '49px',
                    left: '-49px',
                  },
                }}
              >
                <VStack w="full" align="flex-start">
                  <Heading color="whiteAlpha.900">{card.title}</Heading>
                  <Text color="whiteAlpha.500">{card.subtitle}</Text>
                </VStack>
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
              </VStack>
            </Box>
          ))}
        </VStack>
      </HStack>
    </Container>
  );
};

export { FeaturesSection };
