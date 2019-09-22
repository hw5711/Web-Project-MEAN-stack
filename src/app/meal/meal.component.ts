import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from "../login/login.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { Meal } from "./meal.model";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})

@Injectable({ providedIn: "root" })
export class MealComponent implements OnInit {
  selectedChoice : string;
  select: boolean;
  //pay: boolean;
  userId: string;

  choices = [
    '$600/month',
    '$2280/semester(5% discount)',
  ];
  
  paymentInfo: Meal;
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
  choice: string;
  creator: string;

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userId = this.loginService.getUserId();
    this.select = false;
  }

  payMeal(){
    this.choice = this.selectedChoice;
    let paymentInfo ={
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
      choice: this.choice,
      creator: this.userId
    }
    this.http
      .post("http://localhost:3000/meal/buy", paymentInfo)
      .subscribe(response => {
        // this.router.navigate(["/"]);
        console.log("res is :", response);
      });
     
  }


}
