const { default: mongoose } = require('mongoose');
const mongosee=require('mongoose');


mongoose.connect("mongodb://127.0.0.1:27017/bookyourtable").then(()=>{
    console.log("connection sucessful");
}).catch((err)=>{
    console.log(err);
});

const tableSchema= mongoose.Schema({
    Name:String,
    Mobile:Number,
    Email:String,
    People:String,
    kids:Number,
    Time_from:String,
    Time_to:String,
    Apple:String,
    Mango:String,
    Peru:String,
    main_course:String
});
 

const table=new mongosee.model('table',tableSchema);


module.exports=table;