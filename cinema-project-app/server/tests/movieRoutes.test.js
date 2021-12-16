"use strict";

const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { Movie } = require("../persistence/movie");

// Link our index file
const server = require("../server.js");

// Told chai to use chaihttp
chai.use(chaiHttp);

// beforeEach((done) => setTimeout(done, 1000));

describe("basic testing", function () {
  //test objects
  const createMovie = new Movie({
    title: "createMovieTitle",
    rating: "18",
    runtime: 100,
    cast: ["cast1", "cast"],
    imageUrl: "testUrl",
    release: "releaseDate",
    tags: ["tag1", "tag2"],
    description: "descriptionText",
  });

  const readMovie = new Movie({
    title: "createMovieTitle",
    rating: "12",
    runtime: 100,
    cast: ["cast1", "cast"],
    imageUrl: "testUrl",
    release: "releaseDate",
    tags: ["tag1", "tag2"],
    description: "descriptionText",
  });

  const updatedMovie = new Movie({
    title: "updatedMovieTitle",
    rating: "13",
    runtime: 150,
    cast: ["cast3", "cast4"],
    imageUrl: "testUrl2",
    release: "releaseDate2",
    tags: ["tag3", "tag4"],
    description: "descriptionText2",
  });

  before((done) => {
    chai
      .request(server)
      .post("/movies/create")
      .send(readMovie)
      .end(() => {
        done();
      });
  });

  it("should return 201 when creating a new movie [CREATE MOVIE]", function (done) {
    chai
      .request(server)

      .post("/movies/create")
      .send(createMovie)

      .end((err, response) => {
        expect(response).to.have.status(201);
        expect(response).to.not.be.null;
        expect(response).to.have.property("text", JSON.stringify(createMovie));

        done();
      });
  });

  it("should return status 200 when reading all movies [GET ALL]", function (done) {
    chai
      .request(server)

      .get("/movies/")

      .end((err, response) => {
        if (err) {
          console.log("something is wrong");
          done(err);
        }

        const body = response.body;
        expect(response).to.have.status(200);
        expect(response).to.not.be.null;

        //map every object within the response body
        body.map((movie) => {
          expect(movie).to.be.a("object");
          expect(movie).to.contain.keys("rating");
          expect(movie.runtime).to.be.a("number");
        });

        done();
      });
  });

  it("should return 200 when searching a title [GET BY TITLE]", function (done) {
    chai
      .request(server)

      .get("/movies/title/createMovieTitle")

      .end((err, response) => {
        if (err) {
          console.log("something is wrong");
          done(err);
        }

        const body = response.body;
        expect(response).to.have.status(200);
        expect(response).to.not.be.null;

        body.map((movie) => {
          expect(movie.title).to.be.equal("createMovieTitle");
          expect(movie).to.not.be.null;
        });
        done();
      });
  });

  it("should return 200 when searching by cast", function (done) {
    chai
      .request(server)

      .get("/movies/cast/Avan")

      .end((err, response) => {
        if (err) {
          console.log("something is wrong");
          done(err);
        }

        const body = response.body;
        expect(response).to.have.status(200);
        expect(response).to.not.be.null;

        body.map((movie) => {
          expect(movie.cast[0]).to.be.equal("tag1");
          expect(movie).to.not.be.null;
        });
        done();
      });
  });

  it("should return 200 when searching by id", function (done) {
    chai
      .request(server)

      .get("/movies/61ba026281c395e0be00dd33")

      .end((err, response) => {
        if (err) {
          console.log("something is wrong");
          done(err);
        }

        expect(response).to.have.status(200);
        expect(response.body.title).to.be.equal("createMovieTitle");
        expect(response).to.not.be.null;
        done();
      });
  });

  it("should return 200 when searching by tag", function (done) {
    chai
      .request(server)

      .get("/movies/tag/sci")

      .end((err, response) => {
        if (err) {
          console.log("something is wrong");
          done(err);
        }

        expect(response).to.have.status(200);
        expect(response).to.not.be.null;
        done();
      });
  });

  it("should return 204 when deleting a movie", function (done) {
    chai
      .request(server)

      .delete("/movies/delete/61b7a389875ae1ff3b22214a")

      .end((err, response) => {
        expect(response).to.have.status(204);
        expect(response).to.not.be.null;

        done();
      });
  });

  it("should return 202 when updating a movie [UPDATE MOVIE]", function (done) {
    let newObj = {
      title: "updatedMovieTitle",
      rating: "13",
      runtime: 150,
      cast: ["cast3", "cast4"],
      imageUrl: "testUrl2",
      release: "releaseDate2",
      tags: ["tag3", "tag4"],
      description: "descriptionText2"
    }
    chai
      .request(server)

      .put("/movies/update/61ba0121438802e1d1f1d96a")

      .send(newObj)

      .end((err, response) => {
        expect(response).to.have.status(202);
        expect(response.body.title).to.be.equal("updatedMovieTitle");
        expect(response).to.not.be.null;

        done();
      });
  });

  after((done) => {
    chai
      .request(server)
      .put("/movies/update/61b9c757e8b9472a5b72c50e")
      .send(createMovie)
      .end(() => {
        done();
      });
  });
});
