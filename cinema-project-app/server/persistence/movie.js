const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema(
  {
    title: String,
    rating: String,
    runtime: Number,
    cast: [String],
    imageUrl: String,
    release: String,
    tags: [String],
    description: String,
  },
  { versionKey: false }
);

const Movie = model("Movie", movieSchema);

module.exports = { Movie: Movie };
