import { Box, Container, Heading, Text, HStack, VStack } from '@chakra-ui/react';
import { Card } from '@/components/ui/card';
import { TitleSection } from '@/components/ui/title-sectiont';
import { ArrowUpIcon, EyeIcon, LockIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

export const FeaturesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('features-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const distanceFromViewport = rect.top - windowHeight;

        if (distanceFromViewport < 200 && !hasAnimated) {
          setHasAnimated(true);
        }

        const progress = hasAnimated ? Math.max(0, Math.min(1, 1 - distanceFromViewport / windowHeight)) : 0;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  const layergap = hasAnimated ? 300 - scrollProgress * 250 : 300;

  return (
    <Box position="relative" overflow="hidden" id="features-section">
      <Container maxW="6xl">
        {/* Title Section */}
        <TitleSection align="flex-start">
          <Heading textStyle="title" mb={4}>Our key features</Heading>
          <Text textStyle="subtitle" mb={12}>Reliable solutions for secure and precise data delivery</Text>
        </TitleSection>

        <VStack align="stretch" gap={12}>
          {/* Layers Section */}
          <Box position="relative" h="500px">
            {[
              { icon: <EyeIcon size={32} strokeWidth={3} />, index: 0, offset: 0.5, opacity: 'whiteAlpha.100' },
              { icon: <ArrowUpIcon size={32} strokeWidth={3} />, index: 1, offset: 0.3, opacity: 'whiteAlpha.50' },
              { icon: <LockIcon size={32} strokeWidth={3} />, index: 2, offset: 0.1, opacity: 'whiteAlpha.30' }
            ].map((layer, i) => (
              <VStack
                key={i}
                position="absolute"
                width="400px"
                height="300px"
                bg={hoveredCard === i ? 'brand.500' : layer.opacity}
                borderRadius="xl"
                transform={
                  hoveredCard === i
                    ? 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(50px)'
                    : `perspective(1000px) rotateX(50deg) rotateY(45deg) translateZ(${-layergap * layer.offset}px)`
                }
                border="4px solid"
                borderColor={`whiteAlpha.${200 - i * 50}`}
                top="150px"
                left={`${50 + (i * 100) + layergap * layer.offset}px`}
                align="center"
                justify="center"
                zIndex={hoveredCard === i ? 3 : 1}
                transition="all 1s ease-in-out"
                boxShadow="0 20px 40px rgba(0,0,0,0.3)"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {layer.icon}
              </VStack>
            ))}
          </Box>

          {/* Cards Section */}
          <HStack gap={8} w="full">
            {[
              {
                icon: <EyeIcon size={24} strokeWidth={2} />,
                title: 'Confidence index',
                description: 'Reliability measure based on trusted data sources and institutions'
              },
              {
                icon: <ArrowUpIcon size={24} strokeWidth={2} />,
                title: 'Compliance',
                description: 'Regulatory adherence verified by official institutions'
              },
              {
                icon: <LockIcon size={24} strokeWidth={2} />,
                title: 'Proof of Authenticity',
                description: 'Cryptographic verification of data authenticity'
              }
            ].map((card, i) => (
              <Card key={i} onMouseEnter={() => setHoveredCard(i)} onMouseLeave={() => setHoveredCard(null)}>
                <HStack gap={4} align="center" mb={2}>
                  <Box opacity={0.7}>{card.icon}</Box>
                  <Heading fontSize="xl">{card.title}</Heading>
                </HStack>
                <Text fontSize="sm" color="whiteAlpha.800" lineHeight="1.6">
                  {card.description}
                </Text>
              </Card>
            ))}
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};
