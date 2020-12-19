<template>
  <div>
    <main-nav-bar/>
    <swiper :img-array="banner"/>
    <recommend :recommend-data="recommendD" />
    <feature/>
    <tab-control :title="tabName" @chooseGoods="chooseGoods"/>
    <goods-list-show :goods="showGoodsType"/>
    <div class="goods-fill"></div>
  </div>
</template>

<script>
import MainNavBar from 'components/content/MainNavBar/MainNavBar';
import Swiper from 'components/common/swiper/swiper';
import Recommend from './childComps/recommend';
import Feature from './childComps/feature';
import TabControl from 'components/content/TabControl/TabControl.vue';
import GoodsListShow from 'components/content/GoodsShow/GoodsListShow.vue'

import {GetHomeMultiData, GetGoodsList} from 'network/home';

export default {
  name: 'Home',
  data() {
    return {
      recommendD: null,
      banner: null,
      goodsType: 'fashion',
      goods: {
        choiceness: {list: [], page: 0},
        new: {list: [], page: 0},
        fashion: {list: [], page: 0},
      },
      tabName: [
        {
          cname: '流行',
          name: 'fashion'
        },
        {
          cname: '新款',
          name: 'new'
        },
        {
          cname: '精选',
          name: 'choiceness'
        }
      ]
    }
  },
  components: {
    MainNavBar,
    Swiper,
    Recommend,
    Feature,
    TabControl,
    GoodsListShow
  },
  created() {
    this.GetHomeMultiData();
    this.GetGoodsList('choiceness');
    this.GetGoodsList('new');
    this.GetGoodsList('fashion');
    },
  methods: {

    /* 网络请求 */

    GetHomeMultiData() {
      GetHomeMultiData().then(res => {
        this.banner = res.data.data.banner.list;
        this.recommendD = res.data.data.recommend.list;
      })
    },
    GetGoodsList(type) {
      let page = this.goods[type].page + 1;
      GetGoodsList(type, page).then(res => {
        this.goods[type].list.push(...res.data);
      });
      this.goods[type].page = page;
    },

    /* 事件监听 */

    chooseGoods(type) {
      this.goodsType = type;
    }
  },
  computed: {
    showGoodsType() {
      return this.goods[this.goodsType].list;
    }
  }
}
</script>

<style>
.goods-fill{
  height: 55px;
  width: 100%;
}
</style>