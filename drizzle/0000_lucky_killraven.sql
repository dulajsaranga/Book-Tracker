CREATE TABLE "booking" (
	"id" serial PRIMARY KEY NOT NULL,
	"customer_id" serial NOT NULL,
	"room_id" integer NOT NULL,
	"booking_date_from" date NOT NULL,
	"booking_date_to" date NOT NULL,
	"booking_type" varchar NOT NULL,
	"booking_amount" varchar NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "customer" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar NOT NULL,
	"last_name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"contact_no" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "room" (
	"id" serial PRIMARY KEY NOT NULL,
	"room_name" varchar NOT NULL,
	"room_type" varchar NOT NULL,
	"room_price" varchar NOT NULL
);
