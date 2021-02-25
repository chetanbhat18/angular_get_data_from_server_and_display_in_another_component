import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cars } from './oneData';


@Injectable({
  providedIn: 'root'
})
export class OneService {

  private _url:string = "/assets/data/data.json";

  $sendtoTwo = new EventEmitter();
  public carsData = []; 

  constructor( private http : HttpClient ) { }

  getData():Observable<Cars[]>{
    return this.http.get<Cars[]>(this._url)
  }

  setMessageFromOne(data1: any[]){
    this.carsData = data1;
  }

  getMessageToTwo(){
    return this.carsData
  }

}
