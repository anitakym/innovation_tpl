module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  'env': {
    'development': {
      // converting all import() to require().加速热更新速度
      'plugins': ['dynamic-import-node']
    }
  }
}
