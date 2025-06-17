import { Download, ChevronDown, FileText, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Box, HStack, VStack, Text, Button, Menu, Icon, Badge, Flex } from '@chakra-ui/react';

export function AuditReport({
  reportsList,
  companyName,
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
    }, 1000);
  };

  return (
    <Box 
      position="relative"
      overflow="hidden"
      bgGradient="linear(to-br, blue.50, indigo.50)"
      _dark={{ 
        bgGradient: "linear(to-br, gray.800, gray.900)",
        borderColor: "gray.700"
      }}
      borderWidth="1px"
      borderColor="blue.100"
      rounded="2xl" 
      p={{ base: 6, md: 8 }} 
      mt={10}
      shadow="xl"
      _hover={{
        shadow: "2xl",
        transform: "translateY(-2px)",
        transition: "all 0.3s ease"
      }}
      transition="all 0.3s ease"
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        top="-20"
        right="-20"
        w="40"
        h="40"
        bg="blue.500"
        opacity="0.03"
        _dark={{ opacity: "0.05" }}
        rounded="full"
        pointerEvents="none"
      />
      
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={{ base: 6, md: 8 }}
        align={{ base: "start", md: "center" }}
      >
        {/* Icon section with improved styling */}
        <Box
          bgGradient="linear(to-br, blue.500, blue.600)"
          rounded="2xl"
          p={5}
          shadow="lg"
          position="relative"
          _hover={{
            transform: "scale(1.05)",
            transition: "transform 0.2s ease"
          }}
          transition="transform 0.2s ease"
        >
          <Icon 
            as={Download} 
            boxSize={8} 
            color="white"
            filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
          />
          
          {/* Badge for quarterly reports */}
          <Badge
            position="absolute"
            top="-2"
            right="-2"
            colorScheme="green"
            variant="solid"
            fontSize="xs"
            px={2}
            py={1}
            rounded="full"
          >
            Q4
          </Badge>
        </Box>

        {/* Content section */}
        <VStack flex={1} align="start" gap={4}>
          <VStack align="start" gap={2}>
            <Flex align="center" gap={3}>
              <Text 
                fontSize={{ base: "xl", md: "2xl" }} 
                fontWeight="bold"
                color="gray.800"
                _dark={{ color: "white" }}
                letterSpacing="tight"
              >
                Download Full Report
              </Text>
              <Icon as={FileText} boxSize={5} color="blue.500" />
            </Flex>
            
            <Text 
              fontSize="sm" 
              color="gray.600"
              _dark={{ color: "gray.300" }}
              maxW={{ base: "full", md: "md" }}
              lineHeight="relaxed"
            >
              Access the comprehensive quarterly transparency report for {companyName}-issued tokens, 
              including detailed financial data and audit information.
            </Text>
          </VStack>

          {/* Action section */}
          <HStack gap={4} wrap="wrap">
            <Menu.Root>
              <Menu.Trigger asChild>
                <Button 
                  variant="outline" 
                  size="md"
                  bg="white"
                  _dark={{ 
                    bg: "gray.700",
                    borderColor: "gray.600"
                  }}
                  borderColor="blue.200"
                  color="gray.700"
                  _hover={{
                    bg: "blue.50",
                    _dark: { bg: "gray.600" },
                    borderColor: "blue.300",
                    transform: "translateY(-1px)",
                  }}
                  shadow="sm"
                  transition="all 0.2s ease"
                >
                  <Icon as={Calendar} boxSize={4} mr={2} />
                  {selectedDate}
                  <Icon as={ChevronDown} boxSize={4} ml={2} />
                </Button>
              </Menu.Trigger>
              <Menu.Content
                bg="white"
                _dark={{ 
                  bg: "gray.700",
                  borderColor: "gray.600"
                }}
                borderColor="blue.100"
                shadow="xl"
                rounded="xl"
                py={2}
              >
                {reportsList.map((item) => (
                  <Menu.Item
                    key={item.date}
                    value={item.date}
                    onClick={() => {
                      setSelectedDate(item.date);
                      handleDownload(item.file);
                    }}
                    _hover={{
                      bg: "blue.50",
                      _dark: { bg: "gray.600" }
                    }}
                    px={4}
                    py={3}
                    rounded="lg"
                    mx={2}
                    fontSize="sm"
                    fontWeight="medium"
                  >
                    <HStack>
                      <Icon as={Calendar} boxSize={4} color="blue.500" />
                      <Text>{item.date}</Text>
                    </HStack>
                  </Menu.Item>
                ))}
              </Menu.Content>
            </Menu.Root>

            <Button
              colorScheme="blue"
              size="md"
              loading={isDownloading}
              loadingText="Downloading..."
              onClick={() => {
                const selectedReport = reportsList.find(report => report.date === selectedDate);
                if (selectedReport) {
                  handleDownload(selectedReport.file);
                }
              }}
              shadow="md"
              _hover={{
                shadow: "lg",
                transform: "translateY(-1px)",
              }}
              transition="all 0.2s ease"
              px={6}
            >
              <Icon as={Download} boxSize={4} mr={2} />
              Download Report
            </Button>
          </HStack>

          {/* Additional info */}
          <Box
            bg="blue.50"
            _dark={{ bg: "gray.700" }}
            rounded="lg"
            p={4}
            borderLeft="4px"
            borderLeftColor="blue.400"
            w="full"
            maxW={{ base: "full", md: "lg" }}
          >
            <HStack gap={2} mb={2}>
              <Icon as={FileText} boxSize={4} color="blue.500" />
              <Text fontSize="sm" fontWeight="semibold" color="blue.700" _dark={{ color: "blue.300" }}>
                Report Information
              </Text>
            </HStack>
            <Text fontSize="xs" color="gray.600" _dark={{ color: "gray.400" }} lineHeight="relaxed">
              Published quarterly to maintain complete transparency for investors and token holders. 
              Each report includes asset breakdowns, reserve verification, and third-party audit results.
            </Text>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
}
