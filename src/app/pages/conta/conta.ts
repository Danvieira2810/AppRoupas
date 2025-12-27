import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContaService } from '../../servicos/conta-service';

@Component({
  selector: 'app-conta',
  imports: [CommonModule, FormsModule],
  templateUrl: './conta.html',
  styleUrl: './conta.css',
  standalone: true,
})
export class Conta {

  conta = {
    nome: '',
    email: '',
    senha: ''
  };

  enviado = false;
  erro = false;

  constructor(private contaService: ContaService) {}

  enviar(form: NgForm) {


    if (form.invalid) {
      this.erro = true;
      this.enviado = false;
      return;
    }

    this.erro = false;

    this.contaService.enviarConta(this.conta).subscribe(() => {
      this.enviado = true;
      this.conta = { nome: '', email: '', senha: '' };
      form.resetForm(); 
    });
  }
}
