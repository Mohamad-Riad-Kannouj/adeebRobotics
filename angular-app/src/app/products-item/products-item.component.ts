import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent {
  @Input() id: number = 0
  @Input() media: string = ''
  @Input() title: string = ''
  @Input() desc: string = ''

  constructor() { }

}