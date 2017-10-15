/**
 * Created by root on 2017/10/15.
 */
const mongoose = require('mongoose');
const setting = require('./setting')
mongoose.Promise = global.Promise;
const cn = mongoose.connect(`mongodb://${setting.host}/${setting.db}`);
cn.connection.on("open",function(){
    console.log("数据库已连接");
});

cn.connection.on("error",function(){
    console.log("数据库连接失败");
});

