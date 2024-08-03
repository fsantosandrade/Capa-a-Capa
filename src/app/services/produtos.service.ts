import { Injectable } from '@angular/core';
import { IProduto, produtos } from '../data/dataFake';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos

  constructor() { }

  getAll() {
    return this.produtos
  }

  getOne(produtoId: number) {
    return this.produtos.find(produto => produto.id == produtoId)
  }
}
