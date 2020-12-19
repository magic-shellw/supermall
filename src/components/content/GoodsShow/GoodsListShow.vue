<template>
  <div class="goods-show">
    <goods-list-item v-for="item in goods" :goods-item="item" :key="item.cfavt"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue';

export default {
  name: 'GoodsListShow',
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      deafult() {
        return []
      }
    }
  }
}
</script>

<style>
.goods-show{
  display: grid;
  grid-template-columns: repeat(2, 48%);
  justify-content: space-around;
  row-gap: 10px;
  overflow: hidden;
  width: 100%;
}

.goods-item{
  height: 260px;
  border: .5px solid rgb(167, 159, 159);
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
}
</style>