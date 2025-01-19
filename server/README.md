# Server

This is the backend server for the application. It is built using Node.js, Express, and MongoDB.


## Installation

1. Clone the repository
2. Navigate to the `server` directory
3. Install dependencies

```bash
npm install
```
## Environment Variables

Create a .env file in the server directory and add the following environment variables:
PORT=<your_port_number>
MONGODB_URL=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>

## Run the app
```bash
npm run dev
```

# API Documentation

## Overview

This document provides an overview of the API routes, models, and controllers used in this project.

## Routes

### User Routes

- **File:** [routes/UserRoutes.js](routes/UserRoutes.js)
- **Controller:** [controllers/UserController.js](controllers/UserController.js)

| Route                   | Method | Description         |
| ----------------------- | ------ | ------------------- |
| `/api/user/register`    | POST   | Register a new user |
| `/api/user/login`       | POST   | Login a user        |

### Course Routes

- **File:** [routes/AiRoutes.js](routes/CourseRoutes.js)
- **Controller:** [controllers/CourseController.js](controllers/CourseController.js)

| Route                           | Method | Description                   |
| ------------------              | ------ | ----------------------------- |
| `/api/course/create-course`     | POST   | Create New Course             |
| `/api/course/:id`               | GET    | Get Course By Id              |
| `/api/course/update-course/:id` | PUT    | Update Course By Id           |
| `/api/course/delete-course/:id` | DELETE | Delete Course By Id           |


## Models

### User Model

- **File:** [models/UserModel.js](models/UserModel.js)

| Field        | Type    | Description       |
| ------------ | ------- | ----------------- |
| name         | String  | User's Name       |
| email        | String  | User's Email ID   |
| password     | String  | User's Password   |

### Course Model

- **File:** [models/CourseModel.js](models/CourseModel.js)

| Field             | Type     | Description        |
| ----------------- | ------   | ------------------ |
| courseName        | String   | Course Name        |
| courseDescription | String   | Course Description |
| instructor        | ObjectId | User Id            |

## Controllers

### User Controller

- **File:** [controllers/UserController.js](controllers/UserController.js)

| Function      | Description                                                    |
| ------------- | -------------------------------------------------------------- |
| `register`    | Registers a new user and saves in Database and generates Token |
| `login`       | Checks & verifies user email& password and generates Token     |

### Course Controller

- **File:** [controllers/CourseController.js](controllers/CourseController.js)

| Function          | Description                                           |
| ----------------- | ----------------------------------------------------- |
| `createCourse`    | Creates New Course and saves in DB                    |
| `getCourse`       | Retrieves a Course from DB using Course Id            |
| `updateCourse`    | Updates a Course in DB using Course Id                |
| `deleteCourse`    | Deletes a Course in DB using Course Id                |
