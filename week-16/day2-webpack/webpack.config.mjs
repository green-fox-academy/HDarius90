import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(
    import.meta.url));


const config = {
    mode: 'development', //'production',
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'out'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.js$/, //js-re végződő file-okat alakitja át
                use: 'babel-loader',
                exclude: /node_modules/
            }

        ]
    }
};

export default config;