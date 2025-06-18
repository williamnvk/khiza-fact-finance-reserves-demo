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
  Icon,
} from '@chakra-ui/react';
import { Network, Layers, TrendingUp, Shield, Activity, BarChart3, Globe, Zap } from 'lucide-react';
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
  const averageChainDistribution =
    chainDistribution.length > 0
      ? chainDistribution.reduce((sum, chain) => sum + chain.value, 0) / chainDistribution.length
      : 0;

  const dominantChain = chainDistribution.reduce(
    (max, chain) => (chain.value > max.value ? chain : max),
    chainDistribution[0] || { name: 'N/A', value: 0 },
  );

  const networkDiversityScore = chainDistribution.length > 0 ? (chainDistribution.length / 15) * 100 : 0; // Assuming 15 as max supported chains

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
                This section shows how the token supply is distributed across different blockchains
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
                      <Icon as={Shield} boxSize={5} color="brand.500" />
                      <Text>Diversity Score</Text>
                    </HStack>
                  </Stat.Label>
                  <Stat.ValueText fontSize="xl" fontWeight="bold" color="brand.500">
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

          {/* Enhanced Detailed Chain Information */}
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4}>
            {enhancedChainData.map((chain, index) => (
              <Card.Root
                key={chain.name}
                size="sm"
                boxShadow="none"
                position="relative"
                overflow="hidden"
                cursor="pointer"
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  bg: `linear-gradient(90deg, ${chain.color}, ${chain.color}88)`,
                  opacity: 0.7,
                  transition: 'opacity 0.3s ease',
                }}
                borderWidth="1px"
                borderColor="blackAlpha.200"
                _dark={{
                  borderColor: 'whiteAlpha.200',
                  bg: 'whiteAlpha.50',
                }}
                bg="white"
              >
                <Card.Body p={5}>
                  <VStack align="stretch" gap={4}>
                    {/* Enhanced Header */}
                    <HStack justify="space-between" align="start">
                      <HStack gap={3} align="center">
                        <Box
                          position="relative"
                          _hover={{
                            transform: 'scale(1.1)',
                            transition: 'transform 0.2s ease',
                          }}
                        >
                          <ColorSwatch boxSize="6" value={chain.color} borderRadius="full" shadow="lg" />
                          <Box
                            position="absolute"
                            top="-1"
                            right="-1"
                            boxSize="3"
                            bg={chain.color}
                            borderRadius="full"
                            shadow="sm"
                            opacity={0.8}
                          />
                        </Box>
                        <VStack align="start" gap={0}>
                          <Text fontSize="md" fontWeight="bold" color="fg">
                            {chain.name.charAt(0).toUpperCase() + chain.name.slice(1)}
                          </Text>
                          <HStack gap={2}>
                            <Badge
                              colorPalette={chain.rank <= 3 ? 'success' : chain.rank <= 6 ? 'warning' : 'gray'}
                              size="xs"
                              variant="subtle"
                            >
                              #{chain.rank}
                            </Badge>
                            <Text fontSize="xs" color="fg.muted">
                              Network
                            </Text>
                          </HStack>
                        </VStack>
                      </HStack>
                      <Badge
                        colorPalette="brand"
                        size="md"
                        variant="solid"
                        fontWeight="bold"
                        px={3}
                        py={1}
                        borderRadius="full"
                      >
                        {formatPercent(chain.value)}
                      </Badge>
                    </HStack>

                    {/* Visual Separator with Gradient */}
                    <Box h="1px" bg={`linear-gradient(90deg, transparent, ${chain.color}44, transparent)`} my={1} />

                    {/* Enhanced Metrics Grid */}
                    <SimpleGrid columns={2} gap={4}>
                      <Box
                        p={3}
                        borderRadius="lg"
                        bg="blackAlpha.50"
                        _dark={{ bg: 'whiteAlpha.100' }}
                        transition="all 0.2s ease"
                        _hover={{
                          bg: 'blackAlpha.100',
                          _dark: { bg: 'whiteAlpha.200' },
                        }}
                      >
                        <VStack align="start" gap={1}>
                          <HStack gap={1}>
                            <Icon as={Layers} boxSize={3} color={chain.color} />
                            <Text fontSize="xs" color="fg.muted" fontWeight="medium">
                              Est. Tokens
                            </Text>
                          </HStack>
                          <Text fontSize="lg" fontWeight="bold" color="brand.500">
                            <FormatNumber value={chain.tokensOnChain} notation="compact" />
                          </Text>
                        </VStack>
                      </Box>

                      <Box
                        p={3}
                        borderRadius="lg"
                        bg="blackAlpha.50"
                        _dark={{ bg: 'whiteAlpha.100' }}
                        transition="all 0.2s ease"
                        _hover={{
                          bg: 'blackAlpha.100',
                          _dark: { bg: 'whiteAlpha.200' },
                        }}
                      >
                        <VStack align="start" gap={1}>
                          <HStack gap={1}>
                            <Icon as={TrendingUp} boxSize={3} color={chain.color} />
                            <Text fontSize="xs" color="fg.muted" fontWeight="medium">
                              Share
                            </Text>
                          </HStack>
                          <Text fontSize="lg" fontWeight="bold" color="success.500">
                            {formatPercent(chain.value)}
                          </Text>
                        </VStack>
                      </Box>
                    </SimpleGrid>

                    {/* Enhanced Progress Bar */}
                    <VStack align="stretch" gap={2}>
                      <HStack justify="space-between">
                        <Text fontSize="xs" color="fg.muted">
                          Network Allocation
                        </Text>
                        <Text fontSize="xs" fontWeight="medium" color={chain.color}>
                          {chain.percentage > averageChainDistribution ? '↗' : '↘'}
                          {((chain.percentage / averageChainDistribution) * 100).toFixed(0)}% vs avg
                        </Text>
                      </HStack>
                      <Progress.Root
                        value={chain.percentage}
                        size="md"
                        colorPalette="gray"
                        borderRadius="full"
                        overflow="hidden"
                        bg="blackAlpha.100"
                        _dark={{ bg: 'whiteAlpha.200' }}
                      >
                        <Progress.Track>
                          <Progress.Range
                            style={{
                              background: `linear-gradient(90deg, ${chain.color}, ${chain.color}CC)`,
                              transition: 'all 0.3s ease',
                            }}
                          />
                        </Progress.Track>
                      </Progress.Root>
                    </VStack>

                    {/* Network Status Indicator */}
                    <HStack justify="space-between" align="center">
                      <HStack gap={2}>
                        <Box boxSize="2" bg="success.500" borderRadius="full" />
                        <Text fontSize="xs" color="success.500" fontWeight="medium">
                          Active
                        </Text>
                      </HStack>
                      <HStack gap={1}>
                        <Icon as={Shield} boxSize={3} color="success.500" />
                        <Text fontSize="xs" color="fg.muted">
                          Secure
                        </Text>
                      </HStack>
                    </HStack>
                  </VStack>
                </Card.Body>

                {/* Hover Effect Overlay */}
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg={`linear-gradient(135deg, ${chain.color}08, transparent)`}
                  opacity={0}
                  transition="opacity 0.3s ease"
                  _groupHover={{ opacity: 1 }}
                  pointerEvents="none"
                />
              </Card.Root>
            ))}
          </Grid>
        </VStack>
      </VStack>
    </Box>
  );
}
