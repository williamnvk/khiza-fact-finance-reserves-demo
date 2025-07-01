import { defineGlobalStyles } from '@chakra-ui/react';

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
  body: {
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
  '.what-we-do-card': {
    overflow: 'hidden',
    flex: 1,
    borderRadius: '2xl',
    border: '1px solid',
    borderColor: 'whiteAlpha.200',
    position: 'relative',
    p: 8,
    h: '480px',
    justifyContent: 'flex-end',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 'var(--x)',
      top: 'var(--y)',
      width: 'var(--size)',
      height: 'var(--size)',
      transform: 'translate(-50%, -50%)',
      background: 'radial-gradient(circle closest-side, rgba(255, 255, 255, 0.1), transparent)',
      transition: '--size 0.2s ease',
      zIndex: 5,
    },
  },
  '.use-case-card': {
    overflow: 'hidden',
    flex: 1,
    borderRadius: '2xl',
    border: '1px solid',
    borderColor: 'whiteAlpha.200',
    position: 'relative',
    justifyContent: 'flex-end',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 'var(--x)',
      top: 'var(--y)',
      width: 'var(--size)',
      height: 'var(--size)',
      transform: 'translate(-50%, -50%)',
      background: 'radial-gradient(circle closest-side, rgba(255, 255, 255, 0.1), transparent)',
      transition: '--size 0.2s ease',
      zIndex: 5,
    },
  },
  '@keyframes connectAnimation': {
    '0%': {
      width: 0,
      opacity: 1,
    },
    '100%': {
      width: '80px',
      opacity: 1,
    },
  },
  '@keyframes floatAnimation': {
    '0%': {
      transform: 'translateY(0px)',
    },
    '50%': {
      transform: 'translateY(-6px)',
    },
    '100%': {
      transform: 'translateY(0px)',
    },
  },
  '.omit-from-print': {
    '@media print': {
      display: 'none',
    },
  },
  '.break-page': {
    '@media print': {
      pageBreakAfter: 'always',
    },
  },
});
