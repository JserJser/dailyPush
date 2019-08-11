<template>
 <div class="bg">

  <div class="basic">
    <img src="../assets/top.png" alt="" class="top-img">
  </div>
   <div id="showad" v-show="ShowDark">
     <div class="pop">
        <!-- <img src="../assets/point.png" alt="" class=""> -->
        在微信中打开需要点击浏览器进行下载
     </div>
   </div>
  <div class="basic-logo">
   <div class="logo-img-box">
      <img src="../assets/logo.png" alt="" class="logo-img">
   </div>
   </div>
   <div class="basic-font">
     <div class="font">
      牵牛花APP
     </div>
   </div>
   <a class="basic-button" @click="downApp">
     立即下载
   </a>
   <div class="font-bottom">
     <div class="top-font">
       温馨提示：
     </div>
     <div class="bottom-font">
    限制下载时，点击右上角“在浏览器中打开”
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Template',
  data () {
    return {
      ShowDark: false
    }
  },
  methods: {
    downApp () {
      let ua = navigator.userAgent.toLowerCase()
      if (isWeixinBrowser()) {
        this.ShowDark = !this.ShowDark
      } else {
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
          window.location = process.env.IOS_URL
        } else if (/(Android)/i.test(navigator.userAgent)) {
          window.location = process.env.ANDORID_URL
        }
      }

      function isWeixinBrowser () {
        return !!(/micromessenger/.test(ua))
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg{
background-color: #fff;
width: 750px;
height: 1334px;
position: relative;
}
#showad{
width: 750px;
height: 100px;
position: absolute;
top: 130px;
}
#showad .pop img{
display: block;
width: 750px;
height: 100px;

}
.basic{
width: 750px;
height: 110px;
}
.basic .top-img{
display: block;
width: 750px;
height: 110px;
}
.basic-logo{
margin-top: 210px;
width:750px;
height: 300px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
.basic-logo .logo-img-box{
width: 300px;
height: 300px;

}
.basic-logo .logo-img-box .logo-img{
width: 100%;
display: block;
}
.basic-font{
margin-top: 40px;
/* justify-content: center; */
align-items: center;
display: flex;
flex-direction: column;
}
.basic-font .font{
font-size: 34px;
color: rgb(51,51,51);
letter-spacing: 1px;
/* font-weight: bold; */
height: 48px;
line-height: 48px;
font-family:'PingFangSC-Regular',Arial, Helvetica, sans-serif;
}
.basic-button{
display: flex;
flex-direction: column;
margin: 0 auto;
margin-top: 160px;
font-size: 32px;
text-align: center;
/* height: 90px; */
width: 320px;
border-radius: 45px;
/* background-color: rgb(243,50,79); */
color: #fff;
font-family:'PingFangSC-Medium', Arial, Helvetica, sans-serif;
padding-top: 21px;
padding-bottom: 24px;
line-height: 45px;
letter-spacing: 0px;
background:linear-gradient(90deg, rgb(243,50,79) 0%, rgb(250,96,26) 100%);
/* margin-left:215px;
margin-right:215px; */
}
.font-bottom{
width: 544px;
margin: 0 auto;
margin-top: 61px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
/* margin-left: 103px;
margin-right: 103px; */
}
.font-bottom .top-font{
font-family: Arial, Helvetica, sans-serif,'PingFangSC-Regular';
font-size:28px;
color:rgb(102,102,102);
line-height:auto;
line-height: 30px;
}
.font-bottom .bottom-font{
font-family: Arial, Helvetica, sans-serif,'PingFangSC-Regular';
font-size:28px;
color:rgb(102,102,102);
line-height:auto;
line-height: 30px;
margin-top: 12px;
}

</style>
