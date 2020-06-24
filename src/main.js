// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  const siteRoot = router.resolve("/").href

  head.link.push({
    rel: 'stylesheet',
    href: siteRoot +'css/prism.css'
  })

  head.link.push({
    rel: 'stylesheet',
    href: siteRoot + 'css/template.css'
  })

  head.script.push({
    src: siteRoot + 'js/dom-scripts.js'
  })
}
