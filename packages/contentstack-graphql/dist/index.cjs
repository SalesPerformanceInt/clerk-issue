"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod),
      mod.exports
    );
  };
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, "default", { value: mod, enumerable: true })
      : target,
    mod,
  )
);
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/.pnpm/dotenv@16.0.3/node_modules/dotenv/package.json
var require_package = __commonJS({
  "../../node_modules/.pnpm/dotenv@16.0.3/node_modules/dotenv/package.json"(
    exports,
    module2,
  ) {
    module2.exports = {
      name: "dotenv",
      version: "16.0.3",
      description: "Loads environment variables from .env file",
      main: "lib/main.js",
      types: "lib/main.d.ts",
      exports: {
        ".": {
          require: "./lib/main.js",
          types: "./lib/main.d.ts",
          default: "./lib/main.js",
        },
        "./config": "./config.js",
        "./config.js": "./config.js",
        "./lib/env-options": "./lib/env-options.js",
        "./lib/env-options.js": "./lib/env-options.js",
        "./lib/cli-options": "./lib/cli-options.js",
        "./lib/cli-options.js": "./lib/cli-options.js",
        "./package.json": "./package.json",
      },
      scripts: {
        "dts-check": "tsc --project tests/types/tsconfig.json",
        lint: "standard",
        "lint-readme": "standard-markdown",
        pretest: "npm run lint && npm run dts-check",
        test: "tap tests/*.js --100 -Rspec",
        prerelease: "npm test",
        release: "standard-version",
      },
      repository: {
        type: "git",
        url: "git://github.com/motdotla/dotenv.git",
      },
      keywords: [
        "dotenv",
        "env",
        ".env",
        "environment",
        "variables",
        "config",
        "settings",
      ],
      readmeFilename: "README.md",
      license: "BSD-2-Clause",
      devDependencies: {
        "@types/node": "^17.0.9",
        decache: "^4.6.1",
        dtslint: "^3.7.0",
        sinon: "^12.0.1",
        standard: "^16.0.4",
        "standard-markdown": "^7.1.0",
        "standard-version": "^9.3.2",
        tap: "^15.1.6",
        tar: "^6.1.11",
        typescript: "^4.5.4",
      },
      engines: {
        node: ">=12",
      },
    };
  },
});

