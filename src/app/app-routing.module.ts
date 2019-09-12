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



const routes: Routes = [
  { path: 'search',component: SearchComponent },
  { path: 'account',component: AccountComponent},
  { path: 'textbook',component: TextbooksearchComponent},
  { path: 'election',component: ElectionComponent},
  { path: 'meal',component: MealComponent},
  { path: 'activities',component: ActivitiesComponent},
  { path: 'bus',component: BusComponent},
  { path: 'roommate',component: FindrmComponent},
  { path: "loginacc", component: LoginaccComponent },
  { path: "register", component: RegisterComponent },
  // { path: "login", component: LoginComponent },
  // { path: "signup", component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
