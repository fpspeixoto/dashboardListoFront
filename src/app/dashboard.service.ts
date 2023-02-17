import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'https://example.com/api'; // substitua com a URL da sua API

  constructor(private http: HttpClient) { }

  updateStatus(id: number, status: string): Observable<any> {
    const url = `${this.apiUrl}/network/${id}`;
    return this.http.put(url, { status });
  }
}
