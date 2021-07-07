import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/book/list',
    method: 'get',
    params
  })
}

export function getBookInfo(params) {
  return request({
    url: '/book/info',
    method: 'get',
    params
  })
}

export function updateBookInfo(data) {
  return request({
    url: '/book/update',
    method: 'post',
    data
  })
}

export function deleteBook(params) {
  return request({
    url: '/book/delete',
    method: 'get',
    params
  })
}

export function getHistory(params) {
  return request({
    url: '/book/history',
    method: 'get',
    params
  })
}
