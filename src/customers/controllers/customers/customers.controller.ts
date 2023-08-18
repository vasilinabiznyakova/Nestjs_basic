import {
  Controller,
  Get,
  Req,
  Res,
  Param,
  ParseIntPipe,
  HttpException,
  HttpStatus,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CustomersService } from 'src/customers/services/customers/customers.service';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  @Get(':id')
  getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const customer = this.customersService.findCustomerById(id);

    if (customer) {
      res.send(customer);
    } else {
      res.status(400).send({ msg: 'Customer is not found' });
    }
  }
  //when unit test you need to mock the request object, if we use req/res we would need to return res, not able to simply return an object
  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.findCustomerById(id);
    if (customer) return customer;
    else
      throw new HttpException('Customer is not found', HttpStatus.BAD_REQUEST);
  }
  @Get('')
  getCustomers() {
    return this.customersService.getCustomers();
  }

  //you can also do this with @Req but better use DTO = schema, how the date will be transferred, documentation recommends use classes, as you wont't be able to use interfaces with Pipes
  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() CreateCustomerDto: CreateCustomerDto) {
    this.customersService.createCustomer(CreateCustomerDto);
  }
}
