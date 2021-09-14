import { blocker, loading, dealMethodsOption } from './utils'
import { service } from './base'
/** constant: 默认请求设置，需要loading文本为‘加载中’，报错抛出message， */
const BASE_OPTION = {
  url: '',
  noLoading: false,
  noMessage: false,
  loadingText: '加载中…'
}
/**
 * @description: 共用API调用方法，支持request函数调用以及request.get、request.post、request.put、request.delete方法调用
 * @description: 有需要可以添加别的方法
 * @param {CombineRequestOption} option // axios的option可以查文档，多了关于loading和是否显示错误信息message的参数: noLoading & noMessage
 * @return {Promise<CustomResponse>} { status, message, data } 格式返回数据
 */
const request = async function(option = Object.assign({}, BASE_OPTION)) {
  const extend = dealMethodsOption(option)
  if (!extend.noLoading) {
    loading.add(extend.loadingText || '')
  }
  const res = await service(option)
  return blocker.getResponseData(res, !extend.noLoading, !extend.noMessage)
}
/**
 * @description: get请求的处理
 * @param {string} url
 * @param {any} params // 拼接到url上的参数
 * @param {CombineRequestOption} option // axios的option可以查文档，多了关于loading和是否显示错误信息message的参数: noLoading & noMessage
 * @return {Promise<CustomResponse>} { status, message, data } 格式返回数据
 */
request.get = async function(url, params = {}, option = Object.assign({}, BASE_OPTION)) {
  option.url = url
  option.method = 'GET'
  option.params = params
  return await request(option)
}
/**
 * @description:  Request方法： post
 * @param {string} url
 * @param {any} params // 请求体数据
 * @param {CombineRequestOption} option // axios的option可以查文档，多了关于loading和是否显示错误信息message的参数: noLoading & noMessage
 * @return {Promise<CustomResponse>} { status, message, data } 格式返回数据
 */
request.post = async function(url, data = {}, option = Object.assign({}, BASE_OPTION)) {
  option.url = url
  option.method = 'POST'
  option.data = data
  return await request(option)
}
/**
 * @description:  Request方法： put
 * @param {string} url
 * @param {any} params // 请求体数据
 * @param {CombineRequestOption} option // axios的option可以查文档，多了关于loading和是否显示错误信息message的参数: noLoading & noMessage
 * @return {Promise<CustomResponse>} { status, message, data } 格式返回数据
 */
request.put = async function(url, data = {}, option = Object.assign({}, BASE_OPTION)) {
  option.url = url
  option.method = 'PUT'
  option.data = data
  return await request(option)
}
/**
 * @description:  Request方法： delete
 * @param {string} url
 * @param {any} params // 请求体数据
 * @param {CombineRequestOption} option // axios的option可以查文档，多了关于loading和是否显示错误信息message的参数: noLoading & noMessage
 * @return {Promise<CustomResponse>} { status, message, data } 格式返回数据
 */
request.delete = async function(url, data = {}, option = Object.assign({}, BASE_OPTION)) {
  option.url = url
  option.method = 'DELETE'
  option.data = data
  return await request(option)
}
export { request }
