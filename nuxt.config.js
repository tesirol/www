
function plugins (env) {
  const plugins = []

  const prodOnly = [{src: '~/plugins/log-rocket.js', mode: 'client'}]

  if (env == 'production') plugins.push(prodOnly)

  return plugins
}

const plugins = plugins(process.env.NODE_ENV)

export default {
  plugins,
  mode: 'universal',
  srcDir: 'src'
}