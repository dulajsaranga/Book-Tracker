import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrizzleModule } from './drizzle/drizzle.module';
import { ConfigModule } from '@nestjs/config';
import { CustomerModule } from './customer/customer.module';
import { BookingModule } from './booking/booking.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),


    DrizzleModule,


    CustomerModule,


    BookingModule,


    RoomsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
