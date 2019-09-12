import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler
} from "@angular/common/http";
import { Injectable } from "@angular/core";

import { LoginService } from "./login.service";

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
    constructor(private authService: LoginService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.authService.getToken();
        const authRequest = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + authToken)
        });
        return next.handle(authRequest);
    }
}
