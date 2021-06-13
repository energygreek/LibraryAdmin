import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/book/list',
    method: 'get',
    params
  })
}

export function getBookById(id) {
  return request({
    url: '/book/info/' + id,
    method: 'get'
  })
}

export function deleteBookById(id) {
  return request({
    url: '/book/delete/' + id,
    method: 'get'
  })
}

export function updateBookInfo(data) {
  return request({
    url: '/book/update',
    method: 'post',
    data
  })
}
