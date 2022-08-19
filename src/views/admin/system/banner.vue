<template>
  <div class="pageBox">
    <div class="brand-banner">
      <div class="brand-banner-content">
        <div class="logo_name1">专业的<br/>全网聚合交易市场</div>
        <div class="logo_name2">聚合主流市场，专业工具。</div>
        <ul>
          <li>
            <div class="span"></div>
            <div class="logo_name">Ethereum</div>
          </li>
          <li>
            <div class="span"></div>
            <div class="logo_name">BNB Chain GameFi Launchpad 🚀</div>
          </li>
          <li>
            <div class="span"></div>
            <div class="logo_name">Polygon</div>
          </li>
          <li>
            <div class="span"></div>
            <div class="logo_name">Avalanche</div>
          </li>
          <li>
            <div class="span"></div>
            <div class="logo_name">Solana</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="brand-banner2">
      <div class="logo_name3">跨市场<span>买卖</span>不会错过任意一笔交易机会，为你节省<span>Gas</span></div>
      <ul>
        <li>
          <span class="el-icon-check"></span>
          <div class="li_num">
            <div class="li_name">真正的流动性</div>
            <span>=</span>
            <div class="des">
              <div>聚合主流市场流动性</div>
              <div>+</div>
              <div>跨市场挂单</div>
            </div>
          </div>
        </li>
        <li>
          <span class="el-icon-check"></span>
          <div class="li_num">
            <div class="li_name">专业功能</div>
            <span>=</span>
            <div class="des">
              <div>优化的智能合约</div>
              <div>+</div>
              <div>批量挂单及取消</div>
            </div>
          </div>
        </li>
        <li>
          <span class="el-icon-check"></span>
          <div class="li_num">
            <div class="li_name">最低交易成本</div>
            <span>=</span>
            <div class="des">
              <div>业界最低交易费</div>
              <div>+</div>
              <div>交易奖励</div>
            </div>
          </div>
        </li>
        <li>
          <span class="el-icon-check"></span>
          <div class="li_num">
            <div class="li_name">强大的工具集</div>
            <span>=</span>
            <div class="des">
              <div>合集Offer</div>
              <div>+</div>
              <div>混合支付/稀有度排名</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="brand-banner3">
      <div class="logo_name4">路线图</div>
      <div class="logo_name5">我们的目标是建立为用户提供一个功能更全的一体化市场，具有最佳的交易体验和最低的进入门槛。</div>
      <ul>
        <li>
            <div class="span_1">阶段1</div>
            <div class="span_2">协议</div>
            <div class="span_des">以太坊交易NFT<br/>无Gas费铸造<br/>拍卖</div>
            <div class="span_tu"></div>
        </li>
        <li>
            <div class="span_1">阶段2</div>
            <div class="span_2">多链</div>
            <div class="span_des">交易BNB Chain资产<br/>交易Polygon资产<br/>LaunchPad及盲盒</div>
            <div class="span_tu"></div>
        </li>
        <li>
            <div class="span_1">阶段3</div>
            <div class="span_2">聚合器</div>
            <div class="span_des">聚合多交易市场<br/>Gas费优化<br/>交易工具集上线</div>
            <div class="span_tu"></div>
        </li>
        <li>
            <div class="span_1">阶段4</div>
            <div class="span_2">奖励</div>
            <div class="span_des">空投<br/>交易奖励<br/>质押</div>
            <div class="span_tu"></div>
        </li>
        <li>
            <div class="span_1">阶段5</div>
            <div class="span_2">DAO</div>
            <div class="span_des">社区治理<br/>NPRToken</div>
            <div class="span_tu"></div>
        </li>
      </ul>
    </div>
    <div class="brand-banner4">
      <div>
        <div class="logo_name6">成为<span>合作伙伴</span><br/>并<span>加速</span>项目发展</div>
        <div class="logo_name7">NFTPro为合作伙伴提供专属页面、收藏认证和启动平台服务，以促进项目开发和参与。</div>
      </div>
    </div>
    <!-- 页脚 -->
    <div class="footer_box">Copyright @2021 NFTPro</div>
  </div>
</template>

<script>

export default {
  name: "admin_sys_banner",
  props: ['visibleShow'],
  data() {
    return {
      
    };
  },
  mounted() {
  },
  methods: {
    
  },
};
</script>

