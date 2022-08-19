<template>
  <div class="pageBox">
    <div class="con_botBox">
      <div class="condeserBox">
        <div class="con_headerBox">
          <span class="el-icon-arrow-left" @click="linkUrl"></span>
          <div>
            <div class="title_name1">跨市场上架</div>
            <div class="title_name2">选择NFT交易市场并为每个挂单定价</div>
          </div>
        </div>
        <div class="conten_box">
          <div class="sea_box">
            <div>
              <div class="title_name3">NFT市场</div>
              <div>
                <el-button plain style="width:150px;">Element</el-button>
                <el-button plain style="width:150px;">Opensea</el-button>
                <el-button plain style="width:150px;">LooksRare</el-button>
                <el-button plain style="width:150px;">X2Y2</el-button>
              </div>
            </div>
            <div>
              <div class="title_name3">期限</div>
              <el-select v-model="value1" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div>
            <div class="des_right_box">
              <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">挂单</el-menu-item>
                <el-menu-item index="2">已上架</el-menu-item>
              </el-menu>
              <div class="kg_box" v-show="activeIndex == '1'">
                <span>相同价格</span>
                <el-switch v-model="xy_show" active-color="#0065b5" inactive-color="#ccc"></el-switch>
                <el-input style="width:150px;margin-left:20px;" v-model="name" placeholder="价格" v-show="xy_show && activeIndex == '1'"/>
              </div>
            </div>
            <div v-if="activeIndex=='1'">
              <el-table
                :data="tableData"
                :span-method="objectSpanMethod"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="收藏品"
                  >
                  <template slot-scope="scope">
                    <div>
                      <el-image :src="scope.row.img" style="width:50px;height:50px;" />
                      <div>{{scope.row.name}}</div>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="sc"
                  label="市场"
                  >
                </el-table-column>
                <el-table-column
                  prop="sjjg"
                  label="上架价格">
                  <template slot="scope">
                    
                  </template>
                </el-table-column>
                <el-table-column
                  prop="sccj"
                  label="上次成交">
                </el-table-column>
                <el-table-column
                  prop="ptf"
                  label="平台费">
                </el-table-column>
                <el-table-column
                  prop="bf"
                  label="版税">
                </el-table-column>
                <el-table-column
                  prop="yqlr"
                  label="预期利润">
                </el-table-column>
              </el-table>
            </div>
            <div v-if="activeIndex=='2'">
              <el-table
                :data="tableData2"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="收藏品"
                  >
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="市场"
                  >
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="上架价格">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="上次成交">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="平台费">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="版税">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="预期利润">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
      <div class="con3">
        <div class="con3_not1">
          <span class="title_name3">总结</span>
        </div>
        <div class="con3_not2">
          <div class="divv div1">
            <span><i class="el-icon-present"></i>平台费</span>
            <span>0</span>
          </div>
          <div class="divv div2">
            <span>预期最大限度</span>
            <span>$0</span>
          </div>
          <div class="divv div1">
            <span><i class="el-icon-s-marketing"></i>创作者版税</span>
            <span>0</span>
          </div>
          <div class="divv div2">
            <span>预期最大限度</span>
            <span>$0</span>
          </div>
        </div>
        <div class="con3_not3">
          <div class="divv div1">
            <span class="title_name3">总利润</span>
            <span class="title_name3">0</span>
          </div>
          <div class="divv div2" style="margin-left:0;">
            <span>预估减去所有费用</span>
            <span>$0</span>
          </div>
          <el-button type="primary" disabled style="width:290px;margin-left:20px;">价格设定</el-button>
        </div>
      </div>
    </div>
    <!-- 页脚 -->
    <div class="footer_box">Copyright @2021 NFTPro</div>
  </div>
</template>

