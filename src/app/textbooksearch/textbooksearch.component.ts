import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Textbook } from './textbook.model';
import { TextbookService } from './textbook.service';

@Component({
  selector: 'app-textbooksearch',
  templateUrl: './textbooksearch.component.html',
  styleUrls: ['./textbooksearch.component.scss']
})
export class TextbooksearchComponent implements OnInit, OnDestroy {

  found: false;
  textbook: Textbook[] = [];
  title = '';
  author = '';
  isbn = 0;
  data: Textbook = {
    isbn: '',
    title: '',
    author: '',
    price: 0,
  }
  private postsSub: Subscription;
  
  constructor(public postsService: TextbookService) { }

  ngOnInit() {
  
    // this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Textbook[]) => {
        console.log("client side: ", posts);
        this.textbook = posts;
      });
  }

searchBook(){
  this.postsService.getPosts();
}
  
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
  }



