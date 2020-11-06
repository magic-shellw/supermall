<template>
  <div id="app">
    <main-nav-bar/>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar/MainTabBar';
import MainNavBar from 'components/content/MainNavBar/MainNavBar';

export default {
  name: 'App',
  components: {
    MainTabBar,
    MainNavBar
  }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
