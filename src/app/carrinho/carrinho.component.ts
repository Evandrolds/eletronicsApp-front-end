import { CarrrinhoserviceService } from 'src/app/carrinho/carrrinhoservice.service';
import { Component, OnInit } from '@angular/core';
import { ProdutoCarrinho } from '../produtos/model/prdutos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  intensDoCarrinho: ProdutoCarrinho[] = [];
  precoTotal = 0;
  constructor(
    public carrinhoService: CarrrinhoserviceService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.intensDoCarrinho = this.carrinhoService.obterCarrinho();
    this.totalProdutosCarrinho();
  }
  /** Metodo para remover produtos do carrinho */
  removeProdutoCarrinho(produtoId: number) {
    this.intensDoCarrinho = this.intensDoCarrinho.filter(
      (item) => item.id !== produtoId
    );
    this.carrinhoService.removerProdutosDoCarrinho(produtoId);
    this.totalProdutosCarrinho();
  }
  /** Metodo para calcular o total do valores dos produtos */
  totalProdutosCarrinho() {
    this.precoTotal = this.intensDoCarrinho.reduce(
      (previus, current) => previus + current.preco * current.quantidade,
      0
    );
  }
  comprar() {
    alert('Parabens, compra finalizada com sucesso!');
    this.carrinhoService.esvaziarCarrinho();
    this.route.navigate(['produtos']);
  }
}
