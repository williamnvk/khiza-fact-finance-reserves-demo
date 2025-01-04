import { Container, Flex, HStack, Text, Box, Separator, Link, Stack } from '@chakra-ui/react';
import KhizaIcon from '../Icons/KhizaIcon';
import LinkedinIcon from '../Icons/LinkedinIcon';
import XIcon from '../Icons/XIcon';
import { ColorModeButton } from '../ui/color-mode';
import LogoIcon from '../Icons/LogoIcon';

export function Footer() {
  return (
    <Box position="relative" mt={32} w="full">
      <Container maxW="container.xl">
        <Stack
          flexDir={{ base: 'column', md: 'row' }}
          as="footer"
          role="contentinfo"
          mx="auto"
          gap={{ base: 6, md: 10 }}
          py={{ base: 8, md: 12 }}
        >
          <Stack
            flexDir={{ base: 'column-reverse', md: 'row' }}
            w="full"
            gap={{ base: 6, md: 10 }}
            justify={{ base: 'center', md: 'space-between' }}
            alignItems="center"
          >
            <Stack gap={4} flex={1}>
              <Stack direction="row" spacing={6} mb={2}>
                <Link
                  href="/docs"
                  color="blue.400"
                  fontWeight="medium"
                  fontSize="sm"
                  _hover={{ textDecoration: 'underline' }}
                >
                  Documentation
                </Link>
                <Link href="/careers" color="gray.300" fontSize="sm" _hover={{ color: 'blue.400' }}>
                  Careers
                </Link>
                <Link href="/team" color="gray.300" fontSize="sm" _hover={{ color: 'blue.400' }}>
                  Team
                </Link>
              </Stack>
              <Text fontSize="sm" color="gray.300">
                &copy; 2024 Fact.Finance. All rights reserved.
              </Text>
              <Text fontSize="xs" color="gray.400">
                Empowering DeFi with reliable, real-time data
              </Text>
            </Stack>

            <Stack flexDir={{ base: 'column', md: 'row' }} gap={{ base: 6, md: 10 }} alignItems="center">
              <LogoIcon />
              <Separator orientation="vertical" h="24px" />
              <Flex alignItems="center" justifyContent="center" gap={{ base: 3, md: 4 }}>
                <Text color="gray.300" fontSize="sm" fontWeight="medium">
                  Backed by
                </Text>
                <Link
                  href="https://khizadao.com"
                  title="Khiza DAO"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ opacity: 0.8 }}
                  transition="opacity 0.2s"
                >
                  <KhizaIcon width={124} height={26} />
                </Link>
              </Flex>
            </Stack>

            <Separator orientation="vertical" h="24px" />

            <HStack justify={{ base: 'center', md: 'end' }} gap={5} as="nav" aria-label="Social Media Links">
              <Link
                title="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/fact-finance-oracle/"
                color="gray.950"
                _dark={{ color: 'gray.50' }}
                _hover={{ transform: 'translateY(-2px)', color: 'blue.400' }}
                transition="all 0.2s"
              >
                <LinkedinIcon />
              </Link>

              <Link
                title="X"
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/TheFactOracle"
                color="gray.950"
                _dark={{ color: 'gray.50' }}
                _hover={{ transform: 'translateY(-2px)', color: 'blue.400' }}
                transition="all 0.2s"
              >
                <XIcon />
              </Link>

              <ColorModeButton />
            </HStack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
