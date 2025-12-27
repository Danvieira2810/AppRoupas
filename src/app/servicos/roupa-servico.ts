import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Roupa } from '../../../Roupa';



@Injectable({
  providedIn: 'root',
})
export class RoupaServico {
  urlAPI = 'http://localhost:3000/roupas'
  constructor(private http: HttpClient){}

  getRoupas(): Observable<Roupa[]> {
    return this.http.get<Roupa[]>(this.urlAPI);
  }

  deletarRoupas(roupa: Roupa):Observable<Roupa>{
    return this.http.delete<Roupa>(this.urlAPI + "/" + roupa.id);
  }
updateRoupa(id: number, dados: any) {
  return this.http.put(`http://localhost:3000/roupas/${id}`, dados);
}

deleteRoupa(id: number) {
  return this.http.delete(`http://localhost:3000/roupas/${id}`);
}
criarRoupa(roupa: any) {
  return this.http.post("http://localhost:3000/roupas", roupa);
}

}
