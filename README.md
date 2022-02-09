# Tandem Technical Test

Welcome!

In this test, you will be improving a web application that displays live arrival times for a bus stop. Read the requirements below and make changes to the front-end and back-end of the application that you feel best meet all the requirements. You should spend no more than 2-3 hours in total. Use any tools you need to complete the task (e.g. Google, StackOverflow, NPM packages).

**Project structure**

Web - React TypeScript application accessible at http://localhost:8080. Generated with Vite (similar to Create React App).

API - Node.js TypeScript application accessible at http://localhost:3000. Generated with Nest.JS framework (similar to Express.js).

## Requirements

- [x] The app should fetch and display bus times from the existing `\bus-times` API endpoint on page load  
- [x] The app should highlight when buses are due (1 minute or less til arrival)  
- [x] The app should automatically refetch the bus times every 10 seconds  
- [x] The user should only see routes that run on the current day of the week  
- [x] The app should match the design outlined in the mockup below

**Mockup**
![Mockup](./mockup.png "Mockup")  

## Additional Improvements  

I have implemented a search bar to enable users to search for specific buses. With the current backend implementation (three routes and a maximum of five times with randomly-generated data), this is not strictly necessary, but with live data (see point below) it could prove very useful for users looking for a specific bus as some stops have a very large number routes. It could also be extended to allow users to search by destination instead of bus number. 

As a kind of spike, I have implemented bus time updates as events pushed from the server side on a [separate branch](https://github.com/charlie-galb/tandem-technical-test/tree/server_sent_events). This design should be faster, especially at scale, although the downside is that there could be issues with browser compatibility.

In terms of ideas for extending the application further, my first thought would be to try and tap into real data by integrating TFL's Bus Arrivals API. This would enable us to add more stops and routes and to implement features like real-time bus tracking or SMS notifications when a chosen bus is X minutes away. 

On the client side, I would also like to implement some kind of colour-grading on the bus cards to signal how close they are to arriving (i.e. green for due, yellow for within five minutes), which would be a simple way to add clarity and a bit more personality to the UI. 
