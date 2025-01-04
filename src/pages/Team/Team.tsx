import { Avatar } from '@/components/ui/avatar';
import { TitleSection } from '@/components/ui/title-sectiont';
import { Box, Container, Heading, Text, VStack, SimpleGrid, Flex, Image, HStack, AspectRatio } from '@chakra-ui/react';
import LinkedinIcon from '@/components/Icons/LinkedinIcon';
import { teamMembers } from '@/data/team';

export default function Team() {
  return (
    <Container maxW="5xl" py={{ base: 8, md: 16 }}>
      <VStack gap={16} align="stretch">
        <TitleSection>
          <Text fontSize="sm" color="brand.300">
            Meet the innovators
          </Text>
          <Heading textStyle="title">The team behind Fact Finance</Heading>
          <Text fontSize="lg">
            Dedicated professionals with deep expertise in blockchain, data infrastructure, and economic systems,
            committed to delivering secure and precise data solutions for web3 and real-world asset tokenization.
          </Text>
        </TitleSection>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={8}>
          {teamMembers.map((member, index) => (
            <Box
              key={index}
              p={16}
              borderRadius="xl"
              bg="blackAlpha.500"
              _hover={{ bg: 'whiteAlpha.100' }}
              transition="all 0.2s"
            >
              <VStack align="center" gap={0}>
                <Box w={24}>
                  <Avatar size="full" name={member.name} src={member.image} />
                </Box>
                <HStack>
                  <Heading size="2xl" mb={1}>
                    {member.name}
                  </Heading>
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon width={20} height={20} />
                  </a>
                </HStack>
                <Text color="whiteAlpha.800" fontSize="sm" mb={4} textAlign="center" height="100px">
                  {member.bio}
                </Text>
                <Flex gap={2}>
                  {member.icons.map((icon, index) => (
                    <Box w="auto" key={index} bg="whiteAlpha.50" borderRadius="xl" p={4}>
                      {icon}
                    </Box>
                  ))}
                  {member.images.map((image, index) => (
                    <Box key={index} bg="whiteAlpha.50" borderRadius="xl" p={4}>
                      <img src={image} alt={member.name} style={{ width: 'auto', height: '24px' }} />
                    </Box>
                  ))}
                </Flex>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        <Box>
          <TitleSection>
            <Heading textStyle="title">Learn More About Us</Heading>
            <Text fontSize="lg">Watch our recent podcast appearances to learn more about our vision and mission</Text>
          </TitleSection>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} mt={8}>
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.youtube.com/embed/V2JulIYOQ6A"
                title="Fact Finance Podcast 2"
                allowFullScreen
                style={{ borderRadius: '12px' }}
              />
            </AspectRatio>
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.youtube.com/embed/MT6ZBBPVpNM"
                title="Fact Finance Podcast 1"
                allowFullScreen
                style={{ borderRadius: '12px' }}
              />
            </AspectRatio>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
}
