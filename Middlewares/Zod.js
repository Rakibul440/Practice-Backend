const express = require('express')
const {z} = require('zod')
const app = express()
const port = 3000

//Zod is use for input validation

//check array of number like ==> [1,2]
const schema = z.array(z.number())

//schema 2
const schema2 = z.object({
    username : z.string().email().endsWith(".com",{message:"Only .com domains allowed"}),
    password : z.string().min(6,{message:"Password should be 6 or more character long"}),
    country : z.literal("IN").or(z.literal("US"))
})

app.use(express.json())

app.get('/',(req,res)=>{
 res.send("Hey Cutie!!")
})

app.post('/health-checkup',(req,res)=>{
    // kidneys [1,2]
    const kidneys = req.body.kidney

    //check 'kidnes' is array of numbers or not
    const response = schema.safeParse(kidneys) // return 'true' or 'false'
    if(!response.success){
        res.status(411).json({
            msg : "Input is invalid!"
        })
    }else{
        res.send({
            response
        })
    }
})


app.listen(port,()=>{
    console.log(`App Is running on http://localhost:${port}`);
    
}) 