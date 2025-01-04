import { TitleSection } from '@/components/ui/title-sectiont'
import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon, HStack } from '@chakra-ui/react'
import { BarChart3Icon, ShieldCheckIcon, FileCheckIcon } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: BarChart3Icon,
      title: "Confidence Index",
      description: "We classify data into three categories: Reliable (80% confidence), Acceptable (99% confidence), and Outlier. This classification helps prevent market manipulation and enables protocols to make informed decisions.",
      applications: [
        "Tokenization platforms withhold payments for outlier rate quotes",
        "Stablecoins limit transactions when confidence is low",
        "Decentralized lending adjusts interest rates for outlier assets",
        "Prediction markets validate data before accepting wagers",
        "Insurance platforms adjust premiums based on confidence index"
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: "External Auditor",
      description: "Our external auditing feature ensures data integrity through independent verification, providing an additional layer of security for all transactions.",
      benefits: [
        "Validate data authenticity and compliance",
        "Identify anomalies for further review",
        "Enhance trust and transparency",
        "Maintain rigorous standards"
      ]
    },
    {
      icon: FileCheckIcon,
      title: "Proof of Authenticity",
      description: "We secure licensing agreements with trusted data providers and ensure their credibility through comprehensive audits and compliance checks.",
      components: [
        "Licensing and Partnership with renowned data providers",
        "Know Your Provider (KYP) thorough audit process",
        "Cryptographic validation with unique provider keys"
      ]
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
            <Heading textStyle="title">Why choose Fact Finance</Heading>
            <Text fontSize="lg">
              Explore the key features that make us the trusted data layer for asset tokenization, 
              empowering secure and efficient blockchain solutions
            </Text>
          </TitleSection>

          <VStack gap={12}>
            {features.map((feature, index) => (
              <Box 
                key={index}
                w="full"
                p={8}
                borderRadius="xl"
                bg="whiteAlpha.50"
              >
                <VStack align="start" gap={6}>
                  <HStack>
                    <Box p={3} bg="whiteAlpha.100" borderRadius="lg">
                      <feature.icon size={24} />
                    </Box>
                    <Heading size="lg">{feature.title}</Heading>
                  </HStack>
                  
                  <Text color="whiteAlpha.800" fontSize="lg">
                    {feature.description}
                  </Text>

                  <Box>
                    {feature.applications && (
                      <VStack align="start" gap={2}>
                        {feature.applications.map((item, i) => (
                          <Text key={i} color="whiteAlpha.800">• {item}</Text>
                        ))}
                      </VStack>
                    )}
                    {feature.benefits && (
                      <VStack align="start" gap={2}>
                        {feature.benefits.map((item, i) => (
                          <Text key={i} color="whiteAlpha.800">• {item}</Text>
                        ))}
                      </VStack>
                    )}
                    {feature.components && (
                      <VStack align="start" gap={2}>
                        {feature.components.map((item, i) => (
                          <Text key={i} color="whiteAlpha.800">• {item}</Text>
                        ))}
                      </VStack>
                    )}
                  </Box>
                </VStack>
              </Box>
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}
