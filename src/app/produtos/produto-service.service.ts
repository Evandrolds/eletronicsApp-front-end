import { ProdutosModel, produtos } from './model/prdutos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProdutoServiceService {
  produtos: ProdutosModel[] = produtos;
  constructor() {}
  getAll() {
    return produtos;
  }
  getOne(produtoId: number) {
    return this.produtos.find((produto) => produto.id == produtoId);
  }
  findByName(nome: string) {
    if (nome != null) {
      return produtos.find((nome1) => (nome1.nome = nome));
    } else return null;
  }
}
