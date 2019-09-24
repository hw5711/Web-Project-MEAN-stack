import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatRippleModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatRadioModule,
  MatProgressSpinnerModule
} from "@angular/material";
import { ChartsModule } from 'ng2-charts';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
//import { MatDialogModule } from '@angular/material/dialog';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
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
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginaccComponent,
    SearchComponent,
    AccountComponent,
    TextbooksearchComponent,
    ElectionComponent,
    MealComponent,
    ActivitiesComponent,
    BusComponent,
    FindrmComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatRadioModule,
    MatCheckboxModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  //entryComponents: [Buydialog]
})
export class AppModule { }
