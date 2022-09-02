<template>
    <h3>About组件----{{id}}</h3>
    <button class="btn btn-primary" @click="goBack">后退</button>
</template>
<script>
export default {
  name: 'MyAbout',
  props: ['id'],
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
</style>