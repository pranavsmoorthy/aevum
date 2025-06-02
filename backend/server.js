const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const path = require('path');
const cors = require("cors");

const corsOptions = {
    origin: ["http://localhost:3000", "http://localhost:5001"]
}

const port = process.env.PORT || 5000;
const app = express();
connectDb();

app.use(cors(corsOptions));
app.use(express.static("public"));

app.use(express.json());
//app.use("/api/charultima/users", require("./routes/userRoutes"));

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});