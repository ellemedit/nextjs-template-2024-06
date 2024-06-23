import { cva } from "#styled-system/css"

export const heading = cva({
  base: {
    fontWeight: "bold",
  },
  variants: {
    level: {
      h1: { fontSize: "4xl" },
      h2: { fontSize: "2xl" },
      h3: { fontSize: "xl" },
    },
  },
  defaultVariants: {
    level: "h2",
  },
})

export const body = cva({
  variants: {
    size: {
      base: { fontSize: "base" },
      small: { fontSize: "sm" },
      xsmall: { fontSize: "xs" },
    },
  },
  defaultVariants: {
    size: "base",
  },
})
