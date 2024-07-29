import { Injectable } from '@nestjs/common';
import { Manager } from './manager.model';
import { Customer } from 'src/customers/customer.model';
import * as path from 'path';
import * as fs from 'fs';



@Injectable()
export class ManagersService {
    private readonly filePath = path.resolve('src/managers/managers.json');

    private readManagers(): Manager[] {
        const data = fs.readFileSync(this.filePath, 'utf8');
        return JSON.parse(data) as Manager[];
    }

    private writeManagers(managers: Manager[]): void {
        fs.writeFileSync(this.filePath, JSON.stringify(managers, null, 2), 'utf8');
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

    findAll(): Manager[] {
        return this.readManagers();
    }

    removeCustomer(id: number): void {
        const listOfCustomers = this.readCustomers();
        const indexOfCustomer = listOfCustomers.findIndex(customer => customer.id === Number(id));

        if (indexOfCustomer < 0) {
            throw new NotFoundException('Customer not found');
          }

        listOfCustomers.splice(indexOfCustomer, 1);
        this.writeCustomers(listOfCustomers);
    }
}
