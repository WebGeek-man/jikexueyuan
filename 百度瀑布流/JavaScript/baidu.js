/**
 * Created by meihuabing on 2017/6/22.
 */

$(document).ready(function () {

    imgLocation();

    // 模拟数据
    var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"}]}
    // 监听鼠标的滚动事件
    window.onscroll = function () {
        if (scrollTobottom()){
            $.each(dataImg.data,function (index,value) {
                console.log("index:"+index + ":"+"value:"+$(value).attr("src"))
                var box= $("<div>").addClass("box").appendTo($("#container"));
                var content = $("<div>").addClass("content").appendTo(box);
                // console.log("./img/"+$(value).attr("src"));
                // $("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content)
                $("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);
            });
            imgLocation()
        }
    };


    // 响应式
    window.onresize = function () {
        imgLocation()
    }

});

function imgLocation() {
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width()/boxWidth);
    var boxArr=[];
    box.each(function (index,value) {
        //初始化样式
        value.style.cssText = '';
       var boxHeight = box.eq(index).height();
       if(index < num){
           boxArr[index] = boxHeight;
       } else {
           /*
            * Math.min.apply(null,boxArr)
            * 老师能否给我简单说下这句代码意思,主要apply(null,boxArr)不太理解,然后就是Math.min 后跟 apply(null,boxArr),不太理解
            */
           var minboxHeight = Math.min.apply(null,boxArr);
           var minboxIndex = $.inArray(minboxHeight,boxArr);
           $(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left
           });
           boxArr[minboxIndex] += box.eq(index).height();
       }
    });
}


function scrollTobottom() {
    var box = $(".box");
    //获取最后一张图片的高度
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height()/2);
    // console.log(lastboxHeight)
    var docomentHeight = $(window).height();
    var scrollHeight = $(window).scrollTop();
    return (lastboxHeight<scrollHeight+docomentHeight)?true:false;
}

