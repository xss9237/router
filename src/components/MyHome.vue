<template>
    <h3>Home组件</h3>
    <!-- <button class="btn btn-primary" @click="gotoAbout(3)">go to about3</button>&nbsp; -->
    <button class="btn btn-primary">go to about3</button>&nbsp;
    <!-- <router-link :to="{name:'mov',params:{id:3}}">go to about3</router-link> -->
</template>
<script>
export default {
  name: 'MyHome',
  methods: {
    gotoAbout(id) {
      // this.$router.push(`/about/${id}`)
      this.$router.push({ name: 'mov', params: { id: 3 } })
    }
  }
}
</script>
<style lang="less" scoped>
</style>