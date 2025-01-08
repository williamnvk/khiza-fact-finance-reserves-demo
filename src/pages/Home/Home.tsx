import { Box, Center, Container, Heading, HStack, Link, Text, VStack } from '@chakra-ui/react';
import { Faq } from '@/components/Shared/Faq';
import { SEO } from '@/components/Common/SEO';
import { Button } from '@/components/ui/button';
import Chains from '@/components/Shared/Chains';
import { TitleSection } from '@/components/ui/title-sectiont';
import { CodeBlock } from '@/components/Shared/CodeBlock';
import { FeaturesSection } from '@/components/Shared/FeaturesSection';
import { WhatWeDo } from '@/components/Shared/WhatWeDo';
import { useSearchParams } from 'react-router';
import { Hero } from '@/components/Shared/Hero';

export const Home = () => {
  const [searchParams] = useSearchParams();
  const heroNumber = Number(searchParams.get('opcao')) || 8;

  return (
    <Box bg="#000">
      <SEO />
      <Hero heroNumber={heroNumber} />
      <WhatWeDo />

      <Container my={16}>
        <Text textAlign="center" mb={4} color="whiteAlpha.500">
          Supported chains
        </Text>
        <Chains />
      </Container>
      <Box pos="relative">
        <FeaturesSection />
      </Box>

      <Box py={{ base: 8, md: 32 }}>
        <Container>
          <HStack align="center" justify="center" gap={16}>
            <VStack gap={0} align="flex-start" flex={1}>
              <TitleSection align="flex-start">
                <Text fontSize="sm" color="brand.300">
                  CALLING THE DEVS
                </Text>
                <Heading textStyle="title">Seamless Data Integration for Blockchain Developers</Heading>
                <Text fontSize="sm">
                  Effortlessly integrate trusted, verified data into your blockchain projects with our time-saving data
                  hub. Fact Finance provides powerful APIs to connect smart contracts to real-world data sources.
                  <br />
                  No complex onboarding, just clear documentation, step-by-step guides, and ready-to-use examples for
                  EVMs and Solana.
                </Text>
              </TitleSection>
              <HStack gap={4}>
                <Button>Explore Documentation</Button>
                <Button variant="ghost">Contact Support</Button>
              </HStack>
            </VStack>
            <CodeBlock />
          </HStack>
        </Container>
      </Box>

      <Container
        as="section"
        maxW="5xl"
        id="faq"
        role="complementary"
        py={{ base: 8, md: 32 }}
        aria-labelledby="faq-heading"
        zIndex={5}
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

      <VStack borderRadius="2xl" justify="center" align="center" bg="white" minH="calc(80vh - 160px)" mx={8}>
        <Center flexDir="column" gap={0}>
          <TitleSection flex={1} color="brand.950">
            <Heading textAlign="center" fontSize="6xl" lineHeight={1.2}>
              Unlock the value of your
              <br />
              tokenized asset with official data
            </Heading>
            <Text maxW="2xl" textStyle="subtitle" textAlign="center">
              Our data layer connects trusted, official data sources to tokenized assets, unlocking new financial
              solutions
            </Text>
          </TitleSection>

          <HStack justify="center" gap={4}>
            <Button>Talk to an expert</Button>
            {/* <Button variant="ghost" disabled>Data hub <Badge>Soon</Badge></Button> */}
          </HStack>
        </Center>
      </VStack>
    </Box>
  );
};
