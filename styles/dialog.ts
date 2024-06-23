import { sva } from "#styled-system/css"

export const dialog = sva({
  slots: ["backdrop", "floatingWindow"],
  base: {
    backdrop: {
      position: "fixed",
      inset: 0,
      bg: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    floatingWindow: {
      bg: "white",
      p: "4",
      borderRadius: "lg",
      boxShadow: "lg",
      maxWidth: "80%",
      overflow: "auto",
    },
  },
})
