<template>
  <div>
    <main-nav-bar/>
    <swiper :img-array="banner"/>
  </div>
</template>

<script>
import MainNavBar from 'components/content/MainNavBar/MainNavBar';
import {GetHomeMultiData} from 'network/home';
import Swiper from 'components/common/swiper/swiper'

export default {
  name: 'Home',
  data() {
    return {
      recommend: null,
      banner: null,
    }
  },
  components: {
    MainNavBar,
    Swiper
  },
  created() {
    GetHomeMultiData().then(res => {
      this.banner = res.data.data.banner.list;
      this.recommend = res.data.data.recommend.list;
    })
  }
}
</script>

<style>

</style>