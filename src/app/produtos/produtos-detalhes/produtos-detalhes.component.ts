import { ActivatedRoute } from '@angular/router';
import { ProdutoServiceService } from './../produto-service.service';
import { ProdutoCarrinho, produtos } from './../model/prdutos';
import { Component, OnInit } from '@angular/core';
import { ProdutosModel } from '../model/prdutos';
import { NotificacaoService } from 'src/app/notificacao.service';
import { CarrrinhoserviceService } from 'src/app/carrinho/carrrinhoservice.service';

@Component({
  selector: 'app-produtos-detalhes',
  templateUrl: './produtos-detalhes.component.html',
  styleUrls: ['./produtos-detalhes.component.css'],
})
export class ProdutosDetalhesComponent implements OnInit {
  produtos: ProdutosModel | undefined;
  quantidade = 1;
  precoTotalProdutos!: number;

  /** Injetando os serviços  */
  constructor(
    private produtoService: ProdutoServiceService,
    private produtoRouter: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrrinhoserviceService
  ) {}

  ngOnInit(): void {
    /** Pegando os parametros de rotas */
    const routeParam = this.produtoRouter.snapshot.paramMap;
    /** Pegando o ID do parametro digitado e convertendo para numero */
    const produtoId = Number(routeParam.get('id'));
    /** Passando o ID para o produto correto */
    this.produtos = this.produtoService.getOne(produtoId);
  }
  adicionarAocarriho() {
    /** Passando a notificação do serviço do carrinho de compras */
    this.notificacaoService.notificar('Adicionado ao carrinho');
    const produto: ProdutoCarrinho = {
      /**Pegando todos os atributo do produto com ( ...this.produto ) */
      ...this.produtos!,
      quantidade: this.quantidade,
    };
    this.carrinhoService.adicionarAoCarrinho(produto);
  }
}
