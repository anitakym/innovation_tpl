const execa = require('execa') // 可以调用shell和本地外部程序的javascript封装。会启动子进程执行。
const fs = require('fs')
const path = require('path')

const run = (bin, args, opts = {}) => {
  execa(bin, args, { stdio: 'inherit', ...opts })
}

const getEnv = () => {
  return process.argv[2]
}

const getOption = env => {
  const OPTION_MAP = {
    online: {
      VUE_APP_BASE_API: ``,
      VUE_APP_BASE_PATH: '/'
    },
    pre: {
      VUE_APP_BASE_API: ``,
      VUE_APP_BASE_PATH: '/'
    },
    test: {
      VUE_APP_BASE_API: ``,
      VUE_APP_BASE_PATH: `/`
    }
  }
  const option = OPTION_MAP[['online', 'pre'].includes(env) ? env : 'test']
  return Object.entries(option).reduce((cmd, item) => {
    return cmd + `${item[0]} = "${item[1]}"\n`
  }, 'NODE_ENV = production \n')
}

const createEnvFile = async _option => {
  const envPath = path.join(__dirname, '../.env.production')
  const buf = Buffer.from(_option)
  await fs.promises.appendFile(envPath, buf, { flag: 'w+' })
}

const main = async() => {
  const env = getEnv()
  if (env) {
    const option = getOption(env)
    await createEnvFile(option)
  }
  run('npm', ['run', 'build:without-option'])
}

main()
