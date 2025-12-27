import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {

  private apiUrl = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) {}

  enviarContato(contato: any): Observable<any> {
    return this.http.post(this.apiUrl, contato);
  }

  listarContatos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deletarContato(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
