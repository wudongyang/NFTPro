import request from '@/libs/request.js'
import { config } from '@/libs/config.js'

// 获取验证码 
export function getCaptcha(data) {
  return new Promise((resolve, reject) => {
    request.get(config.apiPath + '/captcha', data, function (res) {
      return resolve(res.data)
    }, function (err) {
      return reject(err)
    }, { isLoading: true })
  })
}

// 登录
export function getLogin(data) {
  return new Promise((resolve, reject) => {
    request.postForm(config.apiPath + '/login', data, function (res) {
      return resolve(res.data)
    }, function (err) {
      return reject(err)
    })
  })
}

// 退出
export function getLogout(data) {
  return new Promise((resolve, reject) => {
    request.postForm(config.apiPath + '/logout', data, function (res) {
      return resolve(res.data)
    }, function (err) {
      return reject(err)
    })
  })
}

// 第三方登录 /publicLogin /public/login
export function getOtherLogin(data) {
  return new Promise((resolve, reject) => {
    request.post(config.apiPath + '/publicLogin', data, function (res) {
      return resolve(res.data)
    }, function (err) {
      return reject(err)
    })
  })
}

// 修改密码
export function changePassword(data) {
  return new Promise((resolve, reject) => {
    request.postForm(config.apiPath + '/system/changePassword', data, function (res) {
      return resolve(res.data)
    }, function (err) {
      return reject(err)
    }, { isLoading: true })
  })
}

// 获取码表
export function getDictList(data) {
  return new Promise((resolve, reject) => {
    request.post(config.apiPath + '/dictionary/listByCategory', data, function (res) {
      return resolve(res.data)
    }, function (err) {
      return reject(err)
    }, { isLoading: true })
  })
}
