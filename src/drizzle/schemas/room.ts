import { pgTable } from "drizzle-orm/pg-core";
import { serial, varchar, real } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { booking } from "./booking";

export const room = pgTable('room',{
    id: serial('id').primaryKey(),
    roomName: varchar('room_name').notNull(),
    roomType: varchar('room_type').notNull(),
    roomPrice: real('room_price').notNull(),
});

export const roomRelations = relations(room, ({ many}) => ({
    booking: many(booking)
}));