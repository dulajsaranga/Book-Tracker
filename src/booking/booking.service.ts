import { Injectable, Inject } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import * as schema from 'src/drizzle/schemas';
import { CreateBookingDto } from './dto/create-booking.dto';
import { eq, desc } from 'drizzle-orm';

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

    async updateBooking(id: number, createBookingDto: CreateBookingDto) {
        return await this.db.update(schema.booking).set(createBookingDto).where(eq(schema.booking.id, id)).returning();
    }

    async getBookings() {
        const data = await this.db.select().from(schema.booking)
        .innerJoin(schema.customer, eq(schema.booking.customerId, schema.customer.id))
        .innerJoin(schema.room, eq(schema.booking.roomId, schema.room.id)).orderBy(desc(schema.booking.createdAt));

        return data.map(booking => ({
            ...booking.booking,
            customer: booking.customer,
            room: booking.room
        }))
    }
}
