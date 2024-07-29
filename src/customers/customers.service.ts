import { Injectable } from '@nestjs/common';
import { Customer } from './customer.model';
import { Account } from '../accounts/account.model';
import * as path from 'path';
import * as fs from 'fs';



@Injectable()
export class CustomersService {
    private readonly filePath = path.resolve('src/customers/customers.json');
    private idCount = 1;

    private readCustomers(): Customer[] {
        const data = fs.readFileSync(this.filePath, 'utf8');
        return JSON.parse(data) as Customer[];
    }

    private writeCustomers(customers: Customer[]): void {
        fs.writeFileSync(this.filePath, JSON.stringify(customers, null, 2), 'utf8');
    }

    createCustomer(name: string, cpf: string, address: string, contact: string, account: Account): Customer {
        const customers = this.readCustomers();
        const newCustomer: Customer = {
            id: customers.length > 0 ? customers[customers.length - 1].id + 1 : 1,
            name,
            cpf,
            address,
            contact,
            Account: [account]
        };
        customers.push(newCustomer);
        this.writeCustomers(customers);
        return newCustomer;
    }

    findById(id: number): Customer {
        const listOfCustomers = this.readCustomers();
        const customer = listOfCustomers.find(customer => customer.id === id);

        if (!customer) {
            throw new NotFoundException(`Customer with id ${id} not found`);
        }
        return customer;

    }

    findAll(): Customer[] {
        return this.readCustomers();
      }
    
    deleteCustomer(id: number): void {
        const listOfCustomers = this.readCustomers();
        const indexOfCustomer = listOfCustomers.findIndex(customer => customer.id === Number(id));

        if (indexOfCustomer < 0) {
            throw new NotFoundException('Customer not found');
          }

        listOfCustomers.splice(indexOfCustomer, 1);
        this.writeCustomers(listOfCustomers);
    }
}