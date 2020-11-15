<template>
  <div class="nav-bar-flxed">
    <div class="nav-bar">
      <div class="nav-left">
        <slot name="left"></slot>
      </div>
      <div class="nav-center">
        <slot name="center"></slot>
      </div>
      <div class="nav-right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.nav-bar-flxed{
  width: 100%;
  height: 44px;
}

.nav-bar {
  height: 44px;
  position: fixed;
  z-index: 10000;
  top: 0;
  width: 100%;
}
</style>