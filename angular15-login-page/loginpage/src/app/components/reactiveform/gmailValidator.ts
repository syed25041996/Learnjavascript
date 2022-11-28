import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function gmailValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        const pattern = /^(.+)@gmail.com/.test(value)

        // const hasUpperCase = /[A-Z]+/.test(value);

        // const hasLowerCase = /[a-z]+/.test(value);

        // const hasNumeric = /[0-9]+/.test(value);

        // const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

        return !pattern ? {emailValid:true}: null;
    }
}