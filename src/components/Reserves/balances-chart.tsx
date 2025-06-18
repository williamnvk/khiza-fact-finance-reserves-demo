import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { formatLargeNumber } from '@/lib/utils';
import { Box, VStack, Text, HStack, Card, Flex, Stat, Progress, Separator } from '@chakra-ui/react';
import { useColorModeValue } from '../ui/color-mode';

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
  const totalReserves = reserves + over;
  const collateralizationRatio = (totalReserves / circulation) * 100;
  const excessReserve = totalReserves - circulation;
  const isOverCollateralized = totalReserves > circulation;

  const data = [
    {
      name: 'Tokens\nIn Circulation',
      circulation: circulation,
      isEmpty: false,
    },
    {
      name: 'Reserves\nAvailable',
      reserves: reserves - over,
      overCollateral: over,
      isEmpty: false,
    },
  ];

  // Chart colors that work for both light and dark modes
  const colors = {
    circulation: useColorModeValue('var(--ff-colors-brand-600)', 'var(--ff-colors-brand-400)'),
    reserves: useColorModeValue('var(--ff-colors-success-500)', 'var(--ff-colors-success-400)'),
    overCollateral: useColorModeValue('var(--ff-colors-warning-400)', 'var(--ff-colors-warning-300)'),
  };

  // Enhanced tooltip with better formatting and design
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload || !payload.length) return null;

    const isCirculation = label?.includes('Tokens');

    return (
      <Card.Root borderWidth="1px" shadow="lg" p={4} maxW="280px" _dark={{ shadow: 'dark-lg' }}>
        <Card.Body p={0}>
          {isCirculation ? (
            <VStack align="start" gap={2}>
              <Text fontSize="sm" fontWeight="semibold" color="fg">
                Tokens in Circulation
              </Text>
              <Text fontSize="lg" fontWeight="bold" color={colors.circulation}>
                {formatLargeNumber(payload[0].value, currency)}
              </Text>
              <Text fontSize="xs" color="fg.muted">
                Total of tokens issued on the blockchain
              </Text>
            </VStack>
          ) : (
            <VStack align="start" gap={3}>
              <Text fontSize="sm" fontWeight="semibold" color="fg">
                Total Reserves
              </Text>

              <Box w="full">
                <HStack justify="space-between" mb={1}>
                  <Text fontSize="xs" color="fg.muted">
                    Main Collateral
                  </Text>
                  <Text fontSize="sm" fontWeight="medium" color={colors.reserves}>
                    {formatLargeNumber(payload[0]?.value || 0, currency)}
                  </Text>
                </HStack>

                <HStack justify="space-between" mb={2}>
                  <Text fontSize="xs" color="fg.muted">
                    Over-collateral
                  </Text>
                  <Text fontSize="sm" fontWeight="medium" color={colors.overCollateral}>
                    {formatLargeNumber(payload[1]?.value || 0, currency)}
                  </Text>
                </HStack>

                <Separator my={2} />

                <HStack justify="space-between">
                  <Text fontSize="sm" fontWeight="semibold" color="fg">
                    Total
                  </Text>
                  <Text fontSize="lg" fontWeight="bold" color="brand.500">
                    {formatLargeNumber((payload[0]?.value || 0) + (payload[1]?.value || 0), currency)}
                  </Text>
                </HStack>
              </Box>
            </VStack>
          )}
        </Card.Body>
      </Card.Root>
    );
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
      <VStack align="start" gap={3} w="full">
        <Box>
          <Text fontSize="2xl" fontWeight="bold" color="fg" mb={1}>
            Current Balances
          </Text>
          <Text fontSize="sm" color="fg.muted" lineHeight="tall">
            Displays the current circulation of issued tokens and their corresponding reserves. The bar also visualizes
            any excess reserve available for minting new tokens.
          </Text>
        </Box>

        {/* Key Metrics */}
        <Flex direction={{ base: 'column', md: 'row' }} gap={4} w="full">
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
              <Stat.Root size="sm">
                <Stat.Label fontSize="xs" color="fg.muted">
                  Collateralization Ratio
                </Stat.Label>
                <Stat.ValueText fontSize="lg" fontWeight="bold">
                  {collateralizationRatio.toFixed(1)}%{' '}
                </Stat.ValueText>
                <Stat.HelpText color="fg.muted" fontSize="xs">
                  {isOverCollateralized ? 'Over-collateralized' : 'Under-collateralized'}
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
              <Stat.Root size="sm">
                <Stat.Label fontSize="xs" color="fg.muted">
                  Excess Reserve
                </Stat.Label>
                <Stat.ValueText
                  fontSize="lg"
                  fontWeight="bold"
                  color={excessReserve > 0 ? 'success.500' : 'warning.500'}
                >
                  {formatLargeNumber(excessReserve, currency)}
                </Stat.ValueText>
                <Stat.HelpText color="fg.muted" fontSize="xs">
                  {excessReserve > 0 ? 'Available for minting' : 'Reserve deficit'}
                </Stat.HelpText>
              </Stat.Root>
            </Card.Body>
          </Card.Root>
        </Flex>
      </VStack>

      {/* Chart */}
      <Box h={300} w="full">
        <ResponsiveContainer width="100%" height="100%" minHeight="280px">
          <BarChart data={data} margin={{ top: 40, right: 20, left: 20, bottom: 40 }} barCategoryGap="0%">
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              fontSize={12}
              color="var(--ff-colors-gray-500)"
              tick={{ fill: 'var(--ff-colors-gray-500)' }}
              tickMargin={20}
              interval={0}
            />
            <YAxis
              tickFormatter={(value) => formatLargeNumber(value)}
              domain={[0, Math.max(circulation, totalReserves) * 1.1]}
              axisLine={false}
              tickLine={false}
              fontSize={12}
              color="var(--ff-colors-gray-500)"
              tick={{ fill: 'var(--ff-colors-gray-500)' }}
              width={80}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'black', fillOpacity: 0.1 }} />

            {/* Circulation bar */}
            <Bar dataKey="circulation" stackId="a" fill={colors.circulation} radius={[6, 6, 6, 6]} maxBarSize={120} />

            {/* Reserves bars */}
            <Bar dataKey="reserves" stackId="b" fill={colors.reserves} radius={[0, 0, 6, 6]} maxBarSize={120} />
            <Bar
              dataKey="overCollateral"
              stackId="b"
              fill={colors.overCollateral}
              radius={[6, 6, 0, 0]}
              maxBarSize={120}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      {/* Enhanced Legend */}
      <Flex justify="center" gap={{ base: 4, md: 8 }} wrap="wrap">
        <HStack gap={2}>
          <Box w={3} h={3} rounded="full" bg={colors.circulation} shadow="sm" />
          <VStack align="start" gap={0}>
            <Text fontSize="xs" fontWeight="medium" color="fg">
              Tokens in Circulation
            </Text>
            <Text fontSize="xs" color="fg.muted">
              {formatLargeNumber(circulation, currency)}
            </Text>
          </VStack>
        </HStack>

        <HStack gap={2}>
          <Box w={3} h={3} rounded="full" bg={colors.reserves} shadow="sm" />
          <VStack align="start" gap={0}>
            <Text fontSize="xs" fontWeight="medium" color="fg">
              Main Collateral
            </Text>
            <Text fontSize="xs" color="fg.muted">
              {formatLargeNumber(reserves - over, currency)}
            </Text>
          </VStack>
        </HStack>

        <HStack gap={2}>
          <Box w={3} h={3} rounded="full" bg={colors.overCollateral} shadow="sm" />
          <VStack align="start" gap={0}>
            <Text fontSize="xs" fontWeight="medium" color="fg">
              Over-collateral
            </Text>
            <Text fontSize="xs" color="fg.muted">
              {formatLargeNumber(over, currency)}
            </Text>
          </VStack>
        </HStack>
      </Flex>
    </Box>
  );
}
