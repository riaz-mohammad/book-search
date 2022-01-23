import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancel-button',
  template: `
    <button><ng-content></ng-content></button>
  `,
  styles: [`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
      width: 90px;
      height: 25px;
      cursor: pointer;
      transition: all 300ms ease;
      button {
        width: 100%;
        outline: none;
        color: white;
        border: none;
        background: none;
        cursor: pointer;
        
      }
    }
  `]
})
export class CancelButtonComponent {}
