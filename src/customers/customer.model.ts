import { Account } from 'src/accounts/account.model';
import { Manager } from 'src/managers/manager.model';

export class Customer {

    private id: number;
    private name: string;
    private cpf: string;
    private address: string;
    private contact: string;
    private account: Account[];
    private manager: Manager;


    constructor(account: Account, manager: Manager) {
        this.account.push(account);
        this.manager = manager;
    }
}