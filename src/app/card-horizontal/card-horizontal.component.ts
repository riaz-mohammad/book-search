import { Book } from './../book.service';
import { Component, Input, OnInit } from '@angular/core';
import { horizontalImage } from '../animations';



@Component({
  selector: 'app-card-horizontal',
  template: `
    <app-image [source]="source" @horizontalImage></app-image>
    <app-horizontal-detail
      [title]="book.volumeInfo.title"
      [description]="book.searchInfo.textSnippet"
    >
    </app-horizontal-detail>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: space-between;
        height: 80px;
        width: 100%;
      }
      app-image{
        transition: transform 300ms ease;
      }
      app-image:hover{
        transform: scale(1.2);
      }
    `,
  ],
  animations: [horizontalImage],
})
export class CardHorizontalComponent {
  @Input() book!: Book;
  @Input() source!: string;
}
