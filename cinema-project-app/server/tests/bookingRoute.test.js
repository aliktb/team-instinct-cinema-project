'use strict';

const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { Booking } = require("../persistence/booking");

//Linking our index(sever) file
const server = require('../server.js')

//telling chai to use the chair http
chai.use(chaiHttp);

describe('testing bookings routes', function () {

    const createBooking = new Booking({
        bookingRef: '123456',
        showingDate: 'testDate',
        showingTime: 'testTime',
        name: 'testName',
        seats: "testSeats",
        children: '2',
        adults: "2",
        movieTitle: 'testTitle',
        screen: 'testString',
        total: '4'
    });

    const readBooking = new Booking({
        bookingRef: '123456',
        showingDate: 'testDate',
        showingTime: 'testTime',
        name: 'testName',
        seats: "testSeats",
        children: '3',
        adults: "3",
        movieTitle: 'testTitle',
        screen: 'testString',
        total: '6'
    });

    const updateBooking = new Booking({
        bookingRef: '123456',
        showingDate: 'updatedDate',
        showingTime: 'updatedTime',
        name: 'updatedName',
        seats: "updatedSeats",
        children: '4',
        adults: "4",
        movieTitle: 'updatedTitle',
        screen: 'updatedString',
        total: '8'
    });



    before((done) => {
        chai.request(server).post('/bookings/create')
            .send(readBooking).
            end(() => {
                done();
            });
    })


    it('Should return status 201 when creating a new Booking', function (done) {
        chai
            .request(server)

            .post('/bookings/create')
            .send(createBooking)

            .end((err, response) => {
                expect(response).to.have.status(201);
                expect(response).to.not.be.null;
                expect(response).to.have.property('text', JSON.stringify(createBooking))

                done();
            });
    });
    it('should return status 200 when getting booking id ', function (done) {
        chai
            .request(server)

            .get('/bookings/61b9fd3dbe936bfad8f9c91f')
            .end((err, response) => {
                if (err) {
                    console.log("something is wrong...")
                    done(err);
                }

                expect(response).to.have.status(200);
                expect(response.body._id).to.be.equal('61b9fd3dbe936bfad8f9c91f');
                expect(response).to.not.be.null;
                done();
            });
    });
    it('should return status 200 when getting all bookings ', function (done) {
        chai
            .request(server)

            .get('/bookings/')

            .end((err, response) => {
                if (err) {
                    console.log("something is wrong...")
                    done(err);
                }

                const body = response.body;
                expect(response).to.have.status(200);
                expect(response).to.not.be.null;

                //map the object within the response body
                body.map((booking) => {

                    expect(booking).to.be.a('object');
                    expect(booking).to.contain.keys('name');
                    expect(booking.showingTime).to.be.a('string')
                })
                done();
            });
    });
    it('should return status 200 when getting bookings ref ', function (done) {
        chai
            .request(server)

            .get('/bookings/ref/123456')

            .end((err, response) => {
                if (err) {
                    console.log("something is wrong...")
                    done(err);
                }


                expect(response).to.have.status(200);
                expect(response.body.bookingRef).to.be.equal("123456");
                expect(response).to.not.be.null;
                done();
            });
    });
    it("should return 204 when deleting a booking", function (done) {
        chai
            .request(server)

            .delete("/bookings/delete/61b874a5cdb04d2ed1a07bd6")

            .end((err, response) => {
                expect(response).to.have.status(204);
                expect(response).to.not.be.null;

                done();
            });
    });

    it("should return 202 when updating booking", function (done) {
        let newObj = {
            name: "testName"
        }

        chai
            .request(server)

            .put('/bookings/update/61b9fd3dbe936bfad8f9c91f')

            .send(newObj)

            .end((err, response) => {
                if (err) {
                    console.log(err);
                    done(err);
                }

                expect(response).to.have.status(202);
                expect(response).to.not.be.null;
                expect(response.body.name).to.be.equal("testName")
                chai.request(server).put('/bookings/update/61b9fd3dbe936bfad8f9c91f')
                    .send(createBooking)

                done();
            });
    });




});