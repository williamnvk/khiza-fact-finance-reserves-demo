import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { useState } from 'react';
import { formatLargeNumber } from '@/lib/utils';
import { Box, VStack, Text, HStack, Button, ButtonGroup, Grid, GridItem } from '@chakra-ui/react';

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
  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <Box p={3} shadow="sm" rounded="md">
          <Text fontSize="sm" fontWeight="medium">
            Date {payload[0].payload.date}
          </Text>
          <Text fontSize="sm" color="blue.500">
            Collateral: {formatLargeNumber(payload[0].value, currency)}
          </Text>
          <Text fontSize="sm" color="cyan.500">
            Issued: {formatLargeNumber(payload[1].value, currency)}
          </Text>
          {payload[0].payload?.transactions > 0 ? (
            <>
              <Text fontSize="sm" color="cyan.600">
                Transactions: {payload[0].payload.transactions}
              </Text>
              <Text fontSize="sm" color="cyan.600">
                Transfer: {formatLargeNumber(payload[0].payload.totalTransfer, currency)}
              </Text>
              <Text fontSize="sm" color="cyan.600">
                Burned: {formatLargeNumber(payload[0].payload.totalBurned, currency)}
              </Text>
            </>
          ) : null}
        </Box>
      );
    }
    return null;
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
    <Box p={6} shadow="sm" rounded="md">
      <VStack align="stretch" gap={6}>
        <HStack justify="space-between" align="start">
          <VStack align="start" gap={2}>
            <Text fontSize="2xl" fontWeight="bold">
              Historical Reserve Coverage
            </Text>
            <Text fontSize="sm">
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
                  colorScheme={selected === period ? 'blue' : 'gray'}
                  variant={selected === period ? 'solid' : 'outline'}
                >
                  {period}
                </Button>
              ))}
            </ButtonGroup>
          ) : null}
        </HStack>

        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={4}>
          <GridItem>
            <Text fontSize="sm" fontWeight="medium">
              Issued
            </Text>
            <Text fontSize="lg" fontWeight="semibold">
              <Text as="span" fontSize="xs">
                {currency}
              </Text>
              {formatLargeNumber(totalIssued | 0)}
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="sm" fontWeight="medium">
              N. Transactions
            </Text>
            <Text fontSize="lg" fontWeight="semibold">
              {formatLargeNumber(totalTransactions | 0)}
            </Text>
          </GridItem>
          <GridItem>
                    <Text fontSize="sm" fontWeight="medium">
              Average Col.
            </Text>
            <Text fontSize="lg" fontWeight="semibold" color="blue.500">
              {averageIndex}
            </Text>
          </GridItem>
        </Grid>

        <Box>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={historicalDataChart} margin={{ top: 0, right: 10, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--secondary))" />
              <XAxis dataKey="Date" axisLine={false} tickLine={false} />
              <YAxis
                domain={[
                  `dataMin - ${Math.max(historicalDataChart[0]?.circulation || 0, historicalDataChart[0]?.reserves || 0) * 2.5}`,
                  `dataMax + ${Math.min(historicalDataChart[0]?.circulation || 0, historicalDataChart[0]?.reserves || 0) * 1.5}`,
                ]}
                hide
              />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="reserves" stroke="hsl(var(--primary))" dot={false} strokeWidth={2} />
              <Line
                type="monotone"
                dataKey="circulation"
                stroke="hsl(var(--chart-light-blue))"
                dot={false}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        <HStack gap={6} justify="center" flexWrap="wrap">
          <HStack>
            <Box h="2px" w={4} bg="var(--chart-light-blue)" />
            <Text fontSize="xs">Issued Tokens</Text>
          </HStack>
          <HStack>
            <Box h="2px" w={4} bg="var(--primary)" />
            <Text fontSize="xs">Collateral Reserves</Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
}
