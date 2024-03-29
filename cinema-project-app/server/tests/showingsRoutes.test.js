"use strict";

const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { Movie } = require("../persistence/movie");
const { Showing } = require("../persistence/showing");

const server = require("../server.js");

chai.use(chaiHttp);

describe("testing showings routes", function () {
  const createShowing = new Showing({
    screen: "screenOne",
    date: "2021-12-17",
    timeRaw: 1400,
    time: "14:00",
    movie: {},
    seats: [{}],
  });

  const readShowing = new Showing({
    screen: "screenTwo",
    date: "2021-12-15",
    timeRaw: 1230,
    time: "12:30",
    movie: { title: "West Side Story", tags: ["Action", "Adventure"] },
    seats: [{}],
  });

  const updateShowing = new Showing({
    screen: "screenTwo",
    date: "2021-12-19",
    timeRaw: "17:00",
    time: "12:30",
    movie: { title: "West Side Story", tags: ["Action", "Adventure"] },
    seats: [{}],
  });

  before((done) => {
    chai
      .request(server)
      .post("/Showings/create")
      .send(readShowing)
      .end(() => {
        done();
      });
  });

  it("should return a status of 201 when creating a new showings", function (done) {
    chai
      .request(server)
      .post("/Showings/create")
      .send(createShowing)
      .end((err, response) => {
        expect(response).to.have.status(201);
        expect(response).to.not.be.null;
        expect(response).to.have.property(
          "text",
          JSON.stringify(createShowing)
        );

        done();
      });
  });

  it("should return a status of 200 when getting a showing by ID", function (done) {
    chai
      .request(server)
      .get("/Showings/61b9c825d48cad93de718a15")
      .end((err, response) => {
        if (err) {
          console.log("something is wrong...");
          done(err);
        }
        expect(response).to.have.status(200);
        expect(response).to.not.be.null;
        done();
      });
  });

  it("should return a status of 200 when getting all showings", function (done) {
    chai
      .request(server)
      .get("/Showings/")
      .end((err, response) => {
        if (err) {
          console.log("something is wrong...");
          done(err);
        }
        const body = response.body;
        expect(response).to.have.status(200);
        expect(response).to.not.be.null;

        // map every object within the response body
        body.map((showing) => {
          expect(showing).to.be.a("object");
          expect(showing).to.contain.keys("screen");
          expect(showing.timeRaw).to.be.a("number");
        });

        done();
      });
  });

  it("should return a status of 200 when getting a showing by title", function (done) {
    chai
      .request(server)
      .get("/Showings/title/West")
      .end((err, response) => {
        if (err) {
          console.log("something is wrong...");
          done(err);
        }
        expect(response).to.have.status(200);
        expect(response).to.not.be.null;
        done();
      });
  });

  it("should return a status of 200 when getting a showing by exact title", function (done) {
    chai
      .request(server)
      .get("/Showings/title/e/West Side Story")
      .end((err, response) => {
        if (err) {
          console.log("something is wrong...");
          done(err);
        }
        expect(response).to.have.status(200);
        expect(response).to.not.be.null;
        done();
      });
  });

  it("should return a status of 200 when getting a showing by tags", function (done) {
    chai
      .request(server)
      .get("/Showings/tag/Action")
      .end((err, response) => {
        if (err) {
          console.log("something is wrong...");
          done(err);
        }
        expect(response).to.have.status(200);
        expect(response).to.not.be.null;
        done();
      });
  });

  it("should return a status of 200 when getting a showings by date", function (done) {
    chai
      .request(server)
      .get("/Showings/date/2021-12-15")
      .end((err, response) => {
        if (err) {
          console.log("something is wrong...");
          done(err);
        }
        expect(response).to.have.status(200);
        expect(response).to.not.be.null;
        done();
      });
  });

  it("should return 202 when updating a showing", function (done) {
    let newObj = {
      screen: "screenTwo",
      date: "2021-12-19",
      timeRaw: 1700,
      time: "12:30",
      movie: { title: "West Side Story", tags: ["Action", "Adventure"] },
      seats: [{}],
    }
    chai
      .request(server)

      .put("/Showings/update/61ba026281c395e0be00dd39")
      .send(newObj)

      .end((err, response) => {
        expect(response).to.have.status(202);
        expect(response.body.date).to.be.equal("2021-12-19");

        expect(response).to.not.be.null;
        chai
          .request(server)
          .put("/Showings/update/61ba026281c395e0be00dd39")
          .send(createShowing);
        done();
      });
  });

  it("should return 204 when deleting a Showing", function (done) {
    chai
      .request(server)

      .delete("/Showings/delete/61b8746ba0d0ee2a86702a35")

      .end((err, response) => {
        expect(response).to.have.status(204);
        expect(response).to.not.be.null;

        done();
      });
  });
});
