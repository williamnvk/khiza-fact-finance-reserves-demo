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

  return (
    <Box
      position="relative"
      bg="whiteAlpha.50"
      borderRadius="2xl"
      shadow="lg"
      borderWidth="1px"
      borderColor="whiteAlpha.200"
      overflow="hidden"
      p={{ base: 6, md: 8 }}
      _dark={{
        bg: 'blackAlpha.50',
        borderColor: 'whiteAlpha.100',
      }}
    >
      <VStack align="stretch" gap={6}>
        {/* Simple Header */}
        <VStack align="start" gap={3} w="full">
          <HStack gap={3} flexWrap="wrap">
            <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="fg">
              Monthly Reserves Report
            </Text>
            <Badge colorPalette="brand" size="md">
              {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </Badge>
          </HStack>
          <Text fontSize="md" color="fg.muted" lineHeight="relaxed">
            This comprehensive report provides transparency into {companyName}'s asset reserves, including real-time
            metrics, distribution analysis, and regulatory compliance data.
          </Text>
        </VStack>

        {/* Simplified Asset Breakdown */}
        <Card.Root>
          <Card.Header>
            <Card.Title fontSize="lg" fontWeight="semibold">
              Asset Distribution
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <VStack align="stretch" gap={5}>
              {chartData.map((asset, index) => (
                <Box key={asset.name}>
                  <HStack justify="space-between" mb={3}>
                    <HStack gap={4}>
                      <ColorSwatch boxSize="5" value={asset.color} borderRadius="md" shadow="sm" />
                      <VStack align="start" gap={1}>
                        <Text fontSize="md" fontWeight="semibold" color="fg">
                          {asset.name}
                        </Text>
                        <Text fontSize="sm" color="fg.muted" textTransform="capitalize">
                          {asset.type.replace('_', ' ')}
                        </Text>
                      </VStack>
                    </HStack>
                    <VStack align="end" gap={1}>
                      <Text fontSize="lg" fontWeight="bold" color="fg">
                        <FormatNumber value={asset.value} style="currency" currency="USD" notation="compact" />
                      </Text>
                      <Text fontSize="md" fontWeight="semibold" color={asset.color}>
                        {asset.percentage}%
                      </Text>
                    </VStack>
                  </HStack>

                  <Progress.Root
                    value={parseFloat(asset.percentage)}
                    size="md"
                    colorPalette="gray"
                    bg="whiteAlpha.400"
                    _dark={{ bg: 'blackAlpha.400' }}
                  >
                    <Progress.Track borderRadius="full">
                      <Progress.Range borderRadius="full" style={{ backgroundColor: asset.color }} />
                    </Progress.Track>
                  </Progress.Root>

                  {index < chartData.length - 1 && <Separator mt={4} />}
                </Box>
              ))}
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* Key Metrics - Simplified */}
        <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={4}>
          <GridItem>
            <Card.Root size="sm" variant="subtle">
              <Card.Body>
                <Stat.Root>
                  <Stat.Label fontSize="sm" color="fg.muted">
                    Total Reserves
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
            <Card.Root size="sm" variant="subtle">
              <Card.Body>
                <Stat.Root>
                  <Stat.Label fontSize="sm" color="fg.muted">
                    Tokens Issued
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
            <Card.Root size="sm" variant="subtle">
              <Card.Body>
                <Stat.Root>
                  <Stat.Label fontSize="sm" color="fg.muted">
                    Available Balance
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
            <Card.Root size="sm" variant="subtle">
              <Card.Body>
                <Stat.Root>
                  <Stat.Label fontSize="sm" color="fg.muted">
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

        {/* Simple Collateralization Progress */}
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

              <VStack align="stretch" gap={4}>
                <Box>
                  <Text fontSize="sm" color="fg.muted" mb={2}>
                    Collateralization Progress
                  </Text>
                  <Progress.Root
                    value={Math.min(collateralizationRatio, 150)}
                    max={150}
                    colorPalette={collateralizationRatio >= 100 ? 'success' : 'error'}
                    size="lg"
                    variant="subtle"
                  >
                    <Progress.Track rounded="full">
                      <Progress.Range rounded="full" />
                    </Progress.Track>
                  </Progress.Root>
                  <HStack justify="space-between" fontSize="sm" color="fg.muted" mt={1}>
                    <Text>0%</Text>
                    <Text fontWeight="medium" color="fg">
                      {collateralizationRatio.toFixed(1)}%
                    </Text>
                    <Text>150%+</Text>
                  </HStack>
                </Box>
              </VStack>
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* Simple Footer */}
        <Card.Root variant="subtle">
          <Card.Body>
            <VStack align="start" gap={3}>
              <Text fontSize="sm" fontWeight="semibold" color="fg">
                Compliance & Auditing
              </Text>
              <Text fontSize="sm" color="fg.muted" lineHeight="relaxed">
                Reports are audited monthly by certified third-party auditors. Reserves include cash equivalents,
                government securities, and approved digital assets. Token issuance tracked across all supported
                blockchain networks.
              </Text>
            </VStack>
          </Card.Body>
        </Card.Root>
      </VStack>
    </Box>
  );
}
