import {Component} from 'angular2/core';
import {FormBuilder, Validators} from 'angular2/common'

@Component({
  selector: 'login-page',
  templateUrl: './login.html'
})
export class loginForm {
  constructor(fb: FormBuilder) {

    this.loginForm = fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  doLogin(event) {
    // Show the value of the form
    var formData = this.loginForm.value;
    // { email: 'blah@blah.net', password: 'imnottelling1' }

    // Or, grab the value of one control:
    var email = this.loginForm.controls.email.value

    event.preventDefault();
  }
}
