import { Box, Container, Heading, Text, VStack, SimpleGrid, Flex, HStack, Stack, Center, Link as ChakraLink } from '@chakra-ui/react';
import {
  ShieldCheckIcon,
  CheckIcon,
  BadgeCheckIcon,
  ReplaceAllIcon,
  WorkflowIcon,
  ScalingIcon,
  BrainCircuitIcon,
  ListCheckIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ConfidenceIndexChart from './ConfidenceIndexChart';
import { useI18n } from '@/hooks/useI18n';

export default function Features() {
  const { t } = useI18n();

  const benefits = [
    {
      icon: <WorkflowIcon />,
      title: t('features.page.confidenceIndex.automation.title'),
      description: t('features.page.confidenceIndex.automation.description'),
    },
    {
      icon: <CheckIcon />,
      title: t('features.page.confidenceIndex.precision.title'),
      description: t('features.page.confidenceIndex.precision.description'),
    },
    {
      icon: <ShieldCheckIcon />,
      title: t('features.page.confidenceIndex.riskManagement.title'),
      description: t('features.page.confidenceIndex.riskManagement.description'),
    },
    {
      icon: <ScalingIcon />,
      title: t('features.page.confidenceIndex.scalability.title'),
      description: t('features.page.confidenceIndex.scalability.description'),
    },
  ];

  return (
    <Box pos="relative">
      <Box
        position="absolute"
        top="0%"
        left="0%"
        transform="translate(-50%, -50%)"
        w="100vw"
        h="100vh"
        bg="radial-gradient(circle, {colors.brand.900} 0%, {colors.brand.900} 25%, rgba(0,0,0,.5) 100%)"
        filter="blur(200px)"
        zIndex={1}
      />

      <Container
        mt={{ base: '72px', md: '144px' }}
        maxW="8xl"
        // bg="gray.900"
        py={{ base: 4, md: 32 }}
        borderRadius="2xl"
        zIndex={2}
      >
        <VStack gap={2} align={{ base: 'start', md: 'center' }}>
          <Text color="brand.300" fontWeight="600" letterSpacing={2} textAlign={{ base: 'left', md: 'center' }}>
            {t('nav.features').toUpperCase()}
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight="bold"
            lineHeight="1.2"
            textAlign={{ base: 'left', md: 'center' }}
          >
            {t('features.page.title')}
          </Heading>

          {/* Subtitle */}
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="whiteAlpha.800"
            maxW="2xl"
            lineHeight="tall"
            textAlign={{ base: 'left', md: 'center' }}
          >
            {t('features.page.subtitle')}
          </Text>
        </VStack>
      </Container>

      <Box
        position="absolute"
        top="50%"
        left="100%"
        transform="translate(-50%, -50%)"
        w="100vw"
        h="100vh"
        bg="radial-gradient(circle, {colors.brand.500} 0%, {colors.brand.900} 25%, rgba(0,0,0,.5) 100%)"
        filter="blur(200px)"
        opacity={0.4}
        zIndex={1}
      />

      <Container maxW="8xl" my={{ base: 16, md: 16 }} zIndex={2}>
        <Heading
          fontSize={{ base: 'xl', md: '4xl' }}
          fontWeight="bold"
          lineHeight="shorter"
          w="full"
          textAlign={{ base: 'left', md: 'center' }}
        >
          {t('features.page.proofOfAuthenticity.title')}
        </Heading>

        <Stack
          flexDir={{ base: 'column', md: 'row' }}
          w="full"
          h="full"
          justify="stretch"
          align="stretch"
          gap={{ base: 2, md: 8 }}
          mt={{ base: 4, md: 16 }}
          mb={{ base: 4, md: 8 }}
        >
          <VStack
            flex={1}
            align="start"
            justify="start"
            borderRadius="xl"
            bgGradient="to-br"
            gradientFrom="gray.900"
            gradientTo="transparent"
            overflow="hidden"
            p={{ base: 6, md: 8 }}
            gap={0}
          >
            <BadgeCheckIcon size={48} strokeWidth={1.25} />
            <Heading fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" mt={{ base: 2, md: 4 }}>
              {t('features.page.proofOfAuthenticity.verifiedPartnerships.title')}
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              {t('features.page.proofOfAuthenticity.verifiedPartnerships.description')}
            </Text>
          </VStack>

          <VStack
            flex={1}
            align="start"
            justify="start"
            borderRadius="xl"
            bgGradient="to-br"
            gradientFrom="gray.900"
            gradientTo="transparent"
            overflow="hidden"
            p={{ base: 6, md: 8 }}
            gap={0}
          >
            <ShieldCheckIcon size={48} strokeWidth={1.25} />
            <Heading fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" mt={{ base: 2, md: 4 }}>
              {t('features.page.proofOfAuthenticity.cryptographicSecurity.title')}
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              {t('features.page.proofOfAuthenticity.cryptographicSecurity.description')}
            </Text>
          </VStack>

          <VStack
            flex={1}
            align="start"
            justify="start"
            borderRadius="xl"
            bgGradient="to-br"
            gradientFrom="gray.900"
            gradientTo="transparent"
            overflow="hidden"
            p={{ base: 6, md: 8 }}
            gap={0}
          >
            <ReplaceAllIcon size={48} strokeWidth={1.25} />
            <Heading fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" mt={{ base: 2, md: 4 }}>
              {t('features.page.proofOfAuthenticity.onChainValidation.title')}
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              {t('features.page.proofOfAuthenticity.onChainValidation.description')}
            </Text>
          </VStack>
        </Stack>

        <Flex w="full" align={{ base: 'start', md: 'center' }}>
          <ChakraLink
            href="https://docs.fact.finance/features/poa/"
            target="_blank"
            mx="auto"
            w={{ base: 'full', md: 'auto' }}
            _hover={{ textDecoration: 'none' }}
          >
            <Button
              variant="outline"
              size="lg"
              w="full"
            >
              {t('features.page.viewFullDocumentation')}
            </Button>
          </ChakraLink>
        </Flex>
      </Container>

      <Container maxW="8xl" my={{ base: 16, md: 32 }} zIndex={2}>
        <Heading
          fontSize={{ base: 'xl', md: '4xl' }}
          fontWeight="bold"
          lineHeight="shorter"
          w="full"
          textAlign={{ base: 'left', md: 'center' }}
        >
          {t('features.page.confidenceIndex.title')}
        </Heading>

        <Stack
          flexDir={{ base: 'column', md: 'row' }}
          w="full"
          h="full"
          justify="stretch"
          align="stretch"
          gap={{ base: 8, md: 16 }}
          mt={{ base: 4, md: 16 }}
          mb={{ base: 4, md: 8 }}
        >
          <VStack
            flex={1}
            align="center"
            justify="center"
            borderRadius="lg"
            overflow="hidden"
            bgGradient="to-br"
            gradientFrom="gray.900"
            gradientTo="transparent"
          >
            <ConfidenceIndexChart />
          </VStack>

          <VStack flex={1} gap={2} align="start" justify="center" textAlign="left">
            <Heading
              fontSize="md"
              textTransform="uppercase"
              letterSpacing={1}
              my={{ base: 2, md: 4 }}
              fontWeight="normal"
              color="whiteAlpha.400"
            >
              {t('features.page.confidenceIndex.benefits')}
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 8 }}>
              {benefits.map((item) => (
                <VStack
                  key={item.title}
                  align="start"
                  gap={0}
                  justify="start"
                  borderRadius="lg"
                  overflow="hidden"
                  p={{ base: 0 }}
                >
                  <HStack>
                    {item.icon}
                    <Heading fontSize="xl">{item.title}</Heading>
                  </HStack>
                  <Text fontSize="sm">{item.description}</Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Stack>

        <Flex w="full" align={{ base: 'start', md: 'center' }}>
          <ChakraLink
            href="https://docs.fact.finance/features/ci/"
            target="_blank"
            mx="auto"
            w={{ base: 'full', md: 'auto' }}
            _hover={{ textDecoration: 'none' }}
          >
            <Button
              variant="outline"
              size="lg"
              w="full"
            >
              {t('features.page.viewFullDocumentation')}
            </Button>
          </ChakraLink>
        </Flex>
      </Container>

      <Container maxW="8xl" my={{ base: 16, md: 32 }}>
        <Heading
          fontSize={{ base: 'xl', md: '4xl' }}
          fontWeight="bold"
          lineHeight="shorter"
          w="full"
          textAlign={{ base: 'left', md: 'center' }}
        >
          {t('features.page.externalAuditors.title')}
        </Heading>

        <Stack
          flexDir={{ base: 'column', md: 'row' }}
          w="full"
          h="full"
          justify="stretch"
          align="stretch"
          gap={{ base: 2, md: 8 }}
          mt={{ base: 4, md: 16 }}
          mb={{ base: 4, md: 8 }}
        >
          <VStack
            flex={1}
            align="start"
            justify="start"
            borderRadius="xl"
            bgGradient="to-br"
            gradientFrom="gray.900"
            gradientTo="transparent"
            overflow="hidden"
            p={{ base: 6, md: 8 }}
            gap={0}
          >
            <ListCheckIcon size={48} strokeWidth={1.25} />
            <Heading fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" mt={{ base: 2, md: 4 }}>
              {t('features.page.externalAuditors.consensusChecks.title')}
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              {t('features.page.externalAuditors.consensusChecks.description')}
            </Text>
          </VStack>

          <VStack
            flex={1}
            align="start"
            justify="start"
            borderRadius="xl"
            bgGradient="to-br"
            gradientFrom="gray.900"
            gradientTo="transparent"
            overflow="hidden"
            p={{ base: 6, md: 8 }}
            gap={0}
          >
            <ShieldCheckIcon size={48} strokeWidth={1.25} />
            <Heading fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" mt={{ base: 2, md: 4 }}>
              {t('features.page.externalAuditors.auditFirms.title')}
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              {t('features.page.externalAuditors.auditFirms.description')}
            </Text>
          </VStack>

          <VStack
            flex={1}
            align="start"
            justify="start"
            borderRadius="xl"
            bgGradient="to-br"
            gradientFrom="gray.900"
            gradientTo="transparent"
            overflow="hidden"
            p={{ base: 6, md: 8 }}
            gap={0}
          >
            <BrainCircuitIcon size={48} strokeWidth={1.25} />
            <Heading fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" mt={{ base: 2, md: 4 }}>
              {t('features.page.externalAuditors.aiAnalysis.title')}
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              {t('features.page.externalAuditors.aiAnalysis.description')}
            </Text>
          </VStack>
        </Stack>

        <Flex w="full" align={{ base: 'start', md: 'center' }} mt={{ base: 4, md: 8 }}>
          <ChakraLink
            href="https://docs.fact.finance/features/ea/"
            target="_blank"
            mx="auto"
            w={{ base: 'full', md: 'auto' }}
            _hover={{ textDecoration: 'none' }}
          >
            <Button
              variant="outline"
              size="lg"
              w="full"
            >
              {t('features.page.viewFullDocumentation')}
            </Button>
          </ChakraLink>
        </Flex>
      </Container>
    </Box>
  );
}
