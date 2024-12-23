import { TitleSection } from '@/components/ui/title-sectiont'
import { Box, Container, Heading, Text, VStack, SimpleGrid, Button, HStack, Badge } from '@chakra-ui/react'

export default function Careers() {
  const jobs = [
    {
      title: "Senior Blockchain Developer",
      type: "Contract",
      location: "Remote",
      description: "We're looking for an experienced blockchain developer to help build and maintain our oracle infrastructure across multiple chains."
    },
    {
      title: "Smart Contract Engineer", 
      type: "Contract",
      location: "Remote",
      description: "Join us in developing secure and efficient smart contracts for our oracle solutions and data verification systems."
    },
    {
      title: "Frontend Developer",
      type: "Contract", 
      location: "Remote",
      description: "Help create intuitive and responsive user interfaces for our web3 applications and developer tools."
    },
    {
      title: "Technical Writer",
      type: "Contract",
      location: "Remote", 
      description: "Create clear, comprehensive documentation and guides for developers integrating our oracle solutions."
    },
    {
      title: "DevOps Engineer",
      type: "Contract",
      location: "Remote",
      description: "Build and maintain our cloud infrastructure and deployment pipelines across multiple environments."
    }
  ]

  return (
    <Box as="main">
      <Container maxW="5xl" py={{ base: 8, md: 16 }}>
        <VStack gap={12} align="stretch">
          <TitleSection>
            <Text fontSize="sm" color="brand.300">
              JOIN OUR TEAM
            </Text>
            <Heading textStyle="title">Build the Future of Finance</Heading>
            <Text fontSize="lg">
              At Fact Finance, we're on a mission to bridge the gap between traditional finance and blockchain technology. 
              We're looking for passionate individuals who share our vision of creating more transparent and efficient financial systems.
            </Text>
          </TitleSection>

          <Box>
            <Heading fontSize="2xl" mb={4}>Our Culture</Heading>
            <Text mb={6}>
              We believe in fostering an environment of innovation, collaboration, and continuous learning. 
              Our team is distributed globally, and we embrace remote work culture while maintaining strong 
              connections through regular virtual meetings and team events.
            </Text>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
              <Box p={6} borderRadius="xl" bg="whiteAlpha.100">
                <Heading size="md" mb={3}>Innovation First</Heading>
                <Text>We encourage creative solutions and welcome new ideas from every team member.</Text>
              </Box>
              <Box p={6} borderRadius="xl" bg="whiteAlpha.100">
                <Heading size="md" mb={3}>Work-Life Balance</Heading>
                <Text>We value flexibility and understand the importance of maintaining a healthy balance.</Text>
              </Box>
              <Box p={6} borderRadius="xl" bg="whiteAlpha.100">
                <Heading size="md" mb={3}>Growth Mindset</Heading>
                <Text>We invest in our team's development and provide opportunities to learn and grow.</Text>
              </Box>
            </SimpleGrid>
          </Box>

          <Box>
            <Heading fontSize="2xl" mb={8}>Open Positions</Heading>
            <VStack gap={4} align="stretch">
              {jobs.map((job, index) => (
                <Box key={index} p={6} borderRadius="xl" bg="whiteAlpha.50" _hover={{ bg: "whiteAlpha.100" }}>
                  <HStack justify="space-between" mb={3}>
                    <Heading size="md">{job.title}</Heading>
                    <HStack>
                      <Badge colorScheme="green">{job.type}</Badge>
                      <Badge colorScheme="blue">{job.location}</Badge>
                    </HStack>
                  </HStack>
                  <Text mb={4}>{job.description}</Text>
                  <Button size="sm" variant="outline">Apply Now</Button>
                </Box>
              ))}
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
