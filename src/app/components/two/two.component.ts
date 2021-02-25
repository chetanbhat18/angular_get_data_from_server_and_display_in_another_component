import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { OneService } from 'src/app/services/one.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  constructor(private router: Router, private oneservice : OneService) { }

  public carsData = []; 

  ngOnInit(): void {
    this.oneservice.getData().subscribe((data)=> this.carsData=data);
  }

  goHome(){
    this.router.navigate(['/'])
  }
}
