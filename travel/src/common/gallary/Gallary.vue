<template>
<div>
    <div class="container">
        <div class="wrapper" @click="handleGalleryClick">
            <swiper :options="swiperOptions">
    <!-- slides -->
    <!-- v-for="item of list" :key="item.id" -->
                <swiper-slide v-for="(item,index) in imgs " :key="index">
                    <img class="gallary-img" :src="item">
                </swiper-slide>
                <div class="swiper-pagination"  ></div>
            </swiper>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'commonGallary',
  props: {
    imgs: {
      type: Array
    //   default () {父组件不传值的时候
    //     return ['http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg',
    //       'http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_r_800x800_5f03ad73.jpg'
    //     ]
    //   }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true

      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container
    overflow:inherit
.container
    display:flex
    flex-direction:column
    justify-content:center
    overflow:hidden
    z-index:99
    position:fixed
    left:0
    right:0
    top:0
    bottom:0
    background:#000
    .wrapper
        width:100%
        height:0
        padding-bottom:100%
        .gallary-img
            width:100%
        .swiper-pagination
            color:#fff
            bottom:-1rem

</style>
