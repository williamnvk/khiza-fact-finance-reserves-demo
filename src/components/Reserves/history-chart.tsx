import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { useState } from 'react';
import { formatLargeNumber } from '@/lib/utils';
import {
  Box,
  VStack,
  Text,
  HStack,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Card,
  Flex,
  Stat,
  Separator,
} from '@chakra-ui/react';
import { useColorModeValue } from '../ui/color-mode';

export function HistoryChart({
  heartbeat,
  historicalData,
  historicalData1,
  periodTotalTransfer,
  periodTotalTransfer1,
  periodTransactions,
  periodTransactions1,
  avgcolateral,
  avgcolateral1,
  currency = 'USD',
}: {
  heartbeat: string;
  historicalData: any[];
  historicalData1: any[];
  periodTotalTransfer: number;
  periodTotalTransfer1: number;
  periodTransactions: number;
  periodTransactions1: number;
  avgcolateral: number;
  avgcolateral1: number;
  currency: string;
}) {
  // Chart colors that work for both light and dark modes
  const colors = {
    reserves: useColorModeValue('var(--ff-colors-success-600)', 'var(--ff-colors-success-400)'),
    circulation: useColorModeValue('var(--ff-colors-brand-500)', 'var(--ff-colors-brand-400)'),
    grid: useColorModeValue('var(--ff-colors-gray-300)', 'var(--ff-colors-gray-700)'),
  };

  // Enhanced tooltip with better formatting and design
  const CustomTooltip = ({ active, payload }: any) => {
    if (!active || !payload || !payload.length) return null;

    return (
      <Card.Root borderWidth="1px" shadow="lg" p={4} maxW="320px" _dark={{ shadow: 'dark-lg' }}>
        <Card.Body p={0}>
          <VStack align="start" gap={3}>
            <Text fontSize="sm" fontWeight="semibold" color="fg">
              Date: {payload[0].payload.date}
            </Text>

            <Box w="full">
              <HStack justify="space-between" mb={1}>
                <Text fontSize="xs" color="fg.muted">
                  Collateral Reserves
                </Text>
                <Text fontSize="sm" fontWeight="medium" color={colors.reserves}>
                  {formatLargeNumber(payload[0].value, currency)}
                </Text>
              </HStack>

              <HStack justify="space-between" mb={2}>
                <Text fontSize="xs" color="fg.muted">
                  Tokens Issued
                </Text>
                <Text fontSize="sm" fontWeight="medium" color={colors.circulation}>
                  {formatLargeNumber(payload[1].value, currency)}
                </Text>
              </HStack>

              {payload[0].payload?.transactions > 0 && (
                <>
                  <Separator my={2} />

                  <HStack justify="space-between" mb={1}>
                    <Text fontSize="xs" color="fg.muted">
                      Transactions
                    </Text>
                    <Text fontSize="sm" fontWeight="medium" color="fg">
                      {payload[0].payload.transactions}
                    </Text>
                  </HStack>

                  <HStack justify="space-between" mb={1}>
                    <Text fontSize="xs" color="fg.muted">
                      Total Transfer
                    </Text>
                    <Text fontSize="sm" fontWeight="medium" color="fg">
                      {formatLargeNumber(payload[0].payload.totalTransfer, currency)}
                    </Text>
                  </HStack>

                  <HStack justify="space-between">
                    <Text fontSize="xs" color="fg.muted">
                      Total Burned
                    </Text>
                    <Text fontSize="sm" fontWeight="medium" color="warning.500">
                      {formatLargeNumber(payload[0].payload.totalBurned, currency)}
                    </Text>
                  </HStack>
                </>
              )}
            </Box>
          </VStack>
        </Card.Body>
      </Card.Root>
    );
  };

  // Function to calculate average collateral ratio from historical data
  const calculateAverageCollateral = (data: any[]) => {
    if (!data || data.length === 0) return 0;
    
    const validEntries = data.filter(entry => entry.circulation > 0 && entry.reserves > 0);
    if (validEntries.length === 0) return 0;
    
    const totalRatio = validEntries.reduce((sum, entry) => {
      return sum + (entry.reserves / entry.circulation * 100);
    }, 0);
    
    return Math.round(totalRatio / validEntries.length);
  };

  let periods = heartbeat == '1 hour' ? ['Hour', 'Day'] : ['Month', 'Year'];
  const [selected, setSelected] = useState(periods[0]);
  const [historicalDataChart, setHistoricalDataChart] = useState(
    historicalData1?.length ? historicalData1 : historicalData,
  );
  
  // Calculate average collateral properly from historical data
  const calculatedAvgCollateral = calculateAverageCollateral(historicalData);
  const calculatedAvgCollateral1 = calculateAverageCollateral(historicalData1);
  
  const [averageIndex, setAverageIndex] = useState(
    historicalData1?.length ? calculatedAvgCollateral1 : calculatedAvgCollateral
  );
  const [totalIssued, setTotalIssued] = useState(historicalData1?.length ? periodTotalTransfer1 : periodTotalTransfer);
  const [totalTransactions, setTotalTransactions] = useState(
    historicalData1?.length ? periodTransactions1 : periodTransactions,
  );

  const handlePeriod = () => {
    if (selected === periods[0]) {
      setSelected(periods[1]);
      setHistoricalDataChart(historicalData);
      setAverageIndex(calculatedAvgCollateral);
      setTotalIssued(periodTotalTransfer);
      setTotalTransactions(periodTransactions);
    } else {
      setHistoricalDataChart(historicalData1);
      setAverageIndex(calculatedAvgCollateral1);
      setTotalIssued(periodTotalTransfer1);
      setTotalTransactions(periodTransactions1);
      setSelected(periods[0]);
    }
  };

  return (
    <Box>
      <VStack align="stretch" gap={6}>
        <Flex justify="space-between" align="start" direction={{ base: 'column', md: 'row' }} gap={4}>
          <VStack align="start" gap={2} flex={1}>
            <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="fg">
              Historical Reserve Coverage
            </Text>
            <Text fontSize={{ base: "md", md: "xl" }} color="fg.muted" lineHeight="tall"h={{ base: "auto", md: "66px"}}>
              Track cumulative balances versus tokens issued over time. Use filters to explore data by a different
              period.
            </Text>
          </VStack>
          {historicalData1?.length ? (
            <ButtonGroup size="xs" attached variant="ghost">
              {periods.map((period) => (
                <Button
                  key={period}
                  onClick={handlePeriod}
                  colorPalette={selected === period ? 'brand' : 'gray'}
                  variant={selected === period ? 'solid' : 'subtle'}
                >
                  {period}
                </Button>
              ))}
            </ButtonGroup>
          ) : null}
        </Flex>

        {/* Key Metrics */}
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={{ base: 2, md: 4}}>
          <GridItem>
          <Card.Root size="sm" bg="whiteAlpha.500" _dark={{ bg: 'blackAlpha.50' }} borderWidth="1px">
              <Card.Body>
                <Stat.Root size="sm">
                  <Stat.Label fontSize="md" color="fg.muted">
                    Transaction volume
                  </Stat.Label>
                  <Stat.ValueText fontSize="xl" fontWeight="bold">
                  {formatLargeNumber(totalIssued | 0, currency === 'USD' ? '$' : 'R$')}
                  </Stat.ValueText>
                </Stat.Root>
              </Card.Body>
            </Card.Root>
          </GridItem>
          <GridItem>
          <Card.Root size="sm" bg="whiteAlpha.500" _dark={{ bg: 'blackAlpha.50' }} borderWidth="1px">
              <Card.Body>
                <Stat.Root size="sm">
                  <Stat.Label fontSize="md" color="fg.muted">
                    Number of transactions
                  </Stat.Label>
                  <Stat.ValueText fontSize="xl" fontWeight="bold">
                    {formatLargeNumber(totalTransactions | 0)}
                  </Stat.ValueText>
                </Stat.Root>
              </Card.Body>
            </Card.Root>
          </GridItem>
          <GridItem>
          <Card.Root size="sm" bg="whiteAlpha.500" _dark={{ bg: 'blackAlpha.50' }} borderWidth="1px">
            <Card.Body>
              <Stat.Root size="sm">
                    <Stat.Label fontSize="md" color="fg.muted">
                    Average collateral
                  </Stat.Label>
                  <Stat.ValueText fontSize="xl" fontWeight="bold" color={averageIndex > 100 ? 'success.500' : 'warning.500'}>
                    {averageIndex}%
                  </Stat.ValueText>
                </Stat.Root>
              </Card.Body>
            </Card.Root>
          </GridItem>
        </Grid>

        {/* Chart */}
        <Box h={240} w="full">
          <ResponsiveContainer width="100%" height="100%" minHeight="240px">
            <LineChart data={historicalDataChart} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} />
              <XAxis
                dataKey="Date"
                axisLine={false}
                tickLine={false}
                fontSize={12}
                tick={{ fill: useColorModeValue('var(--ff-colors-gray-600)', 'var(--ff-colors-gray-400)') }}
              />
              <YAxis
                domain={[
                  `dataMin - ${Math.max(historicalDataChart[0]?.circulation || 0, historicalDataChart[0]?.reserves || 0) * 2.5}`,
                  `dataMax + ${Math.min(historicalDataChart[0]?.circulation || 0, historicalDataChart[0]?.reserves || 0) * 1.5}`,
                ]}
                hide
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="reserves"
                stroke={colors.reserves}
                dot={false}
                strokeWidth={3}
                strokeLinecap="round"
              />
              <Line
                type="monotone"
                dataKey="circulation"
                stroke={colors.circulation}
                dot={false}
                strokeWidth={3}
                strokeLinecap="round"
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        {/* Enhanced Legend */}
        <Flex justify="center" gap={{ base: 4, md: 8 }} wrap="wrap">
          <HStack gap={2}>
            <Box w={3} h={3} rounded="full" bg={colors.circulation} shadow="sm" />
            <VStack align="start" gap={0}>
              <Text fontSize="xs" fontWeight="medium" color="fg">
                Circulating token supply
              </Text>
            </VStack>
          </HStack>

          <HStack gap={2}>
            <Box w={3} h={3} rounded="full" bg={colors.reserves} shadow="sm" />
            <VStack align="start" gap={0}>
              <Text fontSize="xs" fontWeight="medium" color="fg">
                Total Reserves
              </Text>
            </VStack>
          </HStack>
        </Flex>
      </VStack>
    </Box>
  );
}
