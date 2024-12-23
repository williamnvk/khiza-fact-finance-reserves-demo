import { useState, useEffect } from 'react';
import { TitleSection } from '@/components/ui/title-sectiont';
import { Box, Container, Heading, Text, VStack, Table } from '@chakra-ui/react';

interface CurrencyData {
  symbol: string;
  name: string;
  price: number;
  weeklyChange: number;
  lastUpdate: Date;
}

export default function DataProviders() {
  const [currencies, setCurrencies] = useState<CurrencyData[]>([
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 43250.5,
      weeklyChange: 2.5,
      lastUpdate: new Date(),
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      price: 2250.75,
      weeklyChange: -1.2,
      lastUpdate: new Date(),
    },
    {
      symbol: 'USDT',
      name: 'Tether',
      price: 1.0,
      weeklyChange: 0.1,
      lastUpdate: new Date(),
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrencies((prevCurrencies) =>
        prevCurrencies.map((currency) => ({
          ...currency,
          price: currency.price * (1 + (Math.random() * 0.02 - 0.01)), // Random price fluctuation ±1%
          lastUpdate: new Date(),
        })),
      );
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box as="main">
      <Container maxW="5xl" py={{ base: 8, md: 16 }}>
        <VStack gap={12} align="stretch">
          <TitleSection>
            <Text fontSize="sm" color="brand.300">
              DATA PROVIDERS
            </Text>
            <Heading textStyle="title">Real-Time Currency Data</Heading>
            <Text fontSize="lg">
              Live cryptocurrency price feeds with real-time updates and weekly performance metrics.
            </Text>
          </TitleSection>

          <Box overflowX="auto">
            <Table.Root variant="line">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader>Symbol</Table.ColumnHeader>
                  <Table.ColumnHeader>Name</Table.ColumnHeader>
                  <Table.ColumnHeader>Price (USD)</Table.ColumnHeader>
                  <Table.ColumnHeader>Weekly Change</Table.ColumnHeader>
                  <Table.ColumnHeader>Last Update</Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {currencies.map((currency) => (
                  <Table.Row key={currency.symbol}>
                    <Table.Cell fontWeight="bold">{currency.symbol}</Table.Cell>
                    <Table.Cell>{currency.name}</Table.Cell>
                    <Table.Cell>${currency.price.toFixed(2)}</Table.Cell>
                    <Table.Cell color={currency.weeklyChange >= 0 ? 'green.400' : 'red.400'}>
                      {currency.weeklyChange >= 0 ? '+' : ''}
                      {currency.weeklyChange}%
                    </Table.Cell>
                    <Table.Cell>{currency.lastUpdate.toLocaleTimeString()}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
