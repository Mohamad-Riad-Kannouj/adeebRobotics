import { Component, Input } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-services-item',
  templateUrl: './services-item.component.html',
  styleUrls: ['./services-item.component.css']
})
export class ServicesItemComponent {
  @Input() icon: string = ''
  @Input() title: string = ''
  @Input() desc: string = ''
  @Input() anchor: any = {}

  constructor(private viewportScroller: ViewportScroller) { }

  onClickScroll(elementId: string): void {
    let el: any | null = document.getElementById(elementId)
    let position: number = parseInt(el.offsetTop) - 48;
    this.viewportScroller.scrollToPosition([0, position]);
  }
}