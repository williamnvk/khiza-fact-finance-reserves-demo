import { Circle, Link, Hexagon, CircleCheck, Shield } from 'lucide-react';
import { formatLargeNumber } from '@/lib/utils';
import { Box, VStack, HStack, Text, Image, Flex, Grid, GridItem, Link as ChakraLink } from '@chakra-ui/react';

export function TokenList({
  currency,
  tokens,
  companyName,
  reserves,
  circulation,
  periodTotalTransfer,
}: {
  currency: string;
  tokens: any[];
  companyName: string;
  reserves: number;
  circulation: number;
  periodTotalTransfer: number;
}) {
  const chainIcons: Record<string, JSX.Element> = {
    ethereum: <Circle size={18} color="gray.500" />,
    bitcoin: <Circle size={18} color="yellow.600" />,
    moonbeam: <Circle size={18} color="yellow.700" />,
    polygon: <Hexagon size={18} color="gray.600" />,
    gnosis: <Link size={18} color="gray.400" />,
    celo: <Link size={18} color="green.700" />,
    other: <Link size={18} color="gray.600" />,
  };

  // Function to get shortened contract address
  const getShortenedAddress = (address: string) => {
    return address.length > 12 ? `${address.substring(0, 6)}...${address.substring(address.length - 6)}` : address;
  };

  return (
    <Box mt={20}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Token Summary
      </Text>
      <Text fontSize="sm" mb={6}>
        These are the tokens backed by {companyName}'s verified reserves:
      </Text>

      <VStack gap={4} align="stretch">
        {tokens.map((token) => (
          <Box key={token.id} rounded="lg" border="1px" p={6} shadow="sm">
            <Flex direction={{ base: 'column', md: 'row' }} gap={6}>
              <HStack>
                <Box
                  w={12}
                  h={12}
                  rounded="full"
                  bg="gray.200"
                  border="4px"
                  borderColor="gray.200"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="gray.700"
                  fontWeight="bold"
                  mr={4}
                >
                  <Image src={token.logo} alt={token.symbol} />
                </Box>
                <Box>
                  <Text fontSize="xl" fontWeight="bold">
                    {token.symbol}
                  </Text>
                  <Text fontSize="sm">{token.name}</Text>
                </Box>
              </HStack>

              <HStack gap={2} ml="auto" fontSize="xs" alignItems="center">
                <Text>Chains</Text>
                {token.chains.map((chain: string) => (
                  <Box key={chain} title={chain} bg="gray.100" rounded="full" p={1} _dark={{ bg: 'gray.700' }}>
                    {chainIcons[chain.toLowerCase()] || chain}
                  </Box>
                ))}
              </HStack>
            </Flex>

            <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={4} mt={6}>
              <GridItem>
                <Text fontSize="sm" fontWeight="medium">
                  Total Supply
                </Text>
                <Text fontSize="lg" fontWeight="semibold">
                  <Text as="span" fontSize="xs">
                    {currency}
                  </Text>
                  {formatLargeNumber((circulation * token.share) / 100)}
                </Text>
              </GridItem>
              <GridItem>
                <Text fontSize="sm" fontWeight="medium">
                  30 Days Transfers
                </Text>
                <Text fontSize="lg" fontWeight="semibold">
                  <Text as="span" fontSize="xs">
                    {currency}
                  </Text>
                  {formatLargeNumber((periodTotalTransfer * token.share) / 100)}
                </Text>
              </GridItem>
              <GridItem>
                <HStack fontSize="sm" fontWeight="medium">
                  <Text>Token Price</Text>
                  <CircleCheck size={14} color="gray.600" />
                </HStack>
                <Text fontSize="lg" fontWeight="semibold">
                  <Text as="span" fontSize="xs">
                    {currency}
                  </Text>
                  {token.tokenPrice.toFixed(2)}
                </Text>
              </GridItem>
              <GridItem display="flex" flexDirection="column" alignItems={{ base: 'start', md: 'end' }}>
                <Text fontSize="sm" fontWeight="medium">
                  Reserve utilization
                </Text>
                <HStack>
                  <Text fontSize="lg" fontWeight="semibold" mr={2}>
                    {(((circulation * token.share) / 100 / reserves) * 100).toFixed(2)}%
                  </Text>
                  <Shield size={20} color="gray.500" />
                </HStack>

                <ChakraLink
                  href={`https://etherscan.io/address/${token.oracleContract}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize="xs"
                  _hover={{ textDecoration: 'underline' }}
                  mt={1}
                >
                  On-chain Reserve {getShortenedAddress(token.oracleContract)}
                </ChakraLink>
              </GridItem>
            </Grid>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
