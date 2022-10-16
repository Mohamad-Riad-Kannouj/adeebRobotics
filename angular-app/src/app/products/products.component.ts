import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() products: any = []
  id: number = 0

  constructor() { }

  changeId(id: number) {
    this.id = id
  }

}