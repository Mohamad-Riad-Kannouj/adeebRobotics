import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private viewportScroller: ViewportScroller) { }

  onClickScroll(elementId: string): void {
    let el: any | null = document.getElementById(elementId)

    if (window.matchMedia("(max-width: 992px)").matches) {
      let position: number = parseInt(el.offsetTop) - 248;
      this.viewportScroller.scrollToPosition([0, position]);
      let btn: any | null = document.querySelector("button.navbar-toggler");
      let div: any | null = document.getElementById("navbarNav");

      btn.classList.toggle("collapsed");
      btn.setAttribute("aria-expanded", "false");
      div.classList.toggle("show");
      return
    }

    let position: number = parseInt(el.offsetTop) - 48;
    this.viewportScroller.scrollToPosition([0, position]);
  }
}