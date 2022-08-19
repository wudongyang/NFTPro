<template>
  <div class="pageBox">
    <div class="banner">
      <!-- <el-image src="/elementFang/static/images/login_bg.png" fit="contain" style="width:962px" /> -->
    </div>
    <div class="conten_box">
      <div class="con1" :class="check_show?'check':''">
        <div class="zs_box border_bottom">
          <div class="el-icon-view" @click="check_show=!check_show"></div>
          <div class="el-icon-back" @click="check_show=true" v-show="check_show == false"></div>
        </div>
        <div class="button_box" v-show="check_show == false">
          <el-button type="primary" style="width:275px;margin-top:15px;">全部</el-button>
          <el-button plain style="width:275px;margin-top:15px;">已上架</el-button>
          <el-button plain style="width:275px;margin:15px 0;">未上架</el-button>
        </div>
        <div class="zs_box border_bottom" v-show="check_show == false">
          <span>稀有度显示</span>
          <el-switch v-model="xy_show" active-color="#0065b5" inactive-color="#ccc" @change="setMenuStatus()"></el-switch>
        </div>
         <div class="zs_box" v-show="check_show == false">
          <div><span class="el-icon-picture-outline"></span>合集</div>
          <div class="el-icon-arrow-up" v-if="zk_show" @click="zk_show=false"></div>
          <div class="el-icon-arrow-down" v-else @click="zk_show=true"></div>
         </div>
         <div class="input_sea" v-show="zk_show && check_show == false">
          <el-input v-model="name" placeholder="搜索" clearable prefix-icon="el-icon-search"/>
        </div>
        <ul v-show="zk_show && check_show == false">
          <li class="border_bottom">
            <div class="li_list">
              <div class="li_pho"></div>
              <div>
                <div class="name1">MrStick</div>
                <div class="name2">floor<el-image src="/elementFang/static/images/eth.svg" fit="contain" style="width:12px;height:12px;" /> 0.00</div>
              </div>
            </div>
            <div class="name1">1</div>
          </li>
        </ul>
      </div>
      <div class="con2">
        <div class="con2_header">
          <div class="author_box">
            <div class="author_photo"></div>
            <div>
              <div class="author_name">96D931</div>
              <div style="color:#5d656c;margin:10px 0;">暂未填写简介</div>
              <div class="author_key_box">
                <div class="author_key">{{publicKey}}</div><span class="el-icon-document-copy" @click="copyclipboard"></span>
              </div>
            </div>
          </div>
          <div class="con2_header_right">
            <el-button v-if="conShow" type="primary" style="width:125px;" @click="conShow = false">取消<i class="el-icon-close el-icon--right"></i></el-button>
            <el-button v-else type="primary" style="width:125px;" icon="el-icon-document" @click="conShow = true">批量上架</el-button>
            <div class="tab_header">
              <!-- <span class="el-icon-edit"></span>
              <span class="el-icon-edit-outline"></span> -->
              <div class="span">
                <el-popover
                  placement="top-start"
                  title=""
                  width="200"
                  trigger="hover"
                  content="编辑个人信息">
                  <!-- <el-button >删除</el-button> -->
                  <div slot="reference" class="el-icon-edit"></div>
                </el-popover>
              </div>
              <div class="span">
                <el-popover
                  placement="bottom"
                  width="160"
                  >
                  <p @click="copyclipboard" style="text-align:center;">复制链接</p>
                  <div slot="reference" class="el-icon-edit-outline"></div>
                </el-popover>
              </div>
            </div>
          </div>
        </div>
        <div class="con2_daoh">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">收藏品</el-menu-item>
            <el-menu-item index="2">定价</el-menu-item>
            <el-menu-item index="3">交易历史</el-menu-item>
            <el-menu-item index="4">
              <template slot="title">
                <el-popover
                  placement="bottom"
                  width="160"
                  >
                  <p class="dah_sel">关注</p>
                  <p class="dah_sel">隐藏</p>
                  <p class="dah_sel">报价</p>
                  <div slot="reference">更多</div>
                </el-popover>
              </template>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="con2_sea_box">
          <div class="con2_sea_mar" style="width:200px;">
            <el-input v-model="name" placeholder="搜索" clearable prefix-icon="el-icon-search"/>
          </div>
          <div class="con2_sea_mar">
            <el-select v-model="value" placeholder="请选择" style="width:200px;">
              <el-option
                label="排序"
                value="">
              </el-option>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <el-button class="con2_sea_mar" plain style="width:200px;" icon="el-icon-present" v-show="!conShow">取消所有订单</el-button>
          <div class="tab_header" v-show="!conShow">
            <span class="span el-icon-menu"></span>
            <span class="span el-icon-s-grid"></span>
          </div>
        </div>
        <div class="con2_sea_title">
          <span class="tab_header el-icon-refresh-left" style="padding:13px;"></span>1结果
          <div class="rs-btn-lg">Blue<span class="el-icon-close"></span></div>
          <div class="rs-btn-lg">Red<span class="el-icon-close"></span></div>
          <div class="con2_sea_name">重新筛选</div>
        </div>
        <div class="con2_sea_result">
          <div class="con2_sea_result_list" @click="linkUrl">
            <el-image src="/elementFang/static/images/login_bg.png" style="height:360px;" />
            <div class="res_name1">Mr.Stick</div>
            <div class="res_name2">Mr.Stick #1321</div>
            <div class="con2_footer_box">
              <span class="chushou">出售</span>
              <span>
                <el-popover
                  placement="bottom"
                  width="160"
                  >
                  <p class="dah_sel">转移</p>
                  <p class="dah_sel">复制链接</p>
                  <p class="dah_sel">关注</p>
                  <p class="dah_sel">隐藏</p>
                  <div slot="reference">...</div>
                </el-popover>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="con3" v-show="conShow">
        <div class="con3_not1">
          <span>上架(0)</span>
          <span class="el-icon-close" @click="conShow = false"></span>
        </div>
        <div class="con3_not2">
          <span>暂未有资产</span>
        </div>
        <div class="con3_not3">
          <el-button type="info" disabled>选择NFT进行上架吧</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { clipboard } from "@/libs/public.js";
