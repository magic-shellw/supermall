import {request, myRequest} from './request'

export function GetHomeMultiData() {
  return request({
    url: '/home/multidata',
  });
}

export function GetGoodsList(type, page) {
  return myRequest({
    url: '/data',
    method: 'get',
    params: {
      type,
      page
    }
  })
}