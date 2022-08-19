import { Loading } from 'element-ui'

var loadingCount = 0, loading = null

export const loadingPopup = {
  show: () => {
    if (loadingCount === 0) {
      loading = Loading.service({
        lock: false,
        text: '加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.8)'
      })
    }
  },
  hide: () => {
    if (loadingCount > 0) {
      loadingCount--
    }

    if (loadingCount === 0) {
      if (loading) {
        loading.close()
      }
    }
  }
}