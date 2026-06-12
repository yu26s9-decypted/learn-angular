import { Concert } from "./concert.model";


export interface Booking{
    id: number;
    customerName: string;
    customerEmail: string;
    concert: Concert;
    numberOfTickets: number;
    totalPrice: number;
    bookingDate: string;

}