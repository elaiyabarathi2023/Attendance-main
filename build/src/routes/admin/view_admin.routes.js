"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const view_admins_controller_1 = __importDefault(require("../../controllers/admin/view_admins.controller"));
class ViewAdminRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.viewAdminsController = new view_admins_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        // Retrieve all usernames
        this.router.get('/usernames', this.viewAdminsController.findAll);
    }
}
exports.default = new ViewAdminRoutes().router;
