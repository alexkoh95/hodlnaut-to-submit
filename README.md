# Hodlnaut 

This was written by Alex Koh as requirements for a test to submit to Hodlnaut. 

## Dependencies to download:
- express
- node-fetch
- express router 
- Mocha
- Chai
- Chaihttp
- nodemon
- request 

"npm init -y" to set up the environment 

"npm run dev" to run the server 

"npm run test" to run the test

## Description of files and folders

## Files
### server.js
server.js is the entry point of the application. 

## Folders 

### Middleware 
Middleware - this contains fetch-crypto-currency-data.js. This is the function that fetches real-time crypto price data. It uses bitstamp API and stores bitcoin and ethereum prices in res.locals.prices. 

### Models
Models - this contains test-data.js. This is the seed data. 


### Routes
Routes - this contains the parent route (router.js) that is imported in server.js. user.js is the GET route that returns the user's information (user_id, hodlings, totalAccountvlaueInUSD) 

### Services
Services - this contains currency-service.js. This is a function that serves business logic - it calculates a user's account value in USD by converting the user's holding of bitcoin and ethereum into USD.


### Test 
Test - this contains test.js. This runs a test for the GET route - testing for 4 areas  
(1) whether the res returns a status 200  
(2) whether res.body is an object  
(3) whether res.body has the required keys to display a user's data (user_id, holdings, totalAccountValueInUSD)  
(4) whether the GET route returns the appropriate user's data  

## Questions

### 1. (Optional) If you didn’t have time to complete your intended design, what else would you have done?

ANSWER:
Ideally I would have liked more time to learn what is expected professionally when writing tests. I have written 4 basic tests as mentioned in the comments to describe the test in test.js

### 2. Which took the most time? What did you find most difficult?

ANSWER:
There were two parts to the test which I spent the most time on: (1) Making my codes as modular as possible and (2) Learning Mocha and Chai to write tests.  

(1) From articles I have read, it seems the best practice is to make code as modular as possible. This improves productivity as apps are not only able to scale but also able to be quickly restructured to adapt to business needs.  

(2) I have not written tests before, thus I had to read the documentation for Mocha and Chai.

### 3. If we wanted the balance to update on the frontend more often (10 times per second), how would you improve the current system to handle this?

ANSWER:
I have not encountered a requirement where the frontend has needed to update more than 10x a second. However, based on the documentation in Express I have done the following to maximise the speed of the application:  

a) Avoid synchronous functions  
b) Remove console.logs where relevant to improve speed  
c) Handle exceptions with try-catch  

### 4. How did you find the test overall? If you have any suggestions on how we can improve the test, we'd love to hear them!

ANSWER:
I found this test enjoyable as I have learnt a lot in two areas.

First, pushing myself to make my code as modular as possible. For example, removing the business logic of calculating account value and placing it in the services folder as "currency-service.js".

Second, learning how to write tests. Tests were briefly covered in the curriculum in General Assembly but I have not practiced it before. I am glad that I had a chance to learn and implement it!
