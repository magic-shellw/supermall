<template>
  <div ref="scroll">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import PullUp from "@better-scroll/pull-up";

BScroll.use(PullUp);

export default {
  name: "bscroll",
  data() {
    return {
      scroll: null,
    }
  },
  props: {
    probeType: {
      type: Number,
      deafult: 0
    }
  },
  mounted() {
    this.initScroll();
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$refs.scroll, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: true,
      });

      this.scroll.on('scrollStart', () => {
        this.scroll.refresh();
      });

      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })
    },
    backTop(x, y, time = 400) {
      this.scroll.scrollTo(x, y, time);
    }
  },
};
</script>

<style scoped>

</style>