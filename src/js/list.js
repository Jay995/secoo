
//鼠标移动事件，当移动到某个div，出现边框
$(".list-con>ul").on("mouseover", "li", function (e) {
    this.style.border = "1px solid #6666"
})
//鼠标移出边框消失
$(".list-con>ul").on("mouseout", "li", function (e) {
    this.style.border = "1px solid white";
})

var count = 1;
var str = "";


setPagi()



//封装函数，渲染分页器
function setPagi() {
    //发送ajax请求本地json数据
    $.ajax({
        url: "../lib/json/list.json",
        dateType: "json",
        success: function (res) {

            //先渲染第一页
            setList(1, res)

            // console.log(res.length)
            $('.M-box3').pagination({
                totalData: res.length,
                current: 1,
                showData: 30,
                jump: true,
                coping: true,
                homePage: '首页',
                endPage: '末页',
                prevContent: '上页',
                nextContent: '下页',
                mode: "fixed",
                count: 8,
                callback: function (api) {
                    setList(api.getCurrent(), res)
                    // console.log(api.getCurrent())
                }
            })

        }
    })
}



//渲染
function setList(current, arr) {
    var list = arr.slice((current - 1) * 30, current * 30)
    for(var i = 0;i<list.length;i++){
        str += `<li>
        <img src="${list[i].adress}">
        <hr style="background:#6666">
        <a href="" class="description">${list[i].description}</a>
        <p class="price">${list[i].price}</p>
    </li>`
    }
    $(".list-con>ul").html(str);
    str = ""
}
//点击首页跳回主页面
$(".nav-container>ul>li").first().click(function(){
    window.location.href = "../pages/index.html"
})