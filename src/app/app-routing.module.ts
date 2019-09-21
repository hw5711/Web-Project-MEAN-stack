import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './login/register/register.component';
import { LoginaccComponent } from './login/loginacc/loginacc.component';
import { SearchComponent } from './search/search.component';
import { AccountComponent } from './account/account.component';
import { TextbooksearchComponent } from './textbooksearch/textbooksearch.component';
import { ElectionComponent } from './election/election.component';
import { MealComponent } from './meal/meal.component';
import { ActivitiesComponent } from './activities/activities.component';
import { BusComponent } from './bus/bus.component';
import { FindrmComponent } from './findrm/findrm.component';

import { LoginGuard } from "./login/login.guard";
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent, canActivate: [LoginGuard] },
  { path: 'account', component: AccountComponent, canActivate: [LoginGuard]},
  { path: 'textbook', component: TextbooksearchComponent, canActivate: [LoginGuard]},
  { path: 'election', component: ElectionComponent, canActivate: [LoginGuard]},
  { path: 'meal', component: MealComponent, canActivate: [LoginGuard]},
  { path: 'activities', component: ActivitiesComponent, canActivate: [LoginGuard]},
  { path: 'bus', component: BusComponent, canActivate: [LoginGuard]},
  { path: 'roommate', component: FindrmComponent, canActivate: [LoginGuard]},
  { path: "loginacc", component: LoginaccComponent },
  { path: "register", component: RegisterComponent },
  // { path: "", component: HeaderComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard]
})
export class AppRoutingModule { }
