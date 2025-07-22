import { Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { USE_CASE_CAPITAL_MARKETS, UseCase } from './types';
import UseCasesCTA from './CTA';
import { useI18n } from '@/hooks/useI18n';

export default function CapitalMarkets({ currentUseCase }: { currentUseCase: UseCase }) {
  const { t } = useI18n();
  
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
        aria-label={`Section heading about ${t('useCases.capitalMarkets.sectionTitle')}`}
      >
        {t('useCases.capitalMarkets.sectionTitle')}
      </Heading>
      <br />
      <Text fontSize={{ base: "md", md: "lg"}}>
        {t('useCases.capitalMarkets.intro1')}
      </Text>
      <br />
      <Text fontSize={{ base: "md", md: "lg"}}>
        {t('useCases.capitalMarkets.intro2')}
      </Text>
      <br />
      <Text fontSize={{ base: "md", md: "lg"}}>
        {t('useCases.capitalMarkets.intro3')}
      </Text>
      <br />
      <Text fontWeight="bold" fontSize={{ base: 'lg', md: '2xl' }}>
        {t('useCases.capitalMarkets.factFinanceRole')}
      </Text>
      <br />
      <Text fontSize={{ base: "md", md: "lg"}}>
        {t('useCases.capitalMarkets.role1')}
      </Text>
      <br />
      <Text fontSize={{ base: "md", md: "lg"}}>
        {t('useCases.capitalMarkets.role2')}
      </Text>
      <br />
      <Text fontSize={{ base: "md", md: "lg"}}>
        {t('useCases.capitalMarkets.role3')}
      </Text>
      <br />
      <Text fontWeight="bold" fontSize={{ base: 'lg', md: '2xl' }}>
        {t('useCases.capitalMarkets.dataTypes')}
      </Text>
      <br />
      <SimpleGrid columns={{ base: 1, md: 3 }} w="full" gap={{ base: 1, md: 4 }}>
        <VStack gap={{ base: 1, md: 4 }} w="full" bg="white" p={{ base: 4, md: 8 }} borderRadius="lg" align="flex-start" color="black">
          <Text as="span" fontWeight="bold" fontSize="xl">
            {t('useCases.capitalMarkets.cdi.title')}
            <br />
            <Text as="span" fontWeight="400" fontSize={{ base: "sm", md: "xs"}}>
              {t('useCases.capitalMarkets.cdi.subtitle')}
            </Text>
          </Text>
          <Text fontSize="sm">
            {t('useCases.capitalMarkets.cdi.description')}
          </Text>
        </VStack>

        <VStack gap={{ base: 1, md: 4 }} w="full" bg="white" p={{ base: 4, md: 8 }} borderRadius="lg" align="flex-start" color="black">
          <Text as="span" fontWeight="bold" fontSize="xl">
            {t('useCases.capitalMarkets.ipca.title')}
            <br />
            <Text as="span" fontWeight="400" fontSize={{ base: "sm", md: "xs"}}>
              {t('useCases.capitalMarkets.ipca.subtitle')}
            </Text>
          </Text>
          <Text fontSize="sm">
            {t('useCases.capitalMarkets.ipca.description')}
          </Text>
        </VStack>

        <VStack gap={{ base: 1, md: 4 }} w="full" bg="white" p={{ base: 4, md: 8 }} borderRadius="lg" align="flex-start" color="black">
          <Text as="span" fontWeight="bold" fontSize="xl">
            {t('useCases.capitalMarkets.igpm.title')}
            <br />
            <Text as="span" fontWeight="400" fontSize={{ base: "sm", md: "xs"}}>
              {t('useCases.capitalMarkets.igpm.subtitle')}
            </Text>
          </Text>
          <Text fontSize="sm">
            {t('useCases.capitalMarkets.igpm.description')}
          </Text>
        </VStack>
      </SimpleGrid>

      <br />

      <UseCasesCTA title={t('useCases.cta.capitalMarketsTitle')} />
    </VStack>
  );
}
