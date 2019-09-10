import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
  selectedChoice : string;
  choices = [
    'plan 1: one month for $600',
    'plan 2: one semester for 5% discount',
  ];
  constructor() { }

  ngOnInit() {
  }



}
