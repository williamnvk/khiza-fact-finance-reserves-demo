import { Container, Heading, Text, Grid, VStack, Box, Icon, SimpleGrid, Flex } from '@chakra-ui/react';
import { Eye, Lock, Globe, Zap } from 'lucide-react';
import { formatLargeNumber } from '@/lib/utils';
import { SystemStatus } from './system-status';

export const HomeHero = ({ totalReserves, clients }: { totalReserves: number; clients: any[] }) => {
  const uptimePercentage = 99.9;

  return (
    <Container maxW="7xl" position="relative" zIndex={1} py={24}>
      <VStack w="full" h="full" justify="center" gap={8}>
        <SystemStatus />

        <VStack align="center" gap={4} w="full" my={16}>
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
            fontSize="7xl"
            lineHeight="1.1"
            bgImage="linear-gradient(35deg, white, {colors.brand.200}, {colors.brand.200})"
            bgClip="text"
            fontWeight="400"
            textAlign="center"
            maxW="6xl"
          >
            Onchain proof of reserves for the{' '}
            <Text
              as="span"
              bgImage="linear-gradient(35deg, white, {colors.brand.500}, {colors.brand.200})"
              bgClip="text"
              fontWeight="semibold"
            >
              Real-World Assets
            </Text>
          </Heading>

          <Text fontSize="xl" textAlign="center" color="whiteAlpha.800" maxW="3xl">
            We connect tokenized assets to their off-chain reserves, delivering real-time onchain collateral
            verification through public dashboards for transparency and tracking.
          </Text>
        </VStack>

        {/* Key Stats */}
        <Grid templateColumns="repeat(3, 1fr)" gap={6} maxW="2xl" w="full" py={4}>
          <VStack gap={0}>
            <Heading fontSize="4xl" fontWeight="light" color="success.300" textAlign="center">
              ${formatLargeNumber(totalReserves)}
            </Heading>
            <Text color="whiteAlpha.800" fontSize="sm" fontWeight="light">
              Total Verified Reserves
            </Text>
          </VStack>

          <VStack gap={0}>
            <Heading fontSize="4xl" fontWeight="light" color="success.300" textAlign="center">
              {clients.length}+
            </Heading>
            <Text color="whiteAlpha.800" fontSize="sm" fontWeight="light">
              Active Integrations
            </Text>
          </VStack>
          {/* 
          <VStack gap={0}>
            <Heading fontSize="4xl" fontWeight="light" color="success.300" textAlign="center">
              {totalAudits}
            </Heading>
            <Text color="whiteAlpha.800" fontSize="sm" fontWeight="light">
              Total audits
            </Text>
          </VStack> */}

          <VStack gap={0}>
            <Heading fontSize="4xl" fontWeight="light" color="success.300" textAlign="center">
              {uptimePercentage}%
            </Heading>
            <Text color="whiteAlpha.800" fontSize="sm" fontWeight="light">
              Uptime
            </Text>
          </VStack>
        </Grid>

        {/* Enhanced Feature Cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={4} w="full" maxW="6xl" mt={8}>
          {[
            {
              icon: Eye,
              title: 'Direct connection to off-chain reserves',
              description:
                'We connect to custodians, banks, or financial systems via secure APIs or validated files to extract real-world collateral data.',
              color: 'brand',
            },
            {
              icon: Zap,
              title: 'Instant verification',
              description: 'Automated monitoring and instant alerts for any discrepancies',
              color: 'warning',
            },
            {
              icon: Lock,
              title: 'Enterprise security',
              description: 'Bank-grade security protocols with multi-layer protection',
              color: 'success',
            },
            {
              icon: Globe,
              title: 'Global compliance',
              description: 'Adherence to international regulatory standards and frameworks',
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
                transform: 'translateY(-4px)',
                bg: 'whiteAlpha.100',
                borderColor: 'whiteAlpha.300',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
              }}
              cursor="pointer"
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
