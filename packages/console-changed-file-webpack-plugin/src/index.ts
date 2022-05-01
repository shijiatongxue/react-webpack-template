import { Compilation, Compiler } from "webpack";

export default class ConsoleChangedFileWebpackPlugin {
    apply(compiler: Compiler) {
        compiler.hooks.watchRun.tap('ConsoleChangedFileWebpackPlugin', (compiler: Compiler) => {
            console.log(`modified file: ${JSON.stringify(Array.from(compiler.modifiedFiles))}`);
        });
    }
}