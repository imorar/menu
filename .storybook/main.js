module.exports = {
  "stories": ["../src/stories/*.stories.jsx"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials"],
  "framework": "@storybook/react",
  core: {
    builder: "webpack5"
  }
};