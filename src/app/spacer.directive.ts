import { Directive } from '@angular/core';

@Directive({
  selector: 'appSpacer',
  host: {
    style: `
    display: block;
    width: 100%;
    height: 50px;
    `
  }
})
export class SpacerDirective {}