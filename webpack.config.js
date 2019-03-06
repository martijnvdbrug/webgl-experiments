const path = require("path");

const project = process.env.PROJECT;
if (!project) {
    throw Error(`Specify which project to serve by adding project=project-name to the yarn serve command`);
}

module.exports = {
    mode: 'development',
    // entry: ['webpack/hot/dev-server' , './src/index.ts'],
    entry: [`./${project}/src/index.ts`],
    output: {
        filename: `../${project}/public/bundle.js`
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, `${project}/public`),
        compress: true,
        port: 9000
    }
};
