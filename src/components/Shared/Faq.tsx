import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot } from '@/components/ui/accordion';
import { Icon, Text, VStack } from '@chakra-ui/react';
import {
  Blocks,
  BlocksIcon,
  CircleHelpIcon,
  CodeIcon,
  DatabaseIcon,
  DollarSignIcon,
  GitPullRequestArrowIcon,
  HandCoinsIcon,
  HardDriveIcon,
  LockIcon,
  StarIcon,
  UsersRoundIcon,
} from 'lucide-react';

export const Faq = () => {
  return (
    <AccordionRoot collapsible defaultValue={[]} variant="enclosed" size="lg">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionItemTrigger fontFamily="body">
            <Icon fontSize="lg" color="fg.subtle">
              {item.icon}
            </Icon>
            <Text fontSize={{ base: 'sm', md: 'lg' }} lineHeight={{ base: 1.2, md: 1 }}>
              {item.title}
            </Text>
          </AccordionItemTrigger>
          <AccordionItemContent>
            <VStack gap={4} w="full" align="flex-start">
              {item.content.map((content) => (
                <Text key={content} fontSize={{ base: 'sm', md: 'md' }}>
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
      'An oracle bridges real-world data to the blockchain, enabling its use in decentralized applications.',
      'Our oracle connects off-chain data to blockchain ecosystems, providing a secure and reliable source of information for tokenized assets.',
    ],
  },
  {
    value: 'who-needs',
    icon: <UsersRoundIcon />,
    title: 'Who needs an oracle?',
    content: [
      'Businesses like tokenization platforms, DeFi protocols, and stablecoins requiring real-world economic and licensed data for their operations.',
      'Decentralized applications (dApps) that need to access real-world data for their operations.',
      'Blockchain projects that need to integrate real-world data into their blockchain.',
    ],
  },
  {
    value: 'responsibility',
    icon: <HardDriveIcon />,
    title: 'Is Fact Finance responsible for the data provided?',
    content: [
      'Fact Finance ensures the data comes from trusted and official sources but does not alter or manipulate the original content.',
      'Fact Finance is not responsible for the data provided by the oracle, but it ensures that the data is accurate and reliable.',
    ],
  },
  {
    value: 'availability',
    icon: <BlocksIcon />,
    title: 'How can I make my data available?',
    content: [
      "Contact our team to explore partnership opportunities and integrate your data into Fact Finance's ecosystem.",
      'We can provide a secure and reliable source of information for tokenized assets.',
    ],
  },
  {
    value: 'integration',
    icon: <CodeIcon />,
    title: 'How do I integrate data into one of my projects?',
    content: [
      'Contact us to access APIs and documentation tailored for seamless integration into your project.',
      'We can provide a secure and reliable source of information for tokenized assets.',
    ],
  },
];
