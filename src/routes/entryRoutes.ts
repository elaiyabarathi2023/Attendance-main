import { Application } from "express";

import SignInRoutes from "./admin/signin.routes";
// import HotelsRoutes from "./admin/hotels.routes"
import ViewAdminRoutes  from "./admin/view_admin.routes"

export default class Routes {
  constructor(app: Application) {
  
    app.use("/api/adminsign", SignInRoutes);
    app.use("/api/adminsign/usernames", ViewAdminRoutes);
    // app.use("/api/addhotel", HotelsRoutes);

  }
}
