<template>
  <div id="app">
    <!-- 当前路由地址所对应的内容 -->
  <keep-alive exclude="Detail">
    <!-- 缓存 -->
      <router-view/>
  </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
