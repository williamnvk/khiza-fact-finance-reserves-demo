import { Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react';
import { BadgeCheckIcon, ComponentIcon, SearchIcon } from 'lucide-react';
import { USE_CASE_REAL_ESTATE, UseCase } from './types';
import UseCasesCTA from './CTA';

export default function RealEstate({ currentUseCase }: { currentUseCase: UseCase }) {
  return (
    <VStack
      w="full"
      gap={4}
      data-use-case={USE_CASE_REAL_ESTATE}
      display={currentUseCase === USE_CASE_REAL_ESTATE ? 'block' : 'none'}
    >
      <Heading
        as="h2"
        fontSize={{ base: '3xl', md: '3xl' }}
        lineHeight="1.1"
        aria-label="Section heading about unlocking liquidity and transparency"
      >
        Unlocking value by reducing information asymmetry
      </Heading>
      <br />
      <Text fontSize={{ base: 'md', md: 'lg' }}>
        The tokenization of real estate offers the advantages of{' '}
        <Text as="span" fontWeight="bold">
          fractional ownership
        </Text>{' '}
        and the potential for increased liquidity, making these high-value assets more accessible to a broader range of
        investors within a tradable and programmable infrastructure. However, significant{' '}
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
      <Text fontSize={{ base: 'md', md: 'lg' }}>
        Tokenized properties offer greater accessibility, but blockchain technology lacks intrinsic connections to
        off-chain data. This creates a gap: while tokens can represent ownership, they do not inherently reflect the{' '}
        <Text as="span" fontWeight="bold">
          current market conditions
        </Text>{' '}
        of the real-world asset they are tied to. Fact Finance bridges this gap by serving as the data layer between
        tokenized assets and proprietary data sources. For example, a real estate company tokenizing a property needs
        the token to reflect more than just ownership, it must also carry the information of the market value for that
        asset, transforming the token into a true digital twin.
      </Text>
      <br />
      <Text fontWeight="bold" fontSize={{ base: 'lg', md: '2xl' }}>
        What type of data?
      </Text>
      <br />
      <SimpleGrid columns={{ base: 1, md: 3 }} w="full" gap={{ base: 1, md: 4 }}>
        <VStack
          gap={{ base: 1, md: 4 }}
          w="full"
          bg="white"
          p={{ base: 4, md: 8 }}
          borderRadius="lg"
          align="flex-start"
          color="black"
        >
          <Text as="span" fontWeight="bold" fontSize={{ base: 'lg', md: '3xl' }}>
            Proof of Reserve
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            To confirm that the token corresponds to a specific property, Fact Finance can provide on-chain information,
            such as: Address and geolocation, Legal status (Due Diligence), Property type (residential or commercial),
            year of construction.
          </Text>
        </VStack>

        <VStack
          gap={{ base: 1, md: 4 }}
          w="full"
          bg="white"
          p={{ base: 4, md: 8 }}
          borderRadius="lg"
          align="flex-start"
          color="black"
        >
          <Text as="span" fontWeight="bold" fontSize={{ base: 'lg', md: '3xl' }}>
            Square Meter Price
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            To reflect property appreciation or depreciation, tokens require up-to-date regional price per square meter
            data. Fact Finance integrates directly with licensed data institutions to provide precise market pricing,
            enabling an up-to-date valuation of the property to be calculated.
          </Text>
        </VStack>

        <VStack
          gap={{ base: 1, md: 4 }}
          w="full"
          bg="white"
          p={{ base: 4, md: 8 }}
          borderRadius="lg"
          align="flex-start"
          color="black"
        >
          <Text as="span" fontWeight="bold" fontSize={{ base: 'lg', md: '3xl' }}>
            Economic indices
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            Real estate contracts often require inflation adjustments. In Brazil, 90% of rental contracts are tied to
            the inflation index IGP-M. Fact Finance connects directly to this official data source, ensuring seamless
            inflation updates.
          </Text>
        </VStack>
      </SimpleGrid>

      <br />

      <Text fontWeight="bold" fontSize={{ base: 'lg', md: '2xl' }}>
        Here's how Fact Finance ensures a reliable connection:
      </Text>
      <br />
      <SimpleGrid columns={{ base: 1, md: 3 }} w="full" gap={{ base: 4, md: 4 }}>
        <VStack gap={4} w="full" p={{ base: 4, md: 8 }} bg="whiteAlpha.50" borderRadius="lg">
          <Text color="brand.500" textAlign="left" w="full">
            <BadgeCheckIcon size={32} />
          </Text>
          <VStack gap={{ base: 1, md: 4 }} flex={1} align="flex-start">
            <Heading fontSize={{ base: 'lg', md: '2xl' }}>Proof of Authenticity</Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              On-chain wallet validation that the data comes directly from the official data provider, eliminating risks
              of tampering.
            </Text>
          </VStack>
        </VStack>

        <VStack gap={4} w="full" p={{ base: 4, md: 8 }} bg="whiteAlpha.50" borderRadius="lg">
          <Text color="brand.500" textAlign="left" w="full">
            <SearchIcon size={32} />
          </Text>
          <VStack gap={{ base: 1, md: 4 }} flex={1} align="flex-start">
            <Heading fontSize={{ base: 'lg', md: '2xl' }}>Confidence Index</Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              Our system monitors data for anomalies using statistical and density-based detection techniques. Any
              outlier data is flagged so the consumer contract can determine how to handle it.
            </Text>
          </VStack>
        </VStack>

        <VStack gap={4} w="full" p={{ base: 4, md: 8 }} bg="whiteAlpha.50" borderRadius="lg">
          <Text color="brand.500" textAlign="left" w="full">
            <ComponentIcon size={32} />
          </Text>
          <VStack gap={{ base: 1, md: 4 }} flex={1} align="flex-start">
            <Heading fontSize={{ base: 'lg', md: '2xl' }}>External Auditors</Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              A pool of independent auditors validates the integrity and accuracy of the data provided
            </Text>
          </VStack>
        </VStack>
      </SimpleGrid>

      <br />

      <Text fontSize={{ base: 'md', md: 'lg' }}>
        With Fact Finance's integration, tokenized real estate moves beyond static representation to become a dynamic
        financial asset. Tokens can now serve as collateral for loans or be used in DeFi applications, unlocking greater
        utility and liquidity for both issuers and investors.
      </Text>

      <br />

      <UseCasesCTA title="Unlock the potential of tokenized real estate" />
    </VStack>
  );
}
