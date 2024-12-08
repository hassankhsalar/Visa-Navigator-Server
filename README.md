# b10-a10-server-side-hassankhsalar
Visa Portal Backend
This is the backend server for the Visa Portal application. It handles API requests for managing visa applications, user data, and related operations. The server uses Express.js and MongoDB for efficient and scalable data handling.

Features
Visa Management:

Add new visas
Retrieve all visas
Fetch a visa by ID
Update or delete visas
User Management:

Add new users
Retrieve user data by email
Applications Management:

Submit applications
Retrieve applications by user email
Delete applications
User-Specific Data:

Fetch visas or applications based on the logged-in user's email
Technologies Used
Node.js: Server runtime
Express.js: Web framework for building APIs
MongoDB: Database for storing application and visa data
Cors: Middleware for handling cross-origin requests


Visa Management
GET /visa

Fetch all visas, sorted by creation date (latest first).
GET /visa/:id

Fetch a single visa by its ID.
Params: id (ObjectId of the visa)
POST /visa

Add a new visa.
Body: Visa details in JSON format.
PUT /visa/:id

Update a visa by its ID.
Params: id (ObjectId of the visa)
Body: Fields to update in JSON format.
DELETE /visa/:id

Delete a visa by its ID.
Params: id (ObjectId of the visa)
User Management
GET /users/:email

Fetch user data by their email.
Params: email (User's email address)
POST /users

Add a new user.
Body: User details in JSON format.
Applications Management
GET /applications

Fetch all applications or filter by user email.
Query: email (Optional: filter applications by email)
POST /applications

Submit a new application.
Body: Application details in JSON format.
DELETE /applications/:id

Delete an application by its ID.
Params: id (ObjectId of the application)

User-Specific Data
GET /my-visas
Fetch visas by the logged-in user's email.
Query: email (User's email address)