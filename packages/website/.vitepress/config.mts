import { type UserConfig } from "vitepress";
import typedocSidebar from "../api-reference/typedoc-sidebar.json";

// https://vitepress.dev/reference/site-config
export default {
  title: "VitePress with JSDoc",
  description:
    "Sample project exploiting integration between VitePress and JSDoc",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/getting-started" },
      { text: "API Reference", link: "/api-reference/index" },
    ],

    sidebar: [
      { text: "Getting Started", link: "/getting-started" },
      {
        text: "API Reference",
        // FIXME: sidebar is somehow doubled for unknown reasons.
        items: typedocSidebar.slice(0, Math.ceil(typedocSidebar.length / 2)),
        link: "/api-reference/index",
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
} satisfies UserConfig;
