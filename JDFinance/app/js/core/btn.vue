<template>
    <div :class="[btnClass,cname]">
       <slot/>
    </div>
</template>
<script>
export default {
    // 子组件要显示的用props选项声明它期待获得的数据
    props:{
        cname:{
            type:String,
            default:''
        }
    },
    data(){
        return {
            btnClass:'btn',

        }
    }
}
</script>
<style lang="scss">
// 默认类名，传递类名可修改默认类名
@import "../../css/element.scss";
.btn{
    @include btn;
}
</style>
