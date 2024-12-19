import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { Card } from '@/components/ui/card';
import { TitleSection } from '@/components/ui/title-sectiont';

export const FeaturesSection = () => {
  return (
    <>
      <Box position="relative" overflow="hidden">
        <Container>
          <TitleSection>
            <Heading textStyle="title">Our key features</Heading>
            <Text textStyle="subtitle">Reliable solutions for secure and precise data delivery</Text>
          </TitleSection>

          <Card>
            <Heading fontSize="xl">Confidence index</Heading>
            <Text fontSize="sm">Reliability measure based on trusted data sources and institutions</Text>
          </Card>
          <Card>
            <Heading fontSize="xl">Compliance</Heading>
            <Text fontSize="sm">Regulatory adherence verified by official institutions</Text>
          </Card>
          <Card>
            <Heading fontSize="xl">Proof of Authenticity</Heading>
            <Text fontSize="sm">Cryptographic verification of data authenticity</Text>
          </Card>
          <Card>
            <Heading fontSize="xl">External Auditors</Heading>
            <Text fontSize="sm">Independent verification by trusted third parties</Text>
          </Card>
          <Card>
            <Heading fontSize="xl">Data Security</Heading>
            <Text fontSize="sm">Enterprise-grade encryption and protection</Text>
          </Card>
          <Card>
            <Heading fontSize="xl">Real-time Updates</Heading>
            <Text fontSize="sm">Continuous synchronization with official sources</Text>
          </Card>
        </Container>
      </Box>
    </>
  );
};
