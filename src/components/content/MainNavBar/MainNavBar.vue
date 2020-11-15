<template>
  <div>
    <nav-bar>
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../common/navbar/NavBar'

export default {
  name: 'MainNavBar',
  components: {
    NavBar
  }
}
</script>

<style>
  .nav-bar{
    background-color: rgb(248, 21, 127);
    display: grid;
    grid-template-columns: 60px auto 60px;
  }

  .nav-center{
    color: #fff;
    text-align: center;
    line-height: 44px;
    font-size: 1.2rem;
  }

</style>