const api=async(req,res)=>{
    res.status(200).json({
        msg:"API KEY VALUE PAIR WOuld apear here"
    })
}
// function 2
const apiTesting=async(req,res)=>{
    res.status(200).json({
        msg:`API KEY VALUE PAIR WOuld apear  here`
    })
}
module.exports={api,apiTesting}
