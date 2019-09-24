import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { Textbook } from './textbook.model';
import { TextbookService } from './textbook.service';
import { LoginService } from "../login/login.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
//import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
//import { Buydialog } from './buydialog/buyDialog.component';

@Component({
  selector: 'app-textbooksearch',
  templateUrl: './textbooksearch.component.html',
  styleUrls: ['./textbooksearch.component.scss']
})
export class TextbooksearchComponent implements OnInit {

userId: string;

found: false;
textbook: Textbook[] = [];
title = '';
author = '';
isbn = 0;
price: number = 0;
quantity: number = 0;

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

subtotal: number = 0;
totalAamount: number;
select = false;

selectedbook: Textbook[];
private books: any;

constructor(
  public postsService: TextbookService,
  private http: HttpClient,
  private loginService: LoginService,
  public route: ActivatedRoute) { }

ngOnInit() {
  this.userId = this.loginService.getUserId();
  this.selectedbook = this.books;
  this.subtotal = this.price * this.quantity;
}

countSubtotal(){
  this.subtotal = this.price * this.quantity;
  this.select = true;
  if (this.subtotal >=200){
    this.subtotal = this.subtotal*0.9;
  }
}

searchBook(form: NgForm){
let req = { isbn: form.value.isbn, title: form.value.title, author: form.value.author };
this.http
  .post("http://localhost:3000/textbook/search", req)
  .subscribe(postData => {
    this.books = postData;
    //console.log("result: ", postData);
    // console.log("result: ", postData.toString);
    this.isbn = this.books[0].isbn;
    this.title = this.books[0].title;
    this.author = this.books[0].author;
    this.price = this.books[0].price;
});

console.log("need to finish this search function , mongoose query")
}


payBook(){
  let paymentInfo = {
    nameOnCard: this.nameOnCard,
    cardNum: this.cardNum,
    cvv: this.cvv,
    exp: this.exp,
    billingName: this.billingName,
    address: this.address,
    city: this.city,
    state: this.state,
    zipcode: this.zipcode,
    phone: this.phone,
    isbn: this.isbn,
    title: this.title,
    author: this.author,
    price: this.price,
    amount: this.price * this.quantity,
    creator: this.userId
  }
  this.http
    .post("http://localhost:3000/textbook/buy", paymentInfo)
    .subscribe(response => {
      // this.router.navigate(["/"]);
      console.log("res is :", response);
    });
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



