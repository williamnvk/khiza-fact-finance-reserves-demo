import { FC, useState } from 'react';
import { useI18n } from '@/hooks/useI18n';
import { Box, Text, HStack, Menu, Portal } from '@chakra-ui/react';
import { CircleFlag } from 'react-circle-flags';
import { ChevronDown } from 'lucide-react';

export interface LanguageSelectorProps {}

const languages = [
  {
    code: 'en',
    name: 'English',
    flagCode: 'us',
  },
  {
    code: 'pt-BR',
    name: 'Português',
    flagCode: 'br',
  },
  {
    code: 'es',
    name: 'Español',
    flagCode: 'es',
  },
];

export const LanguageSelector: FC<LanguageSelectorProps> = () => {
  const { i18n } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <Menu.Root open={isOpen} key={isOpen ? 'open' : 'closed'} onOpenChange={(details) => setIsOpen(details.open)}>
      <Menu.Trigger asChild>
        <Box
          as="button"
          cursor="pointer"
          p={1.5}
          borderRadius="md"
          bg="transparent"
          _hover={{
            bg: 'gray.50',
            _dark: { bg: 'gray.700' },
          }}
          transition="background-color 0.2s"
        >
          <HStack gap={2}>
            <CircleFlag width="16" countryCode={currentLanguage.flagCode} height="16" />
            <Text fontSize="sm">{currentLanguage.name}</Text>
            <ChevronDown size={14} />
          </HStack>
        </Box>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="120px">
            {languages.map((language) => (
              <Menu.Item
                key={language.code}
                value={language.code}
                onClick={() => handleLanguageChange(language.code)}
                bg={i18n.language === language.code ? 'gray.100' : 'transparent'}
                _dark={{
                  bg: i18n.language === language.code ? 'gray.700' : 'transparent',
                }}
              >
                <HStack gap={2} w="full">
                  <CircleFlag width="16" countryCode={language.flagCode} height="16" />
                  <Text fontSize="sm">{language.name}</Text>
                </HStack>
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default LanguageSelector;
