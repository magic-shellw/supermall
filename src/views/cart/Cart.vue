<template>
  <div class="container" ref="BScroll">
    <div>
      <test/>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';
import Pullup from '@better-scroll/pull-up'

import test from './test'

BScroll.use(Pullup);

export default {
  name: 'Cart',
  data() {
    return {
    }
  },
  methods: {
    init() {
      this.bscroll = new BScroll(this.$refs.BScroll, {
        probeType: 3,
        pullUpLoad: true,
        click: true
      });

      this.bscroll.on('scroll', (position) => {
        //console.log(position);
      });

      this.bscroll.on('scrollEnd', () => {
        console.log('end')
      });

      this.bscroll.on('pullingUp', () => {
        console.log('滑动结束');
        this.bscroll.finishPullUp();
      })
    },
    say() {
      console.log('hello');
    }
  },
  mounted() {
    this.init();
  },
  components: {
    test,
  }
}
</script>

<style scoped>
.container{
  height: 400px;
  overflow: hidden;
}
</style>