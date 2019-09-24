import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";

import { Findrm } from './findrm.model';
import { Addrm } from './addrm.model';

import { LoginService } from "../login/login.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-findrm',
  templateUrl: './findrm.component.html',
  styleUrls: ['./findrm.component.scss']
})
export class FindrmComponent implements OnInit {
  userId: string;
  moveInDate: Date;
  gender: String;
  rangemin: Number;
  rangemax: Number;

  tempMoveInDate: Date;
  tempGender: String;
  tempRangeMin: Number;
  tempRangeMax: Number;
  tempID: String; // suppose to be an email

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.loginService.getUserId();
  }


  addData(){
    let req = { 
      moveInDate: this.tempMoveInDate,
      gender: this.tempGender,
      rangemin: this.tempRangeMin,
      rangemax: this.tempRangeMax,
      

     };
    this.http
      .post<{ message: string, postId: string }>
      ("http://localhost:3000/findrm/create", req)
      .subscribe(response => {
        // const id = responseData.postId;
        console.log("new rm create successed");
      });
  }
}
