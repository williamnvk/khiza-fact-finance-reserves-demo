import { Box, VStack, Text, HStack, Flex, Card, Stat, FormatNumber, SimpleGrid, Icon } from '@chakra-ui/react';
import { Layers, BarChart3, Globe } from 'lucide-react';
import { useColorModeValue } from '../ui/color-mode';

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
    <Box>
      <VStack align="stretch" gap={4}>
        {/* Enhanced Header Section */}
        <VStack align="stretch" gap={4}>
          <Flex justify="space-between" align="start" direction={{ base: 'column', md: 'row' }} gap={4}>
            <VStack align="start" gap={2} flex={1}>
              <HStack gap={3}>
                <Text fontSize="4xl" fontWeight="bold" color="fg">
                  Blockchain Distribution
                </Text>
              </HStack>
              <Text fontSize="xl" color="fg.muted" lineHeight="tall">
                This section shows how the token supply is distributed across different blockchains
              </Text>
            </VStack>
          </Flex>

          {/* Network Overview Dashboard */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
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
                      <Text fontSize="lg">Active Networks</Text>
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
                      <Text fontSize="lg">Total Tokens</Text>
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
                        <Text fontSize="lg">Total Value</Text>
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

        {/* Enhanced Visual Distribution */}
        <VStack
          align="stretch"
          gap={6}
          bg="whiteAlpha.50"
          rounded="lg"
          p={6}
          borderWidth="1px"
          _dark={{ bg: 'blackAlpha.50' }}
        >
          <HStack justify="space-between">
            <Text fontSize="xl" fontWeight="semibold" color="fg">
              Network Distribution
            </Text>
            <VStack align="end" gap={0}>
              <Text fontSize="sm" fontWeight="medium" color="fg.muted">
                Dominant Chain: {dominantChain.name}
              </Text>
              <Text fontSize="xs" color="brand.500">
                {formatPercent(dominantChain.value)} allocation
              </Text>
            </VStack>
          </HStack>

          {/* Enhanced Distribution Bar */}
          <Box>
            <HStack h={4} w="full" rounded="full" overflow="hidden" mb={4} shadow="inner">
              {enhancedChainData.map((chain) => (
                <Box
                  key={chain.name}
                  h="full"
                  bg={chain.color}
                  width={`${Number(chain.value)}%`}
                  _hover={{
                    transform: 'scaleY(1.2)',
                    zIndex: 1,
                  }}
                  transition="all 0.2s"
                  cursor="pointer"
                />
              ))}
            </HStack>

            {/* Progress indicator */}
            <HStack justify="space-between" fontSize="xs" color="fg.muted" mb={6}>
              <Text>0%</Text>
              <Text fontWeight="medium" color="fg">
                Distribution Across {chainDistribution.length} Networks
              </Text>
              <Text>100%</Text>
            </HStack>
          </Box>
        </VStack>
      </VStack>
    </Box>
  );
}
