import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { OneService } from 'src/app/services/one.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  constructor(private router: Router, private oneservice : OneService) { }

  public carsData = [];

  ngOnInit(): void {
    this.oneservice.getData().subscribe((data)=> this.carsData=data);
  }

  onSendTwo(){
    this.oneservice.setMessageFromOne(this.carsData);
    this.router.navigate(['/two'])
  }

}
