const api_route = require("./Routes/api"); //route path
const Cat = require("./models/mainModel"); // imported model
const Productmodel = require("./models/model"); // schema
const { express, mongoose, dotenv } = require("./modules/imports"); //requires
const app = express();
const port = 3000;

// Connect to database
mongoose.connect('mongodb://127.0.0.1:27017/product');


// Create a new product
const product1 = new Cat({
    productName: "iphone7",
    price: 290,
    company: "Apple"
});
product1.save().then(() => console.log('product is created'));




// Handle GET request to root endpoint
app.use("/",api_route)

// Use api_route for the '/api/data' endpoint
app.use("/api/data", api_route);

// Start the server
app.listen(port, function(req, res) {
    console.log(`app is running on ${port}`);
});
