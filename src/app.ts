import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import employeeRoutes from './api/v1/routes/employee.routes';
import branchRoutes from './api/v1/routes/branch.routes';
import usersRoutes from './api/v1/routes/users.routes';


require('dotenv').config();
const app: Application = express();
const port = process.env.PORT || 3000; // Define port (use 3001 if 3000 is in use)

const { apiHelmet, addCustomApiHeaders } = require('./api/v1/middleware/helmet.js');
app.use(apiHelmet);
app.use(addCustomApiHeaders);

const apiCors = require('./api/v1/middleware/cors');
app.use(apiCors);


const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/openapi.json', (_req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use(morgan('combined')); // Log HTTP requests
app.use(express.json()); // Parse JSON request bodies

// Health check endpoint
app.get('/health', (_req: Request, res: Response) => {
    res.status(200).send('Server is healthy');
});

// Mount routes
app.use('/api/v1/employees', employeeRoutes);
app.use('/api/v1/branches', branchRoutes);
app.use('/api/v1/users', usersRoutes);


// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

export default app;