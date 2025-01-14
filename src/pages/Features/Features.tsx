import { TitleSection } from '@/components/ui/title-sectiont';
import { Box, Container, Heading, Text, VStack, SimpleGrid, List, Flex, Separator } from '@chakra-ui/react';
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
    <Box>
      <Container maxW="6xl" py={{ base: 16, md: 24 }}>
        <VStack gap={24} align="stretch">
          <TitleSection>
            <Text color="brand.300" fontWeight="600" letterSpacing={2}>
              FEATURES
            </Text>
            <Heading textStyle="title" mb={6}>
              Why choose Fact Finance
            </Heading>
            <Text fontSize="xl" maxW="3xl" mx="auto" textAlign="center" color="whiteAlpha.800" lineHeight="tall">
              Explore the key features that make us the trusted data layer for asset tokenization, empowering secure and
              efficient blockchain solutions
            </Text>
          </TitleSection>

          <VStack gap={24}>
            {/* Confidence Index */}
            <Box w="full">
              <Flex align="center" mb={10} gap={6}>
                <Box p={5} bg="brand.300" borderRadius="2xl">
                  <BarChart3Icon size={32} />
                </Box>
                <VStack align="start" gap={2}>
                  <Heading size="lg">Confidence Index</Heading>
                  <Text color="whiteAlpha.800" fontSize="lg">
                    At Fact Finance, we classify data into three categories to prevent market manipulation and ensure
                    data accuracy in web3 protocols.
                  </Text>
                </VStack>
              </Flex>

              <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} mb={12}>
                <Box
                  p={8}
                  bg="whiteAlpha.100"
                  borderRadius="2xl"
                  position="relative"
                  overflow="hidden"
                  _hover={{ transform: 'translateY(-4px)', bg: 'whiteAlpha.200' }}
                  transition="all 0.3s"
                >
                  <Box position="absolute" top={0} right={0} w="100%" h="4px" bg="green.400" opacity={0.5} />
                  <VStack gap={4}>
                    <Box color="green.400">
                      <CheckCircleIcon size={48} />
                    </Box>
                    <Heading size="md">Reliable</Heading>
                    <Text fontSize="md" textAlign="center" color="whiteAlpha.800">
                      Within 80% confidence margin
                    </Text>
                  </VStack>
                </Box>
                <Box
                  p={8}
                  bg="whiteAlpha.100"
                  borderRadius="2xl"
                  position="relative"
                  overflow="hidden"
                  _hover={{ transform: 'translateY(-4px)', bg: 'whiteAlpha.200' }}
                  transition="all 0.3s"
                >
                  <Box position="absolute" top={0} right={0} w="100%" h="4px" bg="yellow.400" opacity={0.5} />
                  <VStack gap={4}>
                    <Box color="yellow.400">
                      <AlertCircleIcon size={48} />
                    </Box>
                    <Heading size="md">Acceptable</Heading>
                    <Text fontSize="md" textAlign="center" color="whiteAlpha.800">
                      Within 99% confidence margin
                    </Text>
                  </VStack>
                </Box>
                <Box
                  p={8}
                  bg="whiteAlpha.100"
                  borderRadius="2xl"
                  position="relative"
                  overflow="hidden"
                  _hover={{ transform: 'translateY(-4px)', bg: 'whiteAlpha.200' }}
                  transition="all 0.3s"
                >
                  <Box position="absolute" top={0} right={0} w="100%" h="4px" bg="red.400" opacity={0.5} />
                  <VStack gap={4}>
                    <Box color="red.400">
                      <XCircleIcon size={48} />
                    </Box>
                    <Heading size="md">Outlier</Heading>
                    <Text fontSize="md" textAlign="center" color="whiteAlpha.800">
                      Outside confidence margins
                    </Text>
                  </VStack>
                </Box>
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
                <Box
                  p={8}
                  bg="whiteAlpha.100"
                  borderRadius="2xl"
                  _hover={{ transform: 'translateY(-4px)', bg: 'whiteAlpha.200' }}
                  transition="all 0.3s"
                >
                  <VStack align="start" gap={4}>
                    <Heading size="md" color="brand.300">
                      Tokenization & Stablecoins
                    </Heading>
                    <List.Root gap={3}>
                      <List.Item display="flex" alignItems="center">
                        <Box as="span" mr={2}>
                          •
                        </Box>
                        <Text>Withhold payments for outlier rate quotes</Text>
                      </List.Item>
                      <List.Item display="flex" alignItems="center">
                        <Box as="span" mr={2}>
                          •
                        </Box>
                        <Text>Limit transactions when confidence is low</Text>
                      </List.Item>
                    </List.Root>
                  </VStack>
                </Box>
                <Box
                  p={8}
                  bg="whiteAlpha.100"
                  borderRadius="2xl"
                  _hover={{ transform: 'translateY(-4px)', bg: 'whiteAlpha.200' }}
                  transition="all 0.3s"
                >
                  <VStack align="start" gap={4}>
                    <Heading size="md" color="brand.300">
                      DeFi & Markets
                    </Heading>
                    <List.Root gap={3}>
                      <List.Item display="flex" alignItems="center">
                        <Box as="span" mr={2}>
                          •
                        </Box>
                        <Text>Adjust lending rates for outlier assets</Text>
                      </List.Item>
                      <List.Item display="flex" alignItems="center">
                        <Box as="span" mr={2}>
                          •
                        </Box>
                        <Text>Validate data before accepting wagers</Text>
                      </List.Item>
                      <List.Item display="flex" alignItems="center">
                        <Box as="span" mr={2}>
                          •
                        </Box>
                        <Text>Adjust insurance premiums based on confidence</Text>
                      </List.Item>
                    </List.Root>
                  </VStack>
                </Box>
              </SimpleGrid>
            </Box>

            <Separator borderColor="whiteAlpha.200" />

            {/* External Auditor */}
            <Box w="full">
              <Flex align="center" mb={10} gap={6}>
                <Box p={5} bg="brand.300" borderRadius="2xl">
                  <ShieldCheckIcon size={32} />
                </Box>
                <VStack align="start" gap={2}>
                  <Heading size="lg">External Auditor</Heading>
                  <Text color="whiteAlpha.800" fontSize="lg">
                    Our external auditing feature ensures data integrity by allowing independent auditors to verify
                    accuracy, providing an added layer of security.
                  </Text>
                </VStack>
              </Flex>

              <SimpleGrid columns={{ base: 1, md: 4 }} gap={8}>
                {[
                  {
                    icon: <ShieldIcon size={32} />,
                    title: 'Validate',
                    description: 'Ensure data authenticity and compliance',
                  },
                  {
                    icon: <SearchIcon size={32} />,
                    title: 'Identify',
                    description: 'Flag anomalies for further review',
                  },
                  {
                    icon: <AwardIcon size={32} />,
                    title: 'Enhance',
                    description: 'Build trust and transparency',
                  },
                  {
                    icon: <FileTextIcon size={32} />,
                    title: 'Maintain',
                    description: 'Uphold rigorous standards',
                  },
                ].map((item, index) => (
                  <Box
                    key={index}
                    p={8}
                    bg="whiteAlpha.100"
                    borderRadius="2xl"
                    textAlign="center"
                    _hover={{ bg: 'whiteAlpha.200', transform: 'scale(1.05)' }}
                    transition="all 0.3s"
                  >
                    <Box color="brand.300" mb={6}>
                      {item.icon}
                    </Box>
                    <Heading size="md" mb={4}>
                      {item.title}
                    </Heading>
                    <Text fontSize="md" color="whiteAlpha.800">
                      {item.description}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>

            <Separator borderColor="whiteAlpha.200" />

            {/* Proof of Authenticity */}
            <Box w="full">
              <Flex align="center" mb={10} gap={6}>
                <Box p={5} bg="brand.300" borderRadius="2xl">
                  <FileCheckIcon size={32} />
                </Box>
                <VStack align="start" gap={2}>
                  <Heading size="lg">Proof of Authenticity</Heading>
                  <Text color="whiteAlpha.800" fontSize="lg">
                    We secure licensing agreements with trusted data providers and ensure their credibility through
                    rigorous audits and compliance checks.
                  </Text>
                </VStack>
              </Flex>

              <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
                <Box
                  p={8}
                  bg="whiteAlpha.100"
                  borderRadius="2xl"
                  position="relative"
                  _hover={{ bg: 'whiteAlpha.200', transform: 'translateY(-4px)' }}
                  transition="all 0.3s"
                >
                  <Box position="absolute" top={-4} right={6} bg="brand.300" px={4} py={2} borderRadius="xl">
                    <KeyIcon size={20} />
                  </Box>
                  <VStack align="start" gap={4}>
                    <Heading size="md">Licensing and Partnership</Heading>
                    <Text fontSize="md" color="whiteAlpha.800">
                      We establish agreements with renowned and reputable data providers
                    </Text>
                  </VStack>
                </Box>
                <Box
                  p={8}
                  bg="whiteAlpha.100"
                  borderRadius="2xl"
                  position="relative"
                  _hover={{ bg: 'whiteAlpha.200', transform: 'translateY(-4px)' }}
                  transition="all 0.3s"
                >
                  <Box position="absolute" top={-4} right={6} bg="brand.300" px={4} py={2} borderRadius="xl">
                    <UserCheckIcon size={20} />
                  </Box>
                  <VStack align="start" gap={4}>
                    <Heading size="md">KYP Process</Heading>
                    <Text fontSize="md" color="whiteAlpha.800">
                      Thorough audit and verification of providers before integration
                    </Text>
                  </VStack>
                </Box>
                <Box
                  p={8}
                  bg="whiteAlpha.100"
                  borderRadius="2xl"
                  position="relative"
                  _hover={{ bg: 'whiteAlpha.200', transform: 'translateY(-4px)' }}
                  transition="all 0.3s"
                >
                  <Box position="absolute" top={-4} right={6} bg="brand.300" px={4} py={2} borderRadius="xl">
                    <ShieldCheckIcon size={20} />
                  </Box>
                  <VStack align="start" gap={4}>
                    <Heading size="md">Cryptographic Validation</Heading>
                    <Text fontSize="md" color="whiteAlpha.800">
                      Unique cryptographic key generated for each data provider
                    </Text>
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
