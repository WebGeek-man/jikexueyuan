/**
 * Created by meihuabing on 2017/5/30.
 */
$(document).ready(function () {
    //首先设置导航栏下拉菜单高度
    var windowHeight = $(document).height();
    var right_items = $("#right_items");
    var morePdu = $("#morePdu");


    //加载主题
    if (localStorage.backgroundColor){
        $("body").css("background",localStorage.backgroundColor);
    }



    right_items.css({
        width:"80px",
        height:windowHeight
    });
    morePdu.mouseover(function () {
        right_items.show();
    });
    right_items.mousemove(function () {
        right_items.show();
    });
    right_items.mouseout(function () {
        right_items.hide();
    });

    //检测页面滚动的高度
    $(window).scroll(function(event){
        // var showTopBar = false;
        // console.log($(document).scrollTop())
        if ($(document).scrollTop() > 170){
            isShowTopSearchBar(true)
        } else {
            isShowTopSearchBar(false)
        }

        if ($(document).scrollTop() > 250){
            isShowTopNews(true)
        } else {
            isShowTopNews(false)
        }
    });


    // 设置百度 我的关注 导航 视频 推荐的菜单切换
    $("#content-search  span.subject-cnt").each(function (index) {
        $(this).click(function () {
            $("#content-search span.span-selected").removeClass("span-selected");
            $(this).addClass("span-selected");
            $("#content-wrapper div.content-show").removeClass("content-show");
            $("#content-wrapper div.subject-cnt").eq(index).addClass("content-show")
        })
    })


    /**
     * skine-button
     * 如何让换肤的div #change-skine  在被点击鼠标点到自身的时候 不被收起来??????
     * 换肤
     */
    $("#skine-button").click(function (e) {
         e.stopPropagation();
         // e.stopImmediatePropagation();
         $("#change-skine").slideDown();
    });

    $("#change-skine").click(function (e) {
        e.stopPropagation();
        $("#change-skine").show();
    });

    $("body").click(function (e) {
        $("#change-skine").slideUp();
    });


    /**
     * 换肤按钮切换实现
     */
    $("#change-skine li").each(function (index) {
        $(this).click(function (e) {
            e.stopPropagation();
            $("#change-skine li.change-skine-clicked").removeClass("change-skine-clicked");
            $(this).addClass("change-skine-clicked");
        })
    });

    /**
     * 改变肤色 , 暂时用背景颜色代替
     */
    $("#change-skine .change-skine-content div").each(function (index) {
        $(this).click(function (event) {
            $("body").css("background",$(this).attr("title"));
            localStorage.backgroundColor = $(this).attr("title");
        })
    })

});


/**
 * 百度搜索悬浮框设置
 * @param isShow
 */
function isShowTopSearchBar(isShow) {
    if (isShow){
        $("#baidu-search").addClass('baudu-search-top');
        $("#search-top-logo").show(200);
        $("#content-search").addClass('content-search-padding')
    } else {
        $("#baidu-search").removeClass('baudu-search-top');
        $("#search-top-logo").hide(200);
        $("#content-search").removeClass('content-search-padding')
    }

}

/**
 * 推荐右侧模块显示设置
 * @param isShow
 */
function isShowTopNews(isShow) {

    // document.body.scrollWidth
    if (isShow){
        // $("#subject-right").addClass('subject-right-addClass');
        var screenRight = (document.body.scrollWidth -1002)/2.0;
        $("#subject-right").css({
            position:"fixed",
            top: "120px",
            right:screenRight
        })
    } else {
        // $("#subject-right").removeClass('subject-right-addClass');
        $("#subject-right").css({
            position:"absolute",
            top: "0",
            right: "0"
        })
    }

}