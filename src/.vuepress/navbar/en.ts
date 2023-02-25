import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  // { text: "Demo", icon: "discover", link: "/demo/" },
  { text: "Command", icon: "code", link: "/command/" },
  { text: "Written", icon: "editor", link: "/written/" },
  { text: "Dev-ops", icon: "back-stage", link: "/dev-ops/" },
  { text: "Categories", icon: "categoryselected", link: "/category/" },
  { text: "Tags", icon: "tag", link: "/tag/" },
  { text: "Timeline", icon: "time", link: "/timeline/" },

  // {
  //   text: "Posts",
  //   icon: "edit",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "Apple",
  //       icon: "edit",
  //       prefix: "apple/",
  //       children: [
  //         { text: "Apple1", icon: "edit", link: "1" },
  //         { text: "Apple2", icon: "edit", link: "2" },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     {
  //       text: "Banana",
  //       icon: "edit",
  //       prefix: "banana/",
  //       children: [
  //         {
  //           text: "Banana 1",
  //           icon: "edit",
  //           link: "1",
  //         },
  //         {
  //           text: "Banana 2",
  //           icon: "edit",
  //           link: "2",
  //         },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     { text: "Cherry", icon: "edit", link: "cherry" },
  //     { text: "Dragon Fruit", icon: "edit", link: "dragonfruit" },
  //     "tomato",
  //     "strawberry",
  //   ],
  // },
  {
    text: "reco theme edition",
    icon: "note",
    link: "https://www.liuyingxing.com/reco/",
  },
]);
