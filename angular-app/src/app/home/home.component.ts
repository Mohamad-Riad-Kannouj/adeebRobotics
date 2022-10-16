import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private viewportScroller: ViewportScroller) { }

  onClickScroll(elementId: string): void {
    let el: any | null = document.getElementById(elementId)
    let position: number = parseInt(el.offsetTop) - 48;
    this.viewportScroller.scrollToPosition([0, position]);
  }
}