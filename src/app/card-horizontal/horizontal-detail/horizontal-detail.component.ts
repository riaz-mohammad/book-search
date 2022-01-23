import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-horizontal-detail',
  template: `
    <h5>{{ title | uppercase }}</h5>
    <p>
      {{ description | slice: 0:150 }}
      ...
    </p>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        width: 85%;
        color: white;
        padding: 10px;
        overflow: hidden;
        transition: all 200ms ease;
        transform: scale(0.9);
        color: rgba(255, 255, 255, 0.7);
        &:hover {
          color: rgba(255, 255, 255, 0.9);
        }
      }

      p {
        font-size: 12px;
      }
    `,
  ],
})
export class HorizontalDetailComponent {
  @Input() title!: string;
  @Input() description!: string;
}
