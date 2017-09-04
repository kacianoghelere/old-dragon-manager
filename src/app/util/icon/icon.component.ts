import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon',
  template: `<i class="fa fa-{{icon}} {{size}}"></i>`,
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  @Input('icon') icon: string = '';
  @Input('size') size: string = '';

  constructor() { }
}
