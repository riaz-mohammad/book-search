import { Directive } from '@angular/core';

@Directive({
  selector: 'wrapper',
  host: {
    style: `
      display: flex;
      flex-direction: column;
      border-radius: 30px;
      box-sizing: border-box;
      transition: all 300ms ease;
      width: 600px;
      height: 800px;
      position: relative;
      ` 
    ,
  },
})
export class WrapperDirective {}
