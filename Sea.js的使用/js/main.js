/**
 * Created by meihuabing on 2017/5/25.
 */
define(function(require, exports, module) {
    console.log("我进来了 main");
    // 通过 require 引入依赖
    var $ = require('jquery');
    // var test = require('./test');
    var test = require.async('test',function (test_block) {
        // console.log(test_block.doSomething())
        // console.log(test_block.doSomething2())
        // console.log(test_block)
        test_block.doSomething();
        test_block.doSomething2()
    });

    // 通过 exports 对外提供接口
    // exports.doSomething = ...

    // 或者通过 module.exports 提供整个接口
    // module.exports = ...

});