<script>
export default {
  name: "upload",
  props: ['visibleShow'],
  data() {
    return {
      xy_show:false,
      zk_show:true,
      check_show:false,
      conShow:false,
      publicKey:'0x96d931109d9d220384c6f841be7350e2abb99e09',
      activeIndex:'1',
      tableData:[
        {
          name:'Mr.Stick',
          img:'/elementFang/static/images/login_bg.png',
          sc:'Element',
          sjjg:'地板价:0.4',
          sccj:'--',
          ptf:'0%',
          bf:'0%',
          yqlr:'--',
        },
        {
          sc:'Opensea',
          sjjg:'',
          sccj:'--',
          ptf:'--%',
          bf:'--%',
          yqlr:'--',
        },
        {
          sc:'LooksRare',
          sjjg:'',
          sccj:'--',
          ptf:'2%',
          bf:'0%',
          yqlr:'--',
        }
      ],
      tableData2:[],
      options: [
        {
          value: '1',
          label: '1小时'
        }, 
        {
          value: '2',
          label: '12小时'
        }, 
        {
          value: '3',
          label: '1天'
        }, 
        {
          value: '4',
          label: '3天'
        }, 
        {
          value: '5',
          label: '7天'
        }, 
        {
          value: '6',
          label: '1个月'
        }, 
        {
          value: '7',
          label: '3个月'
        }, 
        {
          value: '8',
          label: '6个月'
        }, 
      ],
      value1: [],
      name:'',
    };
  },
  mounted() {
    
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.activeIndex = key
    },
    linkUrl(){
      this.$parent.logApiListShow = true;
      this.$parent.logApiListNumShow=false;
      window.scrollTo(0, 0)
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex === 0) {
            return {
              rowspan: 3,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
    }
  },
};
</script>

<style scoped>
.pageBox{
  background: #fff;
}
.con_botBox{
  display: flex;
  align-content: flex-start;
  min-height: calc(100vh - 160px);
}
.condeserBox{
  width: calc(100% - 332px);
  border-right: 1px solid #e7e5ea;
  padding: 0 20px;
}
.con3{
  width: 332px;
}
.con3_not1{
  /* margin-bottom: 24px; */
  padding: 20px 10px 24px;
}
.con3_not3{
  border-top: 1px solid #e7e5ea;
  padding-top: 20px;
}
.divv{
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
}
.div1 span{
  font-size: 16px;
  font-weight: 700;
  /* line-height: 22px; */
  display: flex;
  align-items: center;
}
.div1 span i{
  font-size: 22px;
  font-weight: 400;
  margin-right: 10px;
}
.div2{
  color: #5d656c;
  font-size: 12px;
  line-height: 18px;
  /* margin-top: 2px;
  margin-left: 32px; */
  margin:2px 0 20px 32px;
}
/* 开始 */
.con_headerBox{
  display: flex;
  align-items: center;
  padding: 30px 0;
}
.con_headerBox span{
  font-size: 32px;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border:1px solid #e7e5ea;
  text-align: center;
  line-height: 48px;
  margin-right: 30px;
  cursor: pointer;
}
.title_name1{
    font-size: 36px;
    font-weight: 700;
    line-height: 48px;
}
.title_name2{
    color: #5d656c;
    font-size: 16px;
    line-height: 16px;
    margin-top: 4px;
}
.title_name3{
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 16px;
}
.sea_box{
  display: flex;
  align-items:center;
  justify-content: space-between;
  border-bottom: 1px solid #e7e5ea;
  padding-bottom: 20px;
}
.kg_box{
  position: absolute;
  top:10px;
  left: 200px;
  width: 300px;
  display: flex;
  align-items: center;
  height: 40px;
}
.kg_box span{
  margin-right: 10px;
}
.des_right_box{
  position: relative;
  border-bottom: 1px solid #e7e5ea;
  margin-bottom: 10px;
}
/* 结束 */
.footer_box{
  background: #141821;
  color: #fff;
  text-align: center;
  line-height: 100px;
} 
</style>
<style>
.el-button+.el-button{
  margin-left: 0;
}
</style>