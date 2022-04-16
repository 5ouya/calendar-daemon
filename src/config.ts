import fs from "fs";
import path from "path";
import ini from "ini";
import { program } from "commander";

const configFilePath = path.join(process.cwd(), "config", "config.ini");

program.option(
  "-c, --config-file <path>",
  "path to config.ini file",
  "./config/config.ini"
);

program.parse();

const options = program.opts();

const { configFile = configFilePath } = options;

let config: IConfig;

try {
  const path = fs.readFileSync(configFile, "utf-8");
  config = ini.parse(path) as IConfig;
} catch (error) {
  console.error(`Error reading config file: ${configFile}. Use the option --config-file to set config file path`);
  process.exit(1);
}

export default config;
