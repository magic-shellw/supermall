<template>
  <div>
    <keep-alive>
      <router-view />
    </keep-alive>
    <div class="tab">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
.tab {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  height: 49px;
  position: fixed;
  bottom: 0px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0.5px 2px;
}

.bar-text {
  text-align: center;
  font-size: 13px;
}

.bar-img {
  height: 30px;
  width: 30px;
  vertical-align: middle;
}

.img-center {
  text-align: center;
  padding-top: 3px;
}

.active {
  color: #f42;
}
</style>