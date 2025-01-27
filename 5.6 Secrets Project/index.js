import express, { response } from "express"
import axios from "axios"
import dotenv from "dotenv"

dotenv.config();
const url=process.env.URL;
console.log(url)

const app=express();
const port=5000;

app.use(express.static("public"));



app.get("/",async(req,res)=>
{
    try{
        const result=await axios.get(`${url}/random`);
    res.render("index.ejs",
        {
            secret:result.data.secret,
            user:result.data.username,
        }
    );
}catch(error){
    console.log(error.response.data)
    res.status(500)
}
})

app.listen(port,()=>
{
    console.log(`Running on port ${port}`)
})