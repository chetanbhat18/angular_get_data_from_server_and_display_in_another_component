import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cars } from './oneData';


@Injectable({
  providedIn: 'root'
})
export class OneService {

  //private _url:string = "/assets/data/data.json";
  //private _url:string = "http://localhost/angularApi/test.php/";

  private _url:string = "http://localhost/angularApi/1.py/";

  constructor( private http : HttpClient ) { 
    
  }

  getData(){
    return this.http.get<any>(this._url)
  }


}
