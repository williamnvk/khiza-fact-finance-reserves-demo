import {
  Box,
  VStack,
  Text,
  Grid,
  GridItem,
  HStack,
  Stat,
  Card,
  Badge,
  FormatNumber,
  ColorSwatch,
} from '@chakra-ui/react';
import { Tooltip } from '@/components/ui/tooltip';
import { useColorModeValue } from '../ui/color-mode';

export function ReservesBreakdown({
  reserves,
  issued,
  balance,
  assetDistribution,
  companyName,
}: {
  reserves: number;
  issued: number;
  balance: number;
  assetDistribution: any[];
  currency: string;
  companyName: string;
}) {
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
  const isOverCollateralized = reserves > issued;

  // Prepare chart data
  const chartData = assetDistribution.map((asset) => ({
    ...asset,
    percentage: ((asset.value / reserves) * 100).toFixed(1),
    color: assetColors[asset.type as keyof typeof assetColors] || assetColors.other,
  }));

  return (
    <Box>
      <VStack align="stretch" gap={6}>
        {/* Simple Header */}
        <VStack align="start" gap={3} w="full">
          <HStack gap={3} flexWrap="wrap">
            <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="fg">
              Reserves Overview
            </Text>
            <Badge colorPalette="brand" size="md">
              {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </Badge>
          </HStack>
          <Text fontSize="md" color="fg.muted" lineHeight="relaxed">
            This section provides transparency into {companyName} asset reserves.
          </Text>
        </VStack>

        {/* Asset Distribution Bar */}
        <Card.Root size="sm" variant="outline" bg="transparent">
          <Card.Header>
            <Card.Title fontSize="lg" fontWeight="semibold">
              Asset Distribution
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <VStack align="stretch" gap={4}>
              {/* Stacked progress bar */}
              <HStack width="100%" height="2rem" gap={0} borderRadius="md" overflow="hidden" shadow="sm">
                {chartData.map((asset) => (
                  <Tooltip key={asset.name} content={`${asset.name}: ${asset.percentage}%`}>
                    <Box
                      height="100%"
                      width={`${asset.percentage}%`}
                      bg={asset.color}
                      transition="all 0.2s ease-in-out"
                      _hover={{ transform: 'scale(1.05)', zIndex: 1, shadow: 'lg' }}
                    />
                  </Tooltip>
                ))}
              </HStack>

              {/* Legend */}
              <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={4} pt={4}>
                {chartData.map((asset) => (
                  <HStack key={asset.name} gap={3}>
                    <ColorSwatch boxSize="4" value={asset.color} borderRadius="sm" />
                    <VStack align="start" gap={0}>
                      <Text fontSize="sm" fontWeight="medium" color="fg">
                        {asset.name}
                      </Text>
                      <Text fontSize="sm" fontWeight="semibold" color={asset.color}>
                        {asset.percentage}%
                      </Text>
                    </VStack>
                  </HStack>
                ))}
              </Grid>
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* Key Metrics - Simplified */}
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={4}>
          <GridItem>
            <Card.Root size="sm" variant="outline" bg="transparent">
              <Card.Body>
                <Stat.Root>
                  <Stat.Label fontSize="sm" color="fg.muted">
                    Total Collateral Reserves
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
          {/* 
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
          </GridItem> */}

          <GridItem>
            <Card.Root size="sm" variant="outline" bg="transparent">
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
            <Card.Root size="sm" variant="outline" bg="transparent">
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
      </VStack>
    </Box>
  );
}
