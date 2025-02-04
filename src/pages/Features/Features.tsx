import { Box, Container, Heading, Text, VStack, SimpleGrid, Flex, HStack, Link, Stack, Center } from '@chakra-ui/react';
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

const benefits = [
  {
    icon: <WorkflowIcon />,
    title: 'Automation',
    description: 'Allows protocols to automate responses based on data classification.',
  },
  {
    icon: <CheckIcon />,
    title: 'Precision',
    description: 'Uses statistical analysis and LOF for accurate anomaly detection.',
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Risk management',
    description: 'Mitigates exposure to unreliable or manipulated data.',
  },
  {
    icon: <ScalingIcon />,
    title: 'Scalability',
    description: 'Easily integrates with various protocols, optimizing risk management.',
  },
];

export default function Features() {
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
            FEATURES
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight="bold"
            lineHeight="1.2"
            textAlign={{ base: 'left', md: 'center' }}
          >
            A new standard for on-chain data
          </Heading>

          {/* Subtitle */}
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="whiteAlpha.800"
            maxW="2xl"
            lineHeight="tall"
            textAlign={{ base: 'left', md: 'center' }}
          >
            Fact Finance provides secure and compliant data feeds, enabling precise and efficient asset tokenization on
            blockchain rails
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
          Proof of authenticity
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
              Verified partnerships
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              Commercial relationships with trusted data providers through licensing agreements with research
              institutes, government agencies, specialized data companies.
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
              Cryptographic security
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              Each provider receives a unique cryptographic key registered on-chain, acting as a tamper-proof signature
              for all submitted data.
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
              On-Chain validation
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              Each data point is signed with a unique cryptographic key. After that, Fact Finance verifies authenticity
              before publishing it on-chain.
            </Text>
          </VStack>
        </Stack>

        <Flex w="full" align={{ base: 'start', md: 'center' }}>
          <Button
            as={Link}
            variant="outline"
            href="https://docs.fact.finance/features/poa/"
            target="_blank"
            size="lg"
            mx="auto"
            w={{ base: 'full', md: 'auto' }}
          >
            View full documentation
          </Button>
        </Flex>

        {/* <Stack
          flexDir={{ base: 'column', md: 'row' }}
          w="full"
          justify="space-between"
          align="center"
          gap={{ base: 2, md: 32 }}
        >
          <Heading
            fontSize={{ base: 'xl', md: '4xl' }}
            fontWeight="bold"
            lineHeight="shorter"
            textAlign={{ base: 'left', md: 'center' }}
          >
            Why It Matters
          </Heading>
          <Flex flexWrap="wrap" gap={2} flex={1} align="end" justify="end">
            <Text
              fontSize="sm"
              fontWeight="bold"
              px={6}
              py={3}
              border="1px solid"
              borderColor="whiteAlpha.50"
              borderRadius="md"
              color="white"
            >
              Eliminate rogue/unverified data sources
            </Text>
            <Text
              fontSize="sm"
              fontWeight="bold"
              px={6}
              py={3}
              border="1px solid"
              borderColor="whiteAlpha.50"
              borderRadius="md"
              color="white"
            >
              Trace every data point to its origin
            </Text>
            <Text
              fontSize="sm"
              fontWeight="bold"
              px={6}
              py={3}
              bgGradient="to-br"
              border="1px solid"
              borderColor="whiteAlpha.50"
              borderRadius="md"
              color="white"
            >
              Build DApps with enterprise-grade reliability
            </Text>
          </Flex>
        </Stack> */}
      </Container>

      <Container maxW="8xl" my={{ base: 16, md: 32 }} zIndex={2}>
        <Heading
          fontSize={{ base: 'xl', md: '4xl' }}
          fontWeight="bold"
          lineHeight="shorter"
          w="full"
          textAlign={{ base: 'left', md: 'center' }}
        >
          Confidence Index
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
              Benefits
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
          <Button
            as={Link}
            variant="outline"
            href="https://docs.fact.finance/features/ci/"
            target="_blank"
            size="lg"
            mx="auto"
            w={{ base: 'full', md: 'auto' }}
          >
            View full documentation
          </Button>
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
          External auditors
          {/* <br />
          <Heading
            as="span"
            fontWeight="bold"
            fontSize={{ base: '3xl', md: '4xl' }}
            bgGradient="to-r"
            gradientFrom="brand.50"
            gradientTo="brand.400"
            bgClip="text"
          >
            Triple-Layer Data Integrity
          </Heading> */}
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
              Consensus checks
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              Multiple participants, such as clients or nodes, collaboratively verify data accuracy, ensuring
              reliability through decentralized validation.
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
              Audit firms
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              Independent audit firms assess data integrity, providing external oversight to enhance credibility and
              compliance.
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
              AI analysis
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              Machine learning and predictive models analyze data contextually, identifying anomalies and ensuring
              accuracy.
            </Text>
          </VStack>
        </Stack>

        <Flex w="full" align={{ base: 'start', md: 'center' }} mt={{ base: 4, md: 8 }}>
          <Button
            as={Link}
            variant="outline"
            href="https://docs.fact.finance/features/ea/"
            target="_blank"
            size="lg"
            mx="auto"
            w={{ base: 'full', md: 'auto' }}
          >
            View full documentation
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}

// <VStack
// w="220px"
// h="220px"
// zIndex={1}
// transform={`rotate(40deg) skew(-20deg, -10deg)`}
// border="2px solid"
// borderColor="white"
// transition="all 0.3s ease-in-out"
// bg="transparent"
// borderRadius="2xl"
// gap={8}
// className={`card-1`}
// align="center"
// backdropFilter="blur(2px)"
// justify="center"
// overflow="hidden"
// role="button"
// tabIndex={0}
// aria-controls={`card-info-1`}
// >
// <Box
//   position="absolute"
//   top="0%"
//   left="0%"
//   transform="translate(-50%, -50%)"
//   w="100%"
//   h="100%"
//   bg="radial-gradient(circle, {colors.brand.900} 0%, rgba(0,0,0,.5) 100%)"
//   filter="blur(30px)"
//   opacity={1}
//   zIndex={1}
// />
// <Box
//   position="absolute"
//   bottom="-50%"
//   left="0%"
//   transform="translate(-50%, -50%)"
//   w="100%"
//   h="100%"
//   bg={`radial-gradient(circle, {colors.brand.900} 0%, rgba(0,0,0,.5) 100%)`}
//   filter="blur(60px)"
//   opacity={0.25}
//   zIndex={1}
// />
// {/* <Text color={hoveredIndex === index ? 'white' : card.borderColor}></Text> */}
// </VStack>
