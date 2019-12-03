import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { Activities } from './activities.model';
import { LoginService } from "../login/login.service";
import { ActivatedRoute } from "@angular/router";
import { MatDatepickerModule } from '@angular/material/datepicker';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';

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
  found = 0;

  sdate: Date;
  edate: Date;
  
  showdate=[];
  showinfo=[];
  showid=[];
  checker=[];
  joinEvent=[];
  registedEvents= [];
  registedDate =[];
  registedInfo=[];
  searchEvent: [];
  showSearch = false;
  showReservation = false;
  joined = false;
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

  searchActivities(){
    this.joined = false;
    this.showReservation = false;
    this.showdate = [];
    this.showinfo = [];
    this.checker = [];
    this.registedEvents = [];
    let req = {
      start: this.sdate,
      end: this.edate,
    };

    console.log(req.start, req.end);
    this.http
      .post("http://localhost:3000/activities/search", req)
      .subscribe(res => {
        var data = [];
        for (var i in res) {
          data.push(res[i]);
          let date = res[i].date.toString().substring(0,10);
          var postdate = {"date": date};
          var postinfo = {"info": res[i].info};
          var postid = {"id": res[i].id};
          var postchecker = { "check": res[i].id, "date": res[i].date, "info": res[i].info, "join":false};
          this.showdate.push(postdate.date);
          this.showinfo.push(postinfo.info);
          this.showid.push(postid.id);
          this.checker.push(postchecker);
        }
      });
    this.showSearch = true;
    this.registedEvents = [];
  }

  reservedEvent() {
    this.registedEvents = [];
    this.showdate = [];
    this.showinfo = [];
    this.checker = [];

    let req = {
      creator: this.userId,
    };
    this.http
      .post("http://localhost:3000/activities/reservation", req)
      .subscribe(response => {
        for (var i = 0; i < response[0].events.length; i++) {
          let date2 = response[0].events[i].date.toString().substring(0, 10);
          let infotemp = { "date": date2, "info": response[0].events[i].info };
          this.registedEvents.push(infotemp);
        }
      });
    this.showReservation = true;
    this.showSearch = false;
    this.showdate = [];
    this.showinfo =[];
    this.checker=[];
    this.joined = false;
  }

  changeCheckbox(event, index) {
    if(index.join == true){
      for (var i = 0; i < this.joinEvent.length; i++) {
        if (this.joinEvent[i].check == index.check){
            this.found = 1;
          }
        }
        if(this.found == 0){
          this.joinEvent.push(index);
        }
        this.found = 0;
    }
    if (index.join == false){
      for (var i = 0; i < this.joinEvent.length; i++) {
      }
    }
  }

  joinActivities(){
    let req = {
      events : this.joinEvent,
      creator: this.userId
    };
    this.http
      .post("http://localhost:3000/activities/join", req)
      .subscribe(response => {
        console.log("event join successed: ", response);
      });
    this.joined = true;
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
}