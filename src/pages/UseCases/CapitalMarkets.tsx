import { Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { USE_CASE_CAPITAL_MARKETS, UseCase } from './types';
import UseCasesCTA from './CTA';

export default function CapitalMarkets({ currentUseCase }: { currentUseCase: UseCase }) {
  return (
    <VStack
      w="full"
      data-use-case={USE_CASE_CAPITAL_MARKETS}
      display={currentUseCase === USE_CASE_CAPITAL_MARKETS ? 'block' : 'none'}
    >
      <Heading
        as="h2"
        fontSize={{ base: '2xl', sm: '4xl', md: '4xl', lg: '4xl' }}
        lineHeight="1.1"
        aria-label="Section heading about unlocking liquidity and transparency"
      >
        Reshaping capital markets in Latin America
      </Heading>
      <br />
      <Text fontSize={{ base: "md", md: "lg"}}>
        Tokenized capital markets are reshaping the financial landscape, especially in regions like Latin America, where
        high interest rates and inflation have historically shaped economic behavior. As investors seek to protect real
        returns, tokenization is emerging as a powerful tool to modernize financial systems.
      </Text>
      <br />
      <Text fontSize={{ base: "md", md: "lg"}}>
        Brazil is at the forefront of adopting blockchain for financial instruments. With the Central Bank developing
        its own DLT infrastructure and regulators collaborating with market players, tokenization has moved beyond
        theory to become a reality. This shift brings faster settlements, lower costs, and increased efficiency, all
        while keeping traditional market standards.
      </Text>
      <br />
      <Text fontSize={{ base: "md", md: "lg"}}>
        The rise of tokenization platforms signals a new era of financial innovation in Brazil. These companies are
        working closely with regulators to integrate smart contract programmability into the needs of the traditional
        financial system. The goal is to create the tokenized economy that maintains regulatory compliance while
        unlocking new efficiencies.
      </Text>
      <br />
      <Text fontWeight="bold" fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }} lineHeight="1.1">
        Fact Finance role connecting official data and tokenized assets
      </Text>
      <br />
      <Text fontSize={{ base: "md", md: "lg"}}>
        In Brazil, approximately 45% of public debt is tied to the Selic (Interest rate), and another 30% to
        inflation-adjusted bonds. These indexed instruments dominate over 75% of the country's bond market. Beyond
        public debt, private long-term contracts, such as residential leases, also rely on inflation indexing, with the
        General Market Price Index (IGP-M) being a staple for rent price adjustments.
      </Text>
      <br />
      <Text fontSize={{ base: "md", md: "lg"}}>
        Just like the traditional economy, the tokenized economy also needs to rely on accurate and verified economic
        data. Fact Finance provides seamless, secure on-chain access to economic indices, such as CDI (interest rate)
        and IGP-M (inflation), directly from official sources. Our oracle infrastructure acts as a data hub, integrating
        this information into tokenized assets like public bonds, private credit, and long-term contracts.
      </Text>
      <br />
      <Text fontSize={{ base: "md", md: "lg"}}>
        By bridging real-world economic data with asset tokenization, Fact Finance enables tokenized assets to receive
        real-time price updates based on official data.
      </Text>
      <br />
      <Text fontWeight="bold" fontSize={{ base: 'lg', md: '2xl' }}>
        What type of data?
      </Text>
      <br />
      <SimpleGrid columns={{ base: 1, md: 3 }} w="full" gap={{ base: 1, md: 4 }}>
        <VStack gap={{ base: 1, md: 4 }} w="full" bg="white" p={{ base: 4, md: 8 }} borderRadius="lg" align="flex-start" color="black">
          <Text as="span" fontWeight="bold" fontSize="xl">
            CDI
            <br />
            <Text as="span" fontWeight="400" fontSize={{ base: "sm", md: "xs"}}>
              (Interbank Deposit Certificate)
            </Text>
          </Text>
          <Text fontSize="sm">
            Daily or monthly on-chain updates of Brazil’s key interest rate, enabling tokenized assets to reflect
            accurate returns tied to interest rate.
          </Text>
        </VStack>

        <VStack gap={{ base: 1, md: 4 }} w="full" bg="white" p={{ base: 4, md: 8 }} borderRadius="lg" align="flex-start" color="black">
          <Text as="span" fontWeight="bold" fontSize="xl">
            IPCA
            <br />
            <Text as="span" fontWeight="400" fontSize={{ base: "sm", md: "xs"}}>
              (Broad Consumer Price Index)
            </Text>
          </Text>
          <Text fontSize="sm">
            Official inflation data directly on-chain, ensuring tokenized contracts, such as bonds and leases, adjust
            automatically to preserve real value.
          </Text>
        </VStack>

        <VStack gap={{ base: 1, md: 4 }} w="full" bg="white" p={{ base: 4, md: 8 }} borderRadius="lg" align="flex-start" color="black">
          <Text as="span" fontWeight="bold" fontSize="xl">
            IGP-M
            <br />
            <Text as="span" fontWeight="400" fontSize={{ base: "sm", md: "xs"}}>
              (General Market Price Index)
            </Text>
          </Text>
          <Text fontSize="sm">
            Inflation-linked updates for sectors like real estate, enabling accurate rent adjustments and reliable
            pricing for tokenized assets.
          </Text>
        </VStack>
      </SimpleGrid>

      <br />

      <UseCasesCTA title="Unlock the potential of tokenized capital markets" />
    </VStack>
  );
}
