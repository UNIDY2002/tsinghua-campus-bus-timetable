const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...compat.extends("eslint-config-standard"),
  {
    files: ["*.ts"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: tsParser,
    },
    "plugins": {
      "@typescript-eslint": tsPlugin,
    },
    "rules": {
      "@typescript-eslint/ban-ts-comment": [
        "off",
      ],
      "@typescript-eslint/ban-types": [
        "off",
      ],
      "@typescript-eslint/explicit-module-boundary-types": [
        "off",
      ],
      "@typescript-eslint/no-empty-function": [
        "off",
      ],
      "@typescript-eslint/no-explicit-any": [
        "off",
      ],
      "@typescript-eslint/no-non-null-assertion": [
        "off",
      ],
      "@typescript-eslint/no-shadow": [
        1,
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
      ],
      "@typescript-eslint/no-useless-constructor": [
        "error",
      ],
      "comma-dangle": [
        "error",
        "only-multiline",
      ],
      "no-shadow": [
        "off",
      ],
      "no-unused-vars": [
        "off",
      ],
      "no-useless-constructor": [
        "off",
      ],
      "semi": [
        "error",
        "always",
      ],
    },
  },
  {
    ignores: ["*.js"],
  },
];
