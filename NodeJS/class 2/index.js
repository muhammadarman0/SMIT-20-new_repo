import express from 'express'

const app = express()

app.get("/",(req,res)=>{
    res.status(200).json({
        "status" : 200,
        user:[
            {
                email:"arman@mail.com",
                name:"Arman",
                username: "arman01",
                age:21
            }
        ]
    })
})


app.listen(5500,()=>{
    console.log("port is listning 5500");
    
})