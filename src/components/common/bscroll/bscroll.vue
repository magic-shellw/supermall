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
    };
  },
  props: {
    probeType: {
      type: Number,
      deafult: 0,
    },
    pullUpLoad: {
      type: Boolean,
      deafult: false,
    },
  },
  mounted() {
    this.initScroll();
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$refs.scroll, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
      });

      if (this.probeType == 2 || this.probeType == 3) {
        this.scroll.on("scroll", (position) => {
          this.$emit("scroll", position);
        });
      }

      if (this.pullUpLoad == true) {
        this.scroll.on("pullingUp", () => {
          this.$emit("pullUp");
        });
      }
    },

    backTop(x, y, time = 400) {
      this?.scroll.scrollTo(x, y, time);
    },

    finishPullUp() {
      this?.scroll.finishPullUp();
      this?.scroll.refresh();
    },

    btRefresh() {
      this?.scroll.refresh();
    },
  },
};
</script>

<style scoped>
</style>