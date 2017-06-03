# To-Do List
A group assignment creating a CRUD application to check in/check out pets from a pet hotel.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
1. Download .zip of the project
2. Open .sql file and paste into Postico to create tables
3. npm install
4. npm start
5. type localhost:5000 into a browser

## Authors
- Craig Baird
- Anna Springfield
- Kevin Dahlberg

## Technologies Used
- JavaScript
- jQuery
- Node
- SQL

## Assumptions

You are using Postico
You installed Postgres with homebrew
Postgres is currently running on your computer

## Instructions I was given:

CRUD Up Pet Hotel
Your team has started a new business in Uptown for dog-enthusiasts that also need to vacation without their beloved pets.

You will be using Trello to track your progress on this application. Copy this Trello Board to get started. You can copy this board by creating a Trello account, clicking show menu, selecting more, and selecting Copy Board.

As an MVP, you will create an application that allows owners to

check in their pet
check out their pet
update their pet's info
remove their pet altogether
You'll use CRUD to make this happen.

IMPORTANT: Please include a database.sql file in your submitted Git repo that has all the queries you used to create your database and tables.

Implementation Details
Guidance on how to build your app.

Database Tables

Create the following tables in your chi database. Don't forget to add your primary and foreign keys!

Table 1: Owners

Because owners can have multiple pets, it's best to include this in a separate table.

Columns

first name
last name

Table 2: Pets

Remember that pets must belong to an owner.

Columns

name
breed
color

Table 3: Visits

We'll keep a log of each visit. Remember that visits must be linked to a pet.

Columns

check-in date
check-out date

Views

This app will have one page: Owners and Pets

View 1: Owners and Pets

See this image for a mockup of the page.

NOTE: Ignore the Visits link you see on the image . This is reserved for Hard mode.

Submitting the Owner Registration form will add a new owner to the owners table.
The Pets form includes a <select> drop-down list that needs to be populated with data from the owners table. Submitting this form will add a new pet to the pets table. HINT: In addition to displaying the name, make sure to keep track of each owner's id.
The Pets table is ultimately populated with data from the owners, pets, and visits table. (Research LEFT OUTER JOIN if you hit a snag with this.)
The owner name should be displayed, but not editable.
All of the pet data displayed should be editable.
Clicking the Go button under the Update column should update the pets table.
Clicking the Go button under the Delete column should delete the pet from the pets table. HINT: Delete any visits for this pet before deleting it from the pets table.
The Check-In/Check-out button will default to displaying IN when a pet is first created.
Checking in a pet is done by inserting the current date into the check-in date column of the visits table. A checked-in pet will have a button that displays OUT.
Checking out a pet is done by updating the check-out date column record in the visits table.
Hard Mode
Create a second page for the application: Visits.

The Visits page will display the check-in data for each pet. Pets that are checked in, but not checked out should appear first in the list. We should see the following data:

Pet name
Check-in date
Checkout date
There is no mockup for this page, so be creative and do your best!

##check in their pet##
 [ ]  Create Owners table
 [ ]  Create html
 [ ]  link Client.js with html
 [ ]  Link client.js with app.js
 [ ]  app.js with database
 [ ]  pg request from app.js to database
 [ ]  GET request from app.js to Client.js
 [ ]  receive GET request linking Client.js to app.js
 [ ]  display GET on DOM
##check out their pet##
##update their pet's info##
##remove their pet altogether##
