const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected"))
    .catch((err => console.log("Database Connection Error")))


app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));



const port = process.env.PORT || 8080;

const server = app.listen(port, () => console.log(`Server is running on port ${port}`));
