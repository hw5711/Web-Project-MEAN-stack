import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

import { Textbook } from './textbook.model';

@Injectable({ providedIn: "root" })

export class TextbookService {
    private textbook: Textbook[] = [];
    private postsUpdated = new Subject<Textbook[]>();

    constructor(private http: HttpClient) { }

    getPosts() {
        this.http
            .get<{ message: string; posts: Textbook[] }>(
                "http://localhost:3000/textbook/search"
            )
            .subscribe(postData => {
                this.textbook = postData.posts;
                this.postsUpdated.next([...this.textbook]);
            });
    }

    getPostUpdateListener() {
        return this.postsUpdated.asObservable();
    }

}
