<template>
    <Panel title="下载App" :class="$style.panel">
        <section :class="$style.content">
            a
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
    html,body{
        background: #fff;
    }
    .panel{
        @include panel;
        margin: 0 !important;
        >h4{
            display: none;
        }
        .content{
            color: red;
        }
    }
</style>