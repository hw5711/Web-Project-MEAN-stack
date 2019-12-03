import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { LoginService } from "../login.service";

@Component({
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
   // isLoading = false;

    // firstName:string;

    constructor(public authService: LoginService) { }

    onSignup(form: NgForm) {
        if (form.invalid) {
            return;
        }

        // this.authService.createUser(form.value.email, form.value.password, this.firstName);
        this.authService.createUser(form.value.email, form.value.password);
    }
}
