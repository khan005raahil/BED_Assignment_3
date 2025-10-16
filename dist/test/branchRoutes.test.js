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
const branches_1 = require("../src/data/branches");
describe('Branch Routes', () => {
    describe('POST /api/v1/branches', () => {
        it('should create a new branch successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const newBranch = {
                name: 'Test Branch',
                address: 'Test Address',
                phone: '123-456-7890',
            };
            
            const response = yield (0, supertest_1.default)(app_1.default).post('/api/v1/branches').send(newBranch);
            // Assert
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('id');
            expect(response.body.name).toBe(newBranch.name);
        }));
        it('should return 400 if missing required parameters', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const invalidBranch = { name: 'Test' }; // Missing fields
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).post('/api/v1/branches').send(invalidBranch);
            // Assert
            expect(response.status).toBe(400);
            expect(response.body.error).toBe('Missing required parameters');
        }));
    });
    describe('GET /api/v1/branches', () => {
        it('should return all branches successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).get('/api/v1/branches');
            // Assert
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBeGreaterThan(0);
        }));
    });
    describe('GET /api/v1/branches/:id', () => {
        it('should return branch by ID successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const id = 1; // Assuming sample data has ID 1
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).get(`/api/v1/branches/${id}`);
            // Assert
            expect(response.status).toBe(200);
            expect(response.body.id).toBe(id);
        }));
        it('should return 400 if missing or invalid ID', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).get('/api/v1/branches/invalid');
            // Assert
            expect(response.status).toBe(400);
            expect(response.body.error).toBe('Missing or invalid ID');
        }));
    });
    describe('PUT /api/v1/branches/:id', () => {
        it('should update branch successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const id = 1;
            const updateData = { address: 'Updated Address' };
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).put(`/api/v1/branches/${id}`).send(updateData);
            // Assert
            expect(response.status).toBe(200);
            expect(response.body.address).toBe(updateData.address);
        }));
        it('should return 400 if no update data provided', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const id = 1;
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).put(`/api/v1/branches/${id}`).send({});
            // Assert
            expect(response.status).toBe(400);
            expect(response.body.error).toBe('No update data provided');
        }));
    });
    describe('DELETE /api/v1/branches/:id', () => {
        it('should delete branch successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const id = branches_1.branches[branches_1.branches.length - 1].id; // Last one
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).delete(`/api/v1/branches/${id}`);
            // Assert
            expect(response.status).toBe(204);
        }));
        it('should return 400 if missing or invalid ID', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).delete('/api/v1/branches/invalid');
            // Assert
            expect(response.status).toBe(400);
            expect(response.body.error).toBe('Missing or invalid ID');
        }));
    });
});
//# sourceMappingURL=branchRoutes.test.js.map