import { cva } from "#styled-system/css"

export const button = cva({
  base: {
    px: "4",
    py: "1",
    borderRadius: "md",
    fontWeight: 600,
    borderWidth: 3,
    fontSize: "lg",
    cursor: "pointer",
    _disabled: {
      cursor: "default",
    },
    transition: "colors",
  },
  variants: {
    variant: {
      primary: {
        bg: "indigo.900",
        color: "white",
        borderColor: "transparent",
        _hover: { bg: "indigo.800" },
        _active: { bg: "indigo.700" },
      },
      secondary: {
        color: "indigo.900",
        borderColor: "current",
        _hover: { color: "indigo.800" },
        _active: { color: "indigo.700" },
      },
    },
  },
  defaultVariants: {
    variant: "secondary",
  },
})
