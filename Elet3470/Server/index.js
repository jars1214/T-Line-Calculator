// const is for variables that dont change
const express=require("express")
const cors=require("cors")
const exec=require("child_process").exec // this is to access the python script

const app=express(); // app is the server
app.use(express.json())
app.use(cors())
app.post("/PV1",lossless)
function lossless(req,res){
    // This function will take a request and a response
    var e=req.body.epsilon
    var u=req.body.phase
   if(e!=""){
       //function1 will calculate the value of Phase Velocity
       exec("python function1.py "+ e,function(error,stdout,stderr){ 
        if(error){
            throw error
        }
        res.json({variable:"u",value:stdout,fancy:"Phase Velocity"})
        //res.json(`Phase ${stdout}`) // the output the python will return
       })
   }
   else{
       //function2 which will calculate the value of Epsilon
    
       exec("python function2.py "+ u,function(error,stdout,stderr){ 
        if(error){
            throw error
        }
        res.json({variable:"e",value:stdout,fancy:"Epsilon"})
      //  res.json(`Epsilon ${stdout}`) // the output the python will return
       })
   }
    
}
app.listen(5000,function(){console.log("server is running on port 5000")});

//nodemon (node monitor) restarts server everytime a change is made