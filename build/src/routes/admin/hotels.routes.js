"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const add_hotels_controller_1 = __importDefault(require("../../controllers/admin/add_hotels.controller"));
class HotelsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.hotelController = new add_hotels_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Create a new Tutorial
        this.router.post('/', this.hotelController.create);
        // Retrieve all usernames
        // this.router.get('/usernames', this.viewAdminsController.findAll);
        // Retrieve a single Tutorial with id
        // this.router.get("/:id", this.controller.findOne);
        // Update a Tutorial with id
        // this.router.put("/:id", this.controller.update);
        // Delete a Tutorial with id
        // this.router.delete("/:id", this.controller.delete);
    }
}
exports.default = new HotelsRoutes().router;
