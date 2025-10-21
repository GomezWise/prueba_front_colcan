import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Users } from '../interfaces/users';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'] 
})
export class Dashboard implements OnInit {

  userForm: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder, 
    private router: Router 
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      website: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        suite: ['', Validators.required],
        city: ['', Validators.required],
        zipcode: ['', Validators.required],
        geo: this.fb.group({
          lat: ['', Validators.required],
          lng: ['', Validators.required]
        })
      }),
      company: this.fb.group({
        name: ['', Validators.required],
        catchPhrase: ['', Validators.required],
        bs: ['', Validators.required]
      })
    });
  }

  ngOnInit() {

  }

  guardar() {
    if (this.userForm.invalid) {
      console.warn('❌ El formulario es inválido.');
      this.userForm.markAllAsTouched();
      return;
    }

    console.log('✅ Formulario válido. Guardando datos...');
    console.log(this.userForm.getRawValue());

    alert('Datos guardados con éxito (revisa la consola para ver los datos).');
    

    this.router.navigate(['/listado']);
  }
}
