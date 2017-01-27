import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

/**
 * Custom validators to use everywhere.
 */
@Injectable()
export class ValidatorsService {
  //
  // Single field validators
  // ===========================================================================

  /**
   * Validates email format
   * @param  {FormControl} control Control field
   * @return {[type]}              [description]
   */
  emailValidator(control: FormControl): {[key: string]: any} {
    var emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (control.value && !emailRegexp.test(control.value)) {
      return { invalidEmail: true };
    }
  }

  //
  // Form group validators
  // ===========================================================================

  /**
   * Matching Passwords Validator
   * @param  {string} passwordKey Password
   * @param  {string} confirmationKey  Password confirmation
   * @return {[type]}             Validation
   */
  matchingPasswords(passwordKey: string, confirmationKey: string) {
    return (formGroup: FormGroup): {[key: string]: any} => {
      let password = formGroup.controls[passwordKey];
      let confirmation = formGroup.controls[confirmationKey];

      if (password.value !== confirmation.value) {
        formGroup.controls[confirmationKey].setErrors({mismatchedPasswords: true});
      } else {
        console.log(formGroup.errors);
      }

      return null;
    }
  }

}
