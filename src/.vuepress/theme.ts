import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://www.liuyingxing.com/hope",
  author: {
    // 作者信息
    name: "Evan Liu",
    url: "https://www.liuyingxing.com",
  },
  themeColor: {
    // 主题颜色
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  fullscreen: true, // 全屏
  navbarLayout: {
    // 导航栏布局
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook", "Search"],
  },
  iconAssets: "iconfont", // 图标
  logo: "/logo.svg",
  repo: "liuxing997/hgby-hope", // 仓库地址
  docsDir: "docs", // 文档在仓库中的目录
  // 博客功能配置
  blog: {
    medias: {
      Gitee: "https://gitee.com/liuxing997", // Gitee
      GitHub: "https://github.com/liuxing997", // GitHub
      Gitlab: "https://gitlab.com/liuxing997", // Gitlab
      CSDN: [
        "https://blog.csdn.net/ChaunceyLX",
        '<svg t="1677412994587" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4797" width="32" height="32"><path d="M512 1024C229.2224 1024 0 794.7776 0 512 0 229.2224 229.2224 0 512 0c282.7776 0 512 229.2224 512 512 0 282.7776-229.2224 512-512 512z m17.066667-413.525333c34.850133 4.352 68.778667 5.12 102.741333 2.0992 23.04-2.048 44.817067-8.362667 64.170667-21.9136 38.212267-26.794667 49.783467-85.1968 24.251733-123.050667-14.626133-21.7088-36.8128-30.344533-60.757333-35.498667-35.054933-7.543467-70.4512-5.751467-105.847467-3.413333-5.666133 0.3584-6.7584 3.072-7.236267 8.209067-3.072 32.682667-6.536533 65.314133-9.813333 97.962666-2.5088 24.814933-4.932267 49.629867-7.509333 75.605334z m53.4016-33.928534c1.962667-20.906667 3.6352-39.338667 5.4272-57.770666 1.553067-15.906133 3.413333-31.778133 4.727466-47.701334 0.3584-4.283733 1.553067-6.656 5.956267-6.382933 15.616 1.041067 31.709867 0.034133 46.728533 3.652267 36.488533 8.823467 48.725333 54.306133 23.3472 83.029333-15.8208 17.902933-36.7616 23.586133-59.255466 25.088-8.465067 0.546133-17.015467 0.085333-26.9312 0.085333zM512 434.295467c-2.184533-0.648533-3.5328-1.1776-4.932267-1.4336-37.717333-6.877867-75.690667-8.328533-113.646933-2.816-20.974933 3.037867-41.0112 9.489067-57.480533 23.330133-22.9888 19.319467-21.640533 46.848 4.4032 62.0032 13.056 7.594667 28.023467 12.509867 42.5984 17.288533 14.08 4.608 28.996267 6.826667 43.144533 11.264 12.5952 3.925333 14.011733 14.318933 3.584 22.306134-3.345067 2.56-7.441067 5.085867-11.537067 5.751466-11.195733 1.826133-22.698667 4.386133-33.826133 3.566934-24.098133-1.774933-48.042667-5.461333-72.5504-8.430934-1.365333 10.615467-2.935467 23.0912-4.5568 35.9424 4.181333 1.365333 7.68 2.730667 11.264 3.618134 33.9456 8.4992 68.386133 9.608533 102.912 5.12 20.087467-2.6112 39.4752-7.901867 56.695467-19.029334 28.603733-18.4832 36.693333-57.1904-4.676267-75.383466-14.506667-6.382933-30.190933-10.410667-45.482667-15.086934-11.4176-3.4816-23.313067-5.614933-34.525866-9.5232-9.7792-3.413333-11.144533-12.202667-3.037867-18.397866 4.6592-3.549867 10.717867-6.997333 16.384-7.3728a480.853333 480.853333 0 0 1 53.384533-0.853334c15.377067 0.699733 30.651733 3.549867 46.4896 5.5296L512 434.295467z m257.143467 2.048L750.933333 614.2976h54.152534c4.778667-45.636267 9.710933-90.7264 14.062933-135.8848 0.6144-6.365867 2.3552-8.840533 8.686933-9.0112 11.434667-0.273067 22.8864-1.979733 34.286934-1.570133 23.722667 0.853333 42.3936 9.728 38.4 43.264-2.901333 24.2688-5.597867 48.571733-8.2432 72.874666-1.092267 10.069333-1.826133 20.189867-2.730667 30.4128h55.330133c3.584-35.259733 7.9872-70.058667 10.496-104.994133 3.413333-47.4624-17.7664-73.3184-64.682666-80.213333-40.96-6.007467-81.339733-0.341333-121.5488 7.133866z m-483.498667 134.6048c-8.738133 1.297067-16.384 2.798933-24.098133 3.4816-25.6512 2.235733-51.319467 3.9424-76.305067-4.266667-13.909333-4.590933-24.6784-12.578133-29.7984-25.9584-7.901867-20.701867 0.887467-47.104 19.831467-60.3136 17.373867-12.117333 37.717333-15.9232 58.453333-15.9232 22.545067-0.017067 45.090133 2.423467 68.232533 3.84L307.2 432.298667c-15.069867-1.723733-29.4912-3.925333-43.997867-4.9152-41.0112-2.798933-80.64 2.6112-117.469866 20.462933-30.020267 14.557867-52.053333 36.010667-58.6752 68.130133-7.850667 38.144 11.537067 69.495467 51.7632 85.845334 19.1488 7.765333 39.287467 12.509867 60.0064 12.5952 24.746667 0.1024 49.493333-1.570133 74.205866-2.952534 3.106133-0.170667 8.311467-2.901333 8.669867-5.034666 1.979733-11.554133 2.730667-23.278933 3.9424-35.464534z" fill="#DD1700" p-id="4798"></path></svg>',
      ],
      Jianshu: [
        "https://www.jianshu.com/u/9421670ee4ed",
        '<svg t="1677413101746" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6204" width="32" height="32"><path d="M654.791 38.495h-286.53c-95.005 0-142.412 0-193.612 16.118-55.94 20.48-99.935 64.474-120.225 120.226-16.308 51.2-16.308 98.607-16.308 193.611v286.53c0 95.005 0 142.602 16.118 193.613 20.29 55.75 64.285 99.745 120.036 120.035 51.2 16.119 98.607 16.119 193.611 16.119h286.53c95.005 0 142.413 0 193.613-16.119 55.75-20.29 99.745-64.284 120.225-120.035 16.118-51.2 16.118-98.608 16.118-193.612V368.45c0-95.005 0-142.412-16.118-193.612-20.29-55.752-64.285-99.746-120.225-120.226-50.821-16.118-98.228-16.118-193.233-16.118z m0 0" fill="#EA6F5A" p-id="6205"></path><path d="M235.52 456.818h70.732v370.346H235.52V456.818z m40.012-112.45c17.825 32.995 29.203 65.8 34.512 98.796h77.18c-10.62-42.097-23.894-74.903-39.823-98.797h-71.87z m0 0" fill="#FFFFFF" p-id="6206"></path><path d="M427.804 278.566h85.144v-46.649H358.59c1.706-3.603 4.361-10.05 7.964-19.153 1.707-7.395 3.603-12.705 5.31-16.497H292.03c-12.326 49.303-40.77 85.902-85.144 109.795v46.65c58.595-14.602 100.124-39.254 124.966-73.956H358.4c8.913 23.703 14.222 46.648 15.929 68.645h74.524c-5.12-25.79-12.326-48.734-21.049-68.835z m-34.702 148.1h320.664v301.701c1.707 27.497-10.62 40.202-37.167 38.306h-43.995v54.803h63.906c62.009 1.896 92.16-26.549 90.453-85.144V371.864h-393.86v54.803z m0 0" fill="#FFFFFF" p-id="6207"></path><path d="M643.224 476.16H382.483v277.049H563.39c56.699 1.896 83.437-25.6 79.834-82.3V476.16z m-188.871 49.304h117.001v63.146H454.353v-63.146z m82.488 178.252h-82.488v-68.457h117.001v32.996c1.707 25.41-9.671 37.357-34.513 35.46zM645.88 229.262c0-1.896 0.948-4.55 2.654-8.154l7.965-24.652h-79.834c-12.516 51.2-39.823 89.695-82.49 115.295v43.805c54.993-14.602 96.712-40.202 124.967-76.8h37.167c8.913 23.703 14.222 46.648 15.929 68.645h71.87c-1.707-18.204-8.913-41.15-21.239-68.645h93.108v-49.304H645.88z m0 0" fill="#FFFFFF" p-id="6208"></path></svg>',
      ],
      OSChina: [
        "https://my.oschina.net/liuxing997",
        '<svg t="1677413285347" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6453" width="32" height="32"><path d="M518.4 691.2c-99.2 0-182.4-64-185.6-185.6-6.4-112 92.8-188.8 188.8-192 108.8-3.2 176 121.6 176 121.6l281.6-102.4S864 32 547.2 32C252.8 35.2 48 236.8 48 512c0 243.2 192 489.6 489.6 476.8C867.2 976 979.2 688 979.2 688L688 592c3.2 3.2-57.6 99.2-169.6 99.2" fill="#3DAB53" p-id="6454"></path></svg>',
      ],
      QQ: "http://wpa.qq.com/msgrd?v=3&uin=1747411761&site=qq&menu=yes", // QQ
      Qzone: "https://1747411761.qzone.qq.com/", // QQ空间
      Wechat: "https://www.liuyingxing.com/hope/assets/wecat.png", // 微信
      Weibo: "https://weibo.com/u/5954998310", // 微博
      Gmail: "mailto:liuyingxing.llx@gmail.com", // 谷歌邮箱
      Email: "mailto:liuxing997@foxmail.com", // 邮箱
      Lark: "https://go.feishu.cn/SR2cABD/", // 飞书
      BiliBili: "https://space.bilibili.com/487640811", // 哔哩哔哩
      Baidu:
        "https://author.baidu.com/home?context={%22from%22:%22personal-center%22,%22uk%22:%22Rp1PxFMYS0Jz-3XZbMN0YA%22,%22tab%22:%22dynamic%22}", // 百度
      Dingding: "https://www.liuyingxing.com/hope/assets/dingding.png", // 钉钉
      Zhihu: "https://zhihu.com/people/liuxing98", // 知乎
      Steam: "https://steamcommunity.com/id/lxszl/", // Steam
      // Bitbucket: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Instagram: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Twitter: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // MrHope: [
      //   "https://mrhope.site",
      //   '<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient gradientTransform="matrix(.2478 .78133 -2.54797 .63622 910.35 281.58)" gradientUnits="userSpaceOnUse" id="a" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".75" stop-color="#e33939"/><stop offset=".998" stop-color="#fff"/></linearGradient><linearGradient gradientTransform="matrix(.13814 .80797 2.55599 -.6032 34.087 494.369)" gradientUnits="userSpaceOnUse" id="b" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".815" stop-color="#e33939"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><path d="M135.637 588.067c-48.891-201.334 74.605-404.162 275.837-453.028 201.233-48.866 403.998 74.734 452.889 276.068 48.892 201.335-74.606 404.162-275.838 453.029-201.233 48.866-403.997-74.734-452.888-276.069Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M596.076 197.044c-3.342-56.09 56.897-77.831 89.017-51.361m-410.65 128.819c-22.753-51.377-86.256-43.07-102.659-4.816" fill="none" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M833.568 288.02c.05 18.046-12.584 30.699-21.346 32.211-8.762 1.512-17.031-1.099-18.584-1.341 0 0-61.363-6.103-105.627 6.921-44.265 13.026-87.04 47.387-94.637 51.892-6.627 3.928-29.112 7.697-44.462-12.938-15.351-20.636.024-41.526.024-41.526s12.685-18.279 40.771-35.123c28.088-16.844 24.624-13.226 52.326-25.696 15.247-6.865 43.319-14.186 67.429-17.069 25.193-3.011 46.348-1.384 57.673.769 22.165 4.212 28.632 5.93 39.169 9.229 12.451 3.898 27.214 14.516 27.264 32.671Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M558.351 345.632c-3.458-14.237 5.214-28.566 19.367-32.003 14.154-3.437 28.43 5.32 31.887 19.557 3.458 14.238-5.212 28.567-19.367 32.004-14.152 3.437-28.43-5.319-31.887-19.558Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M220.249 483.416c46.81-11.689 91.323-.467 99.42 25.064 8.098 25.532-23.286 55.706-70.097 67.393-46.811 11.689-91.323.467-99.42-25.064-8.097-25.532 23.286-55.706 70.097-67.393Z" fill="url(#a)" fill-rule="evenodd" opacity=".261"/><path d="M739.9 357.226c-46.959 11.082-81.367 41.469-76.853 67.871 4.514 26.402 46.241 38.821 93.198 27.738 46.958-11.081 81.366-41.467 76.853-67.869-4.514-26.403-46.241-38.821-93.198-27.74Z" fill="url(#b)" fill-rule="evenodd" opacity=".261"/><path d="M400.934 398.917c-.599 18.034-13.681 30.218-22.494 31.409-8.812 1.192-16.982-1.716-18.526-2.014 0 0-61.109-8.334-105.819 3.07-44.709 11.404-88.696 44.181-96.452 48.406-6.763 3.683-29.372 6.632-43.972-14.546-14.6-21.18 1.519-41.494 1.519-41.494s13.335-17.803 42.013-33.612c28.677-15.809 25.085-12.319 53.222-23.772 15.484-6.304 43.803-12.598 68.005-14.6 25.288-2.093 46.373.305 57.616 2.867 22 5.016 28.401 6.968 38.813 10.649 12.304 4.348 26.677 15.496 26.075 33.637Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M129.05 445.546c-3.458-14.239 5.213-28.566 19.367-32.003 14.153-3.437 28.429 5.318 31.887 19.557 3.458 14.238-5.213 28.566-19.367 32.003-14.153 3.437-28.43-5.318-31.887-19.557Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M424.381 696.386s64.427 13.646 101.996 5.757C640.653 678.146 690.8 521.894 690.8 521.894" fill="none" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M796.04 666.774s-10.734-44.165-41.405-11.348c-9.681 10.359-10.438 40.604-28.217 81.89-15.942 37.02-39.564 60.728-42.938 76.063-3.374 15.335.451 35.992 26.352 41.537 25.902 5.545 41.967-23.381 41.967-23.381l44.241-164.761Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M793.337 664.734c-37.075 160.045-51.73 163.145-40.343 184.845 11.387 21.701 51.417 33.716 71.876-7.313 6.734-13.505-1.31-43.317-1.511-78.077-.307-53.06 16.865-86.111 10.403-98.1-15.332-28.452-39.377-5.875-40.425-1.355Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/></svg>',
      // ],
    },
  },
  // 多语言配置
  locales: {
    "/": {
      // navbar
      navbar: enNavbar,
      // sidebar
      sidebar: enSidebar,
      // displayFooter: true,
      footer:
        '<a class="beian" href="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank" >渝ICP备19015847号-2</a> | <span><img src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" width="20" height="20">&emsp;<a class="beian" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50011902000430" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;" target="_blank">渝公网安备 50011902000430号</a></span>｜Theme by <a class="beian" href="https://theme-hope.vuejs.press/zh/">VuePress Theme Hope</a>',
      copyright: "Copyright © 2021-present Evan Liu",
      blog: {
        description: "A FrontEnd programmer",
        intro: "/intro.html",
      },
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: zhNavbar,
      // sidebar
      sidebar: zhSidebar,
      // displayFooter: true,
      footer:
        '<a class="beian" href="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank" >渝ICP备19015847号-2</a> | <span><img src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" width="20" height="20">&emsp;<a class="beian" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50011902000430" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;" target="_blank">渝公网安备 50011902000430号</a></span>｜主题使用 <a class="beian" href="https://theme-hope.vuejs.press/zh/">VuePress Theme Hope</a>',
      copyright: "Copyright © 2021-present Evan Liu",
      blog: {
        description: "一个前端开发者",
        intro: "/zh/intro.html",
      },
      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },
  // 加密配置
  encrypt: {
    config: {
      // "/demo/encrypt.html": ["1234"],
      // "/zh/demo/encrypt.html": ["1234"],
    },
  },
  displayFooter: true,
  copyright: "Copyright © 2021-present Evan Liu",
  // 插件配置
  plugins: {
    blog: true,
    comment: {
      /**
       * Using Waline
       */
      provider: "Waline",
      serverURL: "https://waline.liuyingxing.com",
      // requiredMeta: ["nick", "mail"],
      // login: "force",
    },
    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
