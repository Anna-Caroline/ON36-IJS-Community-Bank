import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ManagersService } from './managers.service';
import { Customer } from 'src/customers/customer.model';
import { Manager } from './manager.model';

@Controller('managers')
export class ManagersController {
    constructor(private readonly managersService: ManagersService) { }

    @Post()
    createCustomer(
        @Body('name') name: string,
        @Body('cpf') cpf: string,
        @Body('adress') adress: string,
        @Body('contact') contact: string,
        @Body('Account') account: Account
    ) {
        return this.managersService.createCustomer(name, cpf, address, contact, account);
    }

    @Get()
    findAll(): Gerente[] {
        return this.managersService.findAll();
    }

    @Delete(':id')
    deleteCustomer(@Param('id', ParseIntPipe) id: number): void {
        return this.managersService.deleteCustomer(id);
    }

}
