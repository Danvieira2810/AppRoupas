import { Component } from '@angular/core';
import { Banner } from "../../componentes/banner/banner";
import { ProdutoDestaque } from "../produto-destaque/produto-destaque";
import { RoupasComponente } from "../../componentes/roupas-componente/roupas-componente";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Instagram } from '../instagram/instagram';

@Component({
  selector: 'app-home',
  imports: [Banner, Instagram,ProdutoDestaque, RoupasComponente, CommonModule, ],
  templateUrl: './home.html',
  styleUrl: './home.css',

})
export class Home {
  mostrarMenu = false;


}
