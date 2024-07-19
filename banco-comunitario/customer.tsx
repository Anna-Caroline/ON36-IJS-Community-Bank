import { People } from "./People";

export class Customer extends People {
    address: string;

    constructor(id: number, name: string, birthDate: Date, cpf: string, phoneNumber: string, address: string) {
        super(id, name, birthDate, cpf, phoneNumber);
        this.address = address;
    }
}
