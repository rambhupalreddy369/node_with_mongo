const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const app = express();
const PORT = 4000;

//importing all routes from routes file
const productRoute = require("./routes/product.route.js");
//get the response from the root directory
app.get("/", (req, res) => {
  res.send("Hello from Node api server updated");
});

//routes
app.use("/api/products", productRoute);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//conncetd to the mongo db and app is started to listening after connection of db
mongoose
  .connect(
    "mongodb+srv://rambhupalreddy369:F4s3HmDOp9TggLem@backenddb.cvjd1dv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Database Connected!");
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT} `);
    });
  })
  .catch(() => console.log("Database connected failed"));
