import type { Meta, StoryObj } from "@storybook/react"

import RootPage from "./page"

const meta: Meta<typeof RootPage> = {
  component: RootPage,
  title: "RootPage",
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
