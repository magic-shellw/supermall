<template>
  <div class="home">
    <main-nav-bar />
    <bt-scroll
      class="wrapper"
      ref="btscroll"
      @scroll="isShowBT"
      :probe-type="3"
      :pull-up-load="true"
      @pullUp="loadMore"
    >
      <swiper :img-array="banner" />
      <recommend :recommend-data="recommendD" />
      <feature />
      <tab-control :title="tabName" @chooseGoods="chooseGoods" />
      <goods-list-show :goods="showGoodsType" />
    </bt-scroll>
    <back-top v-show="isShow" @click.native="backTop" />
  </div>
</template>

<script>
import MainNavBar from "components/content/MainNavBar/MainNavBar";
import Swiper from "components/common/swiper/swiper";
import Recommend from "./childComps/recommend";
import Feature from "./childComps/feature";
import TabControl from "components/content/TabControl/TabControl.vue";
import GoodsListShow from "components/content/GoodsShow/GoodsListShow.vue";
import BtScroll from "components/common/bscroll/bscroll.vue";
import BackTop from "components/content/BackTop/BackTop.vue";

import { GetHomeMultiData, GetGoodsList } from "network/home";

import {debounce} from "common/utils.js";

export default {
  name: "Home",
  data() {
    return {
      recommendD: null,
      banner: null,
      goodsType: "fashion",
      goods: {
        choiceness: { list: [], page: 0 },
        new: { list: [], page: 0 },
        fashion: { list: [], page: 0 },
      },
      tabName: [
        {
          cname: "流行",
          name: "fashion",
        },
        {
          cname: "新款",
          name: "new",
        },
        {
          cname: "精选",
          name: "choiceness",
        },
      ],
      isShow: false,
    };
  },
  components: {
    MainNavBar,
    Swiper,
    Recommend,
    Feature,
    TabControl,
    GoodsListShow,
    BtScroll,
    BackTop,
  },
  created() {
    this.GetHomeMultiData();
    this.GetGoodsList("choiceness");
    this.GetGoodsList("fashion");
    this.GetGoodsList("new");
  },
  mounted() {
    const refresh = debounce(this.$refs.btscroll.btRefresh, 50)
    //事件总线解决BetterScroll中的图片异步请求Bug
    this.$bus.$on("ItemImgLoad", () => {
      refresh();
    });
  },

  //通过Vue声明周期函数updated数据更新解决betterscorll bug 效率更高
  /* updated() {
    this.$refs.btscroll.scroll.refresh();
  }, */
  methods: {
    /* 网络请求 */

    GetHomeMultiData() {
      GetHomeMultiData().then((res) => {
        this.banner = res.data.data.banner.list;
        this.recommendD = res.data.data.recommend.list;
      });
    },
    GetGoodsList(type) {
      let page = this.goods[type].page + 1;
      GetGoodsList(type, page).then((res) => {
        this.goods[type].list.push(...res.data);
      });
      this.goods[type].page = page;
    },


    /* 事件监听 */

    chooseGoods(type) {
      this.goodsType = type;
    },
    backTop() {
      this.$refs.btscroll.backTop(0, 0);
    },
    isShowBT({ y }) {
      this.isShow = Math.abs(y) > 500;
    },
    loadMore() {
      this.GetGoodsList(this.goodsType);
      this.$refs.btscroll.finishPullUp();
    },
  },
  computed: {
    showGoodsType() {
      return this.goods[this.goodsType].list;
    },
  },
};
</script>

<style>
.home {
  height: 100vh;
}

.wrapper {
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>