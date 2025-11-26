const express = require("express");
const productRoute = require("./Routes/productRoute");
const userRoute = require("./Routes/userRoute");
const connectDb = require('./Configuration/connectDb');
var cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
connectDb();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(cookieParser());
app.use(express.json())
app.listen(port, (error) => {
    if (error) { console.log("Server Failed") }
    else {
        console.log(`server is running on port ${port}`);
    }
});
app.use("/api", productRoute);
app.use("/api/user", userRoute);