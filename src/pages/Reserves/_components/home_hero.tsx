import { Container, Heading, Text, Grid, VStack, Box, Icon, SimpleGrid, Flex } from '@chakra-ui/react';
import { Zap, GitBranchIcon, ArrowUpIcon, LayoutDashboardIcon } from 'lucide-react';
import { formatLargeNumber } from '@/lib/utils';
// import { SystemStatus } from './system-status';

export const HomeHero = ({ totalReserves, clients }: { totalReserves: number; clients: any[] }) => {
  const uptimePercentage = 99.9;

  return (
    <Container maxW="7xl" position="relative" zIndex={1} py={24}>
      <VStack w="full" h="full" justify="center" gap={8}>
        {/* <SystemStatus /> */}

        <VStack align="center" gap={4} w="full" my={{ base: 4, md: 16 }}>
          {/* <Badge
            size="lg"
            colorPalette="brand"
            rounded="lg"
            px={4}
            py={2}
            bg="brand.900"
            border="1px solid"
            borderColor="whiteAlpha.50"
            color="whiteAlpha.800"
          >
            <Icon as={Shield} boxSize={4} color="brand.100" mr={2} />
            Certified Blockchain Auditing
          </Badge> */}

          <Heading
            fontSize={{ base: '4xl', md: '7xl' }}
            lineHeight="1.1"
            bgImage="linear-gradient(35deg, white, {colors.brand.200}, {colors.brand.200})"
            bgClip="text"
            fontWeight="400"
            textAlign="center"
            maxW="6xl"
          >
            Proof of Reserves for
            <br />
            <Text
              as="span"
              bgImage="linear-gradient(35deg, white, {colors.brand.500}, {colors.brand.200})"
              bgClip="text"
              fontWeight="semibold"
            >
              Tokenized Assets
            </Text>
          </Heading>

          <Text fontSize={{ base: 'md', md: 'xl' }} textAlign="center" color="whiteAlpha.800" maxW="3xl">
            We connect offchain collateral and track onchain token supply, bringing both into a dynamic dashboard that
            enables transparency and trust for tokenized assets.
          </Text>
        </VStack>

        {/* Key Stats */}
        {/* <Grid
          templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={{ base: 2, md: 6 }}
          maxW={{ base: 'full', md: '2xl' }}
          w="full"
          py={{ base: 2, md: 4 }}
        >
          <VStack gap={0}>
            <Heading fontSize={{ base: '2xl', md: '4xl' }} fontWeight="light" color="success.300" textAlign="center">
              ${formatLargeNumber(totalReserves)}
            </Heading>
            <Text color="whiteAlpha.800" fontSize={{ base: 'xs', md: 'sm' }} textAlign="center" fontWeight="light">
              Total Verified Reserves
            </Text>
          </VStack>

          <VStack gap={0}>
            <Heading fontSize={{ base: '2xl', md: '4xl' }} fontWeight="light" color="success.300" textAlign="center">
              {clients.length}+
            </Heading>
            <Text color="whiteAlpha.800" fontSize={{ base: 'xs', md: 'sm' }} textAlign="center" fontWeight="light">
              Active Integrations
            </Text>
          </VStack>
      

          <VStack gap={0}>
            <Heading fontSize={{ base: '2xl', md: '4xl' }} fontWeight="light" color="success.300" textAlign="center">
              {uptimePercentage}%
            </Heading>
            <Text color="whiteAlpha.800" fontSize={{ base: 'xs', md: 'sm' }} textAlign="center" fontWeight="light">
              Uptime
            </Text>
          </VStack>
        </Grid> */}

        {/* Enhanced Feature Cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={4} w="full" maxW="6xl" mt={8}>
          {[
            {
              icon: GitBranchIcon,
              title: 'Direct connection to off-chain reserves',
              description:
                'We connect to custodians, banks, or financial systems via secure APIs or validated files to extract real-world collateral data.',
              color: 'brand',
            },
            {
              icon: Zap,
              title: 'Live tracking of token issuance',
              description:
                'We monitor the smart contract of the token to track the circulating supply and match it against the verified reserve data.',
              color: 'warning',
            },
            {
              icon: ArrowUpIcon,
              title: 'Oracles that publish data onchain',
              description:
                'Using three oracle models (Push, Pull, Signature), we publish reserve data to smart contracts — with triggers like heartbeat or deviation.',
              color: 'success',
            },
            {
              icon: LayoutDashboardIcon,
              title: 'Real-time dashboard for transparency',
              description:
                'Our public dashboards display balances, update history, token supply, and onchain contract links — enabling full visibility and trust.',
              color: 'brand',
            },
          ].map((feature, index) => (
            <Box
              key={index}
              position="relative"
              p={6}
              bg="whiteAlpha.50"
              rounded="xl"
              border="1px solid"
              borderColor="whiteAlpha.200"
              backdropFilter="blur(12px)"
              transition="all 0.3s ease"
              _hover={{
                bg: 'whiteAlpha.100',
                borderColor: 'whiteAlpha.300',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
              }}
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                bg: 'linear-gradient(90deg, transparent, {colors.brand.400}, transparent)',
              }}
            >
              <VStack align="flex-start" gap={3} h="full">
                <Flex
                  align="center"
                  justify="center"
                  w={12}
                  h={12}
                  bg={`${feature.color}.500`}
                  rounded="lg"
                  color="white"
                  boxShadow={`0 4px 12px rgba(59, 130, 246, 0.3)`}
                >
                  <Icon as={feature.icon} boxSize={6} />
                </Flex>

                <VStack align="flex-start" gap={2} flex={1}>
                  <Text fontWeight="bold" fontSize="lg" color="white">
                    {feature.title}
                  </Text>
                  <Text fontSize="sm" color="whiteAlpha.800" lineHeight="1.5">
                    {feature.description}
                  </Text>
                </VStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};
