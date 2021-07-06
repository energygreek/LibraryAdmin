import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function getList(params) {
  return request({
    url: '/user/list',
    method: 'get',
    params
  })
}

export function updateUserInfo(data) {
  return request({
    url: '/user/update',
    method: 'post',
    data
  })
}

export function deleteUser(params) {
  return request({
    url: '/user/delete',
    method: 'get',
    params
  })
}
