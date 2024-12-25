import { pgTable } from "drizzle-orm/pg-core";
import { serial, varchar, date, integer, timestamp, real } from "drizzle-orm/pg-core";
import { customer } from "./customer";
import { room } from "./room";
import { relations } from "drizzle-orm";

export const booking = pgTable('booking',{
    id: serial('id').primaryKey(),
    customerId: integer('customer_id').notNull(),
    roomId: integer('room_id').notNull(),
    bookingDateFrom: date('booking_date_from').notNull(),
    bookingDateTo: date('booking_date_to').notNull(),
    bookingType: varchar('booking_type').notNull(),
    bookingAmount: real('booking_amount').notNull(),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
});

export const bookingRelations = relations(booking, ({ one }) => ({
    customer: one(customer, {
        fields: [booking.customerId],
        references: [customer.id]
    }),
    room: one(room, {
        fields: [booking.roomId],
        references: [room.id]
    })
}))
