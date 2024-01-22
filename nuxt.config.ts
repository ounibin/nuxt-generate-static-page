// 项目源码地址
const SRC_DIR = './src/'

function getIds() {
  const ids = [113, 21];
  const routes = ids.map(id => `/u/${id}`);
  console.log('routes===', routes)
  return routes
}
const l = getIds()


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: SRC_DIR,
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
      ],
      title: 'Nuxt.js',
      link: [],
      style: [],
      script: [],
    },

  },
  modules: [],
  plugins: [],
  generate: {
    // exclude: [],
    routes: l
    // routes: ['/u/21', '/u/113']
  },

})
