<template>
  <div class="pageContent">
    <div class="heeder_box">
      <div class="header">
        <div class="go_home" @click="linkUrlHome">NFTPro</div>
        <div class="input_sea">
          <el-input v-model="name" placeholder="搜索藏品、合集以及账户" clearable prefix-icon="el-icon-search"/>
        </div>
        <div>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-submenu index="1">
              <template slot="title">探索</template>
              <el-menu-item index="1-1">市场</el-menu-item>
              <el-menu-item index="1-2">合集</el-menu-item>
            </el-submenu>
            <el-menu-item index="2">排行榜</el-menu-item>
            <el-submenu index="3">
              <template slot="title">Launchpad</template>
              <el-menu-item index="3-1">盲盒</el-menu-item>
              <el-menu-item index="3-2">申请加入Launchpad</el-menu-item>
              <el-menu-item index="3-3">申请成为合作伙伴</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">BNB Chain</template>
              <el-menu-item index="4-1">Ethereum</el-menu-item>
              <el-menu-item index="4-2">BNB Chain</el-menu-item>
              <el-menu-item index="4-3">Polygon</el-menu-item>
              <el-menu-item index="4-4">Avalanche</el-menu-item>
              <el-menu-item index="4-5">Sloana</el-menu-item>
              <el-menu-item index="4-6">NFTPro home</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <span class="el-icon-basketball"></span>
              </template>
              <el-menu-item index="5-1">English</el-menu-item>
              <el-menu-item index="5-2">한국어</el-menu-item>
              <el-menu-item index="5-3">中文简体</el-menu-item>
              <el-menu-item index="5-4">中文繁体</el-menu-item>
            </el-submenu>
            <el-menu-item index="6">
              <span class="el-icon-bell"></span>
            </el-menu-item>
            <el-menu-item index="7">
              <span class="el-icon-shopping-cart-2"></span>
            </el-menu-item>
            <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item> -->
            <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
          </el-menu>
        </div>
        <div>
        <!-- @mouseout="moveLineDefault"-->
          <div @mouseover.stop="moveLine" ><span class="el-icon-picture"></span></div>
        </div>
      </div>
    </div>
    <el-drawer
      id="el-drawer"
      :visible.sync="drawer"
      :append-to-body="true"
      :show-close="true">
      <div class="mine_box">
        <div class="author_box">
          <div class="author_photo"></div>
          <div>
            <div class="author_name">96D931</div>
            <div>
              <div class="author_key">{{publicKey}}</div><span class="el-icon-document-copy" @click="copyclipboard"></span>
            </div>
          </div>
        </div>
        <div class="menu_box">
          <div class="fl_left menu_list" @click="linkUrl"><span class="el-icon-collection-tag"></span>我的NFTs</div>
          <div class="fl_left menu_list"><span class="el-icon-setting"></span>编辑个人信息</div>
          <div class="fl_left menu_list"><span class="el-icon-edit"></span>报价</div>
          <div class="fl_left menu_list"><span class="el-icon-s-order"></span>定价</div>
          <div class="fl_left menu_list"><span class="el-icon-menu"></span>我的合集</div>
          <div class="fl_left menu_list"><span class="el-icon-present"></span>我的邀请</div>
          <div class="fl_left menu_list"><span class="el-icon-switch-button"></span>登出</div>
          <div class="clearfix"></div>
        </div>
        <div class="money_box">
          <div class="money_list">
            <div class="fl_left">
              <span class="el-icon-s-marketing"></span>BNB
            </div>
            <div class="fm_right">
              <div>
                <div class="money_01">0</div>
                <div class="money_02">$0</div>
              </div>
              <span class="el-icon-refresh"></span>
            </div>
            <!-- <div class="clearfix"></div> -->
          </div>
          <div class="money_list">
            <div class="fm_left">
              <span class="el-icon-s-marketing"></span>WBNB
            </div>
            <div class="fm_right">
              <div>
                <div class="money_01">0</div>
                <div class="money_02">$0</div>
              </div>
              <span class="el-icon-refresh"></span>
            </div>
            <!-- <div class="clearfix"></div> -->
          </div>
          <div class="money_list">
            <div class="fl_left">
              <span class="el-icon-s-marketing"></span>BUSD
            </div>
            <div class="fm_right">
              <div>
                <div class="money_01">0</div>
                <div class="money_02">$0</div>
              </div>
            </div>
            <!-- <div class="clearfix"></div> -->
          </div>
        </div>
      </div>
    </el-drawer>
    <!-- 首页展示 -->
    <div v-if="bannerShow" class="conditionsTipBox">
      <banner :visible="bannerShow"/>
    </div>
    <!-- 上架列表 -->
    <div v-if="logApiShow" class="conditionsTipBox">
      <log-api :visible="logApiShow"/>
    </div>
    <!-- 详情页面 -->
    <div v-if="logApiListShow" class="conditionsTipBox">
      <log-api-list :visible="logApiListShow"/>
    </div>
    <!-- 合集查看 -->
    <div v-if="logApiListNumShow" class="conditionsTipBox">
      <log-api-list-num :visible="logApiListNumShow"/>
    </div>
  </div>
</template>

