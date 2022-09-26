<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// import { reactive, ref } from "@vue/reactivity";

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const status = ref(true)
const obj = reactive({ name: "" })

</script>

<template>
  <div style="w100w flex" justify-between>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="danger">主要按钮</el-button>
    <el-button type="primary" plain>主要按钮</el-button>
    <el-switch v-model="status"></el-switch>
    <svg-icon f30 iconName="icon-feiyongzhongxin-weixin" />
  </div>

  <div class="home-container mt10">
    <div class="home-container__menu">
      <div class="home-container_menu-item--isActive">123</div>
      <div tc1 f30>456</div>
      <div tc2 f100>442342</div>
      <div tc3 f23>2342</div>
      <div tc4>24324</div>
      <div class="container-header"></div>
      <div class="container-body"></div>
    </div>
    <!-- <div class="home-container__header"></div>
    <div class="home-container__body"></div> -->
  </div>
</template>

<style scoped lang="scss">
.home-container {
  width: 100%;
  height: 100vh;
  background: green;

  &__menu {
    background: yellow;
    width: 200px;
    height: 100%;
    overflow-y: scroll;

    &-item {
      color: black;
    }
  }
}
</style>
