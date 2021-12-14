"use strict";

const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");

const server = require("../server.js");
chai.use(chaiHttp);

describe("testing discussion routes", function () {
  it("should be status 201 when creating a new post", function (done) {
    chai
      .request(server)
      .post("/posts/create")
      .send({ text: "this is the text" })
      .end((err, response) => {
        expect(response).to.have.status(201);
        expect(response).to.not.be.null;

        done();
      });
  });
  it("should be status 200 when reading all posts", function (done) {
    chai
      .request(server)
      .get("/posts/")
      .end((err, response) => {
        if (err) {
          console.log(`error: ${err}`);
        }
        expect(response).to.have.status(200);
        expect(response).to.not.be.null;

        done(err);
      });
  });
  it("should be status 200 when reading posts by id", function (done) {
    chai
      .request(server)
      .get("/posts/61afb8fb2805a35cf2d0dd02")
      .end((err, response) => {
        if (err) {
          console.log(`error: ${err}`);
        }
        expect(response).to.have.status(200);
        expect(response).to.not.be.null;

        done(err);
      });
  });
  it("should be status 200 when reading posts by movie id", function (done) {
    chai
      .request(server)
      .get("/posts/movie/61af96aee0eab7107e5db896")
      .end((err, response) => {
        if (err) {
          console.log(`error: ${err}`);
        }
        expect(response).to.have.status(200);
        expect(response).to.not.be.null;

        done(err);
      });
  });
  it("should return 204 when deleting a post", function (done) {
    chai
      .request(server)

      .delete("/posts/delete/61b7a389875ae1ff3b22214a")

      .end((err, response) => {
        expect(response).to.have.status(204);
        expect(response).to.not.be.null;

        done();
      });
  });
  it("should be status 202 when updating posts by movie id", function (done) {
    chai
      .request(server)
      .put("/posts/update/61b772f9fbd37b49bcdc347b")
      .end((err, response) => {
        expect(response).to.have.status(202);
        expect(response).to.not.be.null;

        done();
      });
  });
});
