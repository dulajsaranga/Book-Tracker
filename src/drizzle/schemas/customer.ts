import { pgTable, pgTableCreator } from "drizzle-orm/pg-core";
import { serial, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { booking } from "./booking";

export const customer = pgTable('customer',{
    id: serial('id').primaryKey(),
    firstName: varchar('first_name').notNull(),
    lastName: varchar('last_name').notNull(),
    email: varchar('email').notNull(),
    contactNo: varchar('contact_no').notNull(),
});

export const customerRelations = relations(customer, ({ many}) => ({
    booking: many(booking)
}));