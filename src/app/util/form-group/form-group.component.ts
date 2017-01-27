import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {

  @Input() field: AbstractControl;

  constructor() { }

  ngOnInit() {
  }

  /**
   * [hasError description]
   * @return {boolean} [description]
   */
  get hasError(): boolean {
    return (this.field.touched && !this.field.pristine && !this.field.valid);
  }
}
