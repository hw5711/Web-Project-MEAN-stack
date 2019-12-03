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
location='';
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
showQuantity=false;

subtotal: number = 0;
totalAamount: number;
select = false;
processed = false;

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
  
  this.isbn = 0;
  this.title = '';
  this.author = '';
  this.price = 0;
  this.location = '';
  this.showQuantity = false;
let req = { isbn: form.value.isbn, title: form.value.title, author: form.value.author };
this.http
  .post("http://localhost:3000/textbook/search", req)
  .subscribe(postData => {
    this.books = postData;
    this.isbn = this.books[0].isbn;
    this.title = this.books[0].title;
    this.author = this.books[0].author;
    this.price = this.books[0].price;
    this.location = this.books[0].location;
    // console.log("fdfd:", this.books[0].location.charAt(0) );
    if (this.books[0].location.charAt(0) === 'L'){
      this.showQuantity = true;
    }
});

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
      // console.log("res is :", response);
    });
  this.processed = true;
}



//this function is used for create database
  saveBook(form: NgForm){
    let req = { isbn: form.value.isbn, title: form.value.title, author: form.value.author, price: form.value.price, location: form.value.location };
    this.http
    .post<{ message: string, postId: string }>
    ("http://localhost:3000/textbook/create", req)
      .subscribe(response => {
        // const id = responseData.postId;
        console.log("book post successed");
      });
  }

  }



