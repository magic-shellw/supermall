<template>
  <div>
    <router-view/>
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
@import 'css/base.css';
</style>