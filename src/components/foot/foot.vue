<template>
  <!-- 底部导航 -->
  <div class="mainFooter">
    <div
      @click="checkItem('1')"
      class="footer-item"
      :class="{ 'fonter-Item-active': selectedTab == '1' }"
    >
      <img
        class="menuIcon"
        v-if="selectedTab != '1'"
        src="../../assets/image/menu/homeIcon.png"
      />
      <img
        class="menuIcon"
        v-if="selectedTab == '1'"
        src="../../assets/image/menu/homeIcon-active.png"
      />
      <div class="menuText">
        星球
      </div>
    </div>
    <div
      @click="checkItem('2')"
      class="footer-item"
      :class="{ 'fonter-Item-active': selectedTab == '2' }"
    >
      <img
        class="menuIcon"
        v-if="selectedTab != '2'"
        src="../../assets/image/menu/messageIcon.png"
      />
      <img
        class="menuIcon"
        v-if="selectedTab == '2'"
        src="../../assets/image/menu/messageIcon-active.png"
      />
      <div class="menuText">
        动态
      </div>
    </div>
    <div
      @click="checkItem('3')"
      class="footer-item"
      :class="{ 'fonter-Item-active': selectedTab == '3' }"
    >
      <img
        class="menuIcon"
        v-if="selectedTab != '3'"
        src="../../assets/image/menu/foundIcon.png"
      />
      <img
        class="menuIcon"
        v-if="selectedTab == '3'"
        src="../../assets/image/menu/foundIcon-active.png"
      />
      <div class="menuText">
        发现
      </div>
    </div>
    <div
      @click="checkItem('4')"
      class="footer-item"
      :class="{ 'fonter-Item-active': selectedTab == '4' }"
    >
      <img
        class="menuIcon"
        v-if="selectedTab != '4'"
        src="../../assets/image/menu/myIcon.png"
      />
      <img
        class="menuIcon"
        v-if="selectedTab == '4'"
        src="../../assets/image/menu/myIcon-active.png"
      />
      <div class="menuText">
        我的
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedTab: 1
    };
  },
  methods: {
    checkItem(tab) {
      this.selectedTab = tab;
      console.log(this.selectedTab);
    }
  }
};
</script>
<style></style>
