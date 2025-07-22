import { Container, VStack, Heading, Text, Stack, Button, Link as ChakraLink, HStack } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { ArrowUpRight, Shield } from 'lucide-react';
import { Users } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

export const CTA = () => {
  const { t } = useI18n();

  return (
    <Container maxW="5xl" position="relative" zIndex={1} py={{ base: 16, md: 32 }}>
      <VStack gap={10} textAlign="center">
        <Box p={4} bg="whiteAlpha.200" rounded="full">
          <Shield size={48} />
        </Box>
        <Heading size="3xl" fontWeight="800">
          {t('reserves.cta.heading')}
        </Heading>
        <Text fontSize="xl" color="whiteAlpha.900" maxW="700px" lineHeight="1.6">
          {t('reserves.cta.subtitle')}
        </Text>

        <Stack direction={{ base: 'column', md: 'row' }} gap={4} w="full" justify="center" maxW="md">
          <ChakraLink
            href="https://cal.com/luciano-juvinski-fact-finance/30min"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ textDecoration: 'none' }}
          >
            <Button
              size="lg"
              colorPalette="brand"
              w="full"
            >
              <HStack gap={2}>
                <Users size={20} />
                <Text>{t('reserves.cta.consultationButton')}</Text>
              </HStack>
            </Button>
          </ChakraLink>
          <ChakraLink
            href="https://docs.fact.finance/"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ textDecoration: 'none' }}
          >
            <Button
              variant="outline"
              size="lg"
              w="full"
            >
              <HStack gap={2}>
                <Text>{t('reserves.cta.learnMoreButton')}</Text>
                <ArrowUpRight size={20} />
              </HStack>
            </Button>
          </ChakraLink>
        </Stack>
      </VStack>
    </Container>
  );
};
