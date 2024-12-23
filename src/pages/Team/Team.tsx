import { Avatar } from '@/components/ui/avatar';
import { TitleSection } from '@/components/ui/title-sectiont';
import { Box, Container, Heading, Text, VStack, SimpleGrid, HStack, Icon } from '@chakra-ui/react';
import LinkedinIcon from '@/components/Icons/LinkedinIcon';
import XIcon from '@/components/Icons/XIcon';

export default function Team() {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: '/team/john.jpg',
      bio: 'Former investment banker with 15 years of experience in traditional finance. Passionate about bridging TradFi and DeFi.',
      social: {
        linkedin: 'https://linkedin.com/in/johnsmith',
        twitter: 'https://twitter.com/johnsmith',
      },
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      image: '/team/sarah.jpg',
      bio: 'Blockchain architect with experience building DeFi protocols. Previously led engineering teams at major crypto projects.',
      social: {
        linkedin: 'https://linkedin.com/in/sarahchen',
        twitter: 'https://twitter.com/sarahchen',
      },
    },
    {
      name: 'Michael Lee',
      role: 'Head of Engineering',
      image: '/team/michael.jpg',
      bio: 'Full-stack developer specialized in distributed systems. Contributed to multiple open-source blockchain projects.',
      social: {
        linkedin: 'https://linkedin.com/in/michaellee',
        twitter: 'https://twitter.com/michaellee',
      },
    },
    {
      name: 'Emma Wilson',
      role: 'Head of Product',
      image: '/team/emma.jpg',
      bio: 'Product leader with expertise in fintech. Passionate about creating user-friendly blockchain solutions.',
      social: {
        linkedin: 'https://linkedin.com/in/emmawilson',
        twitter: 'https://twitter.com/emmawilson',
      },
    },
    {
      name: 'David Kumar',
      role: 'Head of Research',
      image: '/team/david.jpg',
      bio: 'PhD in Computer Science with focus on cryptography. Leading research initiatives in oracle systems.',
      social: {
        linkedin: 'https://linkedin.com/in/davidkumar',
        twitter: 'https://twitter.com/davidkumar',
      },
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Business Development',
      image: '/team/lisa.jpg',
      bio: 'Strategic partnerships expert with deep network in both traditional finance and crypto industries.',
      social: {
        linkedin: 'https://linkedin.com/in/lisawang',
        twitter: 'https://twitter.com/lisawang',
      },
    },
  ];

  return (
    <Box as="main">
      <Container maxW="5xl" py={{ base: 8, md: 16 }}>
        <VStack gap={12} align="stretch">
          <TitleSection>
            <Text fontSize="sm" color="brand.300">
              OUR TEAM
            </Text>
            <Heading textStyle="title">Meet the Innovators</Heading>
            <Text fontSize="lg">
              Our team brings together expertise from blockchain, finance, and technology sectors to build the future of
              decentralized data infrastructure.
            </Text>
          </TitleSection>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
            {teamMembers.map((member, index) => (
              <Box
                key={index}
                p={6}
                borderRadius="xl"
                bg="whiteAlpha.50"
                _hover={{ bg: 'whiteAlpha.100' }}
                transition="all 0.2s"
              >
                <VStack align="center" gap={4}>
                  <Avatar size="xl" name={member.name} src={member.image} />
                  <Box textAlign="center">
                    <Heading size="md" mb={1}>
                      {member.name}
                    </Heading>
                    <Text color="brand.300" fontSize="sm" mb={3}>
                      {member.role}
                    </Text>
                    <Text color="whiteAlpha.800" fontSize="sm" mb={4}>
                      {member.bio}
                    </Text>
                    <HStack justify="center" gap={4}>
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon width={20} height={20} />
                      </a>
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                        <XIcon width={20} height={20} />
                      </a>
                    </HStack>
                  </Box>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
