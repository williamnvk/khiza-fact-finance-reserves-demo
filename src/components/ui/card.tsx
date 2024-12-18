import { chakra } from '@chakra-ui/react';

export const Card = chakra('div', {
  base: {
    p: { base: 4, md: 8 },
    rounded: '2xl',
    bg: 'white',
    _dark: {
      bg: 'whiteAlpha.50',
      borderColor: 'whiteAlpha.100',
    },
    // border: '1px solid',
    borderColor: 'gray.50',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  variants: {
    variant: {
      compact: {
        p: 4,
        rounded: 'lg',
      },
      large: {
        p: 12,
        rounded: 'xl',
      },
      highlight: {
        p: 16,
        rounded: 'xl',
        shadow: '2xl',
      },
    },
  },
});
