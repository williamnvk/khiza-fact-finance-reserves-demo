import { Center, Container, Heading, Link, Text, VStack } from '@chakra-ui/react';
import { Faq } from '@/components/Shared/Faq';
import { SEO } from '@/components/Common/SEO';

export const Home = () => {
  return (
    <>
      <SEO />

      <Container
        as="section"
        maxW="5xl"
        id="faq"
        role="complementary"
        py={{ base: 8, md: 16 }}
        aria-labelledby="faq-heading"
      >
        <VStack mb={{ base: 8, md: 16 }} gap={2}>
          <Heading id="faq-heading" textStyle="title">
            Perguntas Frequentes
          </Heading>
          <Text as="p" textStyle="subtitle">
            Confira as perguntas mais frequentes sobre a Tash Finance
          </Text>
        </VStack>
        <Faq />
        <Center gap={2} mt={{ base: 4, md: 16 }}>
          <Text fontSize="smaller">Ainda com dúvidas?</Text>
          <Link
            href="#" // TODO: Add link
            rel="noopener noreferrer"
            target="_blank"
            color="brand.500"
            fontSize="smaller"
          >
            Fale Conosco
          </Link>
        </Center>
      </Container>
    </>
  );
};
