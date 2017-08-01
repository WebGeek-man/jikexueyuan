/**
 * Created by meihuabing on 2017/6/28.
 */


/**
 * 单例设计模式
 */
$(document).ready(function () {
    var news = {
        init:function () {
            this.render();
            this.bind();
            this.refreshNews('精选');
        },
        render:function () {
            //绑定Dom
            var me = this;
            me.btna = $('nav a');
            me.$lists = $('article ul');

        },
        bind:function () {
            //绑定事件
            var me = this;
            me.btna.click(function (e) {
                //业务逻辑
                e.preventDefault();
                var type = $(this).text();
                me.refreshNews(type);
            });
        },

        refreshNews:function refreshNews(type) {
            // var $lists = $('article ul');
            // $lists.empty();//清空
            var me = this;
            me.$lists.empty();
            $.ajax({
                url:'/test',
                type:'get',
                data:{newstype:type},
                datatype:'json',
                success:function (data) {
                    // console.log(data);
                    data.forEach(function (item,index,array) {
                        var $list = $('<li></li>').addClass('news-list').prependTo(me.$lists);
                        var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
                        var $img = $('<img>').attr('src',item.newsimg).appendTo($newsImg);
                        var $newscontent = $('<div></div>').addClass('newscontent').appendTo($list);
                        var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newscontent);
                        var $p = $('<p></p>').appendTo($newscontent);
                        var $newstime = $('<span></span>').addClass('newstime').html(moment(item.newstime).format('MMMM Do YYYY, h:mm:ss')).appendTo($p);
                        var $newsSrc = $('<span></span>').addClass('newssrc').html(item.newssrc).appendTo($p);
                    });
                }
            });
        }

    };



    //初始化
    news.init();
});



/*
$(document).ready(function () {

    refreshNews('精选');

    $('nav a').click(function (e) {
        e.preventDefault();
        var type = $(this).text();
        refreshNews(type);
    })

});

function refreshNews(type) {
    var $lists = $('article ul');
    $lists.empty();//清空
    $.ajax({
        url:'/test',
        type:'get',
        data:{newstype:type},
        datatype:'json',
        success:function (data) {
            // console.log(data);
            data.forEach(function (item,index,array) {
                var $list = $('<li></li>').addClass('news-list').prependTo($lists);
                var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
                var $img = $('<img>').attr('src',item.newsimg).appendTo($newsImg);
                var $newscontent = $('<div></div>').addClass('newscontent').appendTo($list);
                var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newscontent);
                var $p = $('<p></p>').appendTo($newscontent);
                var $newstime = $('<span></span>').addClass('newstime').html(moment(item.newstime).format('MMMM Do YYYY, h:mm:ss')).appendTo($p);
                var $newsSrc = $('<span></span>').addClass('newssrc').html(item.newssrc).appendTo($p);
            });
        }
    });


}

*/








// var $list = $('<li></li>').addClass('news-list').prependTo($lists);
// var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
// var $img = $('<img>').attr('src','img/2.jpeg').appendTo($newsImg);
// var $newscontent = $('<div></div>').addClass('newscontent').appendTo($list);
// var $h1 = $('<h1></h1>').html('新闻标题占位符').appendTo($newscontent);
// var $p = $('<p></p>').appendTo($newscontent);
// var $newstime = $('<span></span>').addClass('newstime').html('新闻时间占位符').appendTo($p);
// var $newsSrc = $('<span></span>').addClass('newssrc').html('新闻来源占位符').appendTo($p);