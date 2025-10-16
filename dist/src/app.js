"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const employee_routes_1 = __importDefault(require("./api/v1/routes/employee.routes"));
const branch_routes_1 = __importDefault(require("./api/v1/routes/branch.routes"));
const app = (0, express_1.default)();
const port = 3000; // Define port (use 3001 if 3000 is in use)
app.use((0, morgan_1.default)('combined')); // Log HTTP requests
app.use(express_1.default.json()); // Parse JSON request bodies
// Health check endpoint
app.get('/health', (_req, res) => {
    res.status(200).send('Server is healthy');
});
// Mount routes
app.use('/api/v1/employees', employee_routes_1.default);
app.use('/api/v1/branches', branch_routes_1.default);
// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
exports.default = app;
//# sourceMappingURL=app.js.map