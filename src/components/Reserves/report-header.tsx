import { Card } from '@/components/ui/card';
import { Link } from 'react-router';
import { Box, VStack, HStack, Text, Badge, Flex, Grid, GridItem, Link as ChakraLink } from '@chakra-ui/react';

export function ReportHeader({
  currency,
  companyName,
  dateAs,
  heartbeat,
  dappLink,
  threshold,
  circulation,
  reserves,
  ratio,
  description,
  logo,
  contract,
  contractLink,
}: {
  currency: string;
  companyName: string;
  dateAs: string;
  heartbeat: string;
  dappLink: string;
  threshold: string;
  circulation: string;
  reserves: string;
  ratio: string;
  description: string;
  logo: string;
  contract: string;
  contractLink: string;
}) {
  return (
    <VStack gap={6} position="relative">
      <HStack justify="center" gap={2} mb={4}>
        <Text
          as={Link}
          to="/"
          fontSize="xl"
          position="absolute"
          top={4}
          left={4}
          display="flex"
          alignItems="center"
          gap={1}
        >
          <Text color="blue.500">Fact</Text>
          <Text color="gray.300" _dark={{ color: 'gray.400' }}>
            &#10022;
          </Text>
          <Text color="blue.500">Finance</Text>
        </Text>

        <Text fontSize="3xl" fontWeight="bold" textAlign="center">
          Proof of Reserves Report
        </Text>
      </HStack>

      <Card p={6} border="none">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'center', md: 'start' }}
          justify="space-between"
          gap={4}
        >
          <VStack align={{ base: 'center', md: 'start' }} gap={4} mb={{ base: 4, md: 0 }}>
            <Box textAlign={{ base: 'center', md: 'left' }}>
              <Box mt={4}>
                <HStack justify={{ base: 'center', md: 'start' }}>
                  <Text fontSize="xl" fontWeight="medium" color="gray.700" _dark={{ color: 'gray.300' }}>
                    {companyName}
                  </Text>
                  <Badge colorScheme="green" variant="outline" fontSize="xs">
                    Verified
                  </Badge>
                </HStack>
                <VStack
                  align={{ base: 'center', md: 'start' }}
                  mt={2}
                  fontSize="sm"
                  color="gray.400"
                  _dark={{ color: 'gray.500' }}
                >
                  <Text>{description}</Text>
                  {dappLink && (
                    <Text as="a" href={dappLink} target="_blank" _hover={{ textDecoration: 'underline' }} fontSize="xs">
                      dApp: {dappLink}
                    </Text>
                  )}
                  {contract && (
                    <Text
                      as="a"
                      href={contractLink}
                      target="_blank"
                      color="gray.400"
                      _dark={{ color: 'gray.500' }}
                      fontSize="xs"
                      _hover={{ textDecoration: 'underline' }}
                    >
                      Contract: {contract} &lt;/&gt;
                    </Text>
                  )}
                </VStack>
              </Box>
            </Box>
          </VStack>

          <VStack align="end" mt={8} whiteSpace="nowrap">
            <Grid templateColumns="repeat(3, 1fr)" gap={10} justify="center" w="full">
              <GridItem display="flex" flexDirection="column" alignItems="center">
                <Text
                  fontSize="sm"
                  color="gray.600"
                  _dark={{ color: 'gray.400' }}
                  fontWeight="medium"
                  whiteSpace="nowrap"
                >
                  Issued Tokens
                </Text>
                <Text fontSize="lg" fontWeight="semibold" color="var(--chart-navy)">
                  <Text as="span" fontSize="xs">
                    {currency}&nbsp;
                  </Text>
                  {circulation}
                </Text>
              </GridItem>
              <GridItem display="flex" flexDirection="column" alignItems="center">
                <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} fontWeight="medium">
                  Reserves
                </Text>
                <Text fontSize="lg" fontWeight="semibold" color="var(--chart-blue)">
                  <Text as="span" fontSize="xs">
                    {currency}&nbsp;
                  </Text>
                  {reserves}
                </Text>
              </GridItem>
              <GridItem display="flex" flexDirection="column" alignItems="center">
                <Text
                  fontSize="sm"
                  color="gray.600"
                  _dark={{ color: 'gray.400' }}
                  fontWeight="medium"
                  whiteSpace="nowrap"
                >
                  Collateral Ratio
                </Text>
                <Text fontSize="lg" fontWeight="semibold" color="green.500">
                  {ratio}
                </Text>
              </GridItem>
            </Grid>

            <Text fontSize="xs" color="gray.400" _dark={{ color: 'gray.400' }} mt={4}>
              {dateAs}
            </Text>
            <HStack gap={1} pb={4} color="gray.400" _dark={{ color: 'gray.500' }} fontSize="xs">
              {heartbeat && (
                <>
                  <Text>
                    Heartbeat<sup>2</sup>:
                  </Text>
                  <Text fontWeight="bold">{heartbeat}</Text>
                </>
              )}
              {threshold && (
                <>
                  <Text>
                    Deviation Threshold<sup>3</sup>:
                  </Text>
                  <Text fontWeight="bold">{threshold}</Text>
                </>
              )}
            </HStack>
          </VStack>
        </Flex>
      </Card>
    </VStack>
  );
}
