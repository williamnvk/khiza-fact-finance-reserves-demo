import { Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react';
import { BadgeCheckIcon, ComponentIcon, SearchIcon } from 'lucide-react';
import { USE_CASE_REAL_ESTATE, UseCase } from './types';
import UseCasesCTA from './CTA';
import { useI18n } from '@/hooks/useI18n';

export default function RealEstate({ currentUseCase }: { currentUseCase: UseCase }) {
  const { t } = useI18n();
  
  return (
    <VStack
      w="full"
      gap={4}
      data-use-case={USE_CASE_REAL_ESTATE}
      display={currentUseCase === USE_CASE_REAL_ESTATE ? 'block' : 'none'}
    >
     <Heading
        as="h2"
        fontSize={{ base: '2xl', sm: '4xl', md: '4xl', lg: '4xl' }}
        lineHeight="1.1"
        aria-label={`Section heading about ${t('useCases.realEstate.sectionTitle')}`}
      >
        {t('useCases.realEstate.sectionTitle')}
      </Heading>
      <br />
      <Text fontSize={{ base: 'md', md: 'lg' }}>
        {t('useCases.realEstate.intro1')}
      </Text>
      <br />
      <Text fontSize={{ base: 'md', md: 'lg' }}>
        {t('useCases.realEstate.intro2')}
      </Text>
      <br />
      <Text fontWeight="bold" fontSize={{ base: 'lg', md: '2xl' }}>
        {t('useCases.realEstate.dataTypes')}
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
            {t('useCases.realEstate.proofOfReserve.title')}
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            {t('useCases.realEstate.proofOfReserve.description')}
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
            {t('useCases.realEstate.squareMeterPrice.title')}
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            {t('useCases.realEstate.squareMeterPrice.description')}
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
            {t('useCases.realEstate.economicIndices.title')}
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            {t('useCases.realEstate.economicIndices.description')}
          </Text>
        </VStack>
      </SimpleGrid>

      <br />

      <Text fontWeight="bold" fontSize={{ base: 'lg', md: '2xl' }}>
        {t('useCases.realEstate.reliableConnection')}
      </Text>
      <br />
      <SimpleGrid columns={{ base: 1, md: 3 }} w="full" gap={{ base: 4, md: 4 }}>
        <VStack gap={4} w="full" p={{ base: 4, md: 8 }} bg="whiteAlpha.50" borderRadius="lg">
          <Text color="brand.500" textAlign="left" w="full">
            <BadgeCheckIcon size={32} />
          </Text>
          <VStack gap={{ base: 1, md: 4 }} flex={1} align="flex-start">
            <Heading fontSize={{ base: 'lg', md: '2xl' }}>{t('features.proofOfAuthenticity.title')}</Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              {t('features.proofOfAuthenticity.subtitle')}
            </Text>
          </VStack>
        </VStack>

        <VStack gap={4} w="full" p={{ base: 4, md: 8 }} bg="whiteAlpha.50" borderRadius="lg">
          <Text color="brand.500" textAlign="left" w="full">
            <SearchIcon size={32} />
          </Text>
          <VStack gap={{ base: 1, md: 4 }} flex={1} align="flex-start">
            <Heading fontSize={{ base: 'lg', md: '2xl' }}>{t('features.confidenceIndex.title')}</Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              {t('features.confidenceIndex.subtitle')}
            </Text>
          </VStack>
        </VStack>

        <VStack gap={4} w="full" p={{ base: 4, md: 8 }} bg="whiteAlpha.50" borderRadius="lg">
          <Text color="brand.500" textAlign="left" w="full">
            <ComponentIcon size={32} />
          </Text>
          <VStack gap={{ base: 1, md: 4 }} flex={1} align="flex-start">
            <Heading fontSize={{ base: 'lg', md: '2xl' }}>{t('features.externalAuditors.title')}</Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              {t('features.externalAuditors.subtitle')}
            </Text>
          </VStack>
        </VStack>
      </SimpleGrid>

      <br />

      <Text fontSize={{ base: 'md', md: 'lg' }}>
        {t('useCases.realEstate.conclusion')}
      </Text>

      <br />

      <UseCasesCTA title={t('useCases.cta.realEstateTitle')} />
    </VStack>
  );
}
