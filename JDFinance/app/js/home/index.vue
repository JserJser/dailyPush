<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Novice/>
        <Borrow/>
        <Money/>
        <Product/>
        <Life/>
        <Footer/>
        <Navbar/>
    
    </div>
</template>
<script>
import Heador from '../public/header'
import Slider from './hslider'
import Novice from './novice'
import Borrow from './borrow'
import Money from './money'
import Product from './product'
import Life from './life'
import Footer from '../public/footer'
import Navbar from '../public/navbar'
export default {
  components:{
    Heador,
    Slider,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    Footer,
    Navbar
  }
}
</script>

<style lang="scss" module>

</style>