export default {
  name: "upload",
  props: ['visibleShow'],
  data() {
    return {
      xy_show:true,
      zk_show:true,
      check_show:false,
      conShow:false,
      publicKey:'0x96d931109d9d220384c6f841be7350e2abb99e09',
      activeIndex:'1',
      value:'',
      options: [
        {
          value: '1',
          label: '最近上架'
        }, 
        {
          value: '2',
          label: '价格: 从高到低'
        }, 
        {
          value: '3',
          label: '价格: 从低到高'
        }, 
        {
          value: '4',
          label: '最近转移'
        }, 
        {
          value: '5',
          label: '最近创建'
        }, 
        {
          value: '6',
          label: '最近卖出'
        }, 
        {
          value: '7',
          label: '最近结束'
        }, 
        {
          value: '8',
          label: '销售最高'
        }, 
      ]
    };
  },
  mounted() {
  },
  methods: {
    setMenuStatus(){
      this.xy_show = !this.xy_show;
    },
    linkUrl(){
      this.$parent.logApiShow = false;
      this.$parent.logApiListShow = true;
      window.scrollTo(0, 0)
    },
    // 复制
    copyclipboard() {
      clipboard(this.publicKey)
      this.$message.success('复制成功')
    },
  },
};
</script>

<style scoped>
.pageBox{
  background: #fff;
}
  .banner{
    background-size: cover;
    height: 180px;
    width: 100%;
    z-index: 2;
    background: url(/elementFang/static/images/login_bg.png) no-repeat center center;
  }
  .conten_box{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .border_bottom{
    border-bottom:1px solid #ccc;
  }
  .con1{
    background: #fff;
    border-right: 1px solid #fff;
    box-sizing: border-box;
    flex-shrink: 0;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    overflow-y: overlay;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 300px;
  }
  .con1.check{
    box-sizing: border-box;
    height: calc(100vh - 64px);
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 60px;
    border-right: 1px solid #ccc;
  }
.zs_box{
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    font-weight: 700;
    height: 64px;
    justify-content: space-between;
    line-height: 24px;
    padding: 0 20px;
}
.button_box{
  padding-left: 13px;
}
.input_sea{
  width: 275px;
  margin:0 auto 20px;
}
.con1 ul li{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px 15px;
}
.li_list{
  display: flex;
  align-items: center;  
}
.li_pho{
  width:32px;
  height:32px;
  border-radius: 50%;
  border:1px solid #333;
  margin-right: 8px;
}
.name1{
    font-size: 14px;
    font-weight: 500;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.name2{
    font-size: 12px;
    font-weight: 500;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #666;
}
.author_box{
  display: flex;
  align-items: center;
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
.author_key_box{
  display: flex;
  align-items: center;
}
.author_key{
  font-size: 14px;
  color: #666;
  width: 100px;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}
.con2_header{
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}
.con2_header_right{
  display: flex;
  align-items: flex-start;
}
.tab_header{
  border:1px solid #ccc;
  border-radius: 5px;
  margin-left: 20px;
  display: flex;
  align-items: center;
}
.tab_header .span{
  padding:7px 13px;
  font-size: 18px;
}
.tab_header .span:nth-child(1){
   border-right:1px solid #ccc;
}
.dah_sel{
  text-align: center;
  line-height: 40px;
  border-bottom:1px solid #ccc;
}
.con2_daoh .dah_sel:nth-child(3){
  border:0;
}
.con2_sea_box{
  display: flex;
  align-items: center;
  padding: 20px 0;
}
.con2_sea_mar{
  margin-right: 20px;
}
.con2_sea_box .tab_header .span{
  padding:10px 13px;
}
.rs-btn-lg{
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  padding: 12px;
  background: #79d4ba;
  color: #008268;
  margin-left: 10px;
}
.con2_sea_title{
  display: flex;
  align-items: center;
}
.con2_sea_name{
    color: #566370;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    margin-left: 12px;
}
.con2_sea_result{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 0;
}
.con2_sea_result_list{
  width: 362px;
  border:1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
}
.con2_sea_result_list:hover{
  box-shadow: 0 7px 36px -8px rgb(4 4 5 / 15%);
}
.res_name1{
  color:#838b92;
  font-size: 12px;
  margin-left: 15px;
  margin-top: 5px;
}
.res_name2{
  color:#2b2f33;
  font-size: 12px;
  margin-left: 15px;
  margin-bottom: 5px;
}
.con2_footer_box{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 10px 15px;
  cursor: pointer;
}
.con2_footer_box:hover{
  background: rgb(239, 238, 238);
}
.con2_footer_box:hover .chushou{
  color: #00926f;
}
.chushou{
  color:#fff;
}
/*  */
  .con2 {
    font-size: 12px;
    width: 100%;
    padding: 0 20px;
  }
  .con3{
    border-left: 1px solid #e7e5ea;
    width: 340px;
    padding: 30px 20px;
    min-height: calc(100vh - 72px);
  }
  .con3_not1{
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .con3_not1 span:nth-child(1){
    font-weight: 700;
  }
  .con3_not2{
    line-height: 200px;
    text-align: center;
  }
</style>
<style>
.el-button+.el-button{
  margin-left: 0;
}
</style>