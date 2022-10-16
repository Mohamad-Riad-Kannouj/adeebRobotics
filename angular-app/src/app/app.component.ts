import { Component, OnInit } from '@angular/core';
import { ApiCallerService } from './api-caller.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  about: any = []
  services: any = []
  products: any = []


  constructor(private http: ApiCallerService) { }

  ngOnInit(): void {
    this.subscribeData()
  }

  subscribeData() {
    this.http.getData().subscribe((e: any) => {
      this.about = e[0]
      this.services = e[1]
      this.products = e[2]
    })
  }
}
