import { TitleSection } from '@/components/ui/title-sectiont';
import { Box, Container, SimpleGrid, Heading, Text, VStack } from '@chakra-ui/react';

export default function DataHub() {
  return (
    <Box>
      <Container maxW="5xl" py={{ base: 8, md: 16 }}>
        <VStack gap={12} align="stretch">
          <TitleSection>
            <Text fontSize="sm" color="brand.300">
              DATA HUB
            </Text>
            <Heading textStyle="title">Financial Data Oracle</Heading>
            <Text fontSize="lg">
              Access verified financial data from traditional markets directly on-chain. Our oracle network provides 
              reliable, real-time data feeds for DeFi applications and smart contracts.
            </Text>
          </TitleSection>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
            <Box p={6} borderRadius="xl" bg="whiteAlpha.50">
              <Heading size="md" mb={4}>Market Data</Heading>
              <Text>
                Real-time and historical price feeds for stocks, commodities, forex pairs and more from trusted sources.
              </Text>
            </Box>

            <Box p={6} borderRadius="xl" bg="whiteAlpha.50">
              <Heading size="md" mb={4}>Economic Indicators</Heading>
              <Text>
                Key economic metrics including inflation rates, GDP, employment data and other macroeconomic indicators.
              </Text>
            </Box>

            <Box p={6} borderRadius="xl" bg="whiteAlpha.50">
              <Heading size="md" mb={4}>Company Financials</Heading>
              <Text>
                Corporate financial data including earnings reports, balance sheets, and other fundamental metrics.
              </Text>
            </Box>
          </SimpleGrid>

          <Box>
            <Heading fontSize="2xl" mb={4}>How It Works</Heading>
            <Text>
              Our oracle network aggregates data from multiple authoritative sources, validates it through our node network,
              and makes it available on-chain through smart contracts. This ensures maximum reliability and accuracy for
              your decentralized applications.
            </Text>
          </Box>

          <Box>
            <Heading fontSize="2xl" mb={4}>Data Quality</Heading>
            <Text>
              All data feeds are verified and cross-referenced across multiple trusted sources. Our validation process
              ensures data integrity and prevents manipulation, providing a secure foundation for your DeFi applications.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
