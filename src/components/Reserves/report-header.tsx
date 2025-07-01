import {
  Box,
  VStack,
  HStack,
  Text,
  Badge,
  Flex,
  Grid,
  GridItem,
  Link as ChakraLink,
  Heading,
  Icon,
  Tag,
  Image,
} from '@chakra-ui/react';
import AveniaLogo from '../Icons/Avenia';
import { ArrowUpRightIcon, ChartLineIcon, CheckIcon, CoinsIcon, DatabaseBackupIcon, InfoIcon } from 'lucide-react';
import { ColorModeButton, useColorMode } from '../ui/color-mode';
import TokenizaLogo from '../Icons/Tokeniza';
import { Tooltip } from '../ui/tooltip';

interface ReportHeaderProps {
  client: any;
  currency: string;
  companyName: string;
  dateAs: string;
  heartbeat?: string;
  dappLink: string;
  threshold?: string;
  circulation: string;
  reserves: string;
  ratio: string;
  description: string;
  contract?: string;
  contractLink?: string;
}

export function ReportHeader({
  client,
  currency,
  companyName,
  dateAs,
  heartbeat,
  threshold,
  dappLink,
  circulation,
  reserves,
  ratio,
  description,
  contract,
  contractLink,
}: ReportHeaderProps) {
  // Calculate ratio as percentage for progress bar
  const ratioPercentage = parseFloat(ratio.replace('%', ''));
  const isHealthy = ratioPercentage >= 100;
  const { colorMode } = useColorMode();

  return (
    <Box
      position="relative"
      bg={{ base: 'none', md: client === 'scenium' ? 'whiteAlpha.600' : 'whiteAlpha.50' }}
      _dark={{ bg: { base: 'none', md: 'whiteAlpha.50' } }}
      borderRadius={{ base: 'none', md: '3xl' }}
      shadow={{ base: 'none', md: '2xl' }}
      borderWidth={{ base: 'none', md: '1px' }}
      borderColor={{ base: 'none', md: 'whiteAlpha.200' }}
      overflow="hidden"
      className="break-page"
    >
      <Box position="relative" p={{ base: 0, md: 6, lg: 8 }}>
        <Box position="absolute" top={6} right={6} className="omit-from-print">
          <ColorModeButton />
        </Box>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
          align={{ base: 'start', lg: 'center' }}
          gap={12}
          mb={{ base: 4, md: 6, lg: 8 }}
        >
          <Box>
            {client === 'avenia' && (
              <AveniaLogo fill={colorMode === 'dark' ? 'white' : 'black'} width={180} height={45} />
            )}
            {client === 'tokeniza' && <Image src="/assets/logos/tbrl.png" alt="tBRl" width={120} height={120} />}
            {client === 'scenium' && <Image src="/assets/logos/scenium.png" alt="Scenium" width={180} height={45} />}
          </Box>

          <VStack align="start" gap={4} flex={1}>
            <HStack gap={{ base: 2, md: 3 }} align="center" flexWrap="wrap">
              <Heading
                fontSize="3xl"
                color="gray.900"
                _dark={{ color: 'white' }}
                fontWeight="800"
                letterSpacing="-0.03em"
              >
                {companyName}
              </Heading>
              <Badge
                colorPalette="success"
                variant="solid"
                size="sm"
                rounded="full"
                display="flex"
                alignItems="center"
                gap={2}
                fontWeight="bold"
                fontSize="xs"
              >
                <Box width={2} height={2} bg="white" rounded="full" animation="pulse 2s infinite" />
                VERIFIED
              </Badge>
            </HStack>

            <Text fontSize="lg" lineHeight="tall">
              {description}
            </Text>

            {/* Action Buttons */}
            <HStack gap={3} align="stretch" minW="200px" className="omit-from-print">
              {dappLink && (
                <ChakraLink
                  href={dappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  display="flex"
                  alignItems="center"
                  className="omit-from-print"
                >
                  <Text>Site</Text>
                  <Icon as={ArrowUpRightIcon} />
                </ChakraLink>
              )}

              {contract && (
                <ChakraLink href={contractLink} target="_blank" rel="noopener noreferrer" className="omit-from-print">
                  View Contract
                </ChakraLink>
              )}
            </HStack>
          </VStack>
        </Flex>

        {/* Metrics Dashboard */}
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          gap={{ base: 2, md: 6 }}
        >
          {/* Issued Tokens Card */}
          <GridItem>
            <Box
              height="full"
              bg="linear-gradient(135deg, {colors.whiteAlpha.100} 0%, transparent 100%)"
              borderWidth="1px"
              borderColor="blackAlpha.200"
              borderRadius="2xl"
              _dark={{
                borderColor: 'whiteAlpha.200',
              }}
              p={6}
            >
              <HStack align="start" gap={4} height="full">
                <Box p={3} bg="brand.500" rounded="xl" _dark={{ bg: 'brand.500' }}>
                  <Icon as={CoinsIcon} boxSize={6} color="white" />
                </Box>
                <VStack align="start" gap={2} flex={1}>
                  <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider">
                    Circulating Token Supply
                  </Text>
                  <Flex align="center" gap={2}>
                    <Text fontSize="sm" color="gray.600" fontWeight="medium" _dark={{ color: 'gray.400' }}>
                      {currency}
                    </Text>
                    <Heading fontSize="2xl" lineHeight="1">
                      {circulation}
                    </Heading>
                  </Flex>
                </VStack>
              </HStack>
            </Box>
          </GridItem>

          <GridItem>
            <Box
              height="full"
              bg="linear-gradient(135deg, {colors.whiteAlpha.100} 0%, transparent 100%)"
              borderWidth="1px"
              borderColor="blackAlpha.200"
              borderRadius="2xl"
              _dark={{
                borderColor: 'whiteAlpha.200',
              }}
              p={6}
            >
              <HStack align="start" gap={4} height="full">
                <Box p={3} bg="brand.500" rounded="xl" _dark={{ bg: 'brand.500' }}>
                  <DatabaseBackupIcon color="white" size={24} />
                </Box>
                <VStack align="start" gap={2} flex={1}>
                  <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider">
                    Total Reserves
                  </Text>
                  <Flex align="center" gap={2}>
                    <Text fontSize="sm" color="gray.600" fontWeight="medium" _dark={{ color: 'gray.400' }}>
                      {currency}
                    </Text>
                    <Heading fontSize="2xl" lineHeight="1">
                      {reserves}
                    </Heading>
                  </Flex>
                </VStack>
              </HStack>
            </Box>
          </GridItem>

          {/* Collateral Ratio Card */}
          <GridItem>
            <Box
              height="full"
              bg="linear-gradient(135deg, {colors.whiteAlpha.100} 0%, transparent 100%)"
              borderWidth="1px"
              borderColor="blackAlpha.200"
              borderRadius="2xl"
              _dark={{
                borderColor: 'whiteAlpha.200',
              }}
              p={6}
            >
              <HStack align="start" gap={4} height="full">
                <Box p={3} bg="brand.500" rounded="xl" _dark={{ bg: 'brand.500' }}>
                  <CheckIcon color="white" size={24} />
                </Box>

                <VStack align="start" gap={2} flex={1}>
                  <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider">
                    Collateral Ratio
                  </Text>
                  <Heading
                    fontSize="2xl"
                    color={isHealthy ? 'success.700' : 'warning.700'}
                    _dark={{ color: isHealthy ? 'success.300' : 'warning.300' }}
                    lineHeight="1"
                  >
                    {ratio}
                  </Heading>
                </VStack>
              </HStack>
            </Box>
          </GridItem>

          {/* System Status Card */}
          <GridItem>
            <Box
              height="full"
              bg="linear-gradient(135deg, {colors.whiteAlpha.100} 0%, transparent 100%)"
              borderWidth="1px"
              borderColor="blackAlpha.200"
              borderRadius="2xl"
              _dark={{
                borderColor: 'whiteAlpha.200',
              }}
              p={6}
            >
              <HStack align="start" gap={4} height="full">
                <Box p={3} bg="brand.500" rounded="xl" _dark={{ bg: 'brand.500' }}>
                  <ChartLineIcon color="white" size={24} />
                </Box>

                <VStack align="start" gap={0} flex={1}>
                  <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider">
                    Last Update
                  </Text>
                  <Text fontSize="lg" fontWeight="bold">
                    {dateAs}
                  </Text>

                  {heartbeat && (
                    <VStack align="start" gap={1}>
                      <Text fontSize="xs" fontWeight="medium">
                        Heartbeat<sup>1</sup>: {heartbeat}
                      </Text>
                    </VStack>
                  )}

                  {threshold && (
                    <VStack align="start" gap={1}>
                      <Text fontSize="xs" fontWeight="medium">
                        Deviation Threshold<sup>2</sup>: {threshold}
                      </Text>
                    </VStack>
                  )}
                </VStack>
              </HStack>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
