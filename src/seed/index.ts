import 'dotenv/config';
import { Pool } from 'pg';
import * as schema from 'src/drizzle/schemas';
import { drizzle } from 'drizzle-orm/node-postgres';

import { rooms } from './data';

const main = async () => {
  const pool = new Pool({
    host: process.env.DB_HOST,
    port: 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  const db = drizzle(pool, { schema });

  //Seed Rooms
  await db.insert(schema.room).values(rooms);

  await pool.end();
};

main()
  .then(() => {
    console.log('Seeding successfull');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Seeding error', err);
    process.exit(1);
  });
