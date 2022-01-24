import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-list-wrapper",
  template: ` <ng-content select="[list]"></ng-content> `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(0, 0, 0, 40%);
        position: relative;
        top: -60px;
        border-radius: 30px;
        padding-top: 60px;
        overflow: hidden;
      }
    `,
  ],
})
export class ListWrapperComponent {}