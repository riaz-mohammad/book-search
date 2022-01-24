import { Directive } from '@angular/core';

@Directive({
  selector: "wrapper",
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
      box-shadow: 2px 2px 15px 5px rgba(0, 0, 0, 0.06);
      background-color: rgba(0, 0, 0, 30%);
      `,
  },
})
export class WrapperDirective {}
