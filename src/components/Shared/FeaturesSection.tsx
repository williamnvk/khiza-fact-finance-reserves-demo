import { Box, Container, Heading, Text, HStack, VStack } from '@chakra-ui/react';
import { Card } from '@/components/ui/card';
import { TitleSection } from '@/components/ui/title-sectiont';
import { ArrowUpIcon, EyeIcon, LockIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

export const FeaturesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hasAnimated]);

  const layergap = hasAnimated ? 300 - scrollProgress * 250 : 300;

  const features = [
    {
      icon: <EyeIcon size={32} strokeWidth={3} />,
      title: 'Confidence index',
      description: 'Reliability measure based on trusted data sources and institutions',
      index: 0,
      offset: 0.5,
      opacity: 'whiteAlpha.100',
      color: 'blue.400'
    },
    {
      icon: <ArrowUpIcon size={32} strokeWidth={3} />,
      title: 'Compliance',
      description: 'Regulatory adherence verified by official institutions',
      index: 1,
      offset: 0.3,
      opacity: 'whiteAlpha.50',
      color: 'purple.400'
    },
    {
      icon: <LockIcon size={32} strokeWidth={3} />,
      title: 'Proof of Authenticity', 
      description: 'Cryptographic verification of data authenticity',
      index: 2,
      offset: 0.1,
      opacity: 'whiteAlpha.30',
      color: 'pink.400'
    }
  ];

  const calculateDynamicTransform = (index: number) => {
    const mouseX = (mousePosition.x / window.innerWidth - 0.5) * 20;
    const mouseY = (mousePosition.y / window.innerHeight - 0.5) * 20;

    if (hoveredCard === index) {
      const rotateX = (mousePosition.y / window.innerHeight - 0.5) * 30;
      const rotateY = (mousePosition.x / window.innerWidth - 0.5) * 30;
      return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(100px) scale(1.1)`;
    }
    return `perspective(1000px) rotateX(${mouseY + 60 + Math.sin(Date.now() / 2000) * 10}deg) rotateY(${mouseX + 45 + Math.cos(Date.now() / 2000) * 10}deg) translateZ(${-layergap * features[index].offset}px)`;
  };

  return (
    <Box position="relative" overflow="hidden" id="features-section">
      <Container maxW="6xl">
        <TitleSection align="flex-start">
          <Heading textStyle="title" mb={4}>Our key features</Heading>
          <Text textStyle="subtitle" mb={12}>Reliable solutions for secure and precise data delivery</Text>
        </TitleSection>

        <VStack align="stretch" gap={12}>
          <Box position="relative" h="500px">
            {features.map((feature, i) => (
              <VStack
                key={i}
                position="absolute"
                width="400px"
                height="300px"
                bg={hoveredCard === i ? `${feature.color}` : feature.opacity}
                borderRadius="xl"
                transform={calculateDynamicTransform(i)}
                border="4px solid"
                borderColor={hoveredCard === i ? feature.color : `whiteAlpha.${200 - i * 50}`}
                top="150px"
                left={`${50 + (i * 100) + layergap * feature.offset}px`}
                align="center"
                justify="center"
                zIndex={hoveredCard === i ? 3 : 1}
                transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                boxShadow={hoveredCard === i ? 
                  `0 20px 60px ${feature.color}33, 0 0 20px ${feature.color}22` : 
                  '0 20px 40px rgba(0,0,0,0.3)'}
                style={{ transformStyle: 'preserve-3d' }}
                cursor="pointer"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${feature.color}22 0%, transparent 60%)`,
                  opacity: hoveredCard === i ? 1 : 0,
                  transition: 'opacity 0.3s',
                  borderRadius: 'xl',
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <VStack gap={4} p={6}>
                  <Box 
                    opacity={hoveredCard === i ? 1 : 0.7}
                    transform={hoveredCard === i ? 'scale(1.2) rotate(360deg)' : 'scale(1)'}
                    transition="all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                    color={hoveredCard === i ? feature.color : 'white'}
                  >
                    {feature.icon}
                  </Box>
                  <Heading 
                    fontSize="xl"
                    opacity={hoveredCard === i ? 1 : 0.9}
                    transform={hoveredCard === i ? 'translateY(0)' : 'translateY(10px)'}
                    transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                    color={hoveredCard === i ? feature.color : 'white'}
                  >
                    {feature.title}
                  </Heading>
                  <Text 
                    fontSize="sm"
                    textAlign="center"
                    color={hoveredCard === i ? 'white' : 'whiteAlpha.900'}
                    opacity={hoveredCard === i ? 1 : 0}
                    transform={hoveredCard === i ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)'}
                    transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  >
                    {feature.description}
                  </Text>
                </VStack>
              </VStack>
            ))}
          </Box>

          <HStack gap={8} w="full">
            {features.map((feature, i) => (
              <Card 
                key={i} 
                onMouseEnter={() => setHoveredCard(i)} 
                onMouseLeave={() => setHoveredCard(null)}
                opacity={hoveredCard === i ? 1 : 0.7}
                transform={hoveredCard === i ? 'translateY(-8px)' : 'none'}
                transition="all 0.3s"
                bg={hoveredCard === i ? feature.color + '22' : 'transparent'}
                borderColor={hoveredCard === i ? feature.color : 'whiteAlpha.200'}
              >
                <HStack gap={4} align="center">
                  <Box color={hoveredCard === i ? feature.color : 'white'}>{feature.icon}</Box>
                  <Heading fontSize="md" color={hoveredCard === i ? feature.color : 'white'}>{feature.title}</Heading>
                </HStack>
              </Card>
            ))}
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};
