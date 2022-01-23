import { Component, Input, OnInit } from '@angular/core';

interface BookDetail {
  title: string;
  authors: string[];
  categories: string[];
  description: string;
  publishedDate: string;
  publisher: string;
  pageCount: number;
  language: string;
}


@Component({
  selector: 'app-book-detail',
  template: `
    <ng-content></ng-content>
    <div>
      <h4>{{bookDetail.title | uppercase}}</h4>
      <h6>Category: {{ bookDetail.categories[0]}}</h6>
      <h6>Author: {{ bookDetail.authors}}</h6>
      <h6>Language: {{bookDetail.language}}</h6>
      <h6>Pages: {{bookDetail.pageCount}}</h6>
      <h6>Published: {{bookDetail.publishedDate}}</h6>
      <h6>Publisher: {{bookDetail.publisher}}</h6>
    </div>
  `,
  styles: [
    ` 
      div{
        width: 100%;
        color: rgba(255, 255, 255, 0.5);
      }
      :host {
        display: flex;
        gap: 20px;
        
      }
        

      h4{
        padding: 0;
        margin: 0;
        color: white;
      }
    `,
  ],
})
export class BookDetailComponent {
  @Input() bookDetail!: BookDetail;
}
