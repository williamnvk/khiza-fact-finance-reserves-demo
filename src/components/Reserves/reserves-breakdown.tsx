import { formatLargeNumber } from '@/lib/utils';
import { Box, VStack, Text, Grid, GridItem, HStack, Flex } from '@chakra-ui/react';

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
  return (
    <Box mt={6} p={6} shadow="sm" rounded="md">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Monthly Reserves Report
      </Text>

      <Text fontSize="sm" mb={6}>
        This report<sup>1</sup> is prepared by Fact Finance to promote transparency in {companyName}'s asset reserves.
        It includes selected financial information based on data available at the time of publication. For more details,
        consult the complete reserve report available for download.
      </Text>

      <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={4} mb={8} my={16}>
        <GridItem>
          <Text fontSize="sm" fontWeight="medium">
            Collateral Reserves<sup>4</sup>
          </Text>
          <Text fontSize="lg" fontWeight="semibold">
            <Text as="span" fontSize="xs">
              {currency}&nbsp;
            </Text>
            {formatLargeNumber(reserves)}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="sm" fontWeight="medium">
            Tokens Issued<sup>5</sup>
          </Text>
          <Text fontSize="lg" fontWeight="semibold">
            <Text as="span" fontSize="xs">
              {currency}&nbsp;
            </Text>
            {formatLargeNumber(issued)}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="sm" fontWeight="medium">
            Available Balance<sup>6</sup>
          </Text>
          <Text fontSize="lg" fontWeight="semibold">
            <Text as="span" fontSize="xs">
              {currency}&nbsp;
            </Text>
            {formatLargeNumber(balance)}
          </Text>
        </GridItem>
      </Grid>

      <HStack h={2} w="full" rounded="full" overflow="hidden" mb={6}>
        {assetDistribution.map((asset: { type: any; name: string; value: any }) => (
          <Box
            key={asset.name}
            h="full"
            bg={`var(--asset-${asset.type})`}
            width={`${(asset.value / reserves) * 100}%`}
          />
        ))}
      </HStack>

      <Flex direction={{ base: 'column', md: 'row' }} gap={4} fontSize="xs" w="full" flexWrap="wrap">
        {assetDistribution.map((asset: { type: any; name: string; value: any }, index: number) => (
          <HStack key={asset.name} gap={2}>
            <Box h={3} w={3} bg={`var(--asset-${asset.type})`} mr={2} rounded="sm" />
            <VStack align="start" gap={0}>
              <Text fontWeight="medium">{asset.value.toLocaleString()}</Text>
              <Text fontSize="xs">{asset.name}</Text>
            </VStack>
          </HStack>
        ))}
      </Flex>
    </Box>
  );
}
