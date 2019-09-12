import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { LoginService } from "../login.service";

@Component({
    templateUrl: "./loginacc.component.html",
    styleUrls: ["./loginacc.component.css"]
})
export class LoginaccComponent {
    isLoading = false;

    constructor(public loginService: LoginService) { }

    onLogin(form: NgForm) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.loginService.login(form.value.email, form.value.password);
    }
}
