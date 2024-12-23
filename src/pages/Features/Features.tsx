import { TitleSection } from '@/components/ui/title-sectiont'
import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon, HStack, Button } from '@chakra-ui/react'
import { DatabaseIcon, Globe2Icon, LockIcon, ServerIcon, ShieldIcon, ZapIcon } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: DatabaseIcon,
      title: "Official Data Sources",
      description: "Direct integration with authoritative financial data providers and government sources ensures the highest level of data accuracy and reliability."
    },
    {
      icon: LockIcon,
      title: "Secure Infrastructure",
      description: "Enterprise-grade security measures protect our infrastructure and data transmission channels, maintaining data integrity at every step."
    },
    {
      icon: ZapIcon,
      title: "Real-time Updates",
      description: "Lightning-fast data delivery with minimal latency, ensuring your smart contracts always operate with the most current information."
    },
    {
      icon: Globe2Icon  ,
      title: "Cross-chain Support",
      description: "Seamless integration across multiple blockchain networks, including Ethereum, Solana, Polygon, and more."
    },
    {
      icon: ServerIcon,
      title: "Scalable Architecture",
      description: "Built to handle high-volume requests with redundancy and failover systems ensuring 99.99% uptime."
    },
    {
      icon: ShieldIcon,
      title: "Verifiable Proofs",
      description: "Cryptographic proof systems validate data authenticity, providing transparency and trust in the oracle network."
    }
  ]

  const useCases = [
    {
      title: "DeFi Protocols",
      description: "Power lending protocols, synthetic assets, and derivatives with accurate price feeds and market data.",
      benefits: ["Real-time price data", "Interest rate feeds", "Market indicators"]
    },
    {
      title: "Asset Tokenization",
      description: "Create and manage tokenized real-world assets with verified underlying data.",
      benefits: ["Property valuations", "Company financials", "Commodity prices"]
    },
    {
      title: "Insurance Products",
      description: "Build parametric insurance solutions using reliable external data triggers.",
      benefits: ["Weather data", "Event verification", "Risk assessment"]
    }
  ]

  return (
    <Box as="main">
      <Container maxW="5xl" py={{ base: 8, md: 16 }}>
        <VStack gap={16} align="stretch">
          <TitleSection>
            <Text fontSize="sm" color="brand.300">
              FEATURES
            </Text>
            <Heading textStyle="title">Powering the Future of Finance</Heading>
            <Text fontSize="lg">
              Our oracle network provides secure, reliable, and verifiable data feeds to power 
              the next generation of blockchain applications. Built with scalability and 
              security at its core.
            </Text>
          </TitleSection>

          <Box>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
              {features.map((feature, index) => (
                <Box 
                  key={index}
                  p={6}
                  borderRadius="xl"
                  bg="whiteAlpha.50"
                  _hover={{ bg: "whiteAlpha.100" }}
                  transition="all 0.2s"
                >
                  <feature.icon />
                  <Heading size="md" mb={3}>{feature.title}</Heading>
                  <Text color="whiteAlpha.800">{feature.description}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Box>
            <Heading fontSize="2xl" mb={8}>Use Cases</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
              {useCases.map((useCase, index) => (
                <Box 
                  key={index}
                  p={6}
                  borderRadius="xl"
                  bg="whiteAlpha.100"
                  height="100%"
                >
                  <Heading size="md" mb={4}>{useCase.title}</Heading>
                  <Text mb={4} color="whiteAlpha.800">{useCase.description}</Text>
                  <VStack align="stretch" gap={2}>
                    {useCase.benefits.map((benefit, i) => (
                      <Text key={i} fontSize="sm" color="brand.300">• {benefit}</Text>
                    ))}
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Box bg="whiteAlpha.50" p={8} borderRadius="xl">
            <VStack align="center" gap={6}>
              <Heading size="lg">Ready to Get Started?</Heading>
              <Text textAlign="center" maxW="2xl">
                Join the growing ecosystem of applications powered by Fact Finance's oracle network. 
                Our team is here to help you integrate reliable data feeds into your blockchain projects.
              </Text>
              <HStack gap={4}>
                <Button size="lg">View Documentation</Button>
                <Button size="lg" variant="outline">Contact Sales</Button>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
