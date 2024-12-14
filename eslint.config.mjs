import { FlatCompat } from "@eslint/eslintrc"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      'prettier/prettier': ["error", {
        'printWidth': 80,
        'tabWidth': 2,
        'singleQuote': true,
        'trailingComma': 'all',
        'arrowParens': 'always',
        'semi': false,
        'endOfLine': 'auto',
        'bracketSpacing': true,
        'bracketSameLine': false,
      }],
      semi: ['error', 'never'],
      quotes: ["error", "single"],
      "comma-dangle": ["error", "only-multiline"],
      "no-trailing-spaces": "error",
      "react/jsx-tag-spacing": [
        "error",
        {
          "beforeSelfClosing": "never",
          "afterOpening": "never",
          "beforeClosing": "never"
        }
      ],
      "object-curly-newline": [
        "error",
        {
          multiline: true,
          consistent: true,
          minProperties: 4,
        }
      ],
      "indent": ["error", 2, { "SwitchCase": 1 }],
      "react/jsx-indent": ["error", 2],
      "react/jsx-indent-props": ["error", 2],
      "no-empty-function": "error",
      "newline-before-return": "error",
      "max-len": [ "error", { code: 120, ignorePattern: "^import\\W.*" }],
      "no-multiple-empty-lines": [ "error", { max: 1, maxBOF: 0, maxEOF: 0 }],
      "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
    },
  },
]

export default eslintConfig
