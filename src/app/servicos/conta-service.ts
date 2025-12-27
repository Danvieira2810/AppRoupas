import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContaService {
   private apiUrl = 'http://localhost:3000/contas';

  constructor(private http: HttpClient) {}

  enviarConta(conta: any): Observable<any> {
    return this.http.post(this.apiUrl, conta);
  }

  listarConta(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deletarConta(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
