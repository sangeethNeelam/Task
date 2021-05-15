const { override, addLessLoader, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addLessLoader({
    lessOptions: {
      sourceMap: true,
      javascriptEnabled: true,
    },
  }),
  // add an alias for Common Local imports
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src/"),
  })
);
