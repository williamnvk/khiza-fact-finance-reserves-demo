import { Container, Flex, HStack, Text, Box, Separator, Link, Stack } from '@chakra-ui/react';
import KhizaIcon from '../Icons/KhizaIcon';
import LinkedinIcon from '../Icons/LinkedinIcon';
import XIcon from '../Icons/XIcon';
import { ColorModeButton } from '../ui/color-mode';
import LogoIcon from '../Icons/LogoIcon';

export function Footer() {
  return (
    <Box position="relative" mt={32} w="full" overflow="hidden">
      <Box
        position="absolute"
        bottom="0"
        right="50%"
        borderRadius="50%"
        width="105%"
        height="25%"
        zIndex={-1}
        transform="translate(50%, 0%)"
        bgImage="radial-gradient(circle, {colors.gray.900} 50%, transparent 100%)"
        filter="blur(200px)"
        opacity={1}
        aria-hidden="true"
      />
      <Container>
        <Stack
          flexDir={{ base: 'column', md: 'row' }}
          as="footer"
          role="contentinfo"
          mx="auto"
          px={{ base: 3, md: 6 }}
          gap={{ base: 4, md: 8 }}
          py={{ base: 6, md: 8 }}
        >
          <Stack
            flexDir={{ base: 'column-reverse', md: 'row' }}
            w="full"
            gap={{ base: 4, md: 8 }}
            justify={{ base: 'center', md: 'space-between' }}
            alignItems="center"
          >
            <Text fontSize="small" color="gray.300" flex={1}>
              &copy; 2024 Fact.Finance. All rights reserved.
            </Text>
            <Stack flexDir={{ base: 'column', md: 'row' }} gap={{ base: 4, md: 8 }} alignItems="center">
              <LogoIcon />
              <Separator orientation="vertical" h="20px" />
              <Flex alignItems="center" justifyContent="center" gap={{ base: 2, md: 4 }}>
                <Text color="gray.300" fontSize="sm">
                  Backed by
                </Text>
                <a href="https://khizadao.com" title="Khiza DAO" target="_blank" referrerPolicy="no-referrer">
                  <KhizaIcon width={124} height={26} />
                </a>
              </Flex>
            </Stack>
            <Separator orientation="vertical" h="20px" />
            <HStack justify={{ base: 'center', md: 'end' }} gap={4} as="nav" aria-label="Social Media Links">
              <Link
                title="Linkedin"
                target="_blank"
                rel="noreferrer"
                href={'https://www.linkedin.com/company/fact-finance-oracle/'}
                color="gray.950"
                _dark={{ color: 'gray.50' }}
              >
                <LinkedinIcon />
              </Link>

              <Link
                title="X"
                target="_blank"
                rel="noreferrer"
                href={'https://x.com/TheFactOracle'}
                color="gray.950"
                _dark={{ color: 'gray.50' }}
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
