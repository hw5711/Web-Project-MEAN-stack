import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { AccountComponent } from './account/account.component';
import { TextbooksearchComponent } from './textbooksearch/textbooksearch.component';
import { ElectionComponent } from './election/election.component';
import { MealComponent } from './meal/meal.component';
import { ActivitiesComponent } from './activities/activities.component';
import { BusComponent } from './bus/bus.component';
import { FindrmComponent } from './findrm/findrm.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    AccountComponent,
    TextbooksearchComponent,
    ElectionComponent,
    MealComponent,
    ActivitiesComponent,
    BusComponent,
    FindrmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ActivatedRoute,
    Router,
    AppRoutingModule,
    RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
