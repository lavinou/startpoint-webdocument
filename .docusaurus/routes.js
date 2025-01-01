import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/startpoint-webdocument/__docusaurus/debug',
    component: ComponentCreator('/startpoint-webdocument/__docusaurus/debug', 'd6b'),
    exact: true
  },
  {
    path: '/startpoint-webdocument/__docusaurus/debug/config',
    component: ComponentCreator('/startpoint-webdocument/__docusaurus/debug/config', 'eb6'),
    exact: true
  },
  {
    path: '/startpoint-webdocument/__docusaurus/debug/content',
    component: ComponentCreator('/startpoint-webdocument/__docusaurus/debug/content', '84a'),
    exact: true
  },
  {
    path: '/startpoint-webdocument/__docusaurus/debug/globalData',
    component: ComponentCreator('/startpoint-webdocument/__docusaurus/debug/globalData', '0d5'),
    exact: true
  },
  {
    path: '/startpoint-webdocument/__docusaurus/debug/metadata',
    component: ComponentCreator('/startpoint-webdocument/__docusaurus/debug/metadata', '89f'),
    exact: true
  },
  {
    path: '/startpoint-webdocument/__docusaurus/debug/registry',
    component: ComponentCreator('/startpoint-webdocument/__docusaurus/debug/registry', 'a67'),
    exact: true
  },
  {
    path: '/startpoint-webdocument/__docusaurus/debug/routes',
    component: ComponentCreator('/startpoint-webdocument/__docusaurus/debug/routes', 'bcb'),
    exact: true
  },
  {
    path: '/startpoint-webdocument/blog',
    component: ComponentCreator('/startpoint-webdocument/blog', '71d'),
    exact: true
  },
  {
    path: '/startpoint-webdocument/blog/archive',
    component: ComponentCreator('/startpoint-webdocument/blog/archive', '0dc'),
    exact: true
  },
  {
    path: '/startpoint-webdocument/blog/authors',
    component: ComponentCreator('/startpoint-webdocument/blog/authors', '2b7'),
    exact: true
  },
  {
    path: '/startpoint-webdocument/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/startpoint-webdocument/blog/authors/all-sebastien-lorber-articles', 'fd0'),
    exact: true
  },
  {
    path: '/startpoint-webdocument/blog/authors/yangshun',
    component: ComponentCreator('/startpoint-webdocument/blog/authors/yangshun', '4ea'),
    exact: true
  },
  {
    path: '/startpoint-webdocument/blog/first-blog-post',
    component: ComponentCreator('/startpoint-webdocument/blog/first-blog-post', '622'),
    exact: true
  },
  {
    path: '/startpoint-webdocument/blog/long-blog-post',
    component: ComponentCreator('/startpoint-webdocument/blog/long-blog-post', '867'),
    exact: true
  },
  {
    path: '/startpoint-webdocument/blog/mdx-blog-post',
    component: ComponentCreator('/startpoint-webdocument/blog/mdx-blog-post', '138'),
    exact: true
  },
  {
    path: '/startpoint-webdocument/blog/tags',
    component: ComponentCreator('/startpoint-webdocument/blog/tags', '248'),
    exact: true
  },
  {
    path: '/startpoint-webdocument/blog/tags/docusaurus',
    component: ComponentCreator('/startpoint-webdocument/blog/tags/docusaurus', 'cc8'),
    exact: true
  },
  {
    path: '/startpoint-webdocument/blog/tags/facebook',
    component: ComponentCreator('/startpoint-webdocument/blog/tags/facebook', '1e7'),
    exact: true
  },
  {
    path: '/startpoint-webdocument/blog/tags/hello',
    component: ComponentCreator('/startpoint-webdocument/blog/tags/hello', 'cd9'),
    exact: true
  },
  {
    path: '/startpoint-webdocument/blog/tags/hola',
    component: ComponentCreator('/startpoint-webdocument/blog/tags/hola', 'cb0'),
    exact: true
  },
  {
    path: '/startpoint-webdocument/blog/welcome',
    component: ComponentCreator('/startpoint-webdocument/blog/welcome', '423'),
    exact: true
  },
  {
    path: '/startpoint-webdocument/markdown-page',
    component: ComponentCreator('/startpoint-webdocument/markdown-page', 'f13'),
    exact: true
  },
  {
    path: '/startpoint-webdocument/docs',
    component: ComponentCreator('/startpoint-webdocument/docs', '5fe'),
    routes: [
      {
        path: '/startpoint-webdocument/docs',
        component: ComponentCreator('/startpoint-webdocument/docs', '03e'),
        routes: [
          {
            path: '/startpoint-webdocument/docs',
            component: ComponentCreator('/startpoint-webdocument/docs', '9e7'),
            routes: [
              {
                path: '/startpoint-webdocument/docs/category/tutorial---basics',
                component: ComponentCreator('/startpoint-webdocument/docs/category/tutorial---basics', '4e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/startpoint-webdocument/docs/category/tutorial---extras',
                component: ComponentCreator('/startpoint-webdocument/docs/category/tutorial---extras', '824'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/startpoint-webdocument/docs/intro',
                component: ComponentCreator('/startpoint-webdocument/docs/intro', '39b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/startpoint-webdocument/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/startpoint-webdocument/docs/tutorial-basics/congratulations', 'f12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/startpoint-webdocument/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/startpoint-webdocument/docs/tutorial-basics/create-a-blog-post', '7a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/startpoint-webdocument/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/startpoint-webdocument/docs/tutorial-basics/create-a-document', 'bf8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/startpoint-webdocument/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/startpoint-webdocument/docs/tutorial-basics/create-a-page', '345'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/startpoint-webdocument/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/startpoint-webdocument/docs/tutorial-basics/deploy-your-site', 'aaf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/startpoint-webdocument/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/startpoint-webdocument/docs/tutorial-basics/markdown-features', '0d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/startpoint-webdocument/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/startpoint-webdocument/docs/tutorial-extras/manage-docs-versions', 'e42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/startpoint-webdocument/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/startpoint-webdocument/docs/tutorial-extras/translate-your-site', '727'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/startpoint-webdocument/',
    component: ComponentCreator('/startpoint-webdocument/', 'c00'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
