
const { express,mongoose,dotenv } = require("./modules/imports"); //requires
mongoose.connect('mongodb://127.0.0.1:27017/Api');
const app=express();
const port=3000;
//// middlewaears


app.get("/",function(req,res){
    res.status(200)
    res.json({
        msg:"API KEY VALUE PAIR WOuld apear  here",
        url:"https://wtf.com",
        data:"WTF",
        Image : "this is the vale from key value pair",
        Name : "this is the vale from key value pair",
        Node : "this is the vale from key value pair",
        area : "this is the vale from key value pair",
        fight : "this is the vale from key value pair"

    
    })
    console.log(req.query)

})
app.get("/api",function(req,res){
    res.status(200)
    res.json({
        Route:"root/api",
        msg:"API KEY VALUE PAIR WOuld apear  here",
        url:"https://wtf.com",
        data:"WTF",
        Image : "this is the vale from key value pair",
        Name : "this is the vale from key value pair",
        Node : "this is the vale from key value pair",
        area : "this is the vale from key value pair",
        fight : "this is the vale from key value pair"
    })
})
//listening

    app.listen(port,function(req,res){
        console.log(`app is running on ${port}`)

       
    })


