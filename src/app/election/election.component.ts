import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from "../login/login.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { Election } from "./election.model";
// import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
// import { Label } from 'ng2-charts';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.scss']
})
export class ElectionComponent implements OnInit {
  select = false;
  voteFinished = false;
  selectedChoice: string;
  choices = [
    'John',
    'Mary',
    'Susan'
  ];
  voteInfo:Election;
  userId:string;
  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userId = this.loginService.getUserId();
  }

  vote(){
    let voteInfo = {
      name: this.selectedChoice
    }
    this.http
      .post("http://localhost:3000/election/", voteInfo)
      .subscribe(response => {
        console.log("vote seccessed!");
      });
    this.voteFinished = true;
    this.select = false;
  }

  show(){

  }

}
