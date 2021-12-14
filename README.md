# Team-Instinct-Cinema-Project
Coverage:82%

# Specialism Project QA Cinema's 

QA cinemas project 
For this group project we created a MERN stack web application for our QA cinema's webpage. This was connected to a backend database using MongoDB which allowed us to record films and customer bookings.

# Aim:
The aim of the project was to develop a full stack application where users can navigate through the website and make bookings for movies, viweing latest releases, view current movies showing, accessing how to get to QA cinema, viewing an about us page, make comments and rate movies theyve seen on our discussion board, checking for film classifications before making a booking and we also implemented a page where we have provided a places to go page around the area for activities and tourists attractions within the area.

# Technologies Used:
This project consisted of us using the following technlogies:
Version Control System: Git
• Source Code Management: GitHub
• Kanban Board: Jira
• Full-Stack Development Technologies: MERN stack
o Database Management System: MongoDB Atlas database
o Back-End Programming Language: Node
o API Development Platform: Express
o Front-End Development Framework: React
• Unit Testing: Mocha, Chai


# Get started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

# Prerequisites What things you need to install the software and how to install them:

Clone the link into your files and install it in your Visual Studio Code IDE. Make sure you git clone it down. Once installed you can navigate through the methods and code.A step by step series of examples that tell you how to get a development env running

In git bash from from root project folder (cinema-project-app):
```
- npm install
```

from 'client' folder:
```
- npm install
```

In 'server' folder create a 'secrets' folder and insert a mongoDB URI as:
```
module.exports = {
  mongoURI:
    <MONGO_DB_URL>,
};
```

To run whole project from root folder:
```
- npm run dev
```
To run only backend from root folder:
```
- npm run server
- or nodemon index.js
```
To run only frontend from 'client' folder:
```
- npm run client
```

--------------------notes--------------------

This project was set up using these instructions:
https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/

server dependencies:
```
- npm i mocha chai chai-http nodemon express concurrently cors mongoose

- npm i --save-dev nyc

client dependencies:

- npm i react-router-doms axios reactstrap react react-dom

- npm install --save bootstrap
```
# Troubleshooting
To make sure the Mongo DB URI in the secrets folder within the server folder matches the URI in the Mongo URI.js.

# Testing
Once you got the project setup intsall Mocha, Chai and Istanbul to view coverage. In your terminal run:
```npm test```
```npm run coverage```

This is the code for our movieRoutesTest:
```
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
```



# Deployment
Deployment can be acheived by running
```
 npm run dev
 ```
  once you're in the project directory within your terminal. The webpage uses localhost:3000 as api URL and the MongoDB URL uses localhost:27017.


# Built With
Visual Studio Code: IDE
Mongo DB
Express
React
Node
Mocha
Chai


# Versioning
We Used Git for versioning


# Authors
- **Ali Khattab** - [aliktb](https://github.com/aliktb)

- **Eamon Moradi** - [Eamon97](https://github.com/eamon97)

- **Sean Fernyhough** - [sean-fernyhough](https://github.com/sean-fernyhough)

- **Hamza Shah** - [hamza12618](https://github.com/hamza12618)

- **Hamid Mohammed** - [HMohammed96](https://github.com/HMohammed96)

- **Adam Yusuf Mussa** - [Amussa123](https://github.com/Amussa123)

# License
- **Bootstrap** - [Bootstrap License](https://github.com/twbs/bootstrap/blob/v4.0.0/LICENSE)
- **Reactstrap** - [Reactstrap License](https://github.com/reactstrap/reactstrap/blob/master/LICENSE)
- **StripeLicense** - [StripeLicense](https://stripe.com/gb/legal)
- **EmailJsLicense** -[EmailJsLicense](https://github.com/eleith/emailjs/blob/main/LICENSE)

# Acknowledgements
Many thanks go to the QA Academy and their trainers for their expertise and support

