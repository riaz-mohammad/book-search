import { Component, HostBinding, Input } from '@angular/core';

import { card, horizontal } from './../animations';
import { Book } from './../book.service';

@Component({
  selector: 'app-search-card',
  template: `
    <appSpacer></appSpacer>
    <ng-container *ngFor="let book of books; let i = index">
      <ng-container *ngIf="i < 8 && (book | bookThumbnail) as source">
        <app-card [class.highlight]="this.searchBook === book.volumeInfo.title" 
        (click)="expansion(book)" expand #card>
          <app-card-horizontal
            *ngIf="!card.cardExpanded && horizontal"
            [book]="book"
            [source]="source">
          </app-card-horizontal>

          <app-card-vertical
            *ngIf="card.cardExpanded && vertical"
            [book]="book">
          </app-card-vertical>
        </app-card>
      </ng-container>
    </ng-container>
  `,
  styles: [
    `
      :host {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        gap: 10px;
        box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.3);
        overflow: hidden;
      }
      :host.shrinkChildren {
        gap: 0;
      }
      app-card {
        height: 80px;
        &.highlight {
          background: rgba(0, 0, 0, 50%);
        }
      }
      :host.shrinkChildren > app-card:not(.expand) {
        height: 0px;
      }
    `,
  ],

  animations: [card, horizontal],
})
export class SearchCardComponent {
  @HostBinding('@card')
  @HostBinding('class.shrinkChildren')
  expanded!: boolean;

  horizontal = true;
  vertical = false;

  @Input() searchBook!: string;
  @Input() books!: Book[];

  expansion(book: Book): void {
    this.expanded = !this.expanded;
    this.horizontal = !this.horizontal;
    this.vertical = !this.vertical;
  }
}
