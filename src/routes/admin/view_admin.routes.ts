import { Router } from 'express';
import AdminSignIn from '../../controllers/admin/view_admins.controller';

class ViewAdminRoutes {
  router = Router();
  viewAdminsController = new AdminSignIn();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    // Retrieve all usernames
    this.router.get('/usernames', this.viewAdminsController.findAll);
  }
}

export default new ViewAdminRoutes().router;