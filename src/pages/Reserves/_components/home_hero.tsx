import { Container, Heading, Text, VStack, Box, Icon, SimpleGrid } from '@chakra-ui/react';
import { Zap, GitBranchIcon, ArrowUpIcon, LayoutDashboardIcon } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

export const HomeHero = () => {
  const { t } = useI18n();

  return (
    <Container maxW="7xl" position="relative" zIndex={1} py={24}>
      <VStack w="full" h="full" justify="center" gap={8}>
        <VStack align="center" gap={4} w="full" my={{ base: 4, md: 16 }}>
          <Heading
            fontSize={{ base: '4xl', md: '6xl' }}
            lineHeight="1.1"
            bgImage="linear-gradient(35deg, white, {colors.brand.200}, {colors.brand.200})"
            bgClip="text"
            fontWeight="400"
            textAlign="center"
            maxW="6xl"
          >
            {t('reserves.hero.title')}
            <br />
            <Text
              as="span"
              bgImage="linear-gradient(35deg, white, {colors.brand.500}, {colors.brand.200})"
              bgClip="text"
              fontWeight="semibold"
            >
              {t('reserves.hero.titleHighlight')}
            </Text>
          </Heading>

          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="whiteAlpha.800"
            textAlign="center"
            maxW="4xl"
            lineHeight="1.7"
          >
            {t('reserves.hero.subtitle')}
          </Text>
        </VStack>

        {/* Enhanced Feature Cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6} w="full" mt={8}>
          {[
            {
              icon: GitBranchIcon,
              title: t('reserves.hero.features.directConnection.title'),
              description: t('reserves.hero.features.directConnection.description'),
              color: 'brand',
            },
            {
              icon: Zap,
              title: t('reserves.hero.features.liveTracking.title'),
              description: t('reserves.hero.features.liveTracking.description'),
              color: 'warning',
            },
            {
              icon: ArrowUpIcon,
              title: t('reserves.hero.features.oracles.title'),
              description: t('reserves.hero.features.oracles.description'),
              color: 'success',
            },
            {
              icon: LayoutDashboardIcon,
              title: t('reserves.hero.features.dashboard.title'),
              description: t('reserves.hero.features.dashboard.description'),
              color: 'brand',
            },
          ].map((feature, index) => (
            <Box
              key={index}
              p={6}
              rounded="lg"
              bg="whiteAlpha.50"
              borderWidth="1px"
              borderColor="whiteAlpha.200"
              _hover={{ bg: 'whiteAlpha.100', transform: 'translateY(-2px)' }}
              transition="all 0.2s"
            >
              <VStack align="start" gap={4} h="full">
                <Box p={3} bg={`${feature.color}.100`} rounded="lg">
                  <Icon color={`${feature.color}.500`} boxSize={6}>
                    <feature.icon />
                  </Icon>
                </Box>
                <VStack align="start" gap={2} flex={1}>
                  <Text fontSize="md" fontWeight="semibold" lineHeight="1.3" color="white">
                    {feature.title}
                  </Text>
                  <Text fontSize="sm" color="whiteAlpha.800" lineHeight="1.5">
                    {feature.description}
                  </Text>
                </VStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};
