import { chakra } from '@chakra-ui/react';

export const TitleSection = chakra('div', {
  base: {
    my: { base: 6, md: 12 },
    display: 'flex',
    flexDirection: 'column',
    gap: { base: 2, md: 4 },
  },
});
