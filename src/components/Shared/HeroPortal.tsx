import { Box } from '@chakra-ui/react';
import { BitcoinIcon, BlocksIcon } from 'lucide-react';

const HeroBackground = () => {
  const NUMBER_OF_CUBES = 8; // Main cubes
  const NUMBER_OF_BACKGROUND_CUBES = 24; // Additional background cubes

  const cubeStyles = {
    position: 'absolute',
    transformStyle: 'preserve-3d',
    animation: `moveCubeHorizontal 10s infinite linear`,
  };

  const getFaceStyles = (opacity: number) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    border: '1px solid black',
    background: `rgba(255, 255, 255, ${opacity})`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const getFaces = (size: number) => ({
    front: { transform: `translateZ(${size / 2}px)` },
    back: { transform: `rotateY(180deg) translateZ(${size / 2}px)` },
    right: { transform: `rotateY(90deg) translateZ(${size / 2}px)` },
    left: { transform: `rotateY(-90deg) translateZ(${size / 2}px)` },
    top: { transform: `rotateX(90deg) translateZ(${size / 2}px)` },
    bottom: { transform: `rotateX(-90deg) translateZ(${size / 2}px)` },
  });

  const generateCubes = (count: number, sizeRange: [number, number], opacityRange: [number, number]) => {
    const cubes = [];
    const sections = 6;
    const sectionHeight = 100 / sections;

    for (let i = 0; i < count; i++) {
      const size = Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
      const sectionIndex = i % sections;
      const bottom = sectionIndex * sectionHeight + Math.random() * (sectionHeight / 2);
      const delay = -Math.random() * 12;
      const opacity = Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0];

      cubes.push({
        size,
        delay,
        left: '-10%',
        bottom: `${bottom}%`,
        opacity,
      });
    }
    return cubes;
  };

  const mainCubes = generateCubes(NUMBER_OF_CUBES, [60, 120], [0.08, 0.1]);
  const backgroundCubes = generateCubes(NUMBER_OF_BACKGROUND_CUBES, [20, 50], [0.02, 0.05]);

  const randomIcons = [BitcoinIcon, BlocksIcon];

  return (
    <Box
      position="absolute"
      width="50vw"
      right="0"
      height="calc(100vh - 72px)"
      transformStyle="preserve-3d"
      perspective="5000px"
      overflow="hidden"
    >
      {[...backgroundCubes, ...mainCubes].map((cube, index) => {
        const RandomIcon = randomIcons[Math.floor(Math.random() * randomIcons.length)];
        return (
          <Box
            key={index}
            {...cubeStyles}
            width={`${cube.size}px`}
            height={`${cube.size}px`}
            left={cube.left}
            bottom={cube.bottom}
            animation={`moveCubeHorizontal 20s infinite linear ${cube.delay}s`}
          >
            {/* Icon positioned in the center of the cube */}
            <Box
              position="absolute"
              width="100%"
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              transform={`translateZ(${cube.size * 0.1}px)`}
              style={{ transformStyle: 'preserve-3d' }}
              color="rgba(255, 255, 255, 0.5)"
            >
              <RandomIcon size={cube.size * 0.5} />
            </Box>
            {/* Cube faces */}
            {Object.entries(getFaces(cube.size)).map(([face, style]) => (
              <Box key={face} {...getFaceStyles(cube.opacity)} {...style} />
            ))}
          </Box>
        );
      })}
    </Box>
  );
};

export default HeroBackground;
