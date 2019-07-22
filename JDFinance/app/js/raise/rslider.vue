<template>
    <Panel title="轮播组件" :class="$style.panel">
        <section :class="$style.content">
            <swiper :options="options">
                <swiper-slide>
                    百万白条券免费送，速来领取
                </swiper-slide>
                  <swiper-slide>
                    签到领流量，1元500M<em>></em>
                </swiper-slide>
                  <swiper-slide>
                    百万白条券免费送，1元500M<em>></em>
                </swiper-slide>
            </swiper>
        </section>
    </Panel>
</template>
<script>
import Panel from "../core/panel"
// import Slider from '../core/slider'
import {swiper,swiperSlide} from "vue-awesome-swiper"
export default {
    components:{
        Panel,
        // Slider,
        swiper,
        swiperSlide
    },
    data(){
        return{
                options:{
                autoplay:true,
                loop:true,
                direction:'vertical'
            }
        }
    }
}
</script>
<style lang="scss">
.swiper-container-vertical{
    height: 72px;
    .swiper-slide{
        font-family: PingFangSC-Medium;
        font-size: 28px;
        color: #333;
        em{
            color:#333;
            float:right;
            margin-right: 20px;
        }
    }
}
</style>

<style lang="scss" module>
@import "../../css/element.scss";
    .panel{
        @include panel;
        >h4{
            display: none;
        }
        .content{
            margin-top: 120px !important;
            height: 72px;
            line-height: 72px;
            overflow: hidden;
            padding-left: 178px;
            background-repeat: no-repeat;
            background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) no-repeat;
        }
    }
</style>
