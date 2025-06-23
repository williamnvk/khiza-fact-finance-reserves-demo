import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, Label } from 'recharts';
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
      name: 'Reserves',
      'Main Collateral': reserves - over,
      'Over-collateral': over,
      circulation: circulation,
    },
  ];

  // Chart colors that work for both light and dark modes
  const colors = {
    circulation: useColorModeValue('var(--ff-colors-brand-600)', 'var(--ff-colors-brand-400)'),
    reserves: useColorModeValue('var(--ff-colors-success-500)', 'var(--ff-colors-success-400)'),
    overCollateral: useColorModeValue('var(--ff-colors-warning-400)', 'var(--ff-colors-warning-300)'),
  };

  // Enhanced tooltip with better formatting and design
  const CustomTooltip = ({ active, payload }: any) => {
    if (!active || !payload || !payload.length) return null;

    const mainCollateral = payload[0].payload['Main Collateral'];
    const overCollateral = payload[0].payload['Over-collateral'];
    const totalReservesValue = mainCollateral + overCollateral;
    const circulationValue = payload[0].payload.circulation;

    return (
      <Card.Root borderWidth="1px" shadow="lg" p={4} maxW="320px" _dark={{ shadow: 'dark-lg' }}>
        <Card.Body p={0}>
          <VStack align="start" gap={1}>
            <Text fontSize="md" fontWeight="bold" color="fg">
              Reserves vs. Circulation
            </Text>

            {/* Reserves Section */}
            <VStack align="start" gap={2} w="full">
              <Box w="full">
                <HStack justify="space-between" mb={1}>
                  <HStack>
                    <Box w={2} h={2} rounded="full" bg={colors.reserves} />
                    <Text fontSize="xs" color="fg.muted">
                      Circulating Token Supply
                    </Text>
                  </HStack>
                  <Text fontSize="sm" fontWeight="medium" color={colors.reserves}>
                    {formatLargeNumber(mainCollateral, currency)}
                  </Text>
                </HStack>

                <HStack justify="space-between" mb={2}>
                  <HStack>
                    <Box w={2} h={2} rounded="full" bg={colors.overCollateral} />
                    <Text fontSize="xs" color="fg.muted">
                      Over-collateral
                    </Text>
                  </HStack>
                  <Text fontSize="sm" fontWeight="medium" color={colors.overCollateral}>
                    {formatLargeNumber(overCollateral, currency)}
                  </Text>
                </HStack>

                <Separator my={2} />

                <HStack justify="space-between">
                  <Text fontSize="sm" fontWeight="semibold" color="fg">
                    Total Reserves
                  </Text>
                  <Text fontSize="lg" fontWeight="bold" color="brand.500">
                    {formatLargeNumber(totalReservesValue, currency)}
                  </Text>
                </HStack>
              </Box>
            </VStack>

            <Separator />

            {/* Circulation Section */}
            <VStack align="start" gap={2} w="full">
              <HStack justify="space-between" w="full">
                <HStack>
                  <Box w={2} h={2} rounded="full" bg={colors.circulation} />
                  <Text fontSize="xs" color="fg.muted">
                    Circulation
                  </Text>
                </HStack>
                <Text fontSize="lg" fontWeight="bold" color={colors.circulation}>
                  {formatLargeNumber(circulationValue, currency)}
                </Text>
              </HStack>
              <Text fontSize="xs" color="fg.muted">
                Total of tokens issued on the blockchain
              </Text>
            </VStack>
          </VStack>
        </Card.Body>
      </Card.Root>
    );
  };

  return (
    <Box>
      <VStack align="stretch" gap={6}>
        <VStack align="start" gap={2} flex={1}>
          <Text fontSize="2xl" fontWeight="bold" color="fg">
            Current Balances
          </Text>
          <Text fontSize="sm" color="fg.muted" lineHeight="tall">
            Displays the current circulation of issued tokens and their corresponding reserves. The bar also visualizes
            any excess reserve available for minting new tokens.
          </Text>
        </VStack>

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
      <Box h={{ base: 200, md: 150 }} w="full" mt={8}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart layout="vertical" data={data} margin={{ top: 20, right: 60, left: 10, bottom: 20 }}>
            <XAxis
              type="number"
              domain={[0, Math.max(circulation, reserves) * 1.1]}
              tickFormatter={(value) => formatLargeNumber(value)}
              axisLine={false}
              tickLine={false}
              fontSize={10}
              color="var(--ff-colors-gray-500)"
              tick={{ fill: 'var(--ff-colors-gray-500)' }}
            />
            <YAxis type="category" dataKey="name" hide />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.05)' }} />

            <Bar
              dataKey="Main Collateral"
              stackId="a"
              fill={colors.reserves}
              barSize={60}
              radius={excessReserve > 0 ? [6, 0, 0, 6] : [6, 6, 6, 6]}
            />
            <Bar
              dataKey="Over-collateral"
              stackId="a"
              fill={colors.overCollateral}
              radius={excessReserve > 0 ? [0, 6, 6, 0] : [0, 0, 0, 0]}
              barSize={60}
            />

            <ReferenceLine x={circulation} stroke={colors.circulation} strokeWidth={3} strokeDasharray="8 0">
              <Label
                value="Circulating Token Supply"
                position="top"
                fill={useColorModeValue('gray.800', 'white')}
                fontSize={10}
                fontWeight="bold"
              />
            </ReferenceLine>
          </BarChart>
        </ResponsiveContainer>
      </Box>

      {/* Enhanced Legend */}
      <Flex justify="center" gap={{ base: 4, md: 8 }} wrap="wrap" mt={4}>
        <HStack gap={2}>
          <Box w={3} h={3} rounded="full" bg={colors.reserves} shadow="sm" />
          <VStack align="start" gap={0}>
            <Text fontSize="xs" fontWeight="medium" color="fg">
              Circulating Token Supply
            </Text>
          </VStack>
        </HStack>

        <HStack gap={2}>
          <Box w={3} h={3} rounded="full" bg={colors.overCollateral} shadow="sm" />
          <VStack align="start" gap={0}>
            <Text fontSize="xs" fontWeight="medium" color="fg">
              Total Reserves
            </Text>
          </VStack>
        </HStack>
      </Flex>
    </Box>
  );
}
