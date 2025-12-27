import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContatoService } from '../../servicos/contato-service';

@Component({
  selector: 'app-contato',
  imports: [CommonModule, FormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
  standalone: true,
})
export class Contato {

  contato = {
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  };

  enviado = false;
  erro = false;

  constructor(private contatoService: ContatoService) {}

  enviar(form: NgForm) {

    if (form.invalid) {
      this.erro = true;
      this.enviado = false;
      return;
    }

    this.erro = false;

    this.contatoService.enviarContato(this.contato).subscribe(() => {
      this.enviado = true;

   
      this.contato = { nome: '', email: '', telefone: '', mensagem: '' };

      form.resetForm();
    });
  }

}
