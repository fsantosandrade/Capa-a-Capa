import { Component, OnInit } from '@angular/core';
import { IProduto } from '../data/dataFake';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined

  constructor( private produtosService: ProdutosService ) { }

  ngOnInit(): void {
    this.produtos = this.produtosService.getAll()
  }

}
