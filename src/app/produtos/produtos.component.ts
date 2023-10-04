import { ProdutoServiceService } from './produto-service.service';
import { ProdutosModel } from './model/prdutos';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  produtos: ProdutosModel[] | undefined;
  constructor(
    private activateRoute: ActivatedRoute,
    private service: ProdutoServiceService
  ) {}
  ngOnInit(): void {
    const produtos = this.service.getAll();
    this.activateRoute.queryParamMap.subscribe((prod) => {
      const nome = prod.get('nome')?.toLowerCase();
      if (nome) {
        this.produtos = produtos.filter((prod) =>
          prod.nome.toLowerCase().includes(nome)
        );
        return;
      }
      this.produtos = produtos;
    });
  }
}
