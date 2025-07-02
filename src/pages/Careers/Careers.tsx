import { TitleSection } from '@/components/ui/title-sectiont';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Button,
  HStack,
  Badge,
  useDisclosure,
} from '@chakra-ui/react';
import {
  BriefcaseIcon,
  BrainIcon,
  UsersIcon,
  LightbulbIcon,
  MapPinIcon,
  GlobeIcon,
  BookOpenIcon,
  RocketIcon,
  BarChart2Icon,
} from 'lucide-react';
import { useState } from 'react';
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
} from '@/components/ui/drawer';

export default function Careers() {
  const { open, onOpen, onClose } = useDisclosure();
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      title: 'Senior Blockchain Developer',
      type: 'Contract',
      location: 'Remote',
      description:
        "We're looking for an experienced blockchain developer to help build and maintain our oracle infrastructure across multiple chains.",
      icon: <GlobeIcon width={32} height={32} />,
      fullDescription: `
        As a Senior Blockchain Developer at Fact Finance, you will:
        • Design and implement oracle infrastructure across multiple blockchain networks
        • Optimize smart contract interactions and data flow
        • Review and audit smart contract code
        • Collaborate with the team on architecture decisions
        • Mentor junior developers

        Requirements:
        • 5+ years of software development experience
        • 3+ years of blockchain development experience
        • Deep understanding of Ethereum and other major blockchain platforms
        • Experience with Solidity and Web3.js
        • Strong background in cryptography and security
      `,
    },
    {
      title: 'Smart Contract Engineer',
      type: 'Contract',
      location: 'Remote',
      description:
        'Join us in developing secure and efficient smart contracts for our oracle solutions and data verification systems.',
      icon: <BarChart2Icon width={32} height={32} />,
      fullDescription: `
        As a Smart Contract Engineer at Fact Finance, you will:
        • Develop and deploy smart contracts for oracle solutions
        • Implement data verification systems
        • Conduct security audits and optimize gas usage
        • Write comprehensive test suites
        • Document contract interfaces and implementations

        Requirements:
        • 3+ years of Solidity development experience
        • Strong understanding of EVM and gas optimization
        • Experience with testing frameworks like Hardhat and Foundry
        • Knowledge of common smart contract security patterns
      `,
    },
    {
      title: 'Frontend Developer',
      type: 'Contract',
      location: 'Remote',
      description:
        'Help create intuitive and responsive user interfaces for our web3 applications and developer tools.',
      icon: <RocketIcon width={32} height={32} />,
      fullDescription: `
        As a Frontend Developer at Fact Finance, you will:
        • Build responsive and intuitive user interfaces
        • Integrate Web3 functionality into React applications
        • Implement complex data visualizations
        • Optimize application performance
        • Create reusable component libraries

        Requirements:
        • 3+ years of React development experience
        • Experience with TypeScript and modern JavaScript
        • Familiarity with Web3 libraries and blockchain concepts
        • Strong UI/UX sensibilities
      `,
    },
    {
      title: 'Technical Writer',
      type: 'Contract',
      location: 'Remote',
      description:
        'Create clear, comprehensive documentation and guides for developers integrating our oracle solutions.',
      icon: <BookOpenIcon width={32} height={32} />,
      fullDescription: `
        As a Technical Writer at Fact Finance, you will:
        • Create comprehensive API documentation
        • Write integration guides and tutorials
        • Maintain technical documentation
        • Collaborate with developers to ensure accuracy
        • Create content for developer education

        Requirements:
        • 2+ years of technical writing experience
        • Understanding of blockchain technology
        • Experience with documentation tools
        • Strong English writing skills
      `,
    },
    {
      title: 'DevOps Engineer',
      type: 'Contract',
      location: 'Remote',
      description: 'Build and maintain our cloud infrastructure and deployment pipelines across multiple environments.',
      icon: <BarChart2Icon width={32} height={32} />,
      fullDescription: `
        As a DevOps Engineer at Fact Finance, you will:
        • Manage cloud infrastructure and deployment pipelines
        • Implement monitoring and alerting systems
        • Optimize system performance and reliability
        • Automate development and deployment processes
        • Maintain security best practices

        Requirements:
        • 4+ years of DevOps experience
        • Strong knowledge of AWS or similar cloud platforms
        • Experience with containerization and orchestration
        • Understanding of CI/CD principles
      `,
    },
  ];

  const handleJobClick = (job) => {
    setSelectedJob(job);
    onOpen();
  };

  return (
    <Box>
      <title>Careers at Fact Finance | Join Our Team</title>
      <meta
        name="description"
        content="Join Fact Finance in building the future of decentralized finance. View our open positions and learn about our company culture."
      />

      <Container maxW="5xl" py={{ base: 8, md: 16 }}>
        <VStack gap={12} align="stretch">
          <TitleSection>
            <Text fontSize="sm" color="brand.300" aria-label="Section introduction">
              JOIN OUR TEAM
            </Text>
            <Heading as="h1" textStyle="title">
              Build the Future of Finance
            </Heading>
            <Text fontSize="lg">
              At Fact Finance, we're on a mission to bridge the gap between traditional finance and blockchain
              technology. We're looking for passionate individuals who share our vision of creating more transparent and
              efficient financial systems.
            </Text>
          </TitleSection>

          <Box as="section" aria-labelledby="culture-heading">
            <Heading id="culture-heading" fontSize="2xl" mb={4}>
              Our Culture
            </Heading>
            <Text mb={6}>
              We believe in fostering an environment of innovation, collaboration, and continuous learning. Our team is
              distributed globally, and we embrace remote work culture while maintaining strong connections through
              regular virtual meetings and team events.
            </Text>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
              <Box p={6} borderRadius="xl" bg="whiteAlpha.100" role="article">
                <HStack mb={3}>
                  <LightbulbIcon color="brand.300" aria-hidden="true" />
                  <Heading size="md">Innovation First</Heading>
                </HStack>
                <Text>We encourage creative solutions and welcome new ideas from every team member.</Text>
              </Box>
              <Box p={6} borderRadius="xl" bg="whiteAlpha.100" role="article">
                <HStack mb={3}>
                  <UsersIcon color="brand.300" aria-hidden="true" />
                  <Heading size="md">Work-Life Balance</Heading>
                </HStack>
                <Text>We value flexibility and understand the importance of maintaining a healthy balance.</Text>
              </Box>
              <Box p={6} borderRadius="xl" bg="whiteAlpha.100" role="article">
                <HStack mb={3}>
                  <BrainIcon color="brand.300" aria-hidden="true" />
                  <Heading size="md">Growth Mindset</Heading>
                </HStack>
                <Text>We invest in our team's development and provide opportunities to learn and grow.</Text>
              </Box>
            </SimpleGrid>
          </Box>

          <Box as="section" aria-labelledby="positions-heading">
            <Heading id="positions-heading" fontSize="2xl" mb={8}>
              Open Positions
            </Heading>
            <VStack gap={4} align="stretch">
              {jobs.map((job, index) => (
                <Box
                  key={index}
                  p={6}
                  borderRadius="xl"
                  bg="whiteAlpha.50"
                  _hover={{ bg: 'whiteAlpha.100', cursor: 'pointer' }}
                  role="article"
                  aria-labelledby={`job-${index}`}
                  onClick={() => handleJobClick(job)}
                >
                  <HStack justify="space-between" mb={3}>
                    <HStack>
                      {job.icon}
                      <Heading id={`job-${index}`} size="md">
                        {job.title}
                      </Heading>
                    </HStack>
                    <HStack gap={2}>
                      <Badge colorScheme="green">
                        <HStack gap={1}>
                          <BriefcaseIcon />
                          <Text>{job.type}</Text>
                        </HStack>
                      </Badge>
                      <Badge colorScheme="blue">
                        <HStack gap={1}>
                          <MapPinIcon />
                          <Text>{job.location}</Text>
                        </HStack>
                      </Badge>
                    </HStack>
                  </HStack>
                  <Text mb={4}>{job.description}</Text>
                  <Button
                    size="sm"
                    variant="outline"
                    aria-label={`Apply for ${job.title} position`}
                    _hover={{
                      bg: 'brand.500',
                      color: 'white',
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle apply action
                    }}
                  >
                    Apply Now
                  </Button>
                </Box>
              ))}
            </VStack>
          </Box>
        </VStack>
      </Container>

      {selectedJob && (
        <DrawerRoot open={open} onOpenChange={onClose} size="md">
          <DrawerBackdrop />
          <DrawerContent>
            <DrawerCloseTrigger />
            <DrawerHeader>
              {selectedJob?.title}
              <HStack mt={2} gap={2}>
                <Badge colorScheme="green">
                  <HStack gap={1}>
                    <BriefcaseIcon />
                    <Text>{selectedJob?.type}</Text>
                  </HStack>
                </Badge>
                <Badge colorScheme="blue">
                  <HStack gap={1}>
                    <MapPinIcon />
                    <Text>{selectedJob?.location}</Text>
                  </HStack>
                </Badge>
              </HStack>
            </DrawerHeader>
            <DrawerBody>
              <VStack align="stretch" gap={6}>
                <Text whiteSpace="pre-line">{selectedJob?.fullDescription}</Text>
                <Button
                  colorScheme="blue"
                  size="lg"
                  onClick={() => {
                    // Handle apply action
                  }}
                >
                  Apply for this Position
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerRoot>
      )}
    </Box>
  );
}
