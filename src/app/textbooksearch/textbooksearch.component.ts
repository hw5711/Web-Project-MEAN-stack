import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-textbooksearch',
  templateUrl: './textbooksearch.component.html',
  styleUrls: ['./textbooksearch.component.scss']
})
export class TextbooksearchComponent implements OnInit {

  found: false;
  textbook: any = {};
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
