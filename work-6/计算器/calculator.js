/**
 * Created by meihuabing on 2017/5/18.
 */

// 分别保存运算的两个值
var firstValue = "";
var secondValue = "";
// 保存运算符的值
var operatorValue = "";

//判断小数点，每个运算值只能出现一次
var decimalPoint = false;

var inputText = document.getElementById('resultID');
var clearData = document.getElementById('clearData');

window.onload = function () {

    var spanArray = document.getElementsByTagName('span');

    for(var i =0;i<spanArray.length;i++){
        spanArray[i].addEventListener("mousedown",mousedownObj,false);
        spanArray[i].addEventListener("mouseup",mouseupObj,false);
        spanArray[i].addEventListener("click",clickMethod,false);
    }

};


/**
 * 鼠标点击事件
 */
function mousedownObj() {
    if (this.className == "character"){
        this.style.background = 'rgb(153,153,153)'
    } else if (this.className == "operator"){
        this.style.background = 'rgb(181,95,28)'
    } else if (this.className == "digital"){
        this.style.background = 'rgb(163,163,163)'
    } else if (this.className == "senior"){
        this.style.background = 'rgb(130,130,130)'
    }
}


function mouseupObj() {
    if (this.className == "character"){
        this.style.background = 'rgb(205,205,205)'
    } else if (this.className == "operator"){
        this.style.background = 'rgb(243,127,38)'
    } else if (this.className == "digital"){
        this.style.background = 'rgb(217,217,217)'
    } else if (this.className == "senior"){
        this.style.background = 'rgb(190,190,190)'
    }
}


