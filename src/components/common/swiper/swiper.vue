<template>
  <div class="swiper" @touchstart="move" @touchend="distance">
    <div class="swiper-img">
        <div class="swiper-list"
          v-for="(img, index) in imgArray"
          :key="img.sort" :class="[{'swiper-prev': index == prevIndex}, 
          {'swiper-current': index == currentIndex},
           {'swiper-next': nextIndex == index}]" :z-index="100 - index">
           <a :href="img.link">
          <img :src="img.image" />
           </a>
        </div>
    </div>
    <div class="swiper-slide">
      <span
        v-for="(img, index) in imgArray"
        :key="img.sort"
        @click="changeCurrent(index)"
        :class="['swiper-span', { 'swiper-active': currentIndex == index }]"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "swiper",
  props: {imgArray: Array},
  data() {
    return {
      flipStart: null,
      startPoint: null,
      currentIndex: 0,
      atTime: null,
    };
  },
  methods: {
    play() {
      this.currentIndex < this.imgArray.length - 1
        ? this.currentIndex++
        : (this.currentIndex = 0);
    },
    autoPlay() {
      this.atTime = setInterval(this.play, 5000);
    },
    changeCurrent(index) {
      this.currentIndex = index;
      this.reStartPlay();
    },
    reStartPlay() {
      clearInterval(this.atTime);
      this.autoPlay();
    },
    move(e) {
      this.flipStart = e.changedTouches[0].clientX;
      clearInterval(this.atTime);
    },
    distance(e) {
      let flipEnd = e.changedTouches[0].clientX - this.flipStart;
      if(Math.abs(flipEnd) < 50) {
        return;
      }
      flipEnd > 0 ? (this.currentIndex <= 0 ?
      this.currentIndex = this.imgArray.length -1 : this.currentIndex--) :
      (this.currentIndex >= this.imgArray.length -1 ?
      this.currentIndex = 0 :this.currentIndex++);
      this.autoPlay();
    }
  },
  mounted() {
    this.autoPlay();
  },
  computed: {
    nextIndex() {
      return this.currentIndex >= this.imgArray.length - 1
        ? 0
        : this.currentIndex + 1;
    },
    prevIndex() {
      return this.currentIndex <= 0
        ? this.imgArray.length - 1
        : this.currentIndex - 1;
    },
  },
};
</script>

<style>
.swiper {
  height: 180px;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.swiper-img {
  font-size: 0px;
  width: 100%
}

.swiper-list {
  position: absolute;
  transform: translate(100%, 0);
  transition-duration: 500ms;
}


.swiper-current{
  transform: translate(0, 0);
  z-index: 1000;
}

.swiper-prev{
  transform: translate(-100%, 0);
  z-index: 5;
}

.swiper-next{
  transform: translate(100%, 0);
  z-index: 5;
}

.swiper-img img {
  height: 180px;
  width: 100%;
}

.swiper-slide {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0px;
  z-index: 5000;
}

.swiper-span {
  display: inline-block;
  height: 8px;
  width: 8px;
  margin: 2px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
}

.swiper-active {
  background-color: rgb(241, 17, 122);
}
</style>