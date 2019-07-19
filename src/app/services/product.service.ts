import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get('http://usweb.dotomi.com/resources/swfs/cookies.json');
  }
}
