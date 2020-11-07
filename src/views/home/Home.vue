<template>
  <div>
    <main-nav-bar/>
    <h2>你好，我是首页</h2>
  </div>
</template>

<script>
import MainNavBar from 'components/content/MainNavBar/MainNavBar';
import {GetHomeMultiData} from 'network/home'

export default {
  name: 'Home',
  data() {
    return {
      result: null
    }
  },
  components: {
    MainNavBar
  },
  created() {
    GetHomeMultiData().then(res => {
      this.result = res.data.data;
    })
  }
}
</script>

<style>

</style>