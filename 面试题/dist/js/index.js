/**
 * Created by meihuabing on 2017/7/30.
 */
$(document).ready(function () {


    $('#myhtml').click(function () {
        $('#javascript').css({
            display:'none'
        })
        $('#htmlcss').css({
            display:'block'
        })
    });

    $('#myjs').click(function () {
        $('#javascript').css({
            display:'block'
        })
        $('#htmlcss').css({
            display:'none'
        })
    });



});