/**
 * Created by meihuabing on 2017/6/3.
 */



var isList = false;
$(document).ready(function () {



    // 设置列表与详情切换
    $(".kuai-icon").bind("click",function () {
        listChange(false)
    });
    $(".list-icon").bind("click",function () {
        listChange(true)
    });
// 设置正文课程列表鼠标划过显示菜单下拉效果
    $("#cf>li").css("display","block")
    $("#list>li").css("display","none")
    $("#changeid ul li").mouseover(function () {
        // console.log("#"+this.id + "" + ".lesson-infor");
        $("#"+this.id + " " + ".lesson-infor").css("height","175px");
        $("#"+this.id + " " + ".lesson-infor" + " " + "p").css({
            height:"52px",
            opacity:"1",
            display:"block"
        });

        $("#"+this.id + " " + ".zhongji").css({
            display:"block"
        });

        $("#"+this.id + " " + ".learn-number").css({
            display:"block"
        });


    })

    $("#changeid ul li").mouseleave(function () {
        // console.log("#"+this.id + "" + ".lesson-infor");
        $("#"+this.id + " " + ".lesson-infor").css("height","88px");

        $("#"+this.id + " " + ".lesson-infor" + " " + "p").css({
            height:"0",
            opacity:"0",
            display:"none"
        });

        $("#"+this.id + " " + ".zhongji").css({
            display:"none"
        });

        $("#"+this.id + " " + ".learn-number").css({
            display:"none"
        });
    })


    // 设置导航栏搜索框事件
    $("#search-btn").bind("click",function () {
        $(".searchbox").css({
            display: "block",
            opacity: "1",
            transform: "scale(1, 1)"
        })
    })

    $("#close-btn").bind("click",function () {
        $(".searchbox").css({
            display: "none",
            opacity: "0",
            transform: "scale(0.1, 1)"
        })
    })


});

//列表与平铺切换
function listChange(isList) {
    if (isList){//列表
        $("#cf>li").css("display","none")
        $("#list>li").css("display","block")
    } else {//平铺
        $("#cf>li").css("display","block")
        $("#list>li").css("display","none")
    }
}