module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // Set the line-break style to "windows"
    "linebreak-style": ["error", "windows"],
    // Enforce double quotes for string literals
    quotes: ["error", "double"],
    // eslint-disable-next-line react/jsx-filename-extension
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
