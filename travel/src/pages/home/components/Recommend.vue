<template>
<div>
   <div class="recommend-title">热销推荐</div>
   <ul>
        <router-link
            class="item border-bottom"
            v-for="item of list"
            :key="item.id"
            tag="li"
            :to="'/detail/'+item.id"
        >
            <img  class="item-img" :src="item.imgUrl" alt=""/>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
       </router-link>
   </ul>
</div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
  // data () {
  //   return {
  //     recommendList: [
  //       {
  //         id: '001',
  //         imgUrl: 'https://cdn.11bee.com/large_product_pic/0908_ZJ5301QZ5302_large_product_abbreviatedPic.jpg',
  //         title: '百年康惠保重疾',
  //         desc: '直击市场底价 保障130种高发疾病'
  //       },
  //       {
  //         id: '002',
  //         imgUrl: 'https://cdn.11bee.com/large_product_pic/0908_ZJ5301QZ5302_large_product_abbreviatedPic.jpg',
  //         title: '百年康惠保重疾',
  //         desc: '直击市场底价 保障130种高发疾病'
  //       },
  //       {
  //         id: '003',
  //         imgUrl: 'https://cdn.11bee.com/large_product_pic/0908_ZJ5301QZ5302_large_product_abbreviatedPic.jpg',
  //         title: '百年康惠保重疾',
  //         desc: '直击市场底价 保障130种高发疾病'
  //       },
  //       {
  //         id: '004',
  //         imgUrl: 'https://cdn.11bee.com/large_product_pic/0908_ZJ5301QZ5302_large_product_abbreviatedPic.jpg',
  //         title: '百年康惠保重疾',
  //         desc: '直击市场底价 保障130种高发疾病'
  //       },
  //       {
  //         id: '005',
  //         imgUrl: 'https://cdn.11bee.com/large_product_pic/0908_ZJ5301QZ5302_large_product_abbreviatedPic.jpg',
  //         title: '百年康惠保重疾',
  //         desc: '直击市场底价 保障130种高发疾病'
  //       }
  //     ]
  //   }
  // }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';
.recommend-title
    margin-top:.2rem
    line-height:.8rem
    background:#eee
    text-indent:.2rem
 .item
    overflow:hidden
    display:flex
    height:1.9rem
    .item-img
        width:1.7rem
        height:1.7rem
        padding:.1rem
    .item-info
        flex:1
        padding:.1rem
        min-width:0
        .item-title
            line-height:.54rem
            font-size:.32rem
            ellipsis()
        .item-desc
            line-height:.4rem
            color:#ccc
            ellipsis()
        .item-button
            margin-top:.16rem
            background:#ff9300
            padding:0 .2rem
            border-radius:.06rem
            line-height:.44rem

</style>
