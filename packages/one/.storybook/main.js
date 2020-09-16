module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    {
      name:     "@storybook/addon-essentials",
    },
  ],
  refs: {
    'projectTwo': {
      title: "project two",
      url: "http://localhost:6002"
    },
    'projectThree': {
      title: 'project three',
      url: "http://localhost:6003"
    }
  }
}