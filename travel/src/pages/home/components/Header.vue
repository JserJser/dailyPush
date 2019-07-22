<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/游玩主题</div>
      <router-link to="/city">
        <div class="header-right">
          {{this.city}}
            <span class="iconfont arrow-icon">&#xe600;</span>
        </div>
      </router-link>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  // 1rem = html font-size=50px
  name: 'HomeHeader',
  computed: {
    ...mapState(
      [
        'city'
      ]
    )
  },
  props: {
    // city: String
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header
    line-height:$headerHeight
    background:$bgColor
    color:#fff
    display:flex
    .header-left
      width:0.64rem
      float:left
      .back-icon
        text-align:center
        font-size:0.4rem
    .header-input
      margin-top: 0.12rem;
      line-height: 0.64rem;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      margin-bottom: 0.12rem;
      flex: 1;
      background: #fff;
      padding-left: 0.1rem;
      border-radius: 0.1rem;
      color: #ccc;
    .header-right
      min-width:1.04rem
      padding:0 .1rem
      float:right
      text-align:center
      color:#fff
      .arrow-icon
        margin-left:-.04rem
        font-size:.24rem
</style>
