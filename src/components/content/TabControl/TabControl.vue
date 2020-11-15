<template>
  <div class="tab-control">
    <div v-for="(item, index) in title" :key="index" class="tab-control-item" @click="currentIndex = index">
      <span :class="{'tab-active': currentIndex === index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  }
}
</script>

<style>
.tab-control-item{
  height: 40px;
  line-height: 40px;
  text-align: center;
}

.tab-control{
  position: sticky;
  top: 44px;
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  background-color: #FFF;
}

.tab-active{
  padding-bottom: 10px;
  border-bottom: 2px solid rgb(247, 47, 187);
}
</style>