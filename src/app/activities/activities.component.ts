import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { Activities } from './activities.model';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  private activities: Activities[] = [];
  date: any;
  content: any;
  whos: any;
  ID: any;

  data: any
  private year: number;
  private month: number;
  private dateObject;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  constructor(private http: HttpClient) { 
    let date = new Date()
    this.year = date.getFullYear()
    this.month = date.getMonth() + 1
  }

  startDate: Date;
  finishDate: Date;

  ngOnInit() {}

  searchActivities(form: NgForm){
    let dateRange= {start: form.value.start, end: form.value.end   };
    console.log(form.value.start,form.value.end);
    this.http
      .post("http://localhost:3000/activities/search", dateRange)
      .subscribe(res => {
        //console.log("search reslut:", res);
      });

      //after selecting ,the activity info will be added into the student account
  }

  createActivity(form: NgForm){
    let req = {
      date: form.value.date,
      info: form.value.info,
      id: form.value.id
    };
    this.http
      .post("http://localhost:3000/event/create", req)
      .subscribe(response => {
        console.log("event post successed: ", response);
      });
  }

}

