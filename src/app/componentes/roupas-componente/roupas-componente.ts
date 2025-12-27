
import { Component, OnInit } from '@angular/core';
import { RoupaServico } from '../../servicos/roupa-servico';
import { Roupa } from '../../../../Roupa';
import { CommonModule } from '@angular/common';
import { AdminRoupas } from '../../pages/admin-roupas/admin-roupas';
import { CarrinhoService } from '../../servicos/carrinho-service';
import { Produto } from '../../models/produto.model';

@Component({
  selector: 'app-roupas-componente',
  imports: [CommonModule,],
  templateUrl: './roupas-componente.html',
  styleUrl: './roupas-componente.css',
  standalone: true,
})
export class RoupasComponente implements OnInit{
  roupas: Roupa[]=[];
  constructor(
    private roupaServico: RoupaServico,
    private carrinhoService: CarrinhoService
  ){}

  adicionarAoCarrinho(roupa: any): void {
  const produtoParaCarrinho: Produto = {
    id: roupa.id,
        nome: roupa.nome,
        preco: roupa.preco,
        imagem: roupa.imagem
  };


    this.carrinhoService.adicionarAoCarrinho(produtoParaCarrinho)

      .subscribe({
        next: (response) => {
          console.log('Item adicionado/atualizado', response);
          alert(`"${produtoParaCarrinho.nome}" adicionado ao carrinho!`);
        },
        error: (err) => {
          console.error('Erro ao adicionar ao carrinho:', err);
        }
      });
  }


  ngOnInit(): void{
    this.roupaServico.getRoupas().subscribe((dado)=>{
      this.roupas = dado;
      console.log(this.roupas);
    })
  }
}
