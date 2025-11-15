const express = require("express");
const productRoute = require("./Routes/productRoute");
const connectDb = require('./Configuration/connectDb');
var cors = require('cors');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
connectDb();
app.use(cors())
app.listen(port, (error) => {
    if (error) { console.log("Server Failed") }
    else {
        console.log(`server is running on port ${port}`);
    }
});
app.use(express.json())
app.use("/api", productRoute);