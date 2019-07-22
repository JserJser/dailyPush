<template>
<div>
    <div class="item" v-for="(item,index) of list" :key="index">
        <!-- 渲染最外层数据 -->
        <div class="item-title border-bottom">
            <span class="item-title-icon "></span>
            {{item.title}}
        </div>
        <!-- 如果最外层数据有子数据，就渲染子数据，递归调用本身 -->
        <div v-if="item.children" class="item-children">
            <detail-list :list="item.children"></detail-list>
        </div>
    </div>
</div>
</template>
<script>

export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
.item-title-icon
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
    vertical-align: middle;
.item-title
    line-height:0.8rem
    font-size:.32rem
    padding:0 .2rem
.item-children
    padding-left:0.6rem
</style>
