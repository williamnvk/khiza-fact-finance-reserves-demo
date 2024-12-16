import { defineTextStyles } from "@chakra-ui/react"

export const textStyles = defineTextStyles({
  "2xs": {
    value: {
      fontSize: "2xs",
      lineHeight: "0.75rem",
    },
  },
  xs: {
    value: {
      fontSize: "xs",
      lineHeight: "1rem",
    },
  },
  sm: {
    value: {
      fontSize: "sm",
      lineHeight: "1.25rem",
    },
  },
  md: {
    value: {
      fontSize: "md",
      lineHeight: "1.5rem",
    },
  },
  lg: {
    value: {
      fontSize: "lg",
      lineHeight: "1.75rem",
    },
  },
  xl: {
    value: {
      fontSize: "xl",
      lineHeight: "1.875rem",
    },
  },
  "2xl": {
    value: {
      fontSize: "2xl",
      lineHeight: "2rem",
    },
  },
  "3xl": {
    value: {
      fontSize: "3xl",
      lineHeight: "2.375rem",
    },
  },
  "4xl": {
    value: {
      fontSize: "4xl",
      lineHeight: "2.75rem",
      letterSpacing: "-0.025em",
    },
  },
  "5xl": {
    value: {
      fontSize: "5xl",
      lineHeight: "3.75rem",
      letterSpacing: "-0.025em",
    },
  },
  "6xl": {
    value: {
      fontSize: "6xl",
      lineHeight: "4.5rem",
      letterSpacing: "-0.025em",
    },
  },
  "title": {
    value: {
      fontSize: {
        base: "2xl",
        md: "5xl",
        xl: "5xl",
      },
      lineHeight: "1.2",
      letterSpacing: "-0.025em"
    },
  },
  "subtitle": {
    value: {
      fontFamily: "body",
      fontSize: {
        base: "md",
        md: "xl",
        xl: "xl",
      },
      lineHeight: "1.3",
    },
  },
  none: {
    value: {},
  },
})
