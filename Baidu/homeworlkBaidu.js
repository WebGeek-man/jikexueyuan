/**
 * Created by meihuabing on 2017/4/20.
 */

window.onload = function () {

    var moreDiv = document.getElementById("morePdu");
    var contentDiv = document.getElementById("right_items");


    moreDiv.onmouseover = function () {
        contentDiv.style.cssText = "display: block"
    };

    contentDiv.onmousemove=function(){
        contentDiv.style.cssText = "display: block"
    };

    contentDiv.onmouseout = function () {
        contentDiv.style.cssText = "display: none"
    }

};
