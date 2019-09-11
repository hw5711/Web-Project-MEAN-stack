import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:'';
  password:'';
  constructor() { }

  ngOnInit() {
  }

  login(){
    console.log("username is : ", this.username);
    console.log("password is : ", this.password);
  }

  register(){
    console.log("register for new user");
  }

  


}
