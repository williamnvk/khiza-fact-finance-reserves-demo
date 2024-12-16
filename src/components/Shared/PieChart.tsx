import { ResponsivePie } from '@nivo/pie';
import { Box, HStack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export const PieChart = () => {
  const [data, setData] = useState([]);

  const generateRandomData = () => {
    const values = [
      Math.max(10, Math.floor(Math.random() * 100)),
      Math.max(10, Math.floor(Math.random() * 100)),
      Math.max(10, Math.floor(Math.random() * 100)),
    ];
    const sum = Math.max(
      30,
      values.reduce((a, b) => a + b, 0),
    );
    const normalizedValues = values.map((value) => Math.round((value / sum) * 100));
    setData([
      // @ts-ignore
      { id: 'btc', label: 'Bitcoin', value: normalizedValues[0], color: 'var(--tf-colors-brand-700)' },
      // @ts-ignore
      { id: 'eth', label: 'Ethereum', value: normalizedValues[1], color: 'var(--tf-colors-info-500)' },
      // @ts-ignore
      { id: 'brl', label: 'Real', value: normalizedValues[2], color: 'var(--tf-colors-warning-200)' },
    ]);
  };

  useEffect(() => {
    generateRandomData();
    const interval = setInterval(generateRandomData, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box h="380px" w="320px" pos="relative">
      <HStack color="gray.50" w="full">
        <Text color="gray.200" fontSize="smaller" flex={1}>
          Distribuicão dos seus investimentos
        </Text>
      </HStack>
      <ResponsivePie
        colors={['var(--tf-colors-brand-100)', 'var(--tf-colors-info-500)', 'var(--tf-colors-warning-300)']}
        data={data}
        margin={{ top: 0, right: 20, bottom: 28, left: 20 }}
        innerRadius={0.4}
        padAngle={4}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={0}
        enableArcLinkLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['brighter', 0.5]],
        }}
        valueFormat={(value) =>
          `${Number(value).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}%`
        }
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 78,
            itemHeight: 18,
            itemTextColor: 'var(--tf-colors-gray-500)',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
          },
        ]}
      />
    </Box>
  );
};
