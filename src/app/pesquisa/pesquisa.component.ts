import { ProdutoServiceService } from './../produtos/produto-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosModel } from '../produtos/model/prdutos';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css'],
})
export class PesquisaComponent implements OnInit {
  produtos: ProdutosModel[] | undefined;
  nome = '';
  constructor(
    private activateRoute: ActivatedRoute,
    private service: ProdutoServiceService,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    if (this.nome) {
      this.route.navigate(['produtos'], { queryParams: { nome: this.nome } });
      return;
    }
    this.route.navigate(['produtos']);
  }
}
