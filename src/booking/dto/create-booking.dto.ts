export class CreateBookingDto {
    customerId: number;
    roomId: number;
    bookingDateFrom: string;
    bookingDateTo: string;
    bookingType: string;
    bookingAmount: number;
}