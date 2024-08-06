import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';
import { IProdutoCarrinho } from '../data/dataFake';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = []

  constructor(public carrinho: CarrinhoService, private route: Router) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinho.obterCarrinho()
  }

  removeItem(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(i => i.id !== produtoId)
    this.carrinho.removerProdutoCarrinho(produtoId)
  }

  obterTotal() {
    let total = 0
    this.itensCarrinho.forEach(i => total += i.preco * i.quantidade)
    return total.toFixed(2)
  }

  comprar() {
    alert("Parabéns sua compra foi finalizada e seus pedidos estão sendo processados!")
    this.carrinho.limparCarrinho()
    this.route.navigate(["produtos"])
  }
}
