// 用es6方式写的发布订阅模式
class EventEmiter{
    constructor(){
        this._events={

        }
    }
    on(eventName,callback){
        if(this._events[eventName]).push(callback);
    }els
}
if(!Array.prototype.every){
    Array.prototype.every=function (fun) {
        'use strict';
        if(this===void 0||this===null){
            throw new TypeError();
        }
        var t=Object(this);
        var len=t.length>>>0;
        if(typeof fun!=='function'){
            throw new TypeError();
        }
        var thisArg=arguments.length>=2?arguments[1]:void 0;
        for(var i=0;i<len;i++){
            if(i in t && !fun.call(thisArg,t[i],i,t)){
                return false;
            }
        }
        return true;
      }
}
Array.prototype.some();
某些元素是否通过了指定的测试
Array.some(callback,[,thisArg]);


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>点击按钮自动加关注代码——新浪微博</title>
 
</head>
<body>
<iframe allowtransparency="" border="0" frameborder="0" height="22" marginheight="0" marginwidth="0" scrolling="no" src="http://widget.weibo.com/relationship/followbutton.php?width=200&height=22&uid=1282557022&style=5&btn=red&dpc=1" style="width: 64px; height: 22px;" width="200"></iframe>
</body>
</html>
