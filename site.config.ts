import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '0d038be6dbb442179604445472878323',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'vroomfan',
  domain: 'vroomfan.vercel.app',
  author: 'vroomfan',

  // open graph metadata (optional)
  description: 'vroomfan notion blog',

  // social usernames (optional)
  // twitter: '#',
  github: 'vroomfan',
  linkedin: 'vroomfan',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional YouTube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // enable a search feature in header (optional)
  isSearchEnabled: false,

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Resume',
      url: 'https://www.rallit.com/resumes/5612@jyp930/%EB%B0%95%EC%9A%A9%EC%A3%BC?theme=STANDARD'
    },
    // {
    //   title: 'Contact',
    //   pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
    // }
  ]
})
