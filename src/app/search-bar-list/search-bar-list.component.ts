import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar-list',
  template: ` <p><ng-content></ng-content></p> `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        height: 40px;
        p {
          width: max-content;
          margin-left: 30px;
        }
      }
    `,
  ],
})
export class SearchBarListComponent {}
