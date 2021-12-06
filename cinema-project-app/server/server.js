// server/index.js

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//test API router setup
const testAPIRouter = require("./routes/testAPI");
const bookingRouter = require("./routes/bookings")
const moviesRouter = require('./routes/movies');
const screenRouter = require('./routes/screens');
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

app.use('/bookings', bookingRouter);
app.use('/movies', moviesRouter);
app.use('/screens', screenRouter);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
