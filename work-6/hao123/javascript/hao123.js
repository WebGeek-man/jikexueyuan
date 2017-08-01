/**
 * Created by meihuabing on 2017/5/19.
 */


// 导航栏背景
var nav = document.getElementById('bg-nav');
// 导航栏tab按钮
var navtabList = document.getElementsByClassName('nav-tab');
//权威指南
var recommendList = document.getElementsByClassName('recommend');
var recommendspan = document.getElementById('recommend-span');
//主体第一个部分
var contentrightList = document.getElementsByClassName('content-right-first');
//内容部分  关键字颜色
var textColorList = document.getElementsByClassName('key-text-color');


var btnList= document.getElementsByClassName('checkbox-button')
for (var i = 0; i<btnList.length;i++){
    var button = btnList[i];
    button.addEventListener("click",buttonclicked,false)
}

window.onload = function () {

    if (localStorage.celectColor){
        topicSelection(localStorage.celectColor)
    }

};


//button点击事件
function buttonclicked(obj) {
    topicSelection(this.title)

}



// 颜色选择器
function topicSelection(obj) {

    switch (obj){
        case 'button-red':
            nav.style.background = "red";
            navtabList[0].style.background = "red";
            recommendList[0].style.border = "1px solid red";
            recommendList[0].style.borderTop = "none";
            recommendspan.style.color = "red";
            recommendspan.style.borderRight = "1px solid red";
            contentrightList[0].style.border = "1px solid red";
            for (var i = 0;i<textColorList.length;i++){
                textColorList[i].style.color = "red";
            }
            // 数据存储
            localStorage.celectColor = "button-red";

            break;
        case 'button-yellow':
            nav.style.background = "yellowgreen";
            navtabList[0].style.background = "yellowgreen";
            recommendList[0].style.border = "1px solid yellowgreen";
            recommendList[0].style.borderTop = "none";
            recommendspan.style.color = "yellowgreen";
            recommendspan.style.borderRight = "1px solid yellowgreen";
            contentrightList[0].style.border = "1px solid yellowgreen";
            for (var i = 0;i<textColorList.length;i++){
                textColorList[i].style.color = "yellowgreen";
            }
            // 数据存储
            localStorage.celectColor = "button-yellow";
            break;
        case 'button-blue':
            nav.style.background = "blue";
            navtabList[0].style.background = "blue";
            recommendList[0].style.border = "1px solid blue";
            recommendList[0].style.borderTop = "none";
            recommendspan.style.color = "blue";
            recommendspan.style.borderRight = "1px solid blue";
            contentrightList[0].style.border = "1px solid blue";
            for (var i = 0;i<textColorList.length;i++){
                textColorList[i].style.color = "blue";
            }
            // 数据存储
            localStorage.celectColor = "button-blue";
            break;
        case 'button-gold':
            nav.style.background = "gold";
            navtabList[0].style.background = "gold";
            recommendList[0].style.border = "1px solid gold";
            recommendList[0].style.borderTop = "none";
            recommendspan.style.color = "gold";
            recommendspan.style.borderRight = "1px solid gold";
            contentrightList[0].style.border = "1px solid gold";
            for (var i = 0;i<textColorList.length;i++){
                textColorList[i].style.color = "gold";
            }
            // 数据存储
            localStorage.celectColor = "button-gold";
            break;
        case 'button-puple':
            nav.style.background = "mediumpurple";
            navtabList[0].style.background = "mediumpurple";
            recommendList[0].style.border = "1px solid mediumpurple";
            recommendList[0].style.borderTop = "none";
            recommendspan.style.color = "mediumpurple";
            recommendspan.style.borderRight = "1px solid mediumpurple";
            contentrightList[0].style.border = "1px solid mediumpurple";
            for (var i = 0;i<textColorList.length;i++){
                textColorList[i].style.color = "mediumpurple";
            }
            // 数据存储
            localStorage.celectColor = "button-puple";
            break;
        default :
            break;
    }
}