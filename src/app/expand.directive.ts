import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[expand]',
})
export class ExpandDirective {
  
  @HostBinding('class.expand')
  private expand!: boolean;
  

  @HostListener('click')
  onClick(): void {
    this.expand = !this.expand;
  }
}
