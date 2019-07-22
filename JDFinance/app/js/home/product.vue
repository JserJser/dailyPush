<template>
    <Panel title="新品推荐" :class="$style.panel">
        <section :class="$style.content">
            <div class="arrow">更多尖货 ></div>  
            <Slider :options="options" :items="items" cname="product-slider"/>
        </section>
    </Panel>
</template>
<script>
import Panel from  '../core/panel'
import Slider from '../core/slider'
export default {
    components:{
        Panel,
        Slider
    },
    data(){
        return {
            items:[
                {
                    href:"11",
                    src:"//img12.360buyimg.com/jrpmobile/jfs/t1/30149/40/8970/20149/5ca2e84dE7641a4dc/342b926b8582a140.jpg?width=335&height=421"
                },
                {
                    href:"22",
                    src:"//img12.360buyimg.com/jrpmobile/jfs/t1/19514/33/13824/16597/5ca2e84eE4b9cc39a/23b319b8846b585c.png?width=335&height=421"
                },
                {
                    href:"33",
                    src:"//img12.360buyimg.com/jrpmobile/jfs/t1/12202/17/13916/19329/5ca2e84fE6bde713f/ff4f3231eb4c7312.jpg?width=335&height=421"
                }
            ],
            options:{
                // pagination:{
                //     el:".swaiper-pagination",
                //     clickable:true,
                // },
                slidesPerView:2.3,
                spaceBetween:30,
                freeMode:true
            }
        }
    }
}
</script>
<style lang="scss">
    .product-slider{
        .swiper-container{
            box-sizing: border-box;
            padding: 0 24px;
            .swiper-slide{
                a{
                    display: inline-block;
                    width:100%;
                    img{
                        width:100%;
                        display: block;
                        height: 314px;
                        border:1px solid #fafafa;
                    }
                }
            }
        }
    }
</style>
<style lang="scss" module>
 @import "../../css/element.scss";
 .panel{
     @include panel;
     .content{
         padding-bottom: 40px;
         position: relative;
         &>div{
             position: absolute;
             font-size: 28px;
             color: #999;
             right: 20px;
             top:-70px;
         }

     }
 }
</style>