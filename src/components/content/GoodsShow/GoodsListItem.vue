<template>
  <div>
    <a href="javscript:;" class="goods-link">
      <div class="goods-item">
        <img :src="goodsItem.img" alt="" class="goods-img" />
        <div class="goods-title">{{ goodsItem.title }}</div>
        <span class="goods-price">￥{{ goodsItem.price }}</span>
        <span class="goods-cfavt"
          ><img src="~assets/img/common/favor.png" alt=""  @click.stop="say" />{{
            goodsItem.cfvt
          }}</span
        >
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      deafult() {
        return {};
      },
    },
  },
  methods: {
    say() {
      console.log('收藏');
    }
  }
};
</script>

<style>
.goods-img {
  height: 171px;
  width: 171px;
  vertical-align: middle;
}

.goods-price {
  color: #ff5500;
  margin-right: 10px;
}

.goods-cfavt {
  font-size: 10px;
  color: #999999;
}

.goods-cfavt img {
  height: 15px;
  width: 15px;
  position: relative;
  top: 3px;
  z-index: -100;
}

.goods-title {
  margin: 5px 0;
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.goods-link {
  text-decoration: none;
}
</style>