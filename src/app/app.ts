import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./componentes/header/header";
import { Home } from "./pages/home/home";
import { Banner } from "./componentes/banner/banner";
import { RoupasComponente } from './componentes/roupas-componente/roupas-componente';
import { ProdutoDestaque } from "./pages/produto-destaque/produto-destaque";
import { Footer } from './componentes/footer/footer';
import { Instagram } from './pages/instagram/instagram';
import { Conta } from './pages/conta/conta';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Instagram, Header, Footer ,Banner, RoupasComponente, ProdutoDestaque,Conta],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AppRoupas');
}
