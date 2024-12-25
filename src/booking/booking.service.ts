import { Injectable, Inject } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import * as schema from 'src/drizzle/schemas';
import { CreateBookingDto } from './dto/create-booking.dto';
import { eq } from 'drizzle-orm';

@Injectable()
export class BookingService {
    constructor(
        @Inject(DrizzleAsyncProvider)
        private readonly db: NodePgDatabase<typeof schema>
    ) {}

    async addBooking(createBookingDto: CreateBookingDto) {
        return await this.db.insert(schema.booking).values(createBookingDto).returning();
    }

    async deleteBooking(id: number) {
        return await this.db.delete(schema.booking).where(eq(schema.booking.id, id)).returning();
    }
}
