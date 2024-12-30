import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';
import { drizzleProvider } from 'src/drizzle/drizzle.provider';

@Module({
  controllers: [RoomsController],
  providers: [RoomsService, ...drizzleProvider]
})
export class RoomsModule {}
