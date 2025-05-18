import chalk from "chalk";
import { join, spaces } from "./utils.js";



export const buildHeader = () => {
    const output = [
        chalk.blueBright(`
██   ██ ███████ ██      ██       ██████  
██   ██ ██      ██      ██      ██    ██ 
███████ █████   ██      ██      ██    ██ 
██   ██ ██      ██      ██      ██    ██ 
██   ██ ███████ ███████ ███████  ██████  
`),
        chalk.bgWhiteBright(spaces(10)) + chalk.bgRed(spaces(30)),
        chalk.bgWhiteBright(spaces(10)) + chalk.bgGreenBright(spaces(30))
    ];

    return output.join("\n");
}