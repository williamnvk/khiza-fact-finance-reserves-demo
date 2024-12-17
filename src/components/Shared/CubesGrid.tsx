import { Box } from '@chakra-ui/react';

const CubesGrid = () => {
  const cubes = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <Box w="300px" h="full" position="relative">
      {cubes.map((i) => (
        <Box key={i} className="cube" id={`cube-${i}`}>
          <Box className="top"></Box>
          <Box className="bottom"></Box>
          <Box className="front"></Box>
          <Box className="back"></Box>
          <Box className="left"></Box>
          <Box className="right"></Box>
        </Box>
      ))}
    </Box>
  );
};

export default CubesGrid;
