import { TitleSection } from '@/components/ui/title-sectiont'
import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon, Button } from '@chakra-ui/react'
import { BarChart3Icon, BuildingIcon, ShieldIcon, CoinsIcon } from 'lucide-react'

export default function UseCases() {
  const useCases = [
    {
      icon: BuildingIcon,
      title: "Enterprise Finance",
      description: "Enable real-time financial reporting and automated compliance with verified data feeds.",
      examples: [
        "Automated financial statements",
        "Regulatory reporting",
        "Treasury management"
      ]
    },
    {
      icon: CoinsIcon, 
      title: "DeFi Applications",
      description: "Build robust decentralized financial products with reliable market data and price feeds.",
      examples: [
        "Lending protocols",
        "Synthetic assets",
        "Derivatives platforms"
      ]
    },
    {
      icon: ShieldIcon,
      title: "Insurance Solutions",
      description: "Create innovative insurance products using verified real-world data triggers.",
      examples: [
        "Parametric insurance",
        "Risk assessment",
        "Claims automation"
      ]
    },
    {
      icon: BarChart3Icon,
      title: "Asset Management",
      description: "Power tokenized investment products with accurate pricing and market data.",
      examples: [
        "Real estate tokens",
        "Commodity-backed assets", 
        "Investment funds"
      ]
    }
  ]

  return (
    <Box>
      <Container maxW="5xl" py={{ base: 8, md: 16 }}>
        <VStack gap={12} align="stretch">
          <TitleSection>
            <Text fontSize="sm" color="brand.300">
              USE CASES
            </Text>
            <Heading textStyle="title">Transform Your Industry</Heading>
            <Text fontSize="lg">
              Fact Finance's oracle network enables innovative blockchain solutions across multiple industries.
              Discover how our verified data feeds can power your next application.
            </Text>
          </TitleSection>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
            {useCases.map((useCase, index) => (
              <Box 
                key={index}
                p={8}
                borderRadius="xl"
                bg="whiteAlpha.50"
                _hover={{ bg: "whiteAlpha.100" }}
                transition="all 0.2s"
              >
                <useCase.icon />
                <Heading size="md" mb={3}>{useCase.title}</Heading>
                <Text color="whiteAlpha.800" mb={4}>{useCase.description}</Text>
                <VStack align="stretch" gap={2}>
                  {useCase.examples.map((example, i) => (
                    <Text key={i} fontSize="sm" color="whiteAlpha.600">• {example}</Text>
                  ))}
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          <Box bg="whiteAlpha.100" p={8} borderRadius="xl" textAlign="center">
            <Heading size="lg" mb={4}>Ready to Build?</Heading>
            <Text maxW="2xl" mx="auto" mb={6}>
              Start building with Fact Finance today. Our team is ready to help you implement
              reliable data feeds for your specific use case.
            </Text>
            <Button size="lg">Contact Our Team</Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
