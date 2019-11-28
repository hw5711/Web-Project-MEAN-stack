import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { LoginService } from "../login.service";

@Component({
    templateUrl: "./loginacc.component.html",
    styleUrls: ["./loginacc.component.css"]
})
export class LoginaccComponent {
    isLoading = false;
    email;
    sent = false;

    constructor(
        private http: HttpClient,
        private loginService: LoginService,
        public route: ActivatedRoute) { }

    onLogin(form: NgForm) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.loginService.login(form.value.email, form.value.password);
    }

    retrivePassword(){
        // console.log("entered email: ",this.email); 
        this.loginService.retrivePassword(this.email);
        this.sent=true;
    }
}
