import { Request, Response } from 'express';
import AdminModel from '../../models/admin/login.model';

export default class AdminSignIn {
  async findAll(req: Request, res: Response) {
    const adminData = await AdminModel.find({}).exec();
    res.send(adminData);
  }

}
