import { Avatar } from '@/components/ui/avatar';
import { TitleSection } from '@/components/ui/title-sectiont';
import { Box, Container, Heading, Text, VStack, SimpleGrid, Flex, HStack, AspectRatio, Button } from '@chakra-ui/react';
import LinkedinIcon from '@/components/Icons/LinkedinIcon';
import { teamMembers } from '@/data/team';
import { SEO } from '@/components/Common/SEO';

export default function AboutUs() {
  const cardBg = 'blackAlpha.500';
  const cardHoverBg = 'whiteAlpha.100';

  return (
    <Box bg="#000" pos="relative" w="full" h="full" pt="25vh">
      <SEO
        title="About Us | Fact Finance"
        description="Meet the innovative team behind Fact Finance. Our experts specialize in blockchain, data infrastructure, and economic systems."
        keywords="Fact Finance team, blockchain experts, data infrastructure, web3 solutions, asset tokenization"
      />

      <Box
        // borderRadius="4xl"
        // border="2px solid {colors.whiteAlpha.200}"
        // boxShadow="2xl"
        as="video"
        position="absolute"
        top={0}
        left={0}
        w="100vw"
        h="50vh"
        objectFit="cover"
        zIndex={0}
        autoPlay
        muted
        filter="brightness(.25)"
        transform="rotate(180deg)"
        mixBlendMode="luminosity"
        // blendMode="soft-light"
        opacity={.5}
        loop
        src="/assets/hero-7.mp4"
      />

      <Container maxW="6xl" py={{ base: 12, md: 20 }} as="main" role="main" aria-label="About Us Section">
        <VStack gap={8} align="stretch">
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
              Our History
            </Text>
            <Heading as="h1" textStyle="title">
              Bridging Traditional Finance with Web3
            </Heading>
            <Text textAlign="center" textStyle="subtitle">
              Fact Finance was born to provide data infrastructure for the tokenized economy. We connect tokenization
              platforms to official and licensed sources, enabling secure and compliant access to data.{' '}
            </Text>
          </TitleSection>

          <SimpleGrid columns={{ base: 2, md: 3 }} w="full" borderRadius="2xl" overflow="hidden" maxW="4xl" mx="auto">
            <AspectRatio ratio={1}>
              <Box overflow="hidden" bg={cardBg} _hover={{ bg: cardHoverBg }} transition="all 0.2s">
                <Box
                  as="img"
                  src="/about/picture-1.jpeg"
                  alt="Team meeting discussing blockchain solutions"
                  objectFit="cover"
                  w="full"
                  filter="grayscale(100%)"
                  transition="all 0.2s ease-in-out"
                  _hover={{ filter: 'grayscale(0%)', transform: 'scale(1.1)' }}
                  h="full"
                />
              </Box>
            </AspectRatio>

            <AspectRatio ratio={1}>
              <Box overflow="hidden" bg={cardBg} _hover={{ bg: cardHoverBg }} transition="all 0.2s">
                <Box
                  as="img"
                  src="/about/picture-2.jpeg"
                  alt="Product launch event"
                  objectFit="cover"
                  w="full"
                  h="full"
                  filter="grayscale(100%)"
                  transition="all 0.2s ease-in-out"
                  _hover={{ filter: 'grayscale(0%)', transform: 'scale(1.1)' }}
                />
              </Box>
            </AspectRatio>

            <AspectRatio ratio={1}>
              <Box overflow="hidden" bg={cardBg} _hover={{ bg: cardHoverBg }} transition="all 0.2s">
                <Box
                  as="img"
                  src="/about/picture-3.jpeg"
                  alt="Speaking at blockchain conference"
                  objectFit="cover"
                  w="full"
                  h="full"
                  filter="grayscale(100%)"
                  transition="all 0.2s ease-in-out"
                  _hover={{ filter: 'grayscale(0%)', transform: 'scale(1.1)' }}
                />
              </Box>
            </AspectRatio>

            <AspectRatio ratio={1}>
              <Box overflow="hidden" bg={cardBg} _hover={{ bg: cardHoverBg }} transition="all 0.2s">
                <Box
                  as="img"
                  src="/about/solana-1.jpeg"
                  alt="Development team coding"
                  objectFit="cover"
                  w="full"
                  h="full"
                  filter="grayscale(100%)"
                  transition="all 0.2s ease-in-out"
                  _hover={{ filter: 'grayscale(0%)', transform: 'scale(1.1)' }}
                />
              </Box>
            </AspectRatio>

            <AspectRatio ratio={1}>
              <Box overflow="hidden" bg={cardBg} _hover={{ bg: cardHoverBg }} transition="all 0.2s">
                <Box
                  as="img"
                  src="/about/win-national-pitch-battle.jpeg"
                  alt="Partnership signing ceremony"
                  objectFit="cover"
                  w="full"
                  h="full"
                  filter="grayscale(100%)"
                  transition="all 0.2s ease-in-out"
                  _hover={{ filter: 'grayscale(0%)', transform: 'scale(1.1)' }}
                />
              </Box>
            </AspectRatio>

            <AspectRatio ratio={1}>
              <Box overflow="hidden" bg={cardBg} _hover={{ bg: cardHoverBg }} transition="all 0.2s">
                <Box
                  as="img"
                  src="/about/solana-vencedor.jpeg"
                  alt="Our office space"
                  objectFit="cover"
                  w="full"
                  h="full"
                  filter="grayscale(100%)"
                  transition="all 0.2s ease-in-out"
                  _hover={{ filter: 'grayscale(0%)', transform: 'scale(1.1)' }}
                />
              </Box>
            </AspectRatio>
          </SimpleGrid>

          <VStack gap={6} align="stretch" maxW="4xl" mx="auto">
            <Text fontSize="xl" lineHeight="tall" textAlign="center">
              <Text as="span" fontWeight="bold">
                Our vision
              </Text>{' '}
              is to accelerate blockchain adoption by bridging the gap between decentralized systems and the off-chain
              world. As the tokenization era evolves and demands for diverse, standardized data grow, Fact Finance aims
              to be the go-to data hub, empowering the industry with seamless access to reliable information.
            </Text>
          </VStack>

          <Box py={8}>
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
                Meet the innovators
              </Text>
              <Heading as="h2" textStyle="title">
                The team behind Fact Finance
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} maxW="3xl" mx="auto" textAlign="center" color="whiteAlpha.800">
                Dedicated professionals with deep expertise in blockchain, data infrastructure, and economic systems,
                committed to delivering secure and precise data solutions for web3 and real-world asset tokenization.
              </Text>
            </TitleSection>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={8} mt={12} as="section" aria-label="Team Members">
              {teamMembers.map((member, index) => (
                <Box
                  key={index}
                  p={8}
                  borderRadius="2xl"
                  bg={cardBg}
                  role="article"
                  aria-labelledby={`team-member-${index}`}
                >
                  <VStack align="flex-start" gap={6} w="full">
                    <HStack gap={{ base: 4, md: 6 }} align="center" w="full">
                      <Box
                        w={24}
                        h={24}
                        position="relative"
                        _before={{
                          content: '""',
                          position: 'absolute',
                          top: '-4px',
                          left: '-4px',
                          right: '-4px',
                          bottom: '-4px',
                          bg: 'brand.500',
                          borderRadius: 'xl',
                        }}
                      >
                        <Avatar
                          size="full"
                          borderRadius="xl"
                          name={member.name}
                          src={member.image}
                          aria-hidden="true"
                        />
                      </Box>
                      <VStack align="flex-start" gap={2}>
                        <HStack>
                          <Heading as="h3" size="2xl" id={`team-member-${index}`}>
                            {member.name}
                          </Heading>
                          <Button
                            as="a"
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            leftIcon={<LinkedinIcon width={20} height={20} />}
                            size="sm"
                            variant="plain"
                            aria-label={`Visit ${member.name}'s LinkedIn profile`}
                          >
                            <LinkedinIcon />
                          </Button>
                        </HStack>

                        <Text color="brand.400" fontWeight="500">
                          {member.role}
                        </Text>
                      </VStack>
                    </HStack>
                    <Text color="whiteAlpha.800" fontSize="md" lineHeight="tall">
                      {member.bio}
                    </Text>
                    <Flex gap={3} flexWrap="wrap" justify="flex-start" align="flex-start" w="full">
                      {member.icons.map((icon, index) => (
                        <Box
                          w="auto"
                          key={index}
                          bg="whiteAlpha.100"
                          borderRadius="lg"
                          p={4}
                          _hover={{ bg: 'whiteAlpha.200' }}
                          transition="background 0.2s"
                          role="img"
                          aria-label={`Icon`}
                        >
                          {icon}
                        </Box>
                      ))}
                      {member.images.map((image, index) => (
                        <Box
                          key={index}
                          bg="whiteAlpha.100"
                          borderRadius="lg"
                          p={4}
                          _hover={{ bg: 'whiteAlpha.200' }}
                          transition="background 0.2s"
                        >
                          <img
                            src={image}
                            alt={`${member.name}'s technology expertise icon`}
                            style={{ width: 'auto', height: '24px' }}
                          />
                        </Box>
                      ))}
                    </Flex>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Box as="section" aria-label="Media Appearances" py={8}>
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
                Media & Press
              </Text>
              <Heading as="h2" textStyle="title">
                Learn More About Us
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} maxW="2xl" mx="auto" textAlign="center" color="whiteAlpha.800">
                Watch our recent podcast appearances to learn more about our vision and mission
              </Text>
            </TitleSection>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} mt={12}>
              {[
                { url: 'https://www.youtube.com/embed/V2JulIYOQ6A', title: 'Fact Finance Podcast 2' },
                { url: 'https://www.youtube.com/embed/MT6ZBBPVpNM', title: 'Fact Finance Podcast 1' },
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
    </Box>
  );
}
