<template>
  <div class="recommend">
    <div v-for="recom in recommendData" :key="recom.sort" class="recommend-list">
      <div class="recommend-img">
        <a :href="recom.link">
          <img :src="recom.image" alt="" />
        </a>
      </div>
      <div class="recommend-title">{{ recom.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: { recommendData: Array },
};
</script>

<style>
.recommend {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  height: 120px;
  width: 100%;
  border-bottom: 6px solid #E8E8E8;
}

.recommend-list{
  padding-top: 10px;
}

.recommend-img{
  text-align: center;
}

.recommend-img img {
  height: 70px;
  width: 70px;
  vertical-align: middle;
}

.recommend-title{
  text-align: center;
  margin: 2px;
  color: #4F4F4F;
}
</style>