// 用户操作  数据逻辑运算
function clickMethod() {

    console.log("firstValue:"+firstValue);
    console.log("secondValue:"+secondValue);


    if (this.title == "C"){
        this.innerHTML = "AC";
        this.title = "AC";
        //判断当前清除的是参数1还是参数2   当参数2为空的时候，全部置空
        if (operatorValue == ""){
            //只有参数1
            firstValue = "";
            secondValue = "";
            decimalPoint = false;
            operatorValue = "";
        } else {
            //置空参数2
            secondValue = "";
            decimalPoint = false;
        }
        inputText.value = "0";
        return;
    }

    if (this.title == "AC"){
        //全部置空
        firstValue = "";
        secondValue = "";
        decimalPoint = false;
        operatorValue = "";
        inputText.value = "0";
        return;
    }

    //判断是否添加正负号
    if (this.className =="character" && this.title == "+/-"){
        //判断当前是参数1还是参数2
        if (operatorValue == ""){
            if (firstValue != "0" && firstValue != ""){
                if (firstValue.indexOf("-") == -1){
                    firstValue = "-"+firstValue;
                } else {
                    firstValue = firstValue.replace("-","")
                }
                inputText.value = firstValue;
            }

        } else {
            //置空参数2
            if (secondValue != "0" && secondValue != ""){
                if (secondValue.indexOf("-") == -1){
                    secondValue = "-"+secondValue;
                } else {
                    secondValue = secondValue.replace("-","")
                }
                inputText.value = secondValue;
            }
        }
        return;
    }


    //判断用户是否点击了 %
    if (this.className =="character" && this.title == "%"){
        if (operatorValue == ""){
            if (firstValue != "0" && firstValue != ""){
               //除以 0.01  后赋值
                firstValue = calculator(parseFloat(firstValue),0.01,"x");
                inputText.value = firstValue;
            }

        } else {
            //置空参数2
            if (secondValue != "0" && secondValue != "") {
                if (secondValue != "0" && secondValue != "") {
                    //除以 0.01  后赋值
                    secondValue = calculator(parseFloat(secondValue), 0.01, "x");
                    inputText.value = secondValue;
                }
            }
        }
        return;
    }

    //高级运算部分
    if (this.className =="senior") {
        //直接获取屏幕上的值  ，进行运算后赋值给第一个参数 ，第二个参数与之前的运算符清空
        var screenVal = inputText.value;
        var seniorValue = "0";
        if (this.title == "log"){
            seniorValue = Math.log(screenVal);
        } else if(this.title == "sin") {
            seniorValue = Math.cos(screenVal);
        } else if(this.title == "cos") {
            seniorValue = Math.cos(screenVal);
        } else if(this.title == "tan") {
            seniorValue = Math.tan(screenVal);
        } else if(this.title == "pinfang") {
            seniorValue = Math.sqrt(screenVal);
        }

        inputText.value = seniorValue;
        firstValue = seniorValue;
        secondValue = "";
        decimalPoint = false;
        operatorValue = "";
        return;
    }

    // 判断用户是否点击了操作符，并且 是否 是 =
    if (this.className =="operator" && this.title != "="){
        //是运算符号，并且不是 =
        operatorValue = this.title;
        decimalPoint = false; //将小数点设置成false
        secondValue = "";
        return;//运算符  不用再往下执行
    }

    if (this.className =="operator" && this.title == "="){
        //用户输入 = ，进行运算 ，判断 除法 被除数不能为0 ==》 NAN

        //进行运算

        var resltVal = calculator(parseFloat(firstValue),parseFloat(secondValue),operatorValue);
       inputText.value = resltVal;
        //运算完  结果给第一个参数 第二个参数置空
        if (resltVal =="NaN" || resltVal == "非法运算" ||resltVal=="NAN"){
            firstValue = "";
            secondValue = "";
            decimalPoint = false;
            operatorValue = "";
        } else {
            firstValue = resltVal;
            secondValue = "";
            decimalPoint = false;
        }

    }



    //获取运算的第一个参数和第二个参数，区别就是判断operatorValue是否有值
    if (this.className =="digital"){
        //首先将AC的状态改变
        clearData.innerHTML = "C";
        clearData.title = "C";

        if (operatorValue == ""){
            //拼接第一个参数
            //判断 value是否为0，0的话不能拼接
            if (firstValue == "0"|| firstValue == ""){
                if (this.title != "."){
                    firstValue = this.title;
                    inputText.value = firstValue;
                    return;
                }else {
                    firstValue = "0.";
                    inputText.value = firstValue;
                    decimalPoint = true;
                    return;
                }
            }

            if (this.title == '.' && !decimalPoint){
                decimalPoint = true;
            } else if (this.title == '.' && decimalPoint){
                return;
            }


            firstValue += this.title;
            inputText.value = firstValue;


        } else {
            //拼接第二个参数
            //判断 value是否为0，0的话 第二位是小数点，正常输入，否则替换
            if (secondValue == "0" || secondValue == ""){
                if (this.title != "."){
                    secondValue = this.title;
                    inputText.value = secondValue;
                    return;
                } else {
                    secondValue = "0.";
                    inputText.value = secondValue;
                    decimalPoint = true;
                    return;
                }
            }

            if (this.title == '.' && !decimalPoint){
                decimalPoint = true;
            } else if (this.title == '.' && decimalPoint){
                return;
            }

            secondValue += this.title;
            inputText.value = secondValue;

        }

    }


}





//加法
function FloatAdd(arg1,arg2){
    var r1,r2,m;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2));
    return  (arg1*m+arg2*m)/m;
}

//减法
function FloatSub(arg1,arg2){
    var r1,r2,m,n;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2));
    //动态控制精度长度
    n=(r1>=r2)?r1:r2;
    return ((arg1*m-arg2*m)/m).toFixed(n);
}

//乘法
function FloatMul(arg1,arg2)   {
    var m=0,s1=arg1.toString(),s2=arg2.toString();
    try{m+=s1.split(".")[1].length}catch(e){}
    try{m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
}


//除法
function FloatDiv(arg1,arg2){
    var t1=0,t2=0,r1,r2;
    try{t1=arg1.toString().split(".")[1].length}catch(e){}
    try{t2=arg2.toString().split(".")[1].length}catch(e){}
    with(Math){
        r1=Number(arg1.toString().replace(".",""));

        r2=Number(arg2.toString().replace(".",""));
        return (r1/r2)*pow(10,t2-t1);
    }
}

/*
 x/y为运算参数
 operator为运算符：+ - * /
 */
function calculator(x,y,operator) {
    var result=null;
    if (operator == "+"){
        result= FloatAdd(x,y);
    } else if(operator == "-"){
        result=FloatSub(x,y);
    } else if(operator == "x"){
        result= FloatMul(x,y);
    } else if(operator == "÷"){
        if (y==0){
            result = "NAN";
        } else {
            result= FloatDiv(x,y);
        }
    } else {
        result = "非法运算";
    }
    return result;
}