/**
 * Created by meihuabing on 2017/5/25.
 */

console.log("111111")

define(["require"],function (require) {
    //Do setup work here
    require(['test','test111'],function (test,test111) {
        console.log(test)
        console.log(test111)
        // test.init();
        // test.auto();
        // test111();
    })

});