'use strict';

const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../server.js');

chai.use(chaiHttp);

describe('testing showings routes', function(){
    it('should return a status of 201 when creating a new showings', function(done){
        chai.request(server)
        .post('/Showings/create')
        .send({screen:'testScreen'})
        .end((err, response) => {
            expect(response).to.have.status(201);
            expect(response).to.not.be.null;

            done();
        })
    });

    it('should return a status of 200 when getting a showing by ID', function(done){
        chai.request(server)
        .get('/Showings/61b27ff2b32df4c11affc958')
        .end((err, response) => {
            if(err) {
                console.log('something is wrong...');
                done(err);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            done();
        })
    });

    it('should return a status of 200 when getting all showings', function(done){
        chai.request(server)
        .get('/Showings/')
        .end((err, response) => {
            if(err) {
                console.log('something is wrong...');
                done(err);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            done();
        })
    });

    it('should return a status of 200 when getting a showings name', function(done){
        chai.request(server)
        .get('/Showings/title/spider')
        .end((err, response) => {
            if(err) {
                console.log('something is wrong...');
                done(err);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            done();
        })
    });

    it('should return a status of 200 when getting a showings name', function(done){
        chai.request(server)
        .get('/Showings/title/e/West Side Story')
        .end((err, response) => {
            if(err) {
                console.log('something is wrong...');
                done(err);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            done();
        })
    });

    it('should return a status of 200 when getting a showings by a tag', function(done){
        chai.request(server)
        .get('/Showings/tag/Action')
        .end((err, response) => {
            if(err) {
                console.log('something is wrong...');
                done(err);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            done();
        })
    });

    it('should return a status of 200 when getting a showings by date', function(done){
        chai.request(server)
        .get('/Showings/date/2021-12-09')
        .end((err, response) => {
            if(err) {
                console.log('something is wrong...');
                done(err);
            }
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            done();
        })
    });
})