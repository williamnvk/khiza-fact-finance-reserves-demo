import { Box, Center, Container, Heading, HStack, Link as ChakraLink, Text, VStack, Badge } from '@chakra-ui/react';
import { SEO } from '@/components/Common/SEO';
import { Button } from '@/components/ui/button';
import Chains from '@/components/Shared/Chains';
import { TitleSection } from '@/components/ui/title-sectiont';
import { CodeBlock } from '@/components/Shared/CodeBlock';
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
  return (
    <Box>
      <SEO
        title="Fact Finance"
        description="Seamless blockchain data integration for developers. Connect smart contracts to real-world data with our powerful APIs and developer tools."
      />
      <Hero />

      <Suspense
        fallback={
          <Text role="status" textAlign="center" p={4}>
            Loading what we do section...
          </Text>
        }
      >
        <LazyWhatWeDo />
      </Suspense>

      <Container aria-labelledby="supported-chains-heading" as="section">
        <Text
          fontSize={{ base: 'xs', sm: 'sm' }}
          bgGradient="to-r"
          gradientFrom="brand.50"
          gradientTo="brand.400"
          bgClip="text"
          textTransform="uppercase"
          letterSpacing={2}
          fontWeight="600"
          w="full"
          textAlign={{ base: 'left', md: 'center' }}
          mb={{ base: 2, md: 4 }}
        >
          Supported Chains
        </Text>
        <Chains aria-label="Supported Blockchain Networks" />
      </Container>

      <Box pos="relative" aria-labelledby="features-section-heading" as="section" pb={{ base: 8, md: 24 }}>
        <Suspense
          fallback={
            <Text role="status" textAlign="center" p={4}>
              Loading features section...
            </Text>
          }
        >
          <LazyFeaturesSection />
        </Suspense>
      </Box>

      <Container py={{ base: 8, md: 8 }} role="group" aria-labelledby="call-to-action-heading" as="section">
        <HStack
          align={{ base: 'stretch', md: 'center' }}
          justify="center"
          gap={{ base: 8, lg: 16 }}
          flexDirection={{ base: 'column', xl: 'row' }}
        >
          <VStack gap={6} align={{ base: 'center', md: 'flex-start' }} flex={1}>
            <TitleSection align={{ base: 'center', md: 'flex-start' }}>
              <Text fontSize="sm" color="brand.300" w="full" textAlign={{ base: 'left', md: 'center', xl: 'left' }}>
                CALLING THE DEVS
              </Text>
              <Heading
                as="h2"
                id="call-to-action-heading"
                textStyle="title"
                w="full"
                textAlign={{ base: 'left', md: 'center', xl: 'left' }}
                fontSize={{ base: '2xl', sm: '3xl', md: '3xl', lg: '4xl' }}
                maxW={{ base: 'full', md: 'xl', xl: 'full' }}
              >
                Seamless data integration for blockchain developers
              </Heading>
              <Text
                fontSize="sm"
                w="full"
                textAlign={{ base: 'left', md: 'center', xl: 'left' }}
                maxW={{ base: 'full', md: 'xl', xl: 'full' }}
                mx="auto"
              >
                Effortlessly integrate trusted, verified data into your blockchain projects with our time-saving data
                hub. Fact Finance provides powerful APIs to connect smart contracts to real-world data sources.
              </Text>
              <Text
                fontSize="sm"
                w="full"
                textAlign={{ base: 'left', md: 'center', xl: 'left' }}
                maxW={{ base: 'full', md: 'xl', xl: 'full' }}
                mx="auto"
              >
                No complex onboarding, just clear documentation, step-by-step guides, and ready-to-use examples for EVMs
                and Solana.
              </Text>
            </TitleSection>
            <HStack gap={4} flexWrap={{ base: 'wrap', md: 'nowrap' }} justify={{ base: 'center', lg: 'flex-start' }}>
              <Button
                as="a"
                href="https://docs.fact.finance"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Explore Documentation"
                w={{ base: 'full', md: 'auto' }}
              >
                Explore documentation
              </Button>
              <Button variant="ghost" as="a" href="mailto:juvinski@fact.finance" aria-label="Contact Support">
                Contact support
              </Button>
            </HStack>
          </VStack>
          <Box flex={1}>
            <CodeBlock aria-label="Code Example" />
          </Box>
        </HStack>

        <Box
          position="absolute"
          top="-50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="500px"
          h="500px"
          bg="radial-gradient(circle, {colors.brand.800} 0%, {colors.brand.900} 25%, transparent 100%)"
          filter="blur(120px)"
          opacity={0.5}
          zIndex={-1}
        />
      </Container>

      <Container
        as="section"
        maxW="5xl"
        id="faq"
        role="region"
        aria-labelledby="faq-heading"
        py={{ base: 8, md: 16 }}
        px={4}
        zIndex={5}
      >
        <VStack mb={{ base: 8, md: 16 }} gap={4}>
          <Heading
            id="faq-heading"
            textStyle="title"
            as="h2"
            w="full"
            textAlign={{ base: 'left', md: 'center' }}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
          >
            Frequently Asked Questions
          </Heading>
          <Text as="p" textStyle="subtitle" w="full" textAlign={{ base: 'left', md: 'center' }}>
            Find answers to common questions about Fact Finance
          </Text>
        </VStack>
        <Suspense
          fallback={
            <Text role="status" w="full" textAlign={{ base: 'left', md: 'center' }} p={4}>
              Loading FAQs...
            </Text>
          }
        >
          <LazyFaq />
        </Suspense>
        <Center gap={3} mt={{ base: 4, md: 8 }}>
          <Text fontSize="smaller">Still have questions?</Text>
          <ChakraLink
            as="a"
            href="mailto:juvinski@fact.finance"
            color="brand.500"
            fontSize="smaller"
            aria-label="Contact us for more information"
            _hover={{ textDecoration: 'underline' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us
          </ChakraLink>
        </Center>
      </Container>

      <VStack
        borderRadius={{ base: 'lg', md: '2xl' }}
        justify="center"
        align="center"
        bg="white"
        minH={{ base: '60vh', md: 'calc(80vh - 160px)' }}
        mx={{ base: 4, md: 8 }}
        p={{ base: 6, md: 8 }}
        aria-labelledby="unlock-value-heading"
        aria-describedby="unlock-value-description"
        as="section"
      >
        <Center flexDir="column" gap={6} maxW="5xl">
          <TitleSection flex={1} color="brand.950">
            <Heading
              id="unlock-value-heading"
              textAlign={{ base: 'left', md: 'center' }}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={1.2}
            >
              Unlock the value of your
              <br />
              tokenized asset with official data
            </Heading>
            <Text
              id="unlock-value-description"
              maxW="2xl"
              textStyle="subtitle"
              textAlign={{ base: 'left', md: 'center' }}
              fontSize={{ base: 'sm', md: 'md' }}
            >
              Our data layer connects trusted, official data sources to tokenized assets, unlocking new financial
              solutions.
            </Text>
          </TitleSection>

          <HStack justify="center" gap={4} mt={4} flexWrap={{ base: 'wrap', md: 'nowrap' }}>
            <Button
              size="xl"
              w={{ base: 'full', sm: 'auto' }}
              as="a"
              href="mailto:fernanda@fact.finance"
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk to an expert
            </Button>
            <Button variant="plain" color="bg" disabled aria-disabled="true">
              Data Hub <Badge opacity={0.3}>Soon</Badge>
            </Button>
          </HStack>
        </Center>
      </VStack>
    </Box>
  );
};
