import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    // {
    //   icon: "discover",
    //   text: "Demo",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      icon: "code",
      text: "Command",
      prefix: "command/",
      link: "command/",
      children: "structure",
    },
    {
      icon: "editor",
      text: "Written",
      prefix: "written/",
      link: "written/",
      children: "structure",
    },
    {
      icon: "back-stage",
      text: "Dev-ops",
      prefix: "dev-ops/",
      link: "dev-ops/",
      children: "structure",
    },
    // {
    //   text: "Articles",
    //   icon: "note",
    //   prefix: "posts/",
    //   children: "structure",
    // },
    // "intro",
    // "slides",
  ],
});
