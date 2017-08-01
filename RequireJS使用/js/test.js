/**
 * Created by meihuabing on 2017/5/25.
 */

define(["require","test"],function (require) {
    //Do setup work here
    var indexT = {}
    indexT = {
         init:function () {
            console.log("init test")
        },
        auto:function () {
            console.log("auto test")
        }
    }

    return indexT;
});