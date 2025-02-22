"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signin_controller_1 = __importDefault(require("../../controllers/admin/signin.controller"));
// import adminAuthenticateMiddleware from '../../controllers/admin/adminAuthenticateMiddleware';
class SignInRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.signInController = new signin_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Create a new Tutorial
        this.router.post('/', this.signInController.login);
        // adminAuthenticateMiddleware
        // Retrieve all usernames
        // this.router.get('/usernames', this.viewAdminsController.findAllUsernames);
        // Retrieve a single Tutorial with id
        // this.router.get("/:id", this.controller.findOne);
        // Update a Tutorial with id
        // this.router.put("/:id", this.controller.update);
        // Delete a Tutorial with id
        // this.router.delete("/:id", this.controller.delete);
    }
}
exports.default = new SignInRoutes().router;
