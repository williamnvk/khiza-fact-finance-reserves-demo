import { Download, ChevronDown, FileText, Calendar, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Box, HStack, VStack, Text, Button, Menu, Icon, Badge, Flex, Card, Grid, Separator } from '@chakra-ui/react';

export function AuditReport({
  reportsList,
  companyName,
}: {
  reportsList: Array<{ date: string; file: string }>;
  companyName: string;
}) {
  const [selectedDate, setSelectedDate] = useState(reportsList[0].date);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = async (file: string) => {
    setIsDownloading(true);
    // Simulate file download with loading state
    const link = document.createElement('a');
    link.href = file;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Simulate download delay for better UX
    setTimeout(() => {
      setIsDownloading(false);
    }, 1500);
  };

  return (
    <>
      {/* Main Card */}
      <Card.Root
        size="lg"
        variant="elevated"
        rounded="3xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transform={isHovered ? 'translateY(-8px)' : 'translateY(0)'}
        transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
        shadow={isHovered ? '2xl' : 'xl'}
        borderWidth="1px"
        borderColor="gray.200"
        _dark={{
          borderColor: 'gray.700',
          bg: 'gray.800',
        }}
        overflow="hidden"
        position="relative"
      >
        {/* Background Pattern */}
        <Box
          position="absolute"
          top="0"
          right="0"
          w="full"
          h="full"
          bgGradient="linear-gradient(135deg, {colors.brand.50} 0%, transparent 70%)"
          _dark={{
            bgGradient: 'linear-gradient(135deg, {colors.brand.900/20} 0%, transparent 70%)',
          }}
          opacity="0.5"
        />

        <Card.Body p={{ base: 8, md: 12 }}>
          <Grid templateColumns={{ base: '1fr', lg: 'auto 1fr auto' }} gap={{ base: 8, lg: 12 }} alignItems="center">
            {/* Icon Section */}
            <VStack gap={4}>
              <Box
                position="relative"
                bg="white"
                _dark={{
                  bg: 'gray.700',
                  borderColor: 'gray.600',
                }}
                rounded="3xl"
                p={6}
                shadow="lg"
                borderWidth="1px"
                borderColor="gray.100"
              >
                <Box
                  position="absolute"
                  inset="0"
                  bgGradient="linear(135deg, brand.500, purple.600)"
                  rounded="3xl"
                  opacity="0.1"
                />
                <Icon as={Shield} boxSize={10} color="brand.600" _dark={{ color: 'brand.400' }} />
              </Box>

              <VStack gap={1}>
                <HStack gap={1}>
                  <Icon as={CheckCircle} boxSize={4} color="green.500" />
                  <Text fontSize="sm" fontWeight="medium" color="green.600" _dark={{ color: 'green.400' }}>
                    Verified
                  </Text>
                </HStack>
              </VStack>
            </VStack>

            {/* Content Section */}
            <VStack align="start" gap={6} flex="1">
              <VStack align="start" gap={3}>
                <HStack gap={3}>
                  <Text
                    fontSize={{ base: 'xl', md: '2xl' }}
                    fontWeight="bold"
                    color="gray.900"
                    _dark={{ color: 'white' }}
                  >
                    Download Report
                  </Text>
                  <Icon as={FileText} boxSize={5} color="brand.500" />
                </HStack>

                <Text fontSize="md" color="gray.600" _dark={{ color: 'gray.300' }} lineHeight="relaxed">
                  Comprehensive quarterly transparency documentation including asset verification, compliance status,
                  and detailed financial audits.
                </Text>
              </VStack>

              {/* Features Grid */}
              {/* <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={4} w="full">
                {[
                  { icon: Shield, label: 'Security Audit', desc: 'Third-party verified' },
                  { icon: FileText, label: 'Financial Data', desc: 'Detailed breakdown' },
                  { icon: CheckCircle, label: 'Compliance', desc: 'Regulatory approved' },
                ].map((feature, index) => (
                  <Box
                    key={index}
                    bg="bg.subtle"
                    _dark={{
                      bg: 'gray.700',
                      borderColor: 'gray.600',
                    }}
                    rounded="xl"
                    p={4}
                    borderWidth="1px"
                    borderColor="gray.200"
                  >
                    <HStack gap={3}>
                      <Icon as={feature.icon} boxSize={5} color="brand.500" />
                      <VStack align="start" gap={0}>
                        <Text fontSize="sm" fontWeight="semibold">
                          {feature.label}
                        </Text>
                        <Text fontSize="xs" color="fg.muted">
                          {feature.desc}
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                ))}
              </Grid> */}

                {/* Action Section */}
            <HStack gap={4} minW={{ base: 'full', lg: '280px' }}>
              {/* Date Selector */}
              <Box w="full">
                <Text fontSize="sm" fontWeight="medium" mb={2} color="gray.700" _dark={{ color: 'gray.300' }}>
                  Select Report Period
                </Text>
                <Menu.Root>
                  <Menu.Trigger asChild>
                    <Button
                      variant="outline"
                      size="lg"
                      w="full"
                      justifyContent="space-between"
                      bg="white"
                      _dark={{
                        bg: 'gray.700',
                        borderColor: 'gray.600',
                      }}
                      borderColor="gray.300"
                      _hover={{
                        borderColor: 'brand.400',
                        shadow: 'md',
                      }}
                      transition="all 0.2s ease"
                    >
                      <HStack>
                        <Icon as={Calendar} boxSize={4} color="brand.500" />
                        <Text fontWeight="medium">{selectedDate}</Text>
                      </HStack>
                      <Icon as={ChevronDown} boxSize={4} />
                    </Button>
                  </Menu.Trigger>
                  <Menu.Content
                    bg="white"
                    _dark={{
                      bg: 'gray.700',
                      borderColor: 'gray.600',
                    }}
                    borderColor="gray.200"
                    shadow="2xl"
                    rounded="xl"
                    py={2}
                    minW="280px"
                  >
                    {reportsList.map((item) => (
                      <Menu.Item
                        key={item.date}
                        value={item.date}
                        onClick={() => setSelectedDate(item.date)}
                        _hover={{
                          bg: 'brand.50',
                          _dark: { bg: 'gray.600' },
                        }}
                        px={4}
                        py={3}
                        rounded="lg"
                        mx={2}
                        cursor="pointer"
                      >
                        <HStack justify="space-between" w="full">
                          <HStack>
                            <Icon as={Calendar} boxSize={4} color="brand.500" />
                            <Text fontWeight="medium">{item.date}</Text>
                          </HStack>
                          {item.date === selectedDate && <Icon as={CheckCircle} boxSize={4} color="green.500" />}
                        </HStack>
                      </Menu.Item>
                    ))}
                  </Menu.Content>
                </Menu.Root>
              </Box>

              {/* Download Button */}
              <Button
              mt={7}
                size="lg"
                w="full"
                bgGradient="linear(to-r, brand.500, brand.600)"
                _hover={{
                  bgGradient: 'linear(to-r, brand.600, brand.700)',
                  transform: 'translateY(-2px)',
                  shadow: 'lg',
                }}
                color="white"
                loading={isDownloading}
                loadingText="Downloading..."
                onClick={() => {
                  const selectedReport = reportsList.find((report) => report.date === selectedDate);
                  if (selectedReport) {
                    handleDownload(selectedReport.file);
                  }
                }}
                transition="all 0.3s ease"
               
                fontWeight="semibold"
                _active={{
                  transform: 'translateY(0)',
                }}
              >
                <HStack gap={2}>
                  <Icon as={Download} boxSize={5} />
                  <Text>Download Report</Text>
                  <Icon as={ArrowRight} boxSize={4} />
                </HStack>
              </Button>

           
            </HStack>


            </VStack>

          
          </Grid>
        </Card.Body>
      </Card.Root>

      {/* Bottom Info Section */}
      <Box
        mt={8}
        p={6}
        bg="brand.50"
        _dark={{
          bg: 'brand.900/20',
          borderColor: 'brand.800',
        }}
        rounded="2xl"
        borderWidth="1px"
        borderColor="brand.200"
      >
        <HStack gap={4}>
          <Icon as={FileText} boxSize={6} color="brand.600" _dark={{ color: 'brand.400' }} />
          <VStack align="start" gap={1} flex="1">
            <Text fontWeight="semibold" color="brand.900" _dark={{ color: 'brand.100' }}>
              About Our Transparency Reports
            </Text>
            <Text fontSize="sm" color="brand.700" _dark={{ color: 'brand.300' }} lineHeight="relaxed">
              These comprehensive reports are published quarterly and include detailed asset breakdowns, third-party
              audit results, compliance verification, and reserve attestations. Each report undergoes rigorous review to
              ensure complete transparency for our stakeholders.
            </Text>
          </VStack>
        </HStack>
      </Box>
    </>
  );
}
