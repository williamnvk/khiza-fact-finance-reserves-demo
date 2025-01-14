import { Box, Flex } from '@chakra-ui/react';
import React, { ReactElement, useEffect, useState, useCallback } from 'react';

export interface SlideProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactElement[];
  width?: string;
  duration?: number;
  toRight?: boolean;
  alias: string;
}

const Slider = ({ alias, children, width = '200px', duration = 5, toRight = false, ...props }: SliderProps) => {
  const [items, setItems] = useState<ReactElement[]>([]);

  // Memoize items creation
  const createItems = useCallback(() => {
    // Create 4x items for smoother infinite scroll
    const repeatedItems = Array(4).fill(children).flat();
    setItems(repeatedItems);
  }, [children]);

  useEffect(() => {
    createItems();
  }, [createItems]);

  useEffect(() => {
    const style = document.createElement('style');
    const direction = toRight ? '' : '-';

    // Improved keyframes with transform3d for better performance
    const keyFrames = `
      @keyframes slider_${alias} {
        0% {
          transform: translate3d(0, 0, 0);
        }
        100% {
          transform: translate3d(${direction}50%, 0, 0);
        }
      }
    `;

    style.innerHTML = keyFrames;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [toRight, width, alias]);

  return (
    <Box
      as="section"
      pos="relative"
      w="full"
      overflow="hidden"
      role="region"
      aria-label="Content slider"
      _before={{
        content: '""',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '15%',
        height: '100%',
        background: 'linear-gradient(to right, {colors.black}, transparent)',
        zIndex: 2,
        pointerEvents: 'none',
      }}
      _after={{
        content: '""',
        position: 'absolute',
        right: 0,
        top: 0,
        width: '15%',
        height: '100%',
        background: 'linear-gradient(to left, {colors.black}, transparent)',
        zIndex: 2,
        pointerEvents: 'none',
      }}
      {...props}
    >
      <Flex
        gap={4}
        py={4}
        h="120px"
        style={{
          animation: `slider_${alias} ${duration}s linear infinite`,
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        {items.map((child, i) => (
          <Box
            key={i}
            opacity={0.7}
            _hover={{ opacity: 1 }}
            transition="opacity 0.3s ease"
            willChange="opacity"
            flexShrink={0}
          >
            {React.cloneElement(child, { width })}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

const Slide = ({ children, ...props }: SlideProps) => {
  return <Box {...props}>{children}</Box>;
};

Slider.Slide = Slide;

export default Slider;
