import request from '@/libs/request.js'
import { config } from '@/libs/config.js'

// 获取验证码 
export function getCodeImg(data) {
  return new Promise((resolve, reject) => {
    request.get(config.apiPath + '/auth/captcha', data, function (res) {
      return resolve(res.data)
    }, function (err) {
      return reject(err)
    }, { isLoading: true })
  })
}

// 登录
export function getLogin(data) {
  return new Promise((resolve, reject) => {
    request.postForm(config.apiPath + '/auth/login', data, function (res) {
      return resolve(res.data)
    }, function (err) {
      return reject(err)
    })
  })
}