// ../../node_modules/.pnpm/dotenv@16.0.3/node_modules/dotenv/lib/main.js
var require_main = __commonJS({
  "../../node_modules/.pnpm/dotenv@16.0.3/node_modules/dotenv/lib/main.js"(
    exports,
    module2,
  ) {
    var fs = require("fs");
    var path = require("path");
    var os = require("os");
    var packageJson = require_package();
    var version = packageJson.version;
    var LINE =
      /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;
    function parse(src) {
      const obj = {};
      let lines = src.toString();
      lines = lines.replace(/\r\n?/gm, "\n");
      let match;
      while ((match = LINE.exec(lines)) != null) {
        const key = match[1];
        let value = match[2] || "";
        value = value.trim();
        const maybeQuote = value[0];
        value = value.replace(/^(['"`])([\s\S]*)\1$/gm, "$2");
        if (maybeQuote === '"') {
          value = value.replace(/\\n/g, "\n");
          value = value.replace(/\\r/g, "\r");
        }
        obj[key] = value;
      }
      return obj;
    }
    function _log(message) {
      console.log(`[dotenv@${version}][DEBUG] ${message}`);
    }
    function _resolveHome(envPath) {
      return envPath[0] === "~"
        ? path.join(os.homedir(), envPath.slice(1))
        : envPath;
    }
    function config(options) {
      let dotenvPath = path.resolve(process.cwd(), ".env");
      let encoding = "utf8";
      const debug = Boolean(options && options.debug);
      const override = Boolean(options && options.override);
      if (options) {
        if (options.path != null) {
          dotenvPath = _resolveHome(options.path);
        }
        if (options.encoding != null) {
          encoding = options.encoding;
        }
      }
      try {
        const parsed = DotenvModule.parse(
          fs.readFileSync(dotenvPath, { encoding }),
        );
        Object.keys(parsed).forEach(function (key) {
          if (!Object.prototype.hasOwnProperty.call(process.env, key)) {
            process.env[key] = parsed[key];
          } else {
            if (override === true) {
              process.env[key] = parsed[key];
            }
            if (debug) {
              if (override === true) {
                _log(
                  `"${key}" is already defined in \`process.env\` and WAS overwritten`,
                );
              } else {
                _log(
                  `"${key}" is already defined in \`process.env\` and was NOT overwritten`,
                );
              }
            }
          }
        });
        return { parsed };
      } catch (e) {
        if (debug) {
          _log(`Failed to load ${dotenvPath} ${e.message}`);
        }
        return { error: e };
      }
    }
    var DotenvModule = {
      config,
      parse,
    };
    module2.exports.config = DotenvModule.config;
    module2.exports.parse = DotenvModule.parse;
    module2.exports = DotenvModule;
  },
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ALL_QUESTION_ITEMS: () => ALL_QUESTION_ITEMS,
  QUESTION_ITEM: () => QUESTION_ITEM,
  QuestionItemFragment: () => QuestionItemFragment,
  QuestionitemVariantsFragment: () => QuestionitemVariantsFragment,
  QuestionitemVariantsMcquestionBlockChoicesFragment: () =>
    QuestionitemVariantsMcquestionBlockChoicesFragment,
  QuestionitemVariantsMcquestionFragment: () =>
    QuestionitemVariantsMcquestionFragment,
  QuestionitemVariantsTfquestionFragment: () =>
    QuestionitemVariantsTfquestionFragment,
  getAllQuestionItems: () => getAllQuestionItems,
  getQuestionItem: () => getQuestionItem,
  graphQLClient: () => graphQLClient,
  graphql: () => graphql,
});
module.exports = __toCommonJS(src_exports);

// src/generated/graphql.ts
var QuestionitemVariantsMcquestionBlockChoicesFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: {
        kind: "Name",
        value: "QuestionitemVariantsMcquestionBlockChoicesFragment",
      },
      typeCondition: {
        kind: "NamedType",
        name: {
          kind: "Name",
          value: "QuestionitemVariantsMcquestionBlockChoicesChoice",
        },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "choice" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "body" } },
                { kind: "Field", name: { kind: "Name", value: "correct" } },
                { kind: "Field", name: { kind: "Name", value: "feedback" } },
                { kind: "Field", name: { kind: "Name", value: "points" } },
              ],
            },
          },
        ],
      },
    },
  ],
};
var QuestionitemVariantsMcquestionFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "QuestionitemVariantsMcquestionFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "QuestionitemVariantsMcquestion" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "mcquestion" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "choices" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: {
                          kind: "Name",
                          value:
                            "QuestionitemVariantsMcquestionBlockChoicesFragment",
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "instruction" } },
                { kind: "Field", name: { kind: "Name", value: "prompt" } },
                { kind: "Field", name: { kind: "Name", value: "stem" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: {
        kind: "Name",
        value: "QuestionitemVariantsMcquestionBlockChoicesFragment",
      },
      typeCondition: {
        kind: "NamedType",
        name: {
          kind: "Name",
          value: "QuestionitemVariantsMcquestionBlockChoicesChoice",
        },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "choice" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "body" } },
                { kind: "Field", name: { kind: "Name", value: "correct" } },
                { kind: "Field", name: { kind: "Name", value: "feedback" } },
                { kind: "Field", name: { kind: "Name", value: "points" } },
              ],
            },
          },
        ],
      },
    },
  ],
};
var QuestionitemVariantsTfquestionFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "QuestionitemVariantsTfquestionFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "QuestionitemVariantsTfquestion" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "tfquestion" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "correct" } },
                { kind: "Field", name: { kind: "Name", value: "feedback" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "incorrect_feedback" },
                },
                { kind: "Field", name: { kind: "Name", value: "instruction" } },
                { kind: "Field", name: { kind: "Name", value: "points" } },
                { kind: "Field", name: { kind: "Name", value: "prompt" } },
                { kind: "Field", name: { kind: "Name", value: "stem" } },
              ],
            },
          },
        ],
      },
    },
  ],
};
var QuestionitemVariantsFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "QuestionitemVariantsFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "QuestionitemVariants" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "InlineFragment",
            typeCondition: {
              kind: "NamedType",
              name: { kind: "Name", value: "QuestionitemVariantsMcquestion" },
            },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: {
                    kind: "Name",
                    value: "QuestionitemVariantsMcquestionFragment",
                  },
                },
              ],
            },
          },
          {
            kind: "InlineFragment",
            typeCondition: {
              kind: "NamedType",
              name: { kind: "Name", value: "QuestionitemVariantsTfquestion" },
            },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: {
                    kind: "Name",
                    value: "QuestionitemVariantsTfquestionFragment",
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: {
        kind: "Name",
        value: "QuestionitemVariantsMcquestionBlockChoicesFragment",
      },
      typeCondition: {
        kind: "NamedType",
        name: {
          kind: "Name",
          value: "QuestionitemVariantsMcquestionBlockChoicesChoice",
        },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "choice" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "body" } },
                { kind: "Field", name: { kind: "Name", value: "correct" } },
                { kind: "Field", name: { kind: "Name", value: "feedback" } },
                { kind: "Field", name: { kind: "Name", value: "points" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "QuestionitemVariantsMcquestionFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "QuestionitemVariantsMcquestion" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "mcquestion" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "choices" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: {
                          kind: "Name",
                          value:
                            "QuestionitemVariantsMcquestionBlockChoicesFragment",
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "instruction" } },
                { kind: "Field", name: { kind: "Name", value: "prompt" } },
                { kind: "Field", name: { kind: "Name", value: "stem" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "QuestionitemVariantsTfquestionFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "QuestionitemVariantsTfquestion" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "tfquestion" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "correct" } },
                { kind: "Field", name: { kind: "Name", value: "feedback" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "incorrect_feedback" },
                },
                { kind: "Field", name: { kind: "Name", value: "instruction" } },
                { kind: "Field", name: { kind: "Name", value: "points" } },
                { kind: "Field", name: { kind: "Name", value: "prompt" } },
                { kind: "Field", name: { kind: "Name", value: "stem" } },
              ],
            },
          },
        ],
      },
    },
  ],
};
var QuestionItemFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "QuestionItemFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Questionitem" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key_behavior" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "variants" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: {
                      kind: "Name",
                      value: "QuestionitemVariantsMcquestion",
                    },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: {
                          kind: "Name",
                          value: "QuestionitemVariantsMcquestionFragment",
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: {
                      kind: "Name",
                      value: "QuestionitemVariantsTfquestion",
                    },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: {
                          kind: "Name",
                          value: "QuestionitemVariantsTfquestionFragment",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "system" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "uid" } },
                { kind: "Field", name: { kind: "Name", value: "tags" } },
                { kind: "Field", name: { kind: "Name", value: "locale" } },
                { kind: "Field", name: { kind: "Name", value: "created_by" } },
                { kind: "Field", name: { kind: "Name", value: "created_at" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "content_type_uid" },
                },
                { kind: "Field", name: { kind: "Name", value: "branch" } },
                { kind: "Field", name: { kind: "Name", value: "updated_at" } },
                { kind: "Field", name: { kind: "Name", value: "updated_by" } },
                { kind: "Field", name: { kind: "Name", value: "version" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: {
        kind: "Name",
        value: "QuestionitemVariantsMcquestionBlockChoicesFragment",
      },
      typeCondition: {
        kind: "NamedType",
        name: {
          kind: "Name",
          value: "QuestionitemVariantsMcquestionBlockChoicesChoice",
        },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "choice" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "body" } },
                { kind: "Field", name: { kind: "Name", value: "correct" } },
                { kind: "Field", name: { kind: "Name", value: "feedback" } },
                { kind: "Field", name: { kind: "Name", value: "points" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "QuestionitemVariantsMcquestionFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "QuestionitemVariantsMcquestion" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "mcquestion" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "choices" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: {
                          kind: "Name",
                          value:
                            "QuestionitemVariantsMcquestionBlockChoicesFragment",
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "instruction" } },
                { kind: "Field", name: { kind: "Name", value: "prompt" } },
                { kind: "Field", name: { kind: "Name", value: "stem" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "QuestionitemVariantsTfquestionFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "QuestionitemVariantsTfquestion" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "tfquestion" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "correct" } },
                { kind: "Field", name: { kind: "Name", value: "feedback" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "incorrect_feedback" },
                },
                { kind: "Field", name: { kind: "Name", value: "instruction" } },
                { kind: "Field", name: { kind: "Name", value: "points" } },
                { kind: "Field", name: { kind: "Name", value: "prompt" } },
                { kind: "Field", name: { kind: "Name", value: "stem" } },
              ],
            },
          },
        ],
      },
    },
  ],
};
var QuestionItemsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QuestionItems" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "all_questionitem" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "QuestionItemFragment" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "total" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: {
        kind: "Name",
        value: "QuestionitemVariantsMcquestionBlockChoicesFragment",
      },
      typeCondition: {
        kind: "NamedType",
        name: {
          kind: "Name",
          value: "QuestionitemVariantsMcquestionBlockChoicesChoice",
        },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "choice" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "body" } },
                { kind: "Field", name: { kind: "Name", value: "correct" } },
                { kind: "Field", name: { kind: "Name", value: "feedback" } },
                { kind: "Field", name: { kind: "Name", value: "points" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "QuestionitemVariantsMcquestionFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "QuestionitemVariantsMcquestion" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "mcquestion" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "choices" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: {
                          kind: "Name",
                          value:
                            "QuestionitemVariantsMcquestionBlockChoicesFragment",
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "instruction" } },
                { kind: "Field", name: { kind: "Name", value: "prompt" } },
                { kind: "Field", name: { kind: "Name", value: "stem" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "QuestionitemVariantsTfquestionFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "QuestionitemVariantsTfquestion" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "tfquestion" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "correct" } },
                { kind: "Field", name: { kind: "Name", value: "feedback" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "incorrect_feedback" },
                },
                { kind: "Field", name: { kind: "Name", value: "instruction" } },
                { kind: "Field", name: { kind: "Name", value: "points" } },
                { kind: "Field", name: { kind: "Name", value: "prompt" } },
                { kind: "Field", name: { kind: "Name", value: "stem" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "QuestionItemFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Questionitem" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key_behavior" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "variants" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: {
                      kind: "Name",
                      value: "QuestionitemVariantsMcquestion",
                    },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: {
                          kind: "Name",
                          value: "QuestionitemVariantsMcquestionFragment",
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: {
                      kind: "Name",
                      value: "QuestionitemVariantsTfquestion",
                    },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: {
                          kind: "Name",
                          value: "QuestionitemVariantsTfquestionFragment",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "system" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "uid" } },
                { kind: "Field", name: { kind: "Name", value: "tags" } },
                { kind: "Field", name: { kind: "Name", value: "locale" } },
                { kind: "Field", name: { kind: "Name", value: "created_by" } },
                { kind: "Field", name: { kind: "Name", value: "created_at" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "content_type_uid" },
                },
                { kind: "Field", name: { kind: "Name", value: "branch" } },
                { kind: "Field", name: { kind: "Name", value: "updated_at" } },
                { kind: "Field", name: { kind: "Name", value: "updated_by" } },
                { kind: "Field", name: { kind: "Name", value: "version" } },
              ],
            },
          },
        ],
      },
    },
  ],
};
var QuestionItemDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QuestionItem" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "uid" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "questionitem" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "uid" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "uid" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "QuestionItemFragment" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: {
        kind: "Name",
        value: "QuestionitemVariantsMcquestionBlockChoicesFragment",
      },
      typeCondition: {
        kind: "NamedType",
        name: {
          kind: "Name",
          value: "QuestionitemVariantsMcquestionBlockChoicesChoice",
        },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "choice" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "body" } },
                { kind: "Field", name: { kind: "Name", value: "correct" } },
                { kind: "Field", name: { kind: "Name", value: "feedback" } },
                { kind: "Field", name: { kind: "Name", value: "points" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "QuestionitemVariantsMcquestionFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "QuestionitemVariantsMcquestion" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "mcquestion" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "choices" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: {
                          kind: "Name",
                          value:
                            "QuestionitemVariantsMcquestionBlockChoicesFragment",
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "instruction" } },
                { kind: "Field", name: { kind: "Name", value: "prompt" } },
                { kind: "Field", name: { kind: "Name", value: "stem" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "QuestionitemVariantsTfquestionFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "QuestionitemVariantsTfquestion" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "tfquestion" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "correct" } },
                { kind: "Field", name: { kind: "Name", value: "feedback" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "incorrect_feedback" },
                },
                { kind: "Field", name: { kind: "Name", value: "instruction" } },
                { kind: "Field", name: { kind: "Name", value: "points" } },
                { kind: "Field", name: { kind: "Name", value: "prompt" } },
                { kind: "Field", name: { kind: "Name", value: "stem" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "QuestionItemFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Questionitem" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key_behavior" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "variants" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: {
                      kind: "Name",
                      value: "QuestionitemVariantsMcquestion",
                    },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: {
                          kind: "Name",
                          value: "QuestionitemVariantsMcquestionFragment",
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: {
                      kind: "Name",
                      value: "QuestionitemVariantsTfquestion",
                    },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: {
                          kind: "Name",
                          value: "QuestionitemVariantsTfquestionFragment",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "system" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "uid" } },
                { kind: "Field", name: { kind: "Name", value: "tags" } },
                { kind: "Field", name: { kind: "Name", value: "locale" } },
                { kind: "Field", name: { kind: "Name", value: "created_by" } },
                { kind: "Field", name: { kind: "Name", value: "created_at" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "content_type_uid" },
                },
                { kind: "Field", name: { kind: "Name", value: "branch" } },
                { kind: "Field", name: { kind: "Name", value: "updated_at" } },
                { kind: "Field", name: { kind: "Name", value: "updated_by" } },
                { kind: "Field", name: { kind: "Name", value: "version" } },
              ],
            },
          },
        ],
      },
    },
  ],
};

