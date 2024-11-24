import ember from "eslint-plugin-ember";
import globals from "globals";
import babelParser from "@babel/eslint-parser";
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
      // Unconventional js
      "blueprints/*/files/",

      // Compiled output
      "declarations/",
      "dist/",

      // Misc
      "coverage/",
      "!**/.*",
      "**/.*/",

      // ember-try
      ".node_modules.ember-try/",
    ],
  },
  ...compat.extends(
    "eslint:recommended",
    "plugin:ember/recommended",
    "plugin:prettier/recommended",
  ),
  {
    plugins: {
      ember,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: babelParser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        requireConfigFile: false,

        babelOptions: {
          plugins: [
            [
              "@babel/plugin-proposal-decorators",
              {
                decoratorsBeforeExport: true,
              },
            ],
          ],
        },
      },
    },

    rules: {},
  },
  ...compat.extends("plugin:n/recommended").map((config) => ({
    ...config,

    files: [
      ".prettierrc.js",
      ".stylelintrc.js",
      ".template-lintrc.js",
      "ember-cli-build.js",
      "index.js",
      "testem.js",
      "blueprints/*/index.js",
      "config/**/*.js",
      "tests/dummy/config/**/*.js",
    ],
  })),
  {
    files: [
      ".prettierrc.js",
      ".stylelintrc.js",
      ".template-lintrc.js",
      "ember-cli-build.js",
      "index.js",
      "testem.js",
      "blueprints/*/index.js",
      "config/**/*.js",
      "tests/dummy/config/**/*.js",
    ],

    languageOptions: {
      globals: {
        ...Object.fromEntries(
          Object.entries(globals.browser).map(([key]) => [key, "off"]),
        ),
        ...globals.node,
      },

      ecmaVersion: 5,
      sourceType: "script",
    },
  },
  ...compat.extends("plugin:qunit/recommended").map((config) => ({
    ...config,
    files: ["tests/**/*-test.{js,ts}"],
  })),
];
