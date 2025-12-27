import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ItemCarrinho } from '../models/item-carrinho.model';
import { Produto } from '../models/produto.model';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private apiUrl = 'http://localhost:3000/carrinho';

  constructor(private http: HttpClient) { }

  getItensCarrinho(): Observable<ItemCarrinho[]> {
    return this.http.get<ItemCarrinho[]>(this.apiUrl);
  }


  adicionarAoCarrinho(produto: Produto): Observable<any> {

  return this.getItensCarrinho().pipe(
    switchMap(itensAtuais => {
      let itemExistente = itensAtuais.find(i => i.produto.id === produto.id);

      if (itemExistente) {

        itemExistente.quantidade++;
        itemExistente.subtotal = itemExistente.quantidade * itemExistente.produto.preco;


        return this.http.put(`${this.apiUrl}/${itemExistente.id}`, itemExistente);
      } else {

        const novoItem: ItemCarrinho = {
          produto: produto,
          quantidade: 1,
          subtotal: produto.preco
        };

        return this.http.post(this.apiUrl, novoItem);
      }
    })
  );
  }

  limparCarrinho(): Observable<any> {
   return this.getItensCarrinho().pipe(
 
      switchMap(itens => {
        if (itens.length === 0) {

          return of(null);
        }


        const deleteRequests = itens.map(item =>
          this.http.delete(`${this.apiUrl}/${item.id}`)
        );

        return forkJoin(deleteRequests);
      })
    );
  }

  calcularTotal(itens: ItemCarrinho[]): number {
    return itens.reduce((total, item) => total + item.subtotal, 0);
  }
}

import { forkJoin } from 'rxjs';
