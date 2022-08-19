<template>
  <div class="pageBox">
    <div class="con_header">
      <el-button type="primary" style="width:150px;" @click="linkUrl">出售</el-button>
    </div>
    <div class="conten_box">
      <div class="con2">
        <div class="con2_header">
          <div class="author_box">
            <el-image src="/elementFang/static/images/login_bg.png" style="width:524px;height: 524px;" />
            <div class="des_right_box">
              <div class="des_right">
                <div>
                  <div class="author_name">96D931</div>
                  <div style="font-size:32px;margin:10px 0;">暂未填写简介</div>
                  <div class="author_key_box">
                    <div class="author_key">{{publicKey}}</div>
                  </div>
                </div>
                <div class="tab_header">
                  <el-popover
                    placement="top"
                    width="160"
                    >
                    <p class="dah_sel">刷新元数据</p>
                    <span slot="reference" class="span el-icon-refresh-left"></span>
                  </el-popover>
                  <el-popover
                    placement="top"
                    width="160"
                    >
                    <p class="dah_sel">转移</p>
                    <span slot="reference" class="span el-icon-s-fold"></span>
                  </el-popover>
                  <el-popover
                    placement="top"
                    width="160"
                    >
                    <p class="dah_sel">分享</p>
                    <span slot="reference" class="span el-icon-upload2"></span>
                  </el-popover>
                  <el-popover
                    placement="bottom"
                    width="160"
                    >
                    <p class="dah_sel">报告</p>
                    <span slot="reference" class="span" style="border-right:0;">...</span>
                  </el-popover>
                </div>
              </div>
              <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">卖家定价</el-menu-item>
                <el-menu-item index="2">买家报价</el-menu-item>
                <el-menu-item index="3">信息</el-menu-item>
                <el-menu-item index="4">作品介绍</el-menu-item>
                    <!-- <el-popover
                      placement="bottom"
                      width="160"
                      >
                      <p class="dah_sel">关注</p>
                      <p class="dah_sel">隐藏</p>
                      <p class="dah_sel">报价</p>
                      <div slot="reference">更多</div>
                    </el-popover> -->
              </el-menu>
              <div v-if="activeIndex=='1'">
                <el-table
                  :data="tableData"
                  style="width: 100%">
                  <el-table-column
                    prop="date"
                    label="市场"
                    >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="价格"
                    >
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="USD价格">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="过期时间">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="发送方">
                  </el-table-column>
                </el-table>
              </div>
              <div v-if="activeIndex=='2'">
                <el-table
                  :data="tableData"
                  style="width: 100%">
                  <el-table-column
                    prop="name"
                    label="价格"
                    >
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="USD价格">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="过期时间">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="发送方">
                  </el-table-column>
                </el-table>
              </div>
              <ul v-if="activeIndex=='3'" class="ullist">
                <li>
                  <span>合约地址</span>
                  <p>0x0dd5...543a</p>
                </li>
                <li>
                  <span>代币 ID</span>
                  <p>1172</p>
                </li>
                <li>
                  <span>区块链</span>
                  <p>Ethereum</p>
                </li>
                <li>
                  <span>元数据</span>
                  <p>ipfs://QmTn...4/11</p>
                </li>
                <li>
                  <span>创建者地址</span>
                  <p>0x5aa0...3b4d</p>
                </li>
                <li>
                  <span>版税</span>
                  <p>0%</p>
                </li>
              </ul>
              <div v-if="activeIndex=='4'">
                <ol>
                  <li>
                    <div>0.004</div>
                    <div>地板价</div>
                  </li>
                  <li>
                    <div>0.74</div>
                    <div>总交易额</div>
                  </li>
                  <li>
                    <div>2K</div>
                    <div>收藏品</div>
                  </li>
                  <li>
                    <div>1.6K</div>
                    <div>持有者</div>
                  </li>
                </ol>
                <el-button plain style="width:200px;margin:0 auto;">合集报价</el-button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="hr">属性</div>
          <div class="sx_box">
            <div class="sx_list">
              <p>Background</p>
              <div>red</div>
              <div>312 (15%)</div>
            </div>
            <div class="sx_list">
              <p>Body</p>
              <div>black</div>
              <div>1451 (72%)</div>
            </div>
            <div class="sx_list">
              <p>Hat</p>
              <div>assassinheadcovering</div>
              <div>108 (5%)</div>
            </div>
            <div class="sx_list">
              <p>Offhand</p>
              <div>bow</div>
              <div>95 (4%)</div>
            </div>
            <div class="sx_list">
              <p>Pants</p>
              <div>purplepants</div>
              <div>148 (7%)</div>
            </div>
          </div>
        </div>
        <div class="hr" style="position:relative;">交易历史
          <el-select v-model="value1" multiple placeholder="请选择" style="position:absolute;right:20px;top:0px;">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="市场"
            >
          </el-table-column>
          <el-table-column
            prop="date"
            label="事件"
            >
          </el-table-column>
          <el-table-column
            prop="name"
            label="价格"
            >
          </el-table-column>
          <el-table-column
            prop="address"
            label="发送方">
          </el-table-column>
          <el-table-column
            prop="address"
            label="接收方">
          </el-table-column>
          <el-table-column
            prop="address"
            label="日期">
          </el-table-column>
        </el-table>
        <div class="hr">更多藏品</div>
        <div class="con2_sea_result">
          <div class="con2_sea_result_list">
            <el-image src="/elementFang/static/images/login_bg.png" style="height:360px;" />
            <div class="res_name1">Mr.Stick</div>
            <div class="res_name2">Mr.Stick #1172</div>
            <div class="res_name2">0.0045</div>
            <div class="con2_footer_box">
              <div>
                <span class="chushou">立即购买</span>
                <span class="chushou">加入</span>
              </div>
              <span>
                <el-popover
                  placement="bottom"
                  width="150"
                  >
                  <p class="dah_sel">报价</p>
                  <p class="dah_sel">合集报价</p>
                  <p class="dah_sel">复制链接</p>
                  <p class="dah_sel">关注</p>
                  <div slot="reference">...</div>
                </el-popover>
              </span>
            </div>
          </div>
        </div>
        <el-button type="primary" style="width:200px;margin:0 auto 30px;display: block;">查看合集</el-button>
        <!-- 页脚 -->
        <div class="footer_box">Copyright @2021 NFTPro</div>
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
      tableData:[],
      options: [
        {
          value: '1',
          label: '铸造'
        }, 
        {
          value: '2',
          label: '创建'
        }, 
        {
          value: '3',
          label: '售卖'
        }, 
        {
          value: '4',
          label: '转账'
        }, 
        {
          value: '5',
          label: '报价'
        }, 
        {
          value: '6',
          label: '合集报价'
        }, 
        {
          value: '7',
          label: '卖单取消'
        }, 
        {
          value: '8',
          label: '买单取消'
        }, 
      ],
      value1: [],
    };
  },
  mounted() {
  },
  methods: {
    setMenuStatus(){
      this.xy_show = !this.xy_show;
    },
    linkUrl(){
      this.$parent.logApiListShow = false;
      this.$parent.logApiListNumShow = true;
      window.scrollTo(0, 0)
    },
    // 复制
    copyclipboard() {
      clipboard(this.publicKey)
      this.$message.success('复制成功')
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.activeIndex = key
    },
  },
};
</script>

