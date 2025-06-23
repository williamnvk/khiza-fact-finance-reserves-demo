import { CircleCheck, Shield, TrendingUp, Eye, PieChart, BarChart3, Activity, Wallet } from 'lucide-react';
import { formatLargeNumber } from '@/lib/utils';
import {
  Box,
  VStack,
  HStack,
  Text,
  Flex,
  Grid,
  GridItem,
  Link as ChakraLink,
  Card,
  Stat,
  Badge,
  FormatNumber,
  Progress,
  Stack,
  SimpleGrid,
  Icon,
  Image,
} from '@chakra-ui/react';
import { chains, reportChains } from '@/data/chains';

export function TokenList({
  currency,
  tokens,
  reserves,
  circulation,
  periodTotalTransfer,
}: {
  currency: string;
  tokens: any[];
  companyName: string;
  reserves: number;
  circulation: number;
  periodTotalTransfer: number;
}) {
  // Function to get shortened contract address
  const getShortenedAddress = (address: string) => {
    return address.length > 12 ? `${address.substring(0, 6)}...${address.substring(address.length - 6)}` : address;
  };

  // Calculate comprehensive portfolio metrics
  const totalPortfolioValue = tokens.reduce((sum, token) => sum + (circulation * token.share) / 100, 0);
  const totalMarketCap = tokens.reduce((sum, token) => sum + ((circulation * token.share) / 100) * token.tokenPrice, 0);
  const averageTokenPrice = tokens.reduce((sum, token) => sum + token.tokenPrice, 0) / tokens.length;
  const totalChainsSupported = [...new Set(tokens.flatMap((token) => token.chains))].length;
  const highestUtilization = Math.max(...tokens.map((token) => ((circulation * token.share) / 100 / reserves) * 100));
  const mostSupportedChains = tokens.reduce((max, token) => (token.chains.length > max ? token.chains.length : max), 0);

  return (
    <Box>
      <VStack align="stretch" gap={8}>
        {/* Enhanced Header Section */}
        <VStack align="stretch" gap={4}>
          <Flex justify="space-between" align="start" direction={{ base: 'column', md: 'row' }} gap={4}>
            <VStack align="start" gap={2} flex={1}>
              <HStack gap={3}>
                <Text fontSize="3xl" fontWeight="bold" color="fg">
                  Token Overview
                </Text>
                <Badge colorPalette="brand" size="md">
                  {tokens.length} Asset{tokens.length !== 1 ? 's' : ''}
                </Badge>
              </HStack>
              <Text fontSize="md" color="fg.muted" lineHeight="tall">
                This section provides key onchain metrics to track the token's issuance, market activity, and reserve
                dynamics.
              </Text>
            </VStack>
          </Flex>
        </VStack>

        {/* Token Details Section */}
        <VStack align="stretch" gap={6}>
          <Stack gap={6}>
            {tokens.map((token) => {
              const tokenSupply = (circulation * token.share) / 100;
              const tokenTransfers = (periodTotalTransfer * token.share) / 100;
              const reserveUtilization = (tokenSupply / reserves) * 100;
              const totalTransferVolume = tokenTransfers * 12; // Assuming monthly data for yearly estimate
              const marketCap = tokenSupply * token.tokenPrice;

              return (
                <>
                  <Grid
                    templateColumns={{ base: '1fr', lg: '300px 1fr' }}
                    gap={6}
                    borderTop="1px solid"
                    borderColor="gray.200"
                    _dark={{ borderColor: 'gray.700' }}
                    pt={8}
                  >
                    {/* Token Identity Section */}
                    <GridItem>
                      <VStack align="stretch" gap={4}>
                        <HStack gap={4}>
                          <VStack align="start" gap={1}>
                            <Text fontSize="2xl" fontWeight="bold" color="fg">
                              {token.symbol}
                            </Text>
                            <Text fontSize="md" color="fg.muted">
                              {token.name}
                            </Text>
                          </VStack>
                        </HStack>

                        {/* Chain Support */}
                        <Box>
                          <Text fontSize="sm" fontWeight="medium" color="fg" mb={2}>
                            Token Contracts ({token.chains.length})
                          </Text>
                          <HStack gap={2} flexWrap="wrap">
                            {token.chains.map((chain: string) => (
                              <Box
                                key={chain}
                                title={chain}
                                bg="gray.100"
                                rounded="full"
                                p={2}
                                shadow="sm"
                                _hover={{ shadow: 'md', transform: 'translateY(-1px)' }}
                                transition="all 0.2s"
                                _dark={{ bg: 'gray.700' }}
                              >
                                <Image src={reportChains.find((c) => c.name === chain)?.icon} alt={chain} boxSize={4} />
                              </Box>
                            ))}
                          </HStack>
                        </Box>

                        {token.oracleContract && (
                          <Box bg="gray.50" rounded="lg" p={3} _dark={{ bg: 'gray.800' }}>
                            <VStack align="start" gap={2}>
                              <Text fontSize="sm" fontWeight="medium" color="fg">
                                Onchain reserves data
                              </Text>
                              <ChakraLink
                                href={`https://etherscan.io/address/${token.oracleContract}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                _hover={{ textDecoration: 'none' }}
                              >
                                <HStack gap={2}>
                                  <Text>{getShortenedAddress(token.oracleContract)}</Text>
                                  <Eye size={14} />
                                </HStack>
                              </ChakraLink>
                            </VStack>
                          </Box>
                        )}
                      </VStack>
                    </GridItem>

                    {/* Metrics and Performance Section */}
                    <GridItem>
                      <VStack align="stretch" gap={6}>
                        {/* Token Metrics */}
                        <Box>
                          <Text fontSize="lg" fontWeight="semibold" color="fg" mb={4}>
                            Token Metrics
                          </Text>
                          <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} gap={4}>
                            <Card.Root size="sm" variant="subtle">
                              <Card.Body>
                                <Stat.Root size="sm">
                                  <Stat.Label fontSize="xs" color="fg.muted">
                                    Token Circulating Supply
                                  </Stat.Label>
                                  <Stat.ValueText fontSize="lg" fontWeight="semibold" color="brand.500">
                                    <FormatNumber
                                      value={tokenSupply}
                                      style="currency"
                                      currency="USD"
                                      notation="compact"
                                    />
                                  </Stat.ValueText>
                                </Stat.Root>
                              </Card.Body>
                            </Card.Root>

                            <Card.Root size="sm" variant="subtle">
                              <Card.Body>
                                <Stat.Root size="sm">
                                  <Stat.Label fontSize="xs" color="fg.muted">
                                    <HStack gap={1}>
                                      <Text>Current Price</Text>
                                      <CircleCheck size={12} color="var(--chakra-colors-success-500)" />
                                    </HStack>
                                  </Stat.Label>
                                  <Stat.ValueText fontSize="lg" fontWeight="semibold" color="warning.500">
                                    <FormatNumber
                                      value={token.tokenPrice}
                                      style="currency"
                                      currency="USD"
                                      minimumFractionDigits={2}
                                      maximumFractionDigits={4}
                                    />
                                  </Stat.ValueText>
                                </Stat.Root>
                              </Card.Body>
                            </Card.Root>

                            <Card.Root size="sm" variant="subtle">
                              <Card.Body>
                                <Stat.Root size="sm">
                                  <Stat.Label fontSize="xs" color="fg.muted">
                                    Reserves Utilization
                                  </Stat.Label>
                                  <Stat.ValueText fontSize="lg" fontWeight="semibold" color="success.500">
                                    {reserveUtilization.toFixed(2)}%
                                  </Stat.ValueText>
                                </Stat.Root>
                              </Card.Body>
                            </Card.Root>

                            <Card.Root size="sm" variant="subtle">
                              <Card.Body>
                                <Stat.Root size="sm">
                                  <Stat.Label fontSize="xs" color="fg.muted">
                                    30-Day Transfer Volume
                                  </Stat.Label>
                                  <Stat.ValueText fontSize="lg" fontWeight="semibold" color="purple.500">
                                    <FormatNumber
                                      value={tokenTransfers}
                                      style="currency"
                                      currency="USD"
                                      notation="compact"
                                    />
                                  </Stat.ValueText>
                                </Stat.Root>
                              </Card.Body>
                            </Card.Root>

                            <Card.Root size="sm" variant="subtle">
                              <Card.Body>
                                <Stat.Root size="sm">
                                  <Stat.Label fontSize="xs" color="fg.muted">
                                    Total Transfer Volume
                                  </Stat.Label>
                                  <Stat.ValueText fontSize="lg" fontWeight="semibold" color="teal.500">
                                    <FormatNumber
                                      value={totalTransferVolume}
                                      style="currency"
                                      currency="USD"
                                      notation="compact"
                                    />
                                  </Stat.ValueText>
                                </Stat.Root>
                              </Card.Body>
                            </Card.Root>
                          </SimpleGrid>
                        </Box>

                        {/* Activity Metrics */}
                        {/* <Box>
                          <Text fontSize="lg" fontWeight="semibold" color="fg" mb={4}>
                            Activity & Performance
                          </Text>
                          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                            <Card.Root size="sm" variant="subtle">
                              <Card.Body>
                                <Stat.Root size="sm">
                                  <Stat.Label fontSize="xs" color="fg.muted">
                                    30-Day Transfer Volume
                                  </Stat.Label>
                                  <Stat.ValueText fontSize="lg" fontWeight="semibold" color="success.500">
                                    <FormatNumber
                                      value={tokenTransfers}
                                      style="currency"
                                      currency="USD"
                                      notation="compact"
                                    />
                                  </Stat.ValueText>
                                  <Stat.HelpText fontSize="xs" color="fg.muted">
                                    <HStack gap={1}>
                                      <TrendingUp size={12} />
                                      <Text>
                                        {((tokenTransfers / periodTotalTransfer) * 100).toFixed(1)}% of total volume
                                      </Text>
                                    </HStack>
                                  </Stat.HelpText>
                                </Stat.Root>
                              </Card.Body>
                            </Card.Root>

                            <Card.Root size="sm" variant="subtle">
                              <Card.Body>
                                <Stat.Root size="sm">
                                  <Stat.Label fontSize="xs" color="fg.muted">
                                    Cross-Chain Coverage
                                  </Stat.Label>
                                  <Stat.ValueText fontSize="lg" fontWeight="semibold" color="success.500">
                                    {token.chains.length}/{totalChainsSupported}
                                  </Stat.ValueText>
                                  <Stat.HelpText fontSize="xs" color="fg.muted">
                                    {((token.chains.length / totalChainsSupported) * 100).toFixed(0)}% network coverage
                                  </Stat.HelpText>
                                </Stat.Root>
                              </Card.Body>
                            </Card.Root>
                          </SimpleGrid>
                        </Box> */}

                        {/* Reserve Utilization */}
                        {/* <Box>
                          <HStack justify="space-between" mb={3}>
                            <VStack align="start" gap={0}>
                              <HStack gap={2}>
                                <Icon as={Shield} boxSize={5} color="success.500" />
                                <Text fontSize="lg" fontWeight="semibold" color="fg">
                                  Reserve Utilization
                                </Text>
                              </HStack>
                              <Text fontSize="sm" color="fg.muted">
                                Percentage of total reserves allocated to this token
                              </Text>
                            </VStack>
                            <VStack align="end" gap={0}>
                              <Text fontSize="2xl" fontWeight="bold" color="success.500">
                                {reserveUtilization.toFixed(2)}%
                              </Text>
                              <Text fontSize="xs" color="fg.muted">
                                of {formatLargeNumber(reserves, currency)} reserves
                              </Text>
                            </VStack>
                          </HStack>

                          <Progress.Root value={Math.min(reserveUtilization, 100)} colorPalette="success" size="lg">
                            <Progress.Track rounded="full">
                              <Progress.Range rounded="full" />
                            </Progress.Track>
                          </Progress.Root>

                          <HStack justify="space-between" fontSize="xs" color="fg.muted" mt={2}>
                            <Text>0% (Minimum)</Text>
                            <Text fontWeight="medium" color="fg">
                              Current: {reserveUtilization.toFixed(2)}%
                            </Text>
                            <Text>100% (Maximum)</Text>
                          </HStack>
                        </Box> */}
                      </VStack>
                    </GridItem>
                  </Grid>
                </>
              );
            })}
          </Stack>
        </VStack>

        {/* Enhanced Footer with Additional Insights */}
        {/* <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
          <GridItem>
            <Card.Root variant="subtle" bg="whiteAlpha.50">
              <Card.Body>
                <VStack align="start" gap={3}>
                  <Text fontSize="md" fontWeight="semibold" color="fg">
                    Security & Compliance
                  </Text>
                  <Text fontSize="sm" color="fg.muted" lineHeight="relaxed">
                    • Full 1:1 reserve backing across all tokens
                    <br />
                    • Multi-signature smart contract security
                    <br />
                    • Real-time on-chain reserve verification
                    <br />• Third-party security audits completed
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>
          </GridItem>

          <GridItem>
            <Card.Root variant="subtle" bg="whiteAlpha.50">
              <Card.Body>
                <VStack align="start" gap={3}>
                  <Text fontSize="md" fontWeight="semibold" color="fg">
                    Portfolio Analytics
                  </Text>
                  <Text fontSize="sm" color="fg.muted" lineHeight="relaxed">
                    • Average token price: <FormatNumber value={averageTokenPrice} style="currency" currency="USD" />
                    <br />• Total market cap:{' '}
                    <FormatNumber value={totalMarketCap} style="currency" currency="USD" notation="compact" />
                    <br />• Peak utilization: {highestUtilization.toFixed(1)}%
                    <br />• Cross-chain support: {totalChainsSupported} networks
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>
          </GridItem>

          <GridItem>
            <Card.Root variant="subtle" bg="whiteAlpha.50">
              <Card.Body>
                <VStack align="start" gap={3}>
                  <Text fontSize="md" fontWeight="semibold" color="fg">
                    Network Coverage
                  </Text>
                  <Text fontSize="sm" color="fg.muted" lineHeight="relaxed">
                    • Maximum chains per token: {mostSupportedChains}
                    <br />• Total supported networks: {totalChainsSupported}
                    <br />
                    • Cross-chain liquidity enabled
                    <br />• Unified reserve backing model
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>
          </GridItem>
        </Grid> */}
      </VStack>
    </Box>
  );
}
