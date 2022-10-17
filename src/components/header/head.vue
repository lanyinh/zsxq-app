<template>
  <header>
    <div class="head-left" @click="onHandleGoBackClick"></div>
    <h1 class="head-title">
      {{ headTitle }}
    </h1>
    <div class="head-right"></div>
  </header>
</template>
<script>
export default {
  name: "head",
  data() {
    return {
      headTitle: "首页"
    };
  },
  methods: {
    onHandleGoBackClick() {}
  }
};
</script>
<style></style>
