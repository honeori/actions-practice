module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        filename: './index.js',
    },
    module: {
        rules: [
            {
                // tsファイルはTypeScriptとしてコンパイルする
                test: /\.ts$/,
                use: 'ts-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
}