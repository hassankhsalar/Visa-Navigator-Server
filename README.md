
## Screenshots

![App Screenshot](https://i.ibb.co.com/KjFb3x9q/image-13.jpg)
![App Screenshot](https://i.ibb.co.com/5Wkf3Mbx/Screenshot-2025-01-10-225524.png)



# Server-Side - Visa-Navigator

Visa Portal Backend This is the backend server for the Visa Portal application. It handles API requests for managing visa applications, user data, and related operations. The server uses Express.js and MongoDB for efficient and scalable data handling.

---
## Features

- Add new visas Retrieve all visas Fetch a visa by ID Update or delete visas
- Add new users Retrieve user data by email
- Submit applications Retrieve applications by user email Delete applications     User-Specific 
- Fetch visas or applications based on the logged-in user's email


## Tech Stack
- Node.js   : Server runtime   data 
- Express.js: Web framework for building APIs
- MongoDB   : Database for storing application and visa
- Cors      : Middleware for handling cross-origin requests

---

## Live Link
- https://boi-chai-3669a.web.app/
## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hassankhsalar/Visa-Navigator-Server.git
   cd client

## Project Structure
- # Visa Management API

## Endpoints

### Visa Management

#### GET /visa
Fetch all visas, sorted by creation date (latest first).

#### GET /visa/:id
Fetch a single visa by its ID.  
**Params:**
- `id` (ObjectId of the visa)

#### POST /visa
Add a new visa.  
**Body:**
- Visa details in JSON format.

#### PUT /visa/:id
Update a visa by its ID.  
**Params:**
- `id` (ObjectId of the visa)  
**Body:**
- Fields to update in JSON format.

#### DELETE /visa/:id
Delete a visa by its ID.  
**Params:**
- `id` (ObjectId of the visa)

### User Management

#### GET /users/:email
Fetch user data by their email.  
**Params:**
- `email` (User's email address)

#### POST /users
Add a new user.  
**Body:**
- User details in JSON format.

### Applications Management

#### GET /applications
Fetch all applications or filter by user email.  
**Query:**
- `email` (Optional: filter applications by email)

#### POST /applications
Submit a new application.  
**Body:**
- Application details in JSON format.

#### DELETE /applications/:id
Delete an application by its ID.  
**Params:**
- `id` (ObjectId of the application)

### User-Specific Data

#### GET /my-visas
Fetch visas by the logged-in user's email.  
**Query:**
- `email` (User's email address)



-
