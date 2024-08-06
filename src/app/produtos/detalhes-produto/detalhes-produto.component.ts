import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto, IProdutoCarrinho } from 'src/app/data/dataFake';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { NotificacaoService } from 'src/app/services/notificacao.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined
  quantidade:number = 1

  constructor( private produtosService: ProdutosService, private route: ActivatedRoute, private notificacao: NotificacaoService, private carrinho: CarrinhoService ) { }

  ngOnInit(): void {
    const routeParamns = this.route.snapshot.paramMap
    const produtoId = Number(routeParamns.get("id"))

    this.produto = this.produtosService.getOne(produtoId)
  }

  adicionarAoCarrinho() {
    this.notificacao.notificar("Produto adicionado ao carrinho!")

    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }

    this.carrinho.adicionarAoCarrinho(produto)
  }

}
