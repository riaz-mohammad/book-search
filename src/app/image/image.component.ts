import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  template: `<img [src]="source" />`,
  styles: [
    `
      :host {
        display: block;
      }
      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
      }
    `,
  ],
})
export class ImageComponent {
  @Input() source!: string;
}

  


