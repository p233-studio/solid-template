import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import solid from "eslint-plugin-solid/configs/typescript";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config({
  files: ["./src/**/*.{ts,tsx}"],
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    solid,
    eslintPluginPrettierRecommended
  ],
  languageOptions: {
    parserOptions: {
      project: "tsconfig.json"
    },
    globals: globals.browser
  }
});
