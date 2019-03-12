async function async1(){
    console.log("async1 start");
    await async2();
    console.log("async1 end");
}
async function async2(){
    console.log("async2");
}
console.log("script start");
setTimeout(function(){
    console.log("setTimeout");
},0)
async1();
new Promise(function(resolve){
    console.log("promise1");
    resolve();
}).then(
    function(){
        console.log("promise2");
    }
);console.log("script end");
setTimeout(function(){
    console.log('1')
});

new Promise(function(resolve){
    console.log('2');
    resolve();
}).then(function(){
    console.log('3')
});

console.log('4');


/*
 * 动画声明
 */
@keyframes jumping {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-400px);
  }
  100% {
    transform: translateY(0px);
  }
}
/*    点赞样式Begin   */
#div_digg {
  bottom: 0px;
  margin: 0px;
  position: fixed;
  right: 0.5rem;
  animation: jumping 5s ease-in-out;
  animation-iteration-count: infinite;
}
.buryit {
  display: none;
}
.diggit {
  background: url(//images.cnblogs.com/cnblogs_com/vvjiang/996881/o_ball2.png) no-repeat;
  border-radius: 50%;
  box-shadow: 0px 0px 15px 5px #fff inset;
  cursor: pointer;
  height: 100px;
  margin: 0px;
  padding: 0px;
  width: 100px;
  text-align: center;
}
.diggit::before {
  content: "\8FD9\91CC\662F\70B9\8D5E\54E6";
  position: absolute;
  top: -40px;
  left: 7px;
  font-size: 14px;
  color: #5bf;
}
#div_digg .diggnum {
  color: #EEE;
  font-family: Verdana;
  font-size: 35px;
  line-height: 2em!important;
}
#digg_tips {
  color: #fa5 !important;
  width: 200px;
  text-align: center;
  margin-left: -50px;
  margin-top: 20px;
}
a.digg_gray {
  font-size: 18px;
}
/*    点赞样式End   */
