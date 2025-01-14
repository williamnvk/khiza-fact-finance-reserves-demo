import { Box, Flex } from '@chakra-ui/react';
import React, { ReactElement, useEffect, useState, useCallback, useRef } from 'react';

export interface SlideProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactElement[];
  duration?: number;
  toRight?: boolean;
  alias: string;
}

const Slider = ({ alias, children, duration = 60, toRight = false, ...props }: SliderProps) => {
  const [items, setItems] = useState<ReactElement[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const createItems = useCallback(() => {
    const repeatedItems = [
      ...children,
      ...children,
      ...children,
      ...children,
      ...children,
      ...children,
      ...children,
      ...children,
    ];
    setItems(repeatedItems);
  }, [children]);

  useEffect(() => {
    createItems();
  }, [createItems]);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const content = contentRef.current;
    const speed = toRight ? duration * -1 : duration;

    content.style.animation = `scroll-${alias} ${Math.abs(speed)}s linear ${isPaused ? 'paused' : 'infinite'}`;

    const keyframes = `
      @keyframes scroll-${alias} {
        0% {
          transform: translateX(${toRight ? '-100%' : '0'});
        }
        100% {
          transform: translateX(${toRight ? '0' : '-100%'});
        }
      }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = keyframes;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [alias, duration, toRight, isPaused]);

  return (
    <Box
      ref={containerRef}
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
        background: 'linear-gradient(to right, bg, transparent)',
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
        background: 'linear-gradient(to left, bg, transparent)',
        zIndex: 2,
        pointerEvents: 'none',
      }}
      {...props}
    >
      <Flex
        ref={contentRef}
        gap={4}
        py={4}
        style={{
          display: 'inline-flex',
          whiteSpace: 'nowrap',
          willChange: 'transform',
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
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
            {React.cloneElement(child)}
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
