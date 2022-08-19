<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "@/assets/css/public.css";
export default {
  name: "App",
  watch: {
    $route: {
      handler: function (n, o) {
        if (n.name.indexOf("pdf") > -1) {
          document.getElementById("body").style = "overflow: hidden;";
        } else {
          document.getElementById("body").style = "overflow: ;";
        }
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style scoped>
#app {
  height: 100%;
}
</style>

<style>
* {
  box-sizing: border-box;
}
</style>