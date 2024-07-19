import { Customer } from "./customer";

export class Account {

        id: number;
        number: string;
        private balance: number;
        status: boolean;
        customer: Customer;
    
        constructor(id: number, number: string, balance: number, status: boolean, customer: Customer) {
            this.id = id;
            this.number = number;
            this.balance = balance;
            this.status = status;
            this.customer = customer;
        }
    
        getBalance(): number {
            return this.balance;
        }

        setBalance(newBalance: number): void {
            this.balance = newBalance;
        }

}