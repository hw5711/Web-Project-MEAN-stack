import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'buydialog',
    templateUrl: './buydialog.component.html',
    styleUrls: [ './buydialog.component.scss']
})
export class Buydialog {

   // paymentInfo: Meal;
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
    title: string;

    constructor(
        private dialog: MatDialog,
        public dialogRef: MatDialogRef<Buydialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { 
            console.log("data in dialog is : ", data);
            this.title = data.name;
        }

    onNoClick(): void {
        this.dialogRef.close();
    }


    payBook() {
        //this.choice = this.selectedChoice;
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
            choice: this.choice,
           // creator: this.userId
        }
        console.log("pay");
        // this.http
        //     .post("http://localhost:3000/meal/buy", paymentInfo)
        //     .subscribe(response => {
        //         // this.router.navigate(["/"]);
        //         console.log("res is :", response);
        //     });

    }
}