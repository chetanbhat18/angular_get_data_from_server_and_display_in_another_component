import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cars } from './oneData';


@Injectable({
  providedIn: 'root'
})
export class OneService {

  private _url:string = "/assets/data/data.json";

  constructor( private http : HttpClient ) { 
    
  }

  getData():Observable<Cars[]>{
    return this.http.get<Cars[]>(this._url)
  }


}
