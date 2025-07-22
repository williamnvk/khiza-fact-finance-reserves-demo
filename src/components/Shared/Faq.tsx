import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot } from '@/components/ui/accordion';
import { Icon, Text, VStack } from '@chakra-ui/react';
import { BlocksIcon, CodeIcon, DatabaseIcon, HardDriveIcon, UsersRoundIcon } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

export const Faq = () => {
  const { t } = useI18n();

  const items = [
    {
      value: 'what-is-an-oracle',
      icon: <DatabaseIcon />,
      title: t('faq.whatIsOracle.title'),
      content: [
        t('faq.whatIsOracle.content'),
      ],
    },
    {
      value: 'who-needs',
      icon: <UsersRoundIcon />,
      title: t('faq.whyTokenizedAssets.title'),
      content: [
        t('faq.whyTokenizedAssets.content'),
      ],
    },
    {
      value: 'responsibility',
      icon: <HardDriveIcon />,
      title: t('faq.whatDataTypes.title'),
      content: [
        t('faq.whatDataTypes.content'),
      ],
    },
    {
      value: 'availability',
      icon: <BlocksIcon />,
      title: t('faq.dataSource.title'),
      content: [
        t('faq.dataSource.content'),
      ],
    },
    {
      value: 'integration',
      icon: <CodeIcon />,
      title: t('faq.integration.title'),
      content: [
        t('faq.integration.content'),
      ],
    },
  ];

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
