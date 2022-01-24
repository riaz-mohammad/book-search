import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-start-search-button",
  template: ` <ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 40%;
        left: 30%;
        width: 250px;
        height: 60px;
        border-radius: 30px;
        color: rgba(255, 255, 255, 0.6);
        cursor: pointer;
        background-color: rgba(0, 0, 0, 20%);
        font-size: 1rem;
        z-index: 100;
        &:hover {
          color: rgba(255, 255, 255, 0.8);
        }
      }
    `,
  ],
})
export class StartSearchButtonComponent {}
