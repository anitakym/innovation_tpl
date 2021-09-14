import { Message, Loading } from 'element-ui'
class LoadingFunc {
  constructor() {
    this.loadingTimes = 0
    this.loading = null
  }
  add(loadingText) {
    this.loadingTimes++
    if (!this.loading || this.loadingTimes > 0) {
      this.loading = Loading.service({
        fullscreen: true,
        background: 'rgba(227, 227, 227, 0.8)',
        text: loadingText || '加载中…'
      })
    }
  }
  reduce() {
    if (--this.loadingTimes <= 0) {
      this.clear()
    }
  }
  clear() {
    this.loading.close()
    this.loading = null
    this.loadingTimes = 0
  }
}
class AxiosBlocker {
  constructor(loading) {
    this.pending = []
    this.loading = loading
  }
  // 请求拦截
  blockRequest(config) {
    config.baseURL = process.env.VUE_APP_BASE_API
    return config
  }
  // 请求错误拦截
  blockRequestError(error) {
    Promise.reject(error)
  }
  // 返回数据拦截
  blockResponse(response) {
    return response
  }
  // 返回数据错误拦截
  blockResponseError(responseErr) {
    return responseErr
  }
  addPending(c) {
    this.pending.push(c)
  }
  dealResponseError(responseErr, reduceLoading = true, showMessage = true) {
    if (reduceLoading) {
      this.loading.reduce()
    }
    if (showMessage) {
      Message({
        message: responseErr.message,
        type: 'error',
        duration: 5 * 1000
      })
    }
    return responseErr
  }
  dealResponse(response) {
    const data = response.data
    if (data.status === 0) {
      Message({
        message: data.message,
        type: 'error',
        duration: 5 * 1000
      })
    }
    if (data.status === 2) {
      Message({
        message: data.message,
        type: 'error',
        duration: 5 * 1000
      })
    }
    if (data.status === 3) {
      // 登录超时，接口请求多次，导致弹框会多次出现，只弹一次
      while (this.pending.length > 0) {
        this.pending.pop()('请求中断')
      }
      Message({
        message: '登录过期，请重新登录',
        type: 'error',
        duration: 5 * 1000
      })
    }
    if (data.status === 4) {
      Message({
        message: '权限不正确，请退出重新进入',
        type: 'error',
        duration: 5 * 1000
      })
    }
    return response
  }
  /**
   * @description: 描述信息
   * @param {response} axios返回数据，type AxiosResponse | AxiosError 分别是正常返回和错误返回数据
   * @param {reduceLoading} 是否要减少一次loadngTimes
   * @param {showMessage} 是否显示错误信息
   * @return {CustomResponse} 返回数据or抛出错误，最上层会catch的
   */
  getResponseData(response, reduceLoading = true, showMessage = true) {
    if (response instanceof Error) {
      // 这里把PromiseError返回替换成返回一组空数据status设置成0
      const { message } = this.dealResponseError(response, reduceLoading, showMessage)
      return {
        status: 0,
        message: message,
        data: null
      }
    } else {
      if (reduceLoading) {
        this.loading.reduce()
      }
      response = this.dealResponse(response)
      return response.data
    }
  }
}
/**
 * @description: 把非Request的参数剔除出来
 * @param {CombineRequestOption} option
 * @return {*}
 */
const dealMethodsOption = function(option) {
  const extend = {
    noLoading: option.noLoading,
    noMessage: option.noMessage,
    loadingText: option.loadingText
  }
  Reflect.deleteProperty(option, 'noLoading')
  Reflect.deleteProperty(option, 'noMessage')
  Reflect.deleteProperty(option, 'loadingText')
  return extend
}
const loading = new LoadingFunc()
const blocker = new AxiosBlocker(loading)
export { loading, blocker, dealMethodsOption }
