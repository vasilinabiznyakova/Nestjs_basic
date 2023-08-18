import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { valid } = req.headers;
    console.log('Validation of account middleware');
    if (valid) {
      next();
    } else {
      res.status(401).send({ error: 'Account is invalid' });
    }
  }
}
