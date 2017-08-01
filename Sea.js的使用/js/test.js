/**
 * Created by meihuabing on 2017/5/25.
 */
define(function(require, exports, module) {
    // 通过 exports 对外提供接口
    var a = {};
    a.doSomething = function () {
        console.log("doSomething1")
    }
    a.doSomething2 = function () {
        console.log("doSomething2")
    }

    // exports.a = a;

    // 或者通过 module.exports 提供整个接口
    module.exports = a

});