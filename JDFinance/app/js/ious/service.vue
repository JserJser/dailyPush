<template>
    <Panel :class="$style.panel" title="更多服务">
        <section :class="$style.content" >
             <div :class="$style.item" v-for="item in items" :key="item.img">
                <img :src="item.img" alt="">
                <p>{{item.text}}</p>
            </div>
        </section>
    </Panel>
</template>
<script>
import Panel from '../core/panel'
export default {
    components:{
        Panel
    },
    data(){
        return {
            items:[
                {
                    img:"//img12.360buyimg.com/jrpmobile/jfs/t1/69506/40/2501/5076/5d0c2ff7E903b5e99/5333b1c655b4c7bf.png?width=90&height=90",
                    text:"去赚钱"
                },
                   {
                    img:"//img12.360buyimg.com/jrpmobile/jfs/t1/62829/35/1167/4169/5cf64e75Ec0e5b729/eb07348c21179775.png?width=90&height=90",
                    text:"优惠券"
                },
                   {
                    img:"//img12.360buyimg.com/jrpmobile/jfs/t1/22708/8/15082/7446/5cad5c35E7e3ae22b/72adc577175d7c4f.png?width=90&height=90",
                    text:"双签"
                },
                   {
                    img:"//img12.360buyimg.com/jrpmobile/jfs/t29131/288/288291507/3943/bed46aef/5bee6bd5Nfc5d5360.png?width=90&height=90",
                    text:"全部"
                }
            ]
        }
    }
}
</script>
<style lang="scss" module>
   @import "../../css/element.scss";
   .panel{
       @include panel;
       .content{
           @include flex(row);
           .item{
               width: 160px;
               height: 144px;
               text-align: center;
               margin-bottom: 40px;
               img{
                   width: 90px;
                   height: 90px;
               }
               p{
                   font-size: 26px;
                   color: #666;
                   margin-top: 12px;
               }
           }
       }
   } 
</style>