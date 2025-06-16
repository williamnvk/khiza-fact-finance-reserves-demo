import { Download, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Box, HStack, VStack, Text, Button, Menu, Icon } from '@chakra-ui/react';

export function AuditReport({
  reportsList,
  companyName,
}: {
  reportsList: Array<{ date: string; file: string }>;
  companyName: string;
}) {
  const [selectedDate, setSelectedDate] = useState(reportsList[0].date);

  const handleDownload = (file: string) => {
    // Simulate file download
    const link = document.createElement('a');
    link.href = file;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box bg="gray.100" _dark={{ bg: 'gray.800' }} rounded="lg" p={6} mt={10}>
      <HStack gap={6} align="center">
        <Box bg="white" _dark={{ bg: 'gray.700' }} rounded="full" p={4}>
          <Icon as={Download} boxSize={10} />
        </Box>
        <VStack flex={1} align="start" gap={3}>
          <Text fontSize="xl" fontWeight="bold">
            Download Full Report
          </Text>

          <Menu.Root>
            <Menu.Trigger asChild>
              <Button variant="outline" size="sm" bg="gray.100" _dark={{ bg: 'gray.800' }}>
                <ChevronDown size={16} />
                {selectedDate}
              </Button>
            </Menu.Trigger>
            <Menu.Content>
              {reportsList.map((item) => (
                <Menu.Item
                  key={item.date}
                  value={item.date}
                  onClick={() => {
                    setSelectedDate(item.date);
                    handleDownload(item.file);
                  }}
                >
                  {item.date}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Root>

          <Text fontSize="sm">
            Access the full version of this report, published quarterly to maintain transparency for investors and users
            of {companyName}-issued tokens.
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}
