import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  private _url: string = 'https://adeebrobotics.com/backend/'
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this._url + "data/")
  }

  send(body: string) {
    return this.http.post(this._url + "send/", body, this.httpOptions)
  }
}