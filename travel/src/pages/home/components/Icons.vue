<template>
<div class="icons">
    <swiper :options="swiperOption">
        <!-- 这个是轮播的页数 -->
    <swiper-slide v-for="(page,index) of pages" :key="index">
        <!-- 这个是图标在每一页 -->
    <div class="icon" v-for="item of page" :key="item.id">
        <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="" >
        </div>
        <p class="icon-desc">{{item.desc}}</p>
    </div>
     </swiper-slide>
          <!-- <swiper-slide>
     <div class="icon">
        <div class="icon-img">
            <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="" >
        </div>
        <p class="icon-desc">热门景点</p>
    </div>
      </swiper-slide> -->
    </swiper>

</div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  // data () {
  //   return {
  //     iconList: [{
  //       id: '001',
  //       imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
  //       desc: '景点门票'
  //     }, {
  //       id: '002',
  //       imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
  //       desc: '深圳必游'
  //     }, {
  //       id: '003',
  //       imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
  //       desc: '海洋馆'
  //     }, {
  //       id: '004',
  //       imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/bda58ffc3016edad84e656e8a94b0321.png',
  //       desc: '广州融创'
  //     }, {
  //       id: '005',
  //       imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/cba147cf6cfcea7109d0bff6aac6f626.png',
  //       desc: '深圳动物园'
  //     }, {
  //       id: '006',
  //       imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/a6/6d97515091789602.png',
  //       desc: '世界之窗'
  //     }, {
  //       id: '007',
  //       imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
  //       desc: '东部华侨城'
  //     }, {
  //       id: '008',
  //       imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/a6/6d97515091789602.png',
  //       desc: '世界之窗'
  //     },
  //     {
  //       id: '009',
  //       imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
  //       desc: '深圳必游'
  //     } ]
  //   }
  // },
  computed: {// 自带缓存
    pages () {
      // 对轮播页数的处理 由函数返回来的数据
      const pages = []// 循环的页数
      // 循环项，循环项下标
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)// 当前下标中的数据应该展示在轮播图的第几页
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
    height:0
    padding-bottom:50%
.icons
    margin-top:0.1rem
    .icon
        position:relative
        float:left
        width:25%
        padding-bottom:25%
        overflow:hidden
        height:0
        .icon-img
            position:absolute
            top:0
            left:0
            right:0
            bottom:0.44rem
            box-sizing:border-box
            padding:.1rem
            .icon-img-content
                height:100%
                display:block
                margin:0 auto
        .icon-desc
                position:absolute
                left:0
                right:0
                bottom:0
                height:.44rem
                line-height:.44rem
                color:$darkTextColor
                text-align:center
                ellipsis()

</style>
