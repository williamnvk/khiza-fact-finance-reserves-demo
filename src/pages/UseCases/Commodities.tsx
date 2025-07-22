import { Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react';
import { USE_CASE_COMMODITIES, UseCase } from './types';
import UseCasesCTA from './CTA';
import { useI18n } from '@/hooks/useI18n';

export default function Commodities({ currentUseCase }: { currentUseCase: UseCase }) {
  const { t } = useI18n();
  
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
        aria-label={`Section heading about ${t('useCases.commodities.sectionTitle')}`}
      >
        {t('useCases.commodities.sectionTitle')}
      </Heading>
      <br />
      <Text fontSize={{ base: 'md', md: 'lg' }}>
        {t('useCases.commodities.intro1')}
      </Text>
      <br />
      <Text fontSize={{ base: 'md', md: 'lg' }}>
        {t('useCases.commodities.intro2')}
      </Text>
      <br />
      <Text fontWeight="bold" fontSize={{ base: 'lg', md: '2xl' }}>
        {t('useCases.commodities.riskReduction')}
      </Text>
      <br />
      <Text fontSize={{ base: 'md', md: 'lg' }}>
        {t('useCases.commodities.risk1')}
      </Text>
      <br />
      <Text fontSize={{ base: 'md', md: 'lg' }}>
        {t('useCases.commodities.risk2')}
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
            {t('useCases.commodities.marketPrices.title')}
          </Text>
          <Text fontSize="sm">
            {t('useCases.commodities.marketPrices.description')}
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
            {t('useCases.commodities.qualitativeData.title')}
          </Text>
          <Text fontSize="sm">
            {t('useCases.commodities.qualitativeData.description')}
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
            {t('useCases.commodities.environmentalData.title')}
          </Text>
          <Text fontSize="sm">
            {t('useCases.commodities.environmentalData.description')}
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
            {t('useCases.commodities.logisticsData.title')}
          </Text>
          <Text fontSize="sm">
            {t('useCases.commodities.logisticsData.description')}
          </Text>
        </VStack>
      </SimpleGrid>

      <br />

      <Text fontWeight="bold" fontSize="2xl" lineHeight="1">
        {t('useCases.commodities.eventMonitoring')}
      </Text>
      <br />

      <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="400">
        {t('useCases.commodities.event1')}
      </Text>
      <br />
      <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="400">
        {t('useCases.commodities.event2')}
      </Text>
      <br />
      <UseCasesCTA title={t('useCases.cta.commoditiesTitle')} />
    </VStack>
  );
}
