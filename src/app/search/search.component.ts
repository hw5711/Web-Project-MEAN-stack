import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { LoginService } from "../login/login.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Search } from "./search.model";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  found = false;
  department:string;
  firstname:string;
  lastname:string;

  person: any;
  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  searchBook(form: NgForm) {
    let req = { department: form.value.department, firstname: form.value.firstname, lastname: form.value.lastname };
    this.http
      .post("http://localhost:3000/searchpeople", req)
      .subscribe(postData => {
        this.person = postData;
        console.log(this.person);
      });

    console.log("need to finish this search function , mongoose query")
  }

  createPeople(form: NgForm){
    let req = { 
      firstname: form.value.firstname, 
      lastname: form.value.lastname, 
      department: form.value.department, 
      status: form.value.status,
      email: form.value.email, 
      phone: form.value.phone 
    };
    this.http
      .post("http://localhost:3000/searchpeople/create", req)
      .subscribe(response => {
        console.log("book post successed: ", response);
      });
  }

}
