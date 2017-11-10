function toggleShow(dir){
    if(dir=='left'){
        if(index==0){
            index=len-1;
        }else{
            index=index-1;
        }
    }else{
        if(index==l-1){
            index=0;
        }else{
            index=index+1;
        }
    }
    showImg();
    //index=element.index($(".big_show"));
}
function showImg() {
    var element=$(".big_pic li");
    element.eq(index).addClass("big_show").siblings().removeClass();
    withSmallPic();
}
function withSmallPic() {
    var element= $("#small_pic li");
    if(index==0){
        $("#small_pic ul").animate({left:0});
    }else if(index<len-1){
        $("#small_pic ul").animate({left:-(index-1)*w});
    }else{
        $("#small_pic ul").animate({left:-(len-3)*w});
    }
    element.eq(index).addClass("small_show").siblings().removeClass();
}