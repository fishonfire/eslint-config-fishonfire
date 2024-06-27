module.exports = {
  env: {
    "browser": true,
    "es2021": true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:sonarjs/recommended"
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "sonarjs",
    'react-hooks'
  ],
  ignorePatterns: [
    "babel.config.js",
    "metro.config.js"
  ],
  globals: {
    "__DEV__": "readonly",
    "require": "readonly",
  },
  rules: {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "no-trailing-spaces": "error",
    "comma-dangle": ["error", "never"],
    "arrow-body-style": ["error", "as-needed"],
    "eol-last": "error",
    "space-before-function-paren": ["error", "always"],
    "jsx-quotes": ["error", "prefer-single"],
    "lines-between-class-members": ["error", "always"],
    "multiline-ternary": ["error", "always-multiline"],
    "newline-before-return": "error",
    "no-empty": ["error", { "allowEmptyCatch": true }],
    "no-useless-constructor": "error",
    "no-var": "error",
    "space-before-blocks": "error",
    "prefer-template": "error",
    "react/jsx-max-props-per-line": ["error", { "maximum": { "single": 1, "multi": 1 } }],
    "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1, "maxBOF": 0 }],
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": "return" },
      { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
      { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] }
    ],
    "react/jsx-newline": ["error", { "prevent": false }],
    "operator-linebreak": [
      "error",
      "after",
      { "overrides": { "?": "before", ":": "before" } }
    ],
    "require-yield": "off",
    'react-hooks/rules-of-hooks': 'error'
  }
};
