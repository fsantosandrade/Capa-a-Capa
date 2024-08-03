import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from 'src/app/data/dataFake';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined
  quantidade:number = 1

  constructor( private produtosService: ProdutosService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const routeParamns = this.route.snapshot.paramMap
    const produtoId = Number(routeParamns.get("id"))

    this.produto = this.produtosService.getOne(produtoId)
  }

}
