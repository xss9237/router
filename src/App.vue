<template>
    <h1>APP根组件</h1>
    <hr />
    <router-link to="/home">首页</router-link>&nbsp;
    <router-link to="/movie">电影</router-link>&nbsp;
    <router-link to="/about/1">关于1</router-link>&nbsp;
    <router-link to="/about/2">关于2</router-link>&nbsp;
    <router-link to="/about/3">关于3</router-link>
    <router-view></router-view>
</template>

<script>
import MyHome from './components/MyHome.vue'
import MyMovie from './components/MyMovie.vue'
import MyAbout from './components/MyAbout.vue'

export default {
  name: 'App',
  components: {
    MyHome,
    MyMovie,
    MyAbout
  }
}
</script>
<style lang="less" scoped>
</style>
