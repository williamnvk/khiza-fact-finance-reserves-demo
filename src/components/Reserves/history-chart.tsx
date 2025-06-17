import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { useState } from 'react';
import { formatLargeNumber } from '@/lib/utils';
import { Box, VStack, Text, HStack, Button, ButtonGroup, Grid, GridItem, Card, Flex, Stat, Separator } from '@chakra-ui/react';
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
  currency = '$',
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

  let periods = heartbeat == '1 hour' ? ['Hour', 'Day'] : ['Month', 'Year'];
  const [selected, setSelected] = useState(periods[0]);
  const [historicalDataChart, setHistoricalDataChart] = useState(
    historicalData1?.length ? historicalData1 : historicalData,
  );
  const [averageIndex, setAverageIndex] = useState(historicalData1?.length ? avgcolateral1 : avgcolateral);
  const [totalIssued, setTotalIssued] = useState(historicalData1?.length ? periodTotalTransfer1 : periodTotalTransfer);
  const [totalTransactions, setTotalTransactions] = useState(
    historicalData1?.length ? periodTransactions1 : periodTransactions,
  );

  const handlePeriod = () => {
    if (selected === periods[0]) {
      setSelected(periods[1]);
      setHistoricalDataChart(historicalData);
      setAverageIndex(avgcolateral);
      setTotalIssued(periodTotalTransfer);
      setTotalTransactions(periodTransactions);
    } else {
      setHistoricalDataChart(historicalData1);
      setAverageIndex(avgcolateral1);
      setTotalIssued(periodTotalTransfer1);
      setTotalTransactions(periodTransactions1);
      setSelected(periods[0]);
    }
  };

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
    >
      <VStack align="stretch" gap={6}>
        <Flex justify="space-between" align="start" direction={{ base: 'column', md: 'row' }} gap={4}>
          <VStack align="start" gap={2} flex={1}>
            <Text fontSize="2xl" fontWeight="bold" color="fg">
              Historical Reserve Coverage
            </Text>
            <Text fontSize="sm" color="fg.muted" lineHeight="tall">
              Track cumulative balances versus tokens issued over time. Use filters to explore data by a different
              period.
            </Text>
          </VStack>
          {historicalData1?.length ? (
            <ButtonGroup size="sm" attached variant="outline">
              {periods.map((period) => (
                <Button
                  key={period}
                  onClick={handlePeriod}
                  colorPalette={selected === period ? 'brand' : 'gray'}
                  variant={selected === period ? 'solid' : 'outline'}
                >
                  {period}
                </Button>
              ))}
            </ButtonGroup>
          ) : null}
        </Flex>

        {/* Key Metrics */}
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={4}>
          <GridItem>
            <Box p={4} bg="whiteAlpha.50" borderRadius="lg" borderWidth="1px">
              <Stat.Root size="sm">
                <Stat.Label fontSize="xs" color="fg.muted">
                  Total Issued
                </Stat.Label>
                <Stat.ValueText fontSize="lg" fontWeight="bold" color="brand.500">
                  <Text as="span" fontSize="xs" color="fg.muted">
                    {currency}
                  </Text>
                  {formatLargeNumber(totalIssued | 0)}
                </Stat.ValueText>
                <Stat.HelpText fontSize="xs" color="fg.muted">
                  Tokens in circulation
                </Stat.HelpText>
              </Stat.Root>
            </Box>
          </GridItem>
          <GridItem>
            <Box p={4} bg="whiteAlpha.50" borderRadius="lg" borderWidth="1px">
              <Stat.Root size="sm">
                <Stat.Label fontSize="xs" color="fg.muted">
                  Total Transactions
                </Stat.Label>
                <Stat.ValueText fontSize="lg" fontWeight="bold" color="success.500">
                  {formatLargeNumber(totalTransactions | 0)}
                </Stat.ValueText>
                <Stat.HelpText fontSize="xs" color="fg.muted">
                  Network activity
                </Stat.HelpText>
              </Stat.Root>
            </Box>
          </GridItem>
          <GridItem>
            <Box p={4} bg="whiteAlpha.50" borderRadius="lg" borderWidth="1px">
              <Stat.Root size="sm">
                <Stat.Label fontSize="xs" color="fg.muted">
                  Average Collateral
                </Stat.Label>
                <Stat.ValueText fontSize="lg" fontWeight="bold" color="cyan.500">
                  {averageIndex}
                </Stat.ValueText>
                <Stat.HelpText fontSize="xs" color="fg.muted">
                  Coverage ratio
                </Stat.HelpText>
              </Stat.Root>
            </Box>
          </GridItem>
        </Grid>

        {/* Chart */}
        <Box h={300} w="full">
          <ResponsiveContainer width="100%" height="100%" minHeight="280px">
            <LineChart data={historicalDataChart} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
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
                Issued Tokens
              </Text>
              <Text fontSize="xs" color="fg.muted">
                Tokens in circulation
              </Text>
            </VStack>
          </HStack>

          <HStack gap={2}>
            <Box w={3} h={3} rounded="full" bg={colors.reserves} shadow="sm" />
            <VStack align="start" gap={0}>
              <Text fontSize="xs" fontWeight="medium" color="fg">
                Collateral Reserves
              </Text>
              <Text fontSize="xs" color="fg.muted">
                Backing collateral
              </Text>
            </VStack>
          </HStack>
        </Flex>
      </VStack>
    </Box>
  );
}