// src/generated/gql.ts
var documents = {
  "\n  fragment QuestionitemVariantsMcquestionFragment on QuestionitemVariantsMcquestion {\n    __typename\n    mcquestion {\n      choices {\n        ...QuestionitemVariantsMcquestionBlockChoicesFragment\n      }\n      instruction\n      prompt\n      stem\n    }\n  }\n":
    QuestionitemVariantsMcquestionFragmentFragmentDoc,
  "\n    fragment QuestionitemVariantsMcquestionBlockChoicesFragment on QuestionitemVariantsMcquestionBlockChoicesChoice {\n      __typename\n      choice {\n        body\n        correct\n        feedback\n        points\n      }\n    }\n  ":
    QuestionitemVariantsMcquestionBlockChoicesFragmentFragmentDoc,
  "\n  fragment QuestionitemVariantsTfquestionFragment on QuestionitemVariantsTfquestion {\n    __typename\n    tfquestion {\n      correct\n      feedback\n      incorrect_feedback\n      instruction\n      points\n      prompt\n      stem\n    }\n  }\n":
    QuestionitemVariantsTfquestionFragmentFragmentDoc,
  "\n  fragment QuestionitemVariantsFragment on QuestionitemVariants {\n    ... on QuestionitemVariantsMcquestion {\n      ...QuestionitemVariantsMcquestionFragment\n    }\n    ... on QuestionitemVariantsTfquestion {\n      ...QuestionitemVariantsTfquestionFragment\n    }\n  }\n":
    QuestionitemVariantsFragmentFragmentDoc,
  "\n  fragment QuestionItemFragment on Questionitem {\n    key_behavior\n    title\n    variants {\n      ... on QuestionitemVariantsMcquestion {\n        ...QuestionitemVariantsMcquestionFragment\n      }\n      ... on QuestionitemVariantsTfquestion {\n        ...QuestionitemVariantsTfquestionFragment\n      }\n    }\n    system {\n      uid\n      tags\n      locale\n      created_by\n      created_at\n      content_type_uid\n      branch\n      updated_at\n      updated_by\n      version\n    }\n  }\n":
    QuestionItemFragmentFragmentDoc,
  "\n  query QuestionItems {\n    all_questionitem {\n      items {\n        ...QuestionItemFragment\n      }\n      total\n    }\n  }\n":
    QuestionItemsDocument,
  "\n  query QuestionItem($uid: String!) {\n    questionitem(uid: $uid) {\n      ...QuestionItemFragment\n    }\n  }\n":
    QuestionItemDocument,
};
function graphql(source) {
  var _a5;
  return (_a5 = documents[source]) != null ? _a5 : {};
}

