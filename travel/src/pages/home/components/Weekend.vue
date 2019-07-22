<template>
<div>
   <div class="recommend-title">周末去哪儿</div>
   <ul>
       <li class="item border-bottom" v-for="item of list" :key="item.id">
           <div class="item-img-wrapper">
                <img  class="item-img" :src="item.imgUrl" alt=""/>
           </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
            </div>
       </li>
   </ul>
</div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
  // data () {
  //   return {
  //     weekendList: [
  //       {
  //         id: '001',
  //         imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
  //         title: '百年康惠保重疾',
  //         desc: '直击市场底价 保障130种高发疾病'
  //       },
  //       {
  //         id: '002',
  //         imgUrl: 'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
  //         title: '百年康惠保重疾',
  //         desc: '直击市场底价 保障130种高发疾病'
  //       },
  //       {
  //         id: '003',
  //         imgUrl: 'http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg',
  //         title: '百年康惠保重疾',
  //         desc: '直击市场底价 保障130种高发疾病'
  //       },
  //       {
  //         id: '004',
  //         imgUrl: 'http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg',
  //         title: '百年康惠保重疾',
  //         desc: '直击市场底价 保障130种高发疾病'
  //       },
  //       {
  //         id: '005',
  //         imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f8/29dfa785277839.jpg_r_640x214_7d051523.jpg',
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
    .item-img-wrapper
        overflow:hidden
        height:0
        padding-bottom:37.09%
        .item-img
            width:100%
    .item-info
        padding:.1rem
        .item-title
            line-height:.54rem
            font-size:.32rem
            ellipsis()
        .item-desc
            line-height:.4rem
            color:#ccc
            ellipsis()

</style>
