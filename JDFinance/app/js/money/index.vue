<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Ada/>
        <Money/>
        <Adb/>
        <Finance/>
        <Adc/>
        <Footer :cname="$style.mfooter"/>
        <Navbar/>
       
    </div>
</template>
<script>
import Heador from '../public/header'
import Footer from '../public/footer'
import Slider from './mslider'
import Navbar from '../public/navbar'
import Ada from './ada'
import Adb from './adb'
import Adc from './adc'
import Money from './money'
import Finance from './finance'
export default {
  components:{
    Heador,
    Slider,
    Ada,
    Adb,
    Adc,
    Footer,
    Navbar,
    Money,
    Finance
  }
}
</script>

<style lang="scss" module>
.mfooter{
    margin-top: 0 !important;
    ul{
        li:first-child{
            display: none;
        }
    }
}
</style>
