# Task Manager API

A RESTful API built with Node.js, Express.js, TypeScript, and MongoDB (via Mongoose) for managing tasks. This API supports creating, reading, updating, and deleting tasks, with robust validation and error handling.

## 📁 Project Structure

```
src/
│
├── config/
│ └── logger.ts # Request logger middleware
│ └── asyncHandler.ts # middleware for requests
│
├── controllers/
│ └── taskController.ts # Task CRUD logic
│
├── models/
│ └── Task.ts # Mongoose Task schema/model
│
├── routes/
│ └── taskRoutes.ts # Express routes for /tasks
│
├── app.ts # Express app setup
├── server.ts # Server entry point (connects to MongoDB, starts server)
│
.env # Environment variables (not committed)
package.json
tsconfig.json
```

## ⚙️ Environment Variables

All sensitive configuration is managed via environment variables.
Create a .env file in the project root (or copy from .env.example) and set the following:

- MONGODB_URI=mongodb://localhost:27017/taskmanager
- PORT: The port your API server will run on (default: 3000).

For local development, use: mongodb://localhost:27017/taskmanager

For cloud (e.g., MongoDB Atlas), use your provided connection string.

## 🚀 Setup & Run

Install dependencies

```bash
npm install
```

Configure environment

Copy .env.example to .env and update values as needed.

Build TypeScript (optional for production)

```bash
npm run build
```

Start the server

For development (with hot reload):

```bash
npm run dev
```

For production:

```bash
npm start
```

API will be available at
http://localhost:3000 (or your chosen port)

## 🛣️ API Endpoints

Method Endpoint Description

- POST /tasks Create a new task
- GET /tasks Get all tasks
- GET /tasks/:id Get a task by ID
- PUT /tasks/:id Update a task by ID
- DELETE /tasks/:id Delete a task by ID
- GET / Health check/status route

## 🧪 Testing

A postman collection is included in the root directory under /postman.

## 📝 Notes

All requests and responses are logged with method, URL, status, and response time.

Input validation and error handling are implemented for all endpoints.

Update the MONGODB_URI in your .env file to match your MongoDB setup.

The project is structured for easy extension (e.g., adding authentication).

## 📄 Example .env.example

text
PORT=3000
MONGODB_URI=mongodb://localhost:27017/taskmanager
