import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-us-item',
  templateUrl: './about-us-item.component.html',
  styleUrls: ['./about-us-item.component.css']
})
export class AboutUsItemComponent {
  @Input() icon: string = ''
  @Input() title: string = ''
  @Input() desc: string = ''
  @Input() anchor: any = {}

  constructor() { }
}