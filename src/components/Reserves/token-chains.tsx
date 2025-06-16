import { Box, VStack, Text, HStack, Grid, GridItem, Flex } from '@chakra-ui/react';

export function TokenChainBreakdown({
  totalChains,
  totalTokens,
  totalValue,
  chainDistribution,
}: {
  totalChains: number;
  totalTokens: number;
  totalValue: number;
  chainDistribution: any[];
}) {
  const formatPercent = (value: number) => `${value.toFixed(2)}%`;

  return (
    <Box mt={6}>
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" gap={8}>
        <VStack align="start" gap={4}>
          <Text fontSize="xl" fontWeight="bold">
            Blockchain Distribution
          </Text>
          <Text fontSize="sm">
            This section shows how the token supply is distributed across different blockchains.
          </Text>
        </VStack>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8} my={16}>
          <GridItem display="flex" flexDirection="column" alignItems="center">
            <Text fontSize="sm" fontWeight="medium" whiteSpace="nowrap">
              Total Chains
            </Text>
            <Text fontSize="lg" fontWeight="semibold">
              {chainDistribution.length}
            </Text>
          </GridItem>
          <GridItem display="flex" flexDirection="column" alignItems="center">
            <Text fontSize="sm" fontWeight="medium" whiteSpace="nowrap">
              Total Tokens
            </Text>
            <Text fontSize="lg" fontWeight="semibold">
              {totalTokens}
            </Text>
          </GridItem>
          <GridItem display="flex" flexDirection="column" alignItems="center">
            <Text fontSize="sm" fontWeight="medium" whiteSpace="nowrap">
              Total Value
            </Text>
            <Text fontSize="lg" fontWeight="semibold">
              {totalValue}
            </Text>
          </GridItem>
        </Grid>
      </Flex>

      <HStack h={2} w="full" rounded="full" overflow="hidden" mb={6}>
        {chainDistribution.map((chain: { name: string; value: number }) => (
          <Box key={chain.name} h="full" bg={`var(--chain-${chain.name})`} width={`${Number(chain.value)}%`} />
        ))}
      </HStack>

      <Grid
        templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)' }}
        gap={4}
        fontSize="xs"
      >
        {chainDistribution.map((chain: { name: string; value: number }) => (
          <HStack key={chain.name} gap={2}>
            <Box h={3} w={3} bg={`var(--chain-${chain.name})`} mr={2} rounded="sm" />
            <VStack align="start" gap={0}>
              <Text fontWeight="medium">{formatPercent(chain.value)}</Text>
              <Text fontSize="xs">{chain.name.charAt(0).toUpperCase() + chain.name.slice(1)}</Text>
            </VStack>
          </HStack>
        ))}
      </Grid>
    </Box>
  );
}
