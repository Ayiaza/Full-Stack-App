# 🚀 Todo Management API

A secure and scalable **Todo Management REST API** built with **FastAPI** that allows users to register, authenticate, and manage their personal tasks.  
This project demonstrates modern backend development practices using JWT authentication, SQLAlchemy ORM, and a clean modular architecture.

---

## 🛠️ Technologies Used

**Language** | Python 3     
**Framework** | FastAPI    
**Database** | SQLite 
**ORM** | SQLAlchemy 
**Authentication** | JWT (JSON Web Tokens), OAuth2 
**Password Security** | Passlib (bcrypt) 
**Validation** | Pydantic 
**Server** | Uvicorn 
**Environment Management** | Python Dotenv 
**Containerization** | Docker 

---

## ✨ Features

 🔐 User Registration & Login
 🔑 JWT-based Authentication
 🔒 Secure Password Hashing (bcrypt)
 👤 Protected User Endpoints
 ➕ Create Todo Tasks
 📋 View Personal Todo List
 ✏️ Update Todo Details
 ✅ Mark Tasks as Completed
 ❌ Delete Todo Tasks
 📦 SQLAlchemy Database Integration
 ✔️ Request & Response Validation
 🌐 CORS Support for Frontend Integration
 ❤️ Health Check Endpoint
 ⚙️ Environment Variable Configuration
 🐳 Docker Support

---

## ⚙️ Project Workflow

```
User Registration
        │
        ▼
Password Hashing
        │
        ▼
User Login
        │
        ▼
JWT Token Generation
        │
        ▼
Authenticated Requests
        │
        ▼
Todo CRUD Operations
        │
        ▼
Database Storage
```

---

## 🏗️ Development Process

1. Designed the database schema for **Users** and **Todos**.
2. Configured SQLAlchemy database connection and session management.
3. Implemented secure authentication using **JWT** and **OAuth2**.
4. Developed APIs for user registration, login, and profile retrieval.
5. Built complete CRUD operations for Todo management.
6. Secured all Todo routes using authenticated user access.
7. Validated incoming and outgoing data with Pydantic schemas.
8. Configured CORS middleware for frontend communication.
9. Added environment variable support and Docker configuration for deployment.

---

## 📚 What I Learned
Throughout this project, I gained practical experience in:

- Building RESTful APIs with FastAPI
- Implementing JWT Authentication & OAuth2
- Using SQLAlchemy ORM for database operations
- Designing scalable backend architectures
- Structuring applications using Routers, Models, and Schemas
- Securing passwords with bcrypt hashing
- Managing environment variables securely
- Validating API data using Pydantic
- Protecting endpoints with dependency injection
- Preparing applications for deployment using Docker

---

## 🎯 Conclusion 
This project strengthened my understanding of backend development by combining authentication, database management, and REST API design into a single application.  
It provided hands-on experience in developing secure, scalable, and production-ready backend services using modern Python technologies.
---

