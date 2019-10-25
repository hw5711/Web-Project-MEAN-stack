import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from "../login/login.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { Election } from "./election.model";


@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.scss']
})
export class ElectionComponent implements OnInit {
  @ViewChild('lineChart',{ static: false }) 
  private chartRef;
  chart: any;
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
      .subscribe(response => {
        console.log("vote seccessed and get poll");
      });

    // const chart = new CanvasJS.Chart('chartContainer', {
    //   animationEnabled: true,
    //   theme: 'theme1',
    //   data: [
    //     {
    //       type: 'column',
    //       dataPoints: dataPoints
    //     }
    //   ]
    // });
    // chart.render();

    // // Enable pusher logging - don't include this in production
    // Pusher.logToConsole = true;

    // var pusher = new Pusher('355bbcc1238451dd1d93', {
    //   cluster: 'ap2',
    //   encrypted: true
    // });

    // var channel = pusher.subscribe('os-poll');

    // channel.bind('os-vote', function (data) {
    //   dataPoints.forEach((point) => {
    //     if (point.label == data.os) {
    //       point.y += data.points;
    //       totalVotes += data.points;
    //       event = new CustomEvent('votesAdded', { detail: { totalVotes: totalVotes } });
    //       // Dispatch the event.
    //       document.dispatchEvent(event);
    //     }
    //   });
    //   chart.render();
    // });

  }

}
