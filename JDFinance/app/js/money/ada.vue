<template>
    <Panel class="panel" :class="$style.panel">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/76825/21/3349/15938/5d197607Ed74e7dea/40bca9650539b256.jpg?width=750&height=200" alt="">
        </section>
    </Panel>
</template>
<script>
import Panel from '../core/panel'
export default {
    components:{
        Panel
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
        .content{
            img{
                width: 100%;
                // height: 230px;
                display: block;
            }
        }

    }
</style>