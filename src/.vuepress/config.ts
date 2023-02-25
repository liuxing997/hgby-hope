import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/hope/",
  locales: {
    "/": {
      lang: "en-US",
      title: "Evan Liu",
      description: "hgby for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Evan Liu",
      description: "hgby hope主题版",
    },
  },
  theme,
  shouldPrefetch: false,
});
