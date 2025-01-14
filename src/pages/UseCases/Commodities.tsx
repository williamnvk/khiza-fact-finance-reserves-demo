import { Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react';
import { USE_CASE_COMMODITIES, UseCase } from './types';
import UseCasesCTA from './CTA';

export default function Commodities({ currentUseCase }: { currentUseCase: UseCase }) {
  return (
    <VStack
      w="full"
      gap={4}
      data-use-case={USE_CASE_COMMODITIES}
      display={currentUseCase === USE_CASE_COMMODITIES ? 'block' : 'none'}
    >
      <Heading
        as="h2"
        fontSize={{ base: '2xl', sm: '4xl', md: '4xl', lg: '4xl' }}
        lineHeight="1.1"
        aria-label="Section heading about unlocking liquidity and transparency"
      >
        Unlocking liquidity and transparency
      </Heading>
      <br />
      <Text fontSize={{ base: 'md', md: 'lg' }}>
        Latin America's economies heavily rely on the commodities sector, driving global markets for agricultural goods,
        minerals, and energy. Despite its significance, this sector faces challenges such as operational inefficiencies,
        high transaction costs, and limited access to financing, particularly for smaller producers.
      </Text>
      <br />
      <Text fontSize={{ base: 'md', md: 'lg' }}>
        Tokenization provides a powerful solution by digitizing physical commodities, making them tradable and usable as
        collateral for financing. This unlocks liquidity for producers while enabling them to retain ownership of their
        assets.
      </Text>
      <br />
      <Text fontWeight="bold" fontSize={{ base: 'lg', md: '2xl' }}>
        Reducing risk with verified data for commodity tokenization
      </Text>
      <br />
      <Text fontSize={{ base: 'md', md: 'lg' }}>
        In lending markets, managing risk exposure is critical for both lenders and borrowers. Collateralized assets
        must be as transparent as possible to reduce perceived risk. In agriculture, for example, variables such as
        region, weather, grain type, and other qualitative factors significantly impact the associated risk score.
        Addressing these information asymmetries is key to unlocking tokenization's potential to expand financing to
        small producers.
      </Text>
      <br />
      <Text fontSize={{ base: 'md', md: 'lg' }}>
        Fact Finance bridges this gap by connecting tokenized assets, such as grains or livestock, to trusted data
        sources directly associated with the underlying commodities. This includes:
      </Text>
      <br />
      <SimpleGrid columns={{ base: 1, sm: 4 }} w="full" gap={{ base: 1, md: 4 }}>
        <VStack
          gap={{ base: 1, md: 4 }}
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
          gap={{ base: 1, md: 4 }}
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
            Information from farmers' ERP systems, such as productivity history, crop type, and operational timelines.
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
          <Text as="span" fontWeight="bold" fontSize="xl">
            Environmental data
          </Text>
          <Text fontSize="sm">
            Weather conditions and climate forecasts that influence yield quality and asset value.
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
          <Text as="span" fontWeight="bold" fontSize="xl">
            Logistics data
          </Text>
          <Text fontSize="sm">
            Key information such as proximity to ports or transportation hubs, affecting delivery efficiency and costs.
          </Text>
        </VStack>
      </SimpleGrid>

      <br />

      <Text fontWeight="bold" fontSize="2xl" lineHeight="1">
        Event monitoring for tokenized commodities
      </Text>
      <br />

      <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="400">
        By enriching tokens with real-time data, oracles can track off-chain events that directly affect the value or
        utility of tokenized assets. For example, an insurance smart contract for agricultural assets can use weather
        oracles to monitor events such as droughts or floods, automatically triggering payouts when predefined
        thresholds are met. Similarly, Fact Finance's oracles can flag significant changes, such as adverse weather
        conditions, that may require lenders to reassess loan terms.
      </Text>
      <br />
      <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="400">
        With this data integration, collateralized tokens become dynamic financial instruments rather than static
        representations, reducing risk and increasing transparency. This enables lending protocols to offer higher
        Loan-to-Value (LTV) ratios, giving producers greater access to financing without sacrificing control over their
        assets.
      </Text>
      <br />
      <UseCasesCTA title="Unlock the potential of tokenized commodities" />
    </VStack>
  );
}
