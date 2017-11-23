/**
 * Created by Admin on 2017/11/21.
 */
import request from '@/utils/request';

export function indexList (query) {
  return request({
    url: '/article/list', // 请求地址
    method: 'get', // 请求形式
    params: query // 参数
  });
}
