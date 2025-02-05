import prettier from "eslint-plugin-prettier";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      "**/node_modules/",
      ".expo",
      "**/.expo/",
      "**/dist/",
      "**/web-build/",
      "**/expo-env.d.ts",
      "**/*.orig.*",
      "**/*.jks",
      "**/*.p8",
      "**/*.p12",
      "**/*.key",
      "**/*.mobileprovision",
      "**/.metro-health-check*",
      "**/npm-debug.*",
      "**/yarn-debug.*",
      "**/yarn-error.*",
      "**/.DS_Store",
      "**/*.pem",
      "**/.env*.local",
      "**/*.tsbuildinfo",
      "**/app-example",
    ],
  },
  ...compat.extends("expo"),
  {
    plugins: {
      prettier,
    },

    rules: {
      "prettier/prettier": "error",
    },
  },
];
