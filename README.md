# Flask Webpage

## Data-driven CRUD microservice

Imagine that you are working for a software company and your responsibility is to build a
simple Node.js (or, optionally, Python) data-driven CRUD microservice, that allows you to manage
IT projects, and use as the data source, SQLite3.
The IT_PROJECTS table have the following attributes:
  - PROJECT_ID
  - PROJECT_NAME
  - START_DATE
  - TARGET_END_DATE
  - ACTUAL_END_DATE
  - CREATED_ON
  - CREATED_BY
  - MODIFIED_ON
  - MODIFIED_BY

## Implementation

### How to use:

1. Download Visual Studio Code.

2. Run project(app.js) in VS Code terminal.

3. Download and use Postman to visualize the functionalities.

### Operating System

- Windows 10 Pro (Version 22H2)

### IDE used

- Visual Studio Code

### Packages:

- body-parser@1.20.2
- express@4.18.3
- jest@29.7.0
- sqlite3@5.1.7

### How does the script work

#### 1. app.js (Main Application File)
This file is likely the entry point of your application. It initializes the Express.js server, sets up middleware for request parsing, and registers routes handled by your ProjectController. It also listens on a specified port for incoming HTTP requests.

#### 2. database.js (Database Configuration)
This script configures and initializes the connection to your SQLite database. It ensures that your application can interact with the database to perform CRUD operations.

#### 3. ProjectService.js (Service Layer)
The service layer contains the business logic of your application. It interacts directly with the database to create, read, update, and delete project data. Functions within this file utilize SQL queries to manipulate the IT_PROJECTS table according to the application's needs.

#### 4. CreateProjectDTO.js and UpdateProjectDTO.js (Data Transfer Objects)
These files define the Data Transfer Objects (DTOs) for creating and updating projects. DTOs are used to encapsulate the data sent between the client and the server, ensuring that only valid and structured data is processed by the service layer.

#### 5. ProjectController.js (Controller)
The controller handles incoming HTTP requests, validates request data, and calls the appropriate service layer functions. It then responds to the client based on the outcome of the service layer operations. This file maps your application's endpoints to the functionality in the service layer.

#### 6. projectSerivice.test.js (Test File)
This file contains tests for the ProjectService using Jest. It tests the functionality of your service layer to ensure it behaves as expected when interacting with the database. The tests mock database interactions to isolate the service logic.

## Task Algorithm challenges

### Task 1:

  Implement an algorithm to determine if a string has all unique characters. What if you cannot use
additional data structures?

![image](https://github.com/vladyc1234/FlaskWebpage/assets/73032808/49be2b93-0bbb-4bf8-955d-a93a83e5cb83)

### Task 2:

  Write a function that takes as arguments a string and a number and returns all unique contiguous
substrings of length num that have num-1 distinct chars. We should return an empty list if no
substrings can be found.

![image](https://github.com/vladyc1234/FlaskWebpage/assets/73032808/5bd08c52-f270-483b-ac95-db62d9dde026)

![image](https://github.com/vladyc1234/FlaskWebpage/assets/73032808/58c7c29c-927f-40ee-bf33-493f51e1bc6f)