// src/graphql/fragments/questionItem.ts
var QuestionitemVariantsMcquestionFragment = graphql(
  /* GraphQL */
  `
    fragment QuestionitemVariantsMcquestionFragment on QuestionitemVariantsMcquestion {
      __typename
      mcquestion {
        choices {
          ...QuestionitemVariantsMcquestionBlockChoicesFragment
        }
        instruction
        prompt
        stem
      }
    }
  `,
);
var QuestionitemVariantsMcquestionBlockChoicesFragment = graphql(
  /* GraphQL */
  `
    fragment QuestionitemVariantsMcquestionBlockChoicesFragment on QuestionitemVariantsMcquestionBlockChoicesChoice {
      __typename
      choice {
        body
        correct
        feedback
        points
      }
    }
  `,
);
var QuestionitemVariantsTfquestionFragment = graphql(
  /* GraphQL */
  `
    fragment QuestionitemVariantsTfquestionFragment on QuestionitemVariantsTfquestion {
      __typename
      tfquestion {
        correct
        feedback
        incorrect_feedback
        instruction
        points
        prompt
        stem
      }
    }
  `,
);
var QuestionitemVariantsFragment = graphql(
  /* GraphQL */
  `
    fragment QuestionitemVariantsFragment on QuestionitemVariants {
      ... on QuestionitemVariantsMcquestion {
        ...QuestionitemVariantsMcquestionFragment
      }
      ... on QuestionitemVariantsTfquestion {
        ...QuestionitemVariantsTfquestionFragment
      }
    }
  `,
);
var QuestionItemFragment = graphql(
  /* GraphQL */
  `
    fragment QuestionItemFragment on Questionitem {
      key_behavior
      title
      variants {
        ... on QuestionitemVariantsMcquestion {
          ...QuestionitemVariantsMcquestionFragment
        }
        ... on QuestionitemVariantsTfquestion {
          ...QuestionitemVariantsTfquestionFragment
        }
      }
      system {
        uid
        tags
        locale
        created_by
        created_at
        content_type_uid
        branch
        updated_at
        updated_by
        version
      }
    }
  `,
);

