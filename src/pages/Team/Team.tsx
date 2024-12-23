import { Avatar } from '@/components/ui/avatar';
import { TitleSection } from '@/components/ui/title-sectiont';
import { Box, Container, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react';
import LinkedinIcon from '@/components/Icons/LinkedinIcon';
import { teamMembers } from '@/data/team';

export default function Team() {
  return (
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
    </Container>
  );
}
