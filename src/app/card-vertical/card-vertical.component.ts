
import { Component, Input, } from '@angular/core';
import { Book } from '../book.service';
import { image, description } from './../animations';

@Component({
  selector: 'app-card-vertical',
  template: `
    <app-back-arrow></app-back-arrow>
    <app-book-detail [bookDetail]="book.volumeInfo">
      <app-image
        [source]="book.volumeInfo.imageLinks.thumbnail"
        @image
      ></app-image>
    </app-book-detail>
    <app-book-description @description>
      {{ book.volumeInfo.description | slice: 0:1100 }}
    </app-book-description>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 600px;
        position: relative;
        box-sizing: border-box;
        gap: 10px;
        overflow: hidden;
      }

      app-book-detail {
        width: 80%;
      }

      app-back-arrow {
        position: absolute;
        width: 50px;
        height: 30px;
        top: 10px;
        left: 10px;
      }

      app-image {
        width: 180px;
      }
    `,
  ],

  animations: [image, description],
})
export class CardVerticalComponent {
  @Input() book!: Book;
}
  

  