// src/graphql/server/apollo.server.ts
var import_client = require("@apollo/client");

// src/config/env.ts
var import_dotenv = __toESM(require_main(), 1);
import_dotenv.default.config();
var _a;
var QC_CONTENTSTACK_DELIVERY_TOKEN =
  (_a = process.env.QC_CONTENTSTACK_DELIVERY_TOKEN) != null ? _a : "";
var _a2;
var QC_CONTENTSTACK_STACK_KEY =
  (_a2 = process.env.QC_CONTENTSTACK_STACK_KEY) != null ? _a2 : "";
var _a3;
var CS_API_HOST = (_a3 = process.env.CS_API_HOST) != null ? _a3 : "";
var _a4;
var QC_CONTENTSTACK_ENVIRONMENT =
  (_a4 = process.env.QC_CONTENTSTACK_ENVIRONMENT) != null ? _a4 : "";
var SCHEMA_URL = `${CS_API_HOST}/stacks/${QC_CONTENTSTACK_STACK_KEY}?environment=${QC_CONTENTSTACK_ENVIRONMENT}`;

// src/graphql/server/apollo.server.ts
var httpLink = new import_client.HttpLink({ uri: SCHEMA_URL });
var authMiddleware = new import_client.ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      access_token: QC_CONTENTSTACK_DELIVERY_TOKEN,
    },
  });
  return forward(operation);
});
var graphQLClient = new import_client.ApolloClient({
  ssrMode: true,
  cache: new import_client.InMemoryCache(),
  link: (0, import_client.concat)(authMiddleware, httpLink),
});

