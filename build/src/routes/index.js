"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_routes_1 = __importDefault(require("./home.routes"));
const tutorial_routes_1 = __importDefault(require("./tutorial.routes"));
const signin_routes_1 = __importDefault(require("../routes/admin/signin.routes"));
const view_admin_routes_1 = __importDefault(require("../routes/admin/view_admin.routes"));
class Routes {
    constructor(app) {
        app.use("/api", home_routes_1.default);
        app.use("/api/tutorials", tutorial_routes_1.default);
        app.use("/api/adminsign", signin_routes_1.default);
        app.use("/api/adminsign/usernames", view_admin_routes_1.default);
        // app.use("/api/addhotel", HotelsRoutes);
    }
}
exports.default = Routes;
