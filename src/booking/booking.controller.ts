import { Controller, Post, Body, Delete, Param, Put, Get } from '@nestjs/common';
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
    deleteBooking(@Param('id') id: number) {
        return this.bookingService.deleteBooking(id);
    }

    @Put('/:id')
    updateBooking(@Param('id') id: number, @Body() createBookingDto: CreateBookingDto) {
        return this.bookingService.updateBooking(id, createBookingDto);
    }

    @Get('/')
    getBookings() {
        return this.bookingService.getBookings();
    }
}
