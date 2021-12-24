const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: false,
      // corejs: "2.6.12",
    },
  ],
];

const plugins = [
  [
    "@babel/plugin-transform-runtime",
    {
      corejs: 2,
    },
  ],
];

module.exports = { presets, plugins };
