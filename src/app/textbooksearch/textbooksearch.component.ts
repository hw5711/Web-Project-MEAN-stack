import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { Textbook } from './textbook.model';
import { TextbookService } from './textbook.service';
//import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
//import { Buydialog } from './buydialog/buyDialog.component';

@Component({
  selector: 'app-textbooksearch',
  templateUrl: './textbooksearch.component.html',
  styleUrls: ['./textbooksearch.component.scss']
})
export class TextbooksearchComponent implements OnInit {

found: false;
textbook: Textbook[] = [];
title = '';
author = '';
isbn = 0;
price: number;
quantity: number;

nameOnCard: string;
cardNum: string;
cvv: string;
exp: string;
billingName: string;
address: string;
city: string;
state: string;
zipcode: string;
phone: string;
choice: string;
creator: string;

totalAamount: number;

private books: any;
private searchdata: Textbook[] = [];

constructor(
  private http: HttpClient,
  public postsService: TextbookService) { }

ngOnInit() {}

searchBook(form: NgForm){
let req = { isbn: form.value.isbn, title: form.value.title, author: form.value.author };
this.http
  .post("http://localhost:3000/textbook/search", req)
  .subscribe(postData => {
    this.books = postData;
    //console.log("result: ", postData);
    // console.log("result: ", postData.toString);
});

console.log("need to finish this search function , mongoose query")
}



//this function is used for create database
  saveBook(form: NgForm){
    let req = { isbn: form.value.isbn, title: form.value.title, author: form.value.author, price: form.value.price };
    this.http
    .post<{ message: string, postId: string }>
    ("http://localhost:3000/textbook/create", req)
      .subscribe(response => {
        // const id = responseData.postId;
        console.log("book post successed");
      });
  }

  }



