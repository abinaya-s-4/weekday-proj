import express from "express";


const app = express();
const port=3000;

app.get("/",(req,res)=>{
    const d= new Date();
    const a =d.getDay();
    //console.log(a);
    let type="a weekday";
    if(a<=5){
       let type="a weekday"; 
    }else if(a==6||a==7){
        let type="a weekend";
    }
    res.render("index.ejs",{
        dayType:type, 
        advice: "it's time to work hard",
    });
});


app.listen(3000,()=>{
    console.log(`Server running on port ${port}`);
});