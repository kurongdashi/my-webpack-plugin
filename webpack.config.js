// const MyWebpackPlugin = require("./plugins");
module.exports = {
  mode: "development",
  entry: "./plugins/index.js",
  output: {
    filename: "index.js",
    clean: true,
  },
  //   plugins: [
  //     new MyWebpackPlugin({
  //       name: "张三",
  //     }),
  //   ],
};
