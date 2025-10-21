import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users } from '../../app/interfaces/users';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  private localApiUrl: Users[] = [];
  private userSubject = new BehaviorSubject<Users[]>([]);

  
  constructor(private http: HttpClient) { 

    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.localApiUrl = JSON.parse(storedUsers);
      this.userSubject.next(this.localApiUrl);

    }
  }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);

  }
}
