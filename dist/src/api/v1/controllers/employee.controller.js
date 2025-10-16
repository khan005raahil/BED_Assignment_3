"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmployeesByDepartment = exports.getEmployeesByBranch = exports.deleteEmployee = exports.updateEmployee = exports.getEmployeeById = exports.getAllEmployees = exports.createEmployee = void 0;
const employeeService = __importStar(require("../services/employee.service"));
const createEmployee = (req, res) => {
    const { name, position, department, email, phone, branchId } = req.body;
    if (!name || !position || !department || !email || !phone || !branchId) {
        res.status(400).json({ error: 'Missing required parameters' });
        return;
    }
    const newEmployee = employeeService.createEmployee({ name, position, department, email, phone, branchId });
    res.status(201).json(newEmployee);
};
exports.createEmployee = createEmployee;
const getAllEmployees = (_req, res) => {
    const employees = employeeService.getAllEmployees();
    res.status(200).json(employees);
};
exports.getAllEmployees = getAllEmployees;
const getEmployeeById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
        res.status(400).json({ error: 'Missing or invalid ID' });
        return;
    }
    const employee = employeeService.getEmployeeById(id);
    if (!employee) {
        res.status(404).json({ error: 'Employee not found' });
        return;
    }
    res.status(200).json(employee);
};
exports.getEmployeeById = getEmployeeById;
const updateEmployee = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
        res.status(400).json({ error: 'Missing or invalid ID' });
        return;
    }
    const data = req.body;
    if (Object.keys(data).length === 0) {
        res.status(400).json({ error: 'No update data provided' });
        return;
    }
    const updatedEmployee = employeeService.updateEmployee(id, data);
    if (!updatedEmployee) {
        res.status(404).json({ error: 'Employee not found' });
        return;
    }
    res.status(200).json(updatedEmployee);
};
exports.updateEmployee = updateEmployee;
const deleteEmployee = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
        res.status(400).json({ error: 'Missing or invalid ID' });
        return;
    }
    const deleted = employeeService.deleteEmployee(id);
    if (!deleted) {
        res.status(404).json({ error: 'Employee not found' });
        return;
    }
    res.status(204).send();
};
exports.deleteEmployee = deleteEmployee;
const getEmployeesByBranch = (req, res) => {
    const branchId = parseInt(req.params.branchId, 10);
    if (isNaN(branchId)) {
        res.status(400).json({ error: 'Missing or invalid branch ID' });
        return;
    }
    const employees = employeeService.getEmployeesByBranch(branchId);
    res.status(200).json(employees);
};
exports.getEmployeesByBranch = getEmployeesByBranch;
const getEmployeesByDepartment = (req, res) => {
    const department = req.params.department;
    if (!department || department.trim() === '') {
        res.status(400).json({ error: 'Missing department' });
        return;
    }
    const employees = employeeService.getEmployeesByDepartment(department);
    res.status(200).json(employees);
};
exports.getEmployeesByDepartment = getEmployeesByDepartment;
//# sourceMappingURL=employee.controller.js.map