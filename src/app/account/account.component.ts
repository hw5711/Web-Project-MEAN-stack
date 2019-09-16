import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import{ Account } from"./account.model";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  account: Account;

  constructor(private http: HttpClient){ }

  ngOnInit() {
    //getPost()
  }

  SaveUpdate(form: NgForm){
    let account = { 
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      address: String,
      city: String,
      state: String,
      zipcode: String,
      email: String,
      loginName: String,
      password: String,
      password2: String,
      creator: String,
    }

  }

  getPost(id: string) {
    return this.http.get<{
      _id: string;
      title: string;
      content: string;
      imagePath: string;
      creator: string;
    }>("http://localhost:3000/api/posts/" + id);
  }

  SavePost(){
    console.log("updated");
  }

}
