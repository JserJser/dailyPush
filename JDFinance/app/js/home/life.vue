<template>
    <Panel title="生活服务" :class="$style.panel">
        <ul :class="$style.content">
            <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132" alt="">
                <p>优惠券</p>
                <p>小白信用</p>
            </li>
              <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132" alt="">
                <p>领福利</p>
            </li>
              <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132" alt="">
                <p>抢钢镚</p>
            </li>
              <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135" alt="">
                <p>白条提额</p>
            </li>
                <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132" alt="">
                <p>抢钢镚</p>
            </li>
        </ul>
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
        .content{
            @include flex(row);
            box-sizing: border-box;
            padding-bottom: 40px;
            .item{
                width: 20%;
                text-align: center;
                img{
                    width: 90px;
                    height: 90px;
                }
                p{
                    font-size: 26px;
                    color: #666;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    margin-top: 12px;
                    &:nth-child(3){
                        color: #FF801A;
                    }
                }
            }
        }
    }

</style>