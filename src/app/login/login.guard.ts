import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { LoginService } from "./login.service";

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private authService: LoginService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        const isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            this.router.navigate(['/loginacc']);
        }
        return isAuth;
    }
}
