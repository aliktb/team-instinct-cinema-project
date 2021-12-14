"use strict";

const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");

// Link our index file
const server = require("../server.js");

// Told chai to use chaihttp
chai.use(chaiHttp);

// beforeEach((done) => setTimeout(done, 1000));

describe("basic testing", function () {
  it("should return status 200 when accessing route /", function (done) {
    chai
      .request(server)

      .get("/movies/")

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

  it("should return 200 when searching a title", function (done) {
    chai
      .request(server)

      .get("/movies/title/boss")

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

  it("should return 200 when searching by cast", function (done) {
    chai
      .request(server)

      .get("/movies/cast/Avan")

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

  it("should return 200 when searching by id", function (done) {
    chai
      .request(server)

      .get("/movies/61b26e93bb8fde22737193a5")

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

  it("should return 201 when creating a new movie", function (done) {
    chai
      .request(server)

      .post("/movies/create")
      .send({ title: "testTitle" })

      .end((err, response) => {
        expect(response).to.have.status(201);
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

  it("should return 202 when updating a movie", function (done) {
    chai
      .request(server)

      .put("/movies/update/61b7a54f1a40d2f7147c448e")

      .end((err, response) => {
        expect(response).to.have.status(202);
        expect(response).to.not.be.null;

        done();
      });
  });
});