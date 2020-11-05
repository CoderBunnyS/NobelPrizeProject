Nobel-Peace-Prize-API-Server-Project

Description
Nobel-Peace-Prize-API-Server-Project is a project themed around nobel peace prize winners. This is the back-end of the project. You can access information using CRUD functionality and my database.

API Info - I used the Nobel Prize API information - http://api.nobelprize.org/v1/prize.json

This app was built by Bunny Schaefer: https://github.com/CoderBunnyS

Technologies Used
Axios, Mongoose, Express, Mongodb


## Install

   install npm, express, mongoose, and body-parser
     

## Run the app

    node index.js

# REST API

The REST API to the example app is described below.

## Get list 

### Request

GET  all data - http://localhost:4001/
GET data by year (1901-2020) - http://localhost:4001/year/2020
GET data by category (Chemistry, Literature, Peace, Physics, and Physiology or Medicine ) - http://localhost:4001/category/chemistry


## Create a new entry

### Request

POST new entry - http://localhost:4001/create/

    SchemaTemplate = {
    year: String,
    category: String,
    laureates: [
        {
            firstname: String,
            surname: String,
            motivation: String,
            share: Number
        }
    ]}


## Change an entry's state

### Request

Update entry by year (1901-2020) - http://localhost:4001/year/2020


## Delete an entry

### Request

Delete entry by year (1901-2020) - http://localhost:4001/year/2020


Testy testy