import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css']
})
export class ProdutoCardComponent {
  @Input() productID:number = 0
  @Input() productImage:string = ''
  @Input() productName:string = ''
  @Input() productPrice:number = 0
  @Input() productDesc:string = ''
}
