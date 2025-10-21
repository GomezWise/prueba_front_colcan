import { Component, OnInit } from '@angular/core'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Users } from '../interfaces/users';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,  
    RouterLink       
  ],
  templateUrl: './listado.html',
  styleUrls: ['./listado.css']  
})
export class Listado implements OnInit {
  Datausers: Users[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    this.http.get<Users[]>(url).subscribe({
      next: (data) => {
        this.Datausers = data;
        console.log('Usuarios cargados:', this.Datausers);
      },
      error: (error) => {
        console.error('Error al consumir el API:', error);
      }
    });
  }
}
