<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Daily/>
         <In/>
         <More/>
        <Footer/>
        <Navbar/>
    </div>
</template>
<script>
import Heador from '../public/header'
import Footer from '../public/footer'
import Slider from './rslider'
import Navbar from '../public/navbar'
import Daily from './daily'
import In from './in'
import More from './more'
export default {
  components:{
    Heador,
    Slider,
    Footer,
    Navbar,
    Daily,
    In,
    More
  }
}
</script>

<style lang="scss" module>

</style>
