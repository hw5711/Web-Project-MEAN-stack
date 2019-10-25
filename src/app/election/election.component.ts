import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from "../login/login.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { Election } from "./election.model";

import { map } from 'rxjs/operators';
import { Chart } from 'chart.js';

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
  votes;
  chart;

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userId = this.loginService.getUserId()
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

    this.http
      .get("http://localhost:3000/election/", this.votes)
      .subscribe(res => {
        console.log("vote seccessed and get poll", res);

        let counter1 = 0;
        let john = res['votes'].map(obj => {
          if(obj.name === 'John'){
            counter1++;
          }
          return counter1;
        });
        let johnvote : number;
        johnvote = counter1;

        let counter2 = 0;
        let mary = res['votes'].map(obj => {
          if (obj.name === 'Mary') {
            counter2++;
          }
          return counter2;
        });

        let maryvote: number;
        maryvote = counter2;

        let counter3 = 0;
        let susan = res['votes'].map(obj => {
          if (obj.name === 'Susan') {
            counter3++;
          }
          return counter3;
        });

        let susanvote: number;
        susanvote = counter3;

      console.log('susan: ', susanvote);
      console.log('john: ', johnvote);
      console.log('mary: ', maryvote);

    this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: ['John', 'Mary', 'Susan'],
          datasets: [{
            label: 'Votes result',
            data: [johnvote, maryvote, susanvote],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    });
  }

}
