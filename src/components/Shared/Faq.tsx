import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot } from '@/components/ui/accordion';
import { Icon, Text, VStack } from '@chakra-ui/react';
import { BlocksIcon, CodeIcon, DatabaseIcon, HardDriveIcon, UsersRoundIcon } from 'lucide-react';

export const Faq = () => {
  return (
    <AccordionRoot
      collapsible
      defaultValue={[]}
      variant="enclosed"
      size="lg"
      role="region"
      aria-labelledby="faq-heading"
    >
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value} aria-labelledby={`faq-${item.value}`}>
          <AccordionItemTrigger fontFamily="body">
            <Icon fontSize="lg" color="whiteAlpha.400" aria-hidden="true">
              {item.icon}
            </Icon>
            <Text fontSize={{ base: 'sm', md: 'lg' }} lineHeight={{ base: 1.2, md: 1 }}>
              {item.title}
            </Text>
          </AccordionItemTrigger>
          <AccordionItemContent>
            <VStack gap={4} w="full" align="flex-start">
              {item.content.map((content) => (
                <Text key={content} fontSize={{ base: 'sm', md: 'md' }} role="document">
                  {content}
                </Text>
              ))}
            </VStack>
          </AccordionItemContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
};

const items = [
  {
    value: 'what-is-an-oracle',
    icon: <DatabaseIcon />,
    title: 'What is an oracle?',
    content: [
      'An oracle bridges real-world data to the blockchain, enabling smart contracts to execute based on real-world events.',
    ],
  },
  {
    value: 'who-needs',
    icon: <UsersRoundIcon />,
    title: 'Why do tokenized assets need oracles?',
    content: [
      'Oracles provide the real-world data that tokenized assets need to function accurately, such as property valuations for real estate tokens or interest rates  and inflation for private credit tokens. Without oracles, tokenized assets cannot reflect real-time changes or off-chain events.',
    ],
  },
  {
    value: 'responsibility',
    icon: <HardDriveIcon />,
    title: 'What types of data Fact Finance can provide?',
    content: [
      'We can provide various types of data, including market prices, economic indices, proof of reserves, square meter price for real estate, weather updates, and more, depending on the use case. Contact us if your project needs any other specifc data.',
    ],
  },
  {
    value: 'availability',
    icon: <BlocksIcon />,
    title: 'Where does Fact Finance source its data?',
    content: [
      'Our data feeds come directly from official sources, such as central banks, research institutes and financial institutions.',
    ],
  },
  {
    value: 'integration',
    icon: <CodeIcon />,
    title: 'How do I integrate Fact Finance’s APIs into my project?',
    content: [
      'Our documentation provides step-by-step guides, API references, and examples for integration with EVM-based blockchains and Solana.',
    ],
  },
];
