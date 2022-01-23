import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-wrapper',
  template: `
    <ng-content select="[list]"></ng-content>
    `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
    }
  `]
})
export class ListWrapperComponent {}