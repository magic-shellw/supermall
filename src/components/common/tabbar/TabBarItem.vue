<template>
  <div @click="NavClick" :class="{'active': IsActive}">
    <slot v-if="IsActive" name="img-active"></slot>
    <slot v-else name="img"></slot>
    <slot name="title"></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: ['path'],
  methods: {
    NavClick() {
      this.$router.push(this.path);
    }
  },
  computed: {
    IsActive() {
      return this.$route.path == this.path;
    }
  }
}
</script>

<style>

</style>