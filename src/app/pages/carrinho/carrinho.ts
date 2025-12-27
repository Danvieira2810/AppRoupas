import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ItemCarrinho } from '../../models/item-carrinho.model';
import { Observable } from 'rxjs';
import { CarrinhoService } from '../../servicos/carrinho-service';

@Component({
  selector: 'app-carrinho',
  imports: [CommonModule],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho implements OnInit{
itensCarrinho: ItemCarrinho[] = [];
  totalCarrinho: number = 0;
  carregando: boolean = false;

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.carregarCarrinho();
  }
  carregarCarrinho(): void {
    this.carregando = true;
    this.carrinhoService.getItensCarrinho().subscribe({
        next: (itens) => {
            this.itensCarrinho = itens;
            this.totalCarrinho = this.carrinhoService.calcularTotal(itens);
            this.carregando = false;
        },
        error: (err) => {
            console.error('Erro ao carregar carrinho:', err);
            this.carregando = false;
        }
    });
  }
  finalizarCompra(): void {
    if (this.itensCarrinho.length === 0) {
        alert('O carrinho está vazio.');
        return;
    }
    this.carrinhoService.limparCarrinho().subscribe({
        next: () => {
            console.log('Carrinho limpo na API.');
            alert('Compra finalizada com sucesso! O carrinho foi resetado.');

            this.carregarCarrinho();
        },
        error: (err) => {
            console.error('Erro ao limpar carrinho:', err);
        }
    });
  }}
