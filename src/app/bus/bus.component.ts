import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss']
})
export class BusComponent implements OnInit {

  subtotal: number = 0;
  twoQ: number = 0;
  fourQ: number = 0;
  sixQ: number = 0;
  fortyQ: number =0;
  checked2: false;
  checked4: false;
  checked6: false;
  checked40: false;


  constructor() { 
    
  }

  ngOnInit() {
    this.subtotal = this.twoQ * (this.checked2 ? 2 : 0) +
      this.fourQ * (this.checked4 ? 4 : 0) +
      this.sixQ * (this.checked6 ? 6 : 0) +
      this.fortyQ * (this.checked40 ? 40 : 0);
   
  }
  display(){
    this.subtotal = this.twoQ * (this.checked2 ? 2 : 0) +
      this.fourQ * (this.checked4 ? 4 : 0) +
      this.sixQ * (this.checked6 ? 6 : 0) +
      this.fortyQ * (this.checked40 ? 40 : 0);
  }

}
