<template>
   <ul class="list">
       <li class="item"
        v-for="item of letters"
        @click="handleLetterClick"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        :key="item"
        :ref="item"

        >{{item}}</li>
       <!-- <li class="item">B</li>
       <li class="item">C</li>
       <li class="item">D</li>
       <li class="item">E</li>
       <li class="item">F</li>
       <li class="item">G</li> -->
   </ul>
</template>
<script>
import { clearTimeout, setTimeout } from 'timers'
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
      // console.log('e.target.innerText', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // const startY = this.$refs['A'][0].offsetTop
        // console.log(startY)
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor(touchY - this.startY) / 20
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
          console.log(touchY)
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.list
    display:flex
    flex-direction:column
    justify-content:center
    top:1.58rem
    right:0
    bottom:0
    width:.4rem
    position:absolute
    .item
        text-align:center
        line-height:.4rem
        text-align:center
        color:$bgColor
</style>
