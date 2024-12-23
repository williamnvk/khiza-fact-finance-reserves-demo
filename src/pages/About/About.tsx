import { Avatar } from '@/components/ui/avatar'
import { TitleSection } from '@/components/ui/title-sectiont'
import { Box, Container, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react'

export default function About() {
  return (
    <Box as="main">
      <Container maxW="5xl" py={{ base: 8, md: 16 }}>
        <VStack gap={12} align="stretch">
          <TitleSection>
            <Text fontSize="sm" color="brand.300">
              ABOUT US
            </Text>
            <Heading textStyle="title">Our Mission</Heading>
            <Text fontSize="lg">
              Fact Finance is building the bridge between traditional finance data and blockchain ecosystems. 
              We provide reliable, verified data from official sources to power the next generation of 
              decentralized applications and smart contracts.
            </Text>
          </TitleSection>

          <Box>
            <Heading fontSize="2xl" mb={4}>Who We Are</Heading>
            <Text>
              We are a team of blockchain enthusiasts, developers, and finance experts working together 
              to solve the oracle problem. Our goal is to make reliable financial data accessible on-chain,
              enabling new possibilities for DeFi applications and tokenized assets.
            </Text>
          </Box>

          <Box>
            <Heading fontSize="2xl" mb={4}>Our Vision</Heading>
            <Text>
              We envision a future where blockchain technology and traditional finance seamlessly integrate,
              creating more efficient, transparent, and accessible financial systems for everyone. Through our
              oracle solutions, we're making this vision a reality.
            </Text>
          </Box>

          <Box>
            <Heading fontSize="2xl" mb={8}>Our Team</Heading>
            <SimpleGrid columns={{ base: 2, md: 4 }} gap={8}>
              <VStack>
                <Avatar size="xl" name="John Smith" src="/team/john.jpg" />
                <Text fontWeight="bold" mt={2}>John Smith</Text>
                <Text color="whiteAlpha.700" fontSize="sm">CEO & Founder</Text>
              </VStack>
              <VStack>
                <Avatar size="xl" name="Sarah Chen" src="/team/sarah.jpg" />
                <Text fontWeight="bold" mt={2}>Sarah Chen</Text>
                <Text color="whiteAlpha.700" fontSize="sm">CTO</Text>
              </VStack>
              <VStack>
                <Avatar size="xl" name="Michael Lee" src="/team/michael.jpg" />
                <Text fontWeight="bold" mt={2}>Michael Lee</Text>
                <Text color="whiteAlpha.700" fontSize="sm">Head of Engineering</Text>
              </VStack>
              <VStack>
                <Avatar size="xl" name="Emma Wilson" src="/team/emma.jpg" />
                <Text fontWeight="bold" mt={2}>Emma Wilson</Text>
                <Text color="whiteAlpha.700" fontSize="sm">Head of Product</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
