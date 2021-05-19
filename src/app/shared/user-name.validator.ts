import {AbstractControl, ValidatorFn} from '@angular/forms';

// VERSION 1 - hard coded value
// export function forbiddenNameValidator(control: AbstractControl): {[key: string]: any} | null {
//   const forbidden = /admin/.test(control.value);
//   return forbidden ? {'forbiddenName': {value: control.value}} : null;
// }

// VERSION 2 - accepts a parameter - uses a Factory function!
export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = forbiddenName.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  }
}
