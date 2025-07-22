import { CircleCheck, Eye } from 'lucide-react';
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
  FormatNumber,
  SimpleGrid,
  Image,
} from '@chakra-ui/react';
import { reportChains } from '@/data/chains';
import { useI18n } from '@/hooks/useI18n';

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
  const { t } = useI18n();
  
  // Function to get shortened contract address
  const getShortenedAddress = (address: string) => {
    return address.length > 12 ? `${address.substring(0, 6)}...${address.substring(address.length - 6)}` : address;
  };

  // Calculate comprehensive portfolio metrics
  // const totalPortfolioValue = tokens.reduce((sum, token) => sum + (circulation * token.share) / 100, 0);
  // const totalMarketCap = tokens.reduce((sum, token) => sum + ((circulation * token.share) / 100) * token.tokenPrice, 0);
  // const averageTokenPrice = tokens.reduce((sum, token) => sum + token.tokenPrice, 0) / tokens.length;
  // const totalChainsSupported = [...new Set(tokens.flatMap((token) => token.chains))].length;
  // const highestUtilization = Math.max(...tokens.map((token) => ((circulation * token.share) / 100 / reserves) * 100));
  // const mostSupportedChains = tokens.reduce((max, token) => (token.chains.length > max ? token.chains.length : max), 0);

  return (
    <Box mb={{ base: 16, md: 0}} className="break-page">
      <VStack align="stretch" gap={8}>
        {/* Enhanced Header Section */}
        <VStack align="stretch" gap={4}>
          <Flex justify="space-between" align="start" direction={{ base: 'column', md: 'row' }} gap={4}>
            <VStack align="start" gap={2} flex={1}>
              <HStack gap={3}>
                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color="fg">
                  {t('reserves.components.tokenList.title')}
                </Text>
              </HStack>
              <Text fontSize={{ base: "sm", md: "md" }} color="fg.muted" lineHeight="tall">
                {t('reserves.components.tokenList.subtitle')}
              </Text>
            </VStack>
          </Flex>
        </VStack>

        {/* Token Details Section */}
        <VStack align="stretch" gap={4}>
          {tokens.map((token, index) => {
            const tokenSupply = (circulation * token.share) / 100;
            const tokenTransfers = (periodTotalTransfer * token.share) / 100;
            const reserveUtilization = (tokenSupply / reserves) * 100;
            const totalTransferVolume = tokenTransfers * 12;

            return (
              <>
                <Grid
                  templateColumns={{ base: '1fr', lg: '300px 1fr' }}
                  gap={{ base: 2, md: 6}}
                  borderTopWidth={index === 0 ? '0px' : '1px'}
                  pt={index === 0 ? '0px' : '16px'}
                  bg="whiteAlpha.500"
                  rounded="lg"
                  p={{ base: 4, md: 6}}
                  borderWidth="1px"
                  borderColor="gray.200"
                  _dark={{
                    borderColor: 'gray.700',
                    bg: 'blackAlpha.50',
                  }}
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
                          {t('reserves.components.tokenList.tokenContracts')} ({token.chains.length})
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
                              {t('reserves.components.tokenList.onchainReservesData')}
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
                    <VStack align="stretch" gap={4}>
                      {/* Token Metrics */}
                      <Box>
                        <Text fontSize="lg" fontWeight="semibold" color="fg" mb={4}>
                          {t('reserves.components.tokenList.tokenMetrics')}
                        </Text>
                        <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} gap={{ base: 1, md: 4}}>
                          <Card.Root size="sm">
                            <Card.Body>
                              <Stat.Root size="sm">
                                <Stat.Label fontSize="md" color="fg.muted">
                                  {t('reserves.components.tokenList.tokenCirculatingSupply')}
                                </Stat.Label>
                                <Stat.ValueText fontSize="xl" fontWeight="semibold" color="brand.500">
                                  <FormatNumber
                                    value={tokenSupply}
                                    style="currency"
                                    currency={currency}
                                    notation="compact"
                                  />
                                </Stat.ValueText>
                              </Stat.Root>
                            </Card.Body>
                          </Card.Root>

                          <Card.Root size="sm">
                            <Card.Body>
                              <Stat.Root size="sm">
                                <Stat.Label fontSize="md" color="fg.muted">
                                  <HStack gap={1}>
                                    <Text>{t('reserves.components.tokenList.currentPrice')}</Text>
                                    <CircleCheck size={12} color="var(--ff-colors-brand-500)" />
                                  </HStack>
                                </Stat.Label>
                                <Stat.ValueText fontSize="xl" fontWeight="semibold" color="fg.muted">
                                  <FormatNumber
                                    value={token.tokenPrice}
                                    style="currency"
                                    currency={currency}
                                    minimumFractionDigits={2}
                                    maximumFractionDigits={4}
                                  />
                                </Stat.ValueText>
                              </Stat.Root>
                            </Card.Body>
                          </Card.Root>

                          <Card.Root size="sm">
                            <Card.Body>
                              <Stat.Root size="sm">
                                <Stat.Label fontSize="md" color="fg.muted">
                                  {t('reserves.components.tokenList.reservesUtilization')}
                                </Stat.Label>
                                <Stat.ValueText fontSize="xl" fontWeight="semibold">
                                  {reserveUtilization.toFixed(2)}%
                                </Stat.ValueText>
                              </Stat.Root>
                            </Card.Body>
                          </Card.Root>

                          <Card.Root size="sm">
                            <Card.Body>
                              <Stat.Root size="sm">
                                <Stat.Label fontSize="md" color="fg.muted">
                                  {t('reserves.components.tokenList.thirtyDayTransferVolume')}
                                </Stat.Label>
                                <Stat.ValueText fontSize="xl" fontWeight="semibold" color="purple.500">
                                  <FormatNumber
                                    value={tokenTransfers}
                                    style="currency"
                                    currency={currency}
                                    notation="compact"
                                  />
                                </Stat.ValueText>
                              </Stat.Root>
                            </Card.Body>
                          </Card.Root>

                          <Card.Root size="sm">
                            <Card.Body>
                              <Stat.Root size="sm">
                                      <Stat.Label fontSize="md" color="fg.muted">
                                  {t('reserves.components.tokenList.totalTransferVolume')}
                                </Stat.Label>
                                <Stat.ValueText fontSize="xl" fontWeight="semibold" color="teal.500">
                                  <FormatNumber
                                    value={totalTransferVolume}
                                    style="currency"
                                    currency={currency}
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
