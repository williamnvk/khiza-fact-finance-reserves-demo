import { TitleSection } from '@/components/ui/title-sectiont';
import { Box, Container, SimpleGrid, Heading, Text, VStack } from '@chakra-ui/react';
import { teamMembers } from '@/data/team';
import { Avatar } from '@/components/ui/avatar';
import LinkedinIcon from '@/components/Icons/LinkedinIcon';

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
              Fact Finance is building the bridge between traditional finance data and blockchain ecosystems. We provide
              reliable, verified data from official sources to power the next generation of decentralized applications
              and smart contracts.
            </Text>
          </TitleSection>

          <Box>
            <Heading fontSize="2xl" mb={4}>
              Who We Are
            </Heading>
            <Text>
              We are a team of blockchain enthusiasts, developers, and finance experts working together to solve the
              oracle problem. Our goal is to make reliable financial data accessible on-chain, enabling new
              possibilities for DeFi applications and tokenized assets.
            </Text>
          </Box>

          <Box>
            <Heading fontSize="2xl" mb={4}>
              Our Vision
            </Heading>
            <Text>
              We envision a future where blockchain technology and traditional finance seamlessly integrate, creating
              more efficient, transparent, and accessible financial systems for everyone. Through our oracle solutions,
              we're making this vision a reality.
            </Text>
          </Box>

          <VStack gap={12} align="stretch">
            <TitleSection>
              <Text fontSize="sm" color="brand.300">
                OUR TEAM
              </Text>
              <Heading textStyle="title">Meet the Innovators</Heading>
              <Text fontSize="lg">
                Our team brings together expertise from blockchain, finance, and technology sectors to build the future
                of decentralized data infrastructure.
              </Text>
            </TitleSection>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={8}>
              {teamMembers.map((member, index) => (
                <Box
                  key={index}
                  p={6}
                  borderRadius="xl"
                  bg="whiteAlpha.50"
                  _hover={{ bg: 'whiteAlpha.100' }}
                  transition="all 0.2s"
                >
                  <VStack align="center" gap={0}>
                    <Avatar size="xl" name={member.name} src={member.image} />
                    <Heading size="md" mb={1}>
                      {member.name}
                    </Heading>
                    <Text color="brand.300" fontSize="sm" mb={3}>
                      {member.role}
                    </Text>
                    <Text color="whiteAlpha.800" fontSize="sm" mb={4} textAlign="center">
                      {member.bio}
                    </Text>
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <LinkedinIcon width={20} height={20} />
                    </a>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
