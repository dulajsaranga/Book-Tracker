import { Injectable, Inject } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import * as schema from 'src/drizzle/schemas';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    constructor(
        @Inject(DrizzleAsyncProvider)
        private readonly db: NodePgDatabase<typeof schema>
    ) {}

    async addCustomer(createCustomerDto: CreateCustomerDto) {
        return await this.db.insert(schema.customer).values(createCustomerDto).returning();
    }

    async getCustomers() {
        return await this.db.select().from(schema.customer);
    }

}
