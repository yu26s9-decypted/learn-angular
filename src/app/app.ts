import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-frontend-springboot-debug');

  private apiService = inject(ApiService);

  backendMessgae = signal('');

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
