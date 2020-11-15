<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <template #title>
          <div class="bar-text">首页</div>
        </template>
        <template #img>
          <div class="img-center">
            <img class="bar-img" src="~img/tabbar/home.png" alt="" />
          </div>
        </template>
        <template #img-active>
          <div class="img-center">
            <img class="bar-img" src="~img/tabbar/home_active.png" alt="" />
          </div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/category">
        <template #title>
          <div class="bar-text">分类</div>
        </template>
        <template #img>
          <div class="img-center">
            <img class="bar-img" src="~img/tabbar/category.png" />
          </div>
        </template>
        <template #img-active>
          <div class="img-center">
            <img class="bar-img" src="~img/tabbar/category_active.png" />
          </div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/cart">
        <template #title>
          <div class="bar-text">购物车</div>
        </template>
        <template #img>
          <div class="img-center">
            <img class="bar-img" src="~img/tabbar/cart.png" />
          </div>
        </template>
        <template #img-active>
          <div class="img-center">
            <img class="bar-img" src="~img/tabbar/cart_active.png" />
          </div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/profile">
        <template #title>
          <div class="bar-text">个人</div>
        </template>
        <template #img>
          <div class="img-center">
            <img class="bar-img" src="~img/tabbar/profile.png" alt="" />
          </div>
        </template>
        <template #img-active>
          <div class="img-center">
            <img class="bar-img" src="~img/tabbar/profile_active.png"/>
          </div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem"

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  },
};
</script>

<style>
  .tab{
    z-index: 50;
  }
</style>