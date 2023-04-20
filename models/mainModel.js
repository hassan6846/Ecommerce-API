const mongoose=require("mongoose")
const Cat = mongoose.model('Cat', {
    productName: String,
    price: Number,
    company: String
});
module.exports=Cat;