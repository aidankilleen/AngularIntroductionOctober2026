import { afterNextRender, Component, ElementRef, inject } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-wrapper',
  styleUrl: './wrapper.css',
  template: `
    <div>
      <ng-content/>
    </div>

  `,
})
export class Wrapper {
  host = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    afterNextRender(() => {
      const headings =
        this.host.nativeElement.querySelectorAll('h2');
      headings.forEach(h2 => h2.style.color='yellow');
    })
  }
}
