import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log('Data service connected');
   }
   
  getPosts(){

    return this.http.get(`http://192.168.11.31:1880/bathroom/3`)
        .map(res => res.json());

}

}
