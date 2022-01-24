import { Book } from './../book.service';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <ng-content></ng-content>
     `,
  styles: [
    `
       :host {
        display: flex;
        width: 80%;
        border-radius: 10px;
        background: rgba(0, 0, 0, 30%);
        cursor: pointer;
        transition: all 300ms ease;
        position: relative;
        &:hover {
          background: rgba(0, 0, 0, 45%);
        }

        &.expand {
          height: 600px;
          /* box-shadow: 1px 1px 20px 10px rgba(0, 0, 0, 0.2); */
        }
      }
      

    `,
  ],
})
export class CardComponent {
  cardExpanded!: boolean;
  @HostListener('click')
  onClick(): void {
    this.cardExpanded = !this.cardExpanded;
    }
  @Input() books!: Book[];
}
