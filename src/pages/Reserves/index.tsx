import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Grid,
  VStack,
  HStack,
  Image,
  Spinner,
  Center,
  Card,
  Stat,
  Tag,
} from '@chakra-ui/react';
import { Link } from 'react-router';
import { ArrowRight, Shield, CheckCircle, BarChart3, Database, CheckCircle2 } from 'lucide-react';
import { formatLargeNumber } from '@/lib/utils';
import { CTA } from './_components/cta';
import { HomeHero } from './_components/home_hero';
import { FAQSection } from './_components/faq-section';
import AveniaLogo from '@/components/Icons/Avenia';

// Define types for better TypeScript support
interface HistoricalData {
  date: string;
  reserves: number;
  circulation: number;
}

interface Client {
  companyName: string;
  type: string;
  logo: string;
  heartbeat: string;
  historicalData: HistoricalData[];
}

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [clients, setClients] = useState<Client[]>([]);

  const loadData = async () => {
    const list = ['tokeniza', 'scenium', 'avenia'];

    const fetchedClients: Client[] = [];
    for (const item of list) {
      const response = await fetch(`/data/${item}.json`);
      const data = await response.json();
      const responseChart = await fetch(`/data/${item}-chart.json`);
      const dataChart = await responseChart.json();
      data.historicalData = dataChart.historical;
      fetchedClients.push(data);
    }
    setClients(fetchedClients);
    setLoaded(true);
  };

  useEffect(() => {
    loadData();
    document.title = 'Fact Finance - Transparency and Trust for the Web3 Ecosystem';
  }, []);

  if (!loaded) {
    return (
      <Center>
        <VStack gap={6}>
          <Box position="relative">
            <Spinner size="xl" color="brand.500" />
            <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
              <Shield size={24} color="#3182CE" />
            </Box>
          </Box>
          <VStack gap={2}>
            <Text fontSize="lg" fontWeight="semibold" color="gray.700">
              Loading Data...
            </Text>
            <Text color="gray.500" fontSize="sm">
              Verifying proof of reserves...
            </Text>
          </VStack>
        </VStack>
      </Center>
    );
  }

  const totalReserves = clients.reduce(
    (acc, client) => acc + (client.historicalData[client.historicalData.length - 1]?.reserves || 0),
    0,
  );

  return (
    <>
      <Box
        position="absolute"
        top="0%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="500px"
        h="500px"
        bg="radial-gradient(circle, {colors.brand.800} 0%, {colors.brand.900} 25%, transparent 100%)"
        filter="blur(120px)"
        opacity={0.5}
        zIndex={-1}
      />

      <HomeHero totalReserves={totalReserves} clients={clients} />

      <Container maxW="7xl" pt={{ base: 4, md: 8 }} pb={{ base: 16, md: 32 }}>
        <VStack gap={{ base: 6, md: 12 }} w="full">
          <VStack gap={6} textAlign="center">
            <Text color="brand.300" fontWeight="600" letterSpacing={2} textAlign={{ base: 'left', md: 'center' }}>
              OUR CLIENTS
            </Text>
            <Heading
              fontSize={{ base: '4xl', md: '5xl' }}
              textAlign="center"
              fontWeight="light"
              maxW="4xl"
              lineHeight="1.2"
            >
              Independent and continuous verification for{` `}
              <Text
                as="span"
                fontWeight="bold"
                bgImage="linear-gradient(35deg, {colors.brand.500}, {colors.brand.400})"
                bgClip="text"
              >
                tokenization
              </Text>
              {` `}platforms
            </Heading>
          </VStack>

          <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={4} w="full">
            {clients.map((client, index) => {
              const latestData = client.historicalData[client.historicalData.length - 1];
              const reserveRatio = ((latestData.reserves / latestData.circulation) * 100).toFixed(1);
              const isOverCollateralized = (latestData.reserves / latestData.circulation) * 100 > 100;
              // const previousData = client.historicalData[client.historicalData.length - 2];
              // const growth = previousData
              //   ? parseFloat((((latestData.reserves - previousData.reserves) / previousData.reserves) * 100).toFixed(1))
              //   : 0;

              return (
                <Card.Root
                  key={index}
                  overflow="hidden"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  _hover={{
                    transform: 'translateY(-4px)',
                    borderColor: 'whiteAlpha.300',
                  }}
                  transition="all 0.3s"
                  bg="linear-gradient(35deg, rgba(0,0,0,0.2), rgba(0,0,0,0))"
                  position="relative"
                  _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '1px',
                    bg: 'linear-gradient(90deg, transparent, {colors.brand.400}, transparent)',
                  }}
                >
                  <Card.Header>
                    <Flex justify="space-between" align="flex-start">
                      {client.logo === 'avenia' && <AveniaLogo width={100} height={80} />}
                      {client.logo === 'tokeniza' && <Image src="/assets/logos/tbrl.png" alt="Scenium" maxH="80px" />}
                      {client.logo === 'scenium' && <Image src="/assets/logos/scenium.png" alt="Scenium" />}

                      <Tag.Root
                        bg="success.200"
                        color="success.800"
                        variant="subtle"
                        rounded="full"
                        px={2.5}
                        position="absolute"
                        top={{ base: 4, md: 12 }}
                        right={4}
                      >
                        <Tag.Label fontSize="sm">Verified</Tag.Label>
                        <Tag.EndElement>
                          <CheckCircle size={12} style={{ marginRight: '4px' }} />
                        </Tag.EndElement>
                      </Tag.Root>
                    </Flex>
                  </Card.Header>

                  <Card.Body>
                    <VStack gap={{ base: 4, md: 6 }} align="stretch">
                      {/* Key Metrics */}
                      <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={4}>
                        <Box>
                          <Stat.Root>
                            <Stat.Label color="fg.muted" fontSize="md">
                              Total reserves
                            </Stat.Label>
                            <Stat.ValueText fontSize="3xl" fontWeight="bold" color="success.600">
                              ${formatLargeNumber(latestData.reserves)}
                            </Stat.ValueText>
                          </Stat.Root>
                        </Box>

                        <Box>
                          <Stat.Root>
                            <Stat.Label color="fg.muted" fontSize="md">
                              Token supply
                            </Stat.Label>
                            <Stat.ValueText fontSize="3xl" fontWeight="bold" color="blue.500">
                              ${formatLargeNumber(latestData.circulation)}
                            </Stat.ValueText>
                          </Stat.Root>
                        </Box>

                        <Box>
                          <Stat.Root>
                            <Stat.Label color="fg.muted" fontSize="md">
                              Collateral ratio
                            </Stat.Label>
                            <Stat.ValueText
                              color={isOverCollateralized ? 'success.500' : 'warning.500'}
                              fontSize="3xl"
                              fontWeight="bold"
                            >
                              {reserveRatio}%
                            </Stat.ValueText>
                          </Stat.Root>
                        </Box>
                      </Grid>

                      {/* <Box
                        p={4}
                        bg="linear-gradient(35deg, {colors.brand.900}, {colors.brand.900})"
                        rounded="xl"
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                      >
                        <HStack justify="space-between" mb={3}>
                          <HStack gap={2}>
                            <Box w={2} h={2} bg="success.500" rounded="full" />
                            <Text fontSize="sm" color="fg.muted" fontWeight="semibold">
                              Reserve health status
                            </Text>
                          </HStack>
                          <Badge colorPalette="success" size="sm" variant="solid" px={3}>
                            Excellent
                          </Badge>
                        </HStack>
                        <Box w="full" bg="gray.300" rounded="full" h="3" overflow="hidden">
                          <Box
                            bgImage="linear-gradient(35deg, {colors.success.400}, {colors.success.500})"
                            h="3"
                            rounded="full"
                            w={`${reserveRatio}%`}
                            transition="width 0.6s ease-out"
                            position="relative"
                            _after={{
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              bg: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                              animation: 'shimmer 2s infinite',
                            }}
                          />
                        </Box>
                        <Text fontSize="xs" color="fg.muted" mt={2} textAlign="center">
                          {reserveRatio}% of assets are fully backed by reserves
                        </Text>
                      </Box> */}

                      {/* Audit Details */}
                      <VStack gap={3} align="stretch">
                        <HStack justify="space-between" fontSize="md">
                          <Text color="fg.muted">Last Update:</Text>
                          <HStack>
                            <Text fontWeight="medium" color="fg.muted">
                              {latestData.date}
                            </Text>
                            <CheckCircle2 size={14} color="#10B981" />
                          </HStack>
                        </HStack>
                        <HStack justify="space-between" fontSize="md">
                          <Text color="fg.muted">Frequency:</Text>
                          <Text fontWeight="medium" color="fg.muted">
                            {client.heartbeat}
                          </Text>
                        </HStack>
                        <HStack justify="space-between" fontSize="md">
                          <Text color="fg.muted">Status:</Text>
                          <HStack
                            bg={isOverCollateralized ? 'success.500' : 'warning.500/60'}
                            rounded="full"
                            px={2}
                            py={1}
                          >
                            <CheckCircle size={10} style={{ marginRight: '4px' }} />
                            <Text color={isOverCollateralized ? 'success.50' : 'warning.50'} fontSize="xs">
                              {isOverCollateralized ? 'Over-collateralized' : 'Under-collateralized'}
                            </Text>
                          </HStack>
                        </HStack>
                      </VStack>
                    </VStack>
                  </Card.Body>

                  <Card.Footer w="full">
                    <Link to={client.companyName.toLowerCase()} style={{ width: '100%' }}>
                      <Button
                        variant="ghost"
                        color="brand.50"
                        size="lg"
                        w="full"
                        colorPalette="brand"
                        _hover={{ bg: 'brand.500' }}
                      >
                        View complete report
                        <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                      </Button>
                    </Link>
                  </Card.Footer>
                </Card.Root>
              );
            })}
          </Grid>
        </VStack>
      </Container>
      {/* <WhyChooseUseSection /> */}

      {/* <Container maxW="7xl" py={24}>
        <VStack gap={16}>
          <VStack gap={6} textAlign="center">
            <Badge size="lg" colorPalette="purple" px={4} py={2} rounded="full">
              <Layers size={16} style={{ marginRight: '8px' }} />
              Continuous and auditable validation
            </Badge>
            <Heading fontSize="4xl" color="white" maxW="3xl">
              How we{' '}
              <Text as="span" bgImage="linear-gradient(35deg, {colors.brand.500}, {colors.brand.400})" bgClip="text">
                audit
              </Text>{' '}
              your reserves
            </Heading>
            <Text fontSize="lg" maxW="xl" textAlign="center">
              Rigorous and automated process that ensures maximum reliability and transparency of data.
            </Text>
          </VStack>

          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={8}>
            <VStack gap={4} bg="whiteAlpha.50" p={8} rounded="lg" border="1px solid" borderColor="whiteAlpha.200">
              <Box p={4} bg="brand.100" rounded="full">
                <Icon as={Globe} boxSize={12} color="brand.500" />
              </Box>
              <Heading size="md">Direct connection</Heading>
              <Text fontSize="sm" lineHeight="1.6">
                Direct integration with custodians, financial institutions and independent audit systems
              </Text>
            </VStack>

            <VStack gap={4} bg="whiteAlpha.50" p={8} rounded="lg" border="1px solid" borderColor="whiteAlpha.200">
              <Box p={4} bg="success.100" rounded="full">
                <Icon as={Clock} boxSize={12} color="success.500" />
              </Box>
              <Heading size="md">24/7 monitoring</Heading>
              <Text fontSize="sm" lineHeight="1.6">
                Continuous and automatic verification, with updated data synchronized with on-chain operations
              </Text>
            </VStack>

            <VStack gap={4} bg="whiteAlpha.50" p={8} rounded="lg" border="1px solid" borderColor="whiteAlpha.200">
              <Box p={4} bg="brand.100" rounded="full">
                <Icon as={BarChart3} boxSize={12} color="brand.500" />
              </Box>
              <Heading size="md">Advanced analysis</Heading>
              <Text fontSize="sm" lineHeight="1.6">
                Proprietary algorithms detect discrepancies and generate automatic alerts for maximum security
              </Text>
            </VStack>

            <VStack gap={4} bg="whiteAlpha.50" p={8} rounded="lg" border="1px solid" borderColor="whiteAlpha.200">
              <Box p={4} bg="orange.100" rounded="full">
                <Icon as={FileCheck} boxSize={12} color="orange.500" />
              </Box>
              <Heading size="md">Public reports</Heading>
              <Text fontSize="sm" lineHeight="1.6">
                Transparent dashboards and auditable reports, publicly available for maximum transparency
              </Text>
            </VStack>
          </Grid>
        </VStack>
      </Container> */}

      {/* <TestimonialsSection /> */}

      <FAQSection />

      <CTA />
    </>
  );
};

export default Home;
