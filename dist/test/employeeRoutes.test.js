"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
const employees_1 = require("../src/data/employees");
describe('Employee Routes', () => {
    describe('POST /api/v1/employees', () => {
        it('should create a new employee successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const newEmployee = {
                name: 'Test Employee',
                position: 'Test Position',
                department: 'Test Dept',
                email: 'test@example.com',
                phone: '123-456-7890',
                branchId: 1,
            };
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).post('/api/v1/employees').send(newEmployee);
            // Assert
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('id');
            expect(response.body.name).toBe(newEmployee.name);
        }));
        it('should return 400 if missing required parameters', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const invalidEmployee = { name: 'Test' }; // Missing fields
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).post('/api/v1/employees').send(invalidEmployee);
            // Assert
            expect(response.status).toBe(400);
            expect(response.body.error).toBe('Missing required parameters');
        }));
    });
    describe('GET /api/v1/employees', () => {
        it('should return all employees successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).get('/api/v1/employees');
            // Assert
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBeGreaterThan(0);
        }));
        it('should return employees with correct properties', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).get('/api/v1/employees');
            // Assert
            expect(response.status).toBe(200);
            expect(response.body[0]).toHaveProperty('id');
            expect(response.body[0]).toHaveProperty('name');
            expect(response.body[0]).toHaveProperty('position');
            expect(response.body[0]).toHaveProperty('department');
            expect(response.body[0]).toHaveProperty('email');
            expect(response.body[0]).toHaveProperty('phone');
            expect(response.body[0]).toHaveProperty('branchId');
        }));
    });
    describe('GET /api/v1/employees/:id', () => {
        it('should return employee by ID successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const id = 1; // Assuming sample data has ID 1
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).get(`/api/v1/employees/${id}`);
            // Assert
            expect(response.status).toBe(200);
            expect(response.body.id).toBe(id);
        }));
        it('should return 400 if missing or invalid ID', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).get('/api/v1/employees/invalid');
            // Assert
            expect(response.status).toBe(400);
            expect(response.body.error).toBe('Missing or invalid ID');
        }));
    });
    describe('PUT /api/v1/employees/:id', () => {
        it('should update employee successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const id = 1;
            const updateData = { position: 'Updated Position' };
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).put(`/api/v1/employees/${id}`).send(updateData);
            // Assert
            expect(response.status).toBe(200);
            expect(response.body.position).toBe(updateData.position);
        }));
        it('should return 400 if no update data provided', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const id = 1;
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).put(`/api/v1/employees/${id}`).send({});
            // Assert
            expect(response.status).toBe(400);
            expect(response.body.error).toBe('No update data provided');
        }));
    });
    describe('DELETE /api/v1/employees/:id', () => {
        it('should delete employee successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const id = employees_1.employees[employees_1.employees.length - 1].id; // Last one to avoid affecting others
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).delete(`/api/v1/employees/${id}`);
            // Assert
            expect(response.status).toBe(204);
        }));
        it('should return 400 if missing or invalid ID', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).delete('/api/v1/employees/invalid');
            // Assert
            expect(response.status).toBe(400);
            expect(response.body.error).toBe('Missing or invalid ID');
        }));
    });
    describe('GET /api/v1/employees/branch/:branchId', () => {
        it('should return employees by branch successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const branchId = 1;
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).get(`/api/v1/employees/branch/${branchId}`);
            // Assert
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
        }));
        it('should return 400 if missing or invalid branch ID', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).get('/api/v1/employees/branch/invalid');
            // Assert
            expect(response.status).toBe(400);
            expect(response.body.error).toBe('Missing or invalid branch ID');
        }));
    });
    describe('GET /api/v1/employees/department/:department', () => {
        it('should return employees by department successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const department = 'Management';
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).get(`/api/v1/employees/department/${department}`);
            // Assert
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
        }));
        it('should return 400 if missing department', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).get('/api/v1/employees/department');
            // Assert
            expect(response.status).toBe(400);
            expect(response.body.error).toBe('Missing department');
        }));
    });
});
//# sourceMappingURL=employeeRoutes.test.js.map