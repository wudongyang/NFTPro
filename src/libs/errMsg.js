var errMsgCount = 1

document.addEventListener('click', function(e){
  if (e.target.parentElement && e.target.parentElement.classList && e.target.parentElement.className.indexOf('cy-err-msg-button') > -1){
    let dom = null
    dom = document.getElementById('cy_errMsg')
    dom.parentNode.removeChild(dom)
  }
})

export const errMsg = {
  show: (content) => {
    if (errMsgCount === 1) {
      if (document.getElementById('cy_errMsg')){
        return null
      }
      
      
      let html = `
      <div tabindex="-1" role="dialog" aria-modal="true" aria-label="系统提示" class="el-message-box__wrapper" style="z-index: 400${errMsgCount};">
        <div class="el-message-box">
          <div class="el-message-box__header">
            <div class="el-message-box__title">
              <span>系统提示</span>
            </div>
            
            <button type="button" aria-label="Close" class="el-message-box__headerbtn">
              <i class="el-message-box__close el-icon-close"></i>
            </button>
          </div>
          <div class="el-message-box__content">
            <div class="el-message-box__container">
              <div class="el-message-box__message">
                <p>${content}</p>
              </div>
            </div>
            <div class="el-message-box__input" style="display: none;">
              <div class="el-input">
                <input type="text" autocomplete="off" placeholder="" class="el-input__inner"></input>
              </div>
              <div class="el-message-box__errormsg" style="visibility: hidden;"></div>
            </div>
          </div>
          <div class="el-message-box__btns">
            <button type="button" class="el-button el-button--default el-button--small el-button--primary cy-err-msg-button"><span errMsgIndex="${errMsgCount}">确定</span></button>
          </div>
        </div>
      </div>
      <div class="v-modal" tabindex="0" style="z-index: 400`+(errMsgCount - 1)+`;"></div>
      `
      
      let div = document.createElement('div')
      div.id = 'cy_errMsg'
      document.body.appendChild(div)
      div.innerHTML = html
    }
  },
  hide: () => {
    if (errMsgCount > 1) {
      errMsgCount--
    }
  }
}