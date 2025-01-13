import { TitleSection } from '@/components/ui/title-sectiont';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Flex,
  HStack,
  AspectRatio,
  IconButton,
} from '@chakra-ui/react';
import LinkedinIcon from '@/components/Icons/LinkedinIcon';
import { teamMembers } from '@/data/team';
import { SEO } from '@/components/Common/SEO';
import { Image } from '@chakra-ui/react';
import XIcon from '@/components/Icons/XIcon';
import BrazilianTesouroNacionalIcon from '@/components/Icons/BrazilianTesouroNacional';

export default function AboutUs() {
  const cardBg = 'blackAlpha.500';
  const cardHoverBg = 'whiteAlpha.100';

  return (
    <Box pos="relative" w="full" h="full" pt={{ base: '72px', md: '144px' }}>
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

      <Container maxW="6xl" aria-label="About Us Section" zIndex={1}>
        <VStack gap={0} align="stretch">
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
              w="full"
              textAlign={{ base: 'left', md: 'center' }}
            >
              Get to know us
            </Text>
            
            <Text fontSize="lg" w="full" textAlign={{ base: 'left', md: 'center' }} lineHeight="moderate">
              We are driving the tokenized economy with trusted data infrastructure.
            </Text>
          </TitleSection>

          <SimpleGrid columns={{ base: 2, md: 3 }} w="full" borderRadius="2xl" overflow="hidden" mb={8} boxShadow="2xl">
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
                <Box
                  backgroundImage="url(/assets/about/luciano-juvinski-speaker-2.webp)"
                  backgroundSize="cover"
                  backgroundPosition={{
                    base: '-80px center',
                    md: '-160px center',
                  }}
                  backgroundRepeat="no-repeat"
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
                  backgroundPosition="left center"
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

          <VStack
            gap={6}
            align="stretch"
            maxW="6xl"
            mx="auto"
            pt={{ base: 4, md: 8 }}
            pb={{ base: 4, md: 16 }}
            pos="relative"
            bg="bg"
          >
            <Box
              position="absolute"
              bottom="-50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w="50vw"
              h="15vh"
              bg="radial-gradient(circle, {colors.brand.800} 0%, {colors.brand.900} 25%, rgba(0,0,0,.5) 100%)"
              filter="blur(80px)"
              zIndex={-1}
            />
            <Text fontSize="xl" w="full" textAlign={{ base: 'left', md: 'left' }} lineHeight="moderate" zIndex={2}>
              Fact Finance was created to provide essential data infrastructure for the tokenized economy. We bridge
              tokenization platforms with official and licensed data sources, ensuring secure and compliant access to
              information. Our goal is to accelerate blockchain adoption by seamlessly connecting decentralized systems
              to the off-chain world.
            </Text>
            <Text fontSize="lg" w="full" textAlign={{ base: 'left', md: 'left' }} lineHeight="moderate" zIndex={2}>
              As tokenization evolves and the demand for standardized, reliable data grows, Fact Finance is committed to
              being the go-to data hub. We empower the industry with streamlined access to accurate and trustworthy
              information, unlocking the full potential of real-world asset tokenization
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} id="awards" aria-label="Awards">
              <HStack
                as="a"
                p={4}
                gap={8}
                borderRadius="2xl"
                bg="whiteAlpha.100"
                href="https://www.gov.br/tesouronacional/pt-br/noticias/hackathon-web3-tokenizacao-do-tesouro-nacional-anuncia-os-vencedores"
                target="_blank"
                rel="noopener noreferrer"
                transition="transform 0.2s ease-in-out"
                _hover={{ transform: 'rotate(-2deg)' }}
              >
                <Box flex={1}>
                  <BrazilianTesouroNacionalIcon width={200} height={200} />
                </Box>
                <Text flex={1} fontSize="sm">
                  3rd place overall in the Web3 Hackathon: National Treasury Tokenization, organized by the Brazilian
                  Ministry of Finance in December 2023 (as team Vale das Araucárias).
                </Text>
              </HStack>
              <VStack
                as="a"
                p={8}
                borderRadius="2xl"
                bg="whiteAlpha.100"
                href="https://www.gov.br/tesouronacional/pt-br/noticias/hackathon-web3-tokenizacao-do-tesouro-nacional-anuncia-os-vencedores"
                target="_blank"
                rel="noopener noreferrer"
                transition="transform 0.2s ease-in-out"
                _hover={{ transform: 'rotate(2deg)' }}
              >
                <Box flex={1}>
                  <svg height="44" viewBox="0 0 646 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1064_606)">
                      <path
                        d="M108.53 75.6899L90.81 94.6899C90.4267 95.1026 89.9626 95.432 89.4464 95.6573C88.9303 95.8827 88.3732 95.9994 87.81 95.9999H3.81C3.40937 95.9997 3.01749 95.8827 2.68235 95.6631C2.34722 95.4436 2.08338 95.1311 1.92313 94.7639C1.76288 94.3967 1.71318 93.9908 1.78012 93.5958C1.84706 93.2008 2.02772 92.8338 2.3 92.5399L20 73.5399C20.3833 73.1273 20.8474 72.7979 21.3636 72.5725C21.8797 72.3472 22.4368 72.2305 23 72.2299H107C107.404 72.2216 107.802 72.333 108.143 72.5502C108.484 72.7674 108.754 73.0806 108.917 73.4504C109.081 73.8203 109.131 74.2303 109.062 74.6288C108.993 75.0273 108.808 75.3965 108.53 75.6899ZM90.81 37.4199C90.4253 37.0091 89.9608 36.6811 89.445 36.4558C88.9292 36.2306 88.3728 36.1129 87.81 36.11H3.81C3.40937 36.1102 3.01749 36.2272 2.68235 36.4468C2.34722 36.6663 2.08338 36.9788 1.92313 37.346C1.76288 37.7132 1.71318 38.1191 1.78012 38.5141C1.84706 38.9091 2.02772 39.2761 2.3 39.57L20 58.58C20.3847 58.9908 20.8492 59.3188 21.365 59.5441C21.8808 59.7693 22.4372 59.887 23 59.8899H107C107.4 59.8878 107.79 59.7693 108.124 59.5491C108.458 59.3288 108.72 59.0162 108.879 58.6494C109.038 58.2826 109.087 57.8774 109.019 57.4833C108.952 57.0892 108.772 56.7232 108.5 56.43L90.81 37.4199ZM3.81 23.7699H87.81C88.3732 23.7694 88.9303 23.6527 89.4464 23.4273C89.9626 23.202 90.4267 22.8726 90.81 22.4599L108.53 3.45995C108.808 3.16647 108.993 2.79726 109.062 2.39877C109.131 2.00028 109.081 1.59031 108.917 1.22045C108.754 0.850591 108.484 0.537368 108.143 0.320195C107.802 0.103021 107.404 -0.0084012 107 -5.10783e-05H23C22.4368 0.000541762 21.8797 0.117167 21.3636 0.342553C20.8474 0.567938 20.3833 0.897249 20 1.30995L2.3 20.3099C2.02772 20.6038 1.84706 20.9708 1.78012 21.3658C1.71318 21.7608 1.76288 22.1667 1.92313 22.5339C2.08338 22.9011 2.34722 23.2136 2.68235 23.4331C3.01749 23.6527 3.40937 23.7697 3.81 23.7699Z"
                        fill="url(#paint0_linear_1064_606)"
                      />
                      <path
                        d="M210.94 40.6002H166V25.8002H222.62V11.0002H165.85C163.91 10.9897 161.988 11.3613 160.192 12.0938C158.396 12.8264 156.761 13.9055 155.383 15.2696C154.004 16.6337 152.907 18.2561 152.155 20.044C151.403 21.832 151.01 23.7506 151 25.6902V40.6902C151.008 42.6315 151.398 44.5523 152.149 46.3425C152.9 48.1328 153.996 49.7575 155.375 51.1237C156.755 52.49 158.39 53.5709 160.187 54.3047C161.984 55.0385 163.909 55.4108 165.85 55.4002H210.85V70.2002H152.07V85.0002H210.94C212.88 85.0108 214.802 84.6391 216.598 83.9066C218.394 83.174 220.029 82.0949 221.407 80.7308C222.786 79.3667 223.883 77.7444 224.635 75.9564C225.387 74.1684 225.78 72.2498 225.79 70.3102V55.3102C225.782 53.3689 225.392 51.4482 224.641 49.6579C223.89 47.8676 222.794 46.2429 221.415 44.8767C220.035 43.5105 218.4 42.4296 216.603 41.6958C214.806 40.962 212.881 40.5897 210.94 40.6002Z"
                        fill="white"
                      />
                      <path
                        d="M298 11H252.89C250.947 10.9842 249.02 11.3519 247.219 12.0821C245.419 12.8123 243.78 13.8905 242.397 15.2552C241.013 16.6198 239.913 18.2439 239.159 20.0345C238.404 21.8251 238.01 23.747 238 25.69V70.31C238.01 72.253 238.404 74.1749 239.159 75.9655C239.913 77.7561 241.013 79.3802 242.397 80.7448C243.78 82.1095 245.419 83.1877 247.219 83.9179C249.02 84.6481 250.947 85.0158 252.89 85H298C299.94 85.0105 301.862 84.6389 303.658 83.9064C305.454 83.1738 307.089 82.0947 308.467 80.7306C309.846 79.3665 310.943 77.7441 311.695 75.9562C312.447 74.1682 312.84 72.2496 312.85 70.31V25.69C312.84 23.7504 312.447 21.8318 311.695 20.0438C310.943 18.2559 309.846 16.6335 308.467 15.2694C307.089 13.9053 305.454 12.8262 303.658 12.0936C301.862 11.3611 299.94 10.9895 298 11ZM297.89 70.2H253V25.8H297.87L297.89 70.2Z"
                        fill="white"
                      />
                      <path
                        d="M456 11.0001H412C410.06 10.9896 408.138 11.3612 406.342 12.0937C404.546 12.8263 402.911 13.9054 401.533 15.2695C400.154 16.6336 399.057 18.256 398.305 20.0439C397.553 21.8319 397.16 23.7505 397.15 25.6901V85.0001H412.15V60.6901H455.95V85.0001H470.95V25.6901C470.94 23.742 470.544 21.8152 469.786 20.0206C469.027 18.2261 467.922 16.5993 466.532 15.2338C465.143 13.8684 463.497 12.7914 461.689 12.0648C459.881 11.3382 457.948 10.9764 456 11.0001ZM455.89 45.8901H412.09V25.8001H455.89V45.8901Z"
                        fill="white"
                      />
                      <path
                        d="M631.15 11.0002H587.15C585.21 10.9897 583.288 11.3613 581.492 12.0938C579.696 12.8264 578.062 13.9055 576.683 15.2696C575.304 16.6337 574.207 18.2561 573.455 20.044C572.703 21.832 572.31 23.7506 572.3 25.6902V85.0002H587.3V60.6902H631V85.0002H646V25.6902C645.99 23.7506 645.597 21.832 644.845 20.044C644.093 18.2561 642.996 16.6337 641.617 15.2696C640.238 13.9055 638.604 12.8264 636.808 12.0938C635.012 11.3613 633.09 10.9897 631.15 11.0002ZM631 45.8902H587.2V25.8002H631V45.8902Z"
                        fill="white"
                      />
                      <path
                        d="M544 70.2001H538L516.55 17.2001C515.815 15.3716 514.55 13.8045 512.918 12.6999C511.286 11.5952 509.361 11.0033 507.39 11.0001H494.08C492.786 10.9935 491.504 11.2418 490.307 11.7307C489.109 12.2197 488.02 12.9397 487.1 13.8497C486.181 14.7598 485.45 15.8419 484.949 17.0345C484.448 18.227 484.187 19.5066 484.18 20.8001V85.0001H499.18V25.8001H505.18L526.62 78.8001C527.367 80.6251 528.642 82.1858 530.281 83.283C531.919 84.3803 533.848 84.9641 535.82 84.9601H549.13C550.424 84.9667 551.706 84.7185 552.903 84.2295C554.101 83.7406 555.19 83.0205 556.11 82.1105C557.029 81.2005 557.76 80.1183 558.261 78.9258C558.762 77.7332 559.023 76.4537 559.03 75.1601V11.0001H544V70.2001Z"
                        fill="white"
                      />
                      <path
                        d="M341.1 11H326.1V70.31C326.11 72.2539 326.505 74.1766 327.26 75.9678C328.015 77.7591 329.116 79.3836 330.5 80.7484C331.884 82.1132 333.525 83.1912 335.326 83.9208C337.128 84.6504 339.056 85.0171 341 85H386V70.2H341.1V11Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_1064_606"
                        x1="10.81"
                        y1="98.29"
                        x2="98.89"
                        y2="-1.01005"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.08" stop-color="#9945FF" />
                        <stop offset="0.3" stop-color="#8752F3" />
                        <stop offset="0.5" stop-color="#5497D5" />
                        <stop offset="0.6" stop-color="#43B4CA" />
                        <stop offset="0.72" stop-color="#28E0B9" />
                        <stop offset="0.97" stop-color="#19FB9B" />
                      </linearGradient>
                      <clipPath id="clip0_1064_606">
                        <rect width="646" height="96" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Box>

                <Text flex={1} fontSize="sm">
                  1st place in the Brazilian stage of the Solana Renaissance Hackathon in 2024 (winner of the Solana
                  Foundation Demo Day at Blockchain.RIO in the same year).{' '}
                </Text>
              </VStack>
            </SimpleGrid>
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
                w="full"
                textAlign={{ base: 'left', md: 'center' }}
              >
                Meet the innovators
              </Text>
              <Heading
                as="h2"
                textStyle="title"
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
                w="full"
                textAlign={{ base: 'left', md: 'center' }}
              >
                The team behind Fact Finance
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                maxW="3xl"
                mx="auto"
                w="full"
                textAlign={{ base: 'left', md: 'center' }}
                color="whiteAlpha.800"
              >
                Dedicated professionals with deep expertise in blockchain, data infrastructure, and economic systems,
                committed to delivering secure and precise data solutions for web3 and real-world asset tokenization.
              </Text>
            </TitleSection>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={8} mt={12} as="section" aria-label="Team Members">
              {teamMembers.map((member, index) => (
                <Box
                  key={index}
                  p={{ base: 0, md: 8 }}
                  borderRadius="2xl"
                  bgGradient="to-br"
                  gradientFrom={{ base: 'transparent', md: 'whiteAlpha.50' }}
                  gradientTo="transparent"
                  role="article"
                  aria-labelledby={`team-member-${index}`}
                >
                  <VStack align="stretch" gap={8} w="full">
                    <HStack gap={{ base: 6, md: 8 }} align="center" w="full">
                      <Box
                        w={{ base: 20, md: 24 }}
                        h={{ base: 20, md: 24 }}
                        position="relative"
                        _before={{
                          content: '""',
                          position: 'absolute',
                          zIndex: -1,
                          top: '-2px',
                          left: '-2px',
                          right: '-2px',
                          bottom: '-2px',
                          bg: 'brand.500',
                          borderRadius: 'full',
                        }}
                      >
                        <Image
                          objectFit="cover"
                          w={{ base: 'full', md: 24 }}
                          h={{ base: 'full', md: 24 }}
                          alt={member.name}
                          src={`/assets/about/team/${member.image}`}
                          aria-hidden="true"
                          borderRadius="full"
                        />
                      </Box>
                      <VStack align="flex-start" justify="center" gap={0} flex={1}>
                        <Heading as="h3" fontSize="lg" id={`team-member-${index}`}>
                          {member.name}
                        </Heading>
                        <Text color="brand.300" fontWeight="500">
                          {member.role}
                        </Text>
                        <Flex gap={2} ml={-2}>
                          <IconButton
                            as="a"
                            href={`https://linkedin.com/in/${member.social.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            leftIcon={<LinkedinIcon width={20} height={20} />}
                            size="sm"
                            variant="plain"
                            aria-label={`Visit ${member.name}'s LinkedIn profile`}
                          >
                            <LinkedinIcon />
                          </IconButton>
                          <IconButton
                            as="a"
                            href={`https://x.com/${member.social.x}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            leftIcon={<XIcon width={20} height={20} />}
                            size="sm"
                            variant="plain"
                            aria-label={`Visit ${member.name}'s X profile`}
                          >
                            <XIcon />
                          </IconButton>
                        </Flex>
                      </VStack>
                    </HStack>
                    <Text
                      color="whiteAlpha.800"
                      fontSize={{ base: 'sm', md: 'lg' }}
                      lineHeight="tall"
                      minH={{ base: 'auto', md: '232px' }}
                    >
                      {member.bio}
                    </Text>

                    {member.brands.length > 0 && (
                      <Flex gap={3} flexWrap="wrap" justify="flex-start" align="flex-start" w="full">
                        {member.brands.map((brand, index) => (
                          <Box
                            w="auto"
                            key={index}
                            role="img"
                            aria-label={`${member.name}'s ${brand.type === 'icon' ? 'technology expertise' : 'brand'}`}
                          >
                            {brand.type === 'icon' ? (
                              brand.asset
                            ) : (
                              <Image
                                src={brand.asset}
                                alt={`${member.name}'s expertise in ${brand.name}`}
                                w="auto"
                                h={{ base: '23px', md: '24px' }}
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
                w="full"
                textAlign={{ base: 'left', md: 'center' }}
              >
                Media & Press
              </Text>
              <Heading
                as="h2"
                textStyle="title"
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
                w="full"
                textAlign={{ base: 'left', md: 'center' }}
              >
                Learn More About Us
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                maxW="2xl"
                mx="auto"
                w="full"
                textAlign={{ base: 'left', md: 'center' }}
                color="whiteAlpha.800"
              >
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
