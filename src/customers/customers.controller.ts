import { Body, Controller, Post, Get, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { Account } from 'src/accounts/account.model';
import { CustomersService } from './customers.service';
import { Customer } from './customer.model';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) { }

    @Post()
    createCustomer(
        @Body('name') name: string,
        @Body('cpf') cpf: string,
        @Body('adress') adress: string,
        @Body('contact') contact: string,
        @Body('Account') account: Account
    ) {
        return this.customersService.createCustomer(name, cpf, address, contact, account);
    }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.customersService.findById(id);
    }

    @Get()
    findAll(): Customer[] {
      return this.customersService.findAll();
    }
    
    @Delete(':id')
    deleteCustomer(@Param('id', ParseIntPipe) id: number): void {
        return this.customersService.deleteCustomer(id);
    }
}  
