import { Container, HStack, Text, Box, Link, Stack } from '@chakra-ui/react';
import LinkedinIcon from '../Icons/LinkedinIcon';
import XIcon from '../Icons/XIcon';
import { useI18n } from '@/hooks/useI18n';

export function Footer() {
  const { t } = useI18n();
  
  return (
    <Box position="relative" w="full">
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
              <Text fontSize="sm" color="gray.300">
                &copy; {new Date().getFullYear()} Fact Finance. {t('footer.allRightsReserved')}
              </Text>
              <Text fontSize="xs" color="gray.400">
                {t('footer.tagline')}
              </Text>
            </Stack>

            <HStack justify={{ base: 'center', md: 'end' }} gap={5} as="nav" aria-label={t('footer.socialMedia')}>
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
            </HStack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
