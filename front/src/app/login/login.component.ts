import { Component } from '@angular/core';
import {AuthServiceService} from "../services/auth-service.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(private authService: AuthServiceService, private router: Router) {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  async onSubmit() {
    try {
      let result = await this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
      if (result) {
        this.router.navigate(['/']);
      }
    } catch (e) {
      console.log(e);
    }
  }
}
