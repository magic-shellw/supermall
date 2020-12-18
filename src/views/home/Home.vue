<template>
  <div>
    <main-nav-bar/>
    <swiper :img-array="banner"/>
    <recommend :recommend-data="recommendD" />
    <feature/>
    <tab-control :title="['流行', '新款', '精选']"/>
    <h2>hello</h2>
    <h2>hello</h2>
    <h2>hello</h2>
    <h2>hello</h2>
    <h2>hello</h2>
    <h2>hello</h2>
    <h2>hello</h2>
    <h2>hello</h2>
    <h2>hello</h2>
    <h2>hello</h2>
    <h2>hello</h2>
    <h2>hello</h2>
    <h2>hello</h2>
    <h2>hello</h2>
    <h2>hello</h2>
  </div>
</template>

<script>
import MainNavBar from 'components/content/MainNavBar/MainNavBar';
import Swiper from 'components/common/swiper/swiper';
import Recommend from './childComps/recommend';
import Feature from './childComps/feature';
import TabControl from 'components/content/TabControl/TabControl.vue';

import {GetHomeMultiData} from 'network/home';

export default {
  name: 'Home',
  data() {
    return {
      recommendD: null,
      banner: null,
    }
  },
  components: {
    MainNavBar,
    Swiper,
    Recommend,
    Feature,
    TabControl
  },
  created() {
    GetHomeMultiData().then(res => {
      this.banner = res.data.data.banner.list;
      this.recommendD = res.data.data.recommend.list;
    })
  },
}
</script>

<style>

</style>