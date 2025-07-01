import { Container, VStack, Heading, Text, Box } from '@chakra-ui/react';
import { AccordionRoot, AccordionItem, AccordionItemTrigger, AccordionItemContent } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is Proof of Reserves (PoR)?',
    answer:
      'Proof of Reserves is a method to publicly demonstrate that tokenized assets are backed by real-world collateral. Fact Finance automates this process by connecting to custodians and publishing verified reserve data onchain.',
  },
  {
    question: 'How often is the reserve data updated?',
    answer:
      'Updates follow two rules: a heartbeat frequency (e.g., every 10 minutes) that ensures regular updates, and a deviation threshold that triggers a new update only when the reserve balance changes beyond a defined percentage (e.g., ±2%).',
  },
  {
    question: 'What does the collateralization status mean?',
    answer:
      'If the status is over-collateralized, it means the verified reserves exceed the circulating token supply — indicating a safety buffer and room for new issuance. If it’s under-collateralized, it means the reserves are not sufficient to fully back the issued tokens — signaling a potential risk and the need for corrective action.',
  },
  {
    question: 'How does Fact Finance track token issuance?',
    answer:
      'We monitor the onchain token supply by tracking the smart contract of the token. This data is compared to the verified reserves to ensure ongoing collateral coverage, and the result is displayed in a public dashboard.',
  },
  {
    question: 'How is this different from a traditional audit?',
    answer:
      'Fact Finance is not an audit firm and does not issue an opinion about the collateral. Instead, we provide a real-time transparency layer by connecting directly to custodians and publishing verified reserve data onchain.',
  },
];

export const FAQSection = () => {
  return (
    <Box py={16}>
      <Container maxW="4xl">
        <VStack gap={12}>
          <VStack gap={6} textAlign="center">
            <Heading fontSize={{ base: '2xl', md: '4xl' }} maxW="2xl" lineHeight="1.2">
              Everything you need to know about{' '}
              <Text as="span" bgImage="linear-gradient(35deg, {colors.brand.500}, {colors.brand.400})" bgClip="text">
                Proof of reserves
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
