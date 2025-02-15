import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "doc",
      label: "Introduction",
      id: "tutorial/intro",
    },
    {
      type: "category",
      label: "Tutorial - Basics",
      description: "5 minutes to learn the most important Docusaurus concepts.",
      link: {
        type: "generated-index",
      },
      items: [
        "tutorial/tutorial-basics/markdown-features",
        "tutorial/tutorial-basics/create-a-page",
        "tutorial/tutorial-basics/create-a-document",
        "tutorial/tutorial-basics/create-a-blog-post",
        "tutorial/tutorial-basics/deploy-your-site",
        "tutorial/tutorial-basics/congratulations",
      ],
    },
    {
      type: "category",
      label: "Tutorial - Extras",
      link: {
        type: "generated-index",
      },
      items: [
        "tutorial/tutorial-extras/manage-docs-versions",
        "tutorial/tutorial-extras/translate-your-site",
      ],
    },
  ],
  apiSidebar: [
    {
      type: "doc",
      label: "Introduction",
      id: "api/intro",
    },
  ],
};

export default sidebars;
