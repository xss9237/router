<template>
    <h3>Movie组件</h3>
    <hr />
    <router-link to="/movie/tab1">Tab1</router-link>&nbsp;
    <router-link to="/movie/tab2">Tab2</router-link>
    <router-view></router-view>
</template>
<script>
// import Tab1 from './Tabs/Tab1.vue'
// import Tab2 from './Tabs/Tab2.vue'
export default {
  name: 'MyMovie'
}
</script>
<style lang="less" scoped>
</style>