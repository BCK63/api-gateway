import express, { NextFunction, Router, Request, Response } from 'express';
import { consumeBookingsResponse, sendToBookingQueue } from '../config/channel';

const router: Router = express.Router();


router.get('/', (req: Request, res: Response, next: NextFunction)=> {
  sendToBookingQueue('i am here');
  consumeBookingsResponse((msg: any)=> {
    console.log(msg);
    res.json(msg);
  })

});

export default router