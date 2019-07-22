<template>
<div>
    <div class="search">
        <input type="text"
        v-model="keyword"
        class="search-input"
        placeholder="请输入城市名或拼音">
    </div>
    <div class="search-content"
    ref="search"
    v-show="keyword"
    >
        <ul>
            <li
            :key="item.id"
            v-for="item of list"
            @click="handleCityClick(item.name)"
            class="search-item border-bottom">
                {{item.name}}
            </li>
            <li
             class="search-item border-bottom"
             v-show="!list.length"
            >
            没有找到匹配数据
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import { clearTimeout, setTimeout } from 'timers'
import {mapMutations} from 'vuex'
// 解决搜索框内容不能滚动
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
    //   this.$store.dispatch('changeCity', city)
      this.$store.commit('changeCity', city)
      this.$router.push('/')

    //   alert(city)
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.search
    height:.72rem
    background:$bgColor
    padding:0 .1rem
    .search-input
        box-sizing:border-box
        height:.62rem
        width:100%
        line-height:.62rem
        text-align:center
        border-radius:.06rem
        color:#666
.search-content
    z-index:1
    overflow:hidden
    position:absolute
    top:1.58rem
    left:0
    right:0
    bottom:0
    background:#eee
    .search-item
        line-height:.62rem
        padding-left:.2rem
        background:#fff
        color:#666

</style>
