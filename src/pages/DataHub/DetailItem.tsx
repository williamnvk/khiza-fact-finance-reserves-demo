import { Box, Text, Flex, HStack, Button, IconButton, Heading, VStack, Link as ChakraLink, SimpleGrid } from '@chakra-ui/react';
import { DataHub } from '@/data/data-hub';
import { useState } from 'react';
import { ArrowRightIcon, CopyCheckIcon, CopyIcon } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

export const DetailItem = ({ detailItem, onClose }: { detailItem: DataHub; onClose: () => void }) => {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  const onCopyCode = () => {
    setCopied(true);
    navigator.clipboard.writeText(detailItem.Code);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return !detailItem ? (
    <></>
  ) : (
    <Box p={{ base: 4, md: 4 }}>
      <HStack w="full" align="start">
        <Heading as="h1" fontSize="5xl" fontWeight="bold" flex={1}>
          {detailItem.Name}
        </Heading>
      </HStack>

      <Text fontSize="lg" lineHeight="tall" my={4}>
        {detailItem.Description}
      </Text>

      <SimpleGrid columns={2} gap={8} w="full">
        <VStack gap={0} align="start" justify="space-between">
          <Text fontSize="10px" letterSpacing="2px" color="gray.400">
            {t('dataHub.detail.source')}
          </Text>
          <Text>{detailItem.Source}</Text>
        </VStack>

        <VStack gap={0} align="start">
          <Text fontSize="10px" letterSpacing="2px" color="gray.400">
            {t('dataHub.detail.country')}
          </Text>
          <Text>{detailItem.Country}</Text>
        </VStack>

        <VStack gap={0} align="start">
          <Text fontSize="10px" letterSpacing="2px" color="gray.400">
            {t('dataHub.detail.updateFrequency')}
          </Text>
          <Text>{detailItem.Frequency}</Text>
        </VStack>

        <VStack gap={0} align="start">
          <Text fontSize="10px" letterSpacing="2px" color="gray.400">
            {t('dataHub.detail.interfaces')}
          </Text>
          <Flex gap={2} flexWrap="wrap">
            {detailItem.Interfaces.map((int) => (
              <Text key={int} fontSize="md">
                {int}
              </Text>
            ))}
          </Flex>
        </VStack>
      </SimpleGrid>

      <HStack
        mt={{ base: 2, md: 4, lg: 8 }}
        align="center"
        justify="center"
        gap={4}
        px={4}
        py={2}
        border="1px solid"
        bg="blackAlpha.500"
        borderRadius="md"
        borderColor="border"
      >
        <VStack gap={0} w="full" align="start">
          <Text fontSize="8px" letterSpacing="2px" color="gray.400">
            {t('dataHub.detail.code')}
          </Text>
          <Text fontSize="xl">{detailItem.Code}</Text>
        </VStack>
        <IconButton onClick={onCopyCode} variant="ghost" size="sm">
          {copied ? <CopyCheckIcon /> : <CopyIcon />}
        </IconButton>
      </HStack>

      <HStack w="full" justify="start" mt={8}>
        <ChakraLink 
          href="https://docs.fact.finance/" 
          target="_blank"
          _hover={{ textDecoration: 'none' }}
        >
          <Button variant="solid">
            {t('dataHub.detail.howToIntegrate')}
            <ArrowRightIcon />
          </Button>
        </ChakraLink>
        <Button onClick={onClose} variant="ghost">
          {t('dataHub.detail.close')}
        </Button>
      </HStack>
    </Box>
  );
};
