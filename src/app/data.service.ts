// src/app/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:5000/api/data'; // Adjust this URL if needed
  signup(userData: { username: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }
  

  constructor(private http: HttpClient) { }

  // Method to get data from the backend
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Method to send data to the backend (if needed)
  postData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
