import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { Activities } from './activities.model';
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  private activities: Activities[] = [];

  date: Date;
  content: "party";
  whos: "student";
  ID: "stu0009";

  data: any
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  addPosts(form: NgForm) {
    const post: Activities = { date: form.value.date, content: form.value.content, whos: form.value.whos, ID: form.value.ID };
    this.http
      .post<{ message: string, postId: string }>("http://localhost:3000/activities/add", post)
      .subscribe(responseData => {
        // const id = responseData.postId;
        console.log("activities post successed");
      });
  }

  searchActivities(){
    console.log("search start");
    this.http
      .get<{ message: string; activities: Activities[] }>(
        "http://localhost:3000/activities/search"
    ).subscribe(postData => {
      this.activities = postData.activities;
      console.log("result: ", postData.message);
      // console.log("result: ", postData);
      // console.log("result: ", this.activities);
    });
    
  }

}
