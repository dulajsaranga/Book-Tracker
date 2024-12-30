import { Injectable, Inject } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import * as schema from 'src/drizzle/schemas';

@Injectable()
export class RoomsService {
        constructor(
            @Inject(DrizzleAsyncProvider)
            private readonly db: NodePgDatabase<typeof schema>
        ) {}

        async getRooms() {
            return await this.db.select().from(schema.room);
        }
}
