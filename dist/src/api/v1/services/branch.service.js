"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBranch = exports.updateBranch = exports.createBranch = exports.getBranchById = exports.getAllBranches = void 0;
const branches_1 = require("../../../data/branches");
const getAllBranches = () => {
    return branches_1.branches;
};
exports.getAllBranches = getAllBranches;
const getBranchById = (id) => {
    return branches_1.branches.find(br => br.id === id);
};
exports.getBranchById = getBranchById;
const createBranch = (data) => {
    const newId = Math.max(...branches_1.branches.map(br => br.id), 0) + 1;
    const newBranch = Object.assign({ id: newId }, data);
    branches_1.branches.push(newBranch);
    return newBranch;
};
exports.createBranch = createBranch;
const updateBranch = (id, data) => {
    const index = branches_1.branches.findIndex(br => br.id === id);
    if (index === -1)
        return undefined;
    branches_1.branches[index] = Object.assign(Object.assign({}, branches_1.branches[index]), data);
    return branches_1.branches[index];
};
exports.updateBranch = updateBranch;
const deleteBranch = (id) => {
    const index = branches_1.branches.findIndex(br => br.id === id);
    if (index === -1)
        return false;
    branches_1.branches.splice(index, 1);
    return true;
};
exports.deleteBranch = deleteBranch;
//# sourceMappingURL=branch.service.js.map