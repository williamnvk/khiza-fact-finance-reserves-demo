import { Box, Flex } from '@chakra-ui/react';
import React, { ReactElement, useEffect, useState } from 'react';

export interface SlideProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactElement[];
  width?: string;
  duration?: number;
  toRight?: boolean;
  alias: string;
}

const Slider = ({ alias, children, width = '200px', duration = 10, toRight = false }: SliderProps) => {
  const [items, setItems] = useState<ReactElement[]>([]);

  useEffect(() => {
    // Duplica os itens para criar um loop infinito
    const repeatedItems = Array(3).fill(children).flat(); // Aumentado para 3x para transição mais suave
    setItems(repeatedItems);
  }, [children]);

  useEffect(() => {
    const style = document.createElement('style');

    const keyFrames = `
      @keyframes trusted_by_slider_${alias} {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(${toRight ? '' : '-'}${width});
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
      pos="relative"
      w="full"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        background: 'linear-gradient(to right, black, transparent)',
        zIndex: 2
      }}
      _after={{
        content: '""',
        position: 'absolute',
        right: 0,
        top: 0,
        height: '100%',
        background: 'linear-gradient(to left, black, transparent)',
        zIndex: 2
      }}
    >
      <Flex
        gap={8}
        py={4}
        style={{
          animation: `trusted_by_slider_${alias} ${duration}s linear infinite`,
        }}
      >
        {items.map((child, i) => (
          <Box 
            key={i}
            opacity={0.7}
            _hover={{opacity: 1}}
            transition="opacity 0.3s"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            data-aos-delay={i * 100}
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