<style scoped>
.brand-banner {
    align-items: center;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(100vh - 72px);
    min-height: 644px;
    width: 100%;
}

.logo_name1{
  font-size: 68px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 84px;
  margin-bottom: 32px;
  text-align: center;
}

.logo_name2{
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 48px;
    margin-bottom: 86px;
    text-align: center;
}
.logo_name3{
  font-size: 60px;
  font-weight: 700;
  text-align: left;
  color: #fff;
  /* width: 40%; */
  margin-right: 50px;
}
.logo_name3 span{
  color: #04c367;
}
.brand-banner-content ul {
  align-items: center;
  display: flex;
  justify-content: space-around;
}
.brand-banner-content ul li{
  background-size: 200% 200%;
  border-radius: 16px;
  cursor: pointer;
  flex-direction: column;
  height: 280px;
  justify-content: space-between;
  padding: 56px 0 30px;
  width: 230px;
  color: #fff;
  margin: 0 12px;
  transition: all .05s ease-in;
  text-align: center;
}
.brand-banner-content ul li:hover{
  background-position: bottom;
    transform: scale(1.08)
}
.brand-banner-content ul li:nth-child(1){
  background-image: linear-gradient(to bottom right,#221b99,#4c42ff 51%,#221b99);
}
.brand-banner-content ul li:nth-child(2){
      background-image: linear-gradient(to bottom right,#efb600,#ffdb67 51%,#efb600);
}
.brand-banner-content ul li:nth-child(3){
  background-image: linear-gradient(to bottom right,#eac9ff,#f4e1ff 51%,#eac9ff);
}
.brand-banner-content ul li:nth-child(4){
  background-image: linear-gradient(to bottom right,#ff4651,#ff4651 51%,#ff4651);;
}
.brand-banner-content ul li:nth-child(5){
  background-image: linear-gradient(to bottom right,#0f1117,#2b2f33 51%,#0f1117);
}
.brand-banner2{
    align-items: center;
    background: #000;
    display: flex;
    height: calc(100vh - 72px);
    min-height: 644px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
.brand-banner2 ul{
  width: 85%;
}
.brand-banner2 ul li{
  width: 100%;
}
.brand-banner2 ul li,.li_num{
  display: flex;
  align-items: center;
  color: #fff;
}
.li_num{
  border-bottom: 1px solid #fff;
  margin-left: 20px;
  width: 435px;
  padding: 20px 0;
}
.li_name{
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    width: 258px;
}
.des{
    line-height: 22px;
    margin-left: 20px;
}
.brand-banner3{
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #04c367;
    height: calc(100vh - 72px);
    min-height: 644px;
    width: 100%;
}
.logo_name4{
  font-size: 60px;
  font-weight: 700;
  line-height: 73px;
  margin-bottom: 17px;
  text-align: left;
  width: 744px;
}
.logo_name5{
  font-size: 24px;
  line-height: 32px;
  text-align: left;
  width: 744px;
}
.brand-banner3 ul{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 80px;
}
.brand-banner3 ul li {
    height: 320px;
    width: 208px;
    display: flex;
    flex-direction: column;
    transition: all .1s ease-in;
    padding: 10px;
    border-radius: 16px;
    background-color: #fff;
    text-align: left;
    cursor: pointer;
}
.brand-banner3 ul li:hover {
    transform: translateY(-24px);
}
.span_1{
    color: #050505;
    font-size: 20px;
    font-weight: 700;
    line-height: 40px;
    margin-top: 20px;
}
.span_2{
    color: #050505;
    font-size: 28px;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 20px;
}
.span_des{
      color: #2b2f33;
    font-size: 14px;
    line-height: 32px;
    margin-bottom: 7px;
}
.brand-banner4{
    align-items: center;
    display: flex;
    height: calc(100vh - 72px);
    justify-content: space-between;
    min-height: 644px;
    overflow: hidden;
    padding: 0;
    position: relative;
    width: 100%;
    padding: 0 20px;
}
.logo_name6{
    color: #000;
    font-size: 60px;
    font-weight: 700;
    line-height: 60px;
    margin-bottom: 32px;
    text-align: left;
}
.logo_name6 span{
  color: #02bc62;
}
.logo_name7{
    color: #000;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 56px;
    max-width: 530px;
    text-align: left;
}
.footer_box{
  background: #141821;
  color: #fff;
  text-align: center;
  line-height: 100px;
}
</style>