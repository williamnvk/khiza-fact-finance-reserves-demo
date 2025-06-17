export const keyframes = {
  spin: {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' }
  },
  pulse: {
    '50%': {
      opacity: '.5'
    }
  },
  ping: {
    '75%, 100%': {
      transform: 'scale(2)',
      opacity: '0'
    }
  },
  bounce: {
    '0%, 100%': {
      transform: 'translateY(-25%)',
      animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
    },
    '50%': {
      transform: 'none',
      animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
    }
  },
  shimmer: {
    '0%': {
      transform: 'translateX(-100%)',
    },
    '100%': {
      transform: 'translateX(100%)',
    }
  },
  'bg-position': {
    '0%': {
      backgroundPosition: '0% 0%',
    },
    '100%': {
      backgroundPosition: '100% 100%',
    },
  },
  'expand-height': {
    from: { height: '0' },
    to: { height: 'var(--height)' }
  },
  'collapse-height': {
    from: { height: 'var(--height)' },
    to: { height: '0' }
  },
  'expand-width': {
    from: { width: '0' },
    to: { width: 'var(--width)' }
  },
  'collapse-width': {
    from: { width: 'var(--width)' },
    to: { width: '0' }
  },
  'slide-in': {
    '0%': {
      transform: 'translateX(-100%)',
    },
    '100%': {
      transform: 'translateX(0)',
    }
  },
  'slide-out': {
    '0%': {
      transform: 'translateX(0)',
    },
    '100%': {
      transform: 'translateX(100%)',
    }
  },
};
