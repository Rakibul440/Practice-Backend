const express = require('express')
const {z} = require('zod')

const app = express()
const port = 6969

app.use(express.json())

const schema = z.object({
    username : z.string().email().endsWith(".com",{message:"Only .com domains allowed"}),
    password : z.string().min(6,{message:"Password should be 6 or more character long"}),
    country : z.literal("IN").or(z.literal("US"))
})

/*
function InputValidation(obj){
    const response = schema.safeParse(obj)
    console.log(response);
    
}

const myInput = {
    username : "rakibulislammondal21@gmail.com",
    password : "Baccha@2005",
    country : "IN"
}

InputValidation(myInput)

*/

app.get("/",(req,res)=>{
    res.send("Hey Cuite!!")
})

app.post('/check-valid',(req,res)=>{
    const data = req.body;
    const response = schema.safeParse(data)

    /*
    if(!response.success){
        res.status(411).json({
            msg : "Invalid Input!"
        })
    }else{
        res.json(response)
    }
    */
    res.json(response)
})

app.listen(port,()=>{
    console.log(`App is running on - http://localhost:${port}`);
    
})