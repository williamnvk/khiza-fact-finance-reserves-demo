import { Box, Container, Heading, Text, HStack, VStack } from '@chakra-ui/react';
import { Card } from '@/components/ui/card';
import { TitleSection } from '@/components/ui/title-sectiont';
import { ArrowUpIcon, EyeIcon, LockIcon } from 'lucide-react';
import { useState } from 'react';

export const FeaturesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <Box position="relative" overflow="hidden">
      <Container maxW="container.xl">
        <HStack align="stretch" gap={16}>
          {/* Left side with stacked layers */}
          <Box flex={1} position="relative" h="600px">
            <VStack
              position="absolute"
              width="400px"
              height="300px"
              bg={hoveredCard === 0 ? "brand.500" : "whiteAlpha.100"}
              borderRadius="xl"
              transform={hoveredCard === 0 
                ? "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(50px) translateX(0)" 
                : "perspective(1000px) rotateX(50deg) rotateY(45deg) translateZ(-300px)"}
              border="4px solid"
              borderColor="whiteAlpha.200"
              top="150px"
              left="50px"
              align="center"
              justify="center"
              zIndex={hoveredCard === 0 ? 3 : 1}
              transition="all 0.7s ease-in-out"
              boxShadow="0 20px 40px rgba(0,0,0,0.3)"
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              <EyeIcon size={32} strokeWidth={3} />
            </VStack>
            <VStack
              position="absolute"
              width="400px"
              height="300px"
              bg={hoveredCard === 1 ? "brand.500" : "whiteAlpha.50"}
              borderRadius="xl"
              transform={hoveredCard === 1
                ? "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(50px) translateX(0)"
                : hoveredCard === 0 
                  ? "perspective(1000px) rotateX(0deg) rotateY(45deg) translateZ(-400px)"
                  : "perspective(1000px) rotateX(50deg) rotateY(45deg) translateZ(-200px)"}
              border="4px solid"
              borderColor="whiteAlpha.100"
              top="150px"
              left="150px"
              zIndex={hoveredCard === 1 ? 3 : 2}
              align="center"
              justify="center"
              transition="all 0.7s ease-in-out"
              boxShadow="0 20px 40px rgba(0,0,0,0.3)"
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              <ArrowUpIcon size={32} strokeWidth={3} />
            </VStack>
            <VStack
              position="absolute"
              width="400px"
              height="300px"
              bg={hoveredCard === 2 ? "brand.500" : "whiteAlpha.30"}
              borderRadius="xl"
              transform={hoveredCard === 2
                ? "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(50px) translateX(0)"
                : hoveredCard !== null
                  ? "perspective(1000px) rotateX(0deg) rotateY(45deg) translateZ(-500px)"
                  : "perspective(1000px) rotateX(50deg) rotateY(45deg) translateZ(-100px)"}
              border="4px solid"
              borderColor="whiteAlpha.50"
              top="150px"
              left="250px"
              zIndex={hoveredCard === 2 ? 3 : 1}
              align="center"
              justify="center"
              transition="all 0.7s ease-in-out"
              boxShadow="0 20px 40px rgba(0,0,0,0.3)"
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              <LockIcon size={32} strokeWidth={3} />
            </VStack>
          </Box>

          {/* Right side with content */}
          <VStack flex={1} align="flex-start" gap={8}>
            <TitleSection align="flex-start">
              <Heading textStyle="title">Our key features</Heading>
              <Text textStyle="subtitle">Reliable solutions for secure and precise data delivery</Text>
            </TitleSection>

            <VStack gap={8} align="stretch" w="full">
              <Card 
                onMouseEnter={() => setHoveredCard(0)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === 0 ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.3s ease-in-out',
                  boxShadow: hoveredCard === 0 ? '0 20px 40px rgba(0,0,0,0.4)' : '0 10px 30px rgba(0,0,0,0.2)',
                  background: hoveredCard === 0 ? 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))' : 'transparent',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '24px'
                }}
              >
                <HStack spacing={4} align="center" mb={2}>
                  <EyeIcon size={24} strokeWidth={2} style={{opacity: 0.7}} />
                  <Heading fontSize="xl">Confidence index</Heading>
                </HStack>
                <Text fontSize="sm" color="whiteAlpha.800" lineHeight="1.6">
                  Reliability measure based on trusted data sources and institutions
                </Text>
              </Card>
              <Card
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === 1 ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.3s ease-in-out',
                  boxShadow: hoveredCard === 1 ? '0 20px 40px rgba(0,0,0,0.4)' : '0 10px 30px rgba(0,0,0,0.2)',
                  background: hoveredCard === 1 ? 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))' : 'transparent',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '24px'
                }}
              >
                <HStack spacing={4} align="center" mb={2}>
                  <ArrowUpIcon size={24} strokeWidth={2} style={{opacity: 0.7}} />
                  <Heading fontSize="xl">Compliance</Heading>
                </HStack>
                <Text fontSize="sm" color="whiteAlpha.800" lineHeight="1.6">
                  Regulatory adherence verified by official institutions
                </Text>
              </Card>
              <Card
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === 2 ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.3s ease-in-out',
                  boxShadow: hoveredCard === 2 ? '0 20px 40px rgba(0,0,0,0.4)' : '0 10px 30px rgba(0,0,0,0.2)',
                  background: hoveredCard === 2 ? 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))' : 'transparent',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '24px'
                }}
              >
                <HStack spacing={4} align="center" mb={2}>
                  <LockIcon size={24} strokeWidth={2} style={{opacity: 0.7}} />
                  <Heading fontSize="xl">Proof of Authenticity</Heading>
                </HStack>
                <Text fontSize="sm" color="whiteAlpha.800" lineHeight="1.6">
                  Cryptographic verification of data authenticity
                </Text>
              </Card>
            </VStack>
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
};
