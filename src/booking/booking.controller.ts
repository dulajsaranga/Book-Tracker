import { Controller, Post, Body, Delete, Query } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
    constructor(
        private readonly bookingService: BookingService
    ) {}

    @Post('/')
    addBooking(@Body() createBookingDto: CreateBookingDto) {
        return this.bookingService.addBooking(createBookingDto);
    }

    @Delete('/:id')
    deleteBooking(@Query('id') id: number) {
        return this.bookingService.deleteBooking(id);
    }
}
