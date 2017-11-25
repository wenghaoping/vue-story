/**
 * Created by Admin on 2017/11/21.
 */
import request from '@/utils/request'; // 导入请求函数
import URL from './url'; // 引用所有请求地址

export function creat (query) {
  return request({
    url: URL.creat, // 请求地址
    method: 'post', // 请求形式
    params: query // 参数
  });
}

export function deletePlan (query) {
  return request({
    url: URL.deletePlan, // 请求地址
    method: 'post', // 请求形式
    params: query // 参数
  });
}

export function getList (query) {
  return request({
    url: URL.getList, // 请求地址
    method: 'post', // 请求形式
    params: query // 参数
  });
}
