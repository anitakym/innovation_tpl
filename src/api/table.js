import { request } from './request'

export const getList = params => {
  return request.get('/vue-admin-template/table/list', {
    params
  })
}

