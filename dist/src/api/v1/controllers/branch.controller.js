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
exports.deleteBranch = exports.updateBranch = exports.getBranchById = exports.getAllBranches = exports.createBranch = void 0;
const branchService = __importStar(require("../services/branch.service"));
const createBranch = (req, res) => {
    const { name, address, phone } = req.body;
    if (!name || !address || !phone) {
        res.status(400).json({ error: 'Missing required parameters' });
        return;
    }
    const newBranch = branchService.createBranch({ name, address, phone });
    res.status(201).json(newBranch);
};
exports.createBranch = createBranch;
const getAllBranches = (_req, res) => {
    const branches = branchService.getAllBranches();
    res.status(200).json(branches);
};
exports.getAllBranches = getAllBranches;
const getBranchById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
        res.status(400).json({ error: 'Missing or invalid ID' });
        return;
    }
    const branch = branchService.getBranchById(id);
    if (!branch) {
        res.status(404).json({ error: 'Branch not found' });
        return;
    }
    res.status(200).json(branch);
};
exports.getBranchById = getBranchById;
const updateBranch = (req, res) => {
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
    const updatedBranch = branchService.updateBranch(id, data);
    if (!updatedBranch) {
        res.status(404).json({ error: 'Branch not found' });
        return;
    }
    res.status(200).json(updatedBranch);
};
exports.updateBranch = updateBranch;
const deleteBranch = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
        res.status(400).json({ error: 'Missing or invalid ID' });
        return;
    }
    const deleted = branchService.deleteBranch(id);
    if (!deleted) {
        res.status(404).json({ error: 'Branch not found' });
        return;
    }
    res.status(204).send();
};
exports.deleteBranch = deleteBranch;
//# sourceMappingURL=branch.controller.js.map