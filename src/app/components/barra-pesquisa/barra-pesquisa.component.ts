import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {
  descricao:string = ''

  constructor( private route: Router ) { }

  ngOnInit(): void {
  }

  pesquisar() {
    if(this.descricao) {
      this.route.navigate(["produtos"], { queryParams: { descricao: this.descricao }})
    }else {
      this.route.navigate(["produtos"])
    }
  }
}
