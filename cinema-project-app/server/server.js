// server/index.js

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//test API router setup
const testAPIRouter = require("./routes/testAPI");
const moviesRouter = require('./routes/movies');
const PORT = process.env.PORT || 3001;

const app = express();

//cors setup
app.use(cors());

const database = require("./secrets/mongoURI").mongoURI;

mongoose.connect(database, { useNewUrlParser: true }).then(
  () => {
    console.log("******MongoDB Successfully Connected******");
  },
  (err) => {
    console.log(err);
  }
);

//middleware to use testAPIROuter

app.use(express.json());

// app.use("/testAPI", testAPIRouter);

app.use('/movies', moviesRouter);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
