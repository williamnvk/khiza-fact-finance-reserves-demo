import { defineGlobalStyles } from '@chakra-ui/react';

const cubes = Array.from({ length: 24 }, (_, i) => i + 1);

export const globalCss = defineGlobalStyles({
  '*': {
    fontFeatureSettings: '"cv11"',
    '--ring-inset': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--ring-offset-width': '0px',
    '--ring-offset-color': '#fff',
    '--ring-color': 'rgba(66, 153, 225, 0.6)',
    '--ring-offset-shadow': '0 0 #0000',
    '--ring-shadow': '0 0 #0000',
    '--brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--invert': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--drop-shadow': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--backdrop-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--backdrop-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--backdrop-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--backdrop-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--backdrop-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--backdrop-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--backdrop-opacity': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--backdrop-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--backdrop-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--global-font-mono': 'fonts.mono',
    '--global-font-body': 'fonts.body',
    '--global-color-border': 'colors.border',
    '--swiper-pagination-bottom': '-32px !important',
  },
  html: {
    color: 'fg',
    bg: 'bg',
    lineHeight: '1.5',
    colorPalette: 'gray',
    overflowX: 'clip',
  },
  '*::placeholder': {
    color: 'fg.muted/80',
  },
  '*::selection': {
    bg: 'colorPalette.muted/80',
  },
  '.swiper-slide': {
    borderRadius: '2xl',
    border: 'none',
  },
  '.cube': {
    width: '48px',
    height: '48px',
    transformStyle: 'preserve-3d',
    position: 'absolute',
    animation: 'rotation 2s infinite ease',
  },
  '.cube div': {
    margin: 0,
    width: '100%',
    height: '100%',
    display: 'block',
    position: 'absolute',
    border: '2px solid {colors.brand.500}',
    bg: '{colors.brand.950}',
  },
  '.cube .front': {
    transform: 'rotateY(0deg) translateZ(24px)',
  },
  '.cube .back': {
    transform: 'rotateX(180deg) translateZ(24px)',
  },
  '.cube .right': {
    transform: 'rotateY(90deg) translateZ(24px)',
  },
  '.cube .left': {
    transform: 'rotateY(-90deg) translateZ(24px)',
  },
  '.cube .top': {
    transform: 'rotateX(90deg) translateZ(24px)',
  },
  '.cube .bottom': {
    transform: 'rotateX(-90deg) translateZ(24px)',
  },
  '@keyframes rotation': {
    '0%': {
      transform: 'rotateX(0) rotateY(0)',
    },
    '100%': {
      transform: 'rotateX(-90deg) rotateY(90deg)',
    },
  },
  ...Object.fromEntries(
    cubes.map((i) => [
      `#cube-${i}`,
      {
        left: `${((i - 1) % 4) * 80}px`,
        top: `${Math.floor((i - 1) / 4) * 80}px`,
        animationDelay: `${0.25 + ((i - 1) % 4) * 0.25 + Math.floor((i - 1) / 4) * 0.25}s`,
      },
    ]),
  ),
  '@keyframes moveCube': {
    '0%': {
      transform: 'rotateX(-30deg) rotateY(45deg) translate(0, 0)',
    },
    '100%': {
      transform: 'rotateX(-30deg) rotateY(45deg) translate(calc(100vw - 100px), -100vh)',
    },
  },
  '@keyframes moveCubeHorizontal': {
    '0%': {
      transform: 'rotateX(-30deg) rotateY(45deg) translateX(-100px)',
    },
    '100%': {
      transform: 'rotateX(-30deg) rotateY(45deg) translateX(calc(100vw + 100px))',
    },
  },
  '@keyframes moveCubeForward': {
    '0%': {
      transform: 'translateZ(-1000px)',
      opacity: 0,
    },
    '50%': {
      opacity: 1,
    },
    '100%': {
      transform: 'translateZ(500px)',
      opacity: 0,
    },
  },
});
