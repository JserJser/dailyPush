<template>
    <Panel class="panel" :class="$style.panel">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t20746/93/1719082958/12040/306a2296/5b31b40dNeefe4c3c.png?width=750&height=200" alt="">
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
        margin-bottom: 0;
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