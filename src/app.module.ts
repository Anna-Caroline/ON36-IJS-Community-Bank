import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './accounts/accounts.module';
import { CustomersModule } from './customers/customers.module';
import { ManagersModule } from './managers/managers.module';
import { PeopleModule } from './people/people.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [AccountsModule, CustomersModule, ManagersModule, PeopleModule, PessoaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
