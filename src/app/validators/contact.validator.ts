import { AbstractControl } from '@angular/forms';

export class ContactValidator {
  static phoneNumberValidator(control: AbstractControl) {
    const invalidError = { invalidPhoneNumber: true };

    const value: string = control.value;

    const numberRegexp = /^\+?[0-9]+$/;

    if (!value || !numberRegexp.test(value) || value.length > 15)
      return invalidError;

    return null;
  }
  static emailValidator(control: AbstractControl) {
    const invalidError = { invalidEmail: true };

    const value: string = control.value;

    const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!value || !emailRegexp.test(value)) return invalidError;

    return null;
  }
  static addressValidator(control: AbstractControl) {
    const invalidError = { invalidAddress: true };

    const value: string = control.value;

    if (!value || value.length > 100) return invalidError;

    return null;
  }
}
