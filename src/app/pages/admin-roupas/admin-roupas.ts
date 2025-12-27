
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Roupa } from '../../../../Roupa';
import { RoupaServico } from '../../servicos/roupa-servico';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-roupas',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-roupas.html',
  styleUrl: './admin-roupas.css',
  standalone: true,
})
export class AdminRoupas {
    roupas: Roupa[]=[];
  constructor(private roupaServico: RoupaServico,
  ){}



  ngOnInit(): void {
    this.carregarRoupas();
  }

  carregarRoupas() {
    this.roupaServico.getRoupas().subscribe(dados => {
      this.roupas = dados;
    });
  }

  excluir(id: number) {
    if (confirm("Tem certeza que deseja excluir esta roupa?")) {
      this.roupaServico.deleteRoupa(id).subscribe(() => {
        this.carregarRoupas();
      });
    }
  }

  editar(roupa: Roupa) {
    const novoNome = prompt("Novo nome:", roupa.nome);
    const novoPreco = prompt("Novo preço:", roupa.preco.toString());

    if (novoNome && novoPreco) {
      const dadosAtualizados = {
        ...roupa,
        nome: novoNome,
        preco: Number(novoPreco)
      };

      this.roupaServico.updateRoupa(roupa.id, dadosAtualizados)
        .subscribe(() => {
          this.carregarRoupas();
        });
    }
  }
  mostrarFormulario = false;

novoProduto = {
  nome: '',
  descricao: '',
  preco: 0,
  tipo: '',
  imagem: ''
};

toggleFormulario() {
  this.mostrarFormulario = !this.mostrarFormulario;
}

salvarNovoProduto() {
  this.roupaServico.criarRoupa(this.novoProduto).subscribe(() => {
    alert('Produto criado com sucesso!');
    this.toggleFormulario();
    this.carregarRoupas(); 
  });
}}



