import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export default function ConfidenceIndexChart() {
  const [highlight, setHighlight] = useState(null);
  const [positions, setPositions] = useState([]);

  const data = [
    { x: 10, y: 8, size: 32, color: 'success', type: 'reliable' },
    { x: 15, y: 12, size: 22, color: 'success', type: 'reliable' },
    { x: 20, y: 16, size: 16, color: 'success', type: 'reliable' },
    { x: 25, y: 12, size: 16, color: 'success', type: 'reliable' },
    { x: 30, y: 12, size: 20, color: 'success', type: 'reliable' },
    { x: 35, y: 4, size: 24, color: 'success', type: 'reliable' },
    { x: 40, y: 12, size: 8, color: 'success', type: 'reliable' },
    { x: 45, y: 16, size: 12, color: 'success', type: 'reliable' },
    { x: 50, y: 20, size: 10, color: 'success', type: 'reliable' },
    { x: 52, y: 32, size: 8, color: 'warning', type: 'acceptable' },
    { x: 55, y: 2, size: 16, color: 'warning', type: 'acceptable' },
    { x: 60, y: 12, size: 16, color: 'success', type: 'reliable' },
    { x: 65, y: 16, size: 12, color: 'success', type: 'reliable' },
    { x: 70, y: 12, size: 12, color: 'success', type: 'reliable' },
    { x: 75, y: 8, size: 12, color: 'success', type: 'reliable' },
    // { x: 80, y: 10, size: 16, color: 'success', type: 'reliable' },
    { x: 85, y: 12, size: 20, color: 'success', type: 'reliable' },
    { x: 90, y: 18, size: 12, color: 'success', type: 'reliable' },
    { x: 95, y: 20, size: 10, color: 'success', type: 'reliable' },
    { x: 80, y: 50, size: 22, color: 'danger', type: 'outlier' },
  ];

  // Inicializa posições aleatórias das bolhas
  useEffect(() => {
    setPositions(
      data.map((point) => ({
        ...point,
        offsetX: Math.random() * 4 - 2,
        offsetY: Math.random() * 4 - 2,
      })),
    );
  }, []);

  // Atualiza posições a cada 2 segundos para criar flutuação
  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prevPositions) =>
        prevPositions.map((pos) => ({
          ...pos,
          offsetX: Math.random() * 4 - 2, // Pequena variação na posição
          offsetY: Math.random() * 4 - 2,
        })),
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <VStack align="center" gap={4}>
      {/* Área do gráfico */}
      <Box position="relative" width="full" height="180px" bg="transparent" overflow="hidden">
        {positions.map((point, index) => (
          <Box
            key={index}
            position="absolute"
            width={`${highlight === point.type ? point.size * 1.1 : point.size}px`}
            height={`${highlight === point.type ? point.size * 1.1 : point.size}px`}
            borderRadius="50%"
            bg={`${point.color}.500`}
            left={`calc(${point.x}% + ${point.offsetX}px)`}
            bottom={`calc(${point.y}% + ${point.offsetY}px)`}
            transform="translate(-50%, -50%)"
            transition="all 0.2s ease-in-out"
            _hover={{
              transform: 'translate(-50%, -50%) scale(1.1)',
              boxShadow: '0px 0px 10px rgba(0,0,0,0.3)',
            }}
            onMouseEnter={() => setHighlight(point.type)}
            onMouseLeave={() => setHighlight(null)}
          />
        ))}
      </Box>

      <HStack flexDir={{ base: 'column', md: 'row' }} gap={0} align="start" borderBottomRadius="lg" overflow="hidden">
        {[
          {
            key: 'reliable',
            title: 'Reliable',
            description: 'Values with normal volatility. Trusted for critical applications.',
            color: 'success',
          },
          {
            key: 'acceptable',
            title: 'Acceptable',
            description: 'Values with normal volatility. Suitable for most applications.',
            color: 'warning',
          },
          {
            key: 'outlier',
            title: 'Outlier',
            description: 'Values with high volatility. Not suitable for critical applications.',
            color: 'danger',
          },
        ].map((type, index) => (
          <VStack
            role="button"
            key={index}
            _hover={{ cursor: 'default' }}
            onMouseEnter={() => setHighlight(type.key)}
            onMouseLeave={() => setHighlight(null)}
            transform={highlight === type.key ? 'scale(1.1)' : 'scale(1)'}
            transition="transform 0.2s ease, filter 0.2s ease"
            align="start"
            p={6}
          >
            <Heading fontSize="xl" color={`${type.color}.500`}>
              {type.title}
            </Heading>
            <Text fontSize="13px" lineHeight={1.2} color={`gray.100`}>
              {type.description}
            </Text>
          </VStack>
        ))}
      </HStack>
    </VStack>
  );
}
