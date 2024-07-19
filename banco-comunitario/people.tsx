export class People {   
    id: number;
    name: string;
    birthDate: Date;
    cpf: string;
    phoneNumber: string;

    constructor(id: number, name: string, birthDate: Date, cpf: string, phoneNumber: string) {
        this.id = id;
        this.name = name;
        this.birthDate = birthDate;
        this.cpf = cpf;
        this.phoneNumber = phoneNumber;
    }
}