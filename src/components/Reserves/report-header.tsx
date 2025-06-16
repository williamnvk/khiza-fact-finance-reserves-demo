import { Card } from '@/components/ui/card';
import { Link } from 'react-router';
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
  Container,
  Heading,
  Separator,
  Icon,
} from '@chakra-ui/react';
import AveniaLogo from '../Icons/Avenia';

interface ReportHeaderProps {
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
}

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
}: ReportHeaderProps) {
  return (
    <Box
      position="relative"
      overflow="hidden"
      bgGradient="to-br"
      gradientFrom="gray.50"
      gradientTo="gray.100"
      _dark={{
        bgGradient: 'to-br',
        gradientFrom: 'gray.900',
        gradientTo: 'gray.800',
      }}
      rounded="2xl"
      shadow="xl"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgGradient: 'to-br',
        gradientFrom: 'brand.500/5',
        gradientTo: 'brand.600/10',
        _dark: {
          gradientFrom: 'brand.400/10',
          gradientTo: 'brand.500/20',
        },
        zIndex: 0,
      }}
    >
      {/* Animated Background Pattern */}
      <Box
        position="absolute"
        top={0}
        right={0}
        width="200px"
        height="200px"
        bgGradient="to-br"
        gradientFrom="brand.400/20"
        gradientTo="brand.600/30"
        rounded="full"
        filter="blur(40px)"
        transform="translate(50%, -50%)"
        zIndex={0}
      />

      <Box position="relative" zIndex={1} p={{ base: 6, md: 8, lg: 10 }}>
        <Grid
          templateColumns={{ base: '1fr', lg: '1fr 1.5fr' }}
          gap={{ base: 8, lg: 12 }}
          alignItems="start"
        >
          {/* Company Information */}
          <VStack align="start" gap={6}>
            <Box>
              <Box 
                transform="scale(1)"
                transition="all 0.3s ease"
                _hover={{ transform: 'scale(1.02)' }}
              >
                <AveniaLogo width={200} height={50} />
              </Box>
              
              <HStack mt={4} align="center" gap={3} flexWrap="wrap">
                <Heading 
                  size="xl" 
                  color="gray.800" 
                  _dark={{ color: 'gray.100' }}
                  fontWeight="bold"
                  letterSpacing="-0.02em"
                >
                  {companyName}
                </Heading>
                <Badge
                  colorPalette="green"
                  variant="subtle"
                  fontSize="xs"
                  px={3}
                  py={1}
                  rounded="full"
                  display="flex"
                  alignItems="center"
                  gap={1}
                  fontWeight="semibold"
                  shadow="sm"
                >
                  <Box
                    width={2}
                    height={2}
                    bg="green.500"
                    rounded="full"
                    animation="pulse 2s infinite"
                  />
                  Verified
                </Badge>
              </HStack>
            </Box>

            <VStack align="start" gap={4} maxW="400px">
              <Text 
                color="gray.700" 
                _dark={{ color: 'gray.300' }} 
                lineHeight="1.7"
                fontSize="sm"
                fontWeight="medium"
              >
                {description}
              </Text>

              <VStack align="start" gap={3} width="full">
                {dappLink && (
                  <ChakraLink
                    href={dappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    display="flex"
                    alignItems="center"
                    gap={2}
                    px={4}
                    py={2}
                    bg="brand.50"
                    color="brand.600"
                    rounded="lg"
                    fontSize="sm"
                    fontWeight="semibold"
                    transition="all 0.2s ease"
                    border="1px solid"
                    borderColor="brand.200"
                    _dark={{ 
                      bg: 'brand.900/30', 
                      color: 'brand.300', 
                      borderColor: 'brand.700' 
                    }}
                    _hover={{
                      bg: 'brand.100',
                      transform: 'translateY(-1px)',
                      shadow: 'md',
                      _dark: { bg: 'brand.800/50' },
                    }}
                  >
                    <Text>🚀</Text>
                    <Text>Access dApp</Text>
                    <Box
                      transition="transform 0.2s ease"
                      _groupHover={{ transform: 'translate(2px, -2px)' }}
                    >
                      ↗
                    </Box>
                  </ChakraLink>
                )}

                {contract && (
                  <ChakraLink
                    href={contractLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    display="flex"
                    alignItems="center"
                    gap={2}
                    px={4}
                    py={2}
                    bg="gray.50"
                    color="gray.600"
                    rounded="lg"
                    fontSize="xs"
                    transition="all 0.2s ease"
                    border="1px solid"
                    borderColor="gray.200"
                    _dark={{ 
                      bg: 'gray.800', 
                      color: 'gray.400', 
                      borderColor: 'gray.700' 
                    }}
                    _hover={{
                      bg: 'gray.100',
                      color: 'brand.600',
                      transform: 'translateY(-1px)',
                      shadow: 'sm',
                      _dark: { 
                        bg: 'gray.700', 
                        color: 'brand.400' 
                      },
                    }}
                  >
                    <Text>📄</Text>
                    <Text fontWeight="medium">Contract: {contract.slice(0, 8)}...{contract.slice(-6)}</Text>
                    <Box fontSize="xs">↗</Box>
                  </ChakraLink>
                )}
              </VStack>
            </VStack>
          </VStack>

          {/* Metrics Section */}
          <VStack align="stretch" gap={6}>
            {/* Key Metrics Grid */}
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
              {/* Issued Tokens */}
              <GridItem>
                <Box
                  p={5}
                  bg="white/60"
                  backdropFilter="blur(10px)"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="gray.200/50"
                  shadow="lg"
                  transition="all 0.3s ease"
                  position="relative"
                  overflow="hidden"
                  _dark={{ 
                    bg: 'gray.800/60',
                    borderColor: 'gray.700/50' 
                  }}
                  _hover={{
                    transform: 'translateY(-2px)',
                    shadow: 'xl',
                    bg: 'white/80',
                    _dark: { bg: 'gray.700/80' },
                  }}
                >
                  {/* Icon background */}
                  <Box
                    position="absolute"
                    top={-2}
                    right={-2}
                    fontSize="3xl"
                    opacity={0.1}
                    color="blue.500"
                  >
                    🪙
                  </Box>
                  
                  <VStack align="center" gap={3} position="relative">
                    <HStack gap={2} align="center">
                      <Text fontSize="lg">💎</Text>
                      <Text 
                        fontSize="xs" 
                        fontWeight="bold" 
                        color="gray.600" 
                        textAlign="center" 
                        textTransform="uppercase" 
                        letterSpacing="wider"
                        _dark={{ color: 'gray.400' }}
                      >
                        Issued Tokens
                      </Text>
                    </HStack>
                    <VStack gap={1}>
                      <Text 
                        fontSize="2xl" 
                        fontWeight="bold" 
                        color="blue.600"
                        _dark={{ color: 'blue.400' }}
                      >
                        {circulation}
                      </Text>
                      <Text 
                        fontSize="xs" 
                        color="gray.500" 
                        fontWeight="medium"
                        _dark={{ color: 'gray.500' }}
                      >
                        {currency}
                      </Text>
                    </VStack>
                  </VStack>
                </Box>
              </GridItem>

              {/* Total Reserves */}
              <GridItem>
                <Box
                  p={5}
                  bg="white/60"
                  backdropFilter="blur(10px)"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="gray.200/50"
                  shadow="lg"
                  transition="all 0.3s ease"
                  position="relative"
                  overflow="hidden"
                  _dark={{ 
                    bg: 'gray.800/60',
                    borderColor: 'gray.700/50' 
                  }}
                  _hover={{
                    transform: 'translateY(-2px)',
                    shadow: 'xl',
                    bg: 'white/80',
                    _dark: { bg: 'gray.700/80' },
                  }}
                >
                  {/* Icon background */}
                  <Box
                    position="absolute"
                    top={-2}
                    right={-2}
                    fontSize="3xl"
                    opacity={0.1}
                    color="purple.500"
                  >
                    🏦
                  </Box>
                  
                  <VStack align="center" gap={3} position="relative">
                    <HStack gap={2} align="center">
                      <Text fontSize="lg">🔒</Text>
                      <Text 
                        fontSize="xs" 
                        fontWeight="bold" 
                        color="gray.600" 
                        textAlign="center" 
                        textTransform="uppercase" 
                        letterSpacing="wider"
                        _dark={{ color: 'gray.400' }}
                      >
                        Total Reserves
                      </Text>
                    </HStack>
                    <VStack gap={1}>
                      <Text 
                        fontSize="2xl" 
                        fontWeight="bold" 
                        color="purple.600"
                        _dark={{ color: 'purple.400' }}
                      >
                        {reserves}
                      </Text>
                      <Text 
                        fontSize="xs" 
                        color="gray.500" 
                        fontWeight="medium"
                        _dark={{ color: 'gray.500' }}
                      >
                        {currency}
                      </Text>
                    </VStack>
                  </VStack>
                </Box>
              </GridItem>

              {/* Collateral Ratio */}
              <GridItem>
                <Box
                  p={5}
                  bgGradient="to-br"
                  gradientFrom="green.50"
                  gradientTo="green.100"
                  backdropFilter="blur(10px)"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="green.200"
                  shadow="lg"
                  transition="all 0.3s ease"
                  position="relative"
                  overflow="hidden"
                  _dark={{
                    gradientFrom: 'green.900/30',
                    gradientTo: 'green.800/50',
                    borderColor: 'green.700/50'
                  }}
                  _hover={{
                    transform: 'translateY(-2px)',
                    shadow: 'xl',
                    gradientFrom: 'green.100',
                    gradientTo: 'green.200',
                    _dark: {
                      gradientFrom: 'green.800/50',
                      gradientTo: 'green.700/70',
                    },
                  }}
                >
                  {/* Success glow effect */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="green.400/10"
                    rounded="xl"
                    filter="blur(20px)"
                  />
                  
                  {/* Icon background */}
                  <Box
                    position="absolute"
                    top={-2}
                    right={-2}
                    fontSize="3xl"
                    opacity={0.1}
                    color="green.500"
                  >
                    📊
                  </Box>
                  
                  <VStack align="center" gap={3} position="relative">
                    <HStack gap={2} align="center">
                      <Text fontSize="lg">⚡</Text>
                      <Text 
                        fontSize="xs" 
                        fontWeight="bold" 
                        color="green.700" 
                        textAlign="center" 
                        textTransform="uppercase" 
                        letterSpacing="wider"
                        _dark={{ color: 'green.300' }}
                      >
                        Collateral Ratio
                      </Text>
                    </HStack>
                    <Text 
                      fontSize="2xl" 
                      fontWeight="bold" 
                      color="green.600"
                      _dark={{ color: 'green.400' }}
                    >
                      {ratio}
                    </Text>
                  </VStack>
                </Box>
              </GridItem>
            </Grid>

            {/* Enhanced Metadata Section */}
            <Box
              p={5}
              bg="white/40"
              backdropFilter="blur(10px)"
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200/50"
              shadow="sm"
              _dark={{ 
                bg: 'gray.800/40',
                borderColor: 'gray.700/50' 
              }}
            >
              <VStack gap={4}>
                <HStack justify="space-between" align="center" width="full">
                  <HStack gap={2} color="gray.600" fontSize="sm" _dark={{ color: 'gray.400' }}>
                    <Box
                      p={2}
                      bg="blue.50"
                      rounded="lg"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      _dark={{ bg: 'blue.900/30' }}
                    >
                      <Text fontSize="sm">🕒</Text>
                    </Box>
                    <Text fontWeight="semibold">Last Updated:</Text>
                  </HStack>
                  <Box
                    px={3}
                    py={1}
                    bg="gray.100"
                    rounded="lg"
                    border="1px solid"
                    borderColor="gray.200"
                    _dark={{ 
                      bg: 'gray.700',
                      borderColor: 'gray.600' 
                    }}
                  >
                    <Text 
                      fontSize="sm" 
                      fontWeight="bold" 
                      color="gray.800"
                      _dark={{ color: 'gray.200' }}
                    >
                      {dateAs}
                    </Text>
                  </Box>
                </HStack>

                <Separator />

                <HStack justify="space-between" align="center" width="full" fontSize="sm" flexWrap="wrap" gap={4}>
                  {heartbeat && (
                    <HStack gap={2} color="gray.600" _dark={{ color: 'gray.400' }}>
                      <Box
                        p={1.5}
                        bg="orange.50"
                        rounded="md"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        _dark={{ bg: 'orange.900/30' }}
                      >
                        <Text fontSize="xs">💓</Text>
                      </Box>
                      <Text fontWeight="medium">
                        Heartbeat<sup>2</sup>:
                      </Text>
                      <Text 
                        fontWeight="bold" 
                        color="orange.600"
                        _dark={{ color: 'orange.400' }}
                      >
                        {heartbeat}
                      </Text>
                    </HStack>
                  )}

                  {threshold && (
                    <HStack gap={2} color="gray.600" _dark={{ color: 'gray.400' }}>
                      <Box
                        p={1.5}
                        bg="red.50"
                        rounded="md"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        _dark={{ bg: 'red.900/30' }}
                      >
                        <Text fontSize="xs">🎯</Text>
                      </Box>
                      <Text fontWeight="medium">
                        Deviation Threshold<sup>3</sup>:
                      </Text>
                      <Text 
                        fontWeight="bold" 
                        color="red.600"
                        _dark={{ color: 'red.400' }}
                      >
                        {threshold}
                      </Text>
                    </HStack>
                  )}
                </HStack>
              </VStack>
            </Box>
          </VStack>
        </Grid>
      </Box>
    </Box>
  );
}
