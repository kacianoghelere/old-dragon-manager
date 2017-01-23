import { Component, Input } from '@angular/core';

@Component({
  selector: 'check-glyph',
  template: `
    <i class="glyphicon glyphicon-{{ flag ? 'check' : 'unchecked' }}"></i>
  `,
  styleUrls: ['./check-glyph.component.scss']
})
export class CheckGlyphComponent {

  @Input('flag') flag: boolean = false;

  constructor() { }
}
