import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Concert } from "../app/models/concert.model";
import { API_BASE_URL } from "../app/config/config";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class ConcertService{
    constructor(private http: HttpClient) {}

    getUpcomingConcerts(): Observable<Concert[]>{ 
        return this.http.get<Concert[]>(`${API_BASE_URL}/concerts/upcoming`);
    }
}