import * as process from "node:process";

const generateClientCommand = [
  "docker",
  "run",
  "--rm",
  "-v",
  `${process.cwd()}:/local`,
  "openapitools/openapi-generator-cli",
  "generate",
  "-o",
  "/local/src",
  "-c",
  "/local/api-config.yml",
  "--additional-properties=npmVersion=1.0.0"
]

Bun.spawn(generateClientCommand)