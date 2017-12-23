import { Component, Input } from '@angular/core';

@Component({
  selector: 'glyph',
  template: `<i class="glyphicon glyphicon-{{icon}}"></i>`,
  styleUrls: ['./glyph.component.css']
})
export class GlyphComponent {

  @Input('icon') icon: string = '';

  constructor() { }
}
