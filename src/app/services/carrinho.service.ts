import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from '../data/dataFake';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = []

  constructor() { }

  obterCarrinho() {
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]")
    return this.itens
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho) {
    this.itens.push(produto)
    localStorage.setItem("carrinho", JSON.stringify(this.itens))
  }

  limparCarrinho() {
    this.itens = []
    localStorage.clear()
  }

  removerProdutoCarrinho(id:number) {
    this.itens = this.itens.filter(i => i.id !== id)
    localStorage.setItem("carrinho", JSON.stringify(this.itens))
  }
}
