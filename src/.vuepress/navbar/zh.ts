import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  // { text: "演示", icon: "discover", link: "/zh/demo/" },
  { text: "常用命令", icon: "code", link: "/zh/command/" },
  { text: "笔试", icon: "editor", link: "/zh/written/" },
  { text: "运维", icon: "back-stage", link: "/zh/dev-ops/" },
  { text: "分类", icon: "categoryselected", link: "/zh/category/" },
  { text: "标签", icon: "tag", link: "/zh/tag/" },
  { text: "时间线", icon: "time", link: "/zh/timeline/" },
  // {
  //   text: "博文",
  //   icon: "edit",
  //   prefix: "/zh/posts/",
  //   children: [
  //     {
  //       text: "苹果",
  //       icon: "edit",
  //       prefix: "apple/",
  //       children: [
  //         { text: "苹果1", icon: "edit", link: "1" },
  //         { text: "苹果2", icon: "edit", link: "2" },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     {
  //       text: "香蕉",
  //       icon: "edit",
  //       prefix: "banana/",
  //       children: [
  //         {
  //           text: "香蕉 1",
  //           icon: "edit",
  //           link: "1",
  //         },
  //         {
  //           text: "香蕉 2",
  //           icon: "edit",
  //           link: "2",
  //         },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     { text: "樱桃", icon: "edit", link: "cherry" },
  //     { text: "火龙果", icon: "edit", link: "dragonfruit" },
  //     "tomato",
  //     "strawberry",
  //   ],
  // },
  {
    text: "reco 主题版",
    icon: "note",
    link: "https://www.liuyingxing.com/reco/",
  },
]);
