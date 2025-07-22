import { SEO } from '@/components/Common/SEO';
import { TitleSection } from '@/components/ui/title-sectiont';
import { Box, Container, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router';
import { USE_CASE_CAPITAL_MARKETS, USE_CASE_COMMODITIES, USE_CASE_REAL_ESTATE, UseCase } from './types';
import CapitalMarkets from './CapitalMarkets';
import Commodities from './Commodities';
import RealEstate from './RealEstate';
import { useI18n } from '@/hooks/useI18n';

export default function UseCases() {
  const { t } = useI18n();
  const { useCase } = useParams();
  const [currentUseCase, setCurrentUseCase] = useState<UseCase | null>(null);

  useEffect(() => {
    if (useCase) {
      setCurrentUseCase(useCase as UseCase);
    } else {
      setCurrentUseCase(USE_CASE_CAPITAL_MARKETS);
    }
  }, [useCase]);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Use Cases | Fact Finance - Real World Asset Tokenization Platform',
    description:
      'Discover how Fact Finance enables Real Estate, Capital Markets, and Commodities tokenization with secure blockchain infrastructure and verified data.',
    url: 'https://fact.finance/use-cases',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://fact.finance',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Use Cases',
          item: 'https://fact.finance/use-cases',
        },
      ],
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Capital Markets',
          description: 'Access official economic indices and market data for tokenized financial instruments',
          url: 'https://fact.finance/use-cases/capital-markets',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Real Estate',
          description: 'Verified property data, square meter pricing, and proof of reserve for tokenized Real Estate',
          url: 'https://fact.finance/use-cases/real-estate',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Commodities',
          description:
            'Real-time commodity pricing, quality metrics, and environmental monitoring for tokenized assets',
          url: 'https://fact.finance/use-cases/commodities',
        },
      ],
    },
    about: {
      '@type': 'Thing',
      name: 'Asset Tokenization Platform',
      description: 'Enterprise blockchain infrastructure for tokenizing real-world assets with verified data',
    },
    keywords: [
      'real estate tokenization',
      'asset tokenization platform',
      'blockchain infrastructure',
      'tokenized commodities',
      'digital assets',
      'capital markets blockchain',
      'real estate DeFi',
      'commodity tokenization',
      'verified asset data',
      'blockchain oracle',
    ],
  };

  const cardRefs = {
    'capital-markets': useRef<HTMLDivElement>(null),
    'real-estate': useRef<HTMLDivElement>(null),
    commodities: useRef<HTMLDivElement>(null),
  };

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!hoveredCard || !cardRefs[hoveredCard]?.current) return;

      const card = cardRefs[hoveredCard].current;
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hoveredCard]);

  return (
    <>
      <SEO
        title="Use Cases | Fact Finance - Enterprise Asset Tokenization Platform"
        description="Explore how Fact Finance enables Real Estate, Capital Markets, and Commodities tokenization with secure blockchain infrastructure and verified data. Learn about our enterprise solutions."
        keywords="Real Estate tokenization, asset tokenization platform, blockchain infrastructure, tokenized commodities, digital assets, capital markets blockchain, Real Estate DeFi, commodity tokenization, verified asset data, blockchain oracle"
        structuredData={JSON.stringify(structuredData)}
        canonical="https://fact.finance/use-cases"
        openGraph={{
          title: 'Use Cases | Fact Finance - Enterprise Asset Tokenization Platform',
          description:
            'Explore how Fact Finance enables Real Estate, Capital Markets, and Commodities tokenization with secure blockchain infrastructure and verified data.',
          url: 'https://fact.finance/use-cases',
          type: 'website',
          images: [
            {
              url: 'https://fact.finance/og-image-use-cases.jpg',
              width: 1200,
              height: 630,
              alt: 'Fact Finance Use Cases',
            },
          ],
          canonical: 'https://fact.finance/use-cases',
        }}
        twitter={{
          card: 'summary_large_image',
          site: '@FactFinance',
          title: 'Use Cases | Fact Finance - Enterprise Asset Tokenization Platform',
          description:
            'Explore how Fact Finance enables Real Estate, Capital Markets, and Commodities tokenization with secure blockchain infrastructure and verified data.',
          image: 'https://fact.finance/twitter-image-use-cases.jpg',
        }}
      />
      <Box as="main" pos="relative" w="full" h="full" pt={{ base: '72px', md: '144px' }} pb={{ base: 12, md: 24 }}>
        <Container maxW="6xl" as="section">
          <TitleSection>
            <Text
              fontSize="sm"
              bgGradient="to-r"
              gradientFrom="brand.50"
              gradientTo="brand.400"
              bgClip="text"
              textTransform="uppercase"
              letterSpacing={2}
              fontWeight="600"
              w="full"
              textAlign={{ base: 'left', md: 'center' }}
            >
              {t('useCases.title')}
            </Text>
            <Heading
              as="h1"
              textStyle="title"
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
              w="full"
              textAlign={{ base: 'left', md: 'center' }}
            >
              {t('useCases.subtitle')}
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              maxW="3xl"
              mx="auto"
              w="full"
              textAlign={{ base: 'left', md: 'center' }}
              color="whiteAlpha.800"
            >
              {t('useCases.description')}
            </Text>
          </TitleSection>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            gap={4}
            mb={8}
            as="section"
            aria-label="Use case categories"
            role="region"
          >
            {[
              {
                id: USE_CASE_CAPITAL_MARKETS,
                title: t('useCases.capitalMarkets.title'),
                description: t('useCases.capitalMarkets.description'),
                video: '/assets/what-we-do/capital-markets.mp4',
                poster: '/assets/what-we-do/capital-markets-poster.webp',
              },
              {
                id: USE_CASE_REAL_ESTATE,
                title: t('useCases.realEstate.title'),
                description: t('useCases.realEstate.description'),
                video: '/assets/what-we-do/real-estate.mp4',
                poster: '/assets/what-we-do/real-estate-poster.webp',
              },
              {
                id: USE_CASE_COMMODITIES,
                title: t('useCases.commodities.title'),
                description: t('useCases.commodities.description'),
                video: '/assets/what-we-do/commodities.mp4',
                poster: '/assets/what-we-do/commodities-poster.webp',
              },
            ].map((card) => (
              <VStack
                key={card.id}
                ref={cardRefs[card.id as keyof typeof cardRefs]}
                id={`card-${card.id}`}
                className="use-case-card"
                align="flex-start"
                flex="1"
                minH={{ base: '160px', md: '360px' }}
                h={{ base: '160px', md: '360px' }}
                p={{ base: 4, sm: 8 }}
                position="relative"
                overflow="hidden"
                role="button"
                tabIndex={0}
                aria-pressed={currentUseCase === card.id}
                aria-controls={`content-${card.id}`}
                borderRadius="xl"
                transition="all 0.3s ease"
                _hover={{ transform: 'scale(1.02)', cursor: 'pointer' }}
                as={Link}
                to={`/use-cases/${card.id}`}
                onMouseEnter={() => {
                  setHoveredCard(card.id);
                  if (cardRefs[card.id as keyof typeof cardRefs].current) {
                    cardRefs[card.id as keyof typeof cardRefs].current!.style.setProperty('--size', '200px');
                  }
                }}
                onMouseLeave={() => {
                  setHoveredCard(null);
                  if (cardRefs[card.id as keyof typeof cardRefs].current) {
                    cardRefs[card.id as keyof typeof cardRefs].current!.style.setProperty('--size', '0px');
                  }
                }}
              >
                <Heading as="h2" fontSize="3xl" lineHeight="1" textAlign="left" id={`heading-${card.id}`}>
                  {card.title}
                </Heading>
                <Text fontSize="md" color="whiteAlpha.900">
                  {card.description}
                </Text>
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  w="100%"
                  h="100%"
                  zIndex={-1}
                >
                  <video
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: currentUseCase === card.id ? 'brightness(1)' : 'brightness(0.25)',
                      mixBlendMode: currentUseCase === card.id ? 'normal' : 'luminosity',
                      opacity: 0.5
                    }}
                    autoPlay
                    muted
                    playsInline
                    loop
                    preload="metadata"
                    poster={card.poster}
                    aria-hidden="true"
                    aria-label={`Background video showing ${card.title}`}
                  >
                    <source src={card.video} type="video/mp4" />
                  </video>
                </Box>
              </VStack>
            ))}
          </SimpleGrid>
          <Box
            position="absolute"
            top="0%"
            left="50%"
            transform="translate(-50%, -50%)"
            w="500px"
            h="500px"
            bg="radial-gradient(circle, {colors.brand.800} 0%, {colors.brand.900} 25%, transparent 100%)"
            filter="blur(120px)"
            opacity={0.5}
            zIndex={-1}
          />
          <Commodities currentUseCase={currentUseCase as UseCase} />
          <RealEstate currentUseCase={currentUseCase as UseCase} />
          <CapitalMarkets currentUseCase={currentUseCase as UseCase} />
        </Container>
      </Box>

      <Box as="a" href="#main-content" position="absolute" top="-40px" left="0" _focus={{ top: '0' }}>
        Skip to main content
      </Box>
    </>
  );
}
