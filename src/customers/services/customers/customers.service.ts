import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      email: 'danny@gmail.com',
      name: 'Danny Danny',
      id: 1,
    },
    {
      email: 'bob@gmail.com',
      name: 'Bob Bob',
      id: 2,
    },
    {
      email: 'ana@gmail.com',
      name: 'Ana Ana',
      id: 3,
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }

  getCustomers() {
    return this.customers;
  }
}
