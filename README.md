# Team-Instinct-Cinema-Project
Coverage:82.15%

# Specialism Project QA Cinema's 

QA cinemas project 
For this group project we created a MERN stack web application for our QA cinema's webpage. This was connected to a backend database using MongoDB which allowed us to record films and customer bookings.

# Aim:
The aim of the project was to develop a full stack application where users can navigate through the website and make bookings for movies, viweing latest releases, view current movies showing, accessing how to get to QA cinema, viewing an about us page, make comments and rate movies theyve seen on our discussion board, checking for film classifications before making a booking and we also implemented a page where we have provided a places to go page around the area for activities and tourists attractions within the area.

# Technologies Used:
This project consisted of us using the following technlogies:
- **Version Control System**: Git
- **Source Code Management**: GitHub
- **Kanban Board**: Jira
- **Full-Stack Development Technologies**: MERN stack
- **Database Management System**: MongoDB Atlas database
- **Back-End Programming Language**: Node
- **API Development Platform**: Express
- **Front-End Development Framework**: React
- **Unit Testing**: Mocha, Chai


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
  mongoTestURI:
    <MONGO_TEST_DB_URL>
};
```

The folder structure for the server should look like this:

![folder structure](/Documentation/Screenshots/secrets-folder.png "Secrets Folder")

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
- npm i mocha chai chai-http nodemon express concurrently cors mongoose stripe

- npm i --save-dev nyc

client dependencies:

- npm i react-router-doms axios reactstrap react react-dom @stripe/react-stripe-js @stripe/stripe-js emailjs react-rating-stars-component

- npm install --save bootstrap
```
# Troubleshooting
Make sure the Mongo DB URI in the secrets folder within the server folder matches the URI in the Mongo URI.js. This project uses ports 3000 for the front end and 3001 for the backend. Make sure they are free before running or modify server.js if necessary.

# Testing
Once you got the project setup install Mocha, Chai and Istanbul to view coverage. Set testDB on line 10 in server.js to true before running tests. This way, it will use a different database when testing and won't affect the production database.
<br/>


In your terminal run:
```npm test``` to run the tests and check that they all pass or run
```npm run coverage``` to check the test coverage





# Deployment
Deployment can be acheived by running
```
 npm run dev
 ```
  Once you're in the project directory within your terminal. The webpage uses localhost:3000 as api URL and the MongoDB URL uses localhost:27017.


# Built With
Visual Studio Code: IDE
Mongo DB
Express
React
Node
Mocha
Chai
Stripe API
emailJS


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

