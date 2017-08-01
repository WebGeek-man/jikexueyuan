/**
 * Created by meihuabing on 2017/6/30.
 */


/**
 * 单例设计模式
 */
$(document).ready(function () {
    var admin = {
       init:function () {
           this.render();
           this.bind();
           this.refreshBNews();
       },
       render:function () {
           var me = this;
           me.$newstable = $('#newstable tbody');
           me.$deletModal = $("#deletModal");
           me.$updataModal = $("#updataModal");
           me.$confirmdelet = $('#confirmdelet');
           me.$confirmupdata = $('#confirmupdata')
           me.$submitbtn = $('#btnsubmit');
           me.$newstitle = $('#newstitle');
           me.$newsimg = $('#newsimg');
           me.$newstype = $('#newstype');
           me.$newstime = $('#newstime');
           me.$newssrc = $('#newssrc');

           me.$unewstitle = $('#unewstitle');
           me.$unewsimg = $('#unewsimg');
           me.$unewstype = $('#unewstype');
           me.$unewstime = $('#unewstime');
           me.$unewssrc = $('#unewssrc');
       },
        bind:function () {
           var me = this;
           me.$submitbtn.click(function (e) {
                e.preventDefault();
                //输入判断
                if (me.$newstitle.val() === ''||me.$newsimg.val() === ''||me.$newstype.val() === ''||me.$newstime.val() === ''||me.$newssrc.val() === ''){
                    if (me.$newstitle.val() === ''){
                        me.$newstitle.parent().addClass('has-error')
                    } else {
                        me.$newstitle.parent().removeClass('has-error')
                    }
                    if (me.$newsimg.val() === ''){
                        me.$newsimg.parent().addClass('has-error')
                    } else {
                        me.$newsimg.parent().removeClass('has-error')
                    }
                    if (me.$newstype.val() === ''){
                        me.$newstype.parent().addClass('has-error')
                    } else {
                        me.$newstype.parent().removeClass('has-error')
                    }
                    if (me.$newstime.val() === ''){
                        me.$newstime.parent().addClass('has-error')
                    } else {
                        me.$newstime.parent().removeClass('has-error')
                    }
                    if (me.$newssrc.val() === ''){
                        me.$newssrc.parent().addClass('has-error')
                    } else {
                        me.$newssrc.parent().removeClass('has-error')
                    }
                } else {
                    //检验通过  发请求
                    var jsonNews = {
                        newstitle:me.$newstitle.val(),
                        newsimg:me.$newsimg.val(),
                        newstype:me.$newstype.val(),
                        newstime:me.$newstime.val(),
                        newssrc:me.$newssrc.val()
                    };
                    $.ajax({
                        url:'/admin/insert1',
                        type:'post',
                        data:jsonNews,
                        datatype:'json',
                        success:function (data) {
                            // console.log(data)
                            me.$newstitle.val('');
                            me.$newsimg.val('');
                            me.$newstime.val('');
                            me.$newssrc.val('');
                            me.$newstype.val('');
                            me.refreshBNews();//刷新页面
                        },
                        error:function (error) {
                            console.log(error)
                        }
                    });
                }
            });
            /**
             * 删除新闻的功能
             * 绑定删除事件,需要用事件委托方式
             */
            var deleteID = null;
            me.$newstable.on('click','.btn-danger',function (e) {
                me.$deletModa.modal('show');
                deleteID = $(this).parent().prevAll().eq(5).html();
                // console.log($(this).parent().prevAll().eq(5).html());
            });
            me.$confirmdelet.click(function () {
                me.$deletModa.modal('hide');
                if (deleteID){
                    $.ajax({
                        url:'/admin/delete',
                        type:'post',
                        data:{newsid:deleteID},
                        datatype:'json',
                        success:function (data) {
                            console.log(data);
                            me.refreshBNews();//刷新页面
                        },
                        error:function (error) {
                            console.log(error)
                        }
                    });
                }
            });
            /**
             * 编辑修改新闻的功能
             * 绑定修改事件,需要用事件委托方式
             */
            var updataID = null;
            me.$newstable.on('click','.btn-primary',function (e) {
                me.$updataModal.modal('show');
                updataID = $(this).parent().prevAll().eq(5).html();
                console.log($(this).parent().prevAll().eq(5).html());
                // 给页面元素赋值
                $.ajax({
                    url:'/admin/curnews',
                    type:'get',
                    datatype:'json',
                    data:{newsid:updataID},
                    success:function (data) {
                        //给弹出框赋值
                        me.$unewstitle.val(data[0].newstitle);
                        me.$unewstype.val(data[0].newstype);
                        me.$unewsimg.val(data[0].newsimg);
                        var utime = data[0].newstime.split('T')[0];
                        me.$unewstime.val(utime);
                        me.$unewssrc.val(data[0].newssrc);
                    }
                })
            });
            me.$confirmupdata.click(function () {
                me.$updataModal.modal('hide');
                if (updataID){
                    //检验通过  发请求
                    var jsonUpdata = {
                        newsid:updataID,
                        newstitle:me.$unewstitle.val(),
                        newsimg:me.$unewsimg.val(),
                        newstype:me.$unewstype.val(),
                        newstime:me.$unewstime.val(),
                        newssrc:me.$unewssrc.val()
                    };
                    $.ajax({
                        url:'/admin/updata',
                        type:'post',
                        data:jsonUpdata,
                        datatype:'json',
                        success:function (data) {
                            console.log(data);
                            me.refreshBNews();//刷新页面
                        },
                        error:function (error) {
                            console.log(error)
                        }
                    });
                }
            });
        },
        /**
         * 刷新新闻界面
         */
        refreshBNews:function refreshBNews() {
        //empty table
        var me = this;
            me.$newstable.empty();
            $.ajax({
                url:'/admin/getNews',
                type:'get',
                // data:{newstype:''},
                datatype:'json',
                success:function (data) {
                    console.log(data);
                    data.forEach(function (item,index,array) {
                        var $tdid = $('<td></td>').html(item.id);
                        var $tdtype = $('<td></td>').html(item.newstype);
                        var $tdtitle = $('<td></td>').html(item.newstitle);
                        var $tdimg = $('<td></td>').html(item.newsimg);
                        var $tdsrc = $('<td></td>').html(item.newssrc);
                        var $tdtime = $('<td></td>').html(moment(item.newstime).format('MMMM Do YYYY, h:mm:ss'));
                        var $tdctrl = $('<td></td>');
                        var $btnupdata = $('<button></button>').addClass('btn btn-primary btn-xs').html('修改');
                        var $btndelect = $('<button></button>').addClass('btn btn-danger btn-xs').html('删除');
                        $tdctrl.append($btnupdata,$btndelect);
                        var $tRow = $('<tr></tr>');
                        $tRow.append($tdid,$tdtype,$tdtitle,$tdimg,$tdsrc,$tdtime,$tdctrl);
                        me.$newstable.append($tRow);
                    })
                },
                error:function (error) {
                    console.log( error)
                }
            })
    }
    };

    admin.init();
});

