import { Router } from 'express';
import HotelController from '../../controllers/admin/add_hotels.controller';


class HotelsRoutes {
  router = Router();
  hotelController = new HotelController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
   
    this.router.post('/', this. hotelController.create);

  }
}

export default new HotelsRoutes().router;
