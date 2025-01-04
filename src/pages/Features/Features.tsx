import { TitleSection } from '@/components/ui/title-sectiont';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  HStack,
  Badge,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import {
  BarChart3Icon,
  ShieldCheckIcon,
  FileCheckIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  XCircleIcon,
  KeyIcon,
  ShieldIcon,
  FileTextIcon,
  UserCheckIcon,
  SearchIcon,
  AwardIcon,
} from 'lucide-react';

export default function Features() {
  return (
    <Box as="main">
      <Container maxW="6xl" py={{ base: 12, md: 20 }}>
        <VStack gap={20} align="stretch">
          <TitleSection>
            <Text fontSize="sm" color="brand.300" textTransform="uppercase" fontWeight="bold">
              Features
            </Text>
            <Heading textStyle="title">Why choose Fact Finance</Heading>
            <Text fontSize="xl" maxW="3xl" mx="auto" textAlign="center" color="whiteAlpha.800">
              Explore the key features that make us the trusted data layer for asset tokenization, empowering secure and
              efficient blockchain solutions
            </Text>
          </TitleSection>

          <VStack gap={16}>
            {/* Confidence Index */}
            <Box w="full">
              <HStack mb={8} gap={4}>
                <Box p={4} bg="brand.300" borderRadius="xl">
                  <BarChart3Icon size={24} />
                </Box>
                <Heading size="lg">Confidence Index</Heading>
              </HStack>

              <Text color="whiteAlpha.800" fontSize="lg" mb={8}>
                At Fact Finance, we classify data into three categories to prevent market manipulation and ensure data
                accuracy in web3 protocols.
              </Text>

              <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} mb={8}>
                <Box p={6} bg="whiteAlpha.50" borderRadius="xl" position="relative" overflow="hidden">
                  <Box position="absolute" top={0} right={0} w="100%" h="4px" bg="green.400" opacity={0.3} />
                  <VStack>
                    <Box color="green.400">
                      <CheckCircleIcon size={40} />
                    </Box>
                    <Text fontWeight="bold">Reliable</Text>
                    <Text fontSize="sm" textAlign="center">
                      Within 80% confidence margin
                    </Text>
                  </VStack>
                </Box>
                <Box p={6} bg="whiteAlpha.50" borderRadius="xl" position="relative" overflow="hidden">
                  <Box position="absolute" top={0} right={0} w="100%" h="4px" bg="yellow.400" opacity={0.3} />
                  <VStack>
                    <Box color="yellow.400">
                      <AlertCircleIcon size={40} />
                    </Box>
                    <Text fontWeight="bold">Acceptable</Text>
                    <Text fontSize="sm" textAlign="center">
                      Within 99% confidence margin
                    </Text>
                  </VStack>
                </Box>
                <Box p={6} bg="whiteAlpha.50" borderRadius="xl" position="relative" overflow="hidden">
                  <Box position="absolute" top={0} right={0} w="100%" h="4px" bg="red.400" opacity={0.3} />
                  <VStack>
                    <Box color="red.400">
                      <XCircleIcon size={40} />
                    </Box>
                    <Text fontWeight="bold">Outlier</Text>
                    <Text fontSize="sm" textAlign="center">
                      Outside confidence margins
                    </Text>
                  </VStack>
                </Box>
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
                <Box
                  p={6}
                  bg="whiteAlpha.50"
                  borderRadius="xl"
                  _hover={{ transform: 'translateY(-4px)', transition: 'transform 0.2s' }}
                >
                  <VStack align="start" gap={2}>
                    <Text fontWeight="bold" mb={2}>
                      Tokenization & Stablecoins
                    </Text>
                    <Text fontSize="sm">• Withhold payments for outlier rate quotes</Text>
                    <Text fontSize="sm">• Limit transactions when confidence is low</Text>
                  </VStack>
                </Box>
                <Box
                  p={6}
                  bg="whiteAlpha.50"
                  borderRadius="xl"
                  _hover={{ transform: 'translateY(-4px)', transition: 'transform 0.2s' }}
                >
                  <VStack align="start" gap={2}>
                    <Text fontWeight="bold" mb={2}>
                      DeFi & Markets
                    </Text>
                    <Text fontSize="sm">• Adjust lending rates for outlier assets</Text>
                    <Text fontSize="sm">• Validate data before accepting wagers</Text>
                    <Text fontSize="sm">• Adjust insurance premiums based on confidence</Text>
                  </VStack>
                </Box>
              </SimpleGrid>
            </Box>

            {/* External Auditor */}
            <Box w="full">
              <HStack mb={8} gap={4}>
                <Box p={4} bg="brand.300" borderRadius="xl">
                  <ShieldCheckIcon size={24} />
                </Box>
                <Heading size="lg">External Auditor</Heading>
              </HStack>

              <Text color="whiteAlpha.800" fontSize="lg" mb={8}>
                Our external auditing feature ensures data integrity by allowing independent auditors to verify
                accuracy, providing an added layer of security.
              </Text>

              <SimpleGrid columns={{ base: 1, md: 4 }} gap={8}>
                <Box
                  p={6}
                  bg="whiteAlpha.50"
                  borderRadius="xl"
                  textAlign="center"
                  _hover={{ bg: 'whiteAlpha.100', transform: 'scale(1.05)', transition: 'all 0.2s' }}
                >
                  <Box color="brand.300" mb={4}>
                    <ShieldIcon size={32} />
                  </Box>
                  <Text fontWeight="bold" mb={2}>
                    Validate
                  </Text>
                  <Text fontSize="sm">Ensure data authenticity and compliance</Text>
                </Box>
                <Box
                  p={6}
                  bg="whiteAlpha.50"
                  borderRadius="xl"
                  textAlign="center"
                  _hover={{ bg: 'whiteAlpha.100', transform: 'scale(1.05)', transition: 'all 0.2s' }}
                >
                  <Box color="brand.300" mb={4}>
                    <SearchIcon size={32} />
                  </Box>
                  <Text fontWeight="bold" mb={2}>
                    Identify
                  </Text>
                  <Text fontSize="sm">Flag anomalies for further review</Text>
                </Box>
                <Box
                  p={6}
                  bg="whiteAlpha.50"
                  borderRadius="xl"
                  textAlign="center"
                  _hover={{ bg: 'whiteAlpha.100', transform: 'scale(1.05)', transition: 'all 0.2s' }}
                >
                  <Box color="brand.300" mb={4}>
                    <AwardIcon size={32} />
                  </Box>
                  <Text fontWeight="bold" mb={2}>
                    Enhance
                  </Text>
                  <Text fontSize="sm">Build trust and transparency</Text>
                </Box>
                <Box
                  p={6}
                  bg="whiteAlpha.50"
                  borderRadius="xl"
                  textAlign="center"
                  _hover={{ bg: 'whiteAlpha.100', transform: 'scale(1.05)', transition: 'all 0.2s' }}
                >
                  <Box color="brand.300" mb={4}>
                    <FileTextIcon size={32} />
                  </Box>
                  <Text fontWeight="bold" mb={2}>
                    Maintain
                  </Text>
                  <Text fontSize="sm">Uphold rigorous standards</Text>
                </Box>
              </SimpleGrid>
            </Box>

            {/* Proof of Authenticity */}
            <Box w="full">
              <HStack mb={8} gap={4}>
                <Box p={4} bg="brand.300" borderRadius="xl">
                  <FileCheckIcon size={24} />
                </Box>
                <Heading size="lg">Proof of Authenticity</Heading>
              </HStack>

              <Text color="whiteAlpha.800" fontSize="lg" mb={8}>
                We secure licensing agreements with trusted data providers and ensure their credibility through rigorous
                audits and compliance checks.
              </Text>

              <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
                <Box p={6} bg="whiteAlpha.50" borderRadius="xl" position="relative" _hover={{ bg: 'whiteAlpha.100' }}>
                  <Box position="absolute" top={-3} right={4} bg="brand.300" px={3} py={1} borderRadius="full">
                    <KeyIcon size={16} />
                  </Box>
                  <VStack align="start" gap={2}>
                    <Text fontWeight="bold">Licensing and Partnership</Text>
                    <Text fontSize="sm">We establish agreements with renowned and reputable data providers</Text>
                  </VStack>
                </Box>
                <Box p={6} bg="whiteAlpha.50" borderRadius="xl" position="relative" _hover={{ bg: 'whiteAlpha.100' }}>
                  <Box position="absolute" top={-3} right={4} bg="brand.300" px={3} py={1} borderRadius="full">
                    <UserCheckIcon size={16} />
                  </Box>
                  <VStack align="start" gap={2}>
                    <Text fontWeight="bold">KYP Process</Text>
                    <Text fontSize="sm">Thorough audit and verification of providers before integration</Text>
                  </VStack>
                </Box>
                <Box p={6} bg="whiteAlpha.50" borderRadius="xl" position="relative" _hover={{ bg: 'whiteAlpha.100' }}>
                  <Box position="absolute" top={-3} right={4} bg="brand.300" px={3} py={1} borderRadius="full">
                    <ShieldCheckIcon size={16} />
                  </Box>
                  <VStack align="start" gap={2}>
                    <Text fontWeight="bold">Cryptographic Validation</Text>
                    <Text fontSize="sm">Unique cryptographic key generated for each data provider</Text>
                  </VStack>
                </Box>
              </SimpleGrid>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
