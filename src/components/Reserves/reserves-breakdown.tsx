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
  Tag,
} from '@chakra-ui/react';
import { Tooltip } from '@/components/ui/tooltip';
import { useColorModeValue } from '../ui/color-mode';

export function ReservesBreakdown({
  reserves,
  issued,
  balance,
  assetDistribution,
  companyName,
  currency,
}: {
  reserves: number;
  issued: number;
  balance: number;
  assetDistribution: any[];
  companyName: string;
  currency: string;
}) {
  // Enhanced asset colors with better accessibility
  const assetColors = {
    cash: useColorModeValue('var(--ff-colors-success-500)', 'var(--ff-colors-success-500)'), // Green
    securities: useColorModeValue('var(--ff-colors-brand-500)', 'var(--ff-colors-brand-500)'), // Blue
    crypto: useColorModeValue('var(--ff-colors-brand-400)', 'var(--ff-colors-brand-400)'), // Purple
    bonds: useColorModeValue('var(--ff-colors-brand-600)', 'var(--ff-colors-brand-600)'), // Orange
    commodities: useColorModeValue('var(--ff-colors-error-500)', 'var(--ff-colors-error-500)'), // Red
    real_estate: useColorModeValue('var(--ff-colors-brand-500)', 'var(--ff-colors-brand-500)'), // Cyan
    other: useColorModeValue('var(--ff-colors-gray-500)', 'var(--ff-colors-gray-500)'), // Gray
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
          </HStack>
          <Text fontSize="md" color="fg.muted" lineHeight="relaxed">
            This section provides transparency into {companyName} asset reserves.
          </Text>
        </VStack>

        
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
                    <FormatNumber value={reserves} style="currency" currency={currency} notation="compact" />
                  </Stat.ValueText>
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
                    <FormatNumber value={Math.abs(balance)} style="currency" currency={currency} notation="compact" />
                  </Stat.ValueText>
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
                    {collateralizationRatio.toFixed(2)}%
                  </Stat.ValueText>
                </Stat.Root>
              </Card.Body>
            </Card.Root>
          </GridItem>
        </Grid>

        {/* Asset Distribution Bar */}
        <Card.Root size="sm" variant="outline" bg="transparent">
          <Card.Header>
            <Card.Title fontSize="lg" fontWeight="semibold">
              Asset Distribution
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <VStack align="stretch" gap={4}>
              <HStack width="100%" height="1rem" gap={0} borderRadius="full" overflow="hidden" shadow="sm">
                {chartData.map((asset) => (
                  <Tooltip key={asset.name} content={`${asset.name}: ${asset.percentage}%`}>
                    <Box
                      height="100%"
                      width={`${asset.percentage}%`}
                      bg={asset.color}
                      transition="all 0.2s ease-in-out"
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
                      <HStack mt={1}>
                        <Text fontSize="sm" fontWeight="semibold" color={asset.color}>
                          <FormatNumber
                            value={asset.value}
                            style="currency"
                            currency={currency}
                            notation="compact"
                          />
                        </Text>
                        <Tag.Root colorPalette="brand" size="sm" variant="subtle">
                          <Tag.Label fontSize="xs" fontWeight="semibold">
                            {asset.percentage}%
                          </Tag.Label>
                        </Tag.Root>
                      </HStack>
                    </VStack>
                  </HStack>
                ))}
              </Grid>
            </VStack>
          </Card.Body>
        </Card.Root>

      </VStack>
    </Box>
  );
}
