import { request } from './request'

export const login = function(data) {
  return request.post('/vue-admin-template/user/login', data)
}

export const getInfo = token => {
  return request.get('/vue-admin-template/user/info', {
    token
  })
}

/* export const logout = function(info) {
  return request.post('/vue-admin-template/user/logout', { noLoading: true })
} */

export const logout = () => request.get(`/account/login/logout`)

