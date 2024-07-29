import { Customer } from 'src/customers/customer.model';
import { Account } from 'src/accounts/account.model';

export class Manager {

    constructor(
        public managerId: number,
        public name: string,
        public Customer: Customer[]

    ) {}
}