<template>
    <Panel title="理财精选" :class="$style.panel">
        <section :class="$style.content">
            <dl :class="$style.item" v-for="item in items" :key="item.title">
                <dt>{{item.title}}<span>{{item.sub}}</span> </dt>
                <dd>{{item.rate}}</dd>
                <dd>{{item.text}}</dd>
            </dl>
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
                    title:'定期理财',
                    sub:'理财首选',
                    rate:'5.80%',
                    text:'近1年历史年化投资回报率'
                },
                 {
                    title:'京智0号',
                    sub:'大数据赋能',
                    rate:'6.00%',
                    text:'近1月历史年化投资回报率'
                },
                 {
                    title:'建信养老飞益鑫',
                    sub:'1000起投',
                    rate:'4.57%',
                    text:'近7日年化收益'
                },
                 {
                    title:'小白基金',
                    sub:'超短期',
                    rate:'4.50%',
                    text:'7日年化收益率'
                }
            ]
        }
    }
}
</script>
<style lang="scss" module>
    @import '../../css/element.scss';
    .panel{
        @include panel;
        .content{
            @include flex(row);
            justify-content: space-around;
            box-sizing: border-box;
            &:after{
                content:"";
                display: block;
                width: 100%;
                height: 0px;
                box-sizing: border-box;
                border-bottom: 1px solid red;
                position: relative;
                top: -208px;
            }
            .item{
                position: relative;
                width:50%;
                box-sizing: border-box;
                &:after{
                    content:'';
                    width:1px;
                    height: 136px;
                    display: block;
                    position: absolute;
                    top:50%;
                    right:0;
                    margin-top: -68px;
                    border-right: 1px solid red;
                }
                &:nth-child(2n){
                    &:after{
                        display: none;
                    }
                }
                padding: 34px 16px;
                dt{
                    font-size: 22px;
                    line-height: 42px;
                    color: #333;
                    span{
                        font-size: 22px;
                        color: #ff5155;
                        border:1px solid #ff5155;
                        padding: 0 8px;
                        vertical-align: 1px;
                        margin-left: 2px;
                    }
                }
                dd{
                    &:nth-child(2){
                        font-weight: 700;
                        font-size: 44px;
                        height: 58px;
                        line-height: 58px;
                        color: #FF5155;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                    &:nth-child(3){
                        font-size: 24px;
                        height: 34px;
                        line-height: 34px;
                        color: #999;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                }
            }
        }
    }
</style>