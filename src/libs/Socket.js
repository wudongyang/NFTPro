
import { Message } from 'element-ui'

export const Socket = function (param) {
  this.param = param

  // 心跳连接测试
  this.testLink = null

  // 重试次数
  this.reSendNum = 0

  // 重联次数
  this.reLinkNum = 0

  // 是否需要重连
  this.reLink = true

  this.connection = () => {
    if ('WebSocket' in window) {
      this.socket = new WebSocket(this.param.wsUrl);

      // 连接成功回调
      this.socket.onopen = () => {
        let that = this
        this.reLinkNum = 0
        if (this.testLink) {
          clearInterval(this.testLink)
        }
        this.testLink = setInterval(() => {
          // 连接检测失效
          if (that.reSendNum > 3) {
            console.log('socket：服务端无响应，尝试重连...')
            that.reSendNum = 0
            clearInterval(that.testLink)
            that.close()
          } else {
            // 连接检测
            if (that.socket && that.socket.readyState == 1) {
              that.socket.send("ping")
              that.reSendNum++
            }
          }
        }, 5000)
      }

      // 发送消息
      this.send = (msg) => {
        if (this.socket.readyState == 1) {
          if (msg) {
            this.socket.send(JSON.stringify(msg))
          }
        } else {
          console.log('网络连接中断，正在重联，请稍后再试')
          // Message.error('网络连接中断，正在重联，请稍后再试')
        }
      }

      // 收到消息回调
      this.socket.onmessage = (res) => {
        // 连接检测
        if (res.data == 'pong') {
          this.reSendNum = 0
        } else {
          if (res.data.indexOf('{') > -1) {
            let data = JSON.parse(res.data)
            if (data.code == 'ErrorMessage') {
              Message.error(data.data)
            } else {
              this.param.msgCallBack(data)
            }
          } else {
            console.log('实时消息错误：', res.data)
          }
        }
      }

      // 连接关闭回调
      this.socket.onclose = (res) => {
        if (this.reLink) {
          this.reLinkNum++
          console.log('socket重联中：', this.reLinkNum)
          let that = this
          setTimeout(() => {
            that.connection()
          }, 5000)
        }
      }

      // 错误回调
      this.socket.onerror = (err) => {
        // Message.error('socket：异常')
        console.log('socket：异常', err)
      }
    }
    else {
      console.log('socket：无法建立连接')
      // Message.error('socket：无法建立连接')
    }
  }

  this.close = () => {
    this.reLink = false
    this.socket.close()
    this.socket = null;
    clearInterval(this.testLink)
    this.testLink = null
  }
}