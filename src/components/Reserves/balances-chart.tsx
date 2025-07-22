import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { formatLargeNumber } from '@/lib/utils';
import {
  Box,
  VStack,
  Text,
  HStack,
  Card,
  Flex,
  Stat,
  Badge,
  Icon,
  Grid,
  SimpleGrid,
  FormatNumber,
  Heading,
} from '@chakra-ui/react';
import { useColorModeValue } from '../ui/color-mode';
import { TrendingUp, Shield, Activity } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

type ChartView = 'stacked' | 'comparative' | 'ratio';

export function BalancesChart({
  circulation,
  reserves,
  currency,
}: {
  circulation: number;
  reserves: number;
  currency: string;
}) {
  const { t } = useI18n();
  // @ts-ignore
  const [chartView, setChartView] = useState<ChartView>('comparative');
  // @ts-ignore
  const [showDetails, setShowDetails] = useState(false);

  const totalReserves = reserves;
  const overCollateral = totalReserves - circulation;
  const mainCollateral = circulation;
  const excessReserve = overCollateral;
  const isOverCollateralized = totalReserves > circulation;
  const reserveUtilization = (circulation / totalReserves) * 100;

  // Enhanced color system with semantic meaning
  const colors = {
    circulation: useColorModeValue(`var(--ff-colors-brand-600)`, 'var(--ff-colors-brand-600)'), // Blue - represents demand/usage
    mainCollateral: useColorModeValue(`var(--ff-colors-brand-500)`, 'var(--ff-colors-brand-500)'), // Green - represents base security
    overCollateral: isOverCollateralized
      ? useColorModeValue(`var(--ff-colors-success-500)`, 'var(--ff-colors-success-500)')
      : useColorModeValue(`var(--ff-colors-warning-500)`, 'var(--ff-colors-warning-500)'), // Orange - represents excess security
    background: useColorModeValue(`var(--ff-colors-bg-subtle)`, 'var(--ff-colors-bg-subtle)'),
    border: useColorModeValue(`var(--ff-colors-border-subtle)`, 'var(--ff-colors-border-subtle)'),
    grid: useColorModeValue(`var(--ff-colors-bg-subtle)`, 'var(--ff-colors-bg-subtle)'),
    success: useColorModeValue(`var(--ff-colors-success-500)`, 'var(--ff-colors-success-500)'),
    warning: useColorModeValue(`var(--ff-colors-warning-500)`, 'var(--ff-colors-warning-500)'),
    danger: useColorModeValue(`var(--ff-colors-danger-500)`, 'var(--ff-colors-danger-500)'),
  };

  // Prepare data based on selected view
  const getChartData = () => {
    switch (chartView) {
      case 'stacked':
        return [
          {
            name: 'Current State',
            'Main Collateral': mainCollateral,
            'Over Collateral': overCollateral,
            Circulation: circulation,
          },
        ];
      case 'comparative':
        return [
          {
            name: 'Tokens in\nCirculation',
            Circulation: circulation,
            'Main Collateral': 0,
            'Over Collateral': 0,
          },
          {
            name: 'Collateral\nReserves',
            Circulation: 0,
            'Main Collateral': mainCollateral,
            'Over Collateral': overCollateral,
          },
        ];
      case 'ratio':
        return [
          {
            name: 'Reserve Ratio',
            'Available Reserve': totalReserves,
            'Used Reserve': circulation,
            Excess: Math.max(0, totalReserves - circulation),
          },
        ];
      default:
        return [];
    }
  };

  // Enhanced tooltip with comprehensive information
  const CustomTooltip = ({ active, payload }: any) => {
    if (!active || !payload || !payload.length) return null;

    return (
      <Card.Root borderWidth="1px" shadow="xl" p={4} maxW="360px" className="omit-from-print">
        <Card.Body p={0}>
          <VStack align="start" gap={3}>
            <Text fontSize="md" fontWeight="bold" color="fg">
              {t('reserves.components.balancesChart.tooltips.reserveAnalysis')}
            </Text>

            {chartView === 'comparative' && (
              <VStack align="start" gap={2} w="full">
                {payload.map((entry: any, index: number) => {
                  const value = entry.value;
                  const dataKey = entry.dataKey;
                  let description = '';
                  let icon = null;

                  switch (dataKey) {
                    case 'Main Collateral':
                      description = t('reserves.components.balancesChart.tooltips.primaryReserve');
                      icon = <Shield size={12} />;
                      break;
                    case 'Over Collateral':
                      description = isOverCollateralized ? t('reserves.components.balancesChart.tooltips.additionalBuffer') : t('reserves.components.balancesChart.tooltips.underCollateralized');
                      icon = <TrendingUp size={12} />;
                      break;
                    case 'Circulation':
                      description = t('reserves.components.balancesChart.tooltips.tokensInCirculation');
                      icon = <Activity size={12} />;
                      break;
                  }

                  // Skip entries with value 0
                  if (value === 0) return null;

                  return (
                    <HStack key={index} justify="space-between" w="full">
                      <HStack gap={2}>
                        <Box w={3} h={3} rounded="full" bg={entry.color} />
                        <Icon>{icon}</Icon>
                        <VStack align="start" gap={0}>
                          <Text fontSize="xs" fontWeight="medium" color="fg">
                            {dataKey === 'Over Collateral' && !isOverCollateralized ? 'Under Collateral' : dataKey}
                          </Text>
                          <Text fontSize="xs" color="fg.muted">
                            {description}
                          </Text>
                        </VStack>
                      </HStack>
                      <Text fontSize="sm" fontWeight="bold" color={entry.color}>
                        {dataKey === 'Main Collateral' ? (
                          <FormatNumber value={totalReserves} style="currency" currency="USD" />
                        ) : (
                          <FormatNumber value={value} style="currency" currency="USD" />
                        )}
                      </Text>
                    </HStack>
                  );
                })}

                {/* <HStack justify="space-between" w="full" borderTopWidth={1} mt={2} pt={4}>
                  <HStack gap={2}>
                    <Box w={3} h={3} rounded="full" /> <Icon as={Shield} />
                    <VStack align="start" gap={0}>
                      <Text fontSize="xs" fontWeight="medium" color="fg">
                        Collateral
                      </Text>
                    </VStack>
                  </HStack>
                  <Text fontSize="sm" fontWeight="bold" color="fg">
                    <FormatNumber value={totalReserves} style="currency" currency={currency} />
                  </Text>
                </HStack> */}
              </VStack>
            )}
          </VStack>
        </Card.Body>
      </Card.Root>
    );
  };

  // Risk assessment component
  // const RiskAssessment = () => {
  //   const riskLevel = collateralizationRatio < 100 ? 'high' : collateralizationRatio < 120 ? 'medium' : 'low';

  //   const riskColor = riskLevel === 'high' ? 'red' : riskLevel === 'medium' ? 'orange' : 'green';

  //   return (
  //     <Card.Root size="sm" borderColor={`${riskColor}.200`} borderWidth="2px">
  //       <Card.Body>
  //         <VStack align="start" gap={2}>
  //           <HStack gap={2}>
  //             <Icon color={`${riskColor}.500`}>
  //               {riskLevel === 'high' ? (
  //                 <AlertTriangle size={16} />
  //               ) : riskLevel === 'medium' ? (
  //                 <Info size={16} />
  //               ) : (
  //                 <Shield size={16} />
  //               )}
  //             </Icon>
  //             <Text fontSize="sm" fontWeight="semibold" color={`${riskColor}.600`}>
  //               {riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)} Risk
  //             </Text>
  //           </HStack>
  //           <Text fontSize="xs" color="fg.muted">
  //             {riskLevel === 'high' && 'Under-collateralized. Immediate action required.'}
  //             {riskLevel === 'medium' && 'Moderate collateralization. Monitor closely.'}
  //             {riskLevel === 'low' && 'Well-collateralized. System is stable.'}
  //           </Text>
  //         </VStack>
  //       </Card.Body>
  //     </Card.Root>
  //   );
  // };

  return (
    <Box className="break-page">
      <VStack align="stretch" gap={6}>
        {/* Header Section */}
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
          align={{ base: 'start', lg: 'center' }}
          gap={4}
        >
          <VStack align="start" gap={2} flex={1}>
            <Flex w="full" justify="space-between" align="center">
              <Heading fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="fg">
                {t('reserves.components.balancesChart.title')}
              </Heading>

              {/* <ButtonGroup size="xs" attached gap={0} colorPalette="brand">
                <Button
                  variant={chartView === 'comparative' ? 'solid' : 'plain'}
                  onClick={() => setChartView('comparative')}
                >
                  <Icon>
                    <PieChart size={14} />
                  </Icon>
                  Compare
                </Button>
                <Button variant={chartView === 'stacked' ? 'solid' : 'plain'} onClick={() => setChartView('stacked')}>
                  <Icon>
                    <BarChart3 size={14} />
                  </Icon>
                  Stacked
                </Button>

                <Button variant={chartView === 'ratio' ? 'solid' : 'plain'} onClick={() => setChartView('ratio')}>
                  <Icon>
                    <Activity size={14} />
                  </Icon>
                  Ratio
                </Button>
              </ButtonGroup> */}
            </Flex>

            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              color="fg.muted"
              lineHeight="tall"
              h={{ base: 'auto', md: '66px' }}
            >
              {t('reserves.components.balancesChart.subtitle')}
            </Text>
          </VStack>
        </Flex>

        {/* Key Metrics Grid */}
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)', lg: 'repeat(3, 1fr)' }} gap={{ base: 2, md: 4 }}>
          <Card.Root size="sm" bg="whiteAlpha.500" _dark={{ bg: 'blackAlpha.50' }} borderWidth="1px">
            <Card.Body>
              <Stat.Root size="sm">
                <Stat.Label fontSize="md" color="fg.muted">
                  {t('reserves.components.balancesChart.totalInCirculation')}
                </Stat.Label>
                <Stat.ValueText fontSize="xl" fontWeight="bold">
                  <FormatNumber value={circulation} style="currency" currency={currency} />
                </Stat.ValueText>
              </Stat.Root>
            </Card.Body>
          </Card.Root>

          <Card.Root size="sm" bg="whiteAlpha.500" _dark={{ bg: 'blackAlpha.50' }} borderWidth="1px">
            <Card.Body>
              <Stat.Root size="sm">
                <Stat.Label fontSize="md" color="fg.muted">
                  {t('reserves.components.balancesChart.totalCollateral')}
                </Stat.Label>
                <Stat.ValueText fontSize="xl" fontWeight="bold">
                  <FormatNumber value={totalReserves} style="currency" currency={currency} />
                </Stat.ValueText>
              </Stat.Root>
            </Card.Body>
          </Card.Root>

          <Card.Root size="sm" bg="whiteAlpha.500" _dark={{ bg: 'blackAlpha.50' }} borderWidth="1px">
            <Card.Body>
              <Stat.Root size="sm">
                <Stat.Label fontSize="md" color="fg.muted">
                  {isOverCollateralized ? t('reserves.components.balancesChart.overCollateral') : t('reserves.components.balancesChart.underCollateral')}
                </Stat.Label>
                <Stat.ValueText
                  fontSize="xl"
                  fontWeight="bold"
                  color={isOverCollateralized ? 'success.500' : 'warning.500'}
                >
                  <FormatNumber value={overCollateral} style="currency" currency={currency} />
                </Stat.ValueText>
              </Stat.Root>
            </Card.Body>
          </Card.Root>
          {/* <RiskAssessment /> */}
        </Grid>

        <VStack gap={4}>
          {/* Chart Container */}
          <Box h={240} w="full">
            <ResponsiveContainer width="100%" height="100%">
              {chartView === 'stacked' ? (
                <BarChart data={getChartData()} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 12, fill: useColorModeValue('#64748B', '#94A3B8') }}
                  />
                  <YAxis
                    tickFormatter={(value) => formatLargeNumber(value)}
                    tick={{ fontSize: 12, fill: useColorModeValue('#64748B', '#94A3B8') }}
                    axisLine={false}
                    tickLine={false}
                    width={80}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <ReferenceLine
                    y={circulation}
                    stroke={colors.circulation}
                    strokeDasharray="5 5"
                    label={{ value: 'Circulation Level', position: 'insideBottomRight' }}
                  />

                  <Bar
                    dataKey="Main Collateral"
                    stackId="reserves"
                    fill={colors.mainCollateral}
                    radius={[0, 0, 8, 8]}
                    name="Main Collateral"
                    maxBarSize={240}
                  />
                  <Bar
                    dataKey="Over Collateral"
                    stackId="reserves"
                    fill={colors.overCollateral}
                    radius={[8, 8, 0, 0]}
                    name="Over Collateral"
                    maxBarSize={240}
                  />
                </BarChart>
              ) : chartView === 'comparative' ? (
                <BarChart data={getChartData()} margin={{ top: 0, right: 20, left: 0, bottom: 20 }}>
                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 12, fill: useColorModeValue('#64748B', '#94A3B8') }}
                  />
                  <YAxis
                    tickFormatter={(value) => formatLargeNumber(value)}
                    tick={{ fontSize: 12, fill: useColorModeValue('#64748B', '#94A3B8') }}
                    axisLine={false}
                    tickLine={false}
                    width={80}
                  />
                  <Tooltip cursor={false} content={<CustomTooltip />} />

                  <Bar
                    dataKey="Circulation"
                    stackId="stack"
                    fill={colors.circulation}
                    radius={8}
                    name="Circulation"
                    maxBarSize={120}
                  />
                  <Bar
                    dataKey="Main Collateral"
                    stackId="stack"
                    fill={colors.mainCollateral}
                    radius={isOverCollateralized ? [0, 0, 8, 8] : [8, 8, 8, 8]}
                    name="Main Collateral"
                    maxBarSize={120}
                  />
                  <Bar
                    dataKey="Over Collateral"
                    stackId="stack"
                    fill={colors.overCollateral}
                    radius={isOverCollateralized ? [8, 8, 0, 0] : [0, 0, 8, 8]}
                    name={isOverCollateralized ? 'Over Collateral' : 'Under Collateral'}
                    maxBarSize={120}
                  />
                </BarChart>
              ) : (
                <BarChart data={getChartData()} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 12, fill: useColorModeValue('#64748B', '#94A3B8') }}
                  />
                  <YAxis
                    tickFormatter={(value) => formatLargeNumber(value)}
                    tick={{ fontSize: 12, fill: useColorModeValue('#64748B', '#94A3B8') }}
                    axisLine={false}
                    tickLine={false}
                    width={80}
                  />
                  <Tooltip content={<CustomTooltip />} />

                  <Bar dataKey="Used Reserve" stackId="ratio" fill={colors.circulation} radius={[0, 0, 8, 8]} />
                  <Bar dataKey="Excess" stackId="ratio" fill={colors.overCollateral} radius={[8, 8, 0, 0]} />
                </BarChart>
              )}
            </ResponsiveContainer>
          </Box>

          {/* Enhanced Legend */}
          <Flex justify="center" gap={6} wrap="wrap" mt={2}>
            <HStack gap={2}>
              <Box w={3} h={3} rounded="full" bg={colors.mainCollateral} />
              <Text fontSize="xs" fontWeight="medium" color="fg">
                {t('reserves.components.balancesChart.legend.mainCollateral')}
              </Text>
              {/* <Badge size="sm" variant="subtle" colorPalette="green">
                    <FormatNumber value={mainCollateral} style="currency" currency="USD" />
                  </Badge> */}
            </HStack>

            <HStack gap={2}>
              <Box w={3} h={3} rounded="full" bg={colors.overCollateral} />
              <Text fontSize="xs" fontWeight="medium" color="fg">
                {isOverCollateralized ? t('reserves.components.balancesChart.legend.overCollateral') : t('reserves.components.balancesChart.legend.underCollateral')}
              </Text>
              {/* <Badge size="sm" variant="subtle" colorPalette="orange">
                    <FormatNumber value={overCollateral} style="currency" currency="USD" />
                  </Badge> */}
            </HStack>

            <HStack gap={2}>
              <Box w={3} h={3} rounded="full" bg={colors.circulation} />
              <Text fontSize="xs" fontWeight="medium" color="fg">
                {t('reserves.components.balancesChart.legend.circulation')}
              </Text>
              {/* <Badge size="sm" variant="subtle" colorPalette="blue">
                    <FormatNumber value={circulation} style="currency" currency="USD" />
                  </Badge> */}
            </HStack>
          </Flex>

          {/* Detailed Analysis */}
          {showDetails && (
            <Card.Root mt={6} borderWidth="1px" bg="bg.subtle" w="full">
              <Card.Body pt={6}>
                <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6} w="full">
                  <VStack align="start" gap={4}>
                    <HStack align="center" gap={2}>
                      <Icon color="success.500">
                        <Shield size={14} />
                      </Icon>
                      <Text fontSize="sm" fontWeight="semibold" color="fg">
                        Reserve Breakdown
                      </Text>
                    </HStack>

                    <VStack align="start" gap={3} w="full">
                      <Flex justify="space-between" w="full" align="center">
                        <Text fontSize="xs" color="fg.muted">
                          Total Reserves
                        </Text>
                        <Text fontSize="sm" fontWeight="medium" color="fg">
                          <FormatNumber value={totalReserves} style="currency" currency="USD" />
                        </Text>
                      </Flex>

                      <Flex justify="space-between" w="full" align="center">
                        <Text fontSize="xs" color="fg.muted">
                          Reserve Coverage
                        </Text>
                        <Badge size="sm" variant="subtle" colorPalette={isOverCollateralized ? 'success' : 'warning'}>
                          {((totalReserves / circulation) * 100).toFixed(1)}%
                        </Badge>
                      </Flex>

                      <Flex justify="space-between" w="full" align="center">
                        <Text fontSize="xs" color="fg.muted">
                          Safety Buffer
                        </Text>
                        <Text fontSize="sm" fontWeight="medium" color="success.500">
                          <FormatNumber value={overCollateral} style="currency" currency="USD" />
                        </Text>
                      </Flex>
                    </VStack>
                  </VStack>

                  <VStack align="start" gap={4} mt={-1}>
                    <HStack align="center" gap={2}>
                      <Icon color="brand.500">
                        <Activity size={14} />
                      </Icon>
                      <Text fontSize="sm" fontWeight="semibold" color="fg">
                        Circulation Metrics
                      </Text>
                    </HStack>

                    <VStack align="start" gap={3} w="full">
                      <Flex justify="space-between" w="full" align="center">
                        <Text fontSize="xs" color="fg.muted">
                          Active Circulation
                        </Text>
                        <Text fontSize="sm" fontWeight="medium" color="fg">
                          <FormatNumber value={circulation} style="currency" currency="USD" />
                        </Text>
                      </Flex>

                      <Flex justify="space-between" w="full" align="center">
                        <Text fontSize="xs" color="fg.muted">
                          Mintable Amount
                        </Text>
                        <Text fontSize="sm" fontWeight="medium" color="warning.500">
                          <FormatNumber value={Math.max(0, excessReserve)} style="currency" currency="USD" />
                        </Text>
                      </Flex>

                      <Flex justify="space-between" w="full" align="center">
                        <Text fontSize="xs" color="fg.muted">
                          Utilization Rate
                        </Text>
                        <Badge size="sm" variant="outline" colorPalette="brand">
                          {reserveUtilization.toFixed(1)}%
                        </Badge>
                      </Flex>
                    </VStack>
                  </VStack>
                </SimpleGrid>
              </Card.Body>
            </Card.Root>
          )}
        </VStack>
      </VStack>
    </Box>
  );
}
