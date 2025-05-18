import dotenv from "dotenv";
import { buildHeader } from "./build-header.js";
import chalk from "chalk";
import { writeFile } from "fs/promises"
dotenv.config();


const build = async (filename) => {
    const page = [];
    page.push(buildHeader())
    try {
        const startTime = Date.now();
        
        await writeFile(filename, page.join('\n')+"\n");

        const finalTime = Date.now();
        console.log(chalk.greenBright('ANSI file generated!', `| took ${finalTime - startTime}ms`));
    } catch (error) {
        console.log(chalk.red("could not generate the output"));
        console.log(error);
    }
}

await build(`${process.env.OUTPUT_FILENAME}`);