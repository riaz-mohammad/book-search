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
        height: 45px;
        width: 90%;
        p {
          width: max-content;
        }
      }
    `,
  ],
})
export class SearchBarListComponent {}
