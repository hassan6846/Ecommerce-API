const api_route = require("./Routes/api");
const Productmodel = require("./models/model");
const { express, mongoose, dotenv } = require("./modules/imports"); //requires
const app = express();
const port = 3000;

// Connect to database
mongoose.connect('mongodb://127.0.0.1:27017/product');
const Cat = mongoose.model('Cat', {
    productName: String,
    price: Number,
    company: String
});

// Create a new product
const product1 = new Cat({
    productName: "iphone7",
    price: 290,
    company: "Apple"
});
product1.save().then(() => console.log('product is created'));

// Handle GET request to root endpoint
app.get("/", async function(req, res) {
    try {
        const mydata = await Cat.find(req.query)
        res.status(200);
        res.json(mydata);
        req.query
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Use api_route for the '/api/data' endpoint
app.use("/api/data", api_route);

// Start the server
app.listen(port, function(req, res) {
    console.log(`app is running on ${port}`);
});
