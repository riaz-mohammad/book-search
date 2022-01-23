import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-description',
  template: `
    <h4>DESCRIPTION</h4>
    <p><ng-content></ng-content>
    <span>...</span>
    </p>  
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 80%;
        
      }

      h4 {
        color: white;
        text-decoration: underline;
      }

      p {
        color: rgba(255, 255, 255, 0.7);
        font-size: 12px;
      }
    `,
  ],
})
export class BookDescriptionComponent {}
