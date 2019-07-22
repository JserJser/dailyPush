<template>
    <div>

        <detail-banner
          :sightName="sightName"
          :bannerImg="bannerImg"
          :bannerImgs="gallaryImgs"
        ></detail-banner>
         <detail-header ></detail-header>
         <div class="container">
           <detail-list :list="list"></detail-list>
         </div>
    </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: [
      ]
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json?id=' + this.$route.params, {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      console.log('res', res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        console.log('data', data)
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>
<style lang="stylus" scoped>
// .container
//   height:50rem
</style>