// src/graphql/queries/allQuestionItems.ts
var ALL_QUESTION_ITEMS = graphql(
  /* GraphQL */
  `
    query QuestionItems {
      all_questionitem {
        items {
          ...QuestionItemFragment
        }
        total
      }
    }
  `,
);
var getAllQuestionItems = async () => {
  const { data } = await graphQLClient.query({
    query: ALL_QUESTION_ITEMS,
  });
  return {
    questionItems: data.all_questionitem,
  };
};

// src/graphql/queries/questionItem.ts
var QUESTION_ITEM = graphql(
  /* GraphQL */
  `
    query QuestionItem($uid: String!) {
      questionitem(uid: $uid) {
        ...QuestionItemFragment
      }
    }
  `,
);
var getQuestionItem = async (uid) => {
  const { data } = await graphQLClient.query({
    query: QUESTION_ITEM,
    variables: { uid },
  });
  if (!data.questionitem) return null;
  return data.questionitem;
};
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    ALL_QUESTION_ITEMS,
    QUESTION_ITEM,
    QuestionItemFragment,
    QuestionitemVariantsFragment,
    QuestionitemVariantsMcquestionBlockChoicesFragment,
    QuestionitemVariantsMcquestionFragment,
    QuestionitemVariantsTfquestionFragment,
    getAllQuestionItems,
    getQuestionItem,
    graphQLClient,
    graphql,
  });
