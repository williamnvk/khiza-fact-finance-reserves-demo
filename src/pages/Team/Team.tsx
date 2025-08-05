import { Avatar } from '@/components/ui/avatar';
import { TitleSection } from '@/components/ui/title-sectiont';
import { Box, Container, Heading, Text, VStack, SimpleGrid, Flex, HStack, AspectRatio } from '@chakra-ui/react';
import LinkedinIcon from '@/components/Icons/LinkedinIcon';
import { getTeamMembers } from '@/data/team';
import { SEO } from '@/components/Common/SEO';
import { useI18n } from '@/hooks/useI18n';

export default function Team() {
  const { t } = useI18n();
  const teamMembers = getTeamMembers(t);
  const cardBg = 'blackAlpha.500';
  const cardHoverBg = 'whiteAlpha.100';

  return (
    <>
      <SEO
        title="Our Team | Fact Finance"
        description="Meet the innovative team behind Fact Finance. Our experts specialize in blockchain, data infrastructure, and economic systems."
        keywords="Fact Finance team, blockchain experts, data infrastructure, web3 solutions, asset tokenization"
      />
      <Container maxW="6xl" py={{ base: 12, md: 20 }} aria-label="Team Section">
        <VStack gap={20} align="stretch">
          <TitleSection>
            <Text
              fontSize="sm"
              bgGradient="to-r"
              gradientFrom="brand.50"
              gradientTo="brand.400"
              bgClip="text"
              textTransform="uppercase"
              letterSpacing={2}
              fontWeight="600"
            >
              {t('about.team.sectionTitle')}
            </Text>
            <Heading as="h1" textStyle="title">
              {t('about.team.sectionHeading')}
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} maxW="3xl" mx="auto" textAlign="center" color="whiteAlpha.800">
              {t('about.team.sectionDescription')}
            </Text>
          </TitleSection>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={8} as="section" aria-label="Team Members">
            {teamMembers.map((member, index) => (
              <Box
                key={index}
                p={8}
                borderRadius="2xl"
                bg={cardBg}
                transition="all 0.3s ease"
                _hover={{
                  cursor: 'default',
                  bg: cardHoverBg,
                  transform: 'translateY(-8px)',
                  boxShadow: '2xl',
                }}
                role="article"
                aria-labelledby={`team-member-${index}`}
              >
                <VStack align="center" gap={4}>
                  <Box
                    w={32}
                    h={32}
                    position="relative"
                    _before={{
                      content: '""',
                      position: 'absolute',
                      top: '-4px',
                      left: '-4px',
                      right: '-4px',
                      bottom: '-4px',
                      bg: 'brand.300',
                      borderRadius: 'full',
                      opacity: 0.3,
                    }}
                  >
                    <Avatar
                      size="full"
                      name={member.name}
                      src={member.image}
                      alt={`${member.name}'s profile picture`}
                      aria-hidden="true"
                    />
                  </Box>
                  <VStack gap={2}>
                    <HStack gap={3}>
                      <Heading as="h2" size="lg" id={`team-member-${index}`}>
                        {member.name}
                      </Heading>
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ transition: 'transform 0.2s' }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        aria-label={`Visit ${member.name}'s LinkedIn profile`}
                      >
                        <LinkedinIcon width={24} height={24} />
                      </a>
                    </HStack>
                    <Text color="whiteAlpha.800" fontSize="md" textAlign="center" minH="100px" lineHeight="tall">
                      {member.bio}
                    </Text>
                  </VStack>
                  <Flex gap={3} flexWrap="wrap" justify="center">
                    {member.brands.map((brand, brandIndex) => (
                      <Box
                        w="auto"
                        key={brandIndex}
                        bg="whiteAlpha.100"
                        borderRadius="xl"
                        p={3}
                        _hover={{ bg: 'whiteAlpha.200' }}
                        transition="background 0.2s"
                        role="img"
                        aria-label={`${member.name}'s ${brand.type === 'icon' ? 'technology expertise' : 'brand'}`}
                      >
                        {brand.type === 'icon' ? (
                          brand.asset
                        ) : (
                          <img
                            src={brand.asset}
                            alt={`${member.name}'s technology expertise icon`}
                            style={{ width: 'auto', height: '24px' }}
                          />
                        )}
                      </Box>
                    ))}
                  </Flex>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          <Box as="section" aria-label="Media Appearances">
            <TitleSection>
              <Heading as="h2" textStyle="title">
                {t('about.media.sectionHeading')}
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} maxW="2xl" mx="auto" textAlign="center" color="whiteAlpha.800">
                {t('about.media.sectionDescription')}
              </Text>
            </TitleSection>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} mt={12}>
              {[
                { url: 'https://www.youtube.com/embed/V2JulIYOQ6A', title: t('about.media.videos.video2') },
                { url: 'https://www.youtube.com/embed/MT6ZBBPVpNM', title: t('about.media.videos.video1') },
              ].map((video, index) => (
                <Box key={index}>
                  <AspectRatio ratio={16 / 9}>
                    <iframe
                      src={video.url}
                      title={video.title}
                      allowFullScreen
                      loading="lazy"
                      style={{
                        borderRadius: '16px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                      }}
                    />
                  </AspectRatio>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </>
  );
}
