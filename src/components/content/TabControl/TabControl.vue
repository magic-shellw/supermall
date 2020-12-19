<template>
  <div class="tab-control">
    <div v-for="(item, index) in title" :key="index" class="tab-control-item" @click="showGoods(index, item.name)" >
      <span :class="{'tab-active': currentIndex === index}">{{item.cname}}</span>
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
  },
  methods: {
    showGoods(index, type) {
      this.currentIndex = index;
      this.$emit('chooseGoods', type)
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
  margin-bottom: 10px;
}

.tab-active{
  padding-bottom: 10px;
  border-bottom: 2px solid rgb(247, 47, 187);
}
</style>