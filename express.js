const express=require("express");
const app=express();
const mongoose=require('./mongoose');

app.use(express.urlencoded({extended:false}));

app.use(express.static('./public'));
app.set("view engine","ejs");
app.get("/home",(req,resp)=>{
    resp.render('home');
})
app.get("/contact",(req,resp)=>{
    resp.render('contact');
})
app.get("/aloha",(req,resp)=>{
    resp.render('ALOHA');
})
app.post("/aloha",async (req,resp)=>{
    try{

        const insertedata= new mongoose({
            Name:req.body.name,
            Mobile:req.body.mobile,
            Email:req.body.email,
            People:req.body.people,
            kids:req.body.kids,
            Time_from:req.body.time1,
            Time_to:req.body.time2,
            Apple:req.body.apple,
            Mango:req.body.mango,
            Peru:req.body.chiku,
            main_course:req.body.maincourse

        })
        const data=await insertedata.save();
        if(!data){
            
            resp.send("data not inserted");
        }else
        {
    resp.send("message recived")
 }       
      }catch(err){
          resp.status(404).send("error occurs");
      }
})



app.get("/swan",async (req,resp)=>{
resp.render("swan")
})


app.get("/about",async (req,resp)=>{
    resp.render("about");
})    

app.listen((5500),()=>{
    console.log("server is running....");
})