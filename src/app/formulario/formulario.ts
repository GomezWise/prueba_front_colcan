import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../interfaces/users';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.css']
})
export class Formulario implements OnInit {

  user: Users | null = null;
  loading = true;
  errorMsg = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.errorMsg = 'No se proporcionó un ID válido.';
      this.loading = false;
      return;
    }

    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    this.http.get<Users>(url).subscribe({
      next: (data) => {
        this.user = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener el usuario:', err);
        this.errorMsg = 'Error al obtener los datos del usuario.';
        this.loading = false;
      }
    });
  }
}
