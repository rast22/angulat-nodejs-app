import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {AuthServiceService} from "../services/auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registerForm!: FormGroup;
  constructor(private authService: AuthServiceService, private router: Router) {
    this.registerForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'username': new FormControl(null, Validators.required),
      'confirm-password': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    }, { validators: this.passwordMatchValidator});
  }

  async onSubmit() {
    try {
      console.log(this.registerForm.valid)
      let result = await this.authService.register(this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.username);
      if (result) {
        this.router.navigate(['/']);
      }
    } catch (e) {
      console.log(e);
    }
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const form = control as FormGroup;
    return form.get('password')?.value === form.get('confirm-password')?.value
      ? null : {'mismatch': true};
  }

  passwordsMatch() {
    return  this.registerForm.get('password')?.value === this.registerForm.get('confirm-password')?.value
  }
}
