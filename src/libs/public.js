// 遍历更新信息
export function ergodic(n, o) {
  for (let nk in n) {
    let isFind = true
    for (let ok in o) {
      if (ok == nk) {
        isFind = false
        if (typeof n[nk] == 'object') {
          ergodic(n[nk], o[ok])
        } else {
          if (n[nk] != o[ok]) {
            // console.log('更新：', ok, o[ok] + ' => ' + n[nk], o.userName ? o.userName : '')
            o[ok] = n[nk]
          }
          break
        }
      }
    }
    if (isFind) {
      o[nk] = n[nk]
      // console.log('新增：', nk, n[nk])
    }
  }
  return
}

// 格式化 - 时间戳
/* *
* YYYY 年
* MM 月
* DD 日
* HH 时
* NN 分
* SS 秒
* */
export function formatTimer(datatime, type = '', formatType) {
  let result = ''
  let d = new Date(datatime)
  if (isNaN(d.getFullYear())) {
    return '--'
  }
  type = type.toUpperCase()
  if (type.indexOf('YYYY') > -1) {
    result += d.getFullYear()
  }
  if (type.indexOf('MM') > -1) {
    if (type.indexOf('YYYY') > -1) {
      result += formatType ? '年' : '-'
    }
    let temp = d.getMonth() + 1
    result += temp < 10 ? '0' + temp : temp
  }
  if (type.indexOf('DD') > -1) {
    if (type.indexOf('MM') > -1) {
      result += formatType ? '月' : '-'
    }
    let temp = d.getDate()
    result += temp < 10 ? '0' + temp : temp
    result += formatType ? '日' : ''
  }
  if (type.indexOf('HH') > -1) {
    if (type.indexOf('DD') > -1) {
      result += ' '
    }
    let temp = d.getHours()
    result += temp < 10 ? '0' + temp : temp
  }
  if (type.indexOf('NN') > -1) {
    if (type.indexOf('HH') > -1) {
      result += formatType ? '时' : ':'
    }
    let temp = d.getMinutes()
    result += temp < 10 ? '0' + temp : temp
  }
  if (type.indexOf('SS') > -1) {
    if (type.indexOf('NN') > -1) {
      result += formatType ? '分' : ':'
    }
    let temp = d.getSeconds()
    result += temp < 10 ? '0' + temp : temp
    result += formatType ? '秒' : ''
  }
  return result
}

// 格式化 - 项目 | 分组 状态 0-未开始 1-进行中 2-已结束 3-已关闭
export function formatStatus(status, type) {
  let result = null

  if (type == 'group') {
    if (status == 0) {
      result = '未开始'
    } else if (status == 1) {
      result = '进行中'
    } else if (status == 2) {
      result = '已结束'
    } else if (status == 3) {
      result = '已关闭'
    }
  } else if (type == 'project') {
    if (status == 0) {
      result = '未开始'
    } else if (status == 1) {
      result = '进行中'
    } else if (status == 2) {
      result = '已结束'
    } else if (status == 5) {
      result = '放弃答辩'
    }
  } else if (type == 'test') {
    if (status == 0) {
      result = '未测试'
    } else if (status == 1) {
      result = '未通过'
    } else if (status == 2) {
      result = '通过'
    }
  }
  return result
}

// 从URL中获取参数
export function getUrlParames(key) {
  let url = location.href
  url = url.replace('#/', '')
  let result = null
  if (url.indexOf('?') > -1) {
    url = url.split('?')[1].split('&')
    for (let i = 0; i < url.length; i++) {
      if (url[i].split('=')[0] == key) {
        result = url[i].split('=')[1]
        break
      }
    }
    return result
  } else {
    return result
  }
}

// 语音播报
export function msgSound(msg) {
  if (msg) {
    var utterThis = new window.SpeechSynthesisUtterance();
    utterThis.text = msg
    utterThis.pitch = 0.7
    window.speechSynthesis.speak(utterThis);
  }
}
//
export function clipboard(msg) {
  var copyPassword = document.createElement("input");
  copyPassword.value = msg;
  document.body.appendChild(copyPassword);
  copyPassword.select();
  document.execCommand("Copy");
  document.body.removeChild(copyPassword);
  // this.$alert('已将密码复制到剪贴板', '系统提示')
}