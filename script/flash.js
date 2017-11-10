var i=3;
var l=0;
var len=0;
var w=0;
var timer;
var index=0;
$(function () {
    //获取图片的张数
    l=$(".big_pic li").length;
    len=$("#small_pic li").length;

    //获取小图片所占宽度
    w=$("#small_pic li").outerWidth(true);

    $("#small_pic ul").width(w*len);

    //设置按钮的显示及切换功能
    $("#mark_left,#mark_right").hover(function () {
        clearInterval(timer);
        $(this).find("span").fadeIn();
    },function () {
        timer=setInterval(function () {
            showImg();
            index++;
            if(index==len){
                index=0;
            }
        },1000);
        $(this).find("span").fadeOut();
    }).click(function () {
        //获取当前图片的索引和切换按钮的方向
        index=$(".big_pic li").index($(".big_show"));
        var dir= $(this).find("span").attr("id");
        //切换图片
        toggleShow(dir,index);
    });
    timer=setInterval(function () {
            showImg();
            index++;
            if(index==len){
                index=0;
            }
        },1000);
});