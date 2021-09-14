import axios from 'axios'
import { blocker } from './utils'
const CancelToken = axios.CancelToken
const defaultConfig = {}
defaultConfig.cancelToken = new CancelToken(function executor(c) {
  blocker.addPending(c)
})
axios.defaults.withCredentials = true
const config = {
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 600000,
  defaultConfig
}
// 返回一个axios实例，能直接用，但是request和response都不做拦截
const service = axios.create(config)
// request拦截
service.interceptors.request.use(blocker.blockRequest, blocker.blockRequestError)
// response拦截
service.interceptors.response.use(blocker.blockResponse, blocker.blockResponseError)
export { service }
