import { ProdutoServiceService } from './../produtos/produto-service.service';
import { Component } from '@angular/core';
import { CarrrinhoserviceService } from '../carrinho/carrrinhoservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    public carrinhoService: CarrrinhoserviceService,
    public produtoService: ProdutoServiceService
  ) {}
}
