import { Box } from '@chakra-ui/react';
import {
  Barcode,
  CircleDollarSignIcon,
  CoinsIcon,
  FuelIcon,
  HomeIcon,
  LandmarkIcon,
  LeafIcon,
  PlaneIcon,
  UserIcon,
  WheatIcon,
} from 'lucide-react';

const HeroBackground = () => {
  const NUMBER_OF_CUBES = 16; // Reduced number of main cubes
  const NUMBER_OF_BACKGROUND_CUBES = 16; // Reduced number of background cubes

  const cubeStyles = {
    position: 'absolute',
    bottom: 0,
    transformStyle: 'preserve-3d',
    animation: `moveCubeHorizontal 10s infinite linear`,
  };

  const getFaceStyles = (opacity: number) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    border: '1px solid {colors.brand.200}',
    background: `rgba(0, 0, 0, ${opacity})`,
    _dark: {
      background: `rgba(255, 255, 255, ${opacity})`,
    },
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

  const generateCubes = (
    count: number,
    sizeRange: [number, number],
    opacityRange: [number, number],
    isBackground: boolean,
  ) => {
    const cubes = [];
    const sections = 16;
    const sectionHeight = 100 / sections;

    for (let i = 0; i < count; i++) {
      const size = Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
      const sectionIndex = i % sections;
      const bottom = sectionIndex * sectionHeight + Math.random() * sectionHeight; // Full section height randomization
      const delay = -Math.random() * 20; // Increased delay range
      const opacity = Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0];

      cubes.push({
        size,
        delay,
        left: `${Math.random() * 20 - 30}%`, // Randomized starting positions
        bottom: `${bottom}%`,
        opacity,
        isBackground
      });
    }
    return cubes;
  };

  const mainCubes = generateCubes(NUMBER_OF_CUBES, [40, 120], [0.08, 0.1], false);
  const backgroundCubes = generateCubes(NUMBER_OF_BACKGROUND_CUBES, [20, 50], [0.02, 0.05], true);

  const randomIcons = [
    HomeIcon,
    LeafIcon,
    PlaneIcon,
    FuelIcon,
    WheatIcon,
    Barcode,
    UserIcon,
    LandmarkIcon,
    CoinsIcon,
    CircleDollarSignIcon,
  ];

  return (
    <Box
      position="absolute"
      width="50vw"
      top="0"
      left="0"
      opacity={0.25}
      _dark={{
        opacity: 0.5,
      }}
      height="calc(150vh + 72px)"
      transformStyle="preserve-3d"
      perspective="800px"
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
            animation={`moveCubeHorizontal 10s infinite linear ${cube.delay}s`} // Slower animation
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
              color="rgba(0, 0, 0, 1)"
            >
              <RandomIcon size={cube.size * 0.5} />
            </Box>
            {/* Cube faces */}
            {Object.entries(getFaces(cube.size)).map(([face, style]) => (
              <Box
                key={face}
                {...getFaceStyles(cube.opacity)}
                {...style}
                filter={`blur(${cube.isBackground ? '5px' : '0px'})`}
              />
            ))}
          </Box>
        );
      })}
    </Box>
  );
};

export default HeroBackground;
