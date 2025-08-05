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
import { ArrowRight, Shield, CheckCircle, CheckCircle2 } from 'lucide-react';
import { formatLargeNumber } from '@/lib/utils';
import { CTA } from './_components/cta';
import { HomeHero } from './_components/home_hero';
import { FAQSection } from './_components/faq-section';
import AveniaLogo from '@/components/Icons/Avenia';
import { useI18n } from '@/hooks/useI18n';

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
  const { t } = useI18n();
  const [loaded, setLoaded] = useState(false);
  const [clients, setClients] = useState<Client[]>([]);

  const loadData = async () => {
    const list = ['tokeniza', 'scenium'];

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
    document.title = t('reserves.title');
  }, [t]);

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
              {t('reserves.loading.title')}
            </Text>
            <Text color="gray.500" fontSize="sm">
              {t('reserves.loading.subtitle')}
            </Text>
          </VStack>
        </VStack>
      </Center>
    );
  }

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

      <HomeHero />

      <Container maxW="7xl" pt={{ base: 4, md: 8 }} pb={{ base: 16, md: 32 }}>
        <VStack gap={{ base: 6, md: 12 }} w="full">
          <VStack gap={6} textAlign="center">
            <Text color="brand.300" fontWeight="600" letterSpacing={2} textAlign={{ base: 'left', md: 'center' }}>
              {t('reserves.clientsSection.title')}
            </Text>
            <Heading
              fontSize={{ base: '4xl', md: '5xl' }}
              textAlign="center"
              fontWeight="light"
              maxW="4xl"
              lineHeight="1.2"
            >
              {t('reserves.clientsSection.heading')}
              {` `}
              <Text
                as="span"
                fontWeight="bold"
                bgImage="linear-gradient(35deg, {colors.brand.500}, {colors.brand.400})"
                bgClip="text"
              >
                {t('reserves.clientsSection.headingHighlight')}
              </Text>
              {` `}
              {t('reserves.clientsSection.headingSubtext')}
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
                      {client.logo === 'crown' && <Image src="/assets/logos/crown.png" alt="Crown" h="80px" />}
                      {client.logo === 'tokeniza' && <Image src="/assets/logos/tbrl.png" alt="TBRL" h="80px" />}
                      {client.logo === 'scenium' && (
                        <Box h="80px">
                          <Image src="/assets/logos/scenium.png" alt="Scenium" h="60px" />
                        </Box>
                      )}

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
                        <Tag.Label fontSize="sm">{t('reserves.clientsSection.verified')}</Tag.Label>
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
                            <Stat.Label color="fg.muted" fontSize="xs">
                              {t('reserves.clients.cards.totalReserves')}
                            </Stat.Label>
                            <Stat.ValueText fontSize="3xl" fontWeight="bold" color="success.600">
                              ${formatLargeNumber(latestData.reserves)}
                            </Stat.ValueText>
                          </Stat.Root>
                        </Box>

                        <Box>
                          <Stat.Root>
                            <Stat.Label color="fg.muted" fontSize="xs">
                              {t('reserves.clients.cards.tokenSupply')}
                            </Stat.Label>
                            <Stat.ValueText fontSize="3xl" fontWeight="bold" color="blue.500">
                              ${formatLargeNumber(latestData.circulation)}
                            </Stat.ValueText>
                          </Stat.Root>
                        </Box>

                        <Box>
                          <Stat.Root>
                            <Stat.Label color="fg.muted" fontSize="xs">
                              {t('reserves.clients.cards.collateralRatio')}
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
                      {/* Audit Details */}
                      <VStack gap={3} align="stretch">
                        <HStack justify="space-between" fontSize="md">
                          <Text color="fg.muted">{t('reserves.clients.cards.lastUpdate')}</Text>
                          <HStack>
                            <Text fontWeight="medium" color="fg.muted">
                              {latestData.date}
                            </Text>
                            <CheckCircle2 size={14} color="#10B981" />
                          </HStack>
                        </HStack>
                        <HStack justify="space-between" fontSize="md">
                          <Text color="fg.muted">{t('reserves.clients.cards.frequency')}</Text>
                          <Text fontWeight="medium" color="fg.muted">
                            {client.heartbeat}
                          </Text>
                        </HStack>
                        <HStack justify="space-between" fontSize="md">
                          <Text color="fg.muted">{t('reserves.clients.cards.status')}</Text>
                          <HStack
                            bg={isOverCollateralized ? 'success.500' : 'warning.500/60'}
                            rounded="full"
                            px={2}
                            py={1}
                          >
                            <CheckCircle size={10} style={{ marginRight: '4px' }} />
                            <Text color={isOverCollateralized ? 'success.50' : 'warning.50'} fontSize="xs">
                              {isOverCollateralized
                                ? t('reserves.clients.cards.overCollateralized')
                                : t('reserves.clients.cards.underCollateralized')}
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
                        {t('reserves.clients.cards.viewCompleteReport')}
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

      <FAQSection />

      <CTA />
    </>
  );
};

export default Home;
