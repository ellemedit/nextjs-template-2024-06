import { sva } from "#styled-system/css"

export const popover = sva({
  slots: ["trigger", "floatingWindow"],
  base: {
    trigger: {
      cursor: "pointer",
    },
    floatingWindow: {
      position: "absolute",
      bg: "white",
      border: "1px solid black",
      borderRadius: "md",
      p: "4",
      boxShadow: "lg",
      zIndex: "10",
    },
  },
})
