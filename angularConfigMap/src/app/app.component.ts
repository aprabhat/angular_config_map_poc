import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  env!: string;

  constructor(private readonly http: HttpClient) {
    this.http.get('/assets/config/tenant-env-config.json').subscribe((data) => {
      console.log(JSON.parse(JSON.stringify(data)));
      this.env = JSON.parse(JSON.stringify(data))["tenant-env"];
    });
  }
}
