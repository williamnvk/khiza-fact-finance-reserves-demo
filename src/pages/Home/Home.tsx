import { Box, Center, Container, Heading, HStack, Link, Text, VStack } from '@chakra-ui/react';
import { SEO } from '@/components/Common/SEO';
import { Button } from '@/components/ui/button';
import Chains from '@/components/Shared/Chains';
import { TitleSection } from '@/components/ui/title-sectiont';
import { CodeBlock } from '@/components/Shared/CodeBlock';
import { useSearchParams } from 'react-router';
import { Hero } from '@/components/Shared/Hero';
import { Suspense, lazy } from 'react';

const LazyFaq = lazy(() => import('@/components/Shared/Faq').then((module) => ({ default: module.Faq })));
const LazyFeaturesSection = lazy(() =>
  import('@/components/Shared/FeaturesSection').then((module) => ({ default: module.FeaturesSection })),
);
const LazyWhatWeDo = lazy(() =>
  import('@/components/Shared/WhatWeDo').then((module) => ({ default: module.WhatWeDo })),
);

export const Home = () => {
  const [searchParams] = useSearchParams();
  const heroNumber = Number(searchParams.get('opcao')) || 3;

  return (
    <Box as="main">
      <SEO
        title="Home - Fact Finance"
        description="Seamless blockchain data integration for developers. Connect smart contracts to real-world data with our powerful APIs and developer tools."
      />
      <Hero heroNumber={heroNumber} />

      <Suspense fallback={<Text role="status">Loading...</Text>}>
        <LazyWhatWeDo />
      </Suspense>

      <Container my={16} aria-labelledby="supported-chains-heading" as="section">
        <Text
          id="supported-chains-heading"
          as="h2"
          textAlign="center"
          mb={4}
          color="whiteAlpha.500"
          fontSize={{ base: 'lg', md: 'xl' }}
        >
          Supported Chains
        </Text>
        <Chains aria-label="Supported Blockchain Networks" />
      </Container>

      <Box pos="relative" aria-labelledby="features-section-heading" as="section">
        <Suspense fallback={<Text role="status">Loading features...</Text>}>
          <LazyFeaturesSection />
        </Suspense>
      </Box>

      <Container py={{ base: 8, md: 32 }} role="group" aria-labelledby="call-to-action-heading" as="section">
        <HStack align="center" justify="center" gap={16}>
          <VStack gap={0} align="flex-start" flex={1}>
            <TitleSection align="flex-start">
              <Text fontSize="sm" color="brand.300">
                CALLING THE DEVS
              </Text>
              <Heading as="h2" id="call-to-action-heading" textStyle="title">
                Seamless Data Integration for Blockchain Developers
              </Heading>
              <Text fontSize="sm">
                Effortlessly integrate trusted, verified data into your blockchain projects with our time-saving data
                hub. Fact Finance provides powerful APIs to connect smart contracts to real-world data sources.
                <br />
                No complex onboarding, just clear documentation, step-by-step guides, and ready-to-use examples for EVMs
                and Solana.
              </Text>
            </TitleSection>
            <HStack gap={4}>
              <Button as={Link} to="/documentation" aria-label="Explore Documentation">
                Explore Documentation
              </Button>
              <Button variant="ghost" as={Link} to="/contact" aria-label="Contact Support">
                Contact Support
              </Button>
            </HStack>
          </VStack>
          <CodeBlock aria-label="Code Example" />
        </HStack>
      </Container>

      <Container
        as="section"
        maxW="5xl"
        id="faq"
        role="region"
        aria-labelledby="faq-heading"
        py={{ base: 8, md: 32 }}
        zIndex={5}
      >
        <VStack mb={{ base: 8, md: 16 }} gap={2}>
          <Heading id="faq-heading" textStyle="title" as="h2">
            Frequently Asked Questions
          </Heading>
          <Text as="p" textStyle="subtitle">
            Find answers to common questions about Fact Finance
          </Text>
        </VStack>
        <Suspense fallback={<Text role="status">Loading FAQs...</Text>}>
          <LazyFaq />
        </Suspense>
        <Center gap={2} mt={{ base: 4, md: 8 }}>
          <Text fontSize="smaller">Still have questions?</Text>
          <Link
            href="/contact"
            rel="noopener noreferrer"
            target="_blank"
            color="brand.500"
            fontSize="smaller"
            aria-label="Contact us for more information"
          >
            Contact us
          </Link>
        </Center>
      </Container>

      <VStack
        borderRadius="2xl"
        justify="center"
        align="center"
        bg="white"
        minH="calc(80vh - 160px)"
        mx={8}
        aria-labelledby="unlock-value-heading"
        aria-describedby="unlock-value-description"
        as="section"
      >
        <Center flexDir="column" gap={0}>
          <TitleSection flex={1} color="brand.950">
            <Heading
              id="unlock-value-heading"
              textAlign="center"
              fontSize={{ base: '4xl', md: '6xl' }}
              lineHeight={1.2}
            >
              Unlock the Value of Your
              <br />
              Tokenized Asset with Official Data
            </Heading>
            <Text id="unlock-value-description" maxW="2xl" textStyle="subtitle" textAlign="center">
              Our data layer connects trusted, official data sources to tokenized assets, unlocking new financial
              solutions.
            </Text>
          </TitleSection>

          <HStack justify="center" gap={4} mt={4}>
            <Button as={Link} to="/expert-consultation" aria-label="Talk to an Expert">
              Talk to an Expert
            </Button>
            {/* <Button variant="ghost" disabled aria-disabled="true">
                Data Hub <Badge>Soon</Badge>
              </Button> */}
          </HStack>
        </Center>
      </VStack>
    </Box>
  );
};
