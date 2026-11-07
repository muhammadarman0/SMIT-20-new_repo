// let name = "muhammad arman"
// console.log(name);

const fs = require("fs");

// let ms =  fs.writeFileSync("./server.txt", "Hello world")
// let msg =  fs.writeFile(
//   "./server.txt",
//   "Mujhe apna time waste nhi karna hn ab",
//   "utf-8",
//   (err) => {
//     console.log("geo", err);
//   },
// );

// console.log(msg);
// let readFileKari = fs.readFile("./about.txt", "utf-8", (data,err) => {
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(data);
    
// });

// console.log(readFileKari);


const http = require("http")

const url = require("url")

let serverBana = http.createServer((req,res)=>{
    if(req.url === "/shose"){
        res.end("Shose mil gaye")
    }else{
        res.end("Hello world")
    }
})

serverBana.listen(5500,"127.0.0.1",()=>{
    console.log("server is listening port 5500");
    
})