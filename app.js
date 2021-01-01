const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
require("./db");

const userRoutes = require("./routes/user");
const blogRoutes = require("./routes/blogs");
const commentRoutes = require("./routes/comments");
const lieksRoutes = require("./routes/likes");



const port = process.env.PORT || 3001;

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());


// routes
app.use("/api", userRoutes);
app.use("/api", blogRoutes);
app.use("/api", commentRoutes);
app.use("/api", lieksRoutes);



app.listen(port, () => `server running on ${port}`);
