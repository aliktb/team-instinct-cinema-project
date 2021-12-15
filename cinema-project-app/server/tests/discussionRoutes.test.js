"use strict";

const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { Discussion } = require('../persistence/discussion');

const server = require("../server.js");
chai.use(chaiHttp);

describe("testing discussion routes", function () {

  const createDiscussion = new Discussion({
    name: "test name",
    test: "test text",
    movieId: "testid",
    thread: "test thread",
    rating: "PG"
  })


  it("should be status 201 when creating a new post", function (done) {
    chai
      .request(server)
      .post("/posts/create")
      .send(createDiscussion)
      .end((err, response) => {
        expect(response).to.have.status(201);
        expect(response).to.not.be.null;
        expect(response).to.have.property('text', JSON.stringify(createDiscussion));

        done();
      });
  });

  const readDiscussion = new Discussion({
    name: "test name",
    test: "test text",
    movieId: "testid",
    thread: "test thread",
    rating: "PG"
  })

  before((done) => {
    chai.request(server).post('/discussions/create').send(readDiscussion).end(() => {
      done();
    })
  })

  it("should be status 200 when reading all posts", function (done) {
    chai
      .request(server)
      .get("/posts/")
      .end((err, response) => {
        if (err) {
          console.log(`error: ${err}`);
        }
        const body = response.body;
        expect(response).to.have.status(200);
        expect(response).to.not.be.null;

        body.map((post) => {
          console.log(post)
          expect(post).to.be.a('object');
          expect(post).to.contain.keys('name');
          expect(post.thread).to.be.a('string');
        })

        done(err);
      });
  });


  it("should be status 200 when reading posts by id", function (done) {
    chai
      .request(server)
      .get("/posts/61b9dc38c4b835ae45ab55db")
      .end((err, response) => {
        if (err) {
          console.log(`error: ${err}`);
        }
        expect(response).to.have.status(200);
        expect(response).to.not.be.null;
        expect(response.body).to.be.a('object');
        expect(response.body).to.contain.keys('name');
        expect(response.body.thread).to.be.a('string');
        done(err);
      });
  });

  it("should be status 200 when reading posts by movie id", function (done) {
    chai
      .request(server)
      .get("/posts/movie/testid")
      .end((err, response) => {
        if (err) {
          console.log(`error: ${err}`);
        }

        expect(response).to.have.status(200);
        expect(response).to.not.be.null;

        response.body.map((post) => {
          expect(post).to.be.a('object');
          expect(post).to.contain.keys('name');
          expect(post.thread).to.be.a('string');

        });

        done(err);
      });
  });
  it("should return 204 when deleting a post", function (done) {
    chai
      .request(server)

      .delete("/posts/delete/61b9dc1d9cd0bb7d904707b6")

      .end((err, response) => {
        expect(response).to.have.status(204);
        expect(response).to.not.be.null;

        done();
      });
  });

  it("should be status 202 when updating posts by movie id", function (done) {
    let newObj = {
      name: "updated name",
      test: "updated text",
      movieId: "testid",
      thread: "test thread",
      rating: "PG"
    }
    chai
      .request(server)
      .put("/posts/update/61b9dc38c4b835ae45ab55db")
      .send(newObj)
      .end((err, response) => {
        expect(response).to.have.status(202);
        expect(response).to.not.be.null;
        expect(response.body.name).to.be.equal('updated name')

        chai.request(server).put('/posts/update/61b9dc38c4b835ae45ab55db').send(createDiscussion)

        done();
      });

  });
});
