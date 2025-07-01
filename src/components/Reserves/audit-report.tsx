import { Download, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Box, HStack, VStack, Text, Button, NativeSelect, Icon, Grid, Heading, Stack } from '@chakra-ui/react';

export function AuditReport({
  reportsList,
}: {
  reportsList: Array<{ date: string; file: string }>;
  companyName: string;
}) {
  const [selectedDate, setSelectedDate] = useState(reportsList[0].date);
  const [isDownloading, setIsDownloading] = useState(false);

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
    <Box className="omit-from-print">
      <Grid
        templateColumns={{ base: '1fr', lg: 'auto 1fr auto' }}
        gap={{ base: 8, lg: 12 }}
        alignItems="center"
        mb={{ base: 16, md: 0 }}
        className="omit-from-print"
      >
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
            display={{ base: 'none', md: 'block' }}
            className="omit-from-print"
          >
            <Box
              position="absolute"
              inset="0"
              bgGradient="linear(135deg, brand.500, purple.600)"
              rounded="3xl"
              opacity="0.1"
              className="omit-from-print"
            />
            <Icon as={Shield} boxSize={10} color="brand.600" _dark={{ color: 'brand.400' }} />
          </Box>

          <VStack gap={1} display={{ base: 'none', md: 'block' }} className="omit-from-print">
            <HStack gap={1}>
              <Icon as={CheckCircle} boxSize={4} color="green.500" />
              <Text fontSize="sm" fontWeight="medium" color="green.600" _dark={{ color: 'green.400' }}>
                Verified
              </Text>
            </HStack>
          </VStack>
        </VStack>

        {/* Content Section */}
        <VStack align="start" gap={6} flex="1" className="omit-from-print">
          <Heading
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="bold"
            color="gray.900"
            _dark={{ color: 'white' }}
            className="omit-from-print"
          >
            Download Report
          </Heading>

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
          <Stack
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: 2, md: 4 }}
            minW={{ base: 'full', lg: '280px' }}
            w="full"
            className="omit-from-print"
          >
            {/* Date Selector */}
            <Box w={{ base: 'full', md: 'auto' }} className="omit-from-print">
              <Text fontSize="sm" fontWeight="medium" mb={2} color="fg.muted">
                Select Report Period
              </Text>
              <NativeSelect.Root size="lg" w="full">
                <NativeSelect.Field
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
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
                  rounded="lg"
                  px={4}
                  py={3}
                  fontSize="md"
                  fontWeight="medium"
                  minW="280px"
                >
                  {reportsList.map((item) => (
                    <option key={item.date} value={item.date}>
                      {item.date}
                    </option>
                  ))}
                </NativeSelect.Field>
                <NativeSelect.Indicator />
              </NativeSelect.Root>
            </Box>

            {/* Download Button */}
            <Button
              mt={{ base: 2, md: 7 }}
              size="lg"
              className="omit-from-print"
              w={{ base: 'full', md: 'auto' }}
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
                console.log(selectedReport);
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
              <HStack gap={2} className="omit-from-print">
                <Icon as={Download} boxSize={5} />
                <Text>Download Report</Text>
                <Icon as={ArrowRight} boxSize={4} />
              </HStack>
            </Button>
          </Stack>
        </VStack>
      </Grid>
    </Box>
  );
}
