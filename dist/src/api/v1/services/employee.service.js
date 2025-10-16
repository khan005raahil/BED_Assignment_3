"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmployeesByDepartment = exports.getEmployeesByBranch = exports.deleteEmployee = exports.updateEmployee = exports.createEmployee = exports.getEmployeeById = exports.getAllEmployees = void 0;
const employees_1 = require("../../../data/employees");
const getAllEmployees = () => {
    return employees_1.employees;
};
exports.getAllEmployees = getAllEmployees;
const getEmployeeById = (id) => {
    return employees_1.employees.find(emp => emp.id === id);
};
exports.getEmployeeById = getEmployeeById;
const createEmployee = (data) => {
    const newId = Math.max(...employees_1.employees.map(emp => emp.id), 0) + 1;
    const newEmployee = Object.assign({ id: newId }, data);
    employees_1.employees.push(newEmployee);
    return newEmployee;
};
exports.createEmployee = createEmployee;
const updateEmployee = (id, data) => {
    const index = employees_1.employees.findIndex(emp => emp.id === id);
    if (index === -1)
        return undefined;
    employees_1.employees[index] = Object.assign(Object.assign({}, employees_1.employees[index]), data);
    return employees_1.employees[index];
};
exports.updateEmployee = updateEmployee;
const deleteEmployee = (id) => {
    const index = employees_1.employees.findIndex(emp => emp.id === id);
    if (index === -1)
        return false;
    employees_1.employees.splice(index, 1);
    return true;
};
exports.deleteEmployee = deleteEmployee;
const getEmployeesByBranch = (branchId) => {
    return employees_1.employees.filter(emp => emp.branchId === branchId);
};
exports.getEmployeesByBranch = getEmployeesByBranch;
const getEmployeesByDepartment = (department) => {
    return employees_1.employees.filter(emp => emp.department === department);
};
exports.getEmployeesByDepartment = getEmployeesByDepartment;
//# sourceMappingURL=employee.service.js.map