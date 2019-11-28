import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import{ Account } from "./account.model";
import { LoginService } from "../login/login.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Router } from "@angular/router";



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})

@Injectable({ providedIn: "root" })
export class AccountComponent implements OnInit {

  account: Account;
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  email: string;
  loginName: string;
  password: string;
  password2: string;
  creator: string;
  updated = false;

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    public route: ActivatedRoute){ }

  ngOnInit() {
    this.userId = this.loginService.getUserId();
    this.getAccount();
  }

  //Update account info
  SaveUpdate(){
    let account = { 
      _id: this._id,
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      city: this.city,
      state: this.city,
      zipcode: this.zipcode,
      email: this.email,
      loginName: this.loginName,
      password: this.password,
      password2: this.password2,
      creator: this.userId
    };
    console.log("id is:", this._id);
    this.http
      .put("http://localhost:3000/account/" + this._id, account)
      .subscribe(response => {
        console.log("res is :" ,response);
      });
    this.updated = true;
  }

  //get default account default
  getAccount() {
    console.log("client side:", this.userId);
    this.http
      .get<{ message: string; account: Account }>(
        "http://localhost:3000/account/" + this.userId)
      .subscribe(AccountData => {
      this._id = AccountData["_id"];
      this.firstName = AccountData["firstName"];
      this.lastName = AccountData["lastName"];
      this.address = AccountData["address"];
      this.city = AccountData["city"];
      this.state = AccountData["state"];
      this.zipcode = AccountData["zipcode"];
      this.email = AccountData["email"];
      this.loginName = AccountData["loginName"];
      this.password = AccountData["password"];
      this.password2 = AccountData["password2"];
      this.creator = AccountData["creator"];
    })
  }


}
