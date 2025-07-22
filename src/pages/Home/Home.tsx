import { Box, Center, Container, Heading, HStack, Link as ChakraLink, Text, VStack } from '@chakra-ui/react';
import { SEO } from '@/components/Common/SEO';
import { Button } from '@/components/ui/button';
import Chains from '@/components/Shared/Chains';
import { TitleSection } from '@/components/ui/title-sectiont';
import { CodeBlock } from '@/components/Shared/CodeBlock';
import { Hero } from '@/components/Shared/Hero';
import { Suspense, lazy } from 'react';
import { Link } from 'react-router';
import { useI18n } from '@/hooks/useI18n';

const LazyFaq = lazy(() => import('@/components/Shared/Faq').then((module) => ({ default: module.Faq })));
const LazyFeaturesSection = lazy(() =>
  import('@/components/Shared/FeaturesSection').then((module) => ({ default: module.FeaturesSection })),
);
const LazyWhatWeDo = lazy(() =>
  import('@/components/Shared/WhatWeDo').then((module) => ({ default: module.WhatWeDo })),
);

export const Home = () => {
  const { t } = useI18n();

  return (
    <Box>
      <SEO
        title={t('home.seo.title')}
        description={t('home.seo.description')}
      />
      <Hero />

      <Suspense
        fallback={
          <Text role="status" textAlign="center" p={4}>
            {t('home.loading.whatWeDo')}
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
          {t('home.sections.supportedChains')}
        </Text>
        <Chains aria-label={t('home.aria.supportedChains')} />
      </Container>

      <Box pos="relative" aria-labelledby="features-section-heading" as="section" pb={{ base: 8, md: 24 }}>
        <Suspense
          fallback={
            <Text role="status" textAlign="center" p={4}>
              {t('home.loading.features')}
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
          <VStack gap={6} align={{ base: 'center', md: 'flex-start' }} w={{base: "full", md: "440px" }}>
            <TitleSection align={{ base: 'center', md: 'flex-start' }}>
              <Text fontSize="sm" color="brand.300" w="full" textAlign={{ base: 'left', md: 'center', xl: 'left' }}>
                {t('home.sections.callingDevs')}
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
                {t('home.sections.dataIntegrationTitle')}
              </Heading>
              <Text
                fontSize="sm"
                w="full"
                textAlign={{ base: 'left', md: 'center', xl: 'left' }}
                maxW={{ base: 'full', md: 'xl', xl: 'full' }}
                mx="auto"
              >
                {t('home.sections.dataIntegrationDescription1')}
              </Text>
              <Text
                fontSize="sm"
                w="full"
                textAlign={{ base: 'left', md: 'center', xl: 'left' }}
                maxW={{ base: 'full', md: 'xl', xl: 'full' }}
                mx="auto"
              >
                {t('home.sections.dataIntegrationDescription2')}
              </Text>
            </TitleSection>
            <HStack gap={4} flexWrap={{ base: 'wrap', md: 'nowrap' }} justify={{ base: 'center', lg: 'flex-start' }}>
              <ChakraLink
                href="https://docs.fact.finance"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('home.aria.exploreDocsLabel')}
                w={{ base: 'full', md: 'auto' }}
                _hover={{ textDecoration: 'none' }}
              >
                <Button w="full">
                  {t('home.sections.exploreDocumentation')}
                </Button>
              </ChakraLink>
              <ChakraLink
                href="mailto:juvinski@fact.finance"
                aria-label={t('home.aria.contactSupportLabel')}
                _hover={{ textDecoration: 'none' }}
              >
                <Button variant="ghost">
                  {t('home.sections.contactSupport')}
                </Button>
              </ChakraLink>
            </HStack>
          </VStack>
          <Box flex={1}>
            <CodeBlock aria-label={t('home.aria.codeExample')} />
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
            {t('home.sections.faqTitle')}
          </Heading>
          <Text as="p" textStyle="subtitle" w="full" textAlign={{ base: 'left', md: 'center' }}>
            {t('home.sections.faqSubtitle')}
          </Text>
        </VStack>
        <Suspense
          fallback={
            <Text role="status" w="full" textAlign={{ base: 'left', md: 'center' }} p={4}>
              {t('home.loading.faq')}
            </Text>
          }
        >
          <LazyFaq />
        </Suspense>
        <Center gap={3} mt={{ base: 4, md: 8 }}>
          <Text fontSize="smaller">{t('home.sections.stillHaveQuestions')}</Text>
          <ChakraLink
            href="mailto:juvinski@fact.finance"
            color="brand.500"
            fontSize="smaller"
            aria-label={t('home.aria.contactUsLabel')}
            _hover={{ textDecoration: 'underline' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('home.sections.contactUs')}
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
              {t('home.sections.unlockValueTitle')}
            </Heading>
            <Text
              id="unlock-value-description"
              maxW="2xl"
              textStyle="subtitle"
              textAlign={{ base: 'left', md: 'center' }}
              fontSize={{ base: 'sm', md: 'md' }}
            >
              {t('home.sections.unlockValueDescription')}
            </Text>
          </TitleSection>

          <HStack justify="center" gap={4} mt={4} flexWrap={{ base: 'wrap', md: 'nowrap' }}>
            <ChakraLink
              href="mailto:fernanda@fact.finance"
              target="_blank"
              rel="noopener noreferrer"
              w={{ base: 'full', sm: 'auto' }}
              _hover={{ textDecoration: 'none' }}
            >
              <Button size="xl" w="full">
                {t('home.sections.talkToExpert')}
              </Button>
            </ChakraLink>
            <Link to="/data-hub" style={{ textDecoration: 'none' }}>
              <Button variant="plain" color="bg">
                {t('dataHub.title')}
              </Button>
            </Link>
          </HStack>
        </Center>
      </VStack>
    </Box>
  );
};
