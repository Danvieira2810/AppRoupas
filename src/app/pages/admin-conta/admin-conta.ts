import { Component, OnInit } from '@angular/core';
import { ContaService } from '../../servicos/conta-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-conta',
  imports: [CommonModule],
  templateUrl: './admin-conta.html',
  styleUrl: './admin-conta.css',
  standalone: true,
})
export class AdminConta implements OnInit{

  contas: any[] = [];

  constructor(private contaService: ContaService) {}

  ngOnInit() {
    this.carregarContas();
  }

  carregarContas() {
    this.contaService.listarConta().subscribe(dados => {
      this.contas = dados;
    });
  }

  deletar(id: number) {
    this.contaService.deletarConta(id).subscribe(() => {
      this.carregarContas();
    });
  }

}
