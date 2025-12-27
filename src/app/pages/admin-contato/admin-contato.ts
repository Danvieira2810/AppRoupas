import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../../servicos/contato-service';

@Component({
  selector: 'app-admin-contato',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './admin-contato.html',
  styleUrl: './admin-contato.css',
})
export class AdminContato implements OnInit{
   contatos: any[] = [];

  constructor(private contatoService: ContatoService) {}

  ngOnInit() {
    this.carregarContatos();
  }

  carregarContatos() {
    this.contatoService.listarContatos().subscribe(dados => {
      this.contatos = dados;
    });
  }

  deletar(id: number) {
    this.contatoService.deletarContato(id).subscribe(() => {
      this.carregarContatos();
    });
  }

}
