import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { drizzleProvider } from 'src/drizzle/drizzle.provider';

@Module({
  controllers: [BookingController],
  providers: [BookingService, ...drizzleProvider]
})
export class BookingModule {}
