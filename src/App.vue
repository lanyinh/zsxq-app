<template>
  <div id="app">
    <head></head>
    <router-view />
    <foot></foot>
  </div>
</template>

<script>
import head from "@/components/header/head";
import foot from "@/components/foot/foot";
export default {
  components: { head, foot },
  name: "App"
};
</script>

<style lang="less">
@import "./assets/style/common.less";
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}
</style>
