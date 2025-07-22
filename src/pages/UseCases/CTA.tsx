import { Box, Button, Heading, Stack, Text, VStack, Link as ChakraLink } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useI18n } from '@/hooks/useI18n';

export default function UseCasesCTA({
  title,
  description,
}: {
  title: ReactNode;
  description?: ReactNode;
}) {
  const { t } = useI18n();
  const defaultDescription = description || t('useCases.cta.defaultDescription');

  return (
    <VStack
      mt={{ base: 4, md: 8 }}
      w="full"
      p={{ base: 8, sm: 24, md: 32 }}
      borderRadius="lg"
      gap={0}
      bgGradient="to-r"
      gradientFrom="whiteAlpha.50"
      gradientTo="bg"
      position="relative"
      boxShadow="2lg"
    >
      <Heading
        fontWeight="bold"
        fontSize={{ base: '3xl', sm: '6xl' }}
        textAlign={{ base: 'left', md: 'center' }}
        lineHeight="1.1"
        maxW={{ base: 'full', md: '3xl' }}
      >
        {title}
      </Heading>
      <br />
      <Text
        fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
        maxW={{ base: 'full', md: '3xl' }}
        textAlign={{ base: 'left', md: 'center' }}
      >
        {defaultDescription}
        <br />
        {t('useCases.cta.additionalInfo')}
      </Text>
      <Stack direction={{ base: 'column', sm: 'row' }} gap={4} mt={4} w="full" align="center" justify="center">
        <ChakraLink
          href="https://docs.fact.finance"
          target="_blank"
          rel="noopener noreferrer"
          w={{ base: 'full', sm: 'auto' }}
          _hover={{ textDecoration: 'none' }}
        >
                     <Button
             variant="solid"
             size="lg"
             w="full"
           >
            {t('useCases.cta.visitDocs')}
          </Button>
        </ChakraLink>
        <ChakraLink
          href="mailto:fernanda@fact.finance"
          target="_blank"
          rel="noopener noreferrer"
          w={{ base: 'full', sm: 'auto' }}
          _hover={{ textDecoration: 'none' }}
        >
          <Button
            variant="outline"
            size="lg"
            w="full"
          >
            {t('useCases.cta.contactUs')}
          </Button>
        </ChakraLink>
      </Stack>
      <Box
        position="absolute"
        top="75px"
        left="50%"
        transform="translate(-50%, -50%)"
        w="500px"
        h="150px"
        bg="radial-gradient(circle, {colors.brand.800} 0%, {colors.brand.900} 25%, transparent 100%)"
        filter="blur(60px)"
        zIndex={-1}
      />
    </VStack>
  );
}
