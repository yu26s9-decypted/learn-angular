import { Artist } from "./artist.model";
import { Venue } from "./venue.model";

export interface Concert{
    id: number;
    title: string;
    date: string;
    artist: Artist; //todo
    venue: Venue; // todo
    totalSeats: number;
    availableSeats: number;
    ticketPrice: number;
}