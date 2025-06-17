import { 
  Box, 
  VStack, 
  Text, 
  HStack, 
  Grid, 
  GridItem, 
  Flex,
  Card,
  Stat,
  Badge,
  FormatNumber,
  ColorSwatch,
  Progress,
  Separator,
  SimpleGrid,
  Icon
} from '@chakra-ui/react';
import { 
  Network, 
  Layers, 
  TrendingUp, 
  Shield, 
  Activity, 
  BarChart3,
  Globe,
  Zap
} from 'lucide-react';
import { useColorModeValue } from '../ui/color-mode';

export function TokenChainBreakdown({
  totalChains,
  totalTokens,
  totalValue,
  chainDistribution,
}: {
  totalChains: number;
  totalTokens: number;
  totalValue: number;
  chainDistribution: any[];
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

  // Calculate comprehensive metrics
  const averageChainDistribution = chainDistribution.length > 0 ? 
    chainDistribution.reduce((sum, chain) => sum + chain.value, 0) / chainDistribution.length : 0;
  
  const dominantChain = chainDistribution.reduce((max, chain) => 
    chain.value > max.value ? chain : max, chainDistribution[0] || { name: 'N/A', value: 0 });
  
  const networkDiversityScore = chainDistribution.length > 0 ? 
    (chainDistribution.length / 15) * 100 : 0; // Assuming 15 as max supported chains
  
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
    <Box
      position="relative"
      bg="whiteAlpha.50"
      borderRadius="3xl"
      shadow="2xl"
      borderWidth="1px"
      borderColor="whiteAlpha.200"
      overflow="hidden"
      p={{ base: 4, md: 6, lg: 8 }}
      w="full"
    >
      <VStack align="stretch" gap={8}>
        {/* Enhanced Header Section */}
        <VStack align="stretch" gap={4}>
          <Flex justify="space-between" align="start" direction={{ base: 'column', md: 'row' }} gap={4}>
            <VStack align="start" gap={2} flex={1}>
              <HStack gap={3}>
                <Icon as={Network} boxSize={8} color="brand.500" />
                <Text fontSize="3xl" fontWeight="bold" color="fg">
                  Blockchain Distribution
                </Text>
                <Badge colorPalette="brand" size="md">
                  {chainDistribution.length} Network{chainDistribution.length !== 1 ? 's' : ''}
                </Badge>
              </HStack>
              <Text fontSize="md" color="fg.muted" lineHeight="tall">
                Comprehensive overview of token distribution across supported blockchain networks, 
                showcasing cross-chain interoperability and network diversification strategy.
              </Text>
            </VStack>
          </Flex>

          {/* Network Overview Dashboard */}
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={4}>
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
                      <Icon as={Globe} boxSize={5} color="brand.500" />
                      <Text>Active Networks</Text>
                    </HStack>
                  </Stat.Label>
                  <Stat.ValueText fontSize="xl" fontWeight="bold" color="brand.500">
                    {chainDistribution.length}
                  </Stat.ValueText>
                  <Stat.HelpText fontSize="xs" color="success.500">
                    Multi-chain Coverage
                  </Stat.HelpText>
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
                      <Icon as={Layers} boxSize={5} color="warning.500" />
                      <Text>Total Tokens</Text>
                    </HStack>
                  </Stat.Label>
                  <Stat.ValueText fontSize="xl" fontWeight="bold" color="warning.500">
                    <FormatNumber value={totalTokens} notation="compact" />
                  </Stat.ValueText>
                  <Stat.HelpText fontSize="xs" color="fg.muted">
                    Cross-chain Assets
                  </Stat.HelpText>
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
                      <Icon as={BarChart3} boxSize={5} color="success.500" />
                      <Text>Total Value</Text>
                    </HStack>
                  </Stat.Label>
                  <Stat.ValueText fontSize="xl" fontWeight="bold" color="success.500">
                    <FormatNumber value={totalValue} style="currency" currency="USD" notation="compact" />
                  </Stat.ValueText>
                  <Stat.HelpText fontSize="xs" color="fg.muted">
                    Network Value
                  </Stat.HelpText>
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
                      <Icon as={Shield} boxSize={5} color="purple.500" />
                      <Text>Diversity Score</Text>
                    </HStack>
                  </Stat.Label>
                  <Stat.ValueText fontSize="xl" fontWeight="bold" color="purple.500">
                    {networkDiversityScore.toFixed(0)}%
                  </Stat.ValueText>
                  <Stat.HelpText fontSize="xs" color="fg.muted">
                    Risk Distribution
                  </Stat.HelpText>
                </Stat.Root>
              </Card.Body>
            </Card.Root>
          </SimpleGrid>
        </VStack>

        {/* Enhanced Visual Distribution */}
        <VStack align="stretch" gap={6}>
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

          {/* Detailed Chain Information */}
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={4}
          >
            {enhancedChainData.map((chain) => (
              <Card.Root key={chain.name} size="sm" variant="subtle">
                <Card.Body>
                  <VStack align="stretch" gap={3}>
                    <HStack justify="space-between">
                      <HStack gap={3}>
                        <ColorSwatch boxSize="4" value={chain.color} />
                        <VStack align="start" gap={0}>
                          <Text fontSize="sm" fontWeight="semibold" color="fg">
                            {chain.name.charAt(0).toUpperCase() + chain.name.slice(1)}
                          </Text>
                          <Text fontSize="xs" color="fg.muted">
                            Rank #{chain.rank}
                          </Text>
                        </VStack>
                      </HStack>
                      <Badge colorPalette="gray" size="sm">
                        {formatPercent(chain.value)}
                      </Badge>
                    </HStack>

                    <Separator />

                    <SimpleGrid columns={2} gap={3}>
                      <VStack align="start" gap={1}>
                        <Text fontSize="xs" color="fg.muted">
                          Estimated Tokens
                        </Text>
                        <Text fontSize="sm" fontWeight="medium" color="brand.500">
                          <FormatNumber value={chain.tokensOnChain} notation="compact" />
                        </Text>
                      </VStack>
                      <VStack align="start" gap={1}>
                        <Text fontSize="xs" color="fg.muted">
                          Network Share
                        </Text>
                        <Text fontSize="sm" fontWeight="medium" color="success.500">
                          {formatPercent(chain.value)}
                        </Text>
                      </VStack>
                    </SimpleGrid>

                    <Progress.Root 
                      value={chain.percentage} 
                      size="sm" 
                      colorPalette="gray"
                    >
                      <Progress.Track>
                        <Progress.Range style={{ backgroundColor: chain.color }} />
                      </Progress.Track>
                    </Progress.Root>
                  </VStack>
                </Card.Body>
              </Card.Root>
            ))}
          </Grid>
        </VStack>

        {/* Network Analytics */}
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
          <GridItem>
            <Card.Root variant="subtle">
              <Card.Body>
                <VStack align="start" gap={4}>
                  <HStack gap={3}>
                    <Icon as={Activity} boxSize={6} color="success.500" />
                    <Text fontSize="lg" fontWeight="semibold" color="fg">
                      Network Performance
                    </Text>
                  </HStack>
                  
                  <VStack align="stretch" gap={3} w="full">
                    <HStack justify="space-between">
                      <Text fontSize="sm" color="fg.muted">
                        Average Distribution:
                      </Text>
                      <Text fontSize="sm" fontWeight="medium" color="fg">
                        {formatPercent(averageChainDistribution)}
                      </Text>
                    </HStack>
                    
                    <HStack justify="space-between">
                      <Text fontSize="sm" color="fg.muted">
                        Tokens per Network:
                      </Text>
                      <Text fontSize="sm" fontWeight="medium" color="fg">
                        <FormatNumber value={averageTokensPerChain} maximumFractionDigits={0} />
                      </Text>
                    </HStack>
                    
                    <HStack justify="space-between">
                      <Text fontSize="sm" color="fg.muted">
                        Network Coverage:
                      </Text>
                      <Text fontSize="sm" fontWeight="medium" color="success.500">
                        {((totalNetworkCoverage / 15) * 100).toFixed(0)}% of major chains
                      </Text>
                    </HStack>
                  </VStack>
                </VStack>
              </Card.Body>
            </Card.Root>
          </GridItem>

          <GridItem>
            <Card.Root variant="subtle">
              <Card.Body>
                <VStack align="start" gap={4}>
                  <HStack gap={3}>
                    <Icon as={Zap} boxSize={6} color="warning.500" />
                    <Text fontSize="lg" fontWeight="semibold" color="fg">
                      Cross-Chain Benefits
                    </Text>
                  </HStack>
                  
                  <Text fontSize="sm" color="fg.muted" lineHeight="relaxed">
                    • Enhanced liquidity across {chainDistribution.length} networks
                    <br />
                    • Reduced single-point-of-failure risk
                    <br />
                    • Optimized transaction costs and speeds
                    <br />
                    • Greater accessibility for global users
                    <br />
                    • Future-proof blockchain technology adoption
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>
          </GridItem>
        </Grid>

        {/* Enhanced Footer */}
        <Card.Root variant="subtle">
          <Card.Body>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
              <GridItem>
                <VStack align="start" gap={2}>
                  <Text fontSize="sm" fontWeight="semibold" color="fg">
                    Network Security
                  </Text>
                  <Text fontSize="xs" color="fg.muted" lineHeight="relaxed">
                    All supported networks undergo rigorous security assessments and maintain high standards for decentralization, consensus mechanisms, and validator integrity.
                  </Text>
                </VStack>
              </GridItem>

              <GridItem>
                <VStack align="start" gap={2}>
                  <Text fontSize="sm" fontWeight="semibold" color="fg">
                    Interoperability
                  </Text>
                  <Text fontSize="xs" color="fg.muted" lineHeight="relaxed">
                    Cross-chain bridges and protocols enable seamless asset transfers, providing users with flexibility while maintaining reserve backing across all networks.
                  </Text>
                </VStack>
              </GridItem>

              <GridItem>
                <VStack align="start" gap={2}>
                  <Text fontSize="sm" fontWeight="semibold" color="fg">
                    Future Expansion
                  </Text>
                  <Text fontSize="xs" color="fg.muted" lineHeight="relaxed">
                    Network selection is continuously evaluated based on adoption, security, and user demand to ensure optimal coverage and performance.
                  </Text>
                </VStack>
              </GridItem>
            </Grid>
          </Card.Body>
        </Card.Root>
      </VStack>
    </Box>
  );
}
