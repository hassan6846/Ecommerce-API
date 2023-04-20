const express=require('express')
const getData= async(req,res)=>{
    
res.status(200)
res.json({
    msg:"i am json data"
})

}
module.exports=getData;