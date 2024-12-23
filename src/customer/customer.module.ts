import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { drizzleProvider } from 'src/drizzle/drizzle.provider';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService, ...drizzleProvider]
})
export class CustomerModule {}
