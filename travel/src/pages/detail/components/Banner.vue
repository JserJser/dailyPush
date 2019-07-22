<template>
    <div>
      <div class="banner" @click="handleBannerClick">
          <img :src="bannerImg" alt="" class="banner-img">
          <div class="banner-info">
            <div class="banner-title">
             {{this.sightName}}
            </div>
            <div class="banner-number">
              <span class="iconfont">&#xe758;</span>
              {{this.bannerImgs.length}}
            </div>
        </div>
      </div>
     <fade-animation>
        <common-gallary
        :imgs="bannerImgs"
        v-show="showGallery"
        @close="handlegalleryClose"
      ></common-gallary>
     </fade-animation>
    </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallery: false,
      imgs: [
        // 'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg',
        // 'http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_r_800x800_5f03ad73.jpg'
      ]
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handlegalleryClose () {
      this.showGallery = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner
  overflow:hidden
  height:0
  padding-bottom:55%
  position:relative
  .banner-img{
    width:100%
  }
  .banner-info
    display:flex
    position:absolute
    left:0
    right:0
    bottom:0
    line-height:0.6rem
    background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
    color:#fff
    .banner-title
      flex:1
      font-size:.32rem
      padding:0 .2rem
    .banner-number
      padding:0 .4rem
      height:.32rem
      line-height:.4rem
      margin-top:.24rem
      border-radius:.2rem
      background:rgba(0,0,0,.8)
      font-size:0.24rem
      .iconfont
        font-size:.24rem

</style>
