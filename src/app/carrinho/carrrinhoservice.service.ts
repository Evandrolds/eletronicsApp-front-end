import { ProdutoCarrinho } from '../produtos/model/prdutos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarrrinhoserviceService {
  itens: ProdutoCarrinho[] = [];
  countCarrinho!: number;
  constructor() {}

  obterCarrinho() {
    /** Aqui estou salvando as informaçoes do carrinho
     *  no servidor do navegador,mas poderia gravar em um banco d dados no back-end.
     *  No localStorage o armazenamento é feito permanente.
     *  Estou utilizando o JSON.parse para converter uma strinh em um arquivo JSON
     *
     *  */
    this.itens = JSON.parse(localStorage.getItem('carrinho') || '[]');
    return this.itens;
  }
  /**
   * Metodo para adicionar um produto ao carrinho
   * e adicionar ao armazenamento LocalStorage
   */
  adicionarAoCarrinho(produto: ProdutoCarrinho) {
    this.itens.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }
  /**
   * Metodo para esvaziar o carrinho
   * e limpar o armazenamento LocalStorage
   */
  esvaziarCarrinho() {
    this.itens = [];
    localStorage.clear();
  }
  removerProdutosDoCarrinho(produtoId: number) {
    this.itens = this.itens.filter((produto) => produto.id !== produtoId);

    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }
}
