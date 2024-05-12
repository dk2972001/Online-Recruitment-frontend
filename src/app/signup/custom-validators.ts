import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function strongPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value;

    if (!value) {
      return null; // Don't validate empty values to allow other validators to handle this case
    }

    // Define regular expressions to match each required criteria
    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value);
    const isLongEnough = value.length >= 8;

    // Check if all criteria are met
    const isValid = hasUppercase && hasLowercase && hasNumber && hasSpecialCharacter && isLongEnough;

    // Return validation errors if criteria are not met
    return isValid ? null : { strongPassword: true };
  };
}