<style scoped>
.pageBox{
  background: #fff;
}
  .con_header{
    position: -webkit-sticky;
    position: sticky;
    top: 61px;
    width: 100%;
    z-index: 50;
    display: flex;
    justify-content: flex-end;
    border-bottom:1px solid #ccc;
    padding: 15px 20px 15px 0;
    background: #fff;
  }
.author_box{
  display: flex;
  /* align-items: center; */
  width: 100%;
}
.des_right_box{
  padding: 0 20px 0 50px;
  width: calc(100% - 524px);
}
.des_right{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.author_name{
  font-size: 16px;
  color: #00926f;
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
.conten_box{
  padding: 0 20px;
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
  height: 33px;
  line-height: 33px;
}
.tab_header .span{
  padding:7px 13px;
  font-size: 18px;
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
 .des_right_box .ullist li{
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  line-height: 50px;
  text-align: left;
  padding-left: 50px;
 }
  .des_right_box .ullist li span{
    width: 200px;
  }
  .des_right_box .ullist li p{
    font-weight: 700;
  }
  .des_right_box ol {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 50px;
    margin: 30px 0;
  }
  /* 表格样式 */
  .hr{
    border-bottom: 1px solid #ccc;
    height: 50px;
    font-size: 16px;
    font-weight: 700;
    line-height: 50px;
  }
  .footer_box{
    background: #141821;
    color: #fff;
    text-align: center;
    line-height: 100px;
  }
  .sx_box{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px 0;
    width: 524px;
  }
  .sx_list{
    background: rgba(247,249,249,.4);
    border: 1px solid rgb(0 146 111 / 30%);
    border-radius: 8px;
    cursor: default;
    height: 80px;
    padding: 9px 12px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .sx_list p{
    color: #00926f;
    font-size: 13px;
    font-weight: 600;
    line-height: 16px;
    margin-bottom: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
   .sx_list div:nth-child(2){
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
   .sx_list div:nth-child(3){
    font-size: 13px;
    font-weight: 800;
    line-height: 17px;
    margin-top: 4px;
    color:#5d656c;
  }
</style>
<style>
.el-button+.el-button{
  margin-left: 0;
}
</style>