import {request} from './request'

export function GetHomeMultiData() {
  return request({
    url: '/home/multidata',
  });
}