const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    i18n: {
      locale: 'ru',
      fallbackLocale: 'ru',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  },
  chainWebpack: (config) => {
    config
        .plugin('html')
        .tap(args => {
          args[0].title = 'UZCSD';
          args[0].meta = {viewport: 'width=device-width,initial-scale=1,user-scalable=no'};

          return args;
        })
  }
})
