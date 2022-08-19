<template>
  <div class="pageBox">
    <!-- 第三方登录界面 -->
  </div>
</template>

<script>
import { getUrlParames } from "@/libs/public.js";
import { getOtherLogin } from "@/api/public.js";
export default {
  name: "thirdParty",
  data() {
    return {};
  },
  mounted() {
    // getUrlParames('data').replace(/\=/g,"%3D").replace(/\+/g,"%2B").replace(/[\s]/g,"%2F").replace(/\?/g,"%3F").replace(/\#/g,"%23").replace(/\&/g,"%26")
    let params = {
      // data: this.$route.query.data.replace(/[\s]/g,"+")
      data: decodeURIComponent(this.$route.query.data.replace(/%3D/g, "="))
    }
    // let params = {
    //   data: this.$route.query.data
    // }
     getOtherLogin(params).then(res => {
      // loginType 0=本系统登录 1=第三方登录
      // res.loginType = 1
      res.mip_type = 'thirdParty';
      sessionStorage.setItem("userInfo", JSON.stringify(res));

      this.$router.replace({ 
        name: 'admin_review_extract',
        query: {
          taskId: res.taskId,
          groupId: res.groupId
        }
      })
    }).catch(err => {
      this.$router.replace({
        name: 'notFound',
        params: {
          err: err.msg
        }
      })
    })
  },
}
</script>