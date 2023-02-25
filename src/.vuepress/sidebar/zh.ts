import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    // {
    //   text: "如何使用",
    //   icon: "creative",
    //   prefix: "guide/",
    //   link: "guide/",
    //   children: "structure",
    // },
    {
      icon: "code",
      text: "常用命令",
      prefix: "command/",
      link: "command/",
      children: "structure",
    },
    {
      icon: "editor",
      text: "笔试",
      prefix: "written/",
      link: "written/",
      children: "structure",
    },
    {
      icon: "back-stage",
      text: "运维",
      prefix: "dev-ops/",
      link: "dev-ops/",
      children: "structure",
    },
    // {
    //   text: "文章",
    //   icon: "note",
    //   prefix: "posts/",
    //   children: "structure",
    // },
    // "intro",
    // "slides",
  ],
});
