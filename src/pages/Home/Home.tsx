import { Box, Center, Container, Flex, Heading, HStack, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Faq } from '@/components/Shared/Faq';
import { SEO } from '@/components/Common/SEO';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Chains from '@/components/Shared/Chains';
import CubesGrid from '@/components/Shared/CubesGrid';
import { TitleSection } from '@/components/ui/title-sectiont';
import HeroBackground from '@/components/Shared/HeroBackground';
import HeroPortal from '@/components/Shared/HeroPortal';
import BrazilianTesouroNacionalIcon from '@/components/Icons/BrazilianTesouroNacional';
import SolanaIcon from '@/components/Icons/SolanaIcon';
import LogoIcon from '@/components/Icons/LogoIcon';

export const Home = () => {
  return (
    <>
      <SEO />

      <Box pos="relative">
        <HStack w="full" minH="calc(100vh + 72px)" pos="relative">
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            w="full"
            h="full"
            bg="radial-gradient(circle, transparent 0%, {colors.brand.800} 15%, transparent 100%)"
            filter="blur(200px)"
            zIndex={1}
          />
          <HeroBackground />
          <HeroPortal />
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            w="25vw"
            h="100vh"
            bg="radial-gradient(circle, {colors.brand.950} 0%, {colors.brand.800} 25%, rgba(0,0,0,.5) 100%)"
            filter="blur(100px)"
            zIndex={1}
          />
        </HStack>
        <Container pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" w="full" h="full" zIndex={1}>
          <VStack minH="calc(100vh - 72px)" justify="center" gap={8}>
            <LogoIcon width={32} height={32} />
            <Heading fontSize="7xl" lineHeight={1} textAlign="center" fontWeight="400">
              Official data
              <br />
              for the{' '}
              <Text as="span" fontSize="7xl" lineHeight={1} textAlign="center" fontWeight="600" color="brand.500">
                tokenized economy
              </Text>
            </Heading>
            <Text textStyle="subtitle" textAlign="center">
              Delivering accurate, verified, and official data <br />
              to power real-world asset tokenization.{' '}
            </Text>

            <HStack gap={4}>
              <Button size="xl">Talk to an expert</Button>
              <Button variant="outline" size="xl">
                Data hub
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      <Box py={16}>
        <Container>
          <TitleSection>
            <Heading textStyle="title">Trusted by</Heading>
            <Text textStyle="subtitle">Supported by key players and institutions driving blockchain innovation</Text>
          </TitleSection>
          <Flex justify="center" mt={8} flexWrap="wrap" gap={8}>
            <Card p={2}>
              <BrazilianTesouroNacionalIcon width={128} height={128} />
            </Card>

            <Card>
              <SolanaIcon width={128} height={128} />
            </Card>
          </Flex>
          <Flex justify="center" mt={8} flexWrap="wrap" gap={8}>
            <Card p={2}>
              <BrazilianTesouroNacionalIcon width={128} height={128} />
            </Card>
            <Card p={2}>
              <BrazilianTesouroNacionalIcon width={128} height={128} />
            </Card>
            <Card p={2}>
              <BrazilianTesouroNacionalIcon width={128} height={128} />
            </Card>
          </Flex>
          <Flex justify="center" mt={8} flexWrap="wrap" gap={8}>
            <Card p={2}>
              <BrazilianTesouroNacionalIcon width={128} height={128} />
            </Card>
            <Card p={2}>
              <BrazilianTesouroNacionalIcon width={128} height={128} />
            </Card>
          </Flex>
          <Center>
            <Button>Get to know us</Button>
          </Center>
        </Container>
      </Box>

      <Box>
        <Container>
          <VStack gap={4} w="full" align="center">
            <TitleSection>
              <Text>What we do</Text>
              <Heading textStyle="title">Enabling real-world data on the blockchain</Heading>
              <Text textStyle="subtitle" maxW="2xl" textAlign="center">
                A data layer connecting trusted, official data sources to tokenized assets, unlocking new financial
                solutions
              </Text>
            </TitleSection>

            <HStack gap={8} w="full" align="center" justify="center">
              <Box flex={1} data-aos="fade-up" data-aos-delay="100" p={8}>
                <Heading fontSize="3xl">An oracle connects off-chain data to blockchain ecosystems</Heading>
                {/* <Text>
                  Our oracle connects off-chain data to blockchain ecosystems, providing a secure and reliable source of
                  information for tokenized assets.
                </Text> */}
              </Box>
              <Box color="brand.400">
                <LogoIcon width={32} height={32} />
              </Box>
              <Box flex={1} data-aos="fade-up" data-aos-delay="200">
                <Heading fontSize="3xl">Oracles enable smart contracts to be executed using real-world data</Heading>
                {/* <Text>
                  Our oracle connects off-chain data to blockchain ecosystems, providing a secure and reliable source of
                  information for tokenized assets.
                </Text> */}
              </Box>
              <Box color="brand.400">
                <LogoIcon width={32} height={32} />
              </Box>
              <Box flex={1} data-aos="fade-up" data-aos-delay="300">
                <Heading fontSize="3xl">Our data comes directly from official and reliable institutions</Heading>
                {/* <Text>
                  Our data comes directly from official and reliable institutions, ensuring the accuracy and reliability
                  of the information.
                </Text> */}
              </Box>
            </HStack>

            <Button>See our use cases</Button>
          </VStack>
        </Container>
      </Box>

      <Box my={16}>
        <Text textAlign="center" mb={4} color="whiteAlpha.500">
          Supported chains
        </Text>
        <Chains />
      </Box>

      <Box my={16}>
        <Container>
          <TitleSection>
            <TitleSection>
              <Heading textStyle="title">Our key features</Heading>
              <Text textStyle="subtitle">Reliable solutions for secure and precise data delivery</Text>
            </TitleSection>
          </TitleSection>

          <HStack align="center" justify="center" gap={16} w="full" h="full">
            <Box h="480px" position="relative">
              <CubesGrid />
            </Box>
            <VStack flex={1} align="flext-start" justify="center" gap={8}>
              <SimpleGrid columns={2} gap={8} mt={-8}>
                <Card data-aos="fade-up" data-aos-delay="100">
                  <Heading>Confidence index</Heading>
                  <Text>
                    Our confidence index is a measure of the reliability of our data, based on the sources and the
                    institutions that provide it.
                  </Text>
                </Card>
                <Card data-aos="fade-up" data-aos-delay="200">
                  <Heading>Compliance</Heading>
                  <Text>
                    Our compliance is a measure of the compliance of our data, based on the sources and the institutions
                    that provide it.
                  </Text>
                </Card>
                <Card data-aos="fade-up" data-aos-delay="300">
                  <Heading>Proof of Authenticity</Heading>
                  <Text>
                    Our proof of authenticity is a measure of the authenticity of our data, based on the sources and the
                    institutions that provide it.
                  </Text>
                </Card>
                <Card data-aos="fade-up" data-aos-delay="400">
                  <Heading>External Auditors</Heading>
                  <Text>
                    Our external auditors are a measure of the external auditors of our data, based on the sources and
                    the institutions that provide it.
                  </Text>
                </Card>
              </SimpleGrid>
              <Center>
                <Button w="auto">See more</Button>
              </Center>
            </VStack>
          </HStack>
        </Container>
      </Box>

      <Box py={16}>
        <Container>
          <HStack align="center" justify="center" gap={16}>
            <VStack gap={4} align="flex-start">
              <Text fontSize="sm">Written by developers for developers</Text>
              <Heading textStyle="title">
                Seamlessly integrate trusted, verified data into your blockchain projects
              </Heading>
              <Text fontSize="sm">
                Fact Finance provides developers with robust tools and APIs to power tokenized assets and smart
                contracts with reliable, real-world data. Explore our comprehensive documentation for step-by-step
                guides, API references, and integration examples across supported blockchains like Ethereum, Solana, and
                Polygon.
              </Text>
              <HStack gap={4}>
                <Button>Explore Documentation</Button>
                <Button variant="ghost">Contact Support</Button>
              </HStack>
            </VStack>

            <VStack>
              <Box
                bg="gray.800"
                p={6}
                borderRadius="md"
                fontFamily="mono"
                fontSize="sm"
                color="gray.300"
                whiteSpace="pre"
              >
                {`/// @title Data Feed Struct
/// @notice This struct represents the data feed with a value and confidence level
/// @dev Used to store oracle data with an associated confidence score
struct DataFeed {    
    int256 value;        /// @dev Integer value of the data feed
    uint256 updatedat;   /// @dev Timestamp of backend data update
    uint8 decimal;       /// @dev Number of decimal places for the data value
    uint8 confidence;    /// @dev Confidence level of the data feed
                         /// @dev 1: outlier, 2: acceptable, 3: reliable
}`}
              </Box>
            </VStack>
          </HStack>
        </Container>
      </Box>

      <Container
        as="section"
        maxW="5xl"
        id="faq"
        role="complementary"
        py={{ base: 8, md: 16 }}
        aria-labelledby="faq-heading"
      >
        <VStack mb={{ base: 8, md: 16 }} gap={2}>
          <Heading id="faq-heading" textStyle="title">
            Frequently asked questions
          </Heading>
          <Text as="p" textStyle="subtitle">
            Find answers to common questions about Fact Finance
          </Text>
        </VStack>
        <Faq />
        <Center gap={2} mt={{ base: 4, md: 8 }}>
          <Text fontSize="smaller">Still have questions?</Text>
          <Link
            href="#" // TODO: Add link
            rel="noopener noreferrer"
            target="_blank"
            color="brand.500"
            fontSize="smaller"
          >
            Contact us
          </Link>
        </Center>
      </Container>

      <Box>
        <Container maxW="5xl">
          <VStack gap={4} align="center" bg="whiteAlpha.50" borderRadius="2xl" p={16}>
            <TitleSection>
              <Heading textAlign="center" textStyle="title">
                Unlock the value of your tokenized asset with official data
              </Heading>

              <Text textAlign="center" maxW="2xl" textStyle="subtitle">
                Our data layer connects trusted, official data sources to tokenized assets, unlocking new financial
                solutions
              </Text>
            </TitleSection>

            <HStack w="full" justify="center" gap={4}>
              <Button>Talk to an expert</Button>
              <Button variant="outline">Data hub</Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </>
  );
};
