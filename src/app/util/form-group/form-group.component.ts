import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {

  @Input('field') field: AbstractControl;

  constructor() { }

  ngOnInit() {
    this.field = this.field || new FormControl();
  }

  /**
   * [hasError description]
   * @return {boolean} [description]
   */
  get hasError(): boolean {
    return (this.field.touched && !this.field.pristine && !this.field.valid);
  }
}
