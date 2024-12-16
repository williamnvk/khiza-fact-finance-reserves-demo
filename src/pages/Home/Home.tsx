import { Box, Center, Container, Heading, HStack, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Faq } from '@/components/Shared/Faq';
import { SEO } from '@/components/Common/SEO';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Chains from '@/components/Shared/Chains';

export const Home = () => {
  return (
    <>
      <SEO />

      <Box mt="72px">
        <Container minH="calc(100vh - 72px)">
          <Heading textStyle="title">Reliable data for the tokenized economy</Heading>
          <Text textStyle="subtitle">
            Delivering accurate, verified, and official data to power real-world asset tokenization.{' '}
          </Text>

          <HStack>
            <Button>Talk to an exper</Button>
            <Button variant="outline">Data hub</Button>
          </HStack>
        </Container>
      </Box>

      <Box>
        <Container>
          <Heading textStyle="title">Trusted partnerships</Heading>
          <Text textStyle="subtitle">Supported by key players and institutions driving blockchain innovation</Text>

          <Button>Get to know us</Button>
        </Container>
      </Box>

      <Box>
        <Container>
          <Text>What we do</Text>
          <Heading textStyle="title">Enabling Real-World Data on the Blockchain</Heading>
          <Text textStyle="subtitle">
            A data layer connecting trusted, official data sources to tokenized assets, unlocking new financial
            solutions
          </Text>

          <HStack>
            <Card flex={1}>
              <Heading>An oracle connects off-chain data to blockchain ecosystems</Heading>
              <Text>
                Our oracle connects off-chain data to blockchain ecosystems, providing a secure and reliable source of
                information for tokenized assets.
              </Text>
            </Card>
            <Card flex={1}>
              <Heading>Oracles enable smart contracts to be executed using real-world data</Heading>
              <Text>
                Our oracle connects off-chain data to blockchain ecosystems, providing a secure and reliable source of
                information for tokenized assets.
              </Text>
            </Card>
            <Card flex={1}>
              <Heading>Our data comes directly from official and reliable institutions</Heading>
              <Text>
                Our data comes directly from official and reliable institutions, ensuring the accuracy and reliability
                of the information.
              </Text>
            </Card>
          </HStack>

          <Button>See our use cases</Button>
        </Container>
      </Box>

      <Chains />

      <Box>
        <Container>
          <Heading textStyle="title">Our key features</Heading>
          <Text textStyle="subtitle">Reliable solutions for secure and precise data delivery</Text>
          <SimpleGrid columns={2}>
            <Card>
              <Heading>Confidence index</Heading>
              <Text>
                Our confidence index is a measure of the reliability of our data, based on the sources and the
                institutions that provide it.
              </Text>
            </Card>
            <Card>
              <Heading>Compliance</Heading>
              <Text>
                Our compliance is a measure of the compliance of our data, based on the sources and the institutions
                that provide it.
              </Text>
            </Card>
            <Card>
              <Heading>Proof of Authenticity</Heading>
              <Text>
                Our proof of authenticity is a measure of the authenticity of our data, based on the sources and the
                institutions that provide it.
              </Text>
            </Card>
            <Card>
              <Heading>External Auditors</Heading>
              <Text>
                Our external auditors are a measure of the external auditors of our data, based on the sources and the
                institutions that provide it.
              </Text>
            </Card>
          </SimpleGrid>
          <Button>See more</Button>
        </Container>
      </Box>

      <Box>
        <Container>
          <HStack>
              <VStack>
              <Heading textStyle="title">Seamlessly integrate trusted, verified data into your blockchain projects</Heading>
          <Text textStyle="subtitle">
          Fact Finance provides developers with robust tools and APIs to power tokenized assets and smart contracts with reliable, real-world data. Explore our comprehensive documentation for step-by-step guides, API references, and integration examples across supported blockchains like Ethereum, Solana, and Polygon.
          </Text>
          <HStack>
            <Button>Explore Documentation</Button>
            <Button variant="outline">Contact Support</Button>
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
        <Center gap={2} mt={{ base: 4, md: 16 }}>
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
        <Container>
          <Heading textStyle="title">Unlock the value of your tokenized asset with official data</Heading>
          <Text textStyle="subtitle">
            Our data layer connects trusted, official data sources to tokenized assets, unlocking new financial
            solutions
          </Text>

          <HStack>
            <Button>Talk to an expert</Button>
            <Button variant="outline">Data hub</Button>
          </HStack>
        </Container>
      </Box>
    </>
  );
};
