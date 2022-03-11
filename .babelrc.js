module.exports = {
  presets : [[
    "@babel/preset-env", {
      loose : true,
      useBuiltIns : "entry",
      corejs: "3.0",
      targets : {
        node : "8" // Minimum supported version
      }
    }
  ]],
  plugins : [
    ["@babel/plugin-proposal-export-default-from", { loose: true }],
    ["@babel/plugin-proposal-export-namespace-from", { loose: true }],
    ["@babel/plugin-proposal-object-rest-spread", { loose: true }],
    ["add-module-exports", { loose: true }]
  ]
};
