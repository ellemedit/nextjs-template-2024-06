/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: "all",
  printWidth: 120,
  tabWidth: 2,
  arrowParens: "always",
  semi: false,
  importOrder: [
    "(server-only|client-only)",
    "(.*)\\.css$",
    "<THIRD_PARTY_MODULES>",
    "^@(.*)\\/.*$",
    "^#data\\/.*$",
    "^#styled-system\\/.*$",
    "^#styles\\/.*$",
    "^#components\\/.*$",
    "^#hooks\\/.*$",
    "^#(.*)\\/.*$",
    "^[./]",
    "^[../]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
}

export default config
