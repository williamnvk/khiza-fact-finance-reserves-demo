import {
  Box,
  VStack,
  Text,
  HStack,
  Flex,
  Card,
  Stat,
  FormatNumber,
  SimpleGrid,
  Grid,
  ColorSwatch,
  Tag,
} from '@chakra-ui/react';
import { Tooltip } from '@/components/ui/tooltip';
import { useColorModeValue } from '../ui/color-mode';
import { useI18n } from '@/hooks/useI18n';

export function TokenChainBreakdown({
  totalTokens,
  totalValue,
  chainDistribution,
  currency,
}: {
  totalChains: number;
  totalTokens: number;
  totalValue: number;
  chainDistribution: any[];
  currency: string;
}) {
  const { t } = useI18n();
  const formatPercent = (value: number) => `${value.toFixed(2)}%`;

  // Enhanced chain colors with better accessibility and modern palette
  const chainColors = {
    ethereum: useColorModeValue('#627EEA', '#8B9FFF'),
    bitcoin: useColorModeValue('#F7931A', '#FFB84D'),
    polygon: useColorModeValue('#8247E5', '#A66BFF'),
    binance: useColorModeValue('#F3BA2F', '#F5C842'),
    avalanche: useColorModeValue('#E84142', '#FF5B5C'),
    solana: useColorModeValue('#00D18C', '#1FDD8B'),
    arbitrum: useColorModeValue('#28A0F0', '#4FB3F3'),
    optimism: useColorModeValue('#FF0420', '#FF3547'),
    base: useColorModeValue('#0052FF', '#3366FF'),
    moonbeam: useColorModeValue('#E1147B', '#FF4D9F'),
    gnosis: useColorModeValue('#00A59C', '#33C4BC'),
    cronos: useColorModeValue('#002D74', '#1E4A8C'),
    fantom: useColorModeValue('#1969FF', '#3D80FF'),
    aurora: useColorModeValue('#70D44B', '#8DE069'),
    celo: useColorModeValue('#35D07F', '#5DDBAB'),
    xdc: useColorModeValue('#00A7B8', '#33B9C9'),
    other: useColorModeValue('#6B7280', '#9CA3AF'),
  };

  const dominantChain = chainDistribution.reduce(
    (max, chain) => (chain.value > max.value ? chain : max),
    chainDistribution[0] || { name: 'N/A', value: 0 },
  );

  // const networkDiversityScore = chainDistribution.length > 0 ? (chainDistribution.length / 15) * 100 : 0; // Assuming 15 as max supported chains

  const totalNetworkCoverage = chainDistribution.length;
  const averageTokensPerChain = totalNetworkCoverage > 0 ? totalTokens / totalNetworkCoverage : 0;

  // Prepare enhanced chain data
  const enhancedChainData = chainDistribution.map((chain, index) => ({
    ...chain,
    color: chainColors[chain.name.toLowerCase() as keyof typeof chainColors] || chainColors.other,
    percentage: chain.value,
    tokensOnChain: Math.round(averageTokensPerChain * (chain.value / 100)),
    rank: index + 1,
  }));

  return (
    <Box mb={{ base: 16, md: 0 }} className="break-page">
      <VStack align="stretch" gap={4}>
        {/* Enhanced Header Section */}
        <VStack align="stretch" gap={4}>
          <Flex justify="space-between" align="start" direction={{ base: 'column', md: 'row' }} gap={4}>
            <VStack align="start" gap={2} flex={1}>
              <HStack gap={3}>
                <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="fg">
                  {t('reserves.components.tokenChains.title')}
                </Text>
              </HStack>
              <Text fontSize={{ base: 'sm', md: 'md' }} color="fg.muted" lineHeight="tall">
                {t('reserves.components.tokenChains.subtitle')}
              </Text>
            </VStack>
          </Flex>

          {/* Network Overview Dashboard */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 2, md: 4 }}>
            <Card.Root
              size="sm"
              bg="transparent"
              borderWidth="1px"
              borderColor="blackAlpha.200"
              _dark={{
                borderColor: 'whiteAlpha.200',
              }}
            >
              <Card.Body>
                <Stat.Root>
                  <Stat.Label fontSize="xs" color="fg.muted">
                    <HStack gap={1}>
                      <Text fontSize="lg">{t('reserves.components.tokenChains.activeNetworks')}</Text>
                    </HStack>
                  </Stat.Label>
                  <Stat.ValueText fontSize="2xl" fontWeight="bold">
                    {chainDistribution.length}
                  </Stat.ValueText>
                </Stat.Root>
              </Card.Body>
            </Card.Root>

            <Card.Root
              size="sm"
              bg="transparent"
              borderWidth="1px"
              borderColor="blackAlpha.200"
              _dark={{
                borderColor: 'whiteAlpha.200',
              }}
            >
              <Card.Body>
                <Stat.Root>
                  <Stat.Label fontSize="xs" color="fg.muted">
                    <HStack gap={1}>
                      <Text fontSize="lg">{t('reserves.components.tokenChains.totalTokens')}</Text>
                    </HStack>
                  </Stat.Label>
                  <Stat.ValueText fontSize="2xl" fontWeight="bold">
                    <FormatNumber value={totalTokens} notation="compact" />
                  </Stat.ValueText>
                </Stat.Root>
              </Card.Body>
            </Card.Root>

            <Card.Root
              size="sm"
              bg="transparent"
              borderWidth="1px"
              borderColor="blackAlpha.200"
              _dark={{
                borderColor: 'whiteAlpha.200',
              }}
            >
              <Card.Body>
                <Stat.Root>
                  <Stat.Label fontSize="xs" color="fg.muted">
                    <HStack gap={1}>
                      <Text fontSize="lg">{t('reserves.components.tokenChains.totalValue')}</Text>
                    </HStack>
                  </Stat.Label>
                  <Stat.ValueText fontSize="2xl" fontWeight="bold">
                    <FormatNumber value={totalValue} style="currency" currency={currency} notation="compact" />
                  </Stat.ValueText>
                </Stat.Root>
              </Card.Body>
            </Card.Root>
          </SimpleGrid>
        </VStack>

        {/* Network Distribution */}
        <Card.Root size="sm" variant="outline" bg="transparent">
          <Card.Header>
            <Card.Title fontSize="lg" fontWeight="semibold">
              {t('reserves.components.tokenChains.networkDistribution')}
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <VStack align="stretch" gap={4}>
              <HStack width="100%" height="1rem" gap={0} borderRadius="full" overflow="hidden" shadow="sm">
                {enhancedChainData.map((chain) => (
                  <Tooltip key={chain.name} content={`${chain.name}: ${formatPercent(chain.value)}`}>
                    <Box height="100%" width={`${chain.value}%`} bg={chain.color} transition="all 0.2s ease-in-out" />
                  </Tooltip>
                ))}
              </HStack>

              {/* Legend */}
              <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={4} pt={4}>
                {enhancedChainData.map((chain) => (
                  <HStack key={chain.name} gap={3}>
                    <ColorSwatch boxSize="4" value={chain.color} borderRadius="sm" />
                    <HStack gap={4} align="center">
                      <Text fontSize="sm" fontWeight="medium" color="fg">
                        {chain.name.charAt(0).toUpperCase() + chain.name.slice(1)}
                      </Text>
                      <Tag.Root colorPalette="brand" size="sm" variant="subtle">
                        <Tag.Label fontSize="xs" fontWeight="semibold">
                          {formatPercent(chain.value)}
                        </Tag.Label>
                      </Tag.Root>
                    </HStack>
                  </HStack>
                ))}
              </Grid>
            </VStack>
          </Card.Body>
        </Card.Root>
      </VStack>
    </Box>
  );
}
