import { Avatar } from '@/components/ui/avatar';
import { TitleSection } from '@/components/ui/title-sectiont';
import { Box, Container, Heading, Text, VStack, SimpleGrid, Flex, HStack, AspectRatio, Button } from '@chakra-ui/react';
import LinkedinIcon from '@/components/Icons/LinkedinIcon';
import { teamMembers } from '@/data/team';
import { SEO } from '@/components/Common/SEO';
import { Image } from '@chakra-ui/react';

export default function AboutUs() {
  const cardBg = 'blackAlpha.500';
  const cardHoverBg = 'whiteAlpha.100';

  return (
    <Box pos="relative" w="full" h="full" pt="25vh">
      <SEO
        title="About Fact Finance | Blockchain Data Infrastructure & Asset Tokenization"
        description="Fact Finance provides secure data infrastructure for the tokenized economy, connecting platforms to official sources. Meet our expert team in blockchain, data & finance."
        keywords="Fact Finance, blockchain data, asset tokenization, web3 infrastructure, blockchain experts, data solutions, real-world assets"
      />

      <Box
        as="video"
        position="absolute"
        top={0}
        left={0}
        w="100vw"
        h="100vh"
        objectFit="cover"
        playsInline
        autoPlay
        muted
        filter="brightness(.25)"
        transform="rotate(180deg)"
        mixBlendMode="luminosity"
        opacity={0.5}
        loop
        src="/assets/about/bg.mp4"
        aria-hidden="true"
        zIndex={-1}
      />
      <Box
        position="absolute"
        top="100vh"
        left="0%"
        transform="translate(-50%, -50%)"
        w="300vw"
        h="10vh"
        bg="radial-gradient(circle, {colors.black} 0%, {colors.black} 25%, rgba(0,0,0,.5) 100%)"
        filter="blur(30px)"
        zIndex={1}
      />

      <Container maxW="6xl" py={{ base: 12, md: 20 }} aria-label="About Us Section" zIndex={1}>
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
                <Image
                  src="/assets/about/luciano-juvinski-speaker.webp"
                  alt="Luciano Juvinski speaking at product launch event"
                  objectFit="cover"
                  w="full"
                  h="full"
                  filter="grayscale(100%)"
                  transition="all 0.2s ease-in-out"
                  _hover={{ filter: 'grayscale(0%)', transform: 'scale(1.1)' }}
                  loading="lazy"
                />
              </Box>
            </AspectRatio>

            <AspectRatio ratio={1}>
              <Box overflow="hidden" bg={cardBg} _hover={{ bg: cardHoverBg }} transition="all 0.2s">
                <Image
                  src="/assets/about/luciano-juvinski-speaker-2.webp"
                  alt="Fact Finance team discussing blockchain solutions at meeting"
                  objectFit="cover"
                  w="full"
                  filter="grayscale(100%)"
                  transition="all 0.2s ease-in-out"
                  _hover={{ filter: 'grayscale(0%)', transform: 'scale(1.1)' }}
                  h="full"
                  loading="lazy"
                />
              </Box>
            </AspectRatio>

            <AspectRatio ratio={1}>
              <Box overflow="hidden" bg={cardBg} _hover={{ bg: cardHoverBg }} transition="all 0.2s">
                <Image
                  src="/assets/about/fernanda-regina.webp"
                  alt="Fernanda Regina speaking at blockchain conference"
                  objectFit="cover"
                  w="full"
                  h="full"
                  filter="grayscale(100%)"
                  transition="all 0.2s ease-in-out"
                  _hover={{ filter: 'grayscale(0%)', transform: 'scale(1.1)' }}
                  loading="lazy"
                />
              </Box>
            </AspectRatio>

            <AspectRatio ratio={1}>
              <Box overflow="hidden" bg={cardBg} _hover={{ bg: cardHoverBg }} transition="all 0.2s">
                <Box
                  backgroundImage="url(/assets/about/fernanda-stand.webp)"
                  backgroundSize="cover"
                  backgroundPosition="-145px center"
                  backgroundRepeat="no-repeat"
                  w="full"
                  h="full"
                  filter="grayscale(100%)"
                  transition="all 0.2s ease-in-out"
                  _hover={{ filter: 'grayscale(0%)', transform: 'scale(1.1)' }}
                  role="img"
                  aria-label="Fernanda presenting Fact Finance solutions at a conference stand"
                />
              </Box>
            </AspectRatio>

            <AspectRatio ratio={1}>
              <Box overflow="hidden" bg={cardBg} _hover={{ bg: cardHoverBg }} transition="all 0.2s">
                <Image
                  src="/assets/about/demo-day.webp"
                  alt="Fact Finance team presenting at demo day event"
                  objectFit="cover"
                  w="full"
                  h="full"
                  filter="grayscale(100%)"
                  transition="all 0.2s ease-in-out"
                  _hover={{ filter: 'grayscale(0%)', transform: 'scale(1.1)' }}
                  loading="lazy"
                />
              </Box>
            </AspectRatio>

            <AspectRatio ratio={1}>
              <Box overflow="hidden" bg={cardBg} _hover={{ bg: cardHoverBg }} transition="all 0.2s">
                <Image
                  src="/assets/about/fact-finance-vencedores-premio-brasil.webp"
                  alt="Fact Finance team celebrating after receiving prestigious Brazil technology award"
                  objectFit="cover"
                  w="full"
                  h="full"
                  filter="grayscale(100%)"
                  transition="all 0.2s ease-in-out"
                  _hover={{ filter: 'grayscale(0%)', transform: 'scale(1.1)' }}
                  loading="lazy"
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
                  bgGradient="to-br"
                  gradientFrom="whiteAlpha.50"
                  gradientTo="transparent"
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
                          borderRadius: 'full',
                        }}
                      >
                        <Avatar size="full" name={member.name} src={member.image} aria-hidden="true" />
                      </Box>
                      <VStack align="flex-start" justify="center" gap={2} flex={1}>
                        <Heading as="h3" size="2xl" id={`team-member-${index}`}>
                          {member.name}
                        </Heading>

                        <Text color="brand.300" fontWeight="500">
                          {member.role}
                        </Text>
                      </VStack>
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
                    <Text color="whiteAlpha.800" fontSize="lg" lineHeight="tall">
                      {member.bio}
                    </Text>

                    {member.brands.length > 0 && (
                      <Flex gap={3} flexWrap="wrap" justify="flex-start" align="flex-start" w="full">
                        {member.brands.map((brand, index) => (
                          <Box
                            w="auto"
                            key={index}
                            bg="whiteAlpha.100"
                            borderRadius="lg"
                            p={4}
                            _hover={{ bg: 'whiteAlpha.200' }}
                            transition="background 0.2s"
                            role="img"
                            aria-label={`${member.name}'s ${brand.type === 'icon' ? 'technology expertise' : 'brand'}`}
                          >
                            {brand.type === 'icon' ? (
                              brand.asset
                            ) : (
                              <Image
                                src={brand.asset}
                                alt={`${member.name}'s expertise in ${brand.name}`}
                                style={{ width: 'auto', height: '24px' }}
                                loading="lazy"
                              />
                            )}
                          </Box>
                        ))}
                      </Flex>
                    )}
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
                {
                  url: 'https://www.youtube.com/embed/V2JulIYOQ6A',
                  title: 'Fact Finance discusses blockchain data infrastructure and asset tokenization',
                },
                {
                  url: 'https://www.youtube.com/embed/MT6ZBBPVpNM',
                  title: 'Fact Finance explains the future of tokenized assets',
                },
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
