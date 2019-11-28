import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from "../login/login.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Bus } from "./bus.model";

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

  userId: string;
  paymentInfo: Bus;
  nameOnCard: string;
  cardNum: string;
  cvv: string;
  exp: string;
  billingName: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  phone: string;
  processed = false;
  creator: string;

  choice: string[];

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userId = this.loginService.getUserId();
    this.subtotal = this.twoQ * (this.checked2 ? 2 : 0) +
      this.fourQ * (this.checked4 ? 4 : 0) +
      this.sixQ * (this.checked6 ? 6 : 0) +
      this.fortyQ * (this.checked40 ? 40 : 0);

      //this.choice: any[],
  }

  display(){
    this.subtotal = this.twoQ * (this.checked2 ? 2 : 0) +
      this.fourQ * (this.checked4 ? 4 : 0) +
      this.sixQ * (this.checked6 ? 6 : 0) +
      this.fortyQ * (this.checked40 ? 40 : 0);
  }

  payBus() {
    //this.choice = this.selectedChoice;
    let paymentInfo = {
      nameOnCard: this.nameOnCard,
      cardNum: this.cardNum,
      cvv: this.cvv,
      exp: this.exp,
      billingName: this.billingName,
      address: this.address,
      city: this.city,
      state: this.state,
      zipcode: this.zipcode,
      phone: this.phone,
      choice2: this.twoQ,
      choice4: this.fourQ,
      choice6: this.sixQ,
      choice40: this.fortyQ,
      amount: this.subtotal,
      creator: this.userId
    }
    console.log(paymentInfo);
    this.http
      .post("http://localhost:3000/bus/buy", paymentInfo)
      .subscribe(response => {
        console.log("res is :", response);
      });
    this.processed = true;
  }

}
