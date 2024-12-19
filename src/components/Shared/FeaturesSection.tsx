import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { TitleSection } from '@/components/ui/title-sectiont';

export const FeaturesSection = () => {
  return (
    <>
      <Box h="100vh" position="relative" overflow="hidden">
        <Container>
          <TitleSection>
            <Heading textStyle="title">Our key features</Heading>
            <Text textStyle="subtitle">Reliable solutions for secure and precise data delivery</Text>
          </TitleSection>
        </Container>
        <Container maxW="2xl" h="80vh" position="relative">
          <Box
            position="absolute"
            top="20%"
            left="50%"
            transform="translate(-50%, -50%)"
            width="50%"
            height="50%"
            background="radial-gradient(circle at center, {colors.brand.700} 0%, transparent 100%)"
            pointerEvents="none"
            filter="blur(100px)"
            zIndex={-1}
          />
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%) rotateX(60deg) rotateZ(-45deg)"
            transformStyle="preserve-3d"
            perspective={1500}
            w="80%"
            h="80%"
          >
            {/* Top layer with features */}
            <Box
              position="absolute"
              w="full"
              h="full"
              bg="brand.500"
              opacity={0.9}
              transform="translateZ(300px)"
              borderRadius="xl"
              boxShadow="0 0 20px rgba(0,0,0,0.2)"
              p={6}
            >
              <SimpleGrid columns={2} gap={4}>
                <Card>
                  <Heading fontSize="xl">Confidence index</Heading>
                  <Text fontSize="sm">Reliability measure based on trusted data sources and institutions</Text>
                </Card>
                <Card>
                  <Heading fontSize="xl">Compliance</Heading>
                  <Text fontSize="sm">Regulatory adherence verified by official institutions</Text>
                </Card>
              </SimpleGrid>
            </Box>

            {/* Second layer */}
            <Box
              position="absolute"
              w="full"
              h="full"
              bg="brand.600"
              opacity={0.8}
              transform="translateZ(200px)"
              borderRadius="xl"
              boxShadow="0 0 20px rgba(0,0,0,0.2)"
              p={6}
            >
              <SimpleGrid columns={2} gap={4}>
                <Card>
                  <Heading fontSize="xl">Proof of Authenticity</Heading>
                  <Text fontSize="sm">Cryptographic verification of data authenticity</Text>
                </Card>
                <Card>
                  <Heading fontSize="xl">External Auditors</Heading>
                  <Text fontSize="sm">Independent verification by trusted third parties</Text>
                </Card>
              </SimpleGrid>
            </Box>

            {/* Third layer */}
            <Box
              position="absolute"
              w="full"
              h="full"
              bg="brand.800"
              opacity={0.7}
              transform="translateZ(100px)"
              borderRadius="xl"
              boxShadow="0 0 20px rgba(0,0,0,0.2)"
              p={6}
            >
              <SimpleGrid columns={2} gap={4}>
                <Card>
                  <Heading fontSize="xl">Data Security</Heading>
                  <Text fontSize="sm">Enterprise-grade encryption and protection</Text>
                </Card>
                <Card>
                  <Heading fontSize="xl">Real-time Updates</Heading>
                  <Text fontSize="sm">Continuous synchronization with official sources</Text>
                </Card>
              </SimpleGrid>
            </Box>

            {/* Bottom layer */}
            <Box
              position="absolute"
              w="full"
              h="full"
              bg="brand.900"
              opacity={0.5}
              transform="translateZ(0)"
              borderRadius="xl"
              boxShadow="0 0 20px rgba(0,0,0,0.2)"
            />

            <Button
              position="absolute"
              bottom="-60px"
              left="50%"
              transform="translate(-50%, 0) rotateX(-60deg) rotateZ(45deg)"
              colorScheme="blue"
              size="lg"
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};
