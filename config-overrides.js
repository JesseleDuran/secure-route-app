const {
  override,
  fixBabelImports,
  addDecoratorsLegacy,
  // eslint-disable-next-line import/no-extraneous-dependencies
} = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: false, // change importing css to less
  }),
  addDecoratorsLegacy(),
);
