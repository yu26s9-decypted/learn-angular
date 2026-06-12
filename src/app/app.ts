import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Concert } from './models/concert.model';
import { ConcertService } from '../services/concert.service';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurrencyPipe, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('angular-frontend-springboot-debug');

  private apiService = inject(ApiService);
  private concertService = inject(ConcertService);

  backendMessgae = signal('');
  concerts = signal<Concert[]>([]);

  ngOnInit() {
    this.loadUpcomingConcerts();
  }

  loadUpcomingConcerts(){
    this.concertService.getUpcomingConcerts().subscribe({
      next: (concerts) => {
        this.concerts.set(concerts)
      },
      error: (err) => {
        console.error('Failed to load upcoming conserts.', err)
      }
    });
  }

  loadcheck(){
    console.log("button was clicked. start backend request")
    this.apiService.getApiResponse().subscribe({
      next: (message) => {
        console.log("recieved success")
        this.backendMessgae.set(message);
      },
      error: (err) => {
        console.error('Backend request failed:', err);
        this.backendMessgae.set("An error occured.")
      },
    })    
  }

   
}
