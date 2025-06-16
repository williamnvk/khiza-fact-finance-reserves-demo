import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { formatLargeNumber } from '@/lib/utils';
import { Box, VStack, Text, HStack } from '@chakra-ui/react';

export function BalancesChart({
  circulation,
  reserves,
  over,
  currency,
}: {
  circulation: number;
  reserves: number;
  over: number;
  currency: string;
}) {
  const data = [
    {
      name: 'Circulation',
      value: circulation,
    },
    {
      name: 'Reserves',
      cashFunds: reserves - over,
      cashBanks: over,
    },
  ];

  // Format for the tooltip
  const formatValue = (value: number) => `${currency}${value}`;

  // Custom tooltip with safety checks to avoid accessing undefined properties
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      if (payload[0].name === 'value') {
        return (
          <Box bg="white" border="1px" borderColor="gray.200" p={3} shadow="sm" rounded="md" _dark={{ bg: "gray.800", borderColor: "gray.600" }}>
            <Text fontSize="sm" fontWeight="medium">Circulation</Text>
            <Text fontSize="sm" color="blue.500">{formatLargeNumber(payload[0].value, currency)}</Text>
          </Box>
        );
      } else {
        // Safety check for the reserves data
        const cashFundsValue = payload[0]?.value || 0;
        const cashBanksValue = payload[1]?.value || 0;
        const totalReserves = cashFundsValue + cashBanksValue;

        return (
          <Box bg="white" border="1px" borderColor="gray.200" p={3} shadow="sm" rounded="md" _dark={{ bg: "gray.800", borderColor: "gray.600" }}>
            <Text fontSize="sm" fontWeight="medium">Reserves</Text>
            <Text fontSize="sm" color="blue.500">{formatLargeNumber(totalReserves, currency)}</Text>
            <Text fontSize="xs" color="gray.600" _dark={{ color: "gray.400" }} mt={1}>Funds: {formatLargeNumber(cashFundsValue, currency)}</Text>
            <Text fontSize="xs" color="gray.600" _dark={{ color: "gray.400" }}>
              Over collateral: {formatLargeNumber(cashBanksValue, currency)}
            </Text>
          </Box>
        );
      }
    }
    return null;
  };

  return (
    <Box bg="white" _dark={{ bg: "gray.800" }} p={6} shadow="sm" rounded="md">
      <VStack align="start" mb={5} gap={2}>
        <Text fontSize="2xl" fontWeight="bold">Current Balances</Text>
        <Text fontSize="sm" color="gray.400" _dark={{ color: "gray.500" }}>
          Displays the current circulation of issued tokens and their corresponding reserves. The bar also visualizes
          any excess reserve available for minting new tokens.
        </Text>
      </VStack>
      <Box flex="none">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 10 }} barCategoryGap="0%" barGap={0}>
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis
              tickFormatter={(value) => `${formatLargeNumber(value)}`}
              domain={[0, reserves + over]}
              ticks={[0, circulation, reserves]}
              width={90}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />

            <Bar dataKey="value" stackId="aligned" fill="hsl(var(--chart-navy))" radius={[8, 8, 0, 0]} barSize={150} />
            <Bar
              dataKey="cashFunds"
              stackId="aligned"
              fill="hsl(var(--chart-blue))"
              radius={[0, 0, 0, 0]}
              barSize={150}
            />
            <Bar
              dataKey="cashBanks"
              stackId="aligned"
              fill="hsl(var(--chart-light-blue))"
              radius={[8, 8, 0, 0]}
              barSize={150}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      <HStack gap={6} mt={4} justify="center" flexWrap="wrap">
        <HStack>
          <Box w={3} h={3} rounded="full" bg="var(--chart-navy)" />
          <Text fontSize="xs">Issued Tokens</Text>
        </HStack>
        <HStack>
          <Box w={3} h={3} rounded="full" bg="var(--chart-blue)" />
          <Text fontSize="xs">Collateral Reserve</Text>
        </HStack>
        <HStack>
          <Box w={3} h={3} rounded="full" bg="var(--chart-light-blue)" />
          <Text fontSize="xs">Over Collateral</Text>
        </HStack>
      </HStack>
    </Box>
  );
}
