/**
 * Created by hama on 2017/9/18.
 */
//用户信息表
const mongoose = require('mongoose');
//引入shortid生成ID的插件
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    //定义字段

    //用户名
    name:{
        type:String,
        required:true
    },
    //密码
    password:{
        type:String,
        required:true
    },

})
const User = mongoose.model('User',UserSchema);
module.exports = User
