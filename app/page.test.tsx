import { expect, test } from "vitest"

import { render, screen } from "@testing-library/react"

import RootPage from "./page"

test("test", () => {
  render(<RootPage />)
  expect(screen.getByText("Hello World")).toBeDefined()
})
