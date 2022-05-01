import { Compilation, Compiler } from "webpack";

export default class HelloWorldWebpackPlugin {
    apply(compiler: Compiler) {
        compiler.hooks.compilation.tap('HelloWorldPlugin', (compilation: Compilation) => {
            console.log('hello world');
        })
    }
}