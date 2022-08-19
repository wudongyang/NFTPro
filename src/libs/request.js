import axios from 'axios'
import { Message } from 'element-ui'
import { errMsg } from '@/libs/errMsg.js'
import { loadingPopup } from '@/libs/loading.js'
import router from '../router'

// 默认超时
axios.defaults.timeout = 1000 * 15;

// 跨域请求携带cookie
axios.defaults.withCredentials = false

// 拦截器 - 发送
axios.interceptors.request.use(config => {
  if (config.headers.isLoading) {
    loadingPopup.show()
  }
  if (sessionStorage.getItem('userInfo')) {
    config.headers.Authorization = JSON.parse(sessionStorage.getItem('userInfo')).token
  }
  return config
}, error => {
  loadingPopup.hide()
  console.log(error)
  errMsg.show('接口请求异常')
  return Promise.reject(error.response)
})

// 拦截器 - 返回
axios.interceptors.response.use(data => {
  loadingPopup.hide()
  return data
}, error => {
  loadingPopup.hide()

  if (error.response && error.response.status == 403){
    sessionStorage.removeItem("userInfo");
    errMsg.show('用户登录超时，请重新登录')
    router.replace({name: 'login'})
  }

  if (!error.response.msg){
    errMsg.show('接口请求异常，请稍后再试')
  }

  return Promise.reject(error.response)
})

export function get(api, params = {}, success, fail, headers) {
  params.v = new Date().getTime()
  axios({ method: "get", url: api, params: params, headers: headers }).then(res => {
    if (res.data.code == 200) {
      success(res.data)
    }else {
      fail(res.data)
    }
  }).catch(err => {
    console.log('接口错误：', api, '参数：', params, '错误信息：', err)
    // fail(err)
  })
}
export function getCode(api, params = {}, success, fail, headers) {
  params.v = new Date().getTime()
  axios({ method: "get", url: api, params: params, headers: headers }).then(res => {
    if (res.data.code == 200 || res.data.code == 400 || res.data.code == 700) {
      success(res.data)
    }else {
      fail(res.data)
    }
  }).catch(err => {
    console.log('接口错误：', api, '参数：', params, '错误信息：', err)
    // fail(err)
  })
}

export function post(api, params = {}, success, fail, headers, timeout) {
  params.v = new Date().getTime()
  axios.post(api, params, { 
    headers: headers,
    timeout: timeout ? timeout : (1000 * 15) 
  }).then(res => {
    if (res.data.code == 200) {
      success(res.data)
    } else {
      fail(res.data)
    }
  }).catch(err => {
    console.log('接口错误：', api, '参数：', params, '错误信息：', err)
    // fail(err)
  })
}

export function postForm(api, params = {}, success, fail, headers, timeout) {
  params.v = new Date().getTime()
  let formData = new FormData()
  for (let item in params) {
    formData.append(item, params[item]);
  }
  axios({
    method: 'post',
    url: api,
    data: formData,
    headers: headers,
    timeout: timeout ? timeout : (1000 * 15)
  }).then(res => {
    if (res.data.code == 200) {
      success(res.data)
    }else {
      fail(res.data)
    }
  }).catch(err => {
    console.log('接口错误：', api, '参数：', params, '错误信息：', err)
    // fail(err)
  })
}

export function postFile(api, params, success, fail, headers, timeout) {
  axios({
    method: 'post',
    url: api,
    responseType: 'blob',
    params: params,
    headers: headers,
    timeout: timeout ? timeout : (1000 * 15)
  }).then(res => {
    success(res.data)
  }).catch(err => {
    console.log('接口错误：', api, '参数：', params, '错误信息：', err)
    // fail(err)
  })
}

export function postFormFile(api, params, success, fail, headers, timeout) {
  params.v = new Date().getTime()
  let formData = new FormData()
  for (let item in params) {
    formData.append(item, params[item]);
  }
  axios({
    method: 'post',
    url: api,
    responseType: 'blob',
    data: formData,
    headers: headers,
    timeout: timeout ? timeout : (1000 * 15)
  }).then(res => {
    success(res.data)
  }).catch(err => {
    console.log('接口错误：', api, '参数：', params, '错误信息：', err)
    // fail(err)
  })
}

export function updateFile(api, params, success, fail, headers) {
  params.v = new Date().getTime()
  let formData = new FormData()
  for (let item in params) {
    formData.append(item, params[item]);
  }

  axios({
    method: 'post',
    url: api,
    responseType: 'blob',
    data: formData,
    headers: headers
  }).then(res => {
    success(res.data)
  }).catch(err => {
    console.log('接口错误：', api, '参数：', params, '错误信息：', err)
    // fail(err)
  })
}

export default { get, post, postForm, postFile, updateFile, postFormFile, getCode }
