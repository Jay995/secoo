//鼠标移动到语言切换按钮时，字体颜色切换成黄色
$(".btn").hover(function () {
    $(".btn").css({
        color: "orange",
    })
})
//鼠标离开语言切换按钮时，字体颜色恢复成原来的颜色
$(".btn").mouseleave(function () {
    $(".btn").css({
        color: "#333",
    })
})

//鼠标点击语言切换按钮时，选款显示；
$(".btn").click(function () {
    $(".dropdown-menu").css({
        display: "block",
    })
})
//鼠标离开这个选款时，选款隐藏

$(".btn").mouseleave(function () {
    $(".dropdown-menu").css({
        display: "none",
    })
})
//点击登录跳转页面
$(".top-container-right>a").click(function () {
    window.location.href = "../pages/login.html"
});

//-------------换色-------------

$(".top-container-right>a").first().hover(function () {
    $(".top-container-right>a").first().css({
        color: "orange",
    })
})

$(".top-container-right>a").first().mouseleave(function () {
    $(".top-container-right>a").first().css({
        color: "#333",
    })
})

$(".top-container-right>a").eq(1).hover(function () {
    $(".top-container-right>a").eq(1).css({
        color: "orange",
    })
})

$(".top-container-right>a").eq(1).mouseleave(function () {
    $(".top-container-right>a").eq(1).css({
        color: "#333",
    })
})

$(".top-container-right>a").eq(2).hover(function () {
    $(".top-container-right>a").eq(2).css({
        color: "orange",
    })
})

$(".top-container-right>a").eq(2).mouseleave(function () {
    $(".top-container-right>a").eq(2).css({
        color: "#333",
    })
})
//定义全局变量，用于渲染数据
var str1 = '';
var str2 = '';
var index;
//滑动导航页，换色，显示分页
//hover
$(".nav-container>ul>li").first().siblings("li").hover(function () {
    //排他
    $(".nav-container>ul>li").css({
        color: "#ffb81c"
    })
    $(this).css({
        color: "white",
    })
    $("#fenyexinxi").css({
        display: "block",
    })
    index = $(this).index() - 1;//index()获取到的是从1开始计数
    //获取本地json数据并渲染
    //ajax发送请求获取本地json数据

    $("#fenyexinxi").on("click", "a", function () {
        window.location.href = "../pages/list.html";
        console.log(this);
    })

    $.ajax({
        url: "../lib/json/index.json",
        dateType: "json",
        success: function (res) {
            //把匹配相应的索引值，渲染数据
            for (var i = 0; i < res[index].pinpai.length; i++) {
                str1 += `<a href="">${res[index].pinpai[i]}</a>`;
            }

            for (var i = 0; i < res[index].fenlei.length; i++) {
                str2 += `<a href="">${res[index].fenlei[i]}</a>`;
            }
            $(".fenye>ol").first().children("div").html(str1);
            $(".fenye>ol").last().children("div").html(str2);
            str1 = "";
            str2 = "";

            //    点击分页下面的按钮，跳转

            //点击分页下面的按钮，跳转
            // $(".fenye a").click(function () {
            //     window.location.href = "../pages/list.html";
            //     console.log(this);
            // }) 
        }

    })

})

$("#fenyexinxi").hover(function () {
    //排他
    $("#fenyexinxi").css({
        display: "block",
    })
})

//mouseleave
$(".nav-container>ul>li").mouseleave(function () {
    //排他
    $(".nav-container>ul>li").css({
        color: "#ffb81c"
    })

    $("#fenyexinxi").css({
        display: "none",
    })
})

$("#fenyexinxi").mouseleave(function () {
    //排他
    $("#fenyexinxi").css({
        display: "none",
    })
})



//搜索框
$(".nav-reserch input").click(function () {
    $(".nav-reserch input").css({
        borderBottom: "1px solid white",
        cursor: "text"
    })
    $(".nav-reserch input").prop("value", "")
    $(".nav-reserch input").prop("placeholder", "搜索商品、品牌")
    $(".nav-reserch input").animate({
        width: 200,
    }, 300, "linear")
})
//失去焦点回到原样
$(".nav-reserch input").blur(function () {
    $(".nav-reserch input").animate({
        width: 38,
    }, 300, "linear", function () {
        $(".nav-reserch input").prop("placeholder", "")
        $(".nav-reserch input").prop("value", "搜索")
        $(".nav-reserch input").css({
            borderBottom: "",
            cursor: "pointer"
        })
    })
})

//ajax本地请求，渲染轮播图数据
$.ajax({
    url: "../lib/json/list.json",
    dateType: "json",
    success: function (res) {
        var str = "";
        for (var i = 0; i < res.length; i++) {
            str += `<li>
        <img src="${res[i].adress}" alt="">
        <div>
          <p class="pinpai">${res[i].id}</p>
          <p class="description">${res[i].description}</p>
          <p class="splice"></p>
          <p class="price">${res[i].price}</p>
        </div>
      </li>`
        }

        $(".bigbox").html(str);
    }
})

//定义一个开关变量
var flag = true;
//点击轮播图按钮，图片左右切换
$(".swiperBtn-con-btn-left").click(function () {
    //获取元素的位置
    var current = parseInt($(".bigbox").css("left"));
    if(flag){
        flag=false;
        $(".bigbox").animate({
            left: current - 1210 + "px",
        }, 200, "linear", function () {
            flag = true;
        })
        
    }       
}
)

$(".swiperBtn-con-btn-right").click(function () {
    //获取元素的位置
    var current = parseInt($(".bigbox").css("left"));
    if(flag){
        flag=false;
        $(".bigbox").animate({
            left: current + 1210 + "px",
        }, 200, "linear", function () {
            flag = true;
        })
        
    }       
}
)

//给每个li绑定点击跳转页面事件
$(".bigbox").on("click","li",function(){
    window.location.href = "../pages/detail.html"
})
//点击轮播图下的li跳转详情页

$(".nav-container>ul>li").click(function(){
    window.location.href = "../pages/list.html"
})





