import { formatLargeNumber } from '@/lib/utils';
import { useState } from 'react';
import {
  Box,
  VStack,
  Text,
  Grid,
  GridItem,
  HStack,
  Flex,
  Stat,
  Card,
  Badge,
  FormatNumber,
  ColorSwatch,
  ButtonGroup,
  Button,
  Separator,
  Progress,
  Stack,
} from '@chakra-ui/react';
import { useColorModeValue } from '../ui/color-mode';
// import { Chart, useChart } from '@chakra-ui/charts'; // Will be used for future enhancements
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

type ViewMode = 'overview' | 'distribution' | 'trends';

export function ReservesBreakdown({
  reserves,
  issued,
  balance,
  assetDistribution,
  currency,
  companyName,
}: {
  reserves: number;
  issued: number;
  balance: number;
  assetDistribution: any[];
  currency: string;
  companyName: string;
}) {
  const [viewMode, setViewMode] = useState<ViewMode>('overview');

  // Enhanced asset colors with better accessibility
  const assetColors = {
    cash: useColorModeValue('#10B981', '#34D399'), // Green
    securities: useColorModeValue('#3B82F6', '#60A5FA'), // Blue
    crypto: useColorModeValue('#8B5CF6', '#A78BFA'), // Purple
    bonds: useColorModeValue('#F59E0B', '#FBBF24'), // Orange
    commodities: useColorModeValue('#EF4444', '#F87171'), // Red
    real_estate: useColorModeValue('#06B6D4', '#22D3EE'), // Cyan
    other: useColorModeValue('#6B7280', '#9CA3AF'), // Gray
  };

  // Calculate key metrics
  const collateralizationRatio = (reserves / issued) * 100;
  const balanceRatio = (Math.abs(balance) / reserves) * 100;
  const isOverCollateralized = reserves > issued;

  // Prepare chart data
  const chartData = assetDistribution.map((asset, index) => ({
    ...asset,
    percentage: ((asset.value / reserves) * 100).toFixed(1),
    color: assetColors[asset.type as keyof typeof assetColors] || assetColors.other,
  }));

  // Chart configuration will be implemented when Chart component is available

  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload }: any) => {
    if (!active || !payload || !payload.length) return null;

    const data = payload[0].payload;
    return (
      <Card.Root borderWidth="1px" shadow="lg" p={3} maxW="280px">
        <Card.Body p={0}>
          <VStack align="start" gap={2}>
            <HStack gap={2}>
              <ColorSwatch boxSize="3" value={data.color} />
              <Text fontSize="sm" fontWeight="semibold">
                {data.name}
              </Text>
            </HStack>
            <Separator />
            <HStack justify="space-between" w="full">
              <Text fontSize="xs" color="fg.muted">
                Value:
              </Text>
              <Text fontSize="sm" fontWeight="medium">
                <FormatNumber value={data.value} style="currency" currency="USD" />
              </Text>
            </HStack>
            <HStack justify="space-between" w="full">
              <Text fontSize="xs" color="fg.muted">
                Percentage:
              </Text>
              <Text fontSize="sm" fontWeight="medium">
                {data.percentage}%
              </Text>
            </HStack>
          </VStack>
        </Card.Body>
      </Card.Root>
    );
  };

  const renderOverviewMode = () => (
    <>
      {/* Enhanced Key Metrics */}
      <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={4}>
        <GridItem>
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
                  Total Reserves<sup>4</sup>
                </Stat.Label>
                <Stat.ValueText fontSize="xl" fontWeight="bold" color="success.500">
                  <FormatNumber value={reserves} style="currency" currency="USD" notation="compact" />
                </Stat.ValueText>
                <Stat.HelpText fontSize="xs" color="fg.muted">
                  Fully Backed
                </Stat.HelpText>
              </Stat.Root>
            </Card.Body>
          </Card.Root>
        </GridItem>

        <GridItem>
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
                  Tokens Issued<sup>5</sup>
                </Stat.Label>
                <Stat.ValueText fontSize="xl" fontWeight="bold" color="brand.500">
                  <FormatNumber value={issued} style="currency" currency="USD" notation="compact" />
                </Stat.ValueText>
                <Stat.HelpText fontSize="xs" color="fg.muted">
                  In Circulation
                </Stat.HelpText>
              </Stat.Root>
            </Card.Body>
          </Card.Root>
        </GridItem>

        <GridItem>
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
                  Available Balance<sup>6</sup>
                </Stat.Label>
                <Stat.ValueText fontSize="xl" fontWeight="bold" color={balance >= 0 ? 'success.500' : 'error.500'}>
                  <FormatNumber value={Math.abs(balance)} style="currency" currency="USD" notation="compact" />
                </Stat.ValueText>
                <Stat.HelpText fontSize="xs" color="fg.muted">
                  {balance >= 0 ? 'Surplus' : 'Deficit'}
                </Stat.HelpText>
              </Stat.Root>
            </Card.Body>
          </Card.Root>
        </GridItem>

        <GridItem>
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
                  Collateral Ratio
                </Stat.Label>
                <Stat.ValueText
                  fontSize="xl"
                  fontWeight="bold"
                  color={isOverCollateralized ? 'success.500' : 'error.500'}
                >
                  <FormatNumber value={collateralizationRatio} style="percent" maximumFractionDigits={1} />
                </Stat.ValueText>
                <Stat.HelpText fontSize="xs" color="fg.muted">
                  {isOverCollateralized ? 'Over-collateralized' : 'Under-collateralized'}
                </Stat.HelpText>
              </Stat.Root>
            </Card.Body>
          </Card.Root>
        </GridItem>
      </Grid>

      {/* Collateralization Progress */}
      <Card.Root>
        <Card.Body>
          <VStack align="stretch" gap={4}>
            <HStack justify="space-between">
              <Text fontSize="lg" fontWeight="semibold">
                Reserve Health
              </Text>
              <Badge colorPalette={collateralizationRatio >= 100 ? 'success' : 'error'}>
                {collateralizationRatio >= 100 ? 'Healthy' : 'Needs Attention'}
              </Badge>
            </HStack>

            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
              <GridItem>
                <VStack align="stretch" gap={3}>
                  <Text fontSize="sm" color="fg.muted">
                    Collateralization Progress
                  </Text>
                  <Progress.Root
                    value={Math.min(collateralizationRatio, 150)}
                    max={150}
                    colorPalette={collateralizationRatio >= 100 ? 'success' : 'error'}
                    size="lg"
                  >
                    <Progress.Track rounded="full">
                      <Progress.Range rounded="full" />
                    </Progress.Track>
                  </Progress.Root>
                  <HStack justify="space-between" fontSize="xs" color="fg.muted">
                    <Text>0%</Text>
                    <Text fontWeight="medium" color="fg">
                      {collateralizationRatio.toFixed(1)}%
                    </Text>
                    <Text>150%+</Text>
                  </HStack>
                </VStack>
              </GridItem>

              <GridItem>
                <VStack align="stretch" gap={3}>
                  <Text fontSize="sm" color="fg.muted">
                    Reserve Utilization
                  </Text>
                  <Progress.Root value={(issued / reserves) * 100} colorPalette="brand" size="lg">
                    <Progress.Track rounded="full">
                      <Progress.Range rounded="full" />
                    </Progress.Track>
                  </Progress.Root>
                  <HStack justify="space-between" fontSize="xs" color="fg.muted">
                    <Text>0%</Text>
                    <Text fontWeight="medium" color="fg">
                      {((issued / reserves) * 100).toFixed(1)}%
                    </Text>
                    <Text>100%</Text>
                  </HStack>
                </VStack>
              </GridItem>
            </Grid>
          </VStack>
        </Card.Body>
      </Card.Root>
    </>
  );

  const renderDistributionMode = () => (
    <>
      <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={6}>
        {/* Pie Chart */}
        <GridItem>
          <Card.Root variant="elevated">
            <Card.Header>
              <Card.Title>Asset Distribution</Card.Title>
            </Card.Header>
            <Card.Body>
              <Box h={300}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      dataKey="value"
                      stroke="none"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </Card.Body>
          </Card.Root>
        </GridItem>

        {/* Asset Details */}
        <GridItem>
          <Card.Root variant="elevated">
            <Card.Header>
              <Card.Title>Asset Breakdown</Card.Title>
            </Card.Header>
            <Card.Body>
              <VStack align="stretch" gap={4}>
                {chartData.map((asset, index) => (
                  <Box key={asset.name}>
                    <HStack justify="space-between" mb={2}>
                      <HStack gap={3}>
                        <ColorSwatch boxSize="4" value={asset.color} />
                        <VStack align="start" gap={0}>
                          <Text fontSize="sm" fontWeight="medium">
                            {asset.name}
                          </Text>
                          <Text fontSize="xs" color="fg.muted">
                            {asset.type}
                          </Text>
                        </VStack>
                      </HStack>
                      <VStack align="end" gap={0}>
                        <Text fontSize="sm" fontWeight="semibold">
                          <FormatNumber value={asset.value} style="currency" currency="USD" />
                        </Text>
                        <Text fontSize="xs" color="fg.muted">
                          {asset.percentage}%
                        </Text>
                      </VStack>
                    </HStack>
                    <Progress.Root value={parseFloat(asset.percentage)} size="sm" colorPalette="gray">
                      <Progress.Track>
                        <Progress.Range style={{ backgroundColor: asset.color }} />
                      </Progress.Track>
                    </Progress.Root>
                    {index < chartData.length - 1 && <Separator mt={3} />}
                  </Box>
                ))}
              </VStack>
            </Card.Body>
          </Card.Root>
        </GridItem>
      </Grid>
    </>
  );

  const renderTrendsMode = () => (
    <Card.Root variant="elevated">
      <Card.Header>
        <Card.Title>Asset Performance Trends</Card.Title>
      </Card.Header>
      <Card.Body>
        <Box h={400}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                fontSize={12}
                angle={-45}
                textAnchor="end"
                height={100}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                fontSize={12}
                tickFormatter={(value) => formatLargeNumber(value)}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Card.Body>
    </Card.Root>
  );

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
        {/* Enhanced Header */}
        <Flex justify="space-between" align="start" direction={{ base: 'column', md: 'row' }} gap={4}>
          <VStack align="start" gap={2} flex={1} w="full">
            <HStack gap={3}>
              <Text fontSize="2xl" fontWeight="bold" color="fg">
                Monthly Reserves Report
              </Text>
              <Badge colorPalette="brand" size="sm">
                {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </Badge>
            </HStack>
            <Text fontSize="sm" color="fg.muted" lineHeight="tall">
              This comprehensive report<sup>1</sup> provides transparency into {companyName}'s asset reserves, including
              real-time metrics, distribution analysis, and regulatory compliance data.
            </Text>
          </VStack>

          {/* View Mode Selector */}
          <ButtonGroup size="sm" attached variant="outline">
            {(['overview', 'distribution', 'trends'] as ViewMode[]).map((mode) => (
              <Button
                key={mode}
                onClick={() => setViewMode(mode)}
                colorPalette={viewMode === mode ? 'brand' : 'gray'}
                variant={viewMode === mode ? 'solid' : 'outline'}
                textTransform="capitalize"
              >
                {mode}
              </Button>
            ))}
          </ButtonGroup>
        </Flex>

        {/* Dynamic Content Based on View Mode */}
        {viewMode === 'overview' && renderOverviewMode()}
        {viewMode === 'distribution' && renderDistributionMode()}
        {viewMode === 'trends' && renderTrendsMode()}

        {/* Enhanced Footer */}
        <Card.Root variant="subtle">
          <Card.Body>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
              <GridItem>
                <VStack align="start" gap={2}>
                  <Text fontSize="sm" fontWeight="semibold" color="fg">
                    Compliance & Auditing
                  </Text>
                  <Text fontSize="xs" color="fg.muted" lineHeight="relaxed">
                    <sup>1</sup> Reports are audited monthly by certified third-party auditors.
                    <br />
                    <sup>4</sup> Reserves include cash equivalents, government securities, and approved digital assets.
                    <br />
                    <sup>5</sup> Token issuance tracked across all supported blockchain networks.
                  </Text>
                </VStack>
              </GridItem>

              <GridItem>
                <VStack align="start" gap={2}>
                  <Text fontSize="sm" fontWeight="semibold" color="fg">
                    Risk Management
                  </Text>
                  <Text fontSize="xs" color="fg.muted" lineHeight="relaxed">
                    <sup>6</sup> Available balance represents over-collateralization buffer.
                    <br />
                    • Minimum 100% collateralization maintained at all times
                    <br />• Daily monitoring and rebalancing procedures in effect
                  </Text>
                </VStack>
              </GridItem>
            </Grid>
          </Card.Body>
        </Card.Root>
      </VStack>
    </Box>
  );
}
