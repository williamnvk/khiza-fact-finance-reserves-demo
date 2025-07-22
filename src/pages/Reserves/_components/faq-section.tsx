import { Container, VStack, Heading, Text, Box } from '@chakra-ui/react';
import { AccordionRoot, AccordionItem, AccordionItemTrigger, AccordionItemContent } from '@/components/ui/accordion';
import { useI18n } from '@/hooks/useI18n';

export const FAQSection = () => {
  const { t } = useI18n();

  const faqs = [
    {
      question: t('reserves.faq.questions.whatIsPor.question'),
      answer: t('reserves.faq.questions.whatIsPor.answer'),
    },
    {
      question: t('reserves.faq.questions.updateFrequency.question'),
      answer: t('reserves.faq.questions.updateFrequency.answer'),
    },
    {
      question: t('reserves.faq.questions.collateralizationStatus.question'),
      answer: t('reserves.faq.questions.collateralizationStatus.answer'),
    },
    {
      question: t('reserves.faq.questions.tokenTracking.question'),
      answer: t('reserves.faq.questions.tokenTracking.answer'),
    },
    {
      question: t('reserves.faq.questions.traditionalAudit.question'),
      answer: t('reserves.faq.questions.traditionalAudit.answer'),
    },
  ];

  return (
    <Box py={16}>
      <Container maxW="4xl">
        <VStack gap={12}>
          <VStack gap={6} textAlign="center">
            <Heading fontSize={{ base: '2xl', md: '4xl' }} maxW="2xl" lineHeight="1.2">
              {t('reserves.faq.heading')}{' '}
              <Text as="span" bgImage="linear-gradient(35deg, {colors.brand.500}, {colors.brand.400})" bgClip="text">
                {t('reserves.faq.headingHighlight')}
              </Text>
            </Heading>
          </VStack>

          <AccordionRoot
            collapsible
            defaultValue={[]}
            variant="enclosed"
            size="lg"
            role="region"
            aria-labelledby="faq-heading"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={index.toString()}>
                <AccordionItemTrigger fontFamily="body">
                  <Text fontSize={{ base: 'sm', md: 'lg' }} lineHeight={{ base: 1.2, md: 1 }}>
                    {faq.question}
                  </Text>
                </AccordionItemTrigger>
                <AccordionItemContent>
                  <Text key={faq.answer} fontSize={{ base: 'sm', md: 'md' }} role="document">
                    {faq.answer}
                  </Text>
                </AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        </VStack>
      </Container>
    </Box>
  );
};
