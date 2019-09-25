import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
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
  person: any;

  constructor(
    private http: HttpClient,
    public route: ActivatedRoute) { }

  ngOnInit() {
  }

  searchrm(form: NgForm) {
    let req = { 
      date: form.value.date, 
      gender: form.value.gender, 
      highrent: form.value.highrent,
     };
    this.http
      .post("http://localhost:3000/findroommate", req)
      .subscribe(postData => {
        this.person = postData;
        console.log(this.person);
      });

    console.log("need to finish this search function , mongoose query")
  }


  createRoommate(form: NgForm) {
    let req = {
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      gender: form.value.gender,
      department: form.value.department,
      rent: form.value.rent,
      email: form.value.email,
      date: form.value.date
    };
    this.http
      .post("http://localhost:3000/findroommate/create", req)
      .subscribe(response => {
        console.log("book post successed: ", response);
      });
  }



}
