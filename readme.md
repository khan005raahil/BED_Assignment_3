# BED Assignment 3 - API Documentation & Security

This project is a secure REST API built using **Node.js, Express, and TypeScript**, with a focus on:

- OpenAPI/Swagger documentation
- Secure environment variable management
- Helmet.js security middleware
- Custom CORS configuration
- GitHub Pages deployment for API docs
- Example CRUD endpoints

---

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create `.env` File
Create a file named `.env` in the root directory:
```
PORT=3000
NODE_ENV=development
```

Do **not** commit `.env` - commit `.env.example` instead.

---

## Running the API

### Development Mode
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run start:prod
```

---

## API Documentation (Swagger)

### Local Swagger UI
```
http://localhost:3000/api-docs
```

### Local OpenAPI JSON
```
http://localhost:3000/openapi.json
```

### Public GitHub Pages Documentation
```
https://<your-username>.github.io/<your-repo>/openapi.json
```

---

## API Request Examples

### GET All Users
**Endpoint**
```
GET /api/v1/users
```

**Example Response**
```json
{
  "success": true,
  "data": [
    { "id": 1, "name": "Rohit", "email": "rohit@example.com" }
  ]
}
```

### GET User by ID
**Endpoint**
```
GET /api/v1/users/1
```

**Example Response**
```json
{
  "success": true,
  "data": { "id": 1, "name": "Rohit", "email": "rohit@example.com" }
}
```

---

## Security Configuration

### Helmet.js
Custom Helmet setup includes:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: no-referrer`
- `Permissions-Policy` restrictions
- HSTS (in production)

### CORS Middleware
Allowed origins:
- `http://localhost:3000`
- `http://127.0.0.1:3000`

Blocked origins return:
```
Not allowed by CORS
```

Allowed methods:
```
GET, POST, PUT, PATCH, DELETE
```

### Environment Variables
Sensitive values are stored in:
```
.env
```
Example config in:
```
.env.example
```

---

## Generating OpenAPI Spec
To generate `docs/openapi.json`:
```bash
npm run build:openapi
```
This file is automatically deployed to **GitHub Pages**.

---

## Branch Workflow
- `master` -> main branch
- `document-security` -> feature branch
- 20+ meaningful commits required

---

## License
This project is developed for academic purposes.

