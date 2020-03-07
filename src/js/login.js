
// console.log($(".login>input").first());
//保存input标签内的原始值
//用户名
var val = $(".login>input").first().prop("placeholder");
var val1 = $(".login>input").eq(1).prop("placeholder");
//获取焦点
$(".login>input").first().focus(function(){
    $(".login>input").first().prop("placeholder","");
})
//失去焦点
$(".login>input").first().blur(function(){
    var reg = /^\s{1,}$/;
    if(!$(".login>input").first().val() || reg.test($(".login>input").first().val())){
        $(".login>input").first().prop("placeholder",val)  
    }
})
// console.log($(".login>input").last())

//操作密码
//获得焦点
$(".login>input").eq(1).focus(function(){
    $(".login>input").eq(1).prop("placeholder","");
    // console.log($(".yanzhengma"));
   $(".yanzhengma").css({
       display:"block",
   })
    $(".login>input").eq(1).prop("type","password");
    setyzm();
    
})

//点击换一张，生成心得验证码
$(".check>p").click(function(){
    setyzm();
})


//失去焦点
 $(".login>input").eq(1).blur(function(){
     var reg = /^\s{1,}$/;
     if(!$(".login>input").eq(1).val() || reg.test($(".login>input").eq(1).val())){
         $(".login>input").eq(1).prop("placeholder",val1)  
     }
 })



//生成验证码
//0~9=>48~57
//A~Z=>65~90
//a~z=>97~122

function setyzm(){
    var num;
var str = "";
for(var i=0;i<4;i++){
    num = getnum(48,122);
    if((48<=num&&num<= 57) || (65<=num&&num<=90) || (97<=num&&num<=122)){
        // String.fromCharCode(num)
        str += String.fromCharCode(num);
    }else{
        i--;
    }
}
$(".check>div").html(str);
}


//发送登录验证请求
$(".dl").click(function(){
// 1. 创建 ajax 对象
var xhr = new XMLHttpRequest();

// 2. 配置请求信息
//    本次请求携带了二个参数, 账号密码
xhr.open('GET', `/pj?user=${$(".login>input").first().val()}&pass=${$(".login>input").eq(1).val()}`);

// 3. 接受响应
xhr.onload = function () {
  if(xhr.responseText){
    window.location.href=xhr.responseText;//这里不用引号，因为返回值就是字符串
  }else{
      alert("账号或密码错误，请重新输入")
  }
}

// 4. 发送请求
xhr.send()
})



//封装函数产生随机整数
function getnum(min,max){
    //生成48~122的随机数
    return Math.floor((Math.random()*(max-min)+1))+min;
}
