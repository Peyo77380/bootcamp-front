module.exports = {
    runtimeCompiler: true,
    productionSourceMap: false,
    devServer: {
        proxy: "http://localhost:3000/api/"
    }
};
