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
import { ArrowUpRightIcon, ChartLineIcon, CheckIcon, CoinsIcon, DatabaseBackupIcon } from 'lucide-react';
import { ColorModeButton, useColorMode } from '../ui/color-mode';
import TokenizaLogo from '../Icons/Tokeniza';

interface ReportHeaderProps {
  client: any;
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
  contract?: string;
  contractLink?: string;
}

export function ReportHeader({
  client,
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
      bg={client === 'scenium' ? 'whiteAlpha.600' : 'whiteAlpha.50'}
      _dark={{ bg: 'whiteAlpha.50' }}
      borderRadius="3xl"
      shadow="2xl"
      borderWidth="1px"
      borderColor="whiteAlpha.200"
      overflow="hidden"
    >
      <Box position="relative" p={{ base: 4, md: 6, lg: 8 }}>
        <Box position="absolute" top={6} right={6}>
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
            {client === 'tokeniza' && (
              <TokenizaLogo fill={colorMode === 'dark' ? 'white' : 'black'} width={180} height={45} />
            )}
            {client === 'scenium' && <Image src="/assets/logos/scenium.png" alt="Scenium" width={180} height={45} />}
          </Box>

          <VStack align="start" gap={4}>
            <HStack gap={3} align="center" flexWrap="wrap">
              <Heading size="2xl" color="gray.900" _dark={{ color: 'white' }} fontWeight="800" letterSpacing="-0.03em">
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
                LIVE
              </Badge>
            </HStack>

            <Text fontSize="sm">{description}</Text>

            {/* Action Buttons */}
            <HStack gap={3} align="stretch" minW="200px">
              {dappLink && (
                <ChakraLink
                  href={dappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  display="flex"
                  alignItems="center"
                >
                  <Text>Launch dApp</Text>
                  <Icon as={ArrowUpRightIcon} />
                </ChakraLink>
              )}

              {contract && (
                <ChakraLink href={contractLink} target="_blank" rel="noopener noreferrer">
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
          gap={6}
          mb={8}
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
              <VStack align="start" gap={4} height="full">
                <HStack justify="space-between" width="full">
                  <Box p={3} bg="brand.500" rounded="xl" _dark={{ bg: 'brand.500' }}>
                    <Icon as={CoinsIcon} boxSize={6} color="white" />
                  </Box>
                  <Tag.Root colorPalette="brand" variant="subtle" size="sm">
                    <Tag.Label>Issued</Tag.Label>
                  </Tag.Root>
                </HStack>
                <VStack align="start" gap={2} flex={1}>
                  <Text
                    fontSize="xs"
                    fontWeight="bold"
                    color="brand.600"
                    textTransform="uppercase"
                    letterSpacing="wider"
                    _dark={{ color: 'brand.400' }}
                  >
                    Total Tokens
                  </Text>
                  <Heading fontSize="2xl" lineHeight="1">
                    {currency} {circulation}
                  </Heading>
                </VStack>
              </VStack>
            </Box>
          </GridItem>

          <GridItem>
            <Box
              height="full"
              bg="linear-gradient(135deg, {colors.whiteAlpha.100} 0%, transparent 100%)"
              borderWidth="1px"
              borderColor="blackAlpha.200"
              borderRadius="2xl"
              p={6}
              _dark={{
                borderColor: 'whiteAlpha.200',
              }}
            >
              <VStack align="start" gap={4} height="full">
                <HStack justify="space-between" width="full">
                  <Box p={3} bg="brand.500" rounded="xl" _dark={{ bg: 'brand.500' }}>
                    <DatabaseBackupIcon color="white" size={24} />
                  </Box>
                  <Badge colorPalette="brand" variant="subtle" size="sm">
                    Secured
                  </Badge>
                </HStack>

                <VStack align="start" gap={2} flex={1}>
                  <Text
                    fontSize="xs"
                    fontWeight="bold"
                    color="brand.600"
                    textTransform="uppercase"
                    letterSpacing="wider"
                    _dark={{ color: 'brand.400' }}
                  >
                    Total Reserves
                  </Text>
                  <Heading size="xl" color="brand.700" _dark={{ color: 'brand.300' }} lineHeight="1">
                    {reserves}
                  </Heading>
                  <Text fontSize="sm" color="gray.600" fontWeight="medium" _dark={{ color: 'gray.400' }}>
                    {currency}
                  </Text>
                </VStack>
              </VStack>
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
              p={6}
              _dark={{
                borderColor: 'whiteAlpha.200',
              }}
            >
              <VStack align="start" gap={4} height="full">
                <HStack justify="space-between" width="full">
                  <Box p={3} bg="brand.500" rounded="xl" _dark={{ bg: 'brand.500' }}>
                    <CheckIcon color="white" size={24} />
                  </Box>
                  <Badge colorPalette={isHealthy ? 'success' : 'warning'} variant="subtle" size="sm">
                    {isHealthy ? 'Healthy' : 'Watch'}
                  </Badge>
                </HStack>

                <VStack align="start" gap={2} flex={1}>
                  <Text
                    fontSize="xs"
                    fontWeight="bold"
                    color={isHealthy ? 'success.600' : 'warning.600'}
                    textTransform="uppercase"
                    letterSpacing="wider"
                    _dark={{ color: isHealthy ? 'success.400' : 'warning.400' }}
                  >
                    Collateral Ratio
                  </Text>
                  <Heading
                    size="xl"
                    color={isHealthy ? 'success.700' : 'warning.700'}
                    _dark={{ color: isHealthy ? 'success.300' : 'warning.300' }}
                    lineHeight="1"
                  >
                    {ratio}
                  </Heading>
                  <Box
                    width="full"
                    height={2}
                    bg="gray.200"
                    rounded="full"
                    overflow="hidden"
                    _dark={{ bg: 'gray.700' }}
                  >
                    <Box
                      height="full"
                      width={`${Math.min((ratioPercentage / 150) * 100, 100)}%`}
                      bg={isHealthy ? 'success.500' : 'warning.500'}
                      transition="all 0.3s ease"
                    />
                  </Box>
                </VStack>
              </VStack>
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
              p={6}
              _dark={{
                borderColor: 'whiteAlpha.200',
              }}
            >
              <VStack align="start" gap={4} height="full">
                <HStack justify="space-between" width="full">
                  <Box p={3} bg="brand.500" rounded="xl" _dark={{ bg: 'brand.500' }}>
                    <ChartLineIcon color="white" size={24} />
                  </Box>
                  <Badge colorPalette="brand" variant="subtle" size="sm">
                    Updated
                  </Badge>
                </HStack>

                <VStack align="start" gap={3} flex={1}>
                  <Text
                    fontSize="xs"
                    fontWeight="bold"
                    color="brand.600"
                    textTransform="uppercase"
                    letterSpacing="wider"
                    _dark={{ color: 'brand.400' }}
                  >
                    Last Update
                  </Text>
                  <Text fontSize="lg" fontWeight="bold" color="brand.800" _dark={{ color: 'brand.200' }}>
                    {dateAs}
                  </Text>

                  {heartbeat && (
                    <VStack align="start" gap={1}>
                      <Text fontSize="xs" fontWeight="medium">
                        Heartbeat: {heartbeat}
                      </Text>
                    </VStack>
                  )}
                </VStack>
              </VStack>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
