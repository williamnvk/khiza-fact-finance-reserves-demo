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
import { useI18n } from '@/hooks/useI18n';

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
  const { t } = useI18n();
  
  // Enhanced asset colors with better accessibility
  const assetColors = {
    ash: useColorModeValue('var(--ff-colors-success-500)', 'var(--ff-colors-success-500)'), // Green
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
    color: assetColors[asset.type.toLowerCase() as keyof typeof assetColors] || assetColors.other,
  }));

  return (
    <Box mb={{ base: 16, md: 0 }} className="break-page">
      <VStack align="stretch" gap={{ base: 2, md: 6 }}>
        {/* Simple Header */}
        <VStack align="start" gap={3} w="full">
          <HStack gap={3} flexWrap="wrap">
            <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="fg">
              {t('reserves.components.reservesBreakdown.title')}
            </Text>
          </HStack>
          <Text fontSize={{ base: 'sm', md: 'md' }} color="fg.muted" lineHeight="relaxed">
            {t('reserves.components.reservesBreakdown.subtitle', { companyName })}
          </Text>
        </VStack>

        {/* Key Metrics - Simplified */}
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={{ base: 2, md: 4 }} mt={{ base: 4, md: 0 }}>
          <GridItem>
            <Card.Root size="sm" variant="outline" bg="transparent">
              <Card.Body>
                <Stat.Root>
                  <Stat.Label fontSize="md" color="fg.muted">
                    {t('reserves.components.reservesBreakdown.totalCollateralReserves')}
                  </Stat.Label>
                  <Stat.ValueText fontSize="xl" fontWeight="bold">
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
                  <Stat.Label fontSize="md" color="fg.muted">
                    {t('reserves.components.reservesBreakdown.excessCollateral')}
                  </Stat.Label>
                  <Stat.ValueText fontSize="xl" fontWeight="bold">
                    <FormatNumber value={balance} style="currency" currency={currency} notation="compact" />
                  </Stat.ValueText>
                </Stat.Root>
              </Card.Body>
            </Card.Root>
          </GridItem>

          <GridItem>
            <Card.Root size="sm" variant="outline" bg="transparent">
              <Card.Body>
                <Stat.Root>
                  <Stat.Label fontSize="md" color="fg.muted">
                    {t('reserves.components.reservesBreakdown.collateralRatio')}
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
              <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={4} pt={4}>
                {chartData.map((asset) => (
                  <HStack key={asset.name} gap={3}>
                    <ColorSwatch boxSize="4" value={asset.color} borderRadius="sm" />
                    <VStack align="start" gap={0}>
                      <Text fontSize="sm" fontWeight="medium" color="fg">
                        {asset.name}
                      </Text>
                      <HStack mt={1}>
                        <Text fontSize="sm" fontWeight="semibold" color={asset.color}>
                          <FormatNumber value={asset.value} style="currency" currency={currency} notation="compact" />
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
