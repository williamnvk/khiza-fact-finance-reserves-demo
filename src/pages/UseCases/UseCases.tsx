import { SEO } from '@/components/Common/SEO';
import { TitleSection } from '@/components/ui/title-sectiont';
import { Box, Container, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react';
import { BadgeCheckIcon, ComponentIcon, SearchIcon } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const USE_CASE_COMMODITIES = 'commodities';
const USE_CASE_REAL_ESTATE = 'real-estate';
const USE_CASE_CAPITAL_MARKETS = 'capital-markets';

type UseCase = typeof USE_CASE_COMMODITIES | typeof USE_CASE_REAL_ESTATE | typeof USE_CASE_CAPITAL_MARKETS;

export default function UseCases() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Use Cases | Fact Finance - Real World Asset Tokenization Solutions',
    description:
      'Explore how Fact Finance powers real estate tokenization, capital markets, and commodities with trusted data infrastructure.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Tokenized Capital Markets',
          description: 'Access official economic indices from authorized sources',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Real Estate Tokenization',
          description: 'Square meter price and proof of reserve for properties',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Tokenized Commodities',
          description: 'Qualitative data and monitoring for commodities',
        },
      ],
    },
  };

  const cardRefs = {
    'capital-markets': useRef<HTMLDivElement>(null),
    'real-estate': useRef<HTMLDivElement>(null),
    commodities: useRef<HTMLDivElement>(null),
  };

  const [useCase, setUseCase] = useState<UseCase>(USE_CASE_REAL_ESTATE);
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
        title="Use Cases | Fact Finance - Real World Asset Tokenization Solutions"
        description="Explore how Fact Finance powers real estate tokenization, capital markets, and commodities with trusted data infrastructure. Learn about our blockchain solutions."
        keywords="real estate tokenization, capital markets blockchain, tokenized commodities, blockchain data infrastructure, asset tokenization use cases"
        structuredData={JSON.stringify(structuredData)}
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
              Use Case
            </Text>
            <Heading
              as="h1"
              textStyle="title"
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
              w="full"
              textAlign={{ base: 'left', md: 'center' }}
            >
              Real-world use cases for blockchain solutions
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              maxW="3xl"
              mx="auto"
              w="full"
              textAlign={{ base: 'left', md: 'center' }}
              color="whiteAlpha.800"
            >
              Discover practical applications of Fact Finance's data across industries, from real estate to commodities,
              driving innovation in the tokenized economy.
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
                title: 'Tokenized Capital Markets',
                description: 'Access official economic indices from authorized sources',
                video: '/assets/what-we-do/capital-markets.mp4',
                poster: '/assets/what-we-do/capital-markets-poster.webp',
              },
              {
                id: USE_CASE_REAL_ESTATE,
                title: 'Real Estate Tokenization',
                description: 'Square meter price and proof of reserve for properties',
                video: '/assets/what-we-do/real-estate.mp4',
                poster: '/assets/what-we-do/real-estate-poster.webp',
              },
              {
                id: USE_CASE_COMMODITIES,
                title: 'Tokenized Commodities',
                description: 'Qualitative data and monitoring for commodities',
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
                minH={{ base: '240px', md: '360px' }}
                h={{ base: '240px', md: '360px' }}
                p={{ base: 4, sm: 8 }}
                position="relative"
                overflow="hidden"
                role="button"
                tabIndex={0}
                aria-pressed={useCase === card.id}
                aria-controls={`content-${card.id}`}
                borderRadius="xl"
                transition="all 0.3s ease"
                _hover={{ transform: 'scale(1.02)', cursor: 'pointer' }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setUseCase(card.id);
                  }
                }}
                onClick={() => setUseCase(card.id)}
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
                {' '}
                <Heading as="h2" fontSize="3xl" lineHeight="1" textAlign="left" id={`heading-${card.id}`}>
                  {' '}
                  {card.title}{' '}
                </Heading>{' '}
                <Text fontSize="md" color="whiteAlpha.900">
                  {' '}
                  {card.description}{' '}
                </Text>{' '}
                <Box
                  as="video"
                  position="absolute"
                  top={0}
                  left={0}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  autoPlay
                  muted
                  playsInline
                  loading="lazy"
                  preload="metadata"
                  poster={card.poster}
                  filter={useCase === card.id ? 'brightness(1)' : 'brightness(0.25)'}
                  mixBlendMode={useCase === card.id ? 'normal' : 'luminosity'}
                  opacity={0.5}
                  loop
                  src={card.video}
                  aria-hidden="true"
                  zIndex={-1}
                  fetchPriority={useCase === card.id ? 'high' : 'low'}
                  aria-label={`Background video showing ${card.title}`}
                />{' '}
              </VStack>
            ))}{' '}
          </SimpleGrid>
          <VStack
            w="full"
            gap={4}
            data-use-case={USE_CASE_COMMODITIES}
            display={useCase === USE_CASE_COMMODITIES ? 'block' : 'none'}
          >
            <Heading
              as="h2"
              fontSize="8xl"
              lineHeight="1"
              aria-label="Section heading about unlocking liquidity and transparency"
            >
              Unlocking liquidity and transparency
            </Heading>
            <br />
            <Text fontSize="lg">
              Latin America’s economies heavily rely on the commodities sector, driving global markets for agricultural
              goods, minerals, and energy. Despite its significance, this sector faces challenges such as operational
              inefficiencies, high transaction costs, and limited access to financing, particularly for smaller
              producers.
            </Text>
            <br />
            <Text fontSize="lg">
              Tokenization provides a powerful solution by digitizing physical commodities, making them tradable and
              usable as collateral for financing. This unlocks liquidity for producers while enabling them to retain
              ownership of their assets.
            </Text>
            <br />
            <Text fontWeight="bold" fontSize="2xl">
              Reducing risk with verified data for commodity tokenization
            </Text>
            <br />
            <Text fontSize="lg">
              In lending markets, managing risk exposure is critical for both lenders and borrowers. Collateralized
              assets must be as transparent as possible to reduce perceived risk. In agriculture, for example, variables
              such as region, weather, grain type, and other qualitative factors significantly impact the associated
              risk score. Addressing these information asymmetries is key to unlocking tokenization's potential to
              expand financing to small producers.
            </Text>
            <br />
            <Text fontSize="lg">
              Fact Finance bridges this gap by connecting tokenized assets, such as grains or livestock, to trusted data
              sources directly associated with the underlying commodities. This includes:
            </Text>
            <br />
            <SimpleGrid columns={4} w="full" gap={{ base: 4, md: 4 }}>
              <VStack
                gap={4}
                w="full"
                bg="white"
                p={{ base: 4, md: 8 }}
                borderRadius="lg"
                align="flex-start"
                color="black"
              >
                <Text as="span" fontWeight="bold" fontSize="xl">
                  Market prices
                </Text>
                <Text fontSize="sm">
                  Real-time pricing pulled directly from trusted exchanges like the CME (Chicago Mercantile Exchange).
                </Text>
              </VStack>

              <VStack
                gap={4}
                w="full"
                bg="white"
                p={{ base: 4, md: 8 }}
                borderRadius="lg"
                align="flex-start"
                color="black"
              >
                <Text as="span" fontWeight="bold" fontSize="xl">
                  Qualitative data
                </Text>
                <Text fontSize="sm">
                  Information from farmers' ERP systems, such as productivity history, crop type, and operational
                  timelines.
                </Text>
              </VStack>

              <VStack
                gap={4}
                w="full"
                bg="white"
                p={{ base: 4, md: 8 }}
                borderRadius="lg"
                align="flex-start"
                color="black"
              >
                <Text as="span" fontWeight="bold" fontSize="xl">
                  Environmental data
                </Text>
                <Text fontSize="sm">
                  Weather conditions and climate forecasts that influence yield quality and asset value.
                </Text>
              </VStack>

              <VStack
                gap={4}
                w="full"
                bg="white"
                p={{ base: 4, md: 8 }}
                borderRadius="lg"
                align="flex-start"
                color="black"
              >
                <Text as="span" fontWeight="bold" fontSize="xl">
                  Logistics data
                </Text>
                <Text fontSize="sm">
                  Key information such as proximity to ports or transportation hubs, affecting delivery efficiency and
                  costs.
                </Text>
              </VStack>
            </SimpleGrid>

            <br />

            <Text fontWeight="bold" fontSize="2xl" lineHeight="1">
              Event monitoring for tokenized commodities
            </Text>
            <br />

            <Text fontSize="lg" fontWeight="400">
              By enriching tokens with real-time data, oracles can track off-chain events that directly affect the value
              or utility of tokenized assets. For example, an insurance smart contract for agricultural assets can use
              weather oracles to monitor events such as droughts or floods, automatically triggering payouts when
              predefined thresholds are met. Similarly, Fact Finance's oracles can flag significant changes, such as
              adverse weather conditions, that may require lenders to reassess loan terms.
            </Text>
            <br />
            <Text fontSize="lg" fontWeight="400">
              With this data integration, collateralized tokens become dynamic financial instruments rather than static
              representations, reducing risk and increasing transparency. This enables lending protocols to offer higher
              Loan-to-Value (LTV) ratios, giving producers greater access to financing without sacrificing control over
              their assets.
            </Text>
          </VStack>

          <VStack
            w="full"
            gap={4}
            data-use-case={USE_CASE_REAL_ESTATE}
            display={useCase === USE_CASE_REAL_ESTATE ? 'block' : 'none'}
          >
            <Text fontWeight="bold" fontSize="8xl" lineHeight="1">
              Unlocking utility by reducing information asymmetry
            </Text>
            <br />
            <Text fontSize="lg">
              The tokenization of real estate offers the advantages of{' '}
              <Text as="span" fontWeight="bold">
                fractional ownership
              </Text>{' '}
              and the potential for increased liquidity, making these high-value assets more accessible to a broader
              range of investors within a tradable and programmable infrastructure. However, significant{' '}
              <Text as="span" fontWeight="bold">
                information asymmetries
              </Text>{' '}
              between the token and the off-chain asset it represents still limit its full potential. To unlock greater
              utility and liquidity, tokenized real estate assets must be enriched with{' '}
              <Text as="span" fontWeight="bold">
                verified, up-to-date data
              </Text>{' '}
              that provides a real-time connection to the underlying property.
            </Text>
            <br />
            <Text fontSize="lg">
              Tokenized properties offer greater accessibility, but blockchain technology lacks intrinsic connections to
              off-chain data. This creates a gap: while tokens can represent ownership, they do not inherently reflect
              the{' '}
              <Text as="span" fontWeight="bold">
                current market conditions
              </Text>{' '}
              of the real-world asset they are tied to. Fact Finance bridges this gap by serving as the data layer
              between tokenized assets and proprietary data sources. For example, a real estate company tokenizing a
              property needs the token to reflect more than just ownership, it must also carry the information of the
              market value for that asset, transforming the token into a true digital twin.
            </Text>
            <br />
            <Text fontWeight="bold" fontSize="2xl">
              What type of data?
            </Text>
            <br />
            <SimpleGrid columns={3} w="full" gap={{ base: 4, md: 4 }}>
              <VStack
                gap={4}
                w="full"
                bg="white"
                p={{ base: 4, md: 8 }}
                borderRadius="lg"
                align="flex-start"
                color="black"
              >
                <Text as="span" fontWeight="bold" fontSize="3xl">
                  Proof of Reserve
                </Text>
                <Text fontSize="sm">
                  To confirm that the token corresponds to a specific property, Fact Finance can provide on-chain
                  information, such as: Address and geolocation, Legal status (Due Diligence), Property type
                  (residential or commercial), year of construction.
                </Text>
              </VStack>

              <VStack
                gap={4}
                w="full"
                bg="white"
                p={{ base: 4, md: 8 }}
                borderRadius="lg"
                align="flex-start"
                color="black"
              >
                <Text as="span" fontWeight="bold" fontSize="3xl">
                  Square Meter Price
                </Text>
                <Text fontSize="sm">
                  To reflect property appreciation or depreciation, tokens require up-to-date regional price per square
                  meter data. Fact Finance integrates directly with licensed data institutions to provide precise market
                  pricing, enabling an up-to-date valuation of the property to be calculated.
                </Text>
              </VStack>

              <VStack
                gap={4}
                w="full"
                bg="white"
                p={{ base: 4, md: 8 }}
                borderRadius="lg"
                align="flex-start"
                color="black"
              >
                <Text as="span" fontWeight="bold" fontSize="3xl">
                  Economic indices
                </Text>
                <Text fontSize="sm">
                  Real estate contracts often require inflation adjustments. In Brazil, 90% of rental contracts are tied
                  to the inflation index IGP-M. Fact Finance connects directly to this official data source, ensuring
                  seamless inflation updates.
                </Text>
              </VStack>
            </SimpleGrid>

            <br />

            <Text fontWeight="bold" fontSize="5xl" lineHeight="1">
              Here’s how Fact Finance
              <br />
              ensures a reliable connection:
            </Text>
            <br />
            <SimpleGrid columns={3} w="full" gap={{ base: 4, md: 4 }}>
              <VStack gap={4} w="full" p={{ base: 4, md: 12 }} bg="whiteAlpha.50" borderRadius="lg">
                <Text color="brand.500">
                  <BadgeCheckIcon size={32} />
                </Text>
                <VStack gap={4} flex={1} align="flex-start">
                  <Heading fontSize="xl">Proof of Authenticity</Heading>
                  <Text fontSize="lg">
                    On-chain wallet validation that the data comes directly from the official data provider, eliminating
                    risks of tampering.
                  </Text>
                </VStack>
              </VStack>

              <VStack gap={4} w="full" p={{ base: 4, md: 12 }} bg="whiteAlpha.50" borderRadius="lg">
                <Text color="brand.500">
                  <SearchIcon size={32} />
                </Text>
                <VStack gap={4} flex={1} align="flex-start">
                  <Heading fontSize="xl">Confidence Index</Heading>
                  <Text fontSize="lg">
                    Our system monitors data for anomalies using statistical and density-based detection techniques. Any
                    outlier data is flagged so the consumer contract can determine how to handle it.
                  </Text>
                </VStack>
              </VStack>

              <VStack gap={4} w="full" p={{ base: 4, md: 12 }} bg="whiteAlpha.50" borderRadius="lg">
                <Text color="brand.500">
                  <ComponentIcon size={32} />
                </Text>
                <VStack gap={4} flex={1} align="flex-start">
                  <Heading fontSize="xl">External Auditors</Heading>
                  <Text fontSize="lg">
                    A pool of independent auditors validates the integrity and accuracy of the data provided
                  </Text>
                </VStack>
              </VStack>
            </SimpleGrid>

            <br />

            <Text fontSize="xl" fontWeight="400">
              With Fact Finance’s integration, tokenized real estate moves beyond static representation to become a
              dynamic financial asset. Tokens can now serve as collateral for loans or be used in DeFi applications,
              unlocking greater utility and liquidity for both issuers and investors.
            </Text>
          </VStack>

          <VStack
            w="full"
            data-use-case={USE_CASE_CAPITAL_MARKETS}
            display={useCase === USE_CASE_CAPITAL_MARKETS ? 'block' : 'none'}
          >
            <Text fontSize="lg">
              Tokenized capital markets are reshaping the financial landscape, especially in regions like Latin America,
              where high interest rates and inflation have historically shaped economic behavior. As investors seek to
              protect real returns, tokenization is emerging as a powerful tool to modernize financial systems.
            </Text>
            <br />
            <Text fontSize="lg">
              Brazil is at the forefront of adopting blockchain for financial instruments. With the Central Bank
              developing its own DLT infrastructure and regulators collaborating with market players, tokenization has
              moved beyond theory to become a reality. This shift brings faster settlements, lower costs, and increased
              efficiency, all while keeping traditional market standards.
            </Text>
            <br />
            <Text fontSize="lg">
              The rise of tokenization platforms signals a new era of financial innovation in Brazil. These companies
              are working closely with regulators to integrate smart contract programmability into the needs of the
              traditional financial system. The goal is to create the tokenized economy that maintains regulatory
              compliance while unlocking new efficiencies.
            </Text>
            <br />
            <Text fontWeight="bold" fontSize="6xl" lineHeight="1">
              Fact Finance role connecting official data and tokenized assets
            </Text>
            <br />
            <Text fontSize="lg">
              In Brazil, approximately 45% of public debt is tied to the Selic (Interest rate), and another 30% to
              inflation-adjusted bonds. These indexed instruments dominate over 75% of the country’s bond market. Beyond
              public debt, private long-term contracts, such as residential leases, also rely on inflation indexing,
              with the General Market Price Index (IGP-M) being a staple for rent price adjustments.
            </Text>
            <br />
            <Text fontSize="lg">
              Just like the traditional economy, the tokenized economy also needs to rely on accurate and verified
              economic data. Fact Finance provides seamless, secure on-chain access to economic indices, such as CDI
              (interest rate) and IGP-M (inflation), directly from official sources. Our oracle infrastructure acts as a
              data hub, integrating this information into tokenized assets like public bonds, private credit, and
              long-term contracts.
            </Text>
            <br />
            <Text fontSize="lg">
              By bridging real-world economic data with asset tokenization, Fact Finance enables tokenized assets to
              receive real-time price updates based on official data.
            </Text>
            <br />
            <Text fontWeight="bold" fontSize="4xl" lineHeight="1">
              Unlock the potential of tokenized capital markets
            </Text>
            <br />
            <Text fontSize="lg">
              Ready to see how Fact Finance’s data hub can power your tokenized assets solutions? Visit our data feeds
              page today to learn more.
            </Text>
            <Text fontSize="lg" visibility="hidden">
              Tokenized capital markets, private credit tokenization, oracle for economic indices, CDI, SELIC, IGPM IPCA
              data feeds — economic data onchain: IPCA, IGPM for web3 applications
            </Text>
          </VStack>
        </Container>
      </Box>

      <Box as="a" href="#main-content" position="absolute" top="-40px" left="0" _focus={{ top: '0' }}>
        Skip to main content
      </Box>
    </>
  );
}