<script>
import { getCaptcha, getLogin } from "@/api/public.js";
import { clipboard } from "@/libs/public.js";
import banner from "@/views/admin/system/banner.vue"
import logApi from "@/views/admin/system/logApi.vue"
import logApiList from "@/views/admin/system/logApiList.vue"
import logApiListNum from "@/views/admin/system/logApiListNum.vue"
export default {
  name: "login",
  components: {
    banner,
    logApi,
    logApiList,
    logApiListNum
  },
  data() {
    return {
      name:'',
      activeIndex:'1',
      drawer:false,
      timer:null,
      publicKey:'0x96d931109d9d220384c6f841be7350e2abb99e09',
      bannerShow:true,
      logApiShow:false,
      logApiListShow:false,
      logApiListNumShow:false,
    };
  },
  mounted() {
    // let that = this;
    // window.addEventListener("resize", function () {
    //   that.getAdaptation();
    // });
    // this.getAdaptation();
    // sessionStorage.removeItem("group");
    // this.getCode();
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    linkUrl(){
      this.bannerShow = false;
      this.logApiShow = true;
      this.logApiListShow = false;
      this.drawer = false;
      this.logApiListNumShow=false;
      window.scrollTo(0, 0)
    },
    linkUrlHome(){
      this.bannerShow = true;
      this.logApiShow = false;
      this.logApiListShow = false;
      this.drawer = false;
      this.logApiListNumShow=false;
      window.scrollTo(0, 0)
    },
    handleClose(done) {
        // this.$confirm('还有未保存的工作哦确定关闭吗？')
        //   .then(_ => {
        //     done();
        //   })
        //   .catch(_ => {});
    },
    moveLine(){
      this.drawer = true;
      this.timer = setTimeout(()=>{
        document.querySelector('.v-modal').setAttribute('id','drawer_modal');
      },100)
      
    },
    // 鼠标离开
    moveLineDefault() {
      this.drawer = false;
      clearTimeout(this.timer)
    },
    // 复制
    copyclipboard() {
      clipboard(this.publicKey)
      this.$message.success('复制成功')
    },
    // 适配比例
    getAdaptation() {
      // 屏幕兼容处理
      if (document.documentElement.clientHeight < 750) {
        this.adaptation = (document.documentElement.clientHeight * 0.8) / 700;
      } else {
        this.adaptation = 1;
      }
    },

    // 获取验证码
    getCode() {
      getCaptcha().then((res) => {
        this.captchaImg = res.captcha;
        this.loginInfo.uuid = res.uuid;
      })
    },

    // 登录
    login() {
      let params = this.$JSE.encrypt(JSON.stringify(this.loginInfo));
      getLogin({ loginInfo: params })
        .then((res) => {
          sessionStorage.setItem("userInfo", JSON.stringify(res));
          // // type：0系统管理员、1超级管理员、2普通管理员 roleId改为type roleName改为typeName
          if (res.type == 0) {
            this.$router.push({ name: "admin_sys_brother" });
          } else if (res.type == 1) {
            this.$router.push({ name: "admin_sys_userAdmin" });
          } else if (res.type == 2) {
            this.$router.push({ name: "admin_sys_logOperationcq" });
          }
        })
        .catch((err) => {
          this.$alert(err.msg, "登录提示", {
            confirmButtonText: "确定",
          });
          this.loginInfo.password = "";
          this.loginInfo.captcha = "";
          this.getCode();
        });
    },
  },
};
</script>

<style scoped>
.heeder_box{
  background-color: #fff;
  border-bottom: solid 1px #e6e6e6;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  width: 100%;
  z-index: 50;
}
.go_home{
  cursor: pointer;
}
.header{
  padding: 0 20px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
}
.input_sea{
  width: 370px;
  margin: 0 20px;
}
.mine_box{
  padding: 0 20px;
  position: relative;
}
.author_box{
  display: flex;
  align-items: center;
  position: absolute;
  top:-70px;
  left: 20px;
}
.author_photo{
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border:1px solid #ccc;
  margin-right: 10px;
}
.author_name{
  font-size: 16px;
  color: #222;
}
.author_key{
  font-size: 14px;
  color: #666;
  width: 100px;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}
.menu_box{
  padding-top: 30px;
}
.menu_list{
  width: 150px;
  font-size: 16px;
  /* font-weight: bold; */
  color: #222;
  line-height: 45px;
  cursor: pointer;
}
.menu_list span{
  margin-right: 10px;
  color: #ccc;
  font-size: 18px;
}
.money_box{
  border:1px solid #ccc;
  border-radius: 10px;
  margin-top: 30px;
}
.money_list{
  border-bottom: 1px solid #ccc;
  padding: 20px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.money_list:last-child{
  border:0;
}
.fm_left span{
  margin-right: 10px;
}
.fm_right{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.money_01{
  color: #222;
  font-size: 14px;
  margin-right: 10px;
}
.money_02{
  color: #666;
  font-size: 12px;
}









#el-drawer.el-drawer__wrapper{
  top:61px !important;
}

</style>
<style>
#drawer_modal.v-modal{
  top:61px !important;
}
.el-drawer__body{
  overflow: initial;
}
.el-menu.el-menu--horizontal{
  border:0;
}
</style>
