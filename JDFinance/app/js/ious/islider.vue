<template>
    <div>
        <Panel title="轮播图" :class="$style.panel">
            <section :class="$style.content">
                <Slider :items="items"/>
            </section>
        </Panel>
    </div>
</template>
<script>
import Slider from '../core/slider'
import Panel from '../core/panel'
export default {
    components:{
        Slider,
        Panel
    },
    data(){
        return{
            items:[
                {
                    href:"11",
                    src:"//img12.360buyimg.com/jrpmobile/jfs/t1/54124/12/3394/140400/5d11e389Ee12d74f3/f3cba452b6470938.png?width=750&height=320"
                },
                {
                    href:"22",
                    src:"//img12.360buyimg.com/jrpmobile/jfs/t1/52802/14/4027/212241/5d1b14f4Ed1748086/588363d90a40b28c.png?width=750&height=320"
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
        >h4{
            display: none;
        }
        margin-top: 120px;
    }
</style>