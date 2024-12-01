const express = require('express')
const app = express()
const port = 3000
let requestCount = 0


/*Creating Middlewares*/
function checkUser(req,res,next){
    const d1 = new Date()
    const t1 = d1.getMilliseconds()

    const username = req.headers.username
    const password = req.headers.password
    if(username !== 'Rakibul' || password !== 'baccha'){
        res.status(403).json({
            messgae : "Something up with your inputs : Authentication"
        })
    }
    else{
        next()
    }
}
function checkKideny(req,res,next){
    const kidneyID = req.query.id
    const d2 = new Date()
    const t2 = d2.getMilliseconds()

    if(kidneyID !== '1' && kidneyID !== '2'){
        res.status(403).json({
            messgae : "Something up with your inputs : KidneyID"
        })
    }else{
        next()
    }
}
function calculatingRequest(req,res,next){
    requestCount++
    console.log(requestCount);
    next()
}
function calAvgTime_handleRequest(req,res,next){
    const time = t1 - t2
    console.log('time: ',time);
    
    next()
}
app.use(calculatingRequest) // it'll tigger after every request

app.get('/',(req,res)=>{

})

app.get('/health-check',checkUser,checkKideny,(req,res)=>{
    res.send('Your kidney is fine')
})

app.listen(port,()=>{
    console.log(`App Is running on http://localhost:${port}`);
    
})