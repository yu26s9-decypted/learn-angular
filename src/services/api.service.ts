import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_BASE_URL } from "../app/config/config";

@Injectable({
    providedIn: 'root'
})

export class ApiService{

    constructor(private http:HttpClient) {}

    getApiResponse(): Observable<string> {
        return this.http.get(`${API_BASE_URL}/check`, {
            responseType: 'text'
        })
        
    }
}