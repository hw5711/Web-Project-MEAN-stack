import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { Activities } from './activities.model';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

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

  ngOnInit() {

    this.dateObject = this.getDatesOfMonth(this.year, this.month)
  }

  addPosts(form: NgForm) {
    const post: Activities = { date: form.value.date, content: form.value.content, whos: form.value.whos, ID: form.value.ID };
    this.http
      .post<{ message: string, postId: string }>("http://localhost:3000/activities/add", post)
      .subscribe(responseData => {
        console.log("activities post successed");
      });
  }

  searchActivities(form: NgForm){
    let dateRange= {start: form.value.start, end: form.value.end   };
    console.log(form.value.start,form.value.end);
    this.http
      .post("http://localhost:3000/activities/search", dateRange)
      .subscribe(res => {
        //console.log("search reslut:", res);
      });
  }

  goPrev() {
    this.month--
    if (this.month == 0) {
      this.month = 12
      this.year--
    }
    this.dateObject = this.getDatesOfMonth(this.year, this.month)

  }
  goNext() {
    this.month++
    if (this.month == 13) {
      this.month = 1
      this.year++
    }
    this.dateObject = this.getDatesOfMonth(this.year, this.month)
  }
  getDatesOfMonth(year: number, month: number) {
    let datesArray: Array<number> = []
    let date = new Date(year, month - 1)
    let nowDay = new Date().getDate()
    let day = date.getDay()
    let lastDayOfLastMonth = new Date(year, month - 1, 0).getDate()
    for (let i = lastDayOfLastMonth; i > lastDayOfLastMonth - day; i--) {
      datesArray.unshift(i)
    }
    let lastDayOfNowMonth = new Date(year, month, 0).getDate()
    for (let index = 1; index <= lastDayOfNowMonth; index++) {
      datesArray.push(index)

    }
    let countOfNextMonth = 42 - lastDayOfNowMonth - day
    for (let index = 1; index <= countOfNextMonth; index++) {

      datesArray.push(index)
    }

    return {
      year: year,
      nowDay: nowDay,
      month: month,
      datesArray: datesArray
    }
  }
  events: string[] = [];

 
}

