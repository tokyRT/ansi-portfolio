import express from "express";
import chalk from "chalk";
import fs from "node:fs/promises"
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', async (req, res) => {
    console.log(req.headers['user-agent']);
    if (req.headers['user-agent'].includes('curl')) {
        try {
            const data = await fs.readFile(process.env.OUTPUT_FILENAME);
            res.send(data);
        } catch (error) {
            console.log(chalk.redBright(`Error while opening the file`));
            console.log(error);
            res.status(500).send(chalk.redBright('Something is not working very well'));
        }
    } else {
        res.send('The web content will go here ;)');
    }
});

app.listen(PORT, () => {
    console.log(chalk.greenBright(`Running on http://localhost:${PORT}`));
})