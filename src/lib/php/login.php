<?php
header('content-type: text/html;charset=utf-8;');
$username = $_GET["user"];
$password = $_GET["pass"];
//建立连接
$link = mysqli_connect('localhost','root','root','lianxi');
//查询数据库中是否与前端提供数据匹配
$check = "SELECT * FROM `users` WHERE `username` = '$username' AND `password` = '$password'";
// echo $check;
//返回一个boolean值
$res = mysqli_query($link,$check);
//解析
// echo $res;
$row = mysqli_fetch_assoc($res);
//断开连接
mysqli_close($link);
if($row){
    // <meta http-equiv = "refresh"  content = "1;url=http://www.secoo.com/" >
    // header("Location:http://www.secoo.com/");
    echo "http://www.secoo.com/";
    // header();
}else{
    echo false;
}
?>
