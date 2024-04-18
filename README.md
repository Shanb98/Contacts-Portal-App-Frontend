# Contacts Portal Application

## Overview
This Contacts Portal Application is a full-stack solution developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides robust functionality for managing contacts, implementing JWT token-based authentication, role-based authorization, and seamless integration with MongoDB for data storage.
  ### Try it Out : https://contacts-portal-app.netlify.app/
## Features
- **JWT Token Authentication:** Secure user authentication with JWT tokens.
- **Role-Based Authorization:** Supports two roles - Users and Contacts - with specific permissions.
- **CRUD Operations for Contacts:** Perform Create, Read, Update, and Delete operations on contacts.
- **MongoDB Integration:** Utilizes MongoDB for storing user and contact data.
- **Dynamic UI Components:** Responsive and intuitive user interface components built with React.js.
- **Backend API Endpoints:** Implements RESTful API endpoints for seamless frontend-backend interaction.
- **User Registration and Login:** Independent user registration and login functionality.
- **Task Management:** Includes task components synchronized with the backend.


## Significant Technologies Used
### Backend:
- **Node.js:** Runtime environment for server-side application.
- **Express.js:** Web framework for Node.js to build RESTful APIs.
- **MongoDB/Mongoose:** NoSQL database for data storage and retrieval.
- **Bcrypt:** Library for hashing passwords.
- **Nodemon:** Utility for auto-restarting the server during development.

### Frontend:
- **React.js:** JavaScript library for building user interfaces.
- **Axios:** Promise-based HTTP client for making API requests.
- **Yup:** Schema validation library for form validations.
- **JWT:** JSON Web Tokens for secure authentication.
- **Tailwind CSS:** Utility-first CSS framework for styling UI components.


## Installation
1. Clone the repository from GitHub: `git clone <repository-url>`
2. Navigate to the backend folder and install dependencies: `cd backend && npm install`
3. Set up the MongoDB database and configure the connection in the .env file.
4. Run the backend server: `npm start`
5. Navigate to the frontend folder and install dependencies: `cd ../frontend && npm install`
6. Run the frontend application: `npm start`

## Backend Setup
### JWT Token Authentication:
- Routes for user registration, login, and logout.
- Middleware for authentication and authorization.

### User Roles:
- Defined two roles: **User** and **Contacts**.
- Users have specific permissions:
  - **User**: Can view, update, and delete their own contacts
  -  **User** can register and login independently.
  

### CRUD Operations for Tasks:
- Developed API routes and controllers for CRUD operations.
- Restricted users to modify only their contacts.

### MongoDB Integration:
- MongoDB used for storing task and user data.
- Database connection configured in the .env file.

## Frontend Setup
### User Authentication:
- Implemented user registration, login, and logout components.

### Navigation System:
- Integrated JWT tokens for authentication and API request authorization.

### Task Components:
- Modified to allow only authorized users to perform CRUD operations.
- UI components updated based on user roles.

## UI Screenshots

### Login Page
![image](https://github.com/Shanb98/Contacts-Portal-App-Frontend/assets/130221905/8a4b2445-f945-4064-bb82-9fcaf56c82b8)

### Registration Page
![image](https://github.com/Shanb98/Contacts-Portal-App-Frontend/assets/130221905/08512ce6-a014-4b23-90e6-6a004b76f2d3)
![image](https://github.com/Shanb98/Contacts-Portal-App-Frontend/assets/130221905/e0c20ebb-a1e3-4e4a-b352-010f30f42b34)

### Welcome Dashboard
![image](https://github.com/Shanb98/Contacts-Portal-App-Frontend/assets/130221905/9ab16072-2507-40d5-8685-1162a887cbb1)

### Add Contacts
![image](https://github.com/Shanb98/Contacts-Portal-App-Frontend/assets/130221905/b53f391a-b1dd-4bb4-9474-37d5d45aef70)
![image](https://github.com/Shanb98/Contacts-Portal-App-Frontend/assets/130221905/21b2d695-69e1-4493-bd91-9fb75da8afb9)


### View Contacts
![image](https://github.com/Shanb98/Contacts-Portal-App-Frontend/assets/130221905/514558fa-f73a-4700-ba8b-e95c5e55c476)

### Update Contacts
![image](https://github.com/Shanb98/Contacts-Portal-App-Frontend/assets/130221905/90f4be76-83e8-4b7b-8fd9-2bd44abd0dab)
![image](https://github.com/Shanb98/Contacts-Portal-App-Frontend/assets/130221905/b4c26d65-2d9f-4dbf-80d1-cf7811a22cd1)

### Delete Contacts
![image](https://github.com/Shanb98/Contacts-Portal-App-Frontend/assets/130221905/e7befdf6-5b41-46b8-90bd-4bb119df6ad7)



## Conclusion
The Contacts Portal Application is a comprehensive solution built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, designed to manage contacts efficiently while ensuring robust user authentication and authorization. Leveraging JWT token authentication, this application provides secure access control, allowing users to register, log in, and manage contacts based on specific user roles. Overall, the Contacts Portal Application is a scalable and secure solution that streamlines contact management, offering a user-friendly experience tailored to individual user roles and ensuring data integrity and privacy.
