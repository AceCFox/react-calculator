# React Calculator

## Description
Duration: 1 Day Code Challenge

This application is a basic calculator built using React with Express, Node, and PostgreSQL as well as Mathjs and Material.  It involves some limited error handling/validation and basic styling that is responsive and functional on any screen size.  Built for a code challenge as my second full stack project using React Hooks.

To see the fully functional site, please visit: [Free Deployed Demo - takes up to 1 minute on initial load](https://infinite-atoll-45194.herokuapp.com/)

### Prerequisites

- [VSCode](https://code.visualstudio.com/download)
- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Usage

-Enter any equation (using * rather than x to indicate multiplication) and click the equal button.  If the application can compute your equation it will appear below along with the answer.  Otherwise, an error message will pop up asking you to input a valid equation.  

Built With:
- JavaScript
- React
- Redux-Sagas
- Postgresql
- Node
- Express
- HTML/CSS
- Material UI
- Mathjs

## ScreenShot

![Screenshot](/Scrnshot.png)

## Installation
Create a postgreSQL database named react-calculator,
The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
Open up your editor of choice and 
run `npm install` in your terminal,
run `npm run server` in your terminal,
open a second terminal instance and run `npm run client`.
The npm run client command will open up a new browser tab for you!
Otherwise it is running on `localhost:3000`
