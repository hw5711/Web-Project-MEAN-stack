import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { Activities } from './activities.model';
import { LoginService } from "../login/login.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  userId: string;
  private activities: Activities[] = [];
  date: any;
  content: any;
  whos: any;
  ID: any;
  event: any;
  checked: any;
  data: any

  sdate: Date;
  edate: Date;

  private year: number;
  private month: number;
  private dateObject;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  constructor(private http: HttpClient,
    private loginService: LoginService,
    public route: ActivatedRoute) { 
    let date = new Date()
    this.year = date.getFullYear()
    this.month = date.getMonth() + 1
  }

  startDate: Date;
  finishDate: Date;

  ngOnInit() {
    this.userId = this.loginService.getUserId();
  }

  searchActivities(form: NgForm){
    let req = {
      start: this.sdate,
      end: this.edate,
    };
    this.http
      .post("http://localhost:3000/activities/search", req)
      .subscribe(response => {
        this.event = JSON.stringify(response);
        console.log(this.event);
        console.log("res is :", response);
      });
  }

  createActivity(form: NgForm){
    let req = {
      date: form.value.date,
      info: form.value.info,
      id: form.value.id
    };
    this.http
      .post("http://localhost:3000/activities/create", req)
      .subscribe(response => {
        console.log("event post successed: ", response);
      });
  }



  selectActivity(form: NgForm) {
    let req = {
      date: form.value.date,
      info: form.value.info,
      id: form.value.id
    };
    this.http
      .post("http://localhost:3000/activities/register", req)
      .subscribe(response => {
        console.log("event post successed: ", response);
      });
  }

}

