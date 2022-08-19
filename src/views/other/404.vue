<template>
  <div class="pageBox">
    <div class="errImgBox">
      <el-image src="/elementFang/static/images/404.png" />

      <div class="errmsgBox">{{this.$route.params.err}}</div>

      <div class="btnBox">
        <el-button type="primary" @click="gotoIndex()">返回首页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
  data() {
    return {};
  },
  mounted() {
    // 登录信息超时，请重新登录！
    // console.log(this.$route.params.err)
  },
  methods: {
    gotoIndex() {
      this.$router.replace({ name: "index" });
    },
  },
};
</script>

<style scoped>
.errImgBox {
  position: absolute;
  top: calc(50% - 300px);
  left: calc(50% - 219px);
}

.btnBox {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}

.errmsgBox {
  margin-top: 40px;
  font-size: 24px;
  font-weight: "微软雅黑";
  color: #666;
  text-align: center;
}
</style>