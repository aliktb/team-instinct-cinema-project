'use strict';

const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

//Linking our index(sever) file
const server = require('../server.js')

//telling chai to use the chair http
chai.use(chaiHttp);

describe('testing bookings routes', function () {
    it('Should return status 201 when creating a new Booking', function (done) {
        chai
            .request(server)
        
            .post('/bookings/create')
            .send({ name: "testName" })
        
            .end((err, response) => {
                expect(response).to.have.status(201);
                expect(response).to.not.be.null;

                done();
            });
    });
    it('should return status 200 when getting booking id ', function (done) {
        chai
            .request(server)
        
            .get('/bookings/61ae0688faf0519225a00b62')
            .end((err, response) => {
                if (err) {
                    console.log("something is wrong...")
                    done(err);
                }
                
                expect(response).to.have.status(200);
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
                
                expect(response).to.have.status(200);
                expect(response).to.not.be.null;
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
                expect(response).to.not.be.null;
                done();
            });
